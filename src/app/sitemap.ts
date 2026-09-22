import type { MetadataRoute } from "next";
import { PAGE_SEO_DEFS } from "@/lib/seo-pages";
import { listModuleItems } from "@/lib/dynamic-cms";
import { getBaseUrl } from "@/lib/jsonld";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getBaseUrl();

  // 1. Static canonical routes
  const staticRoutes: MetadataRoute.Sitemap = PAGE_SEO_DEFS.map((def) => {
    const isHome = def.path === "/";
    const isCoreCommercial = [
      "/products",
      "/dealers",
      "/weight-bundle-calculator",
      "/construction-steel-calculator",
      "/trust-on-site",
    ].includes(def.path);

    return {
      url: `${baseUrl}${def.path === "/" ? "" : def.path}`,
      lastModified: new Date(),
      changeFrequency: isHome ? "daily" : isCoreCommercial ? "weekly" : "monthly",
      priority: isHome ? 1.0 : isCoreCommercial ? 0.9 : 0.8,
    };
  });

  // 2. Dynamic CMS routes
  const dynamicModules = ["products", "blogs", "projects", "mediaEvents", "careers"] as const;
  const dynamicRoutes: MetadataRoute.Sitemap = [];

  for (const mod of dynamicModules) {
    try {
      const items = await listModuleItems(mod, { status: "published", limit: 300 });
      for (const item of items) {
        if (!item.slug) continue;
        const lastMod = item.updated_at ? new Date(item.updated_at) : new Date();
        dynamicRoutes.push({
          url: `${baseUrl}/${mod}/${item.slug}`,
          lastModified: lastMod,
          changeFrequency: mod === "blogs" || mod === "products" ? "weekly" : "monthly",
          priority: mod === "products" ? 0.85 : mod === "blogs" ? 0.75 : 0.7,
        });
      }
    } catch (err) {
      console.warn(`Sitemap generation notice for module ${mod}:`, err);
    }
  }

  return [...staticRoutes, ...dynamicRoutes];
}

import type { MetadataRoute } from "next";
import { getBaseUrl } from "@/lib/jsonld";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getBaseUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin",
          "/admin/*",
          "/api/",
          "/setup-linking-vendor",
          "/popup-modules",
          "/map-feedback",
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

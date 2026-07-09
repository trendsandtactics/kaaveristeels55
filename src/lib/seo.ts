import type { Metadata } from "next";
import { getPageSeoEntry } from "@/lib/dynamic-cms";
import { resolveMediaUrl } from "@/lib/media";
import { getPageSeoDef } from "@/lib/seo-pages";

export { PAGE_SEO_DEFS, getPageSeoDef } from "@/lib/seo-pages";
export type { PageSeoDef } from "@/lib/seo-pages";

export async function buildPageMetadata(pageKey: string): Promise<Metadata> {
  const def = getPageSeoDef(pageKey);
  const fallbackTitle = def?.defaultTitle ?? "KAAVERI TMT BARS & STRUCTURAL";
  const fallbackDescription = def?.defaultDescription ?? "";

  let entry: Awaited<ReturnType<typeof getPageSeoEntry>> = null;
  try {
    entry = await getPageSeoEntry(pageKey);
  } catch {
    entry = null;
  }

  const title = entry?.title?.trim() || fallbackTitle;
  const description = entry?.description?.trim() || fallbackDescription;
  const keywords = entry?.keywords?.trim() || undefined;
  const ogImage = entry?.og_image ? resolveMediaUrl(entry.og_image, "") : "";

  const metadata: Metadata = {
    title,
    description,
    ...(keywords ? { keywords: keywords.split(",").map((k) => k.trim()).filter(Boolean) } : {}),
    openGraph: {
      title,
      description,
      ...(ogImage ? { images: [{ url: ogImage }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  };

  return metadata;
}

export function buildItemMetadata(item: Record<string, unknown>): Metadata {
  const title = (typeof item.meta_title === "string" && item.meta_title.trim()) || String(item.title ?? "");
  const rawDescription = (typeof item.meta_description === "string" && item.meta_description.trim())
    || String(item.short_description ?? "")
    || String(item.content ?? "").replace(/<[^>]+>/g, "").slice(0, 160);
  const description = rawDescription.slice(0, 300);
  const keywords = typeof item.meta_keywords === "string" && item.meta_keywords.trim() ? item.meta_keywords : undefined;
  const ogImage = resolveMediaUrl(item.og_image ?? item.cover_image ?? item.file_url, "");

  return {
    title,
    description,
    ...(keywords ? { keywords: keywords.split(",").map((k) => k.trim()).filter(Boolean) } : {}),
    openGraph: {
      title,
      description,
      ...(ogImage ? { images: [{ url: ogImage }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  };
}

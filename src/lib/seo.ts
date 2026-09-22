import type { Metadata } from "next";
import { getPageSeoEntry } from "@/lib/dynamic-cms";
import { resolveMediaUrl } from "@/lib/media";
import { getPageSeoDef } from "@/lib/seo-pages";

export { PAGE_SEO_DEFS, getPageSeoDef } from "@/lib/seo-pages";
export type { PageSeoDef } from "@/lib/seo-pages";

function getCleanSiteUrl(): string {
  const configured =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://www.kaaveristeels.co.in";
  return configured.endsWith("/") ? configured.slice(0, -1) : configured;
}

export async function buildPageMetadata(pageKey: string): Promise<Metadata> {
  const def = getPageSeoDef(pageKey);
  const siteUrl = getCleanSiteUrl();

  const fallbackTitle = def?.defaultTitle ?? "KAAVERI TMT BARS & STRUCTURAL | Premium Steel";
  const fallbackDescription =
    def?.defaultDescription ??
    "Strong, Durable, and Trusted Fe 550D TMT steel bars & structural steel products for all construction needs across Tamil Nadu.";

  let entry: Awaited<ReturnType<typeof getPageSeoEntry>> = null;
  try {
    entry = await getPageSeoEntry(pageKey);
  } catch {
    entry = null;
  }

  const title = entry?.title?.trim() || fallbackTitle;
  const description = entry?.description?.trim() || fallbackDescription;

  const keywords = entry?.keywords?.trim()
    ? entry.keywords
        .split(",")
        .map((k) => k.trim())
        .filter(Boolean)
    : def?.defaultKeywords || [
        "KAAVERI Steels",
        "TMT Steel Bars",
        "Fe 550D TMT Bars",
        "Construction Steel",
        "Steel Manufacturer Tamil Nadu",
        "Steel Reinforcement Bars",
        "TMT Bar Price",
      ];

  const canonicalPath = def?.path
    ? def.path.startsWith("/")
      ? def.path
      : `/${def.path}`
    : `/${pageKey}`;
  const canonicalUrl = `${siteUrl}${canonicalPath === "/" ? "" : canonicalPath}`;

  const defaultOgImage = `${siteUrl}/tmt1.png`;
  const rawOgImage = entry?.og_image ? resolveMediaUrl(entry.og_image, defaultOgImage) : defaultOgImage;
  const ogImageUrl = rawOgImage.startsWith("http") ? rawOgImage : `${siteUrl}${rawOgImage.startsWith("/") ? rawOgImage : `/${rawOgImage}`}`;

  const metadata: Metadata = {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "KAAVERI Steels",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
  };

  return metadata;
}

export function buildItemMetadata(
  item: Record<string, unknown>,
  module?: string,
  slug?: string
): Metadata {
  const siteUrl = getCleanSiteUrl();
  const title =
    (typeof item.meta_title === "string" && item.meta_title.trim()) ||
    String(item.title ?? "KAAVERI Steels");

  const rawDescription =
    (typeof item.meta_description === "string" && item.meta_description.trim()) ||
    String(item.short_description ?? "") ||
    String(item.content ?? "").replace(/<[^>]+>/g, "").slice(0, 160);
  const description = rawDescription.slice(0, 300);

  const keywords =
    typeof item.meta_keywords === "string" && item.meta_keywords.trim()
      ? item.meta_keywords.split(",").map((k) => k.trim()).filter(Boolean)
      : undefined;

  const rawImage = resolveMediaUrl(
    (item.og_image as string | null | undefined) ??
      (item.cover_image as string | null | undefined) ??
      (item.file_url as string | null | undefined),
    "/tmt1.png"
  );
  const ogImageUrl = rawImage.startsWith("http")
    ? rawImage
    : `${siteUrl}${rawImage.startsWith("/") ? rawImage : `/${rawImage}`}`;

  const itemSlug = slug || (typeof item.slug === "string" ? item.slug : "");
  const itemModule = module || (typeof item.module === "string" ? item.module : "");
  const canonicalUrl =
    itemModule && itemSlug ? `${siteUrl}/${itemModule}/${itemSlug}` : undefined;

  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    ...(canonicalUrl ? { alternates: { canonical: canonicalUrl } } : {}),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title,
      description,
      ...(canonicalUrl ? { url: canonicalUrl } : {}),
      siteName: "KAAVERI Steels",
      locale: "en_IN",
      type: itemModule === "blogs" ? "article" : "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
  };
}

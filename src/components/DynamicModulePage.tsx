"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { resolveMediaUrl } from "@/lib/media";

type DynamicItem = {
  id: number;
  title: string;
  slug: string;
  short_description?: string | null;
  content?: string | null;
  cover_image?: string | null;
  file_url?: string | null;
  video_url?: string | null;
  featured?: number | boolean;
  created_at?: string;
  extra_data?: string | Record<string, string> | null;
};

const ITEMS_PER_PAGE = 9;
const swrCache = new Map<string, DynamicItem[]>();

function formatModuleLabel(module: string): string {
  if (module === "mediaEvents") return "Media & Events";
  if (module === "csr") return "Corporate Social Responsibility";
  return module
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function formatModuleRoute(module: string): string {
  return module.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

export default function DynamicModulePage({
  module,
  heading,
  subtitle,
}: {
  module: string;
  heading: string;
  subtitle: string;
}) {
  const moduleLabel = useMemo(() => formatModuleLabel(module), [module]);
  const [items, setItems] = useState<DynamicItem[]>([]);
  const [q, setQ] = useState("");
  const [debouncedQ, setDebouncedQ] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>(
    module === "products" ? "TMT" : module === "mediaEvents" ? "Images" : "All"
  );
  const [activeSubCategory, setActiveSubCategory] = useState<string>("Bars");
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const categoryParam = params.get("category");
      if (categoryParam === "TMT" || categoryParam === "Structural" || categoryParam === "All") {
        setActiveCategory(categoryParam);
      }
    }
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedQ(q), 250);
    return () => clearTimeout(timeout);
  }, [q]);

  useEffect(() => {
    const controller = new AbortController();
    const cacheKey = `/api/public/content/${module}?q=${encodeURIComponent(debouncedQ)}&limit=1000`;
    const fetchUrl = `${cacheKey}&_t=${Date.now()}`;

    if (swrCache.has(cacheKey)) {
      setItems(swrCache.get(cacheKey)!);
      setLoading(false);
    } else {
      setLoading(true);
    }

    fetch(fetchUrl, { cache: "no-store", signal: controller.signal })
      .then((res) => res.json())
      .then((data) => {
        const fetched = data.data ?? [];
        swrCache.set(cacheKey, fetched);
        setItems(fetched);
      })
      .catch((err) => { if (err.name !== "AbortError") setItems([]); })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [module, debouncedQ]);

  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [activeCategory, activeSubCategory, debouncedQ]);

  const displayedItems = useMemo(() => {
    if (module === "products") {
      return items.filter((item) => {
        let category = "", subcategory = "";
        try {
          const extra = typeof item.extra_data === "string" ? JSON.parse(item.extra_data) : item.extra_data;
          category = extra?.category || "";
          subcategory = extra?.subcategory || "";
        } catch {}
        if (activeCategory !== "All" && category !== activeCategory) return false;
        if (activeCategory === "TMT") return subcategory === activeSubCategory;
        return true;
      });
    }
    if (module === "mediaEvents") {
      return items.filter((item) => {
        let mediaType = "image";
        try {
          const extra = typeof item.extra_data === "string" ? JSON.parse(item.extra_data) : item.extra_data;
          mediaType = extra?.media_type || "image";
        } catch {}
        if (activeCategory === "Images" && mediaType !== "image") return false;
        if (activeCategory === "Videos" && mediaType !== "video") return false;
        return true;
      });
    }
    return items;
  }, [items, module, activeCategory, activeSubCategory]);

  const featured = useMemo(() => displayedItems.filter((item) => item.featured).slice(0, 3), [displayedItems]);
  const paginatedItems = useMemo(() => displayedItems.slice(0, visibleCount), [displayedItems, visibleCount]);

  const brochurePdfUrlForItem = (item: DynamicItem): string => {
    const candidates: unknown[] = [item.file_url, item.cover_image];
    if (item.extra_data) {
      try {
        const parsed = typeof item.extra_data === "string" ? JSON.parse(item.extra_data) : item.extra_data;
        if (parsed && typeof parsed === "object") {
          const e = parsed as Record<string, unknown>;
          candidates.push(e.pdf_url, e.file, e.file_url, e.document_url, e.brochure_url, e.url);
        }
      } catch {}
    }
    for (const c of candidates) {
      if (typeof c === "string" && c.trim()) {
        const resolved = resolveMediaUrl(c, "");
        if (resolved) return resolved;
      }
    }
    const pdfMatch = (item.content || "").match(/https?:\/\/[^\s"']+\.pdf|\/api\/uploads\/\d+|\/[^\s"']+\.pdf/i);
    return pdfMatch ? resolveMediaUrl(pdfMatch[0], "") : "";
  };

  /* ─── TAB CONFIG ─── */
  const productTabs = ["TMT", "Structural"];
  const tmtSubTabs = ["Bars", "Rings"];
  const mediaTabs = ["Images", "Videos"];

  return (
    <main className="min-h-screen bg-white font-sans flex flex-col w-full overflow-x-hidden">

      {/* ══════════════════════════════
          HERO — Yellow band, flat & flush
      ══════════════════════════════ */}
      <section className="w-full bg-[#FFD500] pt-[96px] pb-12 px-6">
        <div className="max-w-[1200px] mx-auto">
          {/* Breadcrumb */}
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/50 mb-4">
            {moduleLabel}
          </p>

          {/* Page title */}
          <h1 className="font-black text-5xl md:text-6xl lg:text-[68px] text-black leading-[1.05] max-w-4xl">
            {heading}
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-black/60 text-[15px] font-medium max-w-2xl leading-relaxed">
            {subtitle}
          </p>

          {/* Search */}
          <div className="mt-8">
            <div className="relative w-full max-w-md">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-black/30 text-sm">🔍</span>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={`Search ${moduleLabel}…`}
                className="w-full rounded-full border border-black/10 bg-white pl-10 pr-5 py-3 text-sm text-black placeholder-black/40 outline-none focus:border-black/20 focus:ring-2 focus:ring-black/10 shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          FILTER TABS
      ══════════════════════════════ */}
      {(module === "products" || module === "mediaEvents") && (
        <div className="w-full border-b border-black/8 bg-white sticky top-[72px] z-40 px-6">
          <div className="max-w-[1200px] mx-auto py-4 flex flex-wrap items-center gap-3">
            {module === "products" && (
              <>
                {/* Main tabs */}
                <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
                  {productTabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => { setActiveCategory(tab); if (tab === "TMT") setActiveSubCategory("Bars"); }}
                      className={`px-5 py-1.5 rounded-md text-[13px] font-bold uppercase tracking-wider transition-all ${
                        activeCategory === tab
                          ? "bg-white text-red-600 shadow-sm"
                          : "text-black/50 hover:text-black"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Sub tabs */}
                {activeCategory === "TMT" && (
                  <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
                    {tmtSubTabs.map((sub) => (
                      <button
                        key={sub}
                        onClick={() => setActiveSubCategory(sub)}
                        className={`px-4 py-1.5 rounded-md text-[12px] font-bold uppercase tracking-wider transition-all ${
                          activeSubCategory === sub
                            ? "bg-black text-white shadow-sm"
                            : "text-black/50 hover:text-black"
                        }`}
                      >
                        {sub}
                      </button>
                    ))}
                  </div>
                )}
              </>
            )}

            {module === "mediaEvents" && (
              <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
                {mediaTabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveCategory(tab)}
                    className={`px-5 py-1.5 rounded-md text-[13px] font-bold uppercase tracking-wider transition-all ${
                      activeCategory === tab
                        ? "bg-white text-red-600 shadow-sm"
                        : "text-black/50 hover:text-black"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            )}

            <span className="ml-auto text-[13px] text-black/40 font-medium">
              {displayedItems.length} {displayedItems.length === 1 ? "result" : "results"}
            </span>
          </div>
        </div>
      )}

      {/* ══════════════════════════════
          CONTENT GRID
      ══════════════════════════════ */}
      <section className="max-w-[1200px] mx-auto px-6 py-14 w-full">

        {/* Loading state */}
        {loading && (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-2xl bg-gray-100 animate-pulse">
                <div className="aspect-[16/9] bg-gray-200 rounded-t-2xl" />
                <div className="p-5 space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                  <div className="h-3 bg-gray-200 rounded w-full" />
                  <div className="h-3 bg-gray-200 rounded w-5/6" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty state */}
        {!loading && !displayedItems.length && (
          <div className="text-center py-24">
            <p className="text-black/30 text-lg font-semibold">No records found.</p>
            <p className="text-black/20 text-sm mt-1">Try a different search or filter.</p>
          </div>
        )}

        {/* ── FEATURED STRIP ── */}
        {!loading && featured.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/50">Featured</h2>
              <div className="flex-1 h-px bg-black/8" />
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {featured.map((item) => (
                <FeaturedCard
                  key={item.id}
                  item={item}
                  module={module}
                  activeCategory={activeCategory}
                  brochurePdfUrl={brochurePdfUrlForItem(item)}
                  formatModuleRoute={formatModuleRoute}
                />
              ))}
            </div>
          </div>
        )}

        {/* ── MAIN GRID ── */}
        {!loading && paginatedItems.length > 0 && (
          <>
            {featured.length > 0 && (
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/50">All {moduleLabel}</h2>
                <div className="flex-1 h-px bg-black/8" />
              </div>
            )}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {paginatedItems.map((item) => (
                <ItemCard
                  key={item.id}
                  item={item}
                  module={module}
                  activeCategory={activeCategory}
                  brochurePdfUrl={brochurePdfUrlForItem(item)}
                  formatModuleRoute={formatModuleRoute}
                />
              ))}
            </div>
          </>
        )}

        {/* Load More */}
        {visibleCount < displayedItems.length && (
          <div className="mt-14 flex justify-center">
            <button
              onClick={() => setVisibleCount((c) => c + ITEMS_PER_PAGE)}
              className="px-10 py-3 rounded-full border-2 border-black text-sm font-bold uppercase tracking-widest text-black hover:bg-black hover:text-white transition-all duration-300"
            >
              Load More
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

/* ─────────────────────────────────────
   FEATURED CARD
───────────────────────────────────── */
function FeaturedCard({
  item, module, activeCategory, brochurePdfUrl, formatModuleRoute,
}: {
  item: DynamicItem;
  module: string;
  activeCategory: string;
  brochurePdfUrl: string;
  formatModuleRoute: (m: string) => string;
}) {
  const imageSrc = resolveMediaUrl(item.cover_image || item.file_url || "", "");
  const isVideo = module === "mediaEvents" && activeCategory === "Videos";
  const videoId = getYouTubeId(item.video_url);

  if (module === "brochures") {
    return (
      <article className="group rounded-2xl border border-black/8 bg-white overflow-hidden hover:shadow-xl transition-all duration-300">
        {imageSrc && !imageSrc.toLowerCase().includes(".pdf") && (
          <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imageSrc} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onError={(e) => { e.currentTarget.style.display = "none"; }} />
          </div>
        )}
        <div className="p-6">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-red-600 mb-2">Featured</span>
          <h3 className="font-bold text-xl text-black mb-5 line-clamp-2">{item.title}</h3>
          <BrochureActions url={brochurePdfUrl} />
        </div>
      </article>
    );
  }

  return (
    <article className="group rounded-2xl border border-black/8 bg-white overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
        {isVideo ? (
          <VideoEmbed videoId={videoId} fileUrl={item.file_url} videoUrl={item.video_url} />
        ) : (
          <Link href={`/${formatModuleRoute(module)}/${item.slug}`} prefetch className="block w-full h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imageSrc} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onError={(e) => { e.currentTarget.style.display = "none"; }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </Link>
        )}
        {/* Featured badge */}
        <span className="absolute top-3 left-3 z-10 bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
          Featured
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-xl text-black line-clamp-2 mb-2">{item.title}</h3>
        {item.short_description && (
          <p className="text-[13px] text-black/55 line-clamp-3 leading-relaxed">{item.short_description}</p>
        )}
        {module !== "mediaEvents" && (
          <div className="mt-4">
            <Link href={`/${formatModuleRoute(module)}/${item.slug}`} prefetch className="inline-flex items-center gap-1.5 text-[13px] font-bold text-red-600 hover:text-red-700 transition-colors uppercase tracking-wide">
              View Details <span>&rarr;</span>
            </Link>
          </div>
        )}
      </div>
    </article>
  );
}

/* ─────────────────────────────────────
   ITEM CARD
───────────────────────────────────── */
function ItemCard({
  item, module, activeCategory, brochurePdfUrl, formatModuleRoute,
}: {
  item: DynamicItem;
  module: string;
  activeCategory: string;
  brochurePdfUrl: string;
  formatModuleRoute: (m: string) => string;
}) {
  const imageSrc = resolveMediaUrl(item.cover_image || item.file_url || "", "");
  const isVideo = module === "mediaEvents" && activeCategory === "Videos";
  const videoId = getYouTubeId(item.video_url);

  if (module === "brochures") {
    return (
      <article className="group rounded-2xl border border-black/8 bg-white overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
        {imageSrc && !imageSrc.toLowerCase().includes(".pdf") && (
          <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imageSrc} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onError={(e) => { e.currentTarget.style.display = "none"; }} />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        )}
        <div className="p-5">
          <h3 className="font-bold text-lg text-black mb-4 line-clamp-2">{item.title}</h3>
          <BrochureActions url={brochurePdfUrl} />
        </div>
      </article>
    );
  }

  return (
    <article className="group rounded-2xl border border-black/8 bg-white overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
      {/* Image / Video */}
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
        {isVideo ? (
          <VideoEmbed videoId={videoId} fileUrl={item.file_url} videoUrl={item.video_url} />
        ) : (
          <Link href={`/${formatModuleRoute(module)}/${item.slug}`} prefetch className="block w-full h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageSrc}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
            {/* Bottom gradient overlay */}
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
          </Link>
        )}
      </div>

      {/* Card body */}
      <div className="p-5">
        {/* Date if blog */}
        {item.created_at && module === "blogs" && (
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-black/40 mb-2">
            {new Date(item.created_at).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>
        )}

        <h3 className="font-bold text-lg text-black line-clamp-2 leading-snug">
          {item.title}
        </h3>

        {item.short_description && (
          <p className="mt-2 text-[13px] text-black/55 line-clamp-3 leading-relaxed">
            {item.short_description}
          </p>
        )}

        {module !== "mediaEvents" && (
          <div className="mt-4 pt-4 border-t border-black/6 flex items-center justify-between">
            <Link
              href={`/${formatModuleRoute(module)}/${item.slug}`}
              prefetch
              className="inline-flex items-center gap-1.5 text-[13px] font-bold text-red-600 hover:text-red-700 transition-colors uppercase tracking-wide"
            >
              View Details <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </Link>
          </div>
        )}
      </div>
    </article>
  );
}

/* ─────────────────────────────────────
   SHARED SUB-COMPONENTS
───────────────────────────────────── */
function BrochureActions({ url }: { url: string }) {
  if (!url) return <span className="text-xs italic text-black/40">PDF Unavailable</span>;
  const downloadUrl = `${url}${url.includes("?") ? "&" : "?"}download=1`;
  return (
    <div className="flex gap-2">
      <a href={url} target="_blank" rel="noopener noreferrer"
        className="flex-1 rounded-lg bg-black px-4 py-2.5 text-center text-xs font-bold uppercase tracking-wide text-white hover:bg-red-600 transition-colors">
        View
      </a>
      <a href={downloadUrl} download
        className="flex-1 rounded-lg border border-black/15 bg-gray-50 px-4 py-2.5 text-center text-xs font-bold uppercase tracking-wide text-black hover:bg-gray-100 transition-colors">
        Download
      </a>
    </div>
  );
}

function VideoEmbed({ videoId, fileUrl, videoUrl }: { videoId: string; fileUrl?: string | null; videoUrl?: string | null }) {
  if (videoId) return <iframe src={`https://www.youtube.com/embed/${videoId}`} className="w-full h-full absolute inset-0 z-20" allowFullScreen />;
  if (fileUrl) return <video src={resolveMediaUrl(fileUrl, "")} controls className="w-full h-full object-cover absolute inset-0 z-20 bg-black" />;
  if (videoUrl) return <iframe src={videoUrl} className="w-full h-full absolute inset-0 z-20" allowFullScreen />;
  return <div className="w-full h-full flex items-center justify-center bg-gray-200 text-sm text-black/40">No video available</div>;
}

function getYouTubeId(url?: string | null): string {
  if (!url) return "";
  const match = url.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/);
  return match && match[2].length === 11 ? match[2] : "";
}
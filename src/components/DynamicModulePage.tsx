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
  const [activeCategory, setActiveCategory] = useState<string>(module === "products" ? "TMT" : module === "mediaEvents" ? "Images" : "All");
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
    const targetUrl = `/api/public/content/${module}?q=${encodeURIComponent(debouncedQ)}&limit=1000`;

    if (swrCache.has(targetUrl)) {
      setItems(swrCache.get(targetUrl)!);
      setLoading(false);
    } else {
      setLoading(true);
    }

    const requestInit: RequestInit = {
      cache: "no-cache",
      signal: controller.signal,
    };

    fetch(targetUrl, requestInit)
      .then((res) => res.json())
      .then((data) => {
        const fetchedItems = data.data ?? [];
        swrCache.set(targetUrl, fetchedItems);
        setItems(fetchedItems);
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          setItems([]);
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [module, debouncedQ]);

  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [activeCategory, activeSubCategory, debouncedQ]);

  const displayedItems = useMemo(() => {
    if (module === "products") {
      return items.filter((item) => {
        let category = "";
        let subcategory = "";
        try {
          const extra = typeof item.extra_data === "string" ? JSON.parse(item.extra_data) : item.extra_data;
          category = extra?.category || "";
          subcategory = extra?.subcategory || "";
        } catch {}
        
        if (activeCategory !== "All" && category !== activeCategory) return false;

        if (activeCategory === "TMT") {
          return subcategory === activeSubCategory;
        }

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

  const paginatedItems = useMemo(() => {
    return displayedItems.slice(0, visibleCount);
  }, [displayedItems, visibleCount]);

  const brochurePdfUrlForItem = (item: DynamicItem): string => {
    const directCandidates: unknown[] = [item.file_url, item.cover_image];

    if (item.extra_data) {
      try {
        const parsedExtra = typeof item.extra_data === "string" ? JSON.parse(item.extra_data) : item.extra_data;
        if (parsedExtra && typeof parsedExtra === "object") {
          const extra = parsedExtra as Record<string, unknown>;
          directCandidates.push(extra.pdf_url, extra.file, extra.file_url, extra.document_url, extra.brochure_url, extra.url);
        }
      } catch {
        // ignore invalid extra_data payloads
      }
    }

    for (const candidate of directCandidates) {
      if (typeof candidate === "string" && candidate.trim() !== "") {
        const resolved = resolveMediaUrl(candidate, "");
        if (resolved) return resolved;
      }
    }

    const contentSource = typeof item.content === "string" ? item.content : "";
    const pdfMatch = contentSource.match(/https?:\/\/[^\s"']+\.pdf|\/api\/uploads\/\d+|\/[^\s"']+\.pdf/i);
    return pdfMatch ? resolveMediaUrl(pdfMatch[0], "") : "";
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="w-full bg-gradient-to-r from-accent-yellow via-[#FFD700] to-accent-yellow pt-28 pb-6 md:pt-32 md:pb-8 px-6 relative overflow-hidden shadow-sm border-b border-black/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_60%)] pointer-events-none mix-blend-overlay" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none mix-blend-overlay opacity-30" />

        <div className="max-w-7xl mx-auto relative z-10">
          <p className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-black/70">
            {moduleLabel} Portfolio
          </p>
          <h1 className="font-sans font-bold text-4xl sm:text-5xl md:text-6xl text-black mt-3 drop-shadow-md">
            {heading}
          </h1>
          <p className="font-sans text-black/80 mt-3 max-w-3xl font-medium">
            {subtitle}
          </p>

          <div className="mt-6">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={`Search ${moduleLabel} by title or keyword`}
              className="w-full max-w-md rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/20 focus:ring-2 focus:ring-black/5"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        {module === "products" && (
          <div className="flex flex-col items-center justify-center mb-10 gap-4">
            <div className="inline-flex flex-wrap justify-center gap-2 bg-gray-200/60 p-1.5 rounded-xl border border-black/5">
              {["TMT", "Structural"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveCategory(tab);
                    if (tab === "TMT") setActiveSubCategory("Bars");
                  }}
                  className={`px-6 py-2 rounded-lg text-sm font-bold tracking-wider uppercase transition-all duration-300 ${
                    activeCategory === tab
                      ? "bg-white text-accent-red shadow-md"
                      : "text-black/60 hover:text-black hover:bg-gray-300/50"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            {activeCategory === "TMT" && (
              <div className="inline-flex flex-wrap justify-center gap-2 bg-gray-100 p-1 rounded-xl border border-black/5">
                {["Bars", "Rings"].map((subtab) => (
                  <button
                    key={subtab}
                    onClick={() => setActiveSubCategory(subtab)}
                    className={`px-4 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                      activeSubCategory === subtab
                        ? "bg-black text-white shadow-sm"
                        : "text-black/60 hover:text-black hover:bg-gray-200"
                    }`}
                  >
                    {subtab}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {module === "mediaEvents" && (
          <div className="flex flex-col items-center justify-center mb-10 gap-4">
            <div className="inline-flex flex-wrap justify-center gap-2 bg-gray-200/60 p-1.5 rounded-xl border border-black/5">
              {["Images", "Videos"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveCategory(tab)}
                  className={`px-6 py-2 rounded-lg text-sm font-bold tracking-wider uppercase transition-all duration-300 ${
                    activeCategory === tab
                      ? "bg-white text-accent-red shadow-md"
                      : "text-black/60 hover:text-black hover:bg-gray-300/50"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        )}

        {featured.length > 0 ? (
          <div className="mb-10">
            <h2 className="font-heading text-2xl text-black mb-4">Featured</h2>

            <div className="grid md:grid-cols-3 gap-5">
              {featured.map((item) => {
                const imageSrc = resolveMediaUrl(item.cover_image || item.file_url || "", "");

                if (module === "brochures") {
                  return (
                    <article
                      key={item.id}
                      className="group flex flex-col justify-between rounded-2xl border border-black/10 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                    >
                      {imageSrc && !imageSrc.toLowerCase().includes(".pdf") && (
                        <div className="relative w-full aspect-square overflow-hidden bg-gray-100 border-b border-black/5">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={imageSrc}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
                        </div>
                      )}
                      <div className="p-6 flex flex-col flex-1">
                        <div>
                          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-black/50">
                            Featured
                          </p>
                          <h3 className="font-['Open_Sans'] text-xl md:text-2xl font-bold text-black mb-4 line-clamp-2">
                            {item.title}
                          </h3>
                        </div>
                        <div className="mt-auto pt-4 flex items-center gap-3">
                        {brochurePdfUrlForItem(item) ? (
                          <>
                            <a
                              href={brochurePdfUrlForItem(item)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 rounded-lg bg-black px-4 py-2.5 text-center text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-black/80"
                            >
                              View
                            </a>
                            <a
                              href={`${brochurePdfUrlForItem(item)}${brochurePdfUrlForItem(item).includes('?') ? '&' : '?'}download=1`}
                              download
                              className="flex-1 rounded-lg border border-black/20 bg-gray-50 px-4 py-2.5 text-center text-xs font-semibold uppercase tracking-wide text-black transition hover:bg-gray-200"
                            >
                              Download
                            </a>
                          </>
                        ) : (
                          <span className="text-xs italic text-black/50">PDF Unavailable</span>
                        )}
                      </div>
                      </div>
                    </article>
                  );
                }

                const isVideoEvent = module === "mediaEvents" && activeCategory === "Videos";
                let videoId = "";
                if (isVideoEvent && item.video_url) {
                  const match = item.video_url.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/);
                  if (match && match[2].length === 11) videoId = match[2];
                }

                return (
                  <article
                    key={item.id}
                    className="group rounded-2xl border border-black/10 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
                      {isVideoEvent ? (
                        videoId ? (
                          <iframe src={`https://www.youtube.com/embed/${videoId}`} className="w-full h-full absolute inset-0 z-20" allowFullScreen />
                        ) : item.file_url ? (
                          <video src={resolveMediaUrl(item.file_url, "")} controls className="w-full h-full object-cover absolute inset-0 z-20 bg-black" />
                        ) : item.video_url ? (
                          <iframe src={item.video_url} className="w-full h-full absolute inset-0 z-20" allowFullScreen />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gray-200">No Video Available</div>
                        )
                      ) : (
                        <>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={imageSrc}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
                        </>
                      )}
                    </div>

                    <div className="p-5">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-black/50 font-semibold">
                        Featured
                      </p>
                      <h3 className="font-['Open_Sans'] text-xl md:text-2xl font-bold mt-2 text-black line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-black/65 mt-2 line-clamp-3">
                        {item.short_description}
                      </p>
                      {!isVideoEvent && (
                        <div className="mt-4">
                          <Link href={`/${formatModuleRoute(module)}/${item.slug}`} prefetch={true} className="inline-flex rounded-lg bg-black px-3 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-black/80">
                            View Details
                          </Link>
                        </div>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        ) : null}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {paginatedItems.map((item) => {
            const imageSrc = resolveMediaUrl(item.cover_image || item.file_url || "", "");

            if (module === "brochures") {
              return (
                <article
                  key={item.id}
                  className="group flex flex-col justify-between rounded-2xl border border-black/10 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  {imageSrc && !imageSrc.toLowerCase().includes(".pdf") && (
                    <div className="relative w-full aspect-square overflow-hidden bg-gray-100 border-b border-black/5">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={imageSrc}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-['Open_Sans'] text-lg md:text-xl font-bold text-black mb-4 transition-colors group-hover:text-accent-red line-clamp-2">
                      {item.title}
                    </h3>
                    <div className="mt-auto flex items-center gap-3">
                    {brochurePdfUrlForItem(item) ? (
                      <>
                        <a
                          href={brochurePdfUrlForItem(item)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 rounded-lg bg-black px-4 py-2.5 text-center text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-black/80"
                        >
                          View
                        </a>
                        <a
                          href={`${brochurePdfUrlForItem(item)}${brochurePdfUrlForItem(item).includes('?') ? '&' : '?'}download=1`}
                          download
                          className="flex-1 rounded-lg border border-black/20 bg-gray-50 px-4 py-2.5 text-center text-xs font-semibold uppercase tracking-wide text-black transition hover:bg-gray-200"
                        >
                          Download
                        </a>
                      </>
                    ) : (
                      <span className="text-xs italic text-black/50">PDF Unavailable</span>
                    )}
                  </div>
                  </div>
                </article>
              );
            }

            const isVideoEvent = module === "mediaEvents" && activeCategory === "Videos";
            let videoId = "";
            if (isVideoEvent && item.video_url) {
              const match = item.video_url.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/);
              if (match && match[2].length === 11) videoId = match[2];
            }

            return (
              <article
                key={item.id}
                className="group rounded-2xl border border-black/10 bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
                  {isVideoEvent ? (
                    videoId ? (
                      <iframe src={`https://www.youtube.com/embed/${videoId}`} className="w-full h-full absolute inset-0 z-20" allowFullScreen />
                    ) : item.file_url ? (
                      <video src={resolveMediaUrl(item.file_url, "")} controls className="w-full h-full object-cover absolute inset-0 z-20 bg-black" />
                    ) : item.video_url ? (
                      <iframe src={item.video_url} className="w-full h-full absolute inset-0 z-20" allowFullScreen />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-200">No Video Available</div>
                    )
                  ) : (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={imageSrc}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
                      <p className="absolute bottom-3 left-4 text-[10px] uppercase tracking-[0.18em] text-white font-semibold z-10">
                        {module}
                      </p>
                    </>
                  )}
                </div>

                <div className="p-5">
                  <h3 className="font-['Open_Sans'] text-lg md:text-xl font-bold text-black group-hover:text-accent-red transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-black/65 mt-2 line-clamp-3">
                    {item.short_description}
                  </p>

                  {!isVideoEvent && (
                    <div className="mt-4 flex items-center justify-between gap-2">
                      <Link href={`/${formatModuleRoute(module)}/${item.slug}`} prefetch={true} className="text-sm font-semibold text-accent-red hover:text-accent-red/80">
                        View Details
                      </Link>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {visibleCount < displayedItems.length && (
          <div className="mt-12 flex items-center justify-center">
            <button
              onClick={() => setVisibleCount((c) => c + ITEMS_PER_PAGE)}
              className="px-8 py-3 rounded-lg border border-black/10 bg-black text-sm font-bold uppercase tracking-widest text-white hover:bg-accent-red transition-all duration-300 shadow-md"
            >
              Load More
            </button>
          </div>
        )}

        {!loading && !displayedItems.length ? (
          <p className="text-black/50 text-sm">No published records yet.</p>
        ) : null}

        {loading ? <p className="text-black/50 text-sm">Loading...</p> : null}
      </section>
    </main>
  );
}

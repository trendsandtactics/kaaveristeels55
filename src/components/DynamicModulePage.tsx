"use client";

import { useEffect, useMemo, useState } from "react";
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

export default function DynamicModulePage({
  module,
  heading,
  subtitle,
}: {
  module: string;
  heading: string;
  subtitle: string;
}) {
  const [items, setItems] = useState<DynamicItem[]>([]);
  const [q, setQ] = useState("");
  const [debouncedQ, setDebouncedQ] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedQ(q), 250);
    return () => clearTimeout(timeout);
  }, [q]);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    const requestInit: RequestInit = {
      cache: "no-store",
      signal: controller.signal,
    };

    fetch(`/api/public/content/${module}?q=${encodeURIComponent(debouncedQ)}&limit=100`, requestInit)
      .then((res) => res.json())
      .then((data) => setItems(data.data ?? []))
      .catch((error) => {
        if (error.name !== "AbortError") {
          setItems([]);
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [module, debouncedQ]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  const displayedItems = useMemo(() => {
    if (module !== "products") return items;
    return items.filter((item) => {
      let category = "";
      try {
        const extra = typeof item.extra_data === "string" ? JSON.parse(item.extra_data) : item.extra_data;
        category = extra?.category || "";
      } catch {}
      
      return activeCategory === "All" || category === activeCategory;
    });
  }, [items, module, activeCategory]);

  const featured = useMemo(() => displayedItems.filter((item) => item.featured).slice(0, 3), [displayedItems]);

  const totalPages = Math.ceil(displayedItems.length / ITEMS_PER_PAGE);
  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return displayedItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [displayedItems, currentPage]);

  return (
    <main className="min-h-screen pt-24 bg-gray-50">
      <section className="w-full bg-gradient-to-r from-accent-yellow via-[#FFD700] to-accent-yellow py-20 px-6 relative overflow-hidden shadow-sm border-b border-black/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_60%)] pointer-events-none mix-blend-overlay" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none mix-blend-overlay opacity-30" />

        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-black/70">
            Dynamic Module
          </p>
          <h1 className="font-sans text-5xl md:text-7xl text-black mt-3 drop-shadow-md">
            {heading}
          </h1>
          <p className="text-black/80 mt-3 max-w-2xl font-medium">{subtitle}</p>

          <div className="mt-6">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search"
              className="w-full max-w-md rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/20 focus:ring-2 focus:ring-black/5"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        {module === "products" && (
          <div className="flex justify-center mb-10">
            <div className="inline-flex flex-wrap gap-2 bg-gray-200/60 p-1.5 rounded-xl border border-black/5">
              {["TMT", "Structural"].map((tab) => (
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

                return (
                  <article
                    key={item.id}
                    className="group rounded-2xl border border-black/10 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
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

                    <div className="p-5">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-black/50 font-semibold">
                        Featured
                      </p>
                      <h3 className="font-heading text-2xl mt-2 text-black">{item.title}</h3>
                      <p className="text-sm text-black/65 mt-2 line-clamp-3">
                        {item.short_description}
                      </p>
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

            return (
              <article
                key={item.id}
                className="group rounded-2xl border border-black/10 bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
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
                </div>

                <div className="p-5">
                  <h3 className="font-heading text-2xl text-black group-hover:text-accent-red transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-black/65 mt-2 line-clamp-3">
                    {item.short_description}
                  </p>

                  {item.file_url && (
                    <div className="mt-4 flex items-center justify-end">
                      <a
                        href={item.file_url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-semibold text-black/70 hover:text-black"
                      >
                        Download
                      </a>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-4">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg border border-black/10 bg-white text-sm font-semibold text-black disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
            >
              Previous
            </button>
            <span className="text-sm font-medium text-black/70">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg border border-black/10 bg-white text-sm font-semibold text-black disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
            >
              Next
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

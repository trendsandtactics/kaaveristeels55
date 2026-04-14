"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation"; // ✅ added
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
  const searchParams = useSearchParams(); // ✅ added

  const [items, setItems] = useState<DynamicItem[]>([]);
  const [q, setQ] = useState("");
  const [debouncedQ, setDebouncedQ] = useState("");

  // ✅ UPDATED: category from URL
  const [activeCategory, setActiveCategory] = useState<string>(() => {
    if (module !== "products") return "All";
    return searchParams.get("category") || "Structural";
  });

  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  // ✅ Sync category if URL changes
  useEffect(() => {
    if (module === "products") {
      const category = searchParams.get("category");
      if (category) {
        setActiveCategory(category);
      }
    }
  }, [searchParams, module]);

  // Search debounce
  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedQ(q), 250);
    return () => clearTimeout(timeout);
  }, [q]);

  // Fetch data
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    fetch(
      `/api/public/content/${module}?q=${encodeURIComponent(
        debouncedQ
      )}&limit=100`,
      {
        cache: "no-store",
        signal: controller.signal,
      }
    )
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

  // Reset page when tab changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  // Filter items
  const displayedItems = useMemo(() => {
    if (module !== "products") return items;

    return items.filter((item) => {
      let category = "";
      try {
        const extra =
          typeof item.extra_data === "string"
            ? JSON.parse(item.extra_data)
            : item.extra_data;

        category = extra?.category || "";
      } catch {}

      return activeCategory === "All" || category === activeCategory;
    });
  }, [items, module, activeCategory]);

  const featured = useMemo(
    () => displayedItems.filter((item) => item.featured).slice(0, 3),
    [displayedItems]
  );

  const totalPages = Math.ceil(displayedItems.length / ITEMS_PER_PAGE);

  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return displayedItems.slice(
      startIndex,
      startIndex + ITEMS_PER_PAGE
    );
  }, [displayedItems, currentPage]);

  return (
    <main className="min-h-screen pt-24 bg-gray-50">
      {/* Header */}
      <section className="w-full bg-gradient-to-r from-accent-yellow via-[#FFD700] to-accent-yellow py-20 px-6 relative overflow-hidden shadow-sm border-b border-black/10">
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl text-black mt-3">
            {heading}
          </h1>
          <p className="text-black/80 mt-3 max-w-2xl">
            {subtitle}
          </p>

          <div className="mt-6">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search"
              className="w-full max-w-md rounded-xl border px-4 py-3"
            />
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        {module === "products" && (
          <div className="flex justify-center mb-10">
            <div className="inline-flex gap-2 bg-gray-200 p-1.5 rounded-xl">
              {["Structural", "TMT"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveCategory(tab)}
                  className={`px-6 py-2 rounded-lg font-bold ${
                    activeCategory === tab
                      ? "bg-white text-red-600"
                      : "text-black/60"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Featured */}
        {featured.length > 0 && (
          <div className="mb-10">
            <h2 className="text-2xl mb-4">Featured</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {featured.map((item) => {
                const imageSrc = resolveMediaUrl(
                  item.cover_image || item.file_url || "",
                  ""
                );

                return (
                  <div key={item.id} className="bg-white rounded shadow">
                    <img
                      src={imageSrc}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-xl">{item.title}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Products */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {paginatedItems.map((item) => {
            const imageSrc = resolveMediaUrl(
              item.cover_image || item.file_url || "",
              ""
            );

            return (
              <div key={item.id} className="bg-white rounded shadow">
                <img
                  src={imageSrc}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl">{item.title}</h3>
                  <p className="text-sm mt-2">
                    {item.short_description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center gap-4">
            <button
              onClick={() =>
                setCurrentPage((p) => Math.max(1, p - 1))
              }
              disabled={currentPage === 1}
            >
              Previous
            </button>

            <span>
              {currentPage} / {totalPages}
            </span>

            <button
              onClick={() =>
                setCurrentPage((p) =>
                  Math.min(totalPages, p + 1)
                )
              }
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}

        {!loading && !displayedItems.length && (
          <p>No records found</p>
        )}

        {loading && <p>Loading...</p>}
      </section>
    </main>
  );
}

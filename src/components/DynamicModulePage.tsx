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
  initialCategory, // ✅ NEW
}: {
  module: string;
  heading: string;
  subtitle: string;
  initialCategory?: string;
}) {
  const [items, setItems] = useState<DynamicItem[]>([]);
  const [q, setQ] = useState("");
  const [debouncedQ, setDebouncedQ] = useState("");

  // ✅ Use category from URL (passed as prop)
  const [activeCategory, setActiveCategory] = useState<string>(
    module === "products"
      ? initialCategory || "Structural"
      : "All"
  );

  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

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
        if (error.name !== "AbortError") setItems([]);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [module, debouncedQ]);

  // Reset page on tab change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  // Filter
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
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return displayedItems.slice(start, start + ITEMS_PER_PAGE);
  }, [displayedItems, currentPage]);

  return (
    <main className="min-h-screen pt-24 bg-gray-50">
      {/* Header */}
      <section className="py-20 px-6">
        <h1 className="text-5xl">{heading}</h1>
        <p className="mt-2">{subtitle}</p>

        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search"
          className="mt-6 border px-4 py-2"
        />
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        {/* Tabs */}
        {module === "products" && (
          <div className="flex justify-center mb-10">
            {["Structural", "TMT"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveCategory(tab)}
                className={`px-6 py-2 mx-2 ${
                  activeCategory === tab
                    ? "bg-black text-white"
                    : "bg-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        )}

        {/* Featured */}
        {featured.length > 0 && (
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {featured.map((item) => {
              const imageSrc = resolveMediaUrl(
                item.cover_image || item.file_url || "",
                ""
              );

              return (
                <div key={item.id} className="bg-white p-4">
                  <img src={imageSrc} alt={item.title} />
                  <h3>{item.title}</h3>
                </div>
              );
            })}
          </div>
        )}

        {/* Items */}
        <div className="grid md:grid-cols-3 gap-6">
          {paginatedItems.map((item) => {
            const imageSrc = resolveMediaUrl(
              item.cover_image || item.file_url || "",
              ""
            );

            return (
              <div key={item.id} className="bg-white p-4">
                <img src={imageSrc} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.short_description}</p>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-10 flex justify-center gap-4">
            <button
              onClick={() =>
                setCurrentPage((p) => Math.max(1, p - 1))
              }
            >
              Prev
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
            >
              Next
            </button>
          </div>
        )}

        {loading && <p>Loading...</p>}
      </section>
    </main>
  );
}

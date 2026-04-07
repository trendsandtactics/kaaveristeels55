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
};

export default function DynamicModulePage({ module, heading, subtitle }: { module: string; heading: string; subtitle: string }) {
  const [items, setItems] = useState<DynamicItem[]>([]);
  const [q, setQ] = useState("");
  const [debouncedQ, setDebouncedQ] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedQ(q), 250);
    return () => clearTimeout(timeout);
  }, [q]);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    const requestInit: RequestInit = debouncedQ
      ? { cache: "no-store", signal: controller.signal }
      : { cache: "force-cache", signal: controller.signal };

    fetch(`/api/public/content/${module}?q=${encodeURIComponent(debouncedQ)}&limit=24`, requestInit)
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

  const featured = useMemo(() => items.filter((item) => item.featured).slice(0, 3), [items]);

  return (
    <main className="min-h-screen pt-24 bg-gray-50">
      <section className="w-full bg-gradient-to-r from-accent-yellow via-[#FFD700] to-accent-yellow py-20 px-6 relative overflow-hidden shadow-sm border-b border-black/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_60%)] pointer-events-none mix-blend-overlay" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none mix-blend-overlay opacity-30" />

        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-black/70">Dynamic Module</p>
          <h1 className="font-heading text-5xl md:text-7xl text-black mt-3 drop-shadow-md">{heading}</h1>
          <p className="text-black/80 mt-3 max-w-2xl font-medium">{subtitle}</p>
          <div className="mt-6">
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search" className="w-full max-w-md rounded-xl border border-black/10 bg-white px-4 py-3 text-sm" />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        {featured.length > 0 ? (
          <div className="mb-10">
            <h2 className="font-heading text-2xl text-black mb-4">Featured</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {featured.map((item) => (
                <article key={item.id} className="rounded-2xl border border-black/10 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
                  <div className="relative w-full">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={resolveMediaUrl(item.cover_image ?? item.file_url, "")} alt={item.title} className="w-full h-auto bg-gray-100" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                  </div>
                  <div className="p-5">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-black/50 font-semibold">Featured</p>
                    <h3 className="font-heading text-2xl mt-2">{item.title}</h3>
                    <p className="text-sm text-black/65 mt-2 line-clamp-3">{item.short_description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ) : null}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {items.map((item) => (
            <article key={item.id} className="group rounded-2xl border border-black/10 bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={resolveMediaUrl(item.cover_image ?? item.file_url, "")} alt={item.title} className="w-full h-auto bg-gray-100" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
                <p className="absolute bottom-3 left-4 text-[10px] uppercase tracking-[0.18em] text-white font-semibold z-10">{module}</p>
              </div>

              <div className="p-5">
                <h3 className="font-heading text-2xl text-black group-hover:text-accent-red transition-colors">{item.title}</h3>
                <p className="text-sm text-black/65 mt-2 line-clamp-3">{item.short_description}</p>

                {item.file_url && (
                  <div className="mt-4 flex items-center justify-end">
                    <a href={item.file_url} target="_blank" className="text-sm font-semibold text-black/70 hover:text-black" rel="noreferrer">Download</a>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {!loading && !items.length ? <p className="text-black/50 text-sm">No published records yet.</p> : null}
        {loading ? <p className="text-black/50 text-sm">Loading...</p> : null}
      </section>
    </main>
  );
}

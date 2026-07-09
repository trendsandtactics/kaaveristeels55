"use client";

import { useEffect, useMemo, useState } from "react";
import { PAGE_SEO_DEFS } from "@/lib/seo-pages";
import { revalidateModuleCache } from "@/app/actions";

type SeoEntry = {
  page_key: string;
  title: string;
  description: string;
  keywords: string;
  og_image: string;
};

type SeoRow = {
  page_key: string;
  title: string | null;
  description: string | null;
  keywords: string | null;
  og_image: string | null;
};

const emptyEntry = (): SeoEntry => ({ page_key: "", title: "", description: "", keywords: "", og_image: "" });

export default function AdminPagesSeoPanel() {
  const [entries, setEntries] = useState<Record<string, SeoEntry>>({});
  const [activeKey, setActiveKey] = useState<string>(PAGE_SEO_DEFS[0].key);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [savingKey, setSavingKey] = useState<string | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/admin/seo", { cache: "no-store" });
        const data = await response.json();
        const rows: SeoRow[] = data.data ?? [];
        const byKey: Record<string, SeoEntry> = {};
        for (const row of rows) {
          byKey[row.page_key] = {
            page_key: row.page_key,
            title: row.title ?? "",
            description: row.description ?? "",
            keywords: row.keywords ?? "",
            og_image: row.og_image ?? "",
          };
        }
        setEntries(byKey);
      } catch {
        setMessage("Unable to load SEO records.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const activeDef = PAGE_SEO_DEFS.find((def) => def.key === activeKey)!;
  const activeEntry = entries[activeKey] ?? emptyEntry();

  const filteredDefs = useMemo(() => {
    if (!search.trim()) return PAGE_SEO_DEFS;
    const q = search.toLowerCase();
    return PAGE_SEO_DEFS.filter((def) => def.label.toLowerCase().includes(q) || def.path.toLowerCase().includes(q));
  }, [search]);

  const updateActive = (patch: Partial<SeoEntry>) => {
    setEntries((state) => ({
      ...state,
      [activeKey]: { ...(state[activeKey] ?? emptyEntry()), ...patch },
    }));
  };

  const uploadOgImage = async (file: File) => {
    setUploadingImage(true);
    setMessage("Uploading image...");
    try {
      const body = new FormData();
      body.append("file", file);
      const response = await fetch("/api/uploads", { method: "POST", body });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error ?? "Upload failed.");
      updateActive({ og_image: data.url });
      setMessage("Image uploaded.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Upload failed.");
    } finally {
      setUploadingImage(false);
    }
  };

  const saveActive = async () => {
    setSavingKey(activeKey);
    setMessage("");
    try {
      const response = await fetch("/api/admin/seo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          page_key: activeKey,
          title: activeEntry.title,
          description: activeEntry.description,
          keywords: activeEntry.keywords,
          og_image: activeEntry.og_image,
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error ?? "Save failed.");
      await revalidateModuleCache();
      setMessage(`Saved SEO for "${activeDef.label}".`);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Save failed.");
    } finally {
      setSavingKey(null);
    }
  };

  return (
    <div className="grid gap-6 xl:grid-cols-12">
      <aside className="rounded-2xl border border-slate-200/80 bg-white/95 p-4 shadow-lg shadow-slate-200/60 xl:col-span-4">
        <h3 className="mb-3 font-serif text-xl text-slate-900">Pages</h3>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search pages..."
          className="mb-3 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-red-500/30 transition focus:ring-2"
        />
        <div className="max-h-[60vh] space-y-1 overflow-y-auto">
          {filteredDefs.map((def) => {
            const hasCustomSeo = Boolean(entries[def.key]?.title || entries[def.key]?.description);
            return (
              <button
                key={def.key}
                onClick={() => setActiveKey(def.key)}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm font-semibold transition ${
                  activeKey === def.key ? "bg-gradient-to-r from-slate-900 to-slate-700 text-white shadow-md" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                <span>
                  {def.label}
                  <span className={`block text-xs font-normal ${activeKey === def.key ? "text-white/70" : "text-slate-500"}`}>{def.path}</span>
                </span>
                {hasCustomSeo ? <span className={`ml-2 inline-block h-2 w-2 shrink-0 rounded-full ${activeKey === def.key ? "bg-emerald-300" : "bg-emerald-500"}`} /> : null}
              </button>
            );
          })}
        </div>
      </aside>

      <div className="rounded-2xl border border-slate-200/80 bg-white/95 p-6 shadow-lg shadow-slate-200/60 xl:col-span-8">
        <h3 className="mb-1 font-serif text-2xl text-slate-900">SEO — {activeDef.label}</h3>
        <p className="mb-4 text-sm text-slate-600">
          Controls the <code className="rounded bg-slate-100 px-1 py-0.5 text-xs">{activeDef.path}</code> page&apos;s meta title, description, keywords and social share image. Leave a field blank to fall back to the site default.
        </p>

        {loading ? (
          <p className="text-sm text-slate-500">Loading...</p>
        ) : (
          <div className="grid gap-3">
            <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">Meta Title</label>
            <input
              className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-red-500/30 transition focus:ring-2"
              placeholder={activeDef.defaultTitle}
              value={activeEntry.title}
              onChange={(e) => updateActive({ title: e.target.value })}
            />

            <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">Meta Description</label>
            <textarea
              className="min-h-24 rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-red-500/30 transition focus:ring-2"
              placeholder={activeDef.defaultDescription}
              value={activeEntry.description}
              onChange={(e) => updateActive({ description: e.target.value })}
            />

            <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">Keywords (comma-separated)</label>
            <input
              className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-red-500/30 transition focus:ring-2"
              placeholder="tmt bars, structural steel, kaaveri"
              value={activeEntry.keywords}
              onChange={(e) => updateActive({ keywords: e.target.value })}
            />

            <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">Social Share (OG) Image</label>
            <div className="space-y-2">
              <input
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-red-500/30 transition focus:ring-2"
                placeholder="Image URL"
                value={activeEntry.og_image}
                onChange={(e) => updateActive({ og_image: e.target.value })}
              />
              <input
                type="file"
                accept="image/*"
                disabled={uploadingImage}
                className="w-full rounded-lg border border-dashed border-slate-300 px-3 py-2 text-sm file:mr-3 file:rounded-md file:border-0 file:bg-slate-100 file:px-3 file:py-1.5 file:text-xs file:font-semibold"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) uploadOgImage(file);
                }}
              />
              {activeEntry.og_image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={activeEntry.og_image} alt="OG preview" className="h-32 w-auto rounded-lg border border-slate-200 object-cover" />
              ) : null}
            </div>

            <div className="mt-2 flex items-center gap-3">
              <button
                type="button"
                onClick={saveActive}
                disabled={savingKey === activeKey}
                className="rounded-lg bg-gradient-to-r from-red-500 to-rose-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-rose-400/30 disabled:opacity-50"
              >
                {savingKey === activeKey ? "Saving..." : "Save SEO"}
              </button>
              {message ? <p className="text-sm text-slate-700">{message}</p> : null}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

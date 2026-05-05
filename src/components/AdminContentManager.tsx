"use client";

import AdminCertificationsPanel from "@/components/AdminCertificationsPanel";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

type ContentModuleName = "products" | "mediaEvents" | "blogs" | "projects" | "careers" | "dealers" | "galleries" | "brochures" | "popups" | "csr" | "pages" | "calculators";
type SupportModuleName = "enquiries" | "contact_messages" | "job_applications";
type ModuleName = ContentModuleName | SupportModuleName | "certifications";

type ModuleDef = { key: ModuleName; label: string; kind: "content" | "support" | "certifications"; description: string };
type Item = Record<string, unknown> & { id: number; title?: string; slug?: string; status?: string; updated_at?: string };

type FormState = {
  title: string;
  short_description: string;
  content: string;
  status: string;
  featured: boolean;
  sort_order: number;
  cover_image: string;
  file_url: string;
  video_url: string;
  extra_data: Record<string, string>;
};

const MODULES: ModuleDef[] = [
  { key: "certifications", label: "Certifications", kind: "certifications", description: "Upload and manage certification files" },
  { key: "products", label: "Products", kind: "content", description: "Product catalog, specs, brochure links" },
  { key: "mediaEvents", label: "Media & Events", kind: "content", description: "Event highlights and company news" },
  { key: "blogs", label: "Blogs", kind: "content", description: "Rich blog content with SEO-ready publishing" },
  { key: "projects", label: "Projects", kind: "content", description: "Project case studies and outcomes" },
  { key: "careers", label: "Careers", kind: "content", description: "Job listings and vacancy details" },
  { key: "dealers", label: "Dealers", kind: "content", description: "Dealer directory with city/state filters" },
  { key: "galleries", label: "Photo/Video Gallery", kind: "content", description: "Visual media and showcase assets" },
  { key: "brochures", label: "Brochures", kind: "content", description: "Downloadable product brochures/PDFs" },
  { key: "popups", label: "Popups", kind: "content", description: "Homepage event/offer popup controls" },
  { key: "csr", label: "CSR", kind: "content", description: "Manage Corporate Social Responsibility events and initiatives" },
  { key: "pages", label: "Pages Content", kind: "content", description: "Manage page-specific dynamic sections like CTAs" },
  { key: "enquiries", label: "Enquiries", kind: "support", description: "Incoming product and generic enquiries" },
  { key: "contact_messages", label: "Contact Messages", kind: "support", description: "Website contact and feedback queue" },
  { key: "job_applications", label: "Job Applications", kind: "support", description: "Candidate applications and resumes" },
  { key: "calculators", label: "Calculators", kind: "content", description: "Manage calculator formulas and parameters" },
];

const initialForm = (): FormState => ({
  title: "",
  short_description: "",
  content: "",
  status: "published",
  featured: false,
  sort_order: 0,
  cover_image: "",
  file_url: "",
  video_url: "",
  extra_data: {},
});

const adminCache = new Map<string, Item[]>();

function endpointForSupportModule(module: SupportModuleName): string {
  if (module === "enquiries") return "/api/enquiries";
  if (module === "contact_messages") return "/api/contact-messages";
  return "/api/job-applications";
}

export default function AdminContentManager() {
  const [activeModule, setActiveModule] = useState<ModuleName>("products");
  const [items, setItems] = useState<Item[]>([]);
  const [search, setSearch] = useState("");
  const [form, setForm] = useState<FormState>(initialForm());
  const [editingId, setEditingId] = useState<number | null>(null);
  const [productCategoryTab, setProductCategoryTab] = useState<"All" | "TMT" | "Structural">("All");
  const [viewingItem, setViewingItem] = useState<Item | null>(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const richEditorRef = useRef<HTMLDivElement | null>(null);
  const coverImageInputRef = useRef<HTMLInputElement | null>(null);
  const fileUrlInputRef = useRef<HTMLInputElement | null>(null);

  const activeDef = MODULES.find((module) => module.key === activeModule)!;

  const fetchItems = async (bypassCache = false) => {
    // Prevent generic content fetching when specialized panels are active
    if (activeDef.kind === "certifications") return;
    
    const url = activeDef.kind === "support" 
      ? endpointForSupportModule(activeModule as SupportModuleName)
      : `/api/admin/content/${activeModule}?q=${encodeURIComponent(search)}`;

    if (!bypassCache && adminCache.has(url)) {
      setItems(adminCache.get(url)!);
    } else {
      setLoading(true);
    }

    setMessage("");
    try {
      const response = await fetch(url, { cache: "no-cache" });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error ?? "Unable to load records.");
      const resultItems = data.data ?? [];
      adminCache.set(url, resultItems);
      setItems(resultItems);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to load records.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch("/api/admin/bootstrap", { method: "POST" }).catch(() => {});
    fetchItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeModule]);

  useEffect(() => {
    if ((activeModule === "blogs" || activeModule === "csr" || activeModule === "pages" || activeModule === "products") && richEditorRef.current) {
      if (richEditorRef.current.innerHTML !== (form.content || "")) {
        richEditorRef.current.innerHTML = form.content || "";
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeModule, editingId]);

  const resetForm = () => {
    setForm(initialForm());
    setEditingId(null);
    if (richEditorRef.current) richEditorRef.current.innerHTML = "";
    if (coverImageInputRef.current) coverImageInputRef.current.value = "";
    if (fileUrlInputRef.current) fileUrlInputRef.current.value = "";
  };

  const payload = useMemo(() => {
    const base = {
      ...form,
      sort_order: Number(form.sort_order) || 0,
      extra_data: form.extra_data,
    };

    if (activeModule === "dealers") {
      return {
        ...base,
        extra_data: {
          city: form.extra_data.city || "",
          state: form.extra_data.state || "",
          phone: form.extra_data.phone || "",
          email: form.extra_data.email || "",
          map_url: form.extra_data.map_url || "",
          latitude: form.extra_data.latitude || "",
          longitude: form.extra_data.longitude || "",
        },
      };
    }

    return base;
  }, [activeModule, form]);

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (activeDef.kind !== "content") return;

    try {
      const url = editingId ? `/api/admin/content/${activeModule}/${editingId}` : `/api/admin/content/${activeModule}`;
      const method = editingId ? "PUT" : "POST";
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error ?? "Save failed.");
      setMessage(editingId ? "Updated successfully." : "Created successfully.");
      resetForm();
      adminCache.clear();
      fetchItems(true);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Save failed.");
    }
  };

  const deleteRow = async (id: number) => {
    if (activeDef.kind !== "content") return;
    if (!confirm("Delete this record?")) return;
    const response = await fetch(`/api/admin/content/${activeModule}/${id}`, { method: "DELETE" });
    const data = await response.json();
    if (!response.ok) {
      setMessage(data.error ?? "Delete failed.");
      return;
    }
    setMessage("Deleted.");
    adminCache.clear();
    fetchItems(true);
  };

  const displayedItems = useMemo(() => {
    if (activeModule !== "products" || productCategoryTab === "All") return items;
    return items.filter((row) => {
      const extra = (typeof row.extra_data === "string" && row.extra_data ? JSON.parse(String(row.extra_data)) : row.extra_data) as Record<string, string> | null;
      return extra?.category === productCategoryTab;
    });
  }, [items, activeModule, productCategoryTab]);

  const editRow = (row: Item) => {
    if (activeDef.kind !== "content") return;
    const extra = (typeof row.extra_data === "string" && row.extra_data ? JSON.parse(String(row.extra_data)) : row.extra_data) as Record<string, string> | null;
    setEditingId(row.id);
    setForm({
      title: String(row.title ?? ""),
      short_description: String(row.short_description ?? ""),
      content: String(row.content ?? ""),
      status: String(row.status ?? "draft"),
      featured: Boolean(row.featured),
      sort_order: Number(row.sort_order ?? 0),
      cover_image: String(row.cover_image ?? ""),
      file_url: String(row.file_url ?? ""),
      video_url: String(row.video_url ?? ""),
      extra_data: extra ?? {},
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const applyRich = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    setForm((state) => ({ ...state, content: richEditorRef.current?.innerHTML ?? "" }));
  };

  const uploadFromDevice = async (rawFile: File, target: "cover_image" | "file_url" | "video_url") => {
    setMessage("Preparing upload...");
    let file = rawFile;

    // Automatically convert PNG/WEBP to JPEG and downscale to bypass backend size/type restrictions
    const isPngOrWebp = file.type === "image/png" || file.type === "image/webp" || file.name.toLowerCase().endsWith(".png");
    if (isPngOrWebp) {
      file = await new Promise<File>((resolve) => {
        const img = new window.Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          let width = img.width;
          let height = img.height;
          const MAX_DIM = 1920;
          
          if (width > MAX_DIM || height > MAX_DIM) {
            const ratio = Math.min(MAX_DIM / width, MAX_DIM / height);
            width = Math.round(width * ratio);
            height = Math.round(height * ratio);
          }
          
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          if (!ctx) return resolve(rawFile);
          
          ctx.fillStyle = "#ffffff";
          ctx.fillRect(0, 0, width, height);
          ctx.drawImage(img, 0, 0, width, height);
          
          canvas.toBlob((blob) => {
            if (!blob) return resolve(rawFile);
            const baseName = rawFile.name.includes('.') ? rawFile.name.substring(0, rawFile.name.lastIndexOf('.')) : rawFile.name;
            resolve(new File([blob], `${baseName}.jpg`, { type: "image/jpeg", lastModified: Date.now() }));
          }, "image/jpeg", 0.85);
        };
        img.onerror = () => resolve(rawFile);
        img.src = URL.createObjectURL(rawFile);
      });
    }

    if (file.size > 10 * 1024 * 1024) {
      setMessage("Upload failed: The file is too large. Please keep it under 10 MB.");
      return;
    }

    const body = new FormData();
    body.append("file", file);

    try {
      const response = await fetch("/api/uploads", { method: "POST", body });

      let data;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        const text = await response.text();
        console.error("Upload API returned non-JSON:", response.status, text);
        if (response.status === 413) {
          setMessage(`Upload failed (413): The file is too large for the server environment (e.g. Next.js, Vercel, or Nginx limits).`);
        } else {
          setMessage(`Upload failed (${response.status}): Server returned invalid response.`);
        }
        return;
      }

      if (!response.ok) {
        setMessage(data.error ?? "Upload failed.");
        return;
      }

      setForm((state) => ({ ...state, [target]: data.url }));
      setMessage("File uploaded successfully.");
    } catch (error) {
      console.error("Upload fetch error:", error);
      setMessage(`Upload failed: ${error instanceof Error ? error.message : "Network error"}`);
    }
  };

  const renderModuleSpecificFields = () => {
    switch (activeModule) {
      case "products":
      case "blogs":
      case "csr":
  case "pages":
        return (
          <>
            {activeModule === "products" ? (
              <>
                <div className="md:col-span-2">
                  <select
                    className="w-full border rounded-lg px-3 py-2 text-sm"
                    value={form.extra_data.category ?? ""}
                    onChange={(e) => setForm((s) => ({ ...s, extra_data: { ...s.extra_data, category: e.target.value } }))}
                  >
                    <option value="" disabled>Select Category</option>
                    <option value="TMT">TMT</option>
                    <option value="Structural">Structural</option>
                  </select>
                </div>
                {form.extra_data.category === "TMT" && (
                  <div className="md:col-span-2">
                    <select
                      className="w-full border rounded-lg px-3 py-2 text-sm mt-2"
                      value={form.extra_data.subcategory ?? ""}
                      onChange={(e) => setForm((s) => ({ ...s, extra_data: { ...s.extra_data, subcategory: e.target.value } }))}
                    >
                      <option value="" disabled>Select Subcategory (Optional)</option>
                      <option value="Bars">Bars</option>
                      <option value="Rings">Rings</option>
                    </select>
                  </div>
                )}
              </>
            ) : null}
            {activeModule === "csr" ? (
              <input className="md:col-span-2 border rounded-lg px-3 py-2 text-sm" placeholder="Event Date (YYYY-MM-DD)" value={form.extra_data.event_date ?? ""} onChange={(e) => setForm((s) => ({ ...s, extra_data: { ...s.extra_data, event_date: e.target.value } }))} />
            ) : null}
            <div className="md:col-span-2 space-y-2">
              <div className="flex gap-2 flex-wrap">
                <button type="button" className="border rounded px-2 py-1 text-xs" onClick={() => applyRich("bold")}>Bold</button>
                <button type="button" className="border rounded px-2 py-1 text-xs" onClick={() => applyRich("italic")}>Italic</button>
                <button type="button" className="border rounded px-2 py-1 text-xs" onClick={() => applyRich("formatBlock", "h2")}>H2</button>
                <button type="button" className="border rounded px-2 py-1 text-xs" onClick={() => applyRich("insertUnorderedList")}>List</button>
              </div>
              <div
                ref={richEditorRef}
                contentEditable
                className="min-h-40 rounded-lg border px-3 py-2 text-sm"
                onInput={() => setForm((s) => ({ ...s, content: richEditorRef.current?.innerHTML ?? "" }))}
                suppressContentEditableWarning
              />
              <p className="text-xs text-black/50">Rich editor for {activeModule} content.</p>
            </div>
          </>
        );
      case "dealers":
        return (
          <>
            <input className="border rounded-lg px-3 py-2 text-sm" placeholder="City" value={form.extra_data.city ?? ""} onChange={(e) => setForm((s) => ({ ...s, extra_data: { ...s.extra_data, city: e.target.value } }))} />
            <input className="border rounded-lg px-3 py-2 text-sm" placeholder="State" value={form.extra_data.state ?? ""} onChange={(e) => setForm((s) => ({ ...s, extra_data: { ...s.extra_data, state: e.target.value } }))} />
            <input className="border rounded-lg px-3 py-2 text-sm" placeholder="Dealer Phone" value={form.extra_data.phone ?? ""} onChange={(e) => setForm((s) => ({ ...s, extra_data: { ...s.extra_data, phone: e.target.value } }))} />
            <input className="border rounded-lg px-3 py-2 text-sm" placeholder="Dealer Email" value={form.extra_data.email ?? ""} onChange={(e) => setForm((s) => ({ ...s, extra_data: { ...s.extra_data, email: e.target.value } }))} />
            <input className="border rounded-lg px-3 py-2 text-sm" placeholder="Latitude (e.g. 13.0827)" value={form.extra_data.latitude ?? ""} onChange={(e) => setForm((s) => ({ ...s, extra_data: { ...s.extra_data, latitude: e.target.value } }))} />
            <input className="border rounded-lg px-3 py-2 text-sm" placeholder="Longitude (e.g. 80.2707)" value={form.extra_data.longitude ?? ""} onChange={(e) => setForm((s) => ({ ...s, extra_data: { ...s.extra_data, longitude: e.target.value } }))} />
            <input className="md:col-span-2 border rounded-lg px-3 py-2 text-sm" placeholder="Google Map URL (Optional fallback)" value={form.extra_data.map_url ?? ""} onChange={(e) => setForm((s) => ({ ...s, extra_data: { ...s.extra_data, map_url: e.target.value } }))} />
            
            {(form.extra_data.latitude && form.extra_data.longitude) || form.extra_data.map_url ? (
              <div className="md:col-span-2 h-48 lg:h-64 rounded-xl overflow-hidden shadow-inner border border-black/10 mt-2 bg-gray-200">
                <iframe
                  key={`${form.extra_data.latitude}-${form.extra_data.longitude}-${form.extra_data.map_url}`}
                  src={
                    form.extra_data.latitude && form.extra_data.longitude
                      ? `https://maps.google.com/maps?q=${form.extra_data.latitude},${form.extra_data.longitude}&t=&z=15&ie=UTF8&iwloc=&output=embed`
                      : form.extra_data.map_url
                  }
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  title="Admin Map Preview"
                />
              </div>
            ) : null}
          </>
        );
      case "careers":
        return (
          <>
            <input className="border rounded-lg px-3 py-2 text-sm" placeholder="Location" value={form.extra_data.location ?? ""} onChange={(e) => setForm((s) => ({ ...s, extra_data: { ...s.extra_data, location: e.target.value } }))} />
            <input className="border rounded-lg px-3 py-2 text-sm" placeholder="Employment Type" value={form.extra_data.employment_type ?? ""} onChange={(e) => setForm((s) => ({ ...s, extra_data: { ...s.extra_data, employment_type: e.target.value } }))} />
          </>
        );
      case "mediaEvents":
        return <input className="border rounded-lg px-3 py-2 text-sm" placeholder="Event Date (YYYY-MM-DD)" value={form.extra_data.event_date ?? ""} onChange={(e) => setForm((s) => ({ ...s, extra_data: { ...s.extra_data, event_date: e.target.value } }))} />;
      case "projects":
        return <input className="border rounded-lg px-3 py-2 text-sm" placeholder="Project Scope" value={form.extra_data.scope ?? ""} onChange={(e) => setForm((s) => ({ ...s, extra_data: { ...s.extra_data, scope: e.target.value } }))} />;
      case "popups":
        return (
          <>
            <input className="border rounded-lg px-3 py-2 text-sm" placeholder="Start DateTime" value={form.extra_data.starts_at ?? ""} onChange={(e) => setForm((s) => ({ ...s, extra_data: { ...s.extra_data, starts_at: e.target.value } }))} />
            <input className="border rounded-lg px-3 py-2 text-sm" placeholder="End DateTime" value={form.extra_data.ends_at ?? ""} onChange={(e) => setForm((s) => ({ ...s, extra_data: { ...s.extra_data, ends_at: e.target.value } }))} />
          </>
        );
      case "calculators": {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let paramsObj: any = {
          weightDivisor: 162,
          weightFormula: "(((d * d) / divisor) * l) * q",
          bundleFormula: "Math.ceil(q / barsPerBundle)",
          barsPerBundle: { "8": 10, "10": 7, "12": 5, "16": 3, "20": 2 },
          multipliers: { residential: 4, commercial: 5, infrastructure: 6 },
          pricePerKg: 0
        };
        let isInvalidJson = false;
        if (form.extra_data.parameters && form.extra_data.parameters.trim() !== "") {
          try {
            paramsObj = JSON.parse(form.extra_data.parameters);
          } catch {
            isInvalidJson = true;
          }
        }

        const updateJsonNumber = (path: string[], val: number) => {
          const newObj = JSON.parse(JSON.stringify(paramsObj));
          let curr = newObj;
          for (let i = 0; i < path.length - 1; i++) {
            curr = curr[path[i]];
          }
          curr[path[path.length - 1]] = val;
          setForm(s => ({ ...s, extra_data: { ...s.extra_data, parameters: JSON.stringify(newObj, null, 2) }}));
        };

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const renderJsonLevel = (obj: any, path: string[], isLast: boolean, indent: number = 1): JSX.Element => {
          if (typeof obj === "number") {
            return (
              <input 
                type="number" 
                value={obj} 
                onChange={e => updateJsonNumber(path, e.target.value === '' ? 0 : Number(e.target.value))} 
                className="bg-slate-800/80 border border-slate-700 text-[#79c0ff] w-20 outline-none rounded px-1.5 py-0.5 ml-1 text-xs focus:border-[#58a6ff] transition-colors appearance-none" 
              />
            );
          }
          if (typeof obj === "string") {
            return <span className="text-[#a5d6ff] ml-1">&quot;{obj}&quot;</span>;
          }
          if (typeof obj === "boolean") {
            return <span className="text-[#ff7b72] ml-1">{obj ? "true" : "false"}</span>;
          }
          if (typeof obj === "object" && obj !== null) {
            const keys = Object.keys(obj);
            return (
              <span>
                <span className="text-[#c9d1d9] ml-1">{"{"}</span>
                <div className="flex flex-col">
                {keys.map((k, i) => (
                  <div key={k} style={{ paddingLeft: `${indent * 1.5}rem` }} className="flex items-center my-0.5">
                    <span className="text-[#7ee787]">&quot;{k}&quot;</span>
                    <span className="text-[#c9d1d9] mr-1">:</span>
                    {renderJsonLevel(obj[k], [...path, k], i === keys.length - 1, indent + 1)}
                    <span className="text-[#c9d1d9]">{i < keys.length - 1 ? "," : ""}</span>
                  </div>
                ))}
                </div>
                <span className="text-[#c9d1d9]" style={{ paddingLeft: `${(indent - 1) * 1.5}rem` }}>{"}"}</span>
              </span>
            );
          }
          return <span className="text-[#8b949e] ml-1">null</span>;
        };

        return (
          <>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-semibold text-slate-700">Construction Formula</label>
              <div className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-600 font-mono select-all">
                {form.extra_data.formula || "totalArea * multiplier"}
              </div>
              <p className="text-xs text-slate-500">Formula structure is read-only to prevent calculation errors.</p>
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-semibold text-slate-700">Calculator Parameters</label>
              {isInvalidJson ? (
                <>
                  <textarea 
                    className="min-h-32 w-full rounded-lg border font-mono border-red-300 bg-red-50 px-3 py-2 text-sm outline-none ring-red-500/30 transition focus:ring-2" 
                    value={form.extra_data.parameters ?? ""} 
                    onChange={(e) => setForm((s) => ({ ...s, extra_data: { ...s.extra_data, parameters: e.target.value } }))} 
                  />
                  <p className="text-xs text-red-500">The current parameters are not valid JSON. Please fix the syntax.</p>
                </>
              ) : (
                <>
                  <div className="w-full rounded-lg border border-slate-800 bg-[#0d1117] p-4 text-sm font-mono overflow-x-auto shadow-inner">
                    {renderJsonLevel(paramsObj, [], true, 1)}
                  </div>
                  <p className="text-xs text-slate-500">Interactive code editor: Only numeric parameter values can be updated. Keys and expressions are locked.</p>
                </>
              )}
            </div>
          </>
        );
      }
      default:
        return null;
    }
  };

  const renderViewingModal = () => {
    if (!viewingItem) return null;

    const isJobApp = activeModule === "job_applications";

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm" onClick={() => setViewingItem(null)}>
        <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
          <div className="mb-4 flex items-start justify-between">
            <div>
              <h3 className="font-heading text-2xl text-slate-900">{isJobApp ? "Job Application Details" : "Enquiry Details"}</h3>
              <p className="text-sm text-slate-500">
                Received on {viewingItem.created_at ? new Date(String(viewingItem.created_at)).toLocaleString() : "N/A"}
              </p>
            </div>
            <button onClick={() => setViewingItem(null)} className="text-slate-500 hover:text-slate-800">&times;</button>
          </div>

          <div className="space-y-3 border-t border-slate-200 pt-4 text-sm">
            <p><strong>ID:</strong> {viewingItem.id}</p>
            <p><strong>Name:</strong> {String(viewingItem.name ?? "N/A")}</p>
            <p><strong>Email:</strong> {String(viewingItem.email && String(viewingItem.email) !== 'no-email@provided.com' ? viewingItem.email : "N/A")}</p>
            <p><strong>Phone:</strong> {String(viewingItem.phone ?? "N/A")}</p>
            {isJobApp ? (
              <>
                {viewingItem.career_id ? <p><strong>Career ID:</strong> {String(viewingItem.career_id)}</p> : null}
                {viewingItem.resume_url ? (
                  <p><strong>Resume:</strong> <a href={String(viewingItem.resume_url)} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">View Document</a></p>
                ) : null}
                <p className="font-semibold mt-4">Questionnaire & Cover Letter:</p>
                <div className="max-h-60 overflow-y-auto whitespace-pre-wrap rounded-lg border bg-slate-50 p-3 text-slate-800">{String(viewingItem.cover_letter ?? "No details provided.")}</div>
              </>
            ) : (
              <>
                <p><strong>Type:</strong> <span className="font-semibold uppercase">{String(viewingItem.enquiry_type ?? "N/A")}</span></p>
                {viewingItem.product_name ? <p><strong>Product:</strong> {String(viewingItem.product_name)}</p> : null}
                <p className="font-semibold mt-4">Message:</p>
                <div className="max-h-60 overflow-y-auto whitespace-pre-wrap rounded-lg border bg-slate-50 p-3 text-slate-800">{String(viewingItem.message ?? "No message provided.")}</div>
              </>
            )}
          </div>
          <button onClick={() => setViewingItem(null)} className="mt-6 rounded-lg bg-slate-800 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700">Close</button>
        </div>
      </div>
    );
  };

  const renderListPanel = () => (
    <div className="rounded-2xl border border-slate-200/80 bg-white/95 p-6 shadow-lg shadow-slate-200/60">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h3 className="font-heading text-2xl text-slate-900">{activeDef.label}</h3>
        {activeDef.kind === "content" ? (
          <div className="flex flex-wrap items-center gap-2">
            {activeModule === "products" && (
              <div className="mr-2 flex rounded-lg bg-slate-100 p-1">
                <button
                  onClick={() => setProductCategoryTab("All")}
                  className={`rounded-md px-3 py-1 text-sm transition-colors ${productCategoryTab === "All" ? "bg-white font-semibold shadow-sm" : "text-slate-600 hover:text-black"}`}
                >
                  All
                </button>
                <button
                  onClick={() => setProductCategoryTab("TMT")}
                  className={`rounded-md px-3 py-1 text-sm transition-colors ${productCategoryTab === "TMT" ? "bg-white font-semibold shadow-sm" : "text-slate-600 hover:text-black"}`}
                >
                  TMT
                </button>
                <button
                  onClick={() => setProductCategoryTab("Structural")}
                  className={`rounded-md px-3 py-1 text-sm transition-colors ${productCategoryTab === "Structural" ? "bg-white font-semibold shadow-sm" : "text-slate-600 hover:text-black"}`}
                >
                  Structural
                </button>
              </div>
            )}
            <input value={search} onChange={(e) => setSearch(e.target.value)} className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-red-500/30 transition focus:ring-2" placeholder="Search" />
            <button onClick={fetchItems} className="rounded-lg bg-slate-900 px-3 py-2 text-sm text-white transition hover:bg-slate-800" type="button">Apply</button>
          </div>
        ) : null}
      </div>

      <div className="max-h-[70vh] overflow-auto rounded-xl border border-slate-200">
        <table className="min-w-full text-sm">
          <thead className="sticky top-0 z-10">
            <tr className="border-b bg-slate-50 text-left text-slate-600">
              <th className="px-3 py-2 pr-3">{activeDef.kind === 'support' ? 'Contact Details' : 'Title / Name'}</th>
              <th className="px-3 py-2 pr-3">{activeDef.kind === 'support' ? 'Type / Subject' : 'Status'}</th>
              <th className="px-3 py-2 pr-3">{activeDef.kind === 'support' ? 'Message' : 'Updated'}</th>
              <th className="px-3 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {displayedItems.map((row) => (
              <tr key={row.id} className="border-b last:border-b-0 odd:bg-white even:bg-slate-50/50">
                <td className="px-3 py-3 pr-3">
                  {activeDef.kind === "content" ? (
                    <>
                      <Link href={`/admin/modules/${activeModule}/${row.id}`} className="font-semibold text-slate-900 hover:underline">
                        {String(row.title ?? row.name ?? `#${row.id}`)}
                      </Link>
                      {row.slug ? <div className="text-xs text-slate-500">/{String(row.slug)}</div> : null}
                    </>
                  ) : (
                    <div className="min-w-[120px]">
                      <div className="font-semibold text-slate-900">{String(row.name ?? `#${row.id}`)}</div>
                      {row.email && row.email !== "no-email@provided.com" ? <div className="text-xs text-slate-500">{String(row.email)}</div> : null}
                      {row.phone ? <div className="text-xs text-slate-600 font-medium">{String(row.phone)}</div> : null}
                    </div>
                  )}
                </td>
                <td className="px-3 py-3 pr-3">
                  {activeDef.kind === "content" ? (
                    <span className="inline-flex rounded-full bg-slate-200 px-2.5 py-1 text-xs font-semibold capitalize text-slate-700">{String(row.status ?? "-")}</span>
                  ) : (
                <span className="inline-flex rounded-full bg-blue-100 text-blue-700 px-2.5 py-1 text-xs font-bold uppercase tracking-wider">{String(row.enquiry_type ?? row.subject ?? (activeModule === "job_applications" ? "Job App" : "enquiry"))}</span>
                  )}
                </td>
                <td className="px-3 py-3 pr-3 text-slate-600">
                  {activeDef.kind === "content" ? (
                    row.updated_at ? new Date(String(row.updated_at)).toLocaleDateString() : "-"
                  ) : (
                    <div className="text-xs max-h-32 overflow-y-auto whitespace-pre-wrap min-w-[200px] max-w-[400px] border border-gray-100 p-2 rounded-lg bg-slate-50 text-slate-700">
                  {String(row.message ?? row.notes ?? row.cover_letter ?? "No details provided.")}
                    </div>
                  )}
                </td>
                <td className="px-3 py-3">
                  {activeDef.kind === "content" ? (
                    <div className="space-x-3">
                      <Link href={`/admin/modules/${activeModule}/${row.id}`} className="font-semibold text-slate-700 hover:underline">View</Link>
                      <button onClick={() => editRow(row)} className="font-semibold text-blue-700 hover:underline">Edit</button>
                      <button onClick={() => deleteRow(row.id)} className="font-semibold text-red-700 hover:underline">Delete</button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <button onClick={() => setViewingItem(row)} className="font-semibold text-blue-700 hover:underline">View</button>
                      {activeModule === "job_applications" && row.resume_url ? <a href={String(row.resume_url)} target="_blank" rel="noopener noreferrer" className="font-semibold text-amber-600 hover:underline whitespace-nowrap">Resume</a> : null}
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {!loading && !displayedItems.length ? <p className="mt-4 text-sm text-slate-500">No records found.</p> : null}
      {loading ? <p className="mt-4 text-sm text-slate-500">Loading...</p> : null}
      {message ? <p className="mt-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">{message}</p> : null}
    </div>
  );

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
      <aside className="h-fit max-h-[calc(100vh-8rem)] overflow-y-auto rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-lg shadow-slate-200/60 backdrop-blur lg:sticky lg:top-28 lg:col-span-3">
        <h2 className="mb-3 font-heading text-xl text-slate-900">Modules</h2>
        <div className="space-y-2">
          {MODULES.map((module) => (
            <button
              key={module.key}
              onClick={() => {
                setActiveModule(module.key);
                setSearch("");
                setProductCategoryTab("All");
                resetForm();
              }}
              className={`w-full rounded-xl px-3 py-2 text-left text-sm font-semibold transition ${activeModule === module.key ? "bg-gradient-to-r from-slate-900 to-slate-700 text-white shadow-md" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
            >
              {module.label}
            </button>
          ))}
        </div>
      </aside>

      <section className="lg:col-span-9 space-y-6">
        {activeDef.kind === "certifications" ? <AdminCertificationsPanel /> : null}

        {renderViewingModal()}

        {activeDef.kind === "content" ? (
          <div className="grid gap-6 xl:grid-cols-2">
            <div className="rounded-2xl border border-slate-200/80 bg-white/95 p-6 shadow-lg shadow-slate-200/60 xl:sticky xl:top-28 xl:max-h-[calc(100vh-8rem)] xl:overflow-y-auto">
              <h3 className="mb-1 font-heading text-2xl text-slate-900">{editingId ? "Edit" : "Create"} {activeDef.label}</h3>
              <p className="mb-2 text-sm text-slate-600">{activeDef.description}</p>
              <p className="mb-4 text-xs text-slate-500">Tip: Use the table on the right to quickly edit or delete records without leaving this form.</p>

              <form onSubmit={submitForm} className="grid gap-3 md:grid-cols-2">
                <input required className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-red-500/30 transition focus:ring-2" placeholder="Title" value={form.title} onChange={(e) => setForm((s) => ({ ...s, title: e.target.value }))} />
                <select className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-red-500/30 transition focus:ring-2" value={form.status} onChange={(e) => setForm((s) => ({ ...s, status: e.target.value }))}>
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>

                {activeModule !== "calculators" ? (
                  <textarea className="min-h-20 rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-red-500/30 transition focus:ring-2 md:col-span-2" placeholder="Short description" value={form.short_description} onChange={(e) => setForm((s) => ({ ...s, short_description: e.target.value }))} />
                ) : null}

                {activeModule !== "blogs" && activeModule !== "csr" && activeModule !== "pages" && activeModule !== "products" && activeModule !== "calculators" ? (
                  <textarea className="min-h-32 rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-red-500/30 transition focus:ring-2 md:col-span-2" placeholder="Content" value={form.content} onChange={(e) => setForm((s) => ({ ...s, content: e.target.value }))} />
                ) : null}

                {activeModule !== "calculators" ? (
                  <>
                    <div className="space-y-2">
                      <input className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-red-500/30 transition focus:ring-2" placeholder="Cover image URL" value={form.cover_image} onChange={(e) => setForm((s) => ({ ...s, cover_image: e.target.value }))} />
                      <input type="file" ref={coverImageInputRef} accept="image/*,.png,.jpg,.jpeg,.gif,.webp,.svg" className="w-full rounded-lg border border-dashed border-slate-300 px-3 py-2 text-sm file:mr-3 file:rounded-md file:border-0 file:bg-slate-100 file:px-3 file:py-1.5 file:text-xs file:font-semibold" onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) uploadFromDevice(file, "cover_image");
                      }} />
                    </div>
                    <div className="space-y-2">
                      <input className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-red-500/30 transition focus:ring-2" placeholder="File URL (PDF, Document, etc.)" value={form.file_url} onChange={(e) => setForm((s) => ({ ...s, file_url: e.target.value }))} />
                      <input type="file" ref={fileUrlInputRef} accept="image/*,.png,.jpg,.jpeg,.gif,.webp,.svg,video/*,application/pdf,.doc,.docx" className="w-full rounded-lg border border-dashed border-slate-300 px-3 py-2 text-sm file:mr-3 file:rounded-md file:border-0 file:bg-slate-100 file:px-3 file:py-1.5 file:text-xs file:font-semibold" onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) uploadFromDevice(file, "file_url");
                      }} />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <input className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-red-500/30 transition focus:ring-2" placeholder="Video URL (YouTube/Vimeo)" value={form.video_url} onChange={(e) => setForm((s) => ({ ...s, video_url: e.target.value }))} />
                    </div>
                  </>
                ) : null}

                {renderModuleSpecificFields()}

                {activeModule !== "calculators" ? (
                  <>
                    <input type="number" className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-red-500/30 transition focus:ring-2" placeholder="Sort order" value={form.sort_order} onChange={(e) => setForm((s) => ({ ...s, sort_order: Number(e.target.value) }))} />
                    <label className="flex items-center gap-2 text-sm text-slate-700"><input type="checkbox" checked={form.featured} onChange={(e) => setForm((s) => ({ ...s, featured: e.target.checked }))} /> Featured</label>
                  </>
                ) : null}

                <div className="flex gap-2 md:col-span-2">
                  <button className="rounded-lg bg-gradient-to-r from-red-500 to-rose-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-rose-400/30">{editingId ? "Update" : "Create"}</button>
                  {editingId ? <button type="button" onClick={resetForm} className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700">Cancel</button> : null}
                </div>
              </form>
            </div>
            {renderListPanel()}
          </div>
        ) : null}

        {activeDef.kind !== "certifications" ? (
          activeDef.kind === "support" ? renderListPanel() : null
        ) : null}
      </section>
    </div>
  );
}

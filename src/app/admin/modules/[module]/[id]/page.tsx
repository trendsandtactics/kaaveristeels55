import Link from "next/link";
import { notFound } from "next/navigation";
import { getAdminModuleItemById } from "@/lib/dynamic-cms";

type PageProps = {
  params: Promise<{ module: string; id: string }>;
};

const MODULE_LABELS: Record<string, string> = {
  products: "Products",
  mediaEvents: "Media & Events",
  blogs: "Blogs",
  projects: "Projects",
  careers: "Careers",
  dealers: "Dealers",
  galleries: "Photo/Video Gallery",
  brochures: "Brochures",
  popups: "Popups",
  csr: "CSR",
};

function toText(value: unknown): string {
  if (value === null || value === undefined) return "-";
  if (typeof value === "boolean") return value ? "Yes" : "No";
  return String(value);
}

function parseExtraData(raw: unknown): Record<string, unknown> {
  if (!raw) return {};
  if (typeof raw === "object") return raw as Record<string, unknown>;
  if (typeof raw === "string") {
    try {
      const parsed = JSON.parse(raw);
      return typeof parsed === "object" && parsed ? (parsed as Record<string, unknown>) : {};
    } catch {
      return {};
    }
  }
  return {};
}

export default async function AdminModuleItemPage({ params }: PageProps) {
  const { module, id } = await params;
  const numericId = Number(id);

  if (!Number.isFinite(numericId)) {
    notFound();
  }

  const item = await getAdminModuleItemById(module, numericId);

  if (!item) {
    notFound();
  }

  const label = MODULE_LABELS[module] ?? module;
  const extraData = parseExtraData(item.extra_data);

  return (
    <div className="min-h-screen bg-slate-100 px-6 pb-12 pt-32 md:px-12">
      <div className="mx-auto max-w-5xl space-y-6">
        <header className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Dynamic Content Details</p>
          <h1 className="mt-2 font-heading text-3xl text-slate-900">{label} • #{item.id}</h1>
          <p className="mt-2 text-sm text-slate-600">Read-only view of all available fields for this dynamic module record.</p>

          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/admin/modules" className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
              Back to Modules
            </Link>
          </div>
        </header>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Title</p>
              <p className="mt-1 text-sm text-slate-900">{toText(item.title)}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Slug</p>
              <p className="mt-1 text-sm text-slate-900">{toText(item.slug)}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Status</p>
              <p className="mt-1 text-sm text-slate-900">{toText(item.status)}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Featured</p>
              <p className="mt-1 text-sm text-slate-900">{Number(item.featured) ? "Yes" : "No"}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Sort Order</p>
              <p className="mt-1 text-sm text-slate-900">{toText(item.sort_order)}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Updated At</p>
              <p className="mt-1 text-sm text-slate-900">{toText(item.updated_at)}</p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Short Description</p>
              <p className="mt-1 whitespace-pre-wrap text-sm text-slate-800">{toText(item.short_description)}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Content</p>
              <p className="mt-1 whitespace-pre-wrap rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-800">{toText(item.content)}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Cover Image URL</p>
                <p className="mt-1 break-all text-sm text-slate-900">{toText(item.cover_image)}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">File URL</p>
                <p className="mt-1 break-all text-sm text-slate-900">{toText(item.file_url)}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Video URL</p>
                <p className="mt-1 break-all text-sm text-slate-900">{toText(item.video_url)}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="font-heading text-2xl text-slate-900">Extra Data</h2>
          {Object.keys(extraData).length ? (
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {Object.entries(extraData).map(([key, value]) => (
                <div key={key} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{key.replaceAll("_", " ")}</p>
                  <p className="mt-1 break-words text-sm text-slate-900">{toText(value)}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-3 text-sm text-slate-600">No module-specific extra data for this record.</p>
          )}
        </section>
      </div>
    </div>
  );
}

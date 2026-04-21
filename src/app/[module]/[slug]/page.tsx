import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getPublicModuleItemBySlug } from "@/lib/dynamic-cms";
import { resolveMediaUrl } from "@/lib/media";

const ALLOWED_MODULES = new Set(["products", "mediaEvents", "blogs", "projects", "careers", "dealers", "galleries", "brochures", "popups", "csr"]);
const MODULE_TITLES: Record<string, string> = {
  products: "Products",
  mediaEvents: "Media & Events",
  blogs: "Blogs",
  projects: "Projects",
  careers: "Careers",
  dealers: "Dealers",
  galleries: "Galleries",
  brochures: "Brochures",
  popups: "Popups",
  csr: "Corporate Social Responsibility",
};

export default async function ModuleDetailPage({ params }: { params: Promise<{ module: string; slug: string }> }) {
  const { module, slug } = await params;

  if (!ALLOWED_MODULES.has(module)) {
    notFound();
  }

  const item = await getPublicModuleItemBySlug(module, slug);
  if (!item) {
    notFound();
  }

  const title = String(item.title ?? "Detail");
  const description = String(item.short_description ?? item.content ?? "");
  const image = resolveMediaUrl(item.cover_image ?? item.file_url, "/image/kaaveriabout.png");
  const moduleTitle = MODULE_TITLES[module] ?? module;

  return (
    <main className="min-h-screen pt-24 bg-gray-50">
      <section className="w-full bg-gradient-to-r from-accent-yellow via-[#FFD700] to-accent-yellow py-16 px-6 border-b border-black/10">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-[0.18em] text-black/60 font-semibold">{moduleTitle}</p>
          <h1 className="font-['Open_Sans'] text-4xl md:text-6xl text-black mt-3">{title}</h1>
          <p className="text-black/75 mt-3 max-w-3xl">{description}</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="relative w-full h-[360px]"><Image src={image} alt={title} fill className="object-contain" sizes="100vw" priority /></div>
        <article className="mt-8 rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: String(item.content ?? "") }} />
        </article>

        <div className="mt-6">
          <Link href={`/${module}`} className="text-sm font-semibold text-accent-red">← Back to {moduleTitle}</Link>
        </div>
      </section>
    </main>
  );
}

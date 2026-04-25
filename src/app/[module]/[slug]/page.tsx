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

      {/* Body Section - Strict 50/50 Split */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 border border-black/5 group">
          
          {/* Left 50%: Image */}
          <div className="relative w-full h-full min-h-[400px] md:min-h-[500px] overflow-hidden bg-gray-100 min-w-0">
            <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 1024px) 100vw, 50vw" priority />
          </div>

          {/* Right 50%: Content */}
          <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 min-w-0 overflow-hidden">
            <h2 className="font-heading text-3xl md:text-4xl text-black font-bold mb-6">
              Overview
            </h2>
            <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-headings:text-black prose-p:text-black/80 prose-a:text-accent-red hover:prose-a:text-red-700 prose-li:marker:text-accent-red font-body leading-relaxed break-words overflow-hidden">
              <div dangerouslySetInnerHTML={{ __html: String(item.content ?? description) }} />
            </div>
            
            <div className="mt-10">
              <Link href={`/${module}`} className="px-8 py-4 bg-black text-white font-body text-sm uppercase tracking-widest font-bold hover:bg-accent-red transition-colors duration-300 shadow-md rounded-sm inline-block">
                ← Back to {moduleTitle}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getPublicModuleItemBySlug } from "@/lib/dynamic-cms";
import { resolveMediaUrl } from "@/lib/media";
import ClientFadeUp from "@/components/ClientFadeUp";

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
    <main className="w-screen relative left-1/2 -translate-x-1/2 bg-white">
      <ClientFadeUp className="flex flex-col lg:flex-row w-full min-h-screen">
          
          {/* Left 55%: Image Area - Transparent Background */}
          <div className="relative w-full lg:w-[55%] min-h-[50vh] lg:min-h-screen flex items-center justify-center pt-24 lg:pt-0">
            <Image 
              src={image} 
              alt={title} 
              fill 
              className="object-contain mix-blend-multiply hover:scale-[1.02] transition-transform duration-1000 ease-out lg:p-12"
              sizes="(max-width: 1024px) 100vw, 55vw"
              priority
            />
          </div>

          {/* Right 45%: Content Area */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center px-8 py-16 lg:px-20 xl:px-28 pt-8 lg:pt-32">
            <Link href={`/${module}`} className="text-xs font-bold text-gray-500 hover:text-black uppercase tracking-widest mb-12 inline-flex items-center gap-2 transition-colors">
              <span>&larr;</span> Back to {moduleTitle}
            </Link>
            
            <h1 className="font-heading text-5xl lg:text-6xl xl:text-7xl text-black mb-8 font-bold uppercase tracking-tighter">
              {title}
            </h1>
            
            <h2 className="text-xl lg:text-2xl font-light text-gray-900 mb-8 tracking-widest uppercase border-b border-gray-200 pb-6">
              Overview
            </h2>
            
            <div className="prose prose-lg max-w-none prose-p:font-light prose-p:text-gray-600 prose-p:leading-relaxed prose-headings:font-light prose-headings:text-gray-900 prose-a:text-black hover:prose-a:text-gray-600 prose-li:text-gray-600 font-body space-y-8">
              <div dangerouslySetInnerHTML={{ __html: String(item.content ?? description) }} />
              
              {module === "products" && (
                <div className="pt-10">
                  <Link href={`/contact-us?product=${slug}`} className="inline-flex items-center justify-center bg-black text-white px-12 py-5 text-sm font-medium tracking-widest uppercase hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 w-full sm:w-auto shadow-lg hover:shadow-xl">
                    Enquire About This Product
                  </Link>
                </div>
              )}
            </div>
          </div>

      </ClientFadeUp>
    </main>
  );
}

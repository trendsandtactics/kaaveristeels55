import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getPublicModuleItemBySlug } from "@/lib/dynamic-cms";
import { resolveMediaUrl } from "@/lib/media";
import ClientFadeUp from "@/components/ClientFadeUp";
import ApplyNowModal from "@/components/ApplyNowModal";

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
    <main className="w-screen relative left-1/2 -translate-x-1/2 bg-white flex flex-col">
      
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-[#FFD700] via-[#FFDF33] to-[#FFD700] pt-28 pb-10 md:pt-36 md:pb-16 px-6 relative overflow-hidden shadow-sm border-b border-black/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_60%)] pointer-events-none mix-blend-overlay" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none mix-blend-overlay opacity-30" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <Link href={`/${module}`} className="text-xs font-bold text-black/60 hover:text-black uppercase tracking-widest mb-6 inline-flex items-center gap-2 transition-colors">
            <span>&larr;</span> Back to {moduleTitle}
          </Link>
          <h1 className="font-sans text-3xl md:text-4xl lg:text-5xl text-black mt-2 drop-shadow-md font-extrabold max-w-4xl uppercase tracking-tight">
            {title}
          </h1>
          {item.short_description && (
            <p className="font-body text-black/80 mt-5 max-w-3xl text-lg md:text-xl font-medium leading-relaxed">
              {item.short_description}
            </p>
          )}
        </div>
      </section>

      <ClientFadeUp className="flex flex-col lg:flex-row w-full min-h-[85vh]">
          
          {/* Left 55%: Image Area - Transparent Background */}
          <div className="relative w-full lg:w-[55%] min-h-[50vh] flex items-center justify-center py-16 lg:py-0">
            <Image 
              src={image} 
              alt={title} 
              fill 
              className="object-contain mix-blend-multiply hover:scale-[1.02] transition-transform duration-1000 ease-out lg:p-16"
              sizes="(max-width: 1024px) 100vw, 55vw"
              priority
            />
          </div>

          {/* Right 45%: Content Area */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center px-8 py-12 lg:px-20 xl:px-28 lg:py-24">
            <h2 className="text-xl lg:text-2xl font-light text-gray-900 mb-8 tracking-widest uppercase border-b border-gray-200 pb-6">
              Overview
            </h2>
            
            <div className="prose prose-lg max-w-none prose-p:font-light prose-p:text-gray-600 prose-p:leading-relaxed prose-headings:font-light prose-headings:text-gray-900 prose-a:text-black hover:prose-a:text-gray-600 prose-li:text-gray-600 font-body space-y-8">
              <div dangerouslySetInnerHTML={{ __html: String(item.content ?? description) }} />
              
              {module === "products" && (
                <div className="pt-10">
                  <Link href={`/product-enquiry?product=${slug}`} className="inline-flex items-center justify-center bg-black text-white px-12 py-5 text-sm font-medium tracking-widest uppercase hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 w-full sm:w-auto shadow-lg hover:shadow-xl">
                    Enquire About This Product
                  </Link>
                </div>
              )}

              {module === "careers" && (
                <div className="pt-10 mt-10 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-1">Interested in this role?</h3>
                    <p className="text-sm text-gray-500">Apply now by filling out our quick application form.</p>
                  </div>
                  <ApplyNowModal careerId={Number(item.id) || undefined} jobTitle={title} />
                </div>
              )}
            </div>
          </div>

      </ClientFadeUp>
    </main>
  );
}

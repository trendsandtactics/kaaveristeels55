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

  if (!ALLOWED_MODULES.has(module)) notFound();

  const item = await getPublicModuleItemBySlug(module, slug);
  if (!item) notFound();

  const title = String(item.title ?? "Detail");
  const description = String(item.short_description ?? item.content ?? "");
  const image = resolveMediaUrl(item.cover_image ?? item.file_url, "/image/kaaveriabout.png");
  const moduleTitle = MODULE_TITLES[module] ?? module;

  /* ── BLOG layout ────────────────────────────────────────────── */
  if (module === "blogs") {
    return (
      <main className="w-screen relative left-1/2 -translate-x-1/2 min-h-screen bg-white flex flex-col">

        {/* Yellow hero */}
        <section className="w-full bg-[#FFD700] pt-24 pb-10 md:pt-32 md:pb-14 px-6">
          <div className="max-w-4xl mx-auto">
            <Link
              href={`/${module}`}
              className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-black/60 hover:text-black transition-colors mb-6"
            >
              ← Back to {moduleTitle}
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black uppercase tracking-tight leading-none">
              {title}
            </h1>
            {item.short_description && (
              <p className="mt-4 text-black/70 text-base md:text-lg font-medium max-w-2xl leading-relaxed">
                {item.short_description}
              </p>
            )}
          </div>
        </section>

<<<<<<< HEAD
        {/* Full-width image */}
        <div className="w-full max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative w-full aspect-[16/7] bg-gray-900 overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 896px, 100vw"
=======
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight uppercase">
            {title}
          </h1>

          {item.short_description && (
            <p className="text-lg text-gray-600 mb-8 font-medium leading-relaxed">
              {item.short_description}
            </p>
          )}

          <div className="relative w-full aspect-video mb-20 md:mb-24 rounded-xl overflow-hidden bg-gray-50 mt-8">
            <Image 
              src={image} 
              alt={title} 
              fill 
              className="object-contain mix-blend-multiply hover:scale-[1.02] transition-transform duration-1000 ease-out"
              sizes="(max-width: 1024px) 100vw, 1024px"
>>>>>>> e60aaea (jil)
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </div>

        {/* Content */}
        <ClientFadeUp className="w-full max-w-4xl mx-auto px-6 lg:px-8 py-16">
          <div className="prose prose-lg max-w-none
            prose-headings:font-bold prose-headings:text-black prose-headings:uppercase prose-headings:tracking-tight
            prose-p:text-gray-600 prose-p:leading-relaxed prose-p:font-light
            prose-strong:text-black prose-strong:font-semibold
            prose-li:text-gray-600 prose-li:leading-relaxed
            prose-a:text-black prose-a:underline hover:prose-a:text-yellow-600
          ">
            <div dangerouslySetInnerHTML={{ __html: String(item.content ?? description) }} />
          </div>
        </ClientFadeUp>
      </main>
    );
  }

  /* ── DEFAULT (products, careers, etc.) layout ───────────────── */
  return (
    <main className="w-screen relative left-1/2 -translate-x-1/2 bg-white flex flex-col">

      {/* Yellow hero banner */}
      <section className="w-full bg-[#FFD700] pt-24 pb-10 md:pt-32 md:pb-14 px-6 relative overflow-hidden">
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.08) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.08) 1px,transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href={`/${module}`}
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-black/60 hover:text-black transition-colors mb-6"
          >
            ← Back to {moduleTitle}
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black uppercase tracking-tight leading-none max-w-4xl">
            {title}
          </h1>
          {item.short_description && (
            <p className="mt-5 text-black/75 text-base md:text-xl font-medium max-w-3xl leading-relaxed">
              {item.short_description}
            </p>
          )}
        </div>
      </section>

      {/* Full-width hero image */}
      <div className="relative w-full aspect-[21/9] bg-gray-900 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-[2000ms] ease-out"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Overview section */}
      <ClientFadeUp className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-24">

        {/* Section heading with yellow accent */}
        <div className="flex items-center gap-6 mb-12">
          <span className="block w-10 h-1 bg-[#FFD700] rounded-full" />
          <h2 className="text-xs font-black uppercase tracking-[0.35em] text-gray-900">Overview</h2>
          <span className="block flex-1 h-px bg-gray-200" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Main content — wider column */}
          <div className="lg:col-span-8">
            <div className="prose prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-black prose-headings:uppercase prose-headings:tracking-tight prose-headings:mb-3
              prose-h2:text-2xl prose-h3:text-xl
              prose-p:text-gray-600 prose-p:leading-relaxed prose-p:font-light prose-p:mt-0
              prose-strong:text-black prose-strong:font-semibold
              prose-li:text-gray-600 prose-li:leading-relaxed prose-li:marker:text-[#FFD700]
              prose-a:text-black prose-a:font-semibold hover:prose-a:text-yellow-600
              space-y-6
            ">
              <div dangerouslySetInnerHTML={{ __html: String(item.content ?? description) }} />
            </div>

            {/* Product CTA */}
            {module === "products" && (
              <div className="mt-12 pt-10 border-t border-gray-200">
                <Link
                  href={`/product-enquiry?product=${slug}`}
                  className="
                    inline-flex items-center justify-center gap-3
                    bg-black text-white
                    px-10 py-5 text-[11px] font-black uppercase tracking-[0.25em]
                    hover:bg-[#FFD700] hover:text-black
                    transition-all duration-300
                    shadow-lg hover:shadow-xl hover:-translate-y-0.5
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black
                  "
                >
                  Enquire About This Product
                  <span className="text-base">→</span>
                </Link>
              </div>
            )}

            {/* Careers CTA */}
            {module === "careers" && (
              <div className="mt-12 pt-10 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-gray-50 p-8 rounded-none border-l-4 border-l-[#FFD700]">
                <div>
                  <h3 className="text-lg font-bold text-black uppercase tracking-tight mb-1">
                    Interested in this role?
                  </h3>
                  <p className="text-sm text-gray-500 font-light">
                    Apply now by filling out our quick application form.
                  </p>
                </div>
                <ApplyNowModal careerId={Number(item.id) || undefined} jobTitle={title} />
              </div>
            )}
          </div>

          {/* Sidebar — narrow column */}
          <aside className="lg:col-span-4 flex flex-col gap-6">
            {/* Highlight card */}
            <div className="bg-[#FFD700] p-8">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/60 mb-3">
                Category
              </p>
              <p className="text-xl font-extrabold text-black uppercase tracking-tight">
                {moduleTitle}
              </p>
            </div>

            {/* Quick info card */}
            {item.short_description && (
              <div className="border border-gray-200 p-8">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-3">
                  Summary
                </p>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  {item.short_description}
                </p>
              </div>
            )}

            {/* Back link */}
            <Link
              href={`/${module}`}
              className="
                flex items-center justify-between
                border border-gray-200 px-6 py-4
                text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500
                hover:border-black hover:text-black hover:bg-gray-50
                transition-all duration-200 group
              "
            >
              <span>← All {moduleTitle}</span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-base">↗</span>
            </Link>
          </aside>
        </div>
      </ClientFadeUp>
    </main>
  );
}
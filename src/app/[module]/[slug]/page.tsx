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
            <h1 className="font-sans lining-nums tabular-nums text-3xl md:text-4xl lg:text-5xl font-extrabold text-black uppercase tracking-tight leading-none">
              {title}
            </h1>
            {item.short_description && (
              <p className="mt-4 text-black/70 text-base md:text-lg font-medium max-w-2xl leading-relaxed">
                {item.short_description}
              </p>
            )}
          </div>
        </section>

        {/* Full-width image */}
        <div className="w-full max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative w-full aspect-[16/7] mt-8 rounded-xl bg-gray-900 overflow-hidden shadow-sm">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover hover:scale-[1.02] transition-transform duration-1000 ease-out"
              sizes="(min-width: 1024px) 896px, 100vw"
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
    <main className="w-screen relative left-1/2 -translate-x-1/2 min-h-screen bg-white flex flex-col">
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
          <h1 className="font-sans lining-nums tabular-nums text-3xl md:text-4xl lg:text-5xl font-extrabold text-black uppercase tracking-tight leading-none max-w-4xl">
            {title}
          </h1>
          {item.short_description && (
            <p className="mt-5 text-black/75 text-base md:text-xl font-medium max-w-3xl leading-relaxed">
              {item.short_description}
            </p>
          )}
        </div>
      </section>

      <ClientFadeUp className="max-w-7xl w-full mx-auto px-6 lg:px-12 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Left: Image (50%) */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-white border border-black/5">
              <Image 
                src={image} 
                alt={title} 
                fill 
                className="object-cover hover:scale-[1.02] transition-transform duration-1000 ease-out"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
            </div>
          </div>

          {/* Right: Content (50%) */}
          <div className="w-full lg:w-1/2">
            <div className="prose prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-gray-900 prose-headings:uppercase prose-headings:tracking-tight
              prose-p:text-gray-600 prose-p:leading-relaxed prose-p:font-light
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-li:text-gray-600 prose-li:leading-relaxed
              prose-a:text-red-600 prose-a:font-semibold hover:prose-a:text-red-700
            ">
              <div dangerouslySetInnerHTML={{ __html: String(item.content ?? description) }} />
            </div>

            {/* Product CTA */}
            {module === "products" && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <Link
                  href={`/product-enquiry?product=${slug}`}
                  className="inline-flex items-center justify-center gap-3 bg-red-600 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-red-700 transition-colors rounded-sm shadow-md"
                >
                  Enquire About This Product
                  <span>→</span>
                </Link>
              </div>
            )}

            {/* Careers CTA */}
            {module === "careers" && (
              <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
                <div>
                  <h3 className="text-base font-bold text-gray-900 uppercase tracking-tight mb-1">
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
        </div>
      </ClientFadeUp>
    </main>
  );
}
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { listModuleItems } from "@/lib/dynamic-cms";
import { resolveMediaUrl } from "@/lib/media";
import ClientFadeUp from "@/components/ClientFadeUp";

export const dynamic = "force-dynamic";
export const revalidate = 0;

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps) {
  const products = await listModuleItems("products", { status: "published" });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const product = products.find((p: any) => p.slug === params.slug);

  if (!product) return { title: "Not Found | KAAVERI Steels" };

  return {
    title: `${product.title} | Products | KAAVERI Steels`,
    description: product.shortDescription || product.short_description || "Explore our products.",
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const products = await listModuleItems("products", { status: "published" });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const product = products.find((p: any) => p.slug === params.slug);

  if (!product) {
    notFound();
  }
  
  // Use the image property (or cover_image fallback)
  const coverImage = product.image 
    ? resolveMediaUrl(product.image, "") 
    : (product.cover_image ? resolveMediaUrl(product.cover_image, "") : "");

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-accent-yellow via-[#FFD700] to-accent-yellow pt-28 pb-6 md:pt-32 md:pb-8 px-6 relative overflow-hidden shadow-sm border-b border-black/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_60%)] pointer-events-none mix-blend-overlay" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none mix-blend-overlay opacity-30" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <Link href="/products" className="text-sm font-bold text-black/60 hover:text-black uppercase tracking-widest mb-6 inline-flex items-center gap-2 transition-colors">
            <span>&larr;</span> Back to Products
          </Link>
          <h1 className="font-heading text-4xl md:text-6xl text-black mt-2 drop-shadow-md font-extrabold max-w-4xl">
            {product.title}
          </h1>
        </div>
      </section>

      {/* Body Section - Modern Full-Page Split */}
      <section className="w-full bg-white relative">
        <ClientFadeUp className="flex flex-col lg:flex-row w-full min-h-screen lg:min-h-[85vh]">
          
          {/* Left 55%: Image */}
          <div className="relative w-full lg:w-[55%] min-h-[50vh] lg:min-h-0 bg-[#f8f9fa] flex items-center justify-center p-12 lg:p-24">
            {coverImage ? (
              <Image 
                src={coverImage} 
                alt={product.title} 
                fill 
                className="object-contain p-8 lg:p-16 drop-shadow-2xl hover:scale-[1.02] transition-transform duration-1000 ease-out"
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-black/40">
                <span className="font-body text-lg">No image available</span>
              </div>
            )}
          </div>

          {/* Right 45%: Content */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center px-8 py-16 lg:px-20 xl:px-28">
            <h2 className="font-heading text-4xl lg:text-5xl font-light text-gray-900 mb-10 tracking-wide uppercase">
              Overview
            </h2>
            
            <div className="prose prose-lg max-w-none prose-p:font-light prose-p:text-gray-600 prose-p:leading-relaxed prose-headings:font-light prose-headings:text-gray-900 prose-a:text-black hover:prose-a:text-gray-600 prose-li:text-gray-600 font-body space-y-8">
              {product.content || product.description ? (
                <div dangerouslySetInnerHTML={{ __html: product.content || product.description }} />
              ) : (
                <>
                  <p className="text-xl text-gray-800 font-normal">{product.shortDescription || product.short_description}</p>
                  <p>Experience the pinnacle of industrial engineering. Our premium steel products are manufactured with uncompromising precision, designed to meet the rigorous demands of modern infrastructure.</p>
                  <p>Forged for maximum durability and finished with absolute clarity, every piece represents a commitment to structural integrity. No shortcuts. No compromises.</p>
                </>
              )}
              
              <div className="pt-8">
                <Link href={`/contact-us?product=${product.slug}`} className="inline-flex items-center justify-center bg-black text-white px-12 py-5 text-sm font-medium tracking-widest uppercase hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                  Enquire About This Product
                </Link>
              </div>
            </div>
          </div>

        </ClientFadeUp>
      </section>
    </main>
  );
}
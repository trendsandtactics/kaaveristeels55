import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { listModuleItems } from "@/lib/dynamic-cms";
import { resolveMediaUrl } from "@/lib/media";

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

      {/* Body Section - Strict 50/50 Split */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 border border-black/5 group">
          
          {/* First 50%: Image */}
          <div className="relative w-full h-full min-h-[400px] overflow-hidden bg-gray-100 min-w-0">
            {coverImage ? (
              <Image 
                src={coverImage} 
                alt={product.title} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-black/40">
                <span className="font-body text-lg">No image available</span>
              </div>
            )}
          </div>

          {/* Next 50%: Content */}
          <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 min-w-0 overflow-hidden">
            <h2 className="font-heading text-3xl md:text-4xl text-black font-bold mb-6">
              Product Overview
            </h2>
            
            <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-headings:text-black prose-p:text-black/80 prose-a:text-accent-red hover:prose-a:text-red-700 prose-li:marker:text-accent-red font-body leading-relaxed break-words overflow-hidden">
              {product.content || product.description ? (
                <div dangerouslySetInnerHTML={{ __html: product.content || product.description }} />
              ) : (
                <>
                  <p className="text-xl font-medium mb-4">{product.shortDescription || product.short_description}</p>
                  <p>Detailed specifications, features, and applications for this product are currently being updated. Please contact us for more comprehensive details regarding our inventory and custom manufacturing options.</p>
                </>
              )}
              
              <div className="mt-10">
                <Link href={`/contact-us?product=${product.slug}`} className="px-8 py-4 bg-black text-white font-body text-sm uppercase tracking-widest font-bold hover:bg-accent-red transition-colors duration-300 shadow-md rounded-sm inline-block">
                  Enquire About This Product
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
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
    <main className="w-full bg-white">
      <ClientFadeUp className="flex flex-col lg:flex-row w-full min-h-screen">
          
          {/* Left 55%: Image Area - Full Size, No Box */}
          <div className="relative w-full lg:w-[55%] min-h-[50vh] lg:min-h-screen bg-white flex items-center justify-center">
            {coverImage ? (
              <Image 
                src={coverImage} 
                alt={product.title} 
                fill 
                className="object-contain mix-blend-multiply hover:scale-105 transition-transform duration-1000 ease-out"
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-black/40">
                <span className="font-body text-lg">No image available</span>
              </div>
            )}
          </div>

          {/* Right 45%: Content Area */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center px-8 py-16 lg:px-20 xl:px-28 bg-white">
            <Link href="/products" className="text-xs font-bold text-gray-500 hover:text-black uppercase tracking-widest mb-12 inline-flex items-center gap-2 transition-colors">
              <span>&larr;</span> Back to Products
            </Link>
            
            <h1 className="font-heading text-5xl lg:text-6xl xl:text-7xl text-black mb-8 font-bold uppercase tracking-tighter">
              {product.title}
            </h1>
            
            <h2 className="text-xl lg:text-2xl font-light text-gray-900 mb-8 tracking-widest uppercase border-b border-gray-200 pb-6">
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
              
              <div className="pt-10">
                <Link href={`/contact-us?product=${product.slug}`} className="inline-flex items-center justify-center bg-black text-white px-12 py-5 text-sm font-medium tracking-widest uppercase hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 w-full sm:w-auto shadow-lg hover:shadow-xl">
                  Enquire About This Product
                </Link>
              </div>
            </div>
          </div>

      </ClientFadeUp>
    </main>
  );
}
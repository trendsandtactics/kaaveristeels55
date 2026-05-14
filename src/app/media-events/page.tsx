import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { listModuleItems } from "@/lib/dynamic-cms";
import { resolveMediaUrl } from "@/lib/media";
import ClientFadeUp from "@/components/ClientFadeUp";

// Revalidate the page every 60 seconds (Incremental Static Regeneration)
export const revalidate = 60;

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const items = await listModuleItems("mediaEvents", { status: "published" });
  return items.map((item: any) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const items = await listModuleItems("mediaEvents", { status: "published" });
  const item = items.find((i: any) => i.slug === params.slug);

  if (!item) return { title: "Not Found | Media & Events | KAAVERI Steels" };

  return {
    title: `${item.title} | Media & Events | KAAVERI Steels`,
    description: item.short_description || "Read more about this event.",
  };
}

export default async function MediaEventDetailPage({ params }: PageProps) {
  // 1. Fetch all published events and match the current slug
  const items = await listModuleItems("mediaEvents", { status: "published" });
  const item = items.find((i: any) => i.slug === params.slug);

  // 2. If no event matches the URL slug, trigger the Next.js 404 page gracefully
  if (!item) {
    notFound();
  }
  
  // 3. Prepare the cover image
  const coverImage = item.cover_image || item.file_url 
    ? resolveMediaUrl((item.cover_image || item.file_url) as string, "") 
    : "";

  // 4. Parse extra_data to extract event_date if available
  let extraData: Record<string, string> = {};
  if (item.extra_data) {
    try {
      extraData = typeof item.extra_data === "string" ? JSON.parse(item.extra_data as string) : item.extra_data;
    } catch {
      // ignore malformed JSON
    }
  }

  return (
    <main className="w-full relative bg-gray-50 min-h-screen pt-28 pb-16 lg:pt-36 px-6">
      <ClientFadeUp className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-black/10">
        
        {/* Hero Image */}
        {coverImage && (
          <div className="relative w-full h-64 md:h-80 bg-gray-100 border-b border-black/5">
            <Image 
              src={coverImage} 
              alt={item.title || "Event"} 
              fill 
              className="object-cover"
              priority
            />
          </div>
        )}
        
        <div className="p-6 md:p-12">
          {/* Back Button */}
          <Link href="/media-events" className="text-xs font-bold text-gray-500 hover:text-black uppercase tracking-widest mb-6 inline-flex items-center gap-2 transition-colors">
            <span>&larr;</span> Back to Media & Events
          </Link>
          
          <h1 className="font-sans text-4xl lg:text-5xl text-black mb-4 font-bold uppercase tracking-tighter">
            {item.title}
          </h1>
          
          {extraData.event_date && (
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="inline-flex items-center rounded-md bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-800">
                📅 {new Date(extraData.event_date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
            </div>
          )}
          
          {/* Render Rich HTML Content or fallback to Short Description */}
          <div className="prose prose-lg max-w-none mt-8 prose-p:font-light prose-p:text-gray-600 prose-p:leading-relaxed prose-headings:font-light prose-headings:text-gray-900 prose-a:text-red-600 hover:prose-a:text-red-700 prose-li:text-gray-600 font-body space-y-6">
            {item.content ? (
              <div dangerouslySetInnerHTML={{ __html: item.content }} />
            ) : (
              <p className="text-gray-800 font-normal">{item.short_description}</p>
            )}
          </div>
        </div>
      </ClientFadeUp>
    </main>
  );
}
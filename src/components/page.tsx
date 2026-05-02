import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { listModuleItems } from "@/lib/dynamic-cms";
import { resolveMediaUrl } from "@/lib/media";
import ClientFadeUp from "@/components/ClientFadeUp";
import ApplyNowModal from "@/components/ApplyNowModal";

export const dynamic = "force-dynamic";
export const revalidate = 0;

interface PageProps {
  params: {
    slug: string;
  };
}

interface CareerItem {
  id?: number | null;
  title?: string | null;
  slug: string;
  short_description?: string | null;
  content?: string | null;
  cover_image?: string | null;
  extra_data?: string | Record<string, string> | null;
}

export async function generateMetadata({ params }: PageProps) {
  const careers = await listModuleItems("careers", { status: "published" });
  const career = careers.find((c: CareerItem) => c.slug === params.slug);

  if (!career) return { title: "Not Found | Careers | KAAVERI Steels" };

  return {
    title: `${career.title} | Careers | KAAVERI Steels`,
    description: career.short_description || "Explore this career opportunity.",
  };
}

export default async function CareerDetailPage({ params }: PageProps) {
  const careers = await listModuleItems("careers", { status: "published" });
  const career = careers.find((c: CareerItem) => c.slug === params.slug);

  if (!career) {
    notFound();
  }
  
  const coverImage = career.cover_image 
    ? resolveMediaUrl(career.cover_image, "") 
    : "";

  // Parse extra_data to safely extract Location and Employment Type
  let extraData: Record<string, string> = {};
  if (career.extra_data) {
    try {
      extraData = typeof career.extra_data === "string" ? JSON.parse(career.extra_data) : career.extra_data;
    } catch {
      // ignore malformed JSON
    }
  }

  return (
    <main className="w-full relative bg-gray-50 min-h-screen pt-28 pb-16 lg:pt-36 px-6">
      <ClientFadeUp className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-black/10">
        
        {coverImage && (
          <div className="relative w-full h-64 md:h-80 bg-gray-100 border-b border-black/5">
            <Image 
              src={coverImage} 
              alt={career.title || "Career"} 
              fill 
              className="object-cover"
              priority
            />
          </div>
        )}
        
        <div className="p-6 md:p-12">
          <Link href="/careers" className="text-xs font-bold text-gray-500 hover:text-black uppercase tracking-widest mb-6 inline-flex items-center gap-2 transition-colors">
            <span>&larr;</span> Back to Careers
          </Link>
          
          <h1 className="font-heading text-4xl lg:text-5xl text-black mb-4 font-bold uppercase tracking-tighter">
            {career.title}
          </h1>
          
          {(extraData.location || extraData.employment_type) && (
            <div className="flex flex-wrap gap-3 mb-8">
              {extraData.location && (
                <span className="inline-flex items-center rounded-md bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-800">
                  📍 {extraData.location}
                </span>
              )}
              {extraData.employment_type && (
                <span className="inline-flex items-center rounded-md bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-800">
                  💼 {extraData.employment_type}
                </span>
              )}
            </div>
          )}
          
          <h2 className="text-xl lg:text-2xl font-light text-gray-900 mb-6 tracking-widest uppercase border-b border-gray-200 pb-4">
            Job Description
          </h2>
          
          <div className="prose prose-lg max-w-none prose-p:font-light prose-p:text-gray-600 prose-p:leading-relaxed prose-headings:font-light prose-headings:text-gray-900 prose-a:text-red-600 hover:prose-a:text-red-700 prose-li:text-gray-600 font-body space-y-6">
            {career.content ? (
              <div dangerouslySetInnerHTML={{ __html: career.content }} />
            ) : (
              <p className="text-gray-800 font-normal">{career.short_description}</p>
            )}
            
            <div className="pt-10 mt-10 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold text-black mb-1">Interested in this role?</h3>
                <p className="text-sm text-gray-500">Apply now by filling out our quick application form.</p>
              </div>
              {/* THIS IS THE APPLY NOW BUTTON POPUP */}
              <ApplyNowModal careerId={career.id || undefined} jobTitle={career.title || undefined} />
            </div>
          </div>

        </div>
      </ClientFadeUp>
    </main>
  );
}
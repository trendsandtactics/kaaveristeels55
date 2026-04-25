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
  const events = await listModuleItems("csr", { status: "published" });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const event = events.find((e: any) => e.slug === params.slug);

  if (!event) return { title: "Not Found | KAAVERI Steels" };

  return {
    title: `${event.title} | CSR | KAAVERI Steels`,
    description: event.short_description || "Explore our corporate social responsibility initiatives.",
  };
}

export default async function CSRDetailPage({ params }: PageProps) {
  const events = await listModuleItems("csr", { status: "published" });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const event = events.find((e: any) => e.slug === params.slug);

  if (!event) {
    notFound();
  }

  let extraData: Record<string, string> = {};
  try {
    extraData = typeof event.extra_data === "string" ? JSON.parse(event.extra_data) : (event.extra_data || {});
  } catch {
    // Ignore JSON parsing errors
  }
  
  const eventDate = extraData?.event_date;
  const coverImage = event.cover_image ? resolveMediaUrl(event.cover_image, "") : "";

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-accent-yellow via-[#FFD700] to-accent-yellow pt-28 pb-6 md:pt-32 md:pb-8 px-6 relative overflow-hidden shadow-sm border-b border-black/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_60%)] pointer-events-none mix-blend-overlay" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none mix-blend-overlay opacity-30" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <Link href="/csr" className="text-sm font-bold text-black/60 hover:text-black uppercase tracking-widest mb-6 inline-flex items-center gap-2 transition-colors">
            <span>&larr;</span> Back to Initiatives
          </Link>
          <h1 className="font-heading text-4xl md:text-6xl text-black mt-2 drop-shadow-md font-extrabold max-w-4xl">
            {event.title}
          </h1>
          {eventDate && (
            <p className="text-black/70 mt-4 font-bold tracking-widest uppercase text-sm">
              {new Date(eventDate).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          )}
        </div>
      </section>

      {/* Body Section - 50/50 Split */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* First 50%: Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-xl border border-black/10 bg-white">
              {coverImage ? (
                <Image 
                  src={coverImage} 
                  alt={event.title} 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 text-black/40">
                  <span className="font-body text-lg">No image available</span>
                </div>
              )}
            </div>
          </div>

          {/* Next 50%: Content */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <h2 className="font-heading text-3xl md:text-4xl text-black font-bold mb-6">
              About The Initiative
            </h2>
            
            <div className="prose prose-lg max-w-none text-black/80 font-body leading-relaxed">
              {event.content ? (
                <div dangerouslySetInnerHTML={{ __html: event.content }} />
              ) : (
                <>
                  <p className="text-xl font-medium mb-4">{event.short_description}</p>
                  <p>Detailed information about this corporate social responsibility initiative is currently being updated. Please check back later for more comprehensive details regarding our activities, community impact, and the positive changes we are bringing about.</p>
                </>
              )}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
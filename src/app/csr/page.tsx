import React from "react";
import Link from "next/link";
import Image from "next/image";
import { listModuleItems } from "@/lib/dynamic-cms";
import { resolveMediaUrl } from "@/lib/media";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = {
  title: "Corporate Social Responsibility | KAAVERI Steels",
  description: "Building a better tomorrow, together. Explore our commitment to social and environmental well-being.",
};

export default async function CSRPage() {
  const events = await listModuleItems("csr", { status: "published" });

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-accent-yellow via-[#FFD700] to-accent-yellow pt-28 pb-6 md:pt-32 md:pb-8 px-6 relative overflow-hidden shadow-sm border-b border-black/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_60%)] pointer-events-none mix-blend-overlay" />
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-black/70">Initiatives</p>
          <h1 className="font-sans text-5xl md:text-7xl text-black mt-2 drop-shadow-md font-bold">
            CSR Activities 
          </h1>
          <p className="font-sans text-black/80 mt-2 max-w-2xl font-medium">
            Building a better tomorrow, together. Explore our commitment to social and environmental well-being.
          </p>
        </div>
      </section>

      {/* Dynamic Events Section */}
      <section className="px-6 py-16 md:py-24 max-w-7xl mx-auto w-full z-10 relative">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl text-black mb-4">Recent CSR Events</h2>
          <p className="font-body text-black/70 max-w-2xl mx-auto">
            Explore our latest initiatives and activities making a positive impact.
          </p>
        </div>
        
        {events.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => {
              let extraData: Record<string, string> = {};
              try {
                extraData = typeof event.extra_data === "string" ? JSON.parse(event.extra_data) : (event.extra_data || {});
              } catch {
                // Ignore JSON parsing errors
              }
              const eventDate = extraData?.event_date;
              const coverImage = event.cover_image ? resolveMediaUrl(event.cover_image, "") : "";

              return (
                <Link href={`/csr/${event.slug}`} key={event.id} className="bg-white rounded-2xl shadow-sm border border-black/10 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col group block">
                  {coverImage && (
                    <div className="relative h-56 w-full bg-gray-100 shrink-0 border-b border-black/5">
                      <Image src={coverImage} alt={event.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-grow">
                    {eventDate && (
                      <div className="text-xs font-bold text-red-600 mb-3 uppercase tracking-widest">
                        {new Date(eventDate).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                      </div>
                    )}
                    <h3 className="font-heading text-2xl font-bold text-black mb-3 group-hover:text-red-600 transition-colors">{event.title}</h3>
                    {event.short_description && (
                      <p className="font-body text-black/70 mb-4 line-clamp-3">{event.short_description}</p>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <p className="text-center text-black/50">No CSR events published yet.</p>
        )}
      </section>
    </main>
  );
}

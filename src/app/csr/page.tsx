import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getPublicModuleItemBySlug } from "@/lib/dynamic-cms";
import { resolveMediaUrl } from "@/lib/media";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props) {
  const slug = decodeURIComponent(params.slug);
  const event = await getPublicModuleItemBySlug("csr", slug);
  if (!event) return { title: "Event Not Found" };
  return {
    title: `${event.title} | CSR | KAAVERI Steels`,
    description: event.short_description || "Read more about our Corporate Social Responsibility initiatives.",
  };
}

export default async function CsrEventDetailPage({ params }: Props) {
  const slug = decodeURIComponent(params.slug);

  // Fetch the specific event based on the decoded URL slug
  const event = await getPublicModuleItemBySlug("csr", slug);

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
    <main className="min-h-screen pt-28 pb-20 bg-white">
      <article className="max-w-4xl mx-auto px-6">
        <Link href="/csr" className="inline-flex items-center text-sm font-semibold text-red-600 hover:text-red-700 mb-8 transition-colors">
          <span className="mr-2">←</span> Back to CSR Initiatives
        </Link>

        <header className="mb-10">
          {eventDate && (
            <div className="text-sm font-bold text-red-600 mb-4 uppercase tracking-widest">
              {new Date(eventDate).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          )}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-black mb-6 leading-tight">{event.title}</h1>
        </header>

        {coverImage && (
          <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-12 shadow-md bg-gray-100">
            <Image src={coverImage} alt={event.title} fill className="object-cover" priority />
          </div>
        )}

        {event.short_description && (
          <p className="text-xl md:text-2xl text-black/70 font-medium mb-10 leading-relaxed">
            {event.short_description}
          </p>
        )}

        {event.video_url && (
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-12 shadow-md bg-black">
            <iframe
              src={event.video_url.includes("watch?v=") ? event.video_url.replace("watch?v=", "embed/").split("&")[0] : event.video_url.includes("youtu.be/") ? event.video_url.replace("youtu.be/", "youtube.com/embed/").split("?")[0] : event.video_url}
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
            />
          </div>
        )}

        {event.content && event.content.trim() !== "<p><br></p>" && event.content.trim() !== "" && (
          <div 
            className="prose prose-lg max-w-none text-black/80 font-body prose-headings:font-heading prose-a:text-red-600"
            dangerouslySetInnerHTML={{ __html: event.content }}
          />
        )}
      </article>
    </main>
  );
}
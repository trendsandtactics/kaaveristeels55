import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { listModuleItems } from "@/lib/dynamic-cms";
import { resolveMediaUrl } from "@/lib/media";
import ClientFadeUp from "@/components/ClientFadeUp";

export const revalidate = 60;

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

interface BlogItem {
  id?: number | null;
  title?: string | null;
  slug: string;
  short_description?: string | null;
  content?: string | null;
  cover_image?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  extra_data?: string | Record<string, string> | null;
}

export async function generateStaticParams() {
  const blogs = await listModuleItems("blogs", { status: "published" });
  return blogs.map((blog: BlogItem) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const blogs = await listModuleItems("blogs", { status: "published" });
  const blog = blogs.find((b: BlogItem) => b.slug === slug);

  if (!blog) return { title: "Not Found | Blogs | KAAVERI Steels" };

  return {
    title: `${blog.title} | Blogs | KAAVERI Steels`,
    description: blog.short_description || "Read this blog post.",
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const blogs = await listModuleItems("blogs", { status: "published" });
  const blog = blogs.find((b: BlogItem) => b.slug === slug);

  if (!blog) {
    notFound();
  }
  
  const coverImage = blog.cover_image 
    ? resolveMediaUrl(blog.cover_image, "") 
    : "";

  return (
    <main className="w-full relative bg-white min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-[#FFD500] pt-36 pb-16 md:pt-40 md:pb-24 px-6 relative overflow-hidden shadow-sm border-b border-black/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_60%)] pointer-events-none mix-blend-overlay" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none mix-blend-overlay opacity-30" />

        <div className="max-w-[1200px] mx-auto relative z-10">
          <Link href="/blogs" className="text-sm font-bold text-black/60 hover:text-black uppercase tracking-widest mb-6 inline-flex items-center gap-2 transition-colors">
            <span>&larr;</span> Back to Blogs
          </Link>
          <h1 className="font-sans font-extrabold text-4xl sm:text-5xl md:text-6xl text-black mt-3 drop-shadow-sm max-w-4xl">
            {blog.title}
          </h1>
          {blog.created_at && (
             <p className="mt-6 text-sm font-bold text-black/50 uppercase tracking-widest">
               {new Date(blog.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
             </p>
          )}
        </div>
      </section>

      {/* Main Content Section */}
      <section className="max-w-[1200px] mx-auto px-6 py-12 md:py-16">
        <ClientFadeUp>
          {/* Large featured image at the top */}
          {coverImage && (
            <div className="relative w-full h-[450px] lg:h-[600px] bg-gray-200 rounded-[12px] overflow-hidden shadow-md mb-12 md:mb-16 border border-black/5">
              <Image 
                src={coverImage} 
                alt={blog.title || "Featured Blog Image"} 
                fill 
                className="object-cover"
                priority
              />
            </div>
          )}
          
          <div className="max-w-[800px] mx-auto">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="font-sans text-3xl md:text-4xl font-bold text-gray-900">
                Overview
              </h2>
              {/* Decorative underline */}
              <div className="w-20 h-1.5 bg-red-600 mx-auto mt-4 rounded-full" />
            </div>

            {/* Typography optimized for reading */}
            <div className="prose prose-lg md:prose-xl max-w-none prose-p:text-gray-700 prose-p:leading-relaxed prose-headings:font-bold prose-headings:text-gray-900 prose-a:text-red-600 hover:prose-a:text-red-700 prose-li:text-gray-700">
              {blog.content ? (
                <div dangerouslySetInnerHTML={{ __html: blog.content }} />
              ) : (
                <p className="text-gray-600">{blog.short_description}</p>
              )}
            </div>
          </div>
        </ClientFadeUp>
      </section>
    </main>
  );
}
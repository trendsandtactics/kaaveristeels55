"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { resolveMediaUrl } from "@/lib/media";

type BlogDetailProps = {
  blog: {
    title?: string;
    cover_image?: string;
    content?: string;
    created_at?: string;
  };
};

export default function BlogDetails({ blog }: BlogDetailProps) {
  const coverImage = blog?.cover_image ? resolveMediaUrl(blog.cover_image, "") : "/placeholder-blog-image.jpg";

  return (
    <main className="min-h-screen bg-gray-50 pb-24">
      {/* 1. HERO SECTION */}
      <section className="w-full bg-gradient-to-r from-accent-yellow via-[#FFD700] to-accent-yellow pt-36 md:pt-48 pb-32 px-6 relative overflow-hidden shadow-sm border-b border-black/10">
        {/* Background Details for cohesive Kaaveri aesthetic */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_60%)] pointer-events-none mix-blend-overlay" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none mix-blend-overlay opacity-30" />

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-start">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link
              href="/blogs"
              className="group flex items-center gap-2 text-black/70 font-bold text-sm uppercase tracking-widest mb-8 transition-colors hover:text-accent-red"
            >
              <span className="transition-transform group-hover:-translate-x-1">&larr;</span>
              Back to Blogs
            </Link>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black leading-[1.1] max-w-5xl drop-shadow-md"
          >
            {blog?.title || "The Future of TMT Manufacturing and Construction"}
          </motion.h1>

          {blog?.created_at && (
            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} 
              className="mt-6 font-sans text-black/60 font-semibold tracking-wider uppercase text-sm"
            >
              {new Date(blog.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </motion.p>
          )}
        </div>
      </section>

      {/* 2. MAIN CONTENT SECTION (Vertical Flow) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-20 md:-mt-24 relative z-20">
        
        {/* Large Featured Image */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full aspect-[16/9] md:aspect-[21/9] rounded-[16px] overflow-hidden shadow-2xl bg-white border-4 border-white relative group"
        >
          <img 
            src={coverImage} 
            alt={blog?.title || "Blog Cover"} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </motion.div>

        {/* Content Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-4xl mx-auto mt-12 md:mt-20 bg-white p-8 md:p-16 rounded-[24px] shadow-xl border border-black/5 relative overflow-hidden"
        >
          {/* Centered Overview Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-black inline-block relative pb-4">
              Overview
              {/* Decorative Underline */}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-[4px] bg-accent-red rounded-full"></span>
            </h2>
          </div>

          {/* Readable Single-Column Typography Area */}
          <div 
            className="prose prose-lg md:prose-xl max-w-none text-gray-700 font-body leading-relaxed 
                       prose-headings:font-serif prose-headings:font-bold prose-headings:text-black 
                       prose-a:text-accent-red prose-a:font-semibold prose-a:no-underline hover:prose-a:underline 
                       prose-img:rounded-xl prose-img:shadow-lg prose-strong:text-black 
                       prose-blockquote:border-accent-red prose-blockquote:bg-gray-50 prose-blockquote:p-6 
                       prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:text-gray-900"
            dangerouslySetInnerHTML={{ __html: blog?.content || "<p>Your blog content goes here...</p>" }} 
          />
        </motion.div>
      </section>
    </main>
  );
}
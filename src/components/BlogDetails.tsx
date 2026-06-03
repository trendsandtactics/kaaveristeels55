"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { resolveMediaUrl } from "@/lib/media";

type BlogDetailProps = {
  blog: {
    title?: string | null;
    cover_image?: string | null;
    content?: string | null;
    created_at?: string | null;
  };
};

export default function BlogDetails({ blog }: BlogDetailProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle sticky nav shadow behavior on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const coverImage = blog?.cover_image ? resolveMediaUrl(blog.cover_image, "") : "/placeholder-blog-image.jpg";

  return (
    <main className="min-h-screen bg-gray-50 pb-24 font-sans block w-full overflow-x-hidden">
      
      {/* FLOATING STICKY NAVIGATION BAR */}
      <div className="fixed top-4 left-0 right-0 z-[100] flex justify-center px-4 pointer-events-none">
        <nav
          className={`pointer-events-auto flex w-full max-w-[1200px] items-center justify-between rounded-full bg-white px-6 py-3 transition-all duration-300 ${
            isScrolled ? "shadow-xl" : "shadow-md"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-black tracking-tighter text-black">
              LOGO
            </div>
          </Link>

          {/* Center Links */}
          <div className="hidden md:flex items-center gap-8 font-semibold text-sm text-black/80">
            <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>
            <Link href="/about" className="hover:text-red-600 transition-colors">About Us</Link>
            <Link href="/products" className="hover:text-red-600 transition-colors">Products</Link>
            <Link href="/blogs" className="text-red-600 transition-colors">Blogs</Link>
          </div>

          {/* CTA Button */}
          <Link
            href="/contact-us"
            className="rounded-full bg-red-600 px-6 py-2.5 text-sm font-bold tracking-wide text-white transition-all hover:bg-red-700 shadow-sm hover:shadow-md"
          >
            Request Quote
          </Link>
        </nav>
      </div>

      {/* 1. HERO SECTION */}
      <section className="w-full bg-[#FFD500] pt-40 md:pt-48 pb-32 px-6 relative block w-full">
        <div className="max-w-[1200px] mx-auto relative z-10 block w-full text-left">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link
              href="/blogs"
              className="group flex items-center gap-2 text-black/70 font-bold text-sm uppercase tracking-widest mb-6 transition-colors hover:text-black"
            >
              <span className="transition-transform group-hover:-translate-x-1">&larr;</span>
              Back to Blogs
            </Link>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black leading-tight max-w-5xl text-left block"
          >
            {blog?.title || "The Future of TMT Manufacturing and Construction"}
          </motion.h1>

          {blog?.created_at && (
            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} 
              className="mt-6 font-sans text-black/60 font-semibold tracking-wider uppercase text-sm block"
            >
              {new Date(blog.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </motion.p>
          )}
        </div>
      </section>

      {/* 2. MAIN CONTENT SECTION (Vertical Flow) */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 -mt-20 md:-mt-24 relative z-20 block w-full clear-both">
        
        {/* Large Featured Image */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full h-[450px] md:h-[600px] rounded-[12px] overflow-hidden shadow-xl bg-white border border-black/5 relative block mb-12 md:mb-16"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={coverImage} 
            alt={blog?.title || "Blog Cover"} 
            className="w-full h-full object-cover block" 
          />
        </motion.div>

        {/* Content Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full bg-white p-8 md:p-12 rounded-[12px] shadow-sm border border-black/5 relative block"
        >
          {/* Centered Overview Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-black inline-block relative pb-4">
              Overview
              {/* Decorative Underline */}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-red-600 rounded-full"></span>
            </h2>
          </div>

          {/* Readable Single-Column Typography Area */}
          <div 
            className="prose prose-lg md:prose-xl max-w-4xl mx-auto text-black/80 font-serif leading-relaxed block w-full
                       prose-headings:font-sans prose-headings:font-bold prose-headings:text-black prose-headings:text-left
                       prose-a:text-red-600 prose-a:no-underline hover:prose-a:underline 
                       prose-img:rounded-xl prose-img:shadow-md prose-img:w-full prose-strong:text-black"
            dangerouslySetInnerHTML={{ __html: blog?.content || "<p>Your blog content goes here...</p>" }} 
          />
        </motion.div>
      </section>
    </main>
  );
}
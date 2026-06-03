"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type BlogDetailProps = {
  blog: {
    title?: string;
    cover_image?: string;
    content?: string;
  };
};

export default function BlogDetails({ blog }: BlogDetailProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle sticky nav shadow/behavior on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* 1. FLOATING STICKY NAVIGATION BAR */}
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav
          className={`pointer-events-auto flex w-full max-w-7xl items-center justify-between rounded-full bg-white px-6 py-3 transition-all duration-300 ${
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
            href="/contact"
            className="rounded-full bg-red-600 px-6 py-2.5 text-sm font-bold tracking-wide text-white transition-all hover:bg-red-700 shadow-sm hover:shadow-md"
          >
            Request Quote
          </Link>
        </nav>
      </div>

      {/* 2. HERO SECTION */}
      <section className="w-full bg-[#FFD500] pt-40 pb-32 px-6 relative">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-start">
          {/* Back Link */}
          <Link
            href="/blogs"
            className="group flex items-center gap-2 text-black/70 font-semibold text-sm uppercase tracking-wider mb-6 transition-colors hover:text-black"
          >
            <span className="transition-transform group-hover:-translate-x-1">&larr;</span>
            Back to Blogs
          </Link>

          {/* Large Left-Aligned Title */}
          <h1 className="font-sans font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black leading-tight max-w-5xl drop-shadow-sm">
            {blog?.title || "The Future of TMT Manufacturing and Construction"}
          </h1>
        </div>
      </section>

      {/* 3. MAIN CONTENT SECTION (Vertical Flow) */}
      <section className="max-w-[1200px] mx-auto px-6 -mt-16 relative z-20">
        {/* Large Featured Image */}
        <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-[12px] overflow-hidden shadow-2xl bg-white border border-black/5">
          <img src={blog?.cover_image || "/placeholder-blog-image.jpg"} alt={blog?.title || "Blog Cover"} className="w-full h-full object-cover" />
        </div>

        {/* Content Container */}
        <div className="max-w-4xl mx-auto mt-16 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-black/5">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-black inline-block relative pb-4">Overview<span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-red-600 rounded-full"></span></h2>
          </div>
          {/* Readable Single-Column Typography Area */}
          <div className="prose prose-lg md:prose-xl max-w-none text-black/80 font-serif leading-relaxed prose-headings:font-sans prose-headings:font-bold prose-headings:text-black prose-a:text-red-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-img:shadow-md" dangerouslySetInnerHTML={{ __html: blog?.content || "<p>Your blog content goes here...</p>" }} />
        </div>
      </section>
    </main>
  );
}
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const coverImage = blog?.cover_image
    ? resolveMediaUrl(blog.cover_image, "")
    : "/placeholder-blog-image.jpg";

  return (
    <main className="min-h-screen bg-white font-sans flex flex-col w-full overflow-x-hidden">

      {/* ── STICKY TOP NAV ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-[100] bg-white transition-shadow duration-300 ${
          isScrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            {/* Replace with your actual logo image */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#FFD500] rounded flex items-center justify-center font-black text-black text-lg leading-none">
                K
              </div>
              <div className="leading-tight">
                <div className="font-black text-sm tracking-tight text-black uppercase">KAAVERI</div>
                <div className="text-[9px] font-semibold text-black/60 uppercase tracking-wider">TMT Bars &amp; Structural</div>
              </div>
            </div>
          </Link>

          {/* Center Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-[13px] font-semibold text-black/80 tracking-wide">
            <Link href="/" className="hover:text-red-600 transition-colors uppercase">Home</Link>
            <Link href="/about" className="hover:text-red-600 transition-colors uppercase">About Us</Link>
            <Link href="/products" className="hover:text-red-600 transition-colors uppercase">Products</Link>
            <Link href="/dealers" className="hover:text-red-600 transition-colors uppercase">Dealers</Link>
            <div className="relative group">
              <button className="hover:text-red-600 transition-colors uppercase flex items-center gap-1">
                Media <span className="text-[10px]">▾</span>
              </button>
            </div>
            <div className="relative group">
              <button className="hover:text-red-600 transition-colors uppercase flex items-center gap-1">
                Support <span className="text-[10px]">▾</span>
              </button>
            </div>
            <Link href="/careers" className="hover:text-red-600 transition-colors uppercase">Careers</Link>
            <Link href="/contact-us" className="hover:text-red-600 transition-colors uppercase">Contact Us</Link>
          </nav>

          {/* CTA */}
          <Link
            href="/contact-us"
            className="rounded-full bg-red-600 px-5 py-2.5 text-[13px] font-bold tracking-wide text-white transition-all hover:bg-red-700 uppercase whitespace-nowrap"
          >
            Request Quote
          </Link>
        </div>
      </header>

      {/* ── HERO: YELLOW BAND ── */}
      <section className="w-full bg-[#FFD500] pt-[72px]">
        <div className="max-w-[1200px] mx-auto px-6 pt-10 pb-12">
          {/* Back to Blogs */}
          <Link
            href="/blogs"
            className="group inline-flex items-center gap-2 text-black/60 font-semibold text-xs uppercase tracking-widest mb-6 transition-colors hover:text-black"
          >
            <span className="transition-transform group-hover:-translate-x-1">&larr;</span>
            Back to Blogs
          </Link>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-black text-5xl md:text-6xl lg:text-[72px] text-black leading-[1.05] max-w-4xl"
          >
            {blog?.title || "TMT Bars"}
          </motion.h1>

          {/* Date / subtitle */}
          {blog?.created_at && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="mt-4 text-black/50 text-sm font-semibold tracking-wider uppercase"
            >
              {new Date(blog.created_at).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </motion.p>
          )}
        </div>
      </section>

      {/* 2. MAIN CONTENT SECTION (Vertical Flow) */}
      <section className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 -mt-20 md:-mt-24 relative z-20 flex flex-col items-center justify-start clear-both">
        
        {/* Large Featured Image */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full h-[450px] md:h-[600px] rounded-[12px] overflow-hidden shadow-xl bg-white border border-black/5 relative flex-shrink-0 mb-12 md:mb-16"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={coverImage} 
            alt={blog?.title || "Blog Cover"} 
            className="w-full h-full object-cover block" 
          />
        </motion.div>
      </section>

      {/* ── OVERVIEW CONTENT SECTION ── */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-[860px] mx-auto">

          {/* "OVERVIEW" heading – centered, spaced, thin underline */}
          <div className="text-center mb-12">
            <h2 className="inline-block text-base font-bold tracking-[0.25em] uppercase text-black pb-3 relative">
              Overview
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-black/20 rounded-full" />
            </h2>
          </div>

          {/* Prose body */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="prose prose-base max-w-none text-black/80 leading-relaxed
                       prose-headings:font-bold prose-headings:text-black prose-headings:text-[15px] prose-headings:mt-8 prose-headings:mb-2
                       prose-p:text-[14px] prose-p:leading-[1.75] prose-p:text-black/75 prose-p:mb-4
                       prose-a:text-red-600 prose-a:no-underline hover:prose-a:underline
                       prose-strong:font-bold prose-strong:text-black"
            dangerouslySetInnerHTML={{
              __html: blog?.content || "<p>Your blog content goes here...</p>",
            }}
          />
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#111111] text-white pt-16 pb-8 px-6 mt-auto">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">

            {/* Col 1 – Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-[#FFD500] rounded flex items-center justify-center font-black text-black text-lg">K</div>
                <div>
                  <div className="font-black text-sm tracking-tight text-white uppercase">KAAVERI</div>
                  <div className="text-[9px] font-semibold text-white/50 uppercase tracking-wider">TMT Bars &amp; Structural</div>
                </div>
              </div>
              <p className="text-white/50 text-[13px] leading-relaxed max-w-[200px]">
                Premium TMT bars and structural steel products engineered for durability, strength, and sustainability.
              </p>
              <div className="mt-5 w-8 h-[3px] bg-red-600 rounded-full" />
            </div>

            {/* Col 2 – Quick Links */}
            <div>
              <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-white mb-5">Quick Links</h4>
              <div className="w-8 h-[2px] bg-red-600 rounded-full mb-5" />
              <ul className="space-y-3 text-[13px] text-white/60">
                {["Home", "About Us", "Products", "Dealers", "Careers", "Contact Us"].map((item) => (
                  <li key={item}>
                    <Link href="/" className="flex items-center gap-2 hover:text-white transition-colors">
                      <span className="text-red-600 text-xs">›</span>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 – Contact */}
            <div>
              <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-white mb-5">Contact</h4>
              <div className="w-8 h-[2px] bg-red-600 rounded-full mb-5" />
              <div className="space-y-4 text-[13px] text-white/60">
                <div className="flex gap-2">
                  <span className="text-red-600 mt-0.5 flex-shrink-0">📍</span>
                  <div>
                    <div className="font-bold text-white text-sm">Unit 2</div>
                    S.F.No: 22/1A, Musiri - Thuraiyur Main Road,<br />
                    Jambunaithapuram Post,<br />
                    Musiri Taluk,<br />
                    Trichy – 621 205
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="text-red-600">📞</span>
                  <span>+91 88558 24555</span>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="text-red-600">✉</span>
                  <span>info@kaaveristeel.co.in</span>
                </div>
              </div>
            </div>

            {/* Col 4 – Certifications + Social */}
            <div>
              <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-white mb-5">Certifications</h4>
              <div className="w-8 h-[2px] bg-red-600 rounded-full mb-5" />
              <div className="flex gap-3 mb-8">
                {/* Certification badge placeholders */}
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white/40 text-[10px] font-bold">ISO</div>
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white/40 text-[10px] font-bold">NISST</div>
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white/40 text-[10px] font-bold">BIS</div>
              </div>

              <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-white mb-5">Follow Us</h4>
              <div className="w-8 h-[2px] bg-red-600 rounded-full mb-5" />
              <div className="flex gap-3 flex-wrap">
                {[
                  { label: "IG", href: "#" },
                  { label: "LI", href: "#" },
                  { label: "YT", href: "#" },
                  { label: "X", href: "#" },
                  { label: "WA", href: "#" },
                ].map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 text-[11px] font-bold hover:bg-red-600 hover:text-white transition-all"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[12px] text-white/30">
            <span>© 2026 <span className="text-red-600 font-semibold">KAAVERI STEEL</span>. All Rights Reserved.</span>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}

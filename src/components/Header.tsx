"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Products", href: "/products" },
  { name: "Projects", href: "/projects" },
  { name: "Contact Us", href: "/contact-us" },
];

const mediaSupportLinks = [
  { name: "Photo Gallery", href: "/photo-gallery" },
  { name: "Photo / Video / Project Gallery", href: "/photo-video-project-gallery" },
  { name: "Construction Steel Calculator", href: "/construction-steel-calculator" },
  { name: "Weight & Bundle Calculator", href: "/weight-bundle-calculator" },
  { name: "Media & Events", href: "/media-events" },
  { name: "Find Dealers", href: "/dealers" },
  { name: "Projects", href: "/projects" },
  { name: "Blogs", href: "/blogs" },
  { name: "Certifications", href: "/certifications" },
  { name: "Product Brochure", href: "/product-brochure" },
  { name: "Product Other Enquiry", href: "/product-enquiry" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const transparent = pathname === "/" && !scrolled;

  const navItemClass = `
    relative inline-flex items-center h-10
    text-[12px] uppercase tracking-[0.18em] font-semibold
    text-black transition-colors duration-300 hover:text-red-600
    whitespace-nowrap
  `;

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-500">
      {/* Background */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          transparent
            ? "bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400"
            : "bg-white/85 backdrop-blur-xl border-b border-black/10 shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
        }`}
      />

      {/* Shine */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.55),transparent)] animate-[shine_5s_linear_infinite]" />
      </div>

      <div
        className={`relative max-w-7xl mx-auto px-6 md:px-12 ${
          transparent ? "py-4" : "py-3"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="z-50 flex items-center">
            <Image
              src="/logo3.png"
              alt="Kaaveri TMT Bars & Structural"
              width={200}
              height={60}
              className="h-10 md:h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={navItemClass}>
                {link.name}
                <span className="absolute left-0 bottom-[6px] h-[2px] w-0 bg-red-600 transition-all duration-300 hover:w-full group-hover:w-full" />
              </Link>
            ))}

            {/* Media & Support */}
            <div className="relative flex items-center" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setDropdownOpen((prev) => !prev)}
                className={`${navItemClass} gap-1`}
              >
                <span>Media & Support</span>
                <span className="text-[10px] translate-y-[-1px]">▾</span>
                <span
                  className={`absolute left-0 bottom-[6px] h-[2px] bg-red-600 transition-all duration-300 ${
                    dropdownOpen ? "w-full" : "w-0"
                  }`}
                />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="absolute left-1/2 top-full z-50 mt-3 w-[340px] -translate-x-1/2 rounded-2xl border border-black/10 bg-white/95 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.14)] backdrop-blur-xl"
                  >
                    <div className="grid gap-1">
                      {mediaSupportLinks.map((page) => (
                        <Link
                          key={page.href}
                          href={page.href}
                          className="rounded-lg px-3 py-2 text-sm text-black transition hover:bg-yellow-50 hover:text-red-600"
                        >
                          {page.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Careers */}
            <Link href="/careers" className={navItemClass}>
              Careers
              <span className="absolute left-0 bottom-[6px] h-[2px] w-0 bg-red-600 transition-all duration-300 hover:w-full group-hover:w-full" />
            </Link>

            {/* CTA */}
            <Link
              href="/product-enquiry"
              className="ml-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-white shadow-lg transition-all duration-300 hover:from-red-700 hover:to-red-800 hover:shadow-xl"
            >
              Request Quote
            </Link>
          </nav>

          {/* Mobile Button */}
          <button
            className="lg:hidden z-50 text-2xl text-black"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            type="button"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-white"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-semibold uppercase tracking-[0.12em]"
                >
                  {link.name}
                </Link>
              ))}

              <div className="w-full max-w-sm px-6">
                <div className="mb-3 text-center text-sm font-bold uppercase tracking-[0.18em] text-black/70">
                  Media & Support
                </div>
                <div className="grid gap-2 text-center">
                  {mediaSupportLinks.map((page) => (
                    <Link
                      key={page.href}
                      href={page.href}
                      className="rounded-lg px-4 py-2 text-sm hover:bg-yellow-50 hover:text-red-600"
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/careers"
                className="text-lg font-semibold uppercase tracking-[0.12em]"
              >
                Careers
              </Link>

              <Link
                href="/product-enquiry"
                className="mt-2 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white"
              >
                Request Quote
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        nav a:hover span,
        nav button:hover span:last-child {
          width: 100%;
        }
      `}</style>
    </header>
  );
}

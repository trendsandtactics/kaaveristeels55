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
  { name: "Steel Calculator", href: "/construction-steel-calculator" },
  { name: "Media & Events", href: "/media-events" },
  { name: "Find Dealers", href: "/dealers" },
  { name: "Blogs", href: "/blogs" },
  { name: "Certifications", href: "/certifications" },
  { name: "Product Brochure", href: "/product-brochure" },
  { name: "Product Other Enquiry", href: "/product-enquiry" },
  { name: "Corporate Social Responsibility", href: "/csr" },
  { name: "Trust On Site", href: "/trust-on-site" },
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
    const onScroll = () => setScrolled(window.scrollY > 40);
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

  const navItemClass =
    "relative inline-flex items-center h-9 text-[10px] xl:text-[11px] uppercase tracking-[0.08em] xl:tracking-[0.12em] font-semibold text-black whitespace-nowrap transition-colors duration-300 hover:text-red-600";

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-500">
      {/* Background */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          transparent
            ? "bg-transparent"
            : "bg-white/90 backdrop-blur-md border-b border-black/10 shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
        }`}
      />

      <div
        className={`relative max-w-7xl mx-auto px-6 md:px-12 ${
          transparent ? "py-4" : "py-3"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center z-50">
            <Image
              src="/1.png"
              alt="Kaaveri TMT Bars & Structural"
              width={210}
              height={65}
              className="h-10 md:h-12 lg:h-11 xl:h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-5">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={`${navItemClass} group`}>
                {link.name}
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            {/* Media & Support */}
            <div className="relative flex items-center" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setDropdownOpen((prev) => !prev)}
                className={`${navItemClass} group gap-1`}
              >
                <span>Media & Support</span>
                <span className="text-[9px] translate-y-[-1px]">▾</span>
                <span
                  className={`absolute left-0 -bottom-0.5 h-[2px] bg-red-600 transition-all duration-300 ${
                    dropdownOpen ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="absolute right-0 xl:left-1/2 top-full z-50 mt-3 w-[420px] xl:w-[540px] xl:-translate-x-1/2 rounded-2xl border border-black/10 bg-white p-4 xl:p-5 shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
                  >
                    <div className="mb-3 text-[12px] font-bold uppercase tracking-[0.15em] text-black/70">
                      Media & Support
                    </div>

                    <div className="grid max-h-[320px] grid-cols-2 gap-x-3 xl:gap-x-6 gap-y-1 overflow-y-auto pr-1">
                      {mediaSupportLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="rounded-lg px-3 py-2 text-xs xl:text-sm text-black transition hover:bg-yellow-50 hover:text-red-600"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Careers */}
            <Link href="/careers" className={`${navItemClass} group`}>
              Careers
              <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full" />
            </Link>

            {/* CTA */}
            <Link
              href="/product-enquiry"
              className="ml-1 xl:ml-2 inline-flex items-center justify-center rounded-full bg-red-600 px-4 py-2 xl:px-5 text-[10px] xl:text-[11px] font-semibold uppercase tracking-[0.08em] xl:tracking-[0.12em] text-white transition duration-300 hover:bg-red-700"
            >
              Request Quote
            </Link>
          </nav>

          {/* Mobile Button */}
          <button
            className="lg:hidden z-50 text-2xl text-black p-2"
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
              className="fixed inset-0 z-40 flex flex-col items-center justify-start gap-4 bg-white px-6 pt-24 pb-12 overflow-y-auto"
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

              <div className="w-full max-w-md pt-2">
                <div className="mb-3 text-center text-sm font-bold uppercase tracking-[0.16em] text-black/70">
                  Media & Support
                </div>

                <div className="grid grid-cols-1 gap-2 text-center">
                  {mediaSupportLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-lg px-4 py-2 text-sm text-black transition hover:bg-yellow-50 hover:text-red-600"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/careers"
                className="pt-2 text-lg font-semibold uppercase tracking-[0.12em]"
              >
                Careers
              </Link>

              <Link
                href="/product-enquiry"
                className="mt-2 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white"
              >
                Request Quote
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

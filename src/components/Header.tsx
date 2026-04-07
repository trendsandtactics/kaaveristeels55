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

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          transparent
            ? "bg-black/20 backdrop-blur-md"
            : "bg-white/95 backdrop-blur-xl border-b border-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
        }`}
      />

      <div
        className={`relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 transition-all duration-500 ${
          transparent ? "py-4 md:py-5" : "py-3 md:py-4"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="relative z-50 flex items-center shrink-0 transition-transform duration-300 hover:scale-[1.02]"
          >
            <Image
              src="/logo3.png"
              alt="Kaaveri TMT Bars & Structural"
              width={200}
              height={56}
              className={`w-auto object-contain transition-all duration-500 ${
                transparent ? "h-10 md:h-12" : "h-9 md:h-11"
              }`}
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-body text-[11px] uppercase tracking-[0.16em] font-bold transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:transition-all after:duration-300 hover:after:w-full ${
                  transparent
                    ? "text-white drop-shadow-[0_1px_10px_rgba(0,0,0,0.45)] hover:text-white after:bg-white"
                    : "text-black/85 hover:text-accent-red after:bg-accent-red"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setDropdownOpen((prev) => !prev)}
                aria-expanded={dropdownOpen}
                aria-haspopup="menu"
                className={`flex items-center gap-1 relative font-body text-[11px] uppercase tracking-[0.16em] font-bold transition-all duration-300 ${
                  transparent
                    ? "text-white drop-shadow-[0_1px_10px_rgba(0,0,0,0.45)] hover:text-white"
                    : "text-black/85 hover:text-accent-red"
                }`}
              >
                MEDIA & SUPPORT
                <span
                  className={`transition-transform duration-300 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>

              <div
                role="menu"
                className={`absolute right-0 top-full mt-4 w-[360px] max-h-[65vh] overflow-y-auto rounded-xl border border-black/10 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.16)] p-4 transition-all duration-200 ${
                  dropdownOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <p className="mb-3 px-1 text-[11px] font-bold tracking-[0.25em] uppercase text-black/45">
                  Media & Support Pages
                </p>

                <div className="flex flex-col">
                  {mediaSupportLinks.map((page, index) => (
                    <Link
                      key={`${page.href}-${page.name}`}
                      href={page.href}
                      onClick={() => setDropdownOpen(false)}
                      className={`rounded-md px-3 py-2.5 text-[15px] text-black/85 transition-colors hover:bg-accent-red/5 hover:text-accent-red ${
                        index < mediaSupportLinks.length - 1
                          ? "border-b border-gray-100"
                          : ""
                      }`}
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/careers"
              className={`relative font-body text-[11px] uppercase tracking-[0.16em] font-bold transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:transition-all after:duration-300 hover:after:w-full ${
                transparent
                  ? "text-white drop-shadow-[0_1px_10px_rgba(0,0,0,0.45)] hover:text-white after:bg-white"
                  : "text-black/85 hover:text-accent-red after:bg-accent-red"
              }`}
            >
              Careers
            </Link>

            <Link
              href="/product-enquiry"
              className="ml-1 inline-flex items-center justify-center rounded-md border-2 border-accent-red bg-accent-red px-5 py-3 font-body text-[11px] font-bold uppercase tracking-[0.16em] text-white shadow-[0_10px_25px_rgba(160,28,28,0.24)] transition-all duration-300 hover:-translate-y-[1px] hover:bg-white hover:text-accent-red"
            >
              Request Quote
            </Link>
          </nav>

          <button
            className={`lg:hidden relative z-50 flex h-10 w-10 flex-col items-end justify-center gap-1.5 ${
              transparent ? "text-white" : "text-black"
            }`}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[2px] transition-all duration-300 ${
                transparent ? "bg-white" : "bg-black"
              } ${mobileMenuOpen ? "w-6 rotate-45 translate-y-[7px]" : "w-6"}`}
            />
            <span
              className={`block h-[2px] transition-all duration-300 ${
                transparent ? "bg-white" : "bg-black"
              } ${mobileMenuOpen ? "opacity-0 w-6" : "w-5"}`}
            />
            <span
              className={`block h-[2px] transition-all duration-300 ${
                transparent ? "bg-white" : "bg-black"
              } ${mobileMenuOpen ? "w-6 -rotate-45 -translate-y-[7px]" : "w-4"}`}
            />
          </button>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.28 }}
                className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl lg:hidden"
              >
                <div className="flex h-full flex-col overflow-y-auto px-6 pb-10 pt-28">
                  <div className="space-y-8">
                    {[
                      {
                        title: "Main Pages",
                        links: [...navLinks, { name: "Careers", href: "/careers" }],
                      },
                      {
                        title: "Media & Support",
                        links: mediaSupportLinks,
                      },
                    ].map((category) => (
                      <div key={category.title}>
                        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-black/45">
                          {category.title}
                        </p>
                        <div className="grid gap-1 rounded-xl bg-white p-2 shadow-sm">
                          {category.links.map((link) => (
                            <Link
                              key={`${category.title}-${link.href}`}
                              href={link.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="rounded-lg px-3 py-3 text-base font-medium text-black/85 transition-colors hover:bg-accent-red/5 hover:text-accent-red"
                            >
                              {link.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}

                    <Link
                      href="/product-enquiry"
                      onClick={() => setMobileMenuOpen(false)}
                      className="inline-flex w-full items-center justify-center rounded-md border-2 border-accent-red bg-accent-red px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-white hover:text-accent-red"
                    >
                      Request Quote
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}

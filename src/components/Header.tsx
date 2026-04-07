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
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-500">
      
      {/* Background */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          transparent
            ? "bg-transparent"
            : "bg-white/95 backdrop-blur-xl border-b border-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
        }`}
      />

      <div className={`relative max-w-7xl mx-auto px-6 md:px-12 ${transparent ? "py-5" : "py-4"}`}>
        
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="z-50">
            <Image
              src="/logo3.png"
              alt="Kaaveri TMT Bars & Structural"
              width={200}
              height={56}
              className="h-10 md:h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[11px] uppercase tracking-[0.15em] font-bold transition ${
                  transparent
                    ? "text-black drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)] hover:text-accent-red"
                    : "text-black hover:text-accent-red"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`text-[11px] uppercase tracking-[0.15em] font-bold ${
                  transparent
                    ? "text-black drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)]"
                    : "text-black"
                }`}
              >
                MEDIA & SUPPORT ▾
              </button>

              <div
                className={`absolute right-0 mt-3 w-[340px] bg-white border shadow-lg rounded-md p-4 transition ${
                  dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                {mediaSupportLinks.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="block py-2 text-sm hover:text-accent-red"
                  >
                    {page.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Careers */}
            <Link
              href="/careers"
              className={`text-[11px] uppercase tracking-[0.15em] font-bold ${
                transparent
                  ? "text-black drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)]"
                  : "text-black"
              }`}
            >
              Careers
            </Link>

            {/* CTA */}
            <Link
              href="/product-enquiry"
              className="ml-2 px-5 py-2.5 bg-accent-red text-white text-[11px] uppercase tracking-[0.15em] font-bold rounded-md hover:bg-red-800 transition"
            >
              Request Quote
            </Link>

          </nav>

          {/* Mobile Button */}
          <button
            className="lg:hidden z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
              className="fixed inset-0 bg-white flex flex-col items-center justify-center gap-6 z-40"
            >
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
}

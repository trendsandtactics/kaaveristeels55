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

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
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

  const navItem =
    "relative inline-flex items-center h-9 text-[11px] uppercase tracking-[0.14em] font-semibold text-black transition";

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-500">

      {/* BACKGROUND */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          transparent
            ? "bg-transparent"
            : "bg-white/90 backdrop-blur-md shadow-md border-b border-black/10"
        }`}
      />

      <div className={`relative max-w-7xl mx-auto px-6 md:px-12 ${transparent ? "py-4" : "py-3"}`}>

        <div className="flex items-center justify-between">

          {/* LOGO */}
          <Link href="/">
            <Image
              src="/logo3.png"
              alt="Kaaveri"
              width={200}
              height={60}
              className="h-10 md:h-11 w-auto object-contain"
              priority
            />
          </Link>

          {/* NAV */}
          <nav className="hidden lg:flex items-center gap-5">

            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={navItem}>
                {link.name}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-red-600 transition-all duration-300 hover:w-full" />
              </Link>
            ))}

            {/* MEDIA & SUPPORT */}
            <div className="relative flex items-center" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`${navItem} gap-1`}
              >
                Media & Support ▾
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-red-600 transition-all duration-300 ${
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
                    className="absolute top-full mt-3 w-64 bg-white rounded-xl shadow-xl p-3"
                  >
                    <Link href="/photo-gallery" className="block py-2 hover:text-red-600">Photo Gallery</Link>
                    <Link href="/media-events" className="block py-2 hover:text-red-600">Media Events</Link>
                    <Link href="/blogs" className="block py-2 hover:text-red-600">Blogs</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CAREERS */}
            <Link href="/careers" className={navItem}>
              Careers
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-red-600 transition-all duration-300 hover:w-full" />
            </Link>

            {/* CTA */}
            <Link
              href="/product-enquiry"
              className="ml-2 px-5 py-2 rounded-full bg-red-600 text-white text-[11px] uppercase tracking-[0.14em] font-semibold hover:bg-red-700 transition"
            >
              Request Quote
            </Link>

          </nav>

          {/* MOBILE */}
          <button
            className="lg:hidden text-xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
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

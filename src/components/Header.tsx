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
  { name: "Dealers", href: "/dealers" },
];

const mediaLinks = [
  { name: "Photo Gallery", href: "/photo-gallery" },
  { name: "Media & Events", href: "/media-events" },
  { name: "Corporate Social Responsibility", href: "/csr" },
  { name: "Blogs", href: "/blogs" },
  { name: "Projects", href: "/projects" },
];

const supportLinks = [
  { name: "Product Brochure", href: "/product-brochure" },
  { name: "Steel Calculator", href: "/construction-steel-calculator" },
  { name: "Certifications", href: "/certifications" },
  { name: "Sales/Dealer Enquiry", href: "/product-enquiry" },
  { name: "Trust On Site", href: "/trust-on-site" },
];

export default function Header() {
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mediaDropdownOpen, setMediaDropdownOpen] = useState(false);
  const [supportDropdownOpen, setSupportDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const mediaDropdownRef = useRef<HTMLDivElement | null>(null);
  const supportDropdownRef = useRef<HTMLDivElement | null>(null);

  const navItemStyles = "text-[13px] xl:text-[14px] leading-none uppercase tracking-[0.12em] font-bold whitespace-nowrap transition-all duration-300";

  useEffect(() => {
    setMobileMenuOpen(false);
    setMediaDropdownOpen(false);
    setSupportDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (mediaDropdownRef.current && !mediaDropdownRef.current.contains(event.target as Node)) {
        setMediaDropdownOpen(false);
      }
      if (supportDropdownRef.current && !supportDropdownRef.current.contains(event.target as Node)) {
        setSupportDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        transparent ? "pt-6" : "pt-4"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-6">
        <div
          className={`transition-all duration-500 rounded-full overflow-hidden ${
            transparent
              ? "bg-transparent"
              : "bg-white/95 backdrop-blur-xl border border-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
          }`}
        >
          <div
            className={`flex items-center transition-all duration-500 px-6 md:px-10 xl:px-10 ${
              transparent ? "h-[100px]" : "h-[90px]"
            }`}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/logo4.png"
                alt="Kaaveri TMT"
                width={280}
                height={80}
                priority
                className="h-12 md:h-14 xl:h-15 w-auto object-contain"
              />
            </Link>

            {/* SPACER: This creates the gap between Logo and Nav */}
            <div className="flex-1 min-w-[40px]" />

            {/* Desktop Menu */}
            <nav className="hidden xl:flex items-center gap-6 2xl:gap-9">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative ${navItemStyles} hover:text-red-600 ${
                    pathname === link.href ? "text-black" : "text-black/80"
                  }`}
                >
                  {link.name}
                  {pathname === link.href && (
                    <span className="absolute left-0 top-[calc(100%+14px)] h-[2px] w-full bg-black rounded-full" />
                  )}
                </Link>
              ))}

              {/* Media Dropdown */}
              <div className="relative flex items-center" ref={mediaDropdownRef}>
                <button
                  onClick={() => {
                    setMediaDropdownOpen((prev) => !prev);
                    setSupportDropdownOpen(false);
                  }}
                  className={`flex items-center gap-1.5 ${navItemStyles} text-black/80 hover:text-red-600`}
                >
                  Media
                  <span className="text-[10px] translate-y-[1px]">▼</span>
                </button>

                <AnimatePresence>
                  {mediaDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 12 }}
                      className="absolute right-0 top-full mt-6 w-[280px] rounded-3xl border border-black/10 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
                    >
                      <div className="flex flex-col gap-1">
                        {mediaLinks.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="rounded-xl px-4 py-3 text-[13px] font-semibold text-black/80 hover:bg-yellow-50 hover:text-red-600 transition"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Support Dropdown */}
              <div className="relative flex items-center" ref={supportDropdownRef}>
                <button
                  onClick={() => {
                    setSupportDropdownOpen((prev) => !prev);
                    setMediaDropdownOpen(false);
                  }}
                  className={`flex items-center gap-1.5 ${navItemStyles} text-black/80 hover:text-red-600`}
                >
                  Support
                  <span className="text-[10px] translate-y-[1px]">▼</span>
                </button>

                <AnimatePresence>
                  {supportDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 12 }}
                      className="absolute right-0 top-full mt-6 w-[280px] rounded-3xl border border-black/10 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
                    >
                      <div className="flex flex-col gap-1">
                        {supportLinks.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="rounded-xl px-4 py-3 text-[13px] font-semibold text-black/80 hover:bg-yellow-50 hover:text-red-600 transition"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/careers" className={`${navItemStyles} text-black/80 hover:text-red-600`}>
                Careers
              </Link>

              <Link href="/contact-us" className={`${navItemStyles} text-black/80 hover:text-red-600`}>
                Contact Us
              </Link>

              {/* Request Quote Button */}
              <Link
                href="/product-enquiry"
                className="inline-flex items-center justify-center rounded-full bg-red-600 px-7 h-12 text-[13px] font-bold uppercase tracking-[0.14em] text-white transition-all hover:bg-red-700 shadow-md ml-2"
              >
                Request Quote
              </Link>
            </nav>

            {/* Mobile Toggle */}
            <button
              className="xl:hidden flex items-center justify-center w-11 h-11 rounded-full bg-white shadow-md border border-black/5"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

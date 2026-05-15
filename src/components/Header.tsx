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

  // TYPOGRAPHY: 14px, Bold, Uppercase, Non-wrapping
  const navItemStyles = "text-[14px] leading-none uppercase tracking-[0.14em] font-bold whitespace-nowrap transition-all duration-300";

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
      {/* Max width increased to [1440px] to accommodate the full horizontal menu */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-6">
        <div
          className={`transition-all duration-500 rounded-full ${
            transparent
              ? "bg-transparent"
              : "bg-white/95 backdrop-blur-xl border border-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
          }`}
        >
          {/* Header Height: Increased to 100px / 90px for more breathing room */}
          <div
            className={`flex items-center justify-between transition-all duration-500 px-6 md:px-10 xl:px-12 ${
              transparent ? "h-[100px]" : "h-[90px]"
            }`}
          >
            {/* Logo: Sized up for better visibility */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/logo4.png"
                alt="Kaaveri TMT"
                width={300}
                height={90}
                priority
                className="h-14 md:h-16 xl:h-18 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation: perfectly centered vertically via items-center */}
            <nav className="hidden xl:flex items-center gap-8 2xl:gap-10">
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

              {/* Media Dropdown Button */}
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

              {/* Support Dropdown Button */}
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

              {/* Request Quote Button: Increased height to match header scale */}
              <Link
                href="/product-enquiry"
                className="inline-flex items-center justify-center rounded-full bg-red-600 px-8 h-14 text-[14px] font-bold uppercase tracking-[0.14em] text-white transition-all hover:bg-red-700 active:scale-95 shadow-md ml-2"
              >
                Request Quote
              </Link>
            </nav>

            {/* Mobile Hamburger Menu */}
            <button
              className="xl:hidden flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md border border-black/5"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-40 pt-32 px-6 overflow-y-auto"
          >
            <div className="flex flex-col items-center gap-6 pb-20">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-xl font-bold uppercase tracking-[0.12em]">
                  {link.name}
                </Link>
              ))}
              <div className="w-full max-w-md pt-4 border-t border-black/5">
                <div className="text-center text-[10px] font-black uppercase tracking-[0.2em] text-black/40 mb-6">Media</div>
                <div className="grid gap-2">
                  {mediaLinks.map((item) => (
                    <Link key={item.href} href={item.href} className="rounded-xl px-4 py-3 text-center text-base font-medium hover:bg-yellow-50">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="w-full max-w-md pt-4 border-t border-black/5">
                <div className="text-center text-[10px] font-black uppercase tracking-[0.2em] text-black/40 mb-6">Support</div>
                <div className="grid gap-2">
                  {supportLinks.map((item) => (
                    <Link key={item.href} href={item.href} className="rounded-xl px-4 py-3 text-center text-base font-medium hover:bg-yellow-50">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="/careers" className="text-xl font-bold uppercase tracking-[0.12em]">Careers</Link>
              <Link href="/contact-us" className="text-xl font-bold uppercase tracking-[0.12em]">Contact Us</Link>
              <Link href="/product-enquiry" className="rounded-full bg-red-600 px-10 py-5 text-base font-bold uppercase text-white shadow-lg">
                Request Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

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

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (
        mediaDropdownRef.current &&
        !mediaDropdownRef.current.contains(event.target as Node)
      ) {
        setMediaDropdownOpen(false);
      }
      if (
        supportDropdownRef.current &&
        !supportDropdownRef.current.contains(event.target as Node)
      ) {
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
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        transparent ? "pt-5" : "pt-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 md:px-6">
        <div
          className={`transition-all duration-500 rounded-full relative ${
            transparent
              ? "bg-transparent"
              : "bg-white/95 backdrop-blur-xl border border-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
          }`}
        >
          <div
            className={`flex items-center justify-between transition-all duration-500 px-5 md:px-8 xl:px-10 ${
              transparent ? "h-[92px]" : "h-[82px]"
            }`}
          >
            {/* Logo — fixed min-width so nav never crowds it */}
            <Link
              href="/"
              className="flex items-center shrink-0 min-w-[240px]"
            >
              <Image
                src="/logo4.png"
                alt="Kaaveri TMT"
                width={280}
                height={80}
                priority
                className="h-11 md:h-13 xl:h-16 w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav — ml-16 creates a clean gap after the logo */}
            <nav className="hidden xl:flex items-center gap-8 ml-16">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-[14px] uppercase tracking-[0.14em] font-bold transition-colors duration-300 hover:text-red-600 ${
                    pathname === link.href
                      ? "text-black"
                      : "text-black/80"
                  }`}
                >
                  {link.name}

                  {pathname === link.href && (
                    <span className="absolute left-0 top-full mt-2 h-[2px] w-full bg-black rounded-full" />
                  )}
                </Link>
              ))}

              {/* Media Dropdown */}
              <div
                className="relative flex items-center h-full"
                ref={mediaDropdownRef}
              >
                <button
                  onClick={() => {
                    setMediaDropdownOpen((prev) => !prev);
                    setSupportDropdownOpen(false);
                  }}
                  className="flex items-center gap-1 text-[14px] uppercase tracking-[0.14em] font-bold text-black/80 hover:text-red-600 transition"
                >
                  Media
                  <span className="text-[11px]">▼</span>
                </button>

                <AnimatePresence>
                  {mediaDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 12 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full mt-2 w-[280px] rounded-3xl border border-black/10 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.15)] z-[110]"
                    >
                      <div className="grid grid-cols-1 gap-2">
                        {mediaLinks.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="rounded-xl px-4 py-3 text-[13px] font-medium text-black/80 hover:bg-yellow-50 hover:text-red-600 transition"
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
              <div
                className="relative flex items-center h-full"
                ref={supportDropdownRef}
              >
                <button
                  onClick={() => {
                    setSupportDropdownOpen((prev) => !prev);
                    setMediaDropdownOpen(false);
                  }}
                  className="flex items-center gap-1 text-[14px] uppercase tracking-[0.14em] font-bold text-black/80 hover:text-red-600 transition"
                >
                  Support
                  <span className="text-[11px]">▼</span>
                </button>

                <AnimatePresence>
                  {supportDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 12 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full mt-2 w-[280px] rounded-3xl border border-black/10 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.15)] z-[110]"
                    >
                      <div className="grid grid-cols-1 gap-2">
                        {supportLinks.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="rounded-xl px-4 py-3 text-[13px] font-medium text-black/80 hover:bg-yellow-50 hover:text-red-600 transition"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/careers"
                className="text-[14px] uppercase tracking-[0.14em] font-bold text-black/80 hover:text-red-600 transition"
              >
                Careers
              </Link>

              <Link
                href="/contact-us"
                className="text-[14px] uppercase tracking-[0.14em] font-bold text-black/80 hover:text-red-600 transition"
              >
                Contact Us
              </Link>

              <Link
                href="/product-enquiry"
                className="inline-flex items-center justify-center rounded-full bg-red-600 px-8 h-12 text-[13px] font-bold uppercase tracking-[0.14em] text-white transition hover:bg-red-700 whitespace-nowrap ml-2"
              >
                Request Quote
              </Link>
            </nav>

            {/* Mobile Hamburger */}
            <button
              className="xl:hidden flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

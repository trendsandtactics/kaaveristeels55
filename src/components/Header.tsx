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

    return () =>
      window.removeEventListener("scroll", onScroll);
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

    document.addEventListener(
      "mousedown",
      onClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        onClickOutside
      );
  }, []);

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        transparent ? "pt-5" : "pt-4"
      }`}
    >
      {/* Navbar */}
      <div className="max-w-7xl mx-auto px-3 md:px-6">
        <div
          className={`transition-all duration-500 rounded-full ${
            transparent
              ? "bg-transparent"
              : "bg-white/95 backdrop-blur-xl border border-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
          }`}
        >
          <div
            className={`flex items-center justify-between transition-all duration-500 px-5 md:px-8 xl:px-10 ${
              transparent ? "h-[82px]" : "h-[72px]"
            }`}
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center shrink-0"
            >
              <Image
                src="/logo4.png"
                alt="Kaaveri TMT"
                width={210}
                height={90}
                priority
                className="h-14 md:h-14 xl:h-11 w-auto object-contain"
              />
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden xl:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-[11px] uppercase tracking-[0.14em] font-semibold transition-colors duration-300 hover:text-red-600 ${
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
                className="relative"
                ref={mediaDropdownRef}
              >
                <button
                  onClick={() => {
                    setMediaDropdownOpen((prev) => !prev);
                    setSupportDropdownOpen(false);
                  }}
                  className="flex items-center gap-1 text-[11px] uppercase tracking-[0.14em] font-semibold text-black/80 hover:text-red-600 transition"
                >
                  Media
                  <span className="text-[9px]">▾</span>
                </button>

                <AnimatePresence>
                  {mediaDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 12 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 top-full mt-5 w-[260px] rounded-3xl border border-black/10 bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
                    >
                      <div className="grid grid-cols-1 gap-2">
                        {mediaLinks.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="rounded-xl px-3 py-2 text-sm text-black/80 hover:bg-yellow-50 hover:text-red-600 transition"
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
                className="relative"
                ref={supportDropdownRef}
              >
                <button
                  onClick={() => {
                    setSupportDropdownOpen((prev) => !prev);
                    setMediaDropdownOpen(false);
                  }}
                  className="flex items-center gap-1 text-[11px] uppercase tracking-[0.14em] font-semibold text-black/80 hover:text-red-600 transition"
                >
                  Support
                  <span className="text-[9px]">▾</span>
                </button>

                <AnimatePresence>
                  {supportDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 12 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 top-full mt-5 w-[260px] rounded-3xl border border-black/10 bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
                    >
                      <div className="grid grid-cols-1 gap-2">
                        {supportLinks.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="rounded-xl px-3 py-2 text-sm text-black/80 hover:bg-yellow-50 hover:text-red-600 transition"
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
              <Link
                href="/careers"
                className="text-[11px] uppercase tracking-[0.14em] font-semibold text-black/80 hover:text-red-600 transition"
              >
                Careers
              </Link>

              {/* Contact Us */}
              <Link
                href="/contact-us"
                className="text-[11px] uppercase tracking-[0.14em] font-semibold text-black/80 hover:text-red-600 transition"
              >
                Contact Us
              </Link>

              {/* CTA */}
              <Link
                href="/product-enquiry"
                className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 h-11 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-red-700"
              >
                Request Quote
              </Link>
            </nav>

            {/* Hamburger */}
            <button
              className="xl:hidden flex items-center justify-center w-11 h-11 rounded-full bg-white shadow-md"
              onClick={() =>
                setMobileMenuOpen(!mobileMenuOpen)
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-40 pt-28 px-6 overflow-y-auto"
          >
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-semibold uppercase tracking-[0.12em]"
                >
                  {link.name}
                </Link>
              ))}

              <div className="w-full max-w-md pt-4">
                <div className="text-center text-sm font-bold uppercase tracking-[0.16em] mb-4">
                  Media
                </div>

                <div className="grid gap-2">
                  {mediaLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-xl px-4 py-3 text-center text-sm hover:bg-yellow-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="w-full max-w-md pt-4">
                <div className="text-center text-sm font-bold uppercase tracking-[0.16em] mb-4">
                  Support
                </div>

                <div className="grid gap-2">
                  {supportLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-xl px-4 py-3 text-center text-sm hover:bg-yellow-50"
                    >
                      {item.name}
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
                href="/contact-us"
                className="text-lg font-semibold uppercase tracking-[0.12em]"
              >
                Contact Us
              </Link>

              <Link
                href="/product-enquiry"
                className="rounded-full bg-red-600 px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

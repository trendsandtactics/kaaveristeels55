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

    document.addEventListener("mousedown", onClickOutside);

    return () =>
      document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div
        className={`w-full transition-all duration-500 ${
          transparent ? "pt-5" : "pt-4"
        }`}
      >
        <div className="max-w-[1380px] mx-auto px-4 xl:px-5">
          <div
            className={`relative rounded-full overflow-visible transition-all duration-500 ${
              transparent
                ? "bg-transparent"
                : "bg-white/95 backdrop-blur-xl border border-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
            }`}
          >
            <div
              className={`flex items-center justify-between px-5 md:px-6 xl:px-7 transition-all duration-500 ${
                transparent ? "h-[92px]" : "h-[82px]"
              }`}
            >
              {/* Logo */}
              <Link
                href="/"
                className="flex items-center shrink-0 mr-3 xl:mr-5"
              >
                <Image
                  src="/logo4.png"
                  alt="Kaaveri TMT"
                  width={250}
                  height={110}
                  priority
                  className="h-14 sm:h-16 md:h-16 xl:h-14 w-auto object-contain"
                />
              </Link>

              {/* Desktop */}
              <nav className="hidden xl:flex items-center gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative whitespace-nowrap text-[11px] uppercase tracking-[0.14em] font-semibold transition-colors duration-300 hover:text-red-600 ${
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

                {/* Media */}
                <div
                  className="relative"
                  ref={mediaDropdownRef}
                >
                  <button
                    onClick={() => {
                      setMediaDropdownOpen((prev) => !prev);
                      setSupportDropdownOpen(false);
                    }}
                    className="flex items-center gap-1 whitespace-nowrap text-[11px] uppercase tracking-[0.14em] font-semibold text-black/80 hover:text-red-600"
                  >
                    Media
                    <span className="text-[9px]">▾</span>
                  </button>

                  <AnimatePresence>
                    {mediaDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 top-full mt-3 z-50 w-[260px] rounded-3xl border border-black/10 bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
                      >
                        <div className="grid gap-2">
                          {mediaLinks.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="rounded-xl px-3 py-2 text-sm hover:bg-yellow-50"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Support */}
                <div
                  className="relative"
                  ref={supportDropdownRef}
                >
                  <button
                    onClick={() => {
                      setSupportDropdownOpen((prev) => !prev);
                      setMediaDropdownOpen(false);
                    }}
                    className="flex items-center gap-1 whitespace-nowrap text-[11px] uppercase tracking-[0.14em] font-semibold text-black/80 hover:text-red-600"
                  >
                    Support
                    <span className="text-[9px]">▾</span>
                  </button>

                  <AnimatePresence>
                    {supportDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 top-full mt-3 z-50 w-[260px] rounded-3xl border border-black/10 bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
                      >
                        <div className="grid gap-2">
                          {supportLinks.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="rounded-xl px-3 py-2 text-sm hover:bg-yellow-50"
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
                  className="whitespace-nowrap text-[11px] uppercase tracking-[0.14em] font-semibold"
                >
                  Careers
                </Link>

                <Link
                  href="/contact-us"
                  className="whitespace-nowrap text-[11px] uppercase tracking-[0.14em] font-semibold"
                >
                  Contact Us
                </Link>

                <Link
                  href="/product-enquiry"
                  className="inline-flex shrink-0 whitespace-nowrap items-center justify-center rounded-full bg-red-600 px-5 h-10 text-[10px] font-semibold uppercase tracking-[0.14em] text-white hover:bg-red-700"
                >
                  Request Quote
                </Link>
              </nav>

              {/* Mobile */}
              <button
                className="xl:hidden flex items-center justify-center w-11 h-11 rounded-full bg-white shadow-md"
                onClick={() =>
                  setMobileMenuOpen(!mobileMenuOpen)
                }
              >
                ☰
              </button>
            </div>
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
            className="fixed inset-0 bg-white z-40 pt-28 px-6"
          >
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-semibold uppercase"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="/product-enquiry"
                className="rounded-full bg-red-600 px-7 py-4 text-sm font-semibold uppercase text-white"
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

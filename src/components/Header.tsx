"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

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
  const [mobileMediaOpen, setMobileMediaOpen] = useState(false);
  const [mobileSupportOpen, setMobileSupportOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const mediaDropdownRef = useRef<HTMLDivElement | null>(null);
  const supportDropdownRef = useRef<HTMLDivElement | null>(null);

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
        className={`transition-all duration-500 ${
          transparent ? "pt-4" : "pt-3"
        }`}
      >
        {/* Center Wrapper */}
        <div className="max-w-[1400px] w-full mx-auto px-4 md:px-3 flex justify-center">
          
          {/* Navbar Container */}
          <div
            className={`w-full md:w-fit rounded-2xl md:rounded-full overflow-visible transition-all duration-500 ${
              transparent
                ? "bg-white/80 backdrop-blur-md md:backdrop-blur-none md:bg-transparent shadow-sm md:shadow-none border border-black/5 md:border-none"
                : "bg-white/95 backdrop-blur-xl border border-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
            }`}
          >
        <div className="h-[72px] md:h-[82px] px-2 md:px-4 lg:px-6 xl:px-8 flex items-center justify-between md:justify-start w-full gap-3 md:gap-4 lg:gap-6 xl:gap-8">

              {/* Logo */}
              <Link
                href="/"
                className="flex items-center shrink-0 pl-2 md:pl-0"
              >
                <Image
                  src="/logo4.png"
                  alt="Kaaveri TMT"
                  width={190}
                  height={70}
                  priority
              className="h-9 sm:h-10 xl:h-12 w-auto object-contain"
                />
              </Link>

              {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-2 md:gap-3 lg:gap-5 xl:gap-8">

                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative whitespace-nowrap text-[9px] md:text-[10px] xl:text-[11px] uppercase tracking-[0.14em] font-bold transition-colors duration-300 hover:text-red-600 ${
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
                    className="flex items-center gap-1 whitespace-nowrap text-[9px] md:text-[10px] xl:text-[11px] uppercase tracking-[0.14em] font-bold text-black/80 hover:text-red-600"
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
                        className="absolute top-full left-0 mt-3 z-50 w-[260px] rounded-3xl border border-black/10 bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
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
                    className="flex items-center gap-1 whitespace-nowrap text-[9px] md:text-[10px] xl:text-[11px] uppercase tracking-[0.14em] font-bold text-black/80 hover:text-red-600"
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
                        className="absolute top-full left-0 mt-3 z-50 w-[260px] rounded-3xl border border-black/10 bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
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

                {/* Careers */}
                <Link
                  href="/careers"
                  className="whitespace-nowrap text-[9px] md:text-[10px] xl:text-[11px] uppercase tracking-[0.14em] font-bold text-black/80 hover:text-red-600"
                >
                  Careers
                </Link>

                {/* Contact */}
                <Link
                  href="/contact-us"
                  className="whitespace-nowrap text-[9px] md:text-[10px] xl:text-[11px] uppercase tracking-[0.14em] font-bold text-black/80 hover:text-red-600"
                >
                  Contact Us
                </Link>

                {/* CTA */}
                <Link
                  href="/product-enquiry"
                  className="inline-flex shrink-0 whitespace-nowrap items-center justify-center rounded-full bg-red-600 px-4 md:px-5 lg:px-6 h-9 md:h-10 lg:h-11 text-[9px] md:text-[10px] xl:text-[11px] font-bold uppercase tracking-[0.14em] text-white hover:bg-red-700 transition-colors duration-300"
                >
                  Request Quote
                </Link>
              </nav>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 transition-colors shadow-sm mr-1 md:mr-0"
                onClick={() => setMobileMenuOpen(true)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
          className="md:hidden fixed inset-0 bg-black/20 z-30"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="md:hidden fixed inset-y-0 right-0 w-[85vw] max-w-sm z-40 bg-white shadow-2xl flex flex-col"
            >
              {/* Header inside menu */}
              <div className="flex items-center justify-between p-5 border-b border-gray-100">
                <Image
                  src="/logo4.png"
                  alt="Kaaveri TMT"
                  width={140}
                  height={50}
                  className="h-8 w-auto object-contain"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 text-gray-500 hover:bg-red-50 hover:text-red-600 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-5">
                <nav className="flex flex-col gap-1">
                  {/* Primary Links */}
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block rounded-xl px-4 py-3.5 text-sm font-bold uppercase tracking-wider transition-colors duration-200 ${
                        pathname === link.href
                          ? "text-red-600 bg-red-50"
                          : "text-gray-800 hover:text-red-600 hover:bg-gray-50"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}

                  {/* Media Dropdown */}
                  <div className="rounded-xl bg-gray-50 overflow-hidden mt-1">
                    <button
                      onClick={() => setMobileMediaOpen(!mobileMediaOpen)}
                      className="w-full flex items-center justify-between px-4 py-3.5 text-sm font-bold uppercase tracking-wider text-gray-800 hover:text-red-600 transition-colors"
                    >
                      Media
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          mobileMediaOpen ? "rotate-180 text-red-600" : "text-gray-500"
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileMediaOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col px-4 pb-3 space-y-1">
                            {mediaLinks.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="block rounded-lg px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-red-600 hover:bg-red-50/50 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
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
                  <div className="rounded-xl bg-gray-50 overflow-hidden mt-1">
                    <button
                      onClick={() => setMobileSupportOpen(!mobileSupportOpen)}
                      className="w-full flex items-center justify-between px-4 py-3.5 text-sm font-bold uppercase tracking-wider text-gray-800 hover:text-red-600 transition-colors"
                    >
                      Support
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          mobileSupportOpen ? "rotate-180 text-red-600" : "text-gray-500"
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileSupportOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col px-4 pb-3 space-y-1">
                            {supportLinks.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="block rounded-lg px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-red-600 hover:bg-red-50/50 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Careers & Contact */}
                  <Link
                    href="/careers"
                    className={`block mt-1 rounded-xl px-4 py-3.5 text-sm font-bold uppercase tracking-wider transition-colors duration-200 ${
                      pathname === "/careers"
                        ? "text-red-600 bg-red-50"
                        : "text-gray-800 hover:text-red-600 hover:bg-gray-50"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Careers
                  </Link>

                  <Link
                    href="/contact-us"
                    className={`block mt-1 rounded-xl px-4 py-3.5 text-sm font-bold uppercase tracking-wider transition-colors duration-200 ${
                      pathname === "/contact-us"
                        ? "text-red-600 bg-red-50"
                        : "text-gray-800 hover:text-red-600 hover:bg-gray-50"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </nav>
              </div>

              {/* Footer CTA inside menu */}
              <div className="p-5 border-t border-gray-100 bg-gray-50/50">
                <Link
                  href="/product-enquiry"
                  className="flex items-center justify-center w-full rounded-xl bg-red-600 px-4 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-lg hover:bg-red-700 active:scale-[0.98] transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Request Quote
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

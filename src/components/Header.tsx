"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Products", href: "/products" },
  { name: "Projects", href: "/projects" },
  { name: "Contact Us", href: "/contact-us" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItem =
    "text-sm font-semibold uppercase tracking-wide text-black hover:text-red-600 transition whitespace-nowrap";

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Background */}
      <div
        className={`absolute inset-0 transition ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b"
            : "bg-yellow-400"
        }`}
      />

      {/* MAIN CONTAINER */}
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 py-3 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/logo4.png"
            alt="Kaaveri"
            width={180}
            height={60}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* NAV CENTERED */}
        <nav className="hidden lg:flex items-center justify-center flex-1 gap-8 xl:gap-10">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={navItem}>
              {link.name}
            </Link>
          ))}

          <Link href="/media" className={navItem}>
            Media & Support
          </Link>

          <Link href="/careers" className={navItem}>
            Careers
          </Link>
        </nav>

        {/* CTA RIGHT */}
        <div className="hidden lg:flex items-center flex-shrink-0">
          <Link
            href="/product-enquiry"
            className="bg-red-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-red-700 transition"
          >
            Request Quote
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="lg:hidden text-2xl"
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
            className="fixed inset-0 bg-white flex flex-col items-center justify-center gap-6 text-lg font-semibold z-40"
          >
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.name}
              </Link>
            ))}

            <Link href="/media">Media & Support</Link>
            <Link href="/careers">Careers</Link>

            <Link
              href="/product-enquiry"
              className="bg-red-600 text-white px-6 py-3 rounded-full"
            >
              Request Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

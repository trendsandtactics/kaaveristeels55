"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const products = [
  {
    name: "TMT Bars",
    image: "/tmt1.png",
    category: "TMT PRODUCTS",
    description:
      "High-strength ribbed TMT bars built for maximum durability, flexibility, and earthquake resistance.",
    href: "/products?category=TMT",
    accentColor: "#ef4444",
    tagline: "Grade Fe-500 & Fe-550D",
  },
  {
    name: "Structural Steels",
    image: "/structural.png",
    category: "STRUCTURAL PRODUCTS",
    description:
      "Premium quality structural steels designed for robust frameworks and enduring performance.",
    href: "/products?category=Structural",
    accentColor: "#eab308",
    tagline: "IS 2062 Certified",
  },
];

export default function HomeProducts() {
  return (
    <section className="relative overflow-hidden w-full bg-slate-950 py-20 lg:py-28">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg2.png"
          alt="Products Background"
          fill
          priority
          className="object-cover object-center pointer-events-none"
        />
        {/* Strong dark overlay for text legibility */}
        <div className="absolute inset-0 bg-black/65" />
        {/* Subtle vignette edges */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)]" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12 xl:px-16 flex flex-col justify-center items-center min-h-screen py-12 lg:py-20 gap-12 lg:gap-16">

        {/* ── Heading Section ─────────────────────────────── */}
        <div className="text-center w-full max-w-5xl mx-auto">
          {/* Frosted pill behind the entire heading block */}
          <div
            className="inline-block rounded-3xl px-10 py-8 mb-2"
            style={{ backgroundColor: "rgba(0,0,0,0.55)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-4 mb-5"
            >
              <div className="w-10 h-[2px] bg-red-500" />
              <span className="uppercase tracking-[0.4em] text-red-400 text-xs md:text-sm font-bold">
                Our Products
              </span>
              <div className="w-10 h-[2px] bg-red-500" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-5 tracking-tight block"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.8)" }}
            >
              Masterpieces of{" "}
              <span className="text-red-500" style={{ textShadow: "0 0 30px rgba(239,68,68,0.6)" }}>
                Steel
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl mx-auto text-base md:text-lg text-white leading-relaxed font-normal"
              style={{ textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}
            >
              Engineered to perfection, our diverse range of steel products forms
              the resilient core of iconic structures worldwide.
            </motion.p>
          </div>
        </div>

        {/* ── Product Cards Grid ───────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-6 xl:gap-8 w-full max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="w-full"
            >
              <Link href={product.href} className="block w-full group">
                <div
                  className="
                    relative overflow-hidden rounded-2xl
                    shadow-2xl border border-white/10
                    min-h-[520px] md:min-h-[580px] lg:min-h-[620px]
                    flex flex-col justify-end
                    transition-all duration-500
                    group-hover:border-white/30
                    group-hover:shadow-[0_0_60px_rgba(0,0,0,0.7)]
                  "
                >
                  {/* Product Image with zoom */}
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="
                      object-cover object-center
                      transition-transform duration-1000 ease-out
                      group-hover:scale-108
                    "
                  />

                  {/* Strong bottom gradient — ensures text always readable */}
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/60 to-transparent" />

                  {/* Subtle color tint at top on hover */}
                  <div
                    className="absolute inset-0 z-10 opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                    style={{
                      background: `radial-gradient(circle at 70% 30%, ${product.accentColor}, transparent 70%)`,
                    }}
                  />

                  {/* ── Card Content ── */}
                  <div className="relative z-20 p-8 md:p-10 w-full flex flex-col items-start text-left">

                    {/* Category badge — always visible, strong contrast */}
                    <span
                      className="
                        inline-block px-3 py-1 rounded-full text-xs font-black tracking-[0.2em] uppercase mb-4
                      "
                      style={{
                        color: "#ffffff",
                        backgroundColor: "rgba(0,0,0,0.75)",
                        border: `1.5px solid ${product.accentColor}`,
                        textShadow: "none",
                      }}
                    >
                      {product.category}
                    </span>

                    {/* Accent line */}
                    <div
                      className="h-[3px] mb-5 rounded-full transition-all duration-500 group-hover:w-24"
                      style={{
                        width: "48px",
                        backgroundColor: product.accentColor,
                        boxShadow: `0 0 12px ${product.accentColor}80`,
                      }}
                    />

                    {/* Product name — white with black drop shadow, always readable */}
                    <h3
                      className="text-white font-black text-4xl md:text-5xl mb-1 tracking-tight leading-none transition-transform duration-500 group-hover:-translate-y-1"
                      style={{
                        textShadow: "0 2px 4px rgba(0,0,0,1), 0 4px 20px rgba(0,0,0,0.9)",
                        WebkitTextStroke: "0.5px rgba(0,0,0,0.3)",
                      }}
                    >
                      {product.name}
                    </h3>

                    {/* Certification tagline */}
                    <span
                      className="text-xs font-bold tracking-widest uppercase mb-5 transition-all duration-500"
                      style={{
                        color: "#ffffff",
                        textShadow: "0 1px 6px rgba(0,0,0,1)",
                        backgroundColor: "rgba(0,0,0,0.4)",
                        padding: "2px 8px",
                        borderRadius: "4px",
                      }}
                    >
                      {product.tagline}
                    </span>

                    {/* Description — dark pill background ensures 100% readability */}
                    <div
                      className="mb-8 max-w-sm rounded-xl p-4 transition-all duration-500 group-hover:-translate-y-1"
                      style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)" }}
                    >
                      <p
                        className="text-white text-base md:text-lg leading-relaxed font-medium"
                        style={{ textShadow: "0 1px 4px rgba(0,0,0,0.8)" }}
                      >
                        {product.description}
                      </p>
                    </div>

                    {/* CTA row */}
                    <div className="flex items-center gap-4 transition-transform duration-500 group-hover:-translate-y-1">
                      <div
                        className="
                          px-7 py-3 rounded-full border border-white/30
                          bg-white/10 backdrop-blur-md
                          text-white font-semibold text-sm tracking-widest uppercase
                          transition-all duration-400
                          group-hover:bg-white group-hover:text-black
                          group-hover:border-white group-hover:shadow-[0_0_24px_rgba(255,255,255,0.3)]
                        "
                      >
                        Explore Product
                      </div>

                      <div
                        className="
                          w-12 h-12 rounded-full
                          bg-white/10 backdrop-blur-md border border-white/30
                          flex items-center justify-center
                          transition-all duration-400
                          group-hover:translate-x-1
                        "
                        style={{
                          ...({}),
                        }}
                      >
                        <ArrowRight
                          className="w-5 h-5 text-white transition-colors duration-400"
                          style={{}}
                        />
                      </div>

                      {/* Arrow circle gets accent on hover via sibling */}
                      <style jsx>{`
                        .group:hover .arrow-circle {
                          background-color: ${product.accentColor};
                          border-color: ${product.accentColor};
                          box-shadow: 0 0 20px ${product.accentColor}80;
                        }
                      `}</style>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

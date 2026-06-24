"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

const products = [
  {
    name: "TMT Bars",
    image: "/tmt1.png",
    category: "TMT PRODUCTS",
    description:
      "High-strength ribbed TMT bars built for maximum durability, flexibility, and earthquake resistance.",
    href: "/products?category=TMT",
    accent: "#ef4444",
    tagline: "Grade Fe-500 & Fe-550D",
    stat: { value: "Fe-550D", label: "Highest Grade" },
  },
  {
    name: "Structural\nSteels",
    image: "/structural.png",
    category: "STRUCTURAL PRODUCTS",
    description:
      "Premium quality structural steels designed for robust frameworks and enduring performance.",
    href: "/products?category=Structural",
    accent: "#f59e0b",
    tagline: "IS 2062 Certified",
    stat: { value: "IS 2062", label: "BIS Certified" },
  },
];

export default function HomeProducts() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* ── Full-bleed background ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg2.png"
          alt="Steel yard"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Deep gradient — darkest at top & bottom, let mid breathe slightly */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />
        {/* Warm amber glow from bottom-left (mimics the sunset in bg) */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_10%_80%,rgba(180,80,0,0.18),transparent)]" />
      </div>

      {/* ── Content wrapper — full height, no tiny centering ── */}
      <div className="relative z-10 flex flex-col min-h-screen w-full">

        {/* ── HEADER ── */}
        <div className="w-full text-center pt-16 pb-10 px-6">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <div className="w-10 h-px bg-red-500" />
            <span className="text-red-400 uppercase tracking-[0.4em] text-xs font-bold">
              Our Products
            </span>
            <div className="w-10 h-px bg-red-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="font-serif font-black text-white leading-none tracking-tight mb-4"
            style={{
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              textShadow: "0 4px 24px rgba(0,0,0,0.7)",
            }}
          >
            Masterpieces of{" "}
            <span
              className="text-red-500"
              style={{ textShadow: "0 0 40px rgba(239,68,68,0.55)" }}
            >
              Steel
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-slate-300 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.9)" }}
          >
            Engineered to perfection — our steel forms the resilient core of
            iconic structures worldwide.
          </motion.p>
        </div>

        {/* ── CARDS — fill remaining height ── */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-0 w-full">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              className="relative"
            >
              <Link href={product.href} className="block w-full h-full group">
                {/* Card fills full column height */}
                <div
                  className="relative overflow-hidden w-full h-full min-h-[70vh]"
                  style={{
                    borderTop: `3px solid ${product.accent}`,
                  }}
                >
                  {/* Product image */}
                  <Image
                    src={product.image}
                    alt={product.name.replace("\n", " ")}
                    fill
                    className="object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  />

                  {/* Gradient: strong dark at bottom, color tint at top */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(170deg, ${product.accent}22 0%, transparent 35%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.97) 100%)`,
                    }}
                  />

                  {/* Hover: extra color wash */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: `radial-gradient(ellipse at 60% 20%, ${product.accent}30, transparent 65%)`,
                    }}
                  />

                  {/* Divider line between cards (desktop) */}
                  {index === 0 && (
                    <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-px bg-white/10 z-20" />
                  )}

                  {/* ── Card text content ── */}
                  <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-12 lg:p-14">

                    {/* Floating stat badge — top right */}
                    <div
                      className="absolute top-8 right-8 text-right opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0"
                    >
                      <div
                        className="inline-block px-4 py-2 rounded-lg"
                        style={{
                          backgroundColor: `${product.accent}22`,
                          border: `1px solid ${product.accent}55`,
                          backdropFilter: "blur(8px)",
                        }}
                      >
                        <p className="text-white font-black text-xl leading-none">{product.stat.value}</p>
                        <p className="text-white/60 text-xs uppercase tracking-widest mt-0.5">{product.stat.label}</p>
                      </div>
                    </div>

                    {/* Category pill */}
                    <div className="mb-5">
                      <span
                        className="inline-block text-white text-[10px] font-black tracking-[0.25em] uppercase px-3 py-1.5 rounded-full"
                        style={{
                          backgroundColor: product.accent,
                          boxShadow: `0 0 16px ${product.accent}80`,
                        }}
                      >
                        {product.category}
                      </span>
                    </div>

                    {/* Accent bar */}
                    <div
                      className="h-[3px] mb-5 rounded-full transition-all duration-500 ease-out group-hover:w-20"
                      style={{
                        width: "40px",
                        backgroundColor: product.accent,
                        boxShadow: `0 0 10px ${product.accent}`,
                      }}
                    />

                    {/* Product name */}
                    <h3
                      className="font-black text-white leading-[0.95] tracking-tight mb-2 transition-transform duration-500 group-hover:-translate-y-1"
                      style={{
                        fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)",
                        textShadow: "0 3px 20px rgba(0,0,0,1)",
                        whiteSpace: "pre-line",
                      }}
                    >
                      {product.name}
                    </h3>

                    {/* Tagline */}
                    <p
                      className="text-xs font-bold uppercase tracking-[0.2em] mb-5 transition-all duration-500 group-hover:-translate-y-1"
                      style={{
                        color: product.accent,
                        textShadow: `0 0 12px ${product.accent}`,
                      }}
                    >
                      {product.tagline}
                    </p>

                    {/* Description — frosted pill */}
                    <div
                      className="rounded-xl p-4 mb-8 max-w-sm transition-all duration-500 group-hover:-translate-y-1"
                      style={{
                        backgroundColor: "rgba(0,0,0,0.65)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <p className="text-white text-sm md:text-base leading-relaxed font-medium">
                        {product.description}
                      </p>
                    </div>

                    {/* CTA row */}
                    <div className="flex items-center gap-4 transition-transform duration-500 group-hover:-translate-y-1">
                      <div
                        className="flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-400"
                        style={{
                          backgroundColor: product.accent,
                          color: "#000",
                          boxShadow: `0 0 0 0 ${product.accent}`,
                        }}
                      >
                        Explore
                        <ChevronRight className="w-4 h-4" />
                      </div>

                      <div
                        className="w-11 h-11 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-400 group-hover:border-white/60 group-hover:bg-white/20 group-hover:translate-x-1"
                      >
                        <ArrowRight className="w-5 h-5 text-white" />
                      </div>
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

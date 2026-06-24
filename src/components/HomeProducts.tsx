"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Layers, Zap } from "lucide-react";

const products = [
  {
    id: "tmt",
    name: "TMT Bars",
    image: "/tmt1.png",
    category: "TMT Products",
    description:
      "High-strength ribbed bars engineered for seismic zones — maximum ductility, weld-ready, corrosion-resistant.",
    href: "/products?category=TMT",
    accent: "#ef4444",
    accentDark: "#7f1d1d",
    tagline: "Fe-500 · Fe-550D · Fe-600",
    icon: Zap,
    specs: ["Seismic Zone IV/V", "BIS Certified", "Rib Pattern Pro"],
    number: "01",
  },
  {
    id: "structural",
    name: "Structural Steels",
    image: "/structural.png",
    category: "Structural Products",
    description:
      "Premium IS 2062 certified sections — angles, channels, I-beams, and plates for frameworks that outlast generations.",
    href: "/products?category=Structural",
    accent: "#f59e0b",
    accentDark: "#78350f",
    tagline: "IS 2062 · E250 · E350",
    icon: Layers,
    specs: ["BIS IS 2062", "E250 to E450", "Full Section Range"],
    number: "02",
  },
];

export default function HomeProducts() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-zinc-950 flex flex-col">

      {/* ─── GLOBAL BG ─── */}
      <div className="absolute inset-0 z-0">
        <Image src="/bg2.png" alt="" fill priority className="object-cover object-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/40 to-zinc-950/90" />
      </div>

      {/* ─── HEADER ─── */}
      <div className="relative z-10 w-full flex flex-col items-center text-center px-6 pt-16 pb-12">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="flex items-center gap-3 mb-5"
        >
          <div className="w-8 h-px bg-red-500/70" />
          <span className="text-red-400 text-[11px] font-black tracking-[0.45em] uppercase">Our Products</span>
          <div className="w-8 h-px bg-red-500/70" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.07 }}
          className="font-serif font-black text-white tracking-tight leading-[1.0] mb-5"
          style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)", textShadow: "0 4px 30px rgba(0,0,0,0.8)" }}
        >
          Masterpieces of{" "}
          <em className="not-italic text-red-500" style={{ textShadow: "0 0 50px rgba(239,68,68,0.6)" }}>
            Steel
          </em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.14 }}
          className="text-zinc-300 text-base md:text-lg max-w-lg leading-relaxed"
        >
          Engineered to perfection — our steel forms the resilient core of iconic structures worldwide.
        </motion.p>
      </div>

      {/* ─── PRODUCT CARDS ─── */}
      <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-2 w-full">
        {products.map((p, i) => {
          const Icon = p.icon;
          const isHovered = hovered === p.id;

          return (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <Link href={p.href} className="block w-full h-full group">
                <div className="relative overflow-hidden w-full min-h-[75vh] lg:min-h-[80vh] flex flex-col justify-end">

                  {/* Product photo */}
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-[1.08]"
                  />

                  {/* Base dark gradient — guarantees text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10" />

                  {/* Accent color atmosphere — top corner */}
                  <div
                    className="absolute inset-0 opacity-40 transition-opacity duration-700 group-hover:opacity-70"
                    style={{
                      background: `radial-gradient(ellipse 70% 55% at 80% 5%, ${p.accent}55, transparent 65%)`,
                    }}
                  />

                  {/* Animated accent glow at bottom on hover */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-700"
                    style={{
                      background: isHovered
                        ? `linear-gradient(90deg, transparent, ${p.accent}, transparent)`
                        : "transparent",
                      boxShadow: isHovered ? `0 0 30px 4px ${p.accent}80` : "none",
                    }}
                  />

                  {/* ─ Top-left number watermark ─ */}
                  <div
                    className="absolute top-6 left-8 font-black text-white/5 select-none pointer-events-none leading-none transition-all duration-700 group-hover:text-white/10"
                    style={{ fontSize: "clamp(6rem, 14vw, 11rem)", lineHeight: 1 }}
                  >
                    {p.number}
                  </div>

                  {/* ─ Top-right: spec chips (visible on hover) ─ */}
                  <div className="absolute top-6 right-6 flex flex-col gap-2 items-end">
                    {p.specs.map((spec, si) => (
                      <motion.div
                        key={spec}
                        initial={{ opacity: 0, x: 16 }}
                        animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: 16 }}
                        transition={{ duration: 0.35, delay: si * 0.07 }}
                        className="text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full"
                        style={{
                          backgroundColor: "rgba(0,0,0,0.65)",
                          backdropFilter: "blur(8px)",
                          border: `1px solid ${p.accent}50`,
                          color: p.accent,
                        }}
                      >
                        {spec}
                      </motion.div>
                    ))}
                  </div>

                  {/* ─ BOTTOM CONTENT ─ */}
                  <div className="relative z-10 p-7 md:p-10 lg:p-12 flex flex-col">

                    {/* Category badge */}
                    <div className="flex items-center gap-3 mb-5">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${p.accent}22`, border: `1px solid ${p.accent}55` }}
                      >
                        <Icon className="w-4 h-4" style={{ color: p.accent }} />
                      </div>
                      <span
                        className="text-[11px] font-black tracking-[0.3em] uppercase"
                        style={{ color: p.accent }}
                      >
                        {p.category}
                      </span>
                    </div>

                    {/* Accent rule */}
                    <div
                      className="h-[3px] rounded-full mb-5 transition-all duration-500 ease-out group-hover:w-28"
                      style={{
                        width: "44px",
                        background: `linear-gradient(90deg, ${p.accent}, ${p.accent}44)`,
                        boxShadow: `0 0 14px ${p.accent}99`,
                      }}
                    />

                    {/* Product name */}
                    <h3
                      className="font-black text-white leading-[0.92] tracking-tight mb-3 transition-transform duration-500 group-hover:-translate-y-1"
                      style={{
                        fontSize: "clamp(2.5rem, 5vw, 4rem)",
                        textShadow: "0 3px 24px rgba(0,0,0,1), 0 0 60px rgba(0,0,0,0.8)",
                      }}
                    >
                      {p.name}
                    </h3>

                    {/* Grade tagline */}
                    <p
                      className="text-[11px] font-bold tracking-[0.25em] uppercase mb-5 transition-all duration-500 group-hover:-translate-y-1"
                      style={{ color: p.accent, textShadow: `0 0 20px ${p.accent}` }}
                    >
                      {p.tagline}
                    </p>

                    {/* Description box */}
                    <div
                      className="rounded-2xl p-5 mb-7 max-w-xs transition-all duration-500 group-hover:-translate-y-1"
                      style={{
                        background: "rgba(0,0,0,0.6)",
                        backdropFilter: "blur(14px)",
                        border: "1px solid rgba(255,255,255,0.07)",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                      }}
                    >
                      <p className="text-white/90 text-sm md:text-base leading-relaxed font-medium">
                        {p.description}
                      </p>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-3 transition-transform duration-500 group-hover:-translate-y-1">
                      {/* Primary pill */}
                      <div
                        className="flex items-center gap-2 pl-6 pr-5 py-3.5 rounded-full font-black text-sm tracking-widest uppercase transition-all duration-400"
                        style={{
                          background: isHovered
                            ? p.accent
                            : "rgba(255,255,255,0.08)",
                          color: isHovered ? "#000" : "#fff",
                          border: `1.5px solid ${isHovered ? p.accent : "rgba(255,255,255,0.2)"}`,
                          backdropFilter: "blur(8px)",
                          boxShadow: isHovered ? `0 0 28px ${p.accent}80` : "none",
                          transition: "all 0.4s ease",
                        }}
                      >
                        Explore
                        <ArrowUpRight
                          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          style={{ color: isHovered ? "#000" : "#fff" }}
                        />
                      </div>

                      {/* Divider dot */}
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20" />

                      {/* Ghost label */}
                      <span className="text-white/40 text-xs uppercase tracking-widest font-semibold transition-colors duration-400 group-hover:text-white/70">
                        View All
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* ─── BOTTOM STRIP ─── */}
      <div className="relative z-10 w-full border-t border-white/5 bg-black/60 backdrop-blur-md px-8 py-4 flex items-center justify-between gap-4 flex-wrap">
        <p className="text-white/30 text-xs uppercase tracking-widest font-semibold">
          Kaveri Steels — Trusted Since 1985
        </p>
        <div className="flex items-center gap-6">
          {["BIS Certified", "ISO 9001:2015", "100% Traceable"].map((badge) => (
            <span key={badge} className="text-white/25 text-[10px] uppercase tracking-widest font-bold">
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

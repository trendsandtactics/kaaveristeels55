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

      {/* BACKGROUND — Brightened & Gradient Removed */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg2.png"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-70"
          style={{ filter: "grayscale(10%)" }}
        />
      </div>

      {/* HEADER */}
      <div className="relative z-10 w-full flex flex-col items-center text-center px-6 pt-10 pb-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="flex items-center gap-4 mb-5"
        >
<div className="w-10 h-px bg-[#6D071A]" />
<div className="w-10 h-px bg-[#6D071A]" />
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
          <em className="not-italic text-white" style={{ textShadow: "0 4px 30px rgba(0,0,0,.8)" }}>
            Steel
          </em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.14 }}
          className="text-zinc-300 text-lg md:text-xl max-w-lg leading-relaxed"
        >
          Engineered to perfection — our steel forms the resilient core of iconic structures worldwide.
        </motion.p>
      </div>

      {/* CARDS ROW */}
      <div className="relative z-10 flex-1 w-full max-w-[1536px] mx-auto px-6 md:px-12 lg:px-12 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 h-full">
          {products.map((p, i) => {
            const isHovered = hovered === p.id;

            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] }}
                onMouseEnter={() => setHovered(p.id)}
                onMouseLeave={() => setHovered(null)}
                className="h-full"
              >
                <Link href={p.href} className="block w-full h-full group">
                  <div
                    className="relative overflow-hidden rounded-2xl w-full min-h-[68vh] lg:min-h-[65vh] flex flex-col justify-end bg-zinc-900/50"
                    style={{
                      border: `1px solid rgba(255,255,255,0.08)`,
                      boxShadow: isHovered
                        ? `0 0 0 1.5px ${p.accent}55, 0 32px 80px rgba(0,0,0,0.7)`
                        : "0 16px 48px rgba(0,0,0,0.5)",
                      transition: "box-shadow 0.5s ease",
                    }}
                  >
                    {/* Product photo */}
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-[1.07]"
                    />

                    {/* Dark scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

                    {/* Accent glow top */}
                    <div
                      className="absolute top-0 left-0 right-0 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      style={{
                        background: `linear-gradient(180deg, ${p.accent}22 0%, transparent 100%)`,
                      }}
                    />

                    {/* Glowing bottom edge */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-px transition-all duration-700"
                      style={{
                        background: isHovered
                          ? `linear-gradient(90deg, transparent 5%, ${p.accent} 50%, transparent 95%)`
                          : "transparent",
                        boxShadow: isHovered ? `0 0 24px 3px ${p.accent}80` : "none",
                      }}
                    />

                    {/* Spec chips */}
                    

                    {/* Bottom content */}
                    <div className="relative z-10 p-7 md:p-10 flex flex-col">

                      {/* Accent rule */}
                      <div
                        className="h-[3px] rounded-full mb-4 transition-all duration-500 ease-out group-hover:w-24"
                        style={{
                          width: "40px",
                          background: `linear-gradient(90deg, ${p.accent}, ${p.accent}33)`,
                          boxShadow: `0 0 12px ${p.accent}88`,
                        }}
                      />

                      {/* Name */}
                      <h3
                        className="font-black text-white leading-[0.93] tracking-tight mb-4 transition-transform duration-500 group-hover:-translate-y-1"
                        style={{
                          fontSize: "clamp(2rem, 3.5vw, 3rem)",
                          textShadow: "0 3px 20px rgba(0,0,0,1)",
                        }}
                      >
                        {p.name}
                      </h3>

                      {/* Description - Size slightly increased */}
                      <div
                        className="rounded-xl p-4 mb-6 max-w-[340px] transition-all duration-500 group-hover:-translate-y-1"
                        style={{
                          background: "rgba(0,0,0,0.65)",
                          backdropFilter: "blur(12px)",
                          border: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        <p className="text-white/90 text-lg md:text-xl leading-relaxed font-medium">{p.description}</p>
                      </div>

                      {/* CTA - View All removed */}
                      <div className="flex items-center gap-3 transition-transform duration-500 group-hover:-translate-y-1">
                        <div
                          className="flex items-center gap-2 pl-10 pr-8 py-5 rounded-full font-black text-sm tracking-widest uppercase transition-all duration-400"
                          style={{
                            background: isHovered ? p.accent : "rgba(255,255,255,0.07)",
                            color: isHovered ? "#000" : "#fff",
                            border: `1.5px solid ${isHovered ? p.accent : "rgba(255,255,255,0.18)"}`,
                            backdropFilter: "blur(8px)",
                            boxShadow: isHovered ? `0 0 24px ${p.accent}70` : "none",
                            transition: "all 0.4s ease",
                          }}
                        >
                          Explore
                          <ArrowUpRight className="w-3.5 h-3.5" style={{ color: isHovered ? "#000" : "#fff" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* BOTTOM STRIP */}

    </section>
  );
}

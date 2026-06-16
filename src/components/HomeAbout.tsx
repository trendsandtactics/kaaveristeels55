"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Factory, ShieldCheck, HardHat, ArrowRight, Download } from "lucide-react";

export default function HomeAbout() {
  return (
    <section className="relative overflow-hidden bg-[#0f1215]">

      {/* Subtle steel-grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.04]">
        <Image
          src="/image/aboutbackground.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* Structural accent line — top edge */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c8923a] to-transparent" />

      <div className="relative z-10">
        <div className="grid lg:grid-cols-[48%_52%] min-h-screen">

          {/* ── LEFT: IMAGE PANEL ── */}
          <div className="relative h-[420px] lg:h-screen w-full overflow-hidden">
            <Image
              src="/image/about1.png"
              alt="Kaaveri Steel manufacturing facility"
              fill
              priority
              className="object-cover"
            />

            {/* Dark gradient wash — bottom-heavy for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1215]/90 via-[#0f1215]/20 to-[#0f1215]/40" />

            {/* Left edge rule */}
            <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-[#c8923a]" />

            {/* Eyebrow — top left */}
            <div className="absolute top-10 left-10 lg:top-14 lg:left-14 z-20">
              <span className="block text-[#c8923a] text-[10px] tracking-[6px] font-semibold uppercase mb-2">
                Est. 1994
              </span>
              <span className="block text-white/60 text-[11px] tracking-[3px] uppercase">
                Making India Stronger
              </span>
            </div>

            {/* Bottom stat badge */}
            <div className="absolute bottom-10 left-10 lg:bottom-14 lg:left-14 z-20">
              <div className="flex items-end gap-3">
                <span className="text-white text-5xl lg:text-6xl font-black leading-none tracking-tight">
                  30+
                </span>
                <div className="mb-1">
                  <span className="block text-[#c8923a] text-xs tracking-[3px] uppercase font-semibold">
                    Years of
                  </span>
                  <span className="block text-white/70 text-xs tracking-[3px] uppercase">
                    Excellence
                  </span>
                </div>
              </div>
              <div className="w-full h-[1px] bg-white/10 mt-5" />
            </div>
          </div>

          {/* ── RIGHT: CONTENT PANEL ── */}
          <div className="relative flex items-center py-16 lg:py-0 border-l border-white/[0.06]">

            <div className="relative z-10 px-8 sm:px-14 lg:px-16 xl:px-20 w-full max-w-[780px]">

              {/* Section label */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-[1px] bg-[#c8923a]" />
                <span className="text-[#c8923a] text-[10px] tracking-[5px] font-bold uppercase">
                  About Kaaveri
                </span>
              </div>

              {/* Headline */}
              <h2 className="font-black text-white leading-[0.92] mb-3"
                  style={{ fontSize: "clamp(2.6rem, 5vw, 4.2rem)", fontFamily: "Georgia, 'Times New Roman', serif" }}>
                Strength That
              </h2>
              <h2 className="font-black leading-[0.92]"
                  style={{
                    fontSize: "clamp(2.6rem, 5vw, 4.2rem)",
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    color: "#c8923a",
                    marginBottom: "2.5rem",
                  }}>
                Shapes The Future
              </h2>

              {/* Structural divider */}
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-[1px] bg-[#c8923a]" />
                <div className="w-2 h-2 rotate-45 border border-[#c8923a]/60" />
                <div className="flex-1 h-[1px] bg-white/[0.07]" />
              </div>

              {/* Body copy */}
              <div className="space-y-5 text-[#9aa3ae] text-base leading-[1.85]">
                <p>
                  At KAAVERI, we are passionate about steel and dedicated to excellence.
                  As a leading manufacturer of TMT bars and structural steel products, we
                  supply the construction industry with materials engineered for longevity.
                </p>
                <p>
                  Our state-of-the-art manufacturing processes and rigorous quality control
                  ensure every product meets the highest global standards — empowering
                  builders to raise structures that stand the test of time.
                </p>
              </div>

              {/* Feature grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 mt-12 border border-white/[0.07]">
                {[
                  { Icon: Factory, label: "Premium TMT Bars", sub: "High strength & durability" },
                  { Icon: ShieldCheck, label: "ISI Certified", sub: "Tested & trusted" },
                  { Icon: HardHat, label: "Trusted Builders", sub: "Nationwide partnerships" },
                ].map(({ Icon, label, sub }, i) => (
                  <div
                    key={label}
                    className={`group p-6 lg:p-7 transition-colors duration-300 hover:bg-white/[0.03]
                      ${i < 2 ? "sm:border-r border-b sm:border-b-0 border-white/[0.07]" : "border-b sm:border-b-0"}`}
                  >
                    <div className="w-10 h-10 flex items-center justify-center mb-4"
                         style={{ border: "1px solid rgba(200,146,58,0.3)" }}>
                      <Icon size={18} className="text-[#c8923a]" />
                    </div>
                    <h4 className="text-white font-bold text-sm tracking-wide mb-1">{label}</h4>
                    <p className="text-[#9aa3ae] text-xs tracking-wide">{sub}</p>
                  </div>
                ))}
              </div>

              {/* CTA row */}
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Link href="/about-us">
                  <button className="group w-full sm:w-auto h-13 px-8 py-4 text-sm font-bold tracking-[2px] uppercase text-[#0f1215] flex items-center justify-center gap-3 transition-all duration-300"
                          style={{ background: "#c8923a" }}
                          onMouseEnter={e => (e.currentTarget.style.background = "#d9a84e")}
                          onMouseLeave={e => (e.currentTarget.style.background = "#c8923a")}>
                    Explore More
                    <ArrowRight size={16} />
                  </button>
                </Link>

                <button className="w-full sm:w-auto h-13 px-8 py-4 text-sm font-semibold tracking-[1px] uppercase text-[#9aa3ae] flex items-center justify-center gap-3 border border-white/[0.12] transition-all duration-300 hover:border-[#c8923a]/40 hover:text-[#c8923a]">
                  <Download size={16} />
                  Download Brochure
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Structural accent line — bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/[0.06]" />

    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Factory, ShieldCheck, Users, ArrowRight, Download, Award } from "lucide-react";

export default function HomeAbout() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-screen">

        {/* ── LEFT PANEL — Deep navy with image & stats ── */}
        <div className="relative bg-[#0d1b2a] flex flex-col justify-between p-10 sm:p-14 lg:p-16 min-h-[560px] lg:min-h-screen">

          {/* Top pill */}
          <div>
            <span className="inline-block bg-[#c1272d] text-white text-[10px] font-bold tracking-[3px] uppercase px-4 py-[6px] mb-10">
              Since 1994
            </span>

            {/* Image */}
            <div className="relative w-full aspect-[4/3] overflow-hidden mb-10">
              <Image
                src="/image/about1.png"
                alt="Kaaveri Steel manufacturing facility"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#0d1b2a]/20" />
            </div>

            {/* Trust badges */}
            <div className="flex flex-col gap-3">
              {[
                { Icon: Award, title: "ISI Certified", sub: "Tested to global standards" },
                { Icon: Users, title: "Pan-India Distribution", sub: "Nationwide delivery network" },
              ].map(({ Icon, title, sub }) => (
                <div
                  key={title}
                  className="flex items-center gap-4 border border-white/10 bg-white/[0.04] px-5 py-4"
                >
                  <Icon size={20} className="text-[#c1272d] shrink-0" />
                  <div>
                    <p className="text-white text-sm font-semibold leading-tight">{title}</p>
                    <p className="text-white/50 text-xs mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom stats */}
          <div className="mt-12">
            <div className="w-full h-px bg-white/10 mb-8" />
            <div className="flex gap-10 items-end">
              <div>
                <p className="text-white font-black leading-none" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(3rem, 6vw, 4rem)" }}>
                  30+
                </p>
                <p className="text-white/45 text-[10px] tracking-[3px] uppercase mt-2">Years of Excellence</p>
              </div>
              <div>
                <p className="text-[#c1272d] font-black leading-none" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>
                  500+
                </p>
                <p className="text-white/45 text-[10px] tracking-[3px] uppercase mt-2">Projects Delivered</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT PANEL — White content ── */}
        <div className="flex items-center py-16 lg:py-0">
          <div className="px-8 sm:px-14 lg:px-16 xl:px-20 w-full">

            {/* Section tag */}
            <div className="inline-flex items-center gap-3 bg-[#f0f4ff] px-4 py-2 mb-8">
              <span className="w-5 h-[2px] bg-[#c1272d]" />
              <span className="text-[#1a3a8f] text-[11px] font-bold tracking-[3px] uppercase">
                About Kaaveri
              </span>
            </div>

            {/* Headline */}
            <h2
              className="text-[#0d1b2a] font-black leading-[1.05] mb-2"
              style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)" }}
            >
              Built On Steel.
            </h2>
            <h2
              className="font-black leading-[1.05]"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)",
                color: "#c1272d",
                marginBottom: "2rem",
              }}
            >
              Trusted By India.
            </h2>

            {/* Rule */}
            <div className="w-14 h-[3px] bg-[#c1272d] mb-8" />

            {/* Body */}
            <div className="space-y-4 text-[#4a5568] text-[15px] leading-[1.85] mb-10">
              <p>
                At KAAVERI, we are passionate about steel and dedicated to excellence.
                As a leading manufacturer of TMT bars and structural steel products, we
                supply the construction industry with materials engineered for longevity.
              </p>
              <p>
                Our rigorous quality control ensures every product meets the highest global
                standards — empowering builders to raise structures that stand the test of time.
              </p>
            </div>

            {/* Feature grid — flush cell borders */}
            <div className="grid grid-cols-3 border border-[#e8ecf0] divide-x divide-[#e8ecf0] mb-10">
              {[
                { Icon: Factory, label: "Premium TMT Bars", sub: "High strength & durability" },
                { Icon: ShieldCheck, label: "ISI Certified", sub: "Tested & trusted" },
                { Icon: Users, label: "Trusted Partners", sub: "Nationwide network" },
              ].map(({ Icon, label, sub }) => (
                <div key={label} className="p-5 lg:p-6">
                  <div className="w-9 h-9 bg-[#fff0f0] flex items-center justify-center mb-3">
                    <Icon size={18} className="text-[#c1272d]" />
                  </div>
                  <p className="text-[#0d1b2a] text-sm font-semibold leading-tight mb-1">{label}</p>
                  <p className="text-[#7a8899] text-xs">{sub}</p>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/about-us">
                <button className="group w-full sm:w-auto bg-[#c1272d] hover:bg-[#a81f24] text-white text-[13px] font-bold tracking-[1.5px] uppercase px-8 py-[15px] flex items-center justify-center gap-3 transition-colors duration-200">
                  Explore More
                  <ArrowRight size={16} />
                </button>
              </Link>

              <button className="w-full sm:w-auto border-[1.5px] border-[#d0d8e4] hover:border-[#0d1b2a] text-[#0d1b2a] text-[13px] font-semibold tracking-[1px] uppercase px-8 py-[15px] flex items-center justify-center gap-3 transition-colors duration-200">
                <Download size={15} />
                Download Brochure
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  FileText,
  Award,
  ShieldCheck,
  Users,
  HardHat,
} from "lucide-react";

const dynamicBadges = [
  {
    title: "PREMIUM TMT BARS",
    desc: "Engineered with advanced thermo-mechanical processing for superior high-grade tensile safety and enhanced seismic resilience.",
    icon: ShieldCheck,
  },
  {
    title: "BIS CERTIFIED QUALITY",
    desc: "Rigorously evaluated and certified to absolute industrial perfection under Bureau of Indian Standards benchmarking.",
    icon: Award,
  },
  {
    title: "STRUCTURAL INTEGRITY",
    desc: "Designed to handle extreme load distribution across large-span frameworks while ensuring long-term reliability.",
    icon: HardHat,
  },
  {
    title: "TRUSTED NATIONWIDE",
    desc: "Supporting landmark infrastructure and industrial developments across India with dependable steel solutions.",
    icon: Users,
  },
];

export default function HomeAbout() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-[35rem] h-[35rem] bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="grid lg:grid-cols-[48%_52%] min-h-screen">
        {/* LEFT IMAGE */}
        <div className="relative min-h-[600px] lg:min-h-screen overflow-hidden">
          <Image
            src="/product.png"
            alt="Kaaveri Steel Manufacturing Facility"
            fill
            priority
            className="object-cover object-center"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-transparent" />

          {/* Experience Badge */}
          <div className="absolute top-8 left-8 bg-red-600 text-white px-6 py-5 shadow-2xl z-10">
            <div className="text-4xl font-black leading-none">30+</div>
            <div className="text-[10px] uppercase tracking-[0.2em] mt-2 text-red-100">
              Years of
              <br />
              Excellence
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex items-center bg-white px-8 sm:px-12 lg:px-16 xl:px-20 py-16 lg:py-20">
          <div className="w-full max-w-5xl space-y-10">
            {/* Section Header */}
            <div>
              <span className="text-red-600 font-extrabold uppercase tracking-[0.35em] text-sm">
                About Kaaveri Steels
              </span>

              <div className="w-16 h-1 bg-red-600 mt-3" />
            </div>

            {/* Main Heading */}
            <div>
              <h2 className="font-serif font-black text-5xl md:text-6xl xl:text-7xl text-slate-900 leading-[1.02] tracking-[-0.04em]">
                BUILT ON
                <br />
                INDUSTRIAL STEEL.
                <br />
                <span className="text-red-600">
                  TRUSTED BY BUILDERS
                  <br />
                  ACROSS INDIA.
                </span>
              </h2>
            </div>

            {/* Description */}
            <div>
              <p className="text-slate-600 text-lg md:text-xl leading-9 max-w-4xl">
                At{" "}
                <span className="text-red-600 font-extrabold">
                  KAAVERI STEELS
                </span>
                , we are committed to engineering excellence and structural
                reliability. As a trusted manufacturer of premium TMT bars and
                structural steel products, we support modern infrastructure,
                industrial projects, commercial developments, and residential
                construction across India with precision-crafted steel solutions
                built for generations.
              </p>
            </div>

            {/* Quote */}
            <div className="border-l-4 border-red-600 pl-8 py-2 max-w-4xl">
              <p className="italic text-slate-700 text-xl md:text-2xl leading-relaxed">
                "Every steel product leaving our facility undergoes rigorous
                quality inspection to ensure unmatched strength, consistency,
                and long-term structural performance."
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {dynamicBadges.map((badge, idx) => {
                const Icon = badge.icon;

                return (
                  <div
                    key={idx}
                    className="group border border-slate-200 rounded-xl p-8 bg-white hover:border-red-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-red-600" />
                    </div>

                    <h4 className="text-base font-black uppercase tracking-wide text-slate-900 mb-3">
                      {badge.title}
                    </h4>

                    <p className="text-sm md:text-base text-slate-600 leading-7">
                      {badge.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-5 pt-2">
              <Link
                href="/products"
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Products
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/brochure.pdf"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 border border-slate-300 hover:border-slate-400 hover:bg-slate-50 text-slate-800 font-bold uppercase tracking-wider text-sm transition-all duration-300"
              >
                <FileText className="w-4 h-4" />
                Download Brochure
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

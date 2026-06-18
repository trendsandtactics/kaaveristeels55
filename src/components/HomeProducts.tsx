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
    desc: "Rigorously evaluated and certified to absolute industrial perfection under standard Bureau of Indian Standards benchmarking.",
    icon: Award,
  },
  {
    title: "STRUCTURAL INTEGRITY",
    desc: "Formulated to handle extreme load distribution uniformly across large-span frameworks, ensuring long-term structural reliability.",
    icon: HardHat,
  },
  {
    title: "TRUSTED NATIONWIDE",
    desc: "Forging infrastructure networks across the country with materials perfectly optimized for major commercial mega-structures.",
    icon: Users,
  },
];

export default function HomeAbout() {
  return (
    <section className="w-full min-h-screen bg-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="grid lg:grid-cols-12 min-h-screen">
        {/* LEFT IMAGE */}
        <div className="relative lg:col-span-4 min-h-[600px] lg:min-h-screen overflow-hidden">
          <Image
            src="/product.png"
            alt="Kaveri Steel Plant Production Facility"
            fill
            priority
            className="object-cover"
          />

          {/* Experience Badge */}
          <div className="absolute top-10 left-10 bg-red-600 text-white px-8 py-6 shadow-2xl z-10">
            <span className="block text-5xl font-black leading-none">
              30+
            </span>
            <span className="block text-xs uppercase tracking-[0.25em] mt-2 text-red-100">
              Years of Excellence
            </span>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="lg:col-span-8 flex items-center bg-white px-8 md:px-14 xl:px-20 py-20">
          <div className="max-w-6xl w-full space-y-12">
            {/* Heading */}
            <div>
              <span className="uppercase tracking-[0.35em] text-red-600 text-base font-black block mb-4">
                ABOUT KAAVERI STEELS
              </span>

              <div className="w-24 h-1 bg-red-600 mb-8" />

              <h2 className="font-black text-5xl md:text-6xl xl:text-7xl leading-[1.05] tracking-tight text-slate-900">
                BUILT ON
                <br />
                INDUSTRIAL STEEL.
                <br />
                <span className="text-red-600">
                  TRUSTED BY BUILDERS ACROSS INDIA.
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-5xl">
              At{" "}
              <span className="font-extrabold text-red-600">KAAVERI</span>, we
              are deeply passionate about foundational structural integrity and
              committed to manufacturing excellence. As a leading manufacturer
              of premium TMT bars and structural steel products, we proudly
              support modern infrastructure developments across the nation with
              sustainable, precision-engineered materials built for generations.
            </p>

            {/* Quote */}
            <div className="border-l-4 border-red-600 pl-8 py-2">
              <p className="italic text-slate-700 text-xl md:text-2xl leading-relaxed">
                "Our rigorous quality control systems ensure that every product
                leaving our facility meets the highest industry standards,
                empowering engineers and builders to create structures that
                stand strong for decades."
              </p>
            </div>

            {/* BIG CARDS */}
            <div className="grid md:grid-cols-2 gap-8">
              {dynamicBadges.map((badge, idx) => {
                const Icon = badge.icon;

                return (
                  <div
                    key={idx}
                    className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-10 min-h-[260px] shadow-lg hover:shadow-2xl hover:border-red-500 transition-all duration-300"
                  >
                    <div className="mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center">
                        <Icon className="w-9 h-9 text-red-600" />
                      </div>
                    </div>

                    <h4 className="text-xl font-black uppercase tracking-wide text-slate-900 mb-4">
                      {badge.title}
                    </h4>

                    <p className="text-base lg:text-lg text-slate-600 leading-relaxed">
                      {badge.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 pt-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-10 py-5 text-sm font-bold uppercase tracking-[0.15em] transition-all duration-300 shadow-lg"
              >
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="/brochure.pdf"
                className="inline-flex items-center gap-3 border border-slate-300 hover:border-slate-400 text-slate-700 px-10 py-5 text-sm font-bold uppercase tracking-[0.15em] transition-all duration-300"
              >
                <FileText className="w-5 h-5" />
                Download Brochure
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

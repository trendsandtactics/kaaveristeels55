"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, Award, ShieldCheck, Users } from "lucide-react";

const dynamicBadges = [
  { 
    title: "PREMIUM TMT BARS", 
    desc: "Engineered with advanced thermo-mechanical treatment for superior high-grade construction safety and earthquake resistance.",
    icon: ShieldCheck 
  },
  { 
    title: "BIS CERTIFIED", 
    desc: "Rigorously evaluated and completely certified to perfection under absolute Bureau of Indian Standards benchmarking.",
    icon: Award 
  },
  { 
    title: "TRUSTED PARTNERS", 
    desc: "Forging infrastructure networks nationwide with reliable materials optimized for major commercial mega-structures.",
    icon: Users 
  },
];

const stats = [
  { label: "30+", sub: "YEARS OF INDUSTRIAL EXCELLENCE" },
  { label: "500+", sub: "HAPPY ENTERPRISE CUSTOMERS" },
  { label: "1 Mn+", sub: "TONS ANNUAL PRODUCTION CAPACITY" },
  { label: "ISI", sub: "100% CERTIFIED PRODUCTS" },
];

export default function HomeAbout() {
  return (
    <section className="relative w-full overflow-hidden bg-[#fafafa] min-h-screen flex flex-col justify-between">
      {/* Upper Main Split Layout Section */}
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-12 w-full relative">
        
        {/* Left Side: Massive Factory Image */}
        <div className="relative lg:col-span-5 xl:col-span-5 h-[450px] lg:h-auto w-full overflow-hidden shadow-xl">
          <Image
            src="/product.png" 
            alt="Kaveri Steel Plant"
            fill
            priority
            className="object-cover object-center scale-102 transition-transform duration-700"
          />
          {/* Top-left Red Badge Accent */}
          <div className="absolute top-8 left-8 bg-gradient-to-r from-red-600 to-red-700 text-white text-xs font-black p-5 uppercase tracking-widest text-center shadow-2xl rounded-sm backdrop-blur-sm border border-white/10">
            <span className="text-2xl block mb-0.5">30+</span>
            <span className="text-[10px] font-bold text-red-100 block tracking-wider leading-tight">Years of<br/>Excellence</span>
          </div>

          {/* Right angled red border accent line */}
          <div className="hidden lg:block absolute top-0 right-0 h-full w-[4px] bg-gradient-to-b from-red-500 via-red-600 to-red-700" />
        </div>

        {/* Right Side: Fully Maximized Clean White Content Area */}
        <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center px-6 md:px-16 lg:px-20 xl:px-24 py-16 lg:py-24 bg-white relative">
          
          {/* Subtle geometric background decoration */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-50 rounded-bl-full -z-10 opacity-70 pointer-events-none" />

          {/* Expanded max-width wrapper to occupy the full layout width */}
          <div className="max-w-4xl w-full mx-auto space-y-10">
            {/* Small Top Heading Accent */}
            <div className="flex items-center gap-3">
              <span className="uppercase tracking-[0.3em] text-red-600 text-sm font-black">
                ABOUT KAAVERI
              </span>
              <div className="w-16 h-[2px] bg-red-600 rounded-full" />
            </div>

            {/* Main Typography Header Block (Increased Size) */}
            <h2 className="font-sans font-black text-5xl md:text-6xl xl:text-7xl text-slate-900 tracking-tight leading-[1.1]">
              BUILT ON STEEL.<br />
              <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">TRUSTED BY INDIA.</span>
            </h2>

            {/* Expanded Description Text Block (Increased Size) */}
            <p className="text-slate-700 font-normal leading-relaxed text-xl md:text-2xl tracking-wide">
              At <span className="text-red-600 font-extrabold">KAAVERI</span>, we are deeply passionate about structural integrity and committed to manufacturing perfection. As an industry-leading manufacturer of premium TMT bars and heavy structural steel products, we proudly supply modern infrastructural developments across the nation with materials explicitly engineered for multigenerational longevity.
            </p>

            {/* Blockquote Segment (Increased Size) */}
            <div className="relative border-l-4 border-red-600 pl-6 py-3 my-4 bg-gradient-to-r from-slate-50 to-transparent rounded-r-lg">
              <p className="italic text-slate-800 text-lg md:text-xl font-medium leading-relaxed">
                {"\"Our rigorous, multi-stage quality control checks ensure that every item leaving our plant meets the absolute highest global standards — empowering modern builders to confidently raise industrial and residential structures that stand the test of time.\""}
              </p>
            </div>

            {/* Grid of Inner Feature Badges (Expanded grid gap and structural sizing) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              {dynamicBadges.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <div 
                    key={idx} 
                    className="group border border-slate-200 rounded-xl p-6 flex flex-col justify-between transition-all duration-300 bg-slate-50/50 hover:bg-white hover:border-red-500 hover:shadow-lg"
                  >
                    <div className="w-12 h-12 rounded-lg bg-red-50 text-red-600 flex items-center justify-center mb-5 transition-colors group-hover:bg-red-600 group-hover:text-white">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-slate-900 tracking-wider mb-2 uppercase group-hover:text-red-600 transition-colors">
                        {badge.title}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {badge.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Interaction Action Group */}
            <div className="flex flex-wrap items-center gap-5 pt-6">
              <Link 
                href="/products" 
                className="px-10 py-5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-xs tracking-widest rounded-lg transition-all shadow-md hover:shadow-xl flex items-center gap-2 uppercase"
              >
                Explore Products <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/brochure.pdf" 
                className="px-10 py-5 border-2 border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-50 hover:border-slate-300 font-bold text-xs tracking-widest rounded-lg transition-all flex items-center gap-2 uppercase"
              >
                <FileText className="w-4 h-4 text-slate-400" /> Download Brochure
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Lower Banner: Bold Dark Blue/Black Footer Strip */}
      <div className="w-full bg-[#071424] text-white border-t border-white/5 shadow-[0_-10px_30px_rgba(0,0,0,0.15)]">
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/10 text-center lg:text-left">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-8 md:p-10 flex flex-col justify-center lg:pl-16 hover:bg-white/5 transition-colors duration-300">
              <span className="text-4xl md:text-5xl font-black text-white tracking-tight mb-2 bg-gradient-to-b from-white to-slate-200 bg-clip-text">
                {stat.label}
              </span>
              <span className="text-[11px] md:text-xs font-bold text-slate-400 tracking-widest uppercase block mt-1">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

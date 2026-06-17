"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, Award, ShieldCheck, Users, HardHat } from "lucide-react";

const dynamicBadges = [
  { 
    title: "PREMIUM TMT BARS", 
    desc: "Engineered with advanced thermo-mechanical treatment for superior high-grade construction safety, exceptional tensile strength, and enhanced seismic earthquake resilience across heavy structural configurations.",
    icon: ShieldCheck 
  },
  { 
    title: "BIS CERTIFIED QUALITY", 
    desc: "Rigorously evaluated, sampled, and completely certified to absolute industrial perfection under standard Bureau of Indian Standards (BIS) strict benchmarking and regulatory compliance protocols.",
    icon: Award 
  },
  { 
    title: "STRUCTURAL INTEGRITY", 
    desc: "Formulated to handle high-stress distribution uniformly across large-span industrial frames, ensuring long-term structural reliability, fatigue resistance, and load-bearing safety parameters.",
    icon: HardHat 
  },
  { 
    title: "TRUSTED NATIONWIDE PARTNERS", 
    desc: "Forging infrastructure networks across the country with premium-grade materials perfectly optimized for major commercial mega-structures, massive industrial corridors, and high-density residential complexes.",
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
    <section className="w-full bg-white min-h-screen flex flex-col justify-between select-none p-0 m-0 box-border">
      
      {/* Upper Section: Proportional Asymmetric Grid For Absolute Max-Width Utilization */}
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-12 w-full">
        
        {/* Left Side: Immersive Imagery Block (Occupies 5 Columns, forced full height framework) */}
        <div className="relative lg:col-span-5 w-full h-[500px] lg:h-auto overflow-hidden">
          <Image
            src="/product.png" 
            alt="Kaveri Steel Plant Production Facility"
            fill
            priority
            className="object-cover object-center w-full h-full"
          />
          
          {/* Industrial Red Overlay Badge */}
          <div className="absolute top-12 left-12 bg-gradient-to-br from-red-600 to-red-700 text-white p-6 uppercase text-center shadow-2xl tracking-wider rounded-sm border border-white/10 z-10">
            <span className="text-4xl font-black block mb-1 tracking-tight">30+</span>
            <span className="text-[11px] font-black text-red-100 block leading-tight tracking-widest">Years of<br/>Excellence</span>
          </div>

          <div className="hidden lg:block absolute top-0 right-0 h-full w-[1px] bg-slate-200" />
        </div>

        {/* Right Side: Fully Restructured Wide Copy Area (Occupies 7 Columns with Maximized Font Sizes) */}
        <div className="lg:col-span-7 flex flex-col justify-center bg-white px-8 sm:px-14 md:px-20 lg:px-24 xl:px-32 py-20 lg:py-16 w-full max-w-none">
          <div className="w-full max-w-none space-y-12">
            
            {/* Context Label */}
            <div className="flex items-center gap-4">
              <span className="uppercase tracking-[0.4em] text-red-600 text-sm font-black">
                ABOUT KAAVERI STEELS
              </span>
              <div className="w-24 h-[3px] bg-red-600 rounded-full" />
            </div>

            {/* Massive Typography Header Block */}
            <div className="space-y-8 w-full max-w-none">
              <h2 className="font-sans font-black text-5xl sm:text-6xl xl:text-7xl 2xl:text-8xl text-slate-900 tracking-tight leading-[1.08] w-full">
                BUILT ON INDUSTRIAL STEEL.<br />
                <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">TRUSTED BY BUILDERS ACROSS INDIA.</span>
              </h2>
              
              {/* Core Description Text Block (Upscaled Font Sizes & Extended Copy to span width natively) */}
              <p className="text-slate-600 font-normal leading-relaxed text-lg sm:text-xl xl:text-2xl w-full">
                At <span className="text-red-600 font-extrabold">KAAVERI</span>, we are deeply passionate about foundational structural integrity and committed to manufacturing perfection. As an industry-leading manufacturer of high-grade premium TMT bars and heavy structural steel products, we proudly supply modern infrastructure developments across the entire sub-continent with sustainable, precision-rolled materials engineered explicitly for multigenerational longevity.
              </p>

              {/* Supporting Block (Fills empty vertical real-estate with rich, professional context) */}
              <p className="text-slate-500 font-normal leading-relaxed text-base sm:text-lg xl:text-xl w-full">
                By integrating state-of-the-art continuous rolling mill machinery with automated thermo-processing techniques, our manufacturing framework eliminates hidden vulnerabilities. We continue to pioneer high-ductility metallurgy that withstands environmental shifts, optimizing architectural safety footprints at scale.
              </p>
            </div>

            {/* Premium Large Blockquote Accent */}
            <div className="relative border-l-8 border-red-600 pl-8 py-4 bg-gradient-to-r from-slate-50 to-transparent rounded-r-xl w-full">
              <p className="italic text-slate-800 text-base sm:text-lg xl:text-xl 2xl:text-2xl font-semibold leading-relaxed w-full">
                {"\"Our rigorous, multi-stage advanced quality control checks ensure that every single production item leaving our plant meets the absolute highest international standards — empowering modern structural engineers and builders to confidently raise industrial frameworks that stand the test of time.\""}
              </p>
            </div>

            {/* Feature Cards Grid (Enhanced Padding, Expanded Text, and 4 Column layout across wide viewports) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 w-full max-w-none pt-4">
              {dynamicBadges.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <div 
                    key={idx} 
                    className="group border border-slate-200 rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 bg-slate-50/50 hover:bg-white hover:border-red-500 hover:shadow-2xl"
                  >
                    <div className="w-14 h-14 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-6 transition-colors group-hover:bg-red-600 group-hover:text-white shrink-0 shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-slate-900 tracking-wider mb-3 uppercase group-hover:text-red-600 transition-colors leading-snug">
                        {badge.title}
                      </h4>
                      <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal">
                        {badge.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Interaction Action Group (Upscaled spacing and sizing) */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <Link 
                href="/products" 
                className="px-12 py-5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-sm tracking-widest rounded-xl transition-all shadow-md hover:shadow-xl flex items-center gap-3 uppercase"
              >
                Explore Products <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/brochure.pdf" 
                className="px-12 py-5 border-2 border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-50 hover:border-slate-300 font-bold text-sm tracking-widest rounded-xl transition-all flex items-center gap-3 uppercase"
              >
                <FileText className="w-5 h-5 text-slate-400" /> Download Brochure
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Lower Section: Full-Width Corporate Footer Banner Strip (Boosted padding and sizing) */}
      <div className="w-full bg-[#071424] text-white border-t border-white/5 shadow-2xl">
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/10">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center items-center lg:items-start lg:pl-20 hover:bg-white/5 transition-colors duration-300">
              <span className="text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl font-black text-white tracking-tight mb-2 bg-gradient-to-b from-white to-slate-200 bg-clip-text">
                {stat.label}
              </span>
              <span className="text-[10px] sm:text-xs xl:text-sm font-bold text-slate-400 tracking-widest uppercase text-center lg:text-left mt-1 leading-none">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, Award, ShieldCheck, Users, HardHat } from "lucide-react";

const dynamicBadges = [
  { 
    title: "PREMIUM TMT BARS", 
    desc: "Engineered with advanced thermo-mechanical treatment for superior high-grade construction safety, tensile strength, and enhanced earthquake resilience.",
    icon: ShieldCheck 
  },
  { 
    title: "BIS CERTIFIED QUALITY", 
    desc: "Rigorously evaluated and completely certified to absolute perfection under standard Bureau of Indian Standards benchmarking and protocols.",
    icon: Award 
  },
  { 
    title: "STRUCTURAL INTEGRITY", 
    desc: "Formulated to handle high-stress distribution uniformly across large industrial frames, ensuring long-term structural reliability under load.",
    icon: HardHat 
  },
  { 
    title: "TRUSTED NATIONWIDE PARTNERS", 
    desc: "Forging infrastructure networks across the country with premium materials perfectly optimized for major commercial mega-structures and residential projects.",
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
    <section className="w-full bg-white min-h-screen flex flex-col justify-between select-none">
      
      {/* Upper Section: Proportional Asymmetric Grid For Max Width Utilization */}
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-12 w-full min-h-[calc(100vh-140px)]">
        
        {/* Left Side: Immersive Imagery Block (Occupies 5 Columns) */}
        <div className="relative lg:col-span-5 w-full h-[450px] lg:h-full overflow-hidden min-h-[500px]">
          <Image
            src="/product.png" 
            alt="Kaveri Steel Plant Production Facility"
            fill
            priority
            className="object-cover object-center"
          />
          
          {/* Industrial Red Overlay Badge */}
          <div className="absolute top-10 left-10 bg-gradient-to-br from-red-600 to-red-700 text-white p-6 uppercase text-center shadow-2xl tracking-wider rounded-sm border border-white/10 z-10">
            <span className="text-3xl font-black block mb-0.5 tracking-tight">30+</span>
            <span className="text-[10px] font-bold text-red-100 block leading-tight">Years of<br/>Excellence</span>
          </div>

          <div className="hidden lg:block absolute top-0 right-0 h-full w-[1px] bg-slate-200" />
        </div>

        {/* Right Side: Maximized Fluid Copy Area (Occupies 7 Columns to extend width) */}
        <div className="lg:col-span-7 flex flex-col justify-center bg-white px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-16 lg:py-12 w-full">
          <div className="w-full max-w-none space-y-10">
            
            {/* Context Label */}
            <div className="flex items-center gap-3">
              <span className="uppercase tracking-[0.35em] text-red-600 text-xs font-black">
                ABOUT KAAVERI STEELS
              </span>
              <div className="w-16 h-[2px] bg-red-600 rounded-full" />
            </div>

            {/* Typography Stack */}
            <div className="space-y-6 w-full">
              <h2 className="font-sans font-black text-4xl sm:text-5xl xl:text-6xl text-slate-900 tracking-tight leading-[1.15] max-w-full">
                BUILT ON INDUSTRIAL STEEL.<br />
                <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">TRUSTED BY BUILDERS ACROSS INDIA.</span>
              </h2>
              
              <p className="text-slate-600 font-normal leading-relaxed text-base sm:text-lg xl:text-xl max-w-full">
                At <span className="text-red-600 font-extrabold">KAAVERI</span>, we are deeply passionate about foundational structural integrity and committed to manufacturing perfection. As an industry-leading manufacturer of high-grade premium TMT bars and heavy structural steel products, we proudly supply modern infrastructure developments across the entire sub-continent with sustainable, precision-rolled materials engineered explicitly for multigenerational longevity.
              </p>
            </div>

            {/* Premium Blockquote Accent */}
            <div className="relative border-l-4 border-red-600 pl-6 py-3 bg-gradient-to-r from-slate-50 to-transparent rounded-r-xl w-full">
              <p className="italic text-slate-800 text-sm sm:text-base xl:text-lg font-medium leading-relaxed max-w-full">
                {"\"Our rigorous, multi-stage advanced quality control checks ensure that every single production item leaving our plant meets the absolute highest international standards — empowering modern structural engineers and builders to confidently raise industrial frameworks that stand the test of time.\""}
              </p>
            </div>

            {/* Feature Cards Grid (Upgraded to 4 dynamic grid spaces) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-5 w-full">
              {dynamicBadges.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <div 
                    key={idx} 
                    className="group border border-slate-200 rounded-xl p-5 flex flex-col justify-between transition-all duration-300 bg-slate-50/50 hover:bg-white hover:border-red-500 hover:shadow-lg"
                  >
                    <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center mb-4 transition-colors group-hover:bg-red-600 group-hover:text-white shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-slate-900 tracking-wider mb-2 uppercase group-hover:text-red-600 transition-colors">
                        {badge.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        {badge.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link 
                href="/products" 
                className="px-10 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-xs tracking-widest rounded-lg transition-all shadow-md hover:shadow-xl flex items-center gap-2 uppercase"
              >
                Explore Products <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/brochure.pdf" 
                className="px-10 py-4 border-2 border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-50 hover:border-slate-300 font-bold text-xs tracking-widest rounded-lg transition-all flex items-center gap-2 uppercase"
              >
                <FileText className="w-4 h-4 text-slate-400" /> Download Brochure
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Lower Section: Full-Width Corporate Footer Banner Strip */}
      <div className="w-full bg-[#071424] text-white border-t border-white/5">
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/10">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-6 sm:p-8 flex flex-col justify-center items-center lg:items-start lg:pl-16 hover:bg-white/5 transition-colors duration-300">
              <span className="text-2xl sm:text-3xl xl:text-4xl font-black text-white tracking-tight mb-1 bg-gradient-to-b from-white to-slate-200 bg-clip-text">
                {stat.label}
              </span>
              <span className="text-[9px] sm:text-[10px] xl:text-xs font-bold text-slate-400 tracking-widest uppercase text-center lg:text-left">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

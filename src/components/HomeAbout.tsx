"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, Award, ShieldCheck, Users, HardHat } from "lucide-react";

const dynamicBadges = [
  { 
    title: "PREMIUM TMT BARS", 
    desc: "Engineered with advanced thermo-mechanical processing for superior high-grade tensile safety and enhanced seismic resilience.",
    icon: ShieldCheck 
  },
  { 
    title: "BIS CERTIFIED QUALITY", 
    desc: "Rigorously evaluated and certified to absolute industrial perfection under standard Bureau of Indian Standards benchmarking.",
    icon: Award 
  },
  { 
    title: "STRUCTURAL INTEGRITY", 
    desc: "Formulated to handle extreme load distribution uniformly across large-span frameworks, ensuring long-term structural reliability.",
    icon: HardHat 
  },
  { 
    title: "TRUSTED NATIONWIDE", 
    desc: "Forging infrastructure networks across the country with materials perfectly optimized for major commercial mega-structures.",
    icon: Users 
  },
];

export default function HomeAbout() {
  return (
    <section className="w-full min-h-screen bg-slate-50 flex flex-col justify-center items-center relative overflow-hidden p-0 m-0 box-border">
      
      {/* Dynamic Background Accents for Premium Visual Depth */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-red-500/5 rounded-bl-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-slate-200/50 rounded-tr-full blur-2xl pointer-events-none -z-10" />

      {/* Main Responsive Grid Container */}
      <div className="w-full max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-screen items-stretch">
        
        {/* Left Side: Immersive, Unbounded Imagery Block */}
        <div className="relative lg:col-span-5 xl:col-span-5 w-full min-h-[350px] sm:min-h-[450px] lg:min-h-0 overflow-hidden shadow-2xl lg:shadow-none">
          <Image
            src="/product.png" 
            alt="Kaveri Steel Plant Production Facility"
            fill
            priority
            className="object-cover object-center w-full h-full transform scale-100 hover:scale-103 transition-transform duration-[1.5s] ease-out"
          />
          
          {/* Industrial Red Overlay Badge - Positioned cleanly via viewport standards */}
          <div className="absolute top-6 left-6 sm:top-10 sm:left-10 bg-gradient-to-br from-red-600 to-red-700 text-white p-5 sm:p-6 uppercase text-center shadow-2xl tracking-widest rounded-md border border-white/10 z-10 backdrop-blur-sm">
            <span className="text-3xl sm:text-4xl font-black block mb-0.5 tracking-tight">30+</span>
            <span className="text-[9px] sm:text-[10px] font-black text-red-100 block leading-tight tracking-widest">Years of<br/>Excellence</span>
          </div>

          {/* Clean Premium Divider Line */}
          <div className="hidden lg:block absolute top-0 right-0 h-full w-[1px] bg-slate-200/60 z-10" />
        </div>

        {/* Right Side: High-End Expansive Text & Content Frame */}
        <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center bg-white px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 py-12 sm:py-16 lg:py-24 w-full">
          <div className="w-full space-y-8 sm:space-y-10 lg:space-y-12">
            
            {/* Top Eyebrow Identifier */}
            <div className="flex items-center gap-4">
              <span className="uppercase tracking-[0.4em] text-red-600 text-xs sm:text-sm font-black whitespace-nowrap">
                ABOUT KAAVERI STEELS
              </span>
              <div className="w-full h-[2px] bg-gradient-to-r from-red-600 to-transparent" />
            </div>

            {/* Typography Canvas - Scales cleanly from mobile up to huge screens */}
            <div className="space-y-6">
              <h2 className="font-sans font-black text-3xl sm:text-5xl xl:text-6xl 2xl:text-7xl text-slate-900 tracking-tight leading-[1.1] uppercase">
                BUILT ON INDUSTRIAL STEEL.<br />
                <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">TRUSTED BY BUILDERS ACROSS INDIA.</span>
              </h2>
              
              <p className="text-slate-600 font-normal leading-relaxed text-base sm:text-lg xl:text-xl xl:leading-relaxed">
                At <span className="text-red-600 font-extrabold">KAAVERI</span>, we are deeply passionate about foundational structural integrity and committed to manufacturing perfection. As an industry-leading manufacturer of high-grade premium TMT bars and heavy structural steel products, we proudly supply modern infrastructure developments across the entire sub-continent with sustainable, precision-rolled materials engineered explicitly for multigenerational longevity.
              </p>
            </div>

            {/* Premium Dynamic Blockquote */}
            <div className="relative border-l-[6px] sm:border-l-8 border-red-600 pl-5 sm:pl-6 py-2 sm:py-3 bg-gradient-to-r from-slate-50 to-transparent rounded-r-xl w-full">
              <p className="italic text-slate-800 text-sm sm:text-base xl:text-lg 2xl:text-xl font-semibold leading-relaxed">
                {"\"Our rigorous, multi-stage quality control checks ensure that every production item leaving our plant meets the absolute highest global standards — empowering structural engineers and builders to confidently raise frameworks that stand the test of time.\""}
              </p>
            </div>

            {/* Feature Badges Grid - Completely responsive card architecture */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-4 sm:gap-5 w-full">
              {dynamicBadges.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <div 
                    key={idx} 
                    className="group border border-slate-150 rounded-xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 bg-slate-50/40 hover:bg-white hover:border-red-500 hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-4 transition-colors group-hover:bg-red-600 group-hover:text-white shrink-0 shadow-sm">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-black text-slate-900 tracking-wider mb-2 uppercase group-hover:text-red-600 transition-colors leading-tight">
                        {badge.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed font-normal">
                        {badge.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Call To Actions */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
              <Link 
                href="/products" 
                className="w-full sm:w-auto px-10 py-4 sm:py-5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-xs tracking-widest rounded-xl transition-all shadow-md hover:shadow-xl flex items-center justify-center gap-3 uppercase whitespace-nowrap"
              >
                Explore Products <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/brochure.pdf" 
                className="w-full sm:w-auto px-10 py-4 sm:py-5 border-2 border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-50 hover:border-slate-300 font-bold text-xs tracking-widest rounded-xl transition-all flex items-center justify-center gap-3 uppercase whitespace-nowrap"
              >
                <FileText className="w-4 h-4 text-slate-400" /> Download Brochure
              </Link>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}

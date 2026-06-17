"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, Award, ShieldCheck, Users, HardHat } from "lucide-react";

const dynamicBadges = [
  { 
    title: "PREMIUM TMT BARS", 
    desc: "Engineered with advanced thermo-mechanical processing for superior high-grade tensile safety, yield strength, and enhanced seismic earthquake resilience across configurations.",
    icon: ShieldCheck 
  },
  { 
    title: "BIS CERTIFIED QUALITY", 
    desc: "Rigorously evaluated, sampled, and completely certified to absolute industrial perfection under standard Bureau of Indian Standards (BIS) strict compliance protocols.",
    icon: Award 
  },
  { 
    title: "STRUCTURAL INTEGRITY", 
    desc: "Formulated to handle extreme load distribution uniformly across large-span industrial frameworks, ensuring long-term structural reliability and fatigue protection.",
    icon: HardHat 
  },
  { 
    title: "TRUSTED NATIONWIDE", 
    desc: "Forging infrastructure networks across the country with premium-grade materials optimized for major commercial mega-structures and massive manufacturing corridors.",
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
    <section className="fixed inset-0 w-screen h-screen flex flex-col bg-white overflow-hidden select-none p-0 m-0 box-border z-0">
      
      {/* 100% Edge-to-Edge Split Workspace Container */}
      <div className="flex-1 w-full grid grid-cols-12 overflow-hidden min-h-0">
        
        {/* Left Aspect Grid Slot: Forced 45% Horizontal Screen Estate */}
        <div className="relative col-span-5 w-full h-full overflow-hidden bg-slate-900 shrink-0">
          <Image
            src="/product.png" 
            alt="Kaveri Steel Plant Production Facility"
            fill
            priority
            className="object-cover object-center w-full h-full transform scale-100 hover:scale-105 transition-transform duration-1000 ease-out"
          />
          
          {/* Immersive Badge Floating Elements */}
          <div className="absolute top-[6%] left-[6%] bg-gradient-to-br from-red-600 to-red-700 text-white px-8 py-6 uppercase text-center shadow-2xl tracking-widest rounded-sm border border-white/10 z-10">
            <span className="text-4xl lg:text-5xl font-black block mb-1 tracking-tight">30+</span>
            <span className="text-[10px] font-black text-red-100 block leading-tight tracking-widest">Years of<br/>Excellence</span>
          </div>
          
          <div className="absolute top-0 right-0 h-full w-[1px] bg-white/10 z-10" />
        </div>

        {/* Right Content Frame: Forced 55% Total Screen Real-estate with dynamic inner viewport stretching */}
        <div className="col-span-7 w-full h-full flex flex-col justify-between bg-white px-[5vw] py-[4vh] overflow-y-auto min-h-0">
          <div className="w-full space-y-[4vh] my-auto">
            
            {/* Top Identity Line */}
            <div className="flex items-center gap-4">
              <span className="uppercase tracking-[0.45em] text-red-600 text-xs lg:text-sm font-black">
                ABOUT KAAVERI STEELS
              </span>
              <div className="flex-1 h-[2px] bg-gradient-to-r from-red-600 to-transparent" />
            </div>

            {/* Giant Title Frame utilizing dynamic fluid width calculations */}
            <div className="space-y-[2.5vh]">
              <h2 className="font-sans font-black text-[3.2vw] text-slate-900 tracking-tight leading-[1.05] uppercase">
                BUILT ON INDUSTRIAL STEEL.<br />
                <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">TRUSTED BY BUILDERS ACROSS INDIA.</span>
              </h2>
              
              {/* Massive Bold Paragraph Descriptions */}
              <p className="text-slate-600 font-normal leading-relaxed text-[1.1vw]">
                At <span className="text-red-600 font-extrabold">KAAVERI</span>, we are deeply passionate about foundational structural integrity and committed to manufacturing perfection. As an industry-leading manufacturer of high-grade premium TMT bars and heavy structural steel products, we proudly supply modern infrastructure developments across the entire sub-continent with sustainable, precision-rolled materials engineered explicitly for multigenerational longevity.
              </p>

              <p className="text-slate-500 font-normal leading-relaxed text-[0.95vw]">
                By integrating state-of-the-art continuous rolling mill machinery with automated thermo-processing techniques, our manufacturing framework eliminates hidden vulnerabilities. We continue to pioneer high-ductility metallurgy that withstands environmental shifts, optimizing architectural safety footprints at scale.
              </p>
            </div>

            {/* Premium Dynamic Blockquote */}
            <div className="relative border-l-8 border-red-600 pl-[2vw] py-[1.5vh] bg-gradient-to-r from-slate-50 to-transparent rounded-r-xl w-full">
              <p className="italic text-slate-800 text-[1.25vw] font-semibold leading-relaxed">
                {"\"Our rigorous, multi-stage advanced quality control checks ensure that every single production item leaving our plant meets the absolute highest international standards — empowering modern structural engineers and builders to confidently raise industrial frameworks that stand the test of time.\""}
              </p>
            </div>

            {/* 4-Column Feature Grid Stretching Side to Side */}
            <div className="grid grid-cols-4 gap-[1.5vw] w-full pt-[1vh]">
              {dynamicBadges.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <div 
                    key={idx} 
                    className="group border border-slate-200 rounded-xl p-[1.5vw] flex flex-col justify-between transition-all duration-300 bg-slate-50/50 hover:bg-white hover:border-red-500 hover:shadow-2xl"
                  >
                    <div className="w-[3vw] h-[3vw] min-w-[40px] min-h-[40px] rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-[2vh] transition-colors group-hover:bg-red-600 group-hover:text-white shrink-0 shadow-sm">
                      <Icon className="w-[1.3vw] h-[1.3vw] min-w-[18px] min-h-[18px]" />
                    </div>
                    <div>
                      <h4 className="text-[0.85vw] font-black text-slate-900 tracking-wider mb-[1vh] uppercase group-hover:text-red-600 transition-colors leading-tight">
                        {badge.title}
                      </h4>
                      <p className="text-[0.7vw] text-slate-500 leading-relaxed font-normal">
                        {badge.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Control Interactions */}
            <div className="flex items-center gap-6 pt-[1vh]">
              <Link 
                href="/products" 
                className="px-[2.5vw] py-[2vh] bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-xs lg:text-sm tracking-widest rounded-xl transition-all shadow-md hover:shadow-2xl flex items-center gap-3 uppercase whitespace-nowrap"
              >
                Explore Products <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/brochure.pdf" 
                className="px-[2.5vw] py-[2vh] border-2 border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-50 hover:border-slate-300 font-bold text-xs lg:text-sm tracking-widest rounded-xl transition-all flex items-center gap-3 uppercase whitespace-nowrap"
              >
                <FileText className="w-5 h-5 text-slate-400" /> Download Brochure
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Full Screen Grid Footer Bar (Height is strictly fixed to prevent component shifting) */}
      <div className="w-full h-[15vh] min-h-[110px] bg-[#071424] text-white border-t border-white/5 shadow-2xl shrink-0 z-10">
        <div className="w-full h-full grid grid-cols-4 divide-x divide-white/10">
          {stats.map((stat, idx) => (
            <div key={idx} className="h-full px-[3vw] flex flex-col justify-center items-start hover:bg-white/5 transition-colors duration-300">
              <span className="text-[2.2vw] font-black text-white tracking-tight leading-none mb-1 bg-gradient-to-b from-white to-slate-200 bg-clip-text">
                {stat.label}
              </span>
              <span className="text-[0.75vw] font-bold text-slate-400 tracking-widest uppercase block mt-1 leading-normal">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

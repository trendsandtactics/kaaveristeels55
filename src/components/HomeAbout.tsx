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
    <section className="w-full min-h-screen bg-white flex flex-col items-center relative overflow-hidden p-0 m-0 box-border">
      
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-0 right-0 w-[30vw] h-[30vw] bg-red-500/5 rounded-bl-full blur-3xl pointer-events-none -z-10" />

      {/* 1. Immersive Centered Imagery Block */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden flex items-center justify-center">
        <Image
          src="/product.png" 
          alt="Kaveri Steel Plant Production Facility"
          fill
          priority
          className="object-cover object-center w-full h-full"
        />
        
        {/* Industrial Red Overlay Badge */}
        <div className="absolute top-8 left-8 bg-red-600 text-white p-6 uppercase text-center shadow-xl tracking-widest z-10">
          <span className="text-4xl font-black block mb-0.5 tracking-tight">30+</span>
          <span className="text-[10px] font-bold text-red-100 block leading-tight tracking-widest">Years of<br/>Excellence</span>
        </div>
      </div>

      {/* 2. Full Width Content Container */}
      <div className="w-full bg-white px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 py-16 lg:py-24">
        <div className="w-full space-y-10 lg:space-y-12">
          
          {/* Top Eyebrow Identifier */}
          <div className="space-y-3">
            <span className="uppercase tracking-[0.3em] text-red-600 text-sm font-black block">
              ABOUT KAAVERI STEELS
            </span>
            <div className="w-16 h-[4px] bg-red-600" />
          </div>

          {/* Typography Canvas - Significantly Scaled Up Text Sizes */}
          <div className="space-y-6">
            <h2 className="font-sans font-black text-4xl sm:text-5xl xl:text-6xl text-slate-900 tracking-tight leading-[1.1]">
              BUILT ON INDUSTRIAL STEEL.<br />
              <span className="text-red-600">TRUSTED BY BUILDERS ACROSS INDIA.</span>
            </h2>
            
            <p className="text-slate-600 font-normal leading-relaxed text-base sm:text-lg lg:text-xl max-w-none">
              At <span className="text-red-600 font-extrabold">KAAVERI</span>, we are deeply passionate about foundational structural integrity and committed to manufacturing perfection. As an industry-leading manufacturer of high-grade premium TMT bars and heavy structural steel products, we proudly supply modern infrastructure developments across the entire sub-continent with sustainable, precision-rolled materials engineered explicitly for multigenerational longevity.
            </p>
          </div>

          {/* Quote Block */}
          <div className="relative border-l-4 border-red-600 pl-6 py-2">
            <p className="italic text-slate-700 text-base sm:text-lg lg:text-xl font-medium leading-relaxed">
              {"\"Our rigorous, multi-stage quality control checks ensure that every production item leaving our plant meets the absolute highest global standards — empowering structural engineers and builders to confidently raise frameworks that stand the test of time.\""}
            </p>
          </div>

          {/* Feature Badges Grid - Clean, wide matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full pt-4">
            {dynamicBadges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div 
                  key={idx} 
                  className="border border-slate-200 rounded-xl p-6 lg:p-8 flex flex-col justify-between bg-white shadow-sm hover:border-red-500 transition-colors duration-200"
                >
                  <div className="text-red-600 mb-4 shrink-0">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-900 tracking-wider mb-2 uppercase">
                      {badge.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                      {badge.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link 
              href="/products" 
              className="w-full sm:w-auto px-10 py-5 bg-red-600 hover:bg-red-700 text-white font-bold text-sm tracking-widest transition-all shadow-md flex items-center justify-center gap-2 uppercase whitespace-nowrap"
            >
              Explore Products <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/brochure.pdf" 
              className="w-full sm:w-auto px-10 py-5 border border-slate-300 text-slate-700 hover:bg-slate-50 font-bold text-sm tracking-widest transition-all flex items-center justify-center gap-2 uppercase whitespace-nowrap"
            >
              <FileText className="w-5 h-5 text-slate-400" /> Download Brochure
            </Link>
          </div>

        </div>
      </div>

    </section>
  );
}

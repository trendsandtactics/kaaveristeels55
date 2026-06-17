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
    <section className="w-full min-h-screen bg-white flex items-stretch relative overflow-hidden p-0 m-0 box-border">
      
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-0 right-0 w-[30vw] h-[30vw] bg-red-500/5 rounded-bl-full blur-3xl pointer-events-none -z-10" />

      {/* Main Responsive Grid Container - No max-width restriction to fulfill edge-to-edge layout */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-stretch">
        
        {/* Left Side: Immersive Full-Height Imagery Block */}
        <div className="relative lg:col-span-5 w-full min-h-[450px] lg:min-h-screen overflow-hidden">
          <Image
            src="/product.png" 
            alt="Kaveri Steel Plant Production Facility"
            fill
            priority
            className="object-cover object-center w-full h-full"
          />
          
          {/* Industrial Red Overlay Badge */}
          <div className="absolute top-8 left-8 bg-red-600 text-white p-5 uppercase text-center shadow-xl tracking-widest">
            <span className="text-3xl font-black block mb-0.5 tracking-tight">30+</span>
            <span className="text-[9px] font-bold text-red-100 block leading-tight tracking-widest">Years of<br/>Excellence</span>
          </div>
        </div>

        {/* Right Side: Structured Typography & Context Box */}
        <div className="lg:col-span-7 flex flex-col justify-center bg-white px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-16 lg:py-12 w-full">
          <div className="w-full max-w-3xl mx-auto space-y-8 lg:space-y-10">
            
            {/* Top Eyebrow Identifier */}
            <div className="space-y-2">
              <span className="uppercase tracking-[0.3em] text-red-600 text-xs font-black block">
                ABOUT KAAVERI STEELS
              </span>
              <div className="w-12 h-[3px] bg-red-600" />
            </div>

            {/* Typography Canvas */}
            <div className="space-y-4">
              <h2 className="font-sans font-black text-3xl sm:text-4xl xl:text-5xl text-slate-900 tracking-tight leading-[1.15]">
                BUILT ON INDUSTRIAL STEEL.<br />
                <span className="text-red-600">TRUSTED BY BUILDERS ACROSS INDIA.</span>
              </h2>
              
              <p className="text-slate-600 font-normal leading-relaxed text-sm sm:text-base">
                At <span className="text-red-600 font-extrabold">KAAVERI</span>, we are deeply passionate about foundational structural integrity and committed to manufacturing perfection. As an industry-leading manufacturer of high-grade premium TMT bars and heavy structural steel products, we proudly supply modern infrastructure developments across the entire sub-continent with sustainable, precision-rolled materials engineered explicitly for multigenerational longevity.
              </p>
            </div>

            {/* Quote Block */}
            <div className="relative border-l-4 border-red-600 pl-5 py-1">
              <p className="italic text-slate-700 text-sm sm:text-base font-medium leading-relaxed">
                {"\"Our rigorous, multi-stage quality control checks ensure that every production item leaving our plant meets the absolute highest global standards — empowering structural engineers and builders to confidently raise frameworks that stand the test of time.\""}
              </p>
            </div>

            {/* Feature Badges Grid - Clean 2-Column Desktop Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {dynamicBadges.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <div 
                    key={idx} 
                    className="border border-slate-200 rounded-lg p-5 flex flex-col justify-between bg-white shadow-sm hover:border-red-500 transition-colors duration-200"
                  >
                    <div className="text-red-600 mb-3 shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-slate-900 tracking-wider mb-1 uppercase">
                        {badge.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                        {badge.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link 
                href="/products" 
                className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-xs tracking-widest transition-all shadow-md flex items-center justify-center gap-2 uppercase whitespace-nowrap"
              >
                Explore Products <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/brochure.pdf" 
                className="w-full sm:w-auto px-8 py-4 border border-slate-300 text-slate-700 hover:bg-slate-50 font-bold text-xs tracking-widest transition-all flex items-center justify-center gap-2 uppercase whitespace-nowrap"
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

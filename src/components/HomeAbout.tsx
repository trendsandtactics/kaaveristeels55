"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Matches the small square product/badge items shown in the white section
const dynamicBadges = [
  { title: "PREMIUM TMT BARS", desc: "High-grade construction safety" },
  { title: "BIS CERTIFIED", desc: "Tested to perfection" },
  { title: "TRUSTED PARTNERS", desc: "Building nationwide networks" },
];

// Matches the bottom dark feature strip counters
const stats = [
  { label: "30+", sub: "YEARS OF EXCELLENCE" },
  { label: "500+", sub: "HAPPY CUSTOMERS" },
  { label: "1 Mn+", sub: "TONS CAPACITY" },
  { label: "ISI", sub: "CERTIFIED PRODUCTS" },
];

export default function HomeAbout() {
  return (
    <section className="relative w-full overflow-hidden bg-white min-h-screen flex flex-col justify-between">
      {/* Upper Main Split Layout Section */}
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-12 w-full relative">
        
        {/* Left Side: Massive Factory Image with Slanted Edge Styling */}
        <div className="relative lg:col-span-5 h-[400px] lg:h-auto w-full overflow-hidden">
          <Image
            src="/productbg.png" 
            alt="Kaveri Steel Plant"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Top-left Red Badge Accent */}
          <div className="absolute top-6 left-6 bg-red-600 text-white text-xs font-bold p-3 uppercase tracking-wider text-center shadow-md">
            30+ <br /> <span className="text-[10px] font-normal">Years of Excellence</span>
          </div>

          {/* Right angled red border accent to separate sections cleanly */}
          <div className="hidden lg:block absolute top-0 right-0 h-full w-[4px] bg-red-600 transform origin-top-right" />
        </div>

        {/* Right Side: Clean White Content Area matching the screenshot */}
        <div className="lg:col-span-7 flex flex-col justify-center px-6 md:px-16 lg:px-24 py-16 lg:py-24 bg-white z-10">
          
          {/* Small Top Heading Accent */}
          <div className="flex items-center gap-2 mb-4">
            <span className="uppercase tracking-[0.2em] text-red-600 text-xs font-black">
              ABOUT KAAVERI
            </span>
            <div className="w-8 h-[2px] bg-red-600" />
          </div>

          {/* Main Typography Header Block */}
          <h2 className="font-sans font-black text-4xl md:text-5xl lg:text-6xl text-slate-950 tracking-tight leading-tight mb-6">
            BUILT ON STEEL.<br />
            <span className="text-red-600">TRUSTED BY INDIA.</span>
          </h2>

          {/* Intro Description text */}
          <p className="max-w-xl text-slate-600 leading-relaxed text-sm md:text-base mb-6">
            At <span className="text-red-600 font-bold">KAAVERI</span>, we are passionate about steel and dedicated to excellence. As a leading manufacturer of TMT bars and structural steel products, we supply the construction industry with materials engineered for longevity.
          </p>

          {/* Blockquote Segment - Fixed string interpolation for ESLint */}
          <div className="max-w-xl border-l-2 border-red-600 pl-4 mb-8 italic text-slate-700 text-sm md:text-base">
            {"\"Our rigorous quality control ensures every product meets the highest global standards — empowering builders to raise structures that stand the test of time.\""}
          </div>

          {/* Grid of Inner Feature Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mb-8">
            {dynamicBadges.map((badge, idx) => (
              <div key={idx} className="border border-slate-200 rounded-lg p-4 flex flex-col justify-between hover:border-red-300 transition-colors bg-slate-50/50">
                <span className="text-xs font-extrabold text-slate-950 tracking-wider mb-1">{badge.title}</span>
                <span className="text-[11px] text-slate-500">{badge.desc}</span>
              </div>
            ))}
          </div>

          {/* Interaction Action Group */}
          <div className="flex flex-wrap items-center gap-4">
            <Link 
              href="/products" 
              className="px-8 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs tracking-widest rounded transition-all shadow-lg flex items-center gap-2 uppercase"
            >
              Explore More <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/brochure.pdf" 
              className="px-8 py-3.5 border border-slate-300 text-slate-700 hover:bg-slate-50 font-bold text-xs tracking-widest rounded transition-all flex items-center gap-2 uppercase"
            >
              Download Brochure
            </Link>
          </div>
        </div>
      </div>

      {/* Lower Banner: Bold Dark Blue/Black Footer Strip containing metrics */}
      <div className="w-full bg-[#071424] text-white">
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/10 text-center lg:text-left">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-6 md:p-8 flex flex-col justify-center lg:pl-12">
              <span className="text-3xl md:text-4xl font-black text-white tracking-tight mb-1">
                {stat.label}
              </span>
              <span className="text-[10px] md:text-xs font-bold text-slate-400 tracking-widest uppercase">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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
    <section className="relative w-full min-h-screen flex flex-col lg:flex-row items-stretch bg-white overflow-hidden">
      
      {/* Left Side: Image (50%) */}
      <div className="relative w-full lg:w-1/2 min-h-[400px] lg:min-h-screen overflow-hidden">
        <Image
          src="/product.png" 
          alt="Kaveri Steel Plant Production Facility"
          fill
          priority
          className="object-cover object-center"
        />
        
        {/* Industrial Red Overlay Badge */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="absolute top-8 left-6 sm:top-10 sm:left-10 bg-red-600 text-white p-5 uppercase text-center shadow-xl tracking-widest z-20 rounded-sm"
        >
          <span className="text-3xl sm:text-4xl font-black block mb-0.5 tracking-tight">30+</span>
          <span className="text-[9px] sm:text-[10px] font-bold text-red-100 block leading-tight tracking-widest">Years of<br/>Excellence</span>
        </motion.div>
      </div>

      {/* Right Side: Content (50%) */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-12 xl:px-20 py-16 lg:py-20 bg-white space-y-10">
        
        {/* Top Eyebrow Identifier */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-3 flex flex-col items-start"
        >
          <span className="font-body uppercase tracking-[0.3em] text-red-600 text-base font-black block">
            ABOUT KAAVERI STEELS
          </span>
          <div className="w-16 h-[3.5px] bg-red-600 rounded-full" />
        </motion.div>

        {/* Typography Canvas */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="font-serif font-black text-4xl sm:text-5xl xl:text-6xl text-slate-900 tracking-tight leading-[1.15]">
            BUILT ON INDUSTRIAL STEEL.<br />
            <span className="text-red-600">TRUSTED BY BUILDERS ACROSS INDIA.</span>
          </h2>
          
          <p className="font-body text-slate-600 font-medium leading-relaxed text-lg sm:text-xl">
            At <span className="text-red-600 font-extrabold">KAAVERI</span>, we are deeply passionate about foundational structural integrity and committed to manufacturing perfection. As an industry-leading manufacturer of high-grade premium TMT bars and heavy structural steel products, we proudly supply modern infrastructure developments across the entire sub-continent with sustainable, precision-rolled materials engineered explicitly for multigenerational longevity.
          </p>
        </motion.div>

        {/* Quote Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative border-l-4 border-red-600 pl-6 py-3 max-w-4xl text-left bg-gradient-to-r from-red-50 to-transparent rounded-r-lg"
        >
          <p className="font-body italic text-slate-800 text-lg sm:text-xl font-semibold leading-relaxed">
            {"\"Our rigorous, multi-stage quality control checks ensure that every production item leaving our plant meets the absolute highest global standards — empowering structural engineers and builders to confidently raise frameworks that stand the test of time.\""}
          </p>
        </motion.div>

        {/* Feature Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full pt-4">
          {dynamicBadges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
                className="border border-slate-100 rounded-xl p-6 flex flex-col items-start text-left bg-white shadow-lg hover:border-red-600 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-red-600 mb-4 shrink-0 bg-red-50 p-3 rounded-full">
                  <Icon className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-sans text-base font-black text-slate-900 tracking-wider mb-2 uppercase">
                    {badge.title}
                  </h4>
                  <p className="font-body text-sm text-slate-600 leading-relaxed font-medium">
                    {badge.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap items-center justify-start gap-4 pt-4"
        >
          <Link 
            href="/products" 
            className="font-body w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-sm tracking-widest transition-all shadow-lg hover:shadow-red-600/30 flex items-center justify-center gap-2 uppercase whitespace-nowrap rounded-sm"
          >
            Explore Products <ArrowRight className="w-4 h-4" />
          </Link>
          <Link 
            href="/brochure.pdf" 
            className="font-body w-full sm:w-auto px-8 py-4 border border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 font-bold text-sm tracking-widest transition-all flex items-center justify-center gap-2 uppercase whitespace-nowrap rounded-sm"
          >
            <FileText className="w-4 h-4" /> Download Brochure
          </Link>
        </motion.div>
      </div>

    </section>
  );
}

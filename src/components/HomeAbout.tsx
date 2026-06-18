"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";

export default function HomeAbout() {
  return (
    <section className="relative w-full h-screen lg:h-[100dvh] flex flex-col lg:flex-row items-stretch bg-white overflow-hidden">
      
      {/* Left Side: Image (50%) */}
      <div className="relative w-full lg:w-1/2 h-[40vh] lg:h-full shrink-0 overflow-hidden">
        <Image
          src="/product.png" 
          alt="Kaveri Steel Plant Production Facility"
          fill
          priority
          className="object-cover object-center w-full h-full"
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
      <div className="w-full lg:w-1/2 h-[60vh] lg:h-full flex flex-col justify-start lg:justify-center px-6 sm:px-12 md:px-16 lg:px-12 xl:px-20 py-10 lg:py-16 bg-white space-y-8 lg:space-y-10 overflow-y-auto">
        
        {/* Top Eyebrow Identifier */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-3 flex flex-col items-start"
        >
          <span className="font-body uppercase tracking-[0.3em] text-red-600 text-base sm:text-lg font-black block">
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

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap items-center justify-start gap-5 pt-6"
        >
          <Link 
            href="/products" 
            className="font-body w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 bg-red-600 hover:bg-red-700 text-white font-bold text-sm md:text-base tracking-widest transition-all shadow-lg hover:shadow-red-600/30 flex items-center justify-center gap-2 uppercase whitespace-nowrap rounded-sm"
          >
            Explore Products <ArrowRight className="w-4 h-4" />
          </Link>
          <Link 
            href="/brochure.pdf" 
            className="font-body w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 border border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 font-bold text-sm md:text-base tracking-widest transition-all flex items-center justify-center gap-2 uppercase whitespace-nowrap rounded-sm"
          >
            <FileText className="w-5 h-5" /> Download Brochure
          </Link>
        </motion.div>
      </div>

    </section>
  );
}

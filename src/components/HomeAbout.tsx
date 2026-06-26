"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";

export default function HomeAbout() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 60, damping: 20 } 
    },
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col lg:flex-row items-stretch bg-slate-50/50 overflow-hidden">
      
      {/* Left Side: Industrial Showcase Image */}
      <div className="relative w-full lg:w-1/2 min-h-[45vh] sm:min-h-[50vh] lg:min-h-screen shrink-0 overflow-hidden group">
        <Image
          src="/kaaveri1.png" 
          alt="Kaveri Steel Plant Production Facility"
          fill
          priority
          className="object-cover object-center w-full h-full transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
        />
        
        {/* Soft elegant vignette gradient over the image */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-slate-950/20 pointer-events-none" />
        
        {/* Industrial Red Overlay Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: -20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
          className="absolute top-6 left-6 sm:top-10 sm:left-10 bg-gradient-to-br from-red-600 to-red-700 text-white p-4 sm:p-6 uppercase text-center shadow-2xl tracking-widest z-20 rounded-md backdrop-blur-sm border border-red-500/20"
        >
          <span className="text-3xl sm:text-5xl font-black block mb-0.5 tracking-tight drop-shadow-md">30+</span>
          <span className="text-[9px] sm:text-[11px] font-extrabold text-red-100 block leading-tight tracking-widest border-t border-red-500/30 pt-1.5 mt-1">
            Years of<br/>Excellence
          </span>
        </motion.div>
      </div>

      {/* Right Side: Copywriting & Content Canvas */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        /* Increased padding on lg/xl to balance the newly expanded width */
        className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-16 xl:px-24 py-12 lg:py-16 bg-white relative z-10 lg:shadow-[-20px_0_40px_rgba(0,0,0,0.03)]"
      >
        {/* Subtle decorative background accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* FIX: Removed 'max-w-2xl' and replaced with 'w-full'.
            Increased vertical spacing from 'space-y-6 lg:space-y-8' to 'space-y-10 lg:space-y-14'
        */}
        <div className="w-full space-y-10 lg:space-y-14">
          
          {/* Top Eyebrow Identifier */}
          <motion.div variants={itemVariants} className="space-y-3 flex flex-col items-start">
            <span className="font-sans uppercase tracking-[0.25em] text-red-600 text-xs sm:text-sm font-black block">
              ABOUT KAAVERI STEELS
            </span>
            <div className="w-12 h-[4px] bg-red-600 rounded-full" />
          </motion.div>

          {/* Core Typography Canvas */}
          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-5">
            <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-4xl xl:text-5xl text-slate-900 tracking-tight leading-[1.15]">
              BUILT ON INDUSTRIAL STEEL.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700">
                TRUSTED BY BUILDERS ACROSS INDIA.
              </span>
            </h2>
            
            <p className="font-sans text-slate-600 font-normal leading-relaxed text-base lg:text-base xl:text-lg">
              At <span className="text-red-600 font-bold">KAAVERI</span>, we are deeply passionate about foundational structural integrity and committed to manufacturing perfection. As an industry-leading manufacturer of high-grade premium TMT bars and heavy structural steel products, we proudly supply modern infrastructure developments across the entire sub-continent with sustainable, precision-rolled materials engineered explicitly for multigenerational longevity.
            </p>
          </motion.div>

          {/* Premium Quote Block */}
          <motion.div 
            variants={itemVariants}
            className="relative border-l-4 border-red-600 pl-5 sm:pl-6 py-3 sm:py-4 text-left bg-gradient-to-r from-slate-50 to-transparent rounded-r-xl border-y border-r border-slate-100/50"
          >
            <p className="font-sans italic text-slate-700 text-base lg:text-base xl:text-lg font-medium leading-relaxed">
              &ldquo;Our rigorous, multi-stage quality control checks ensure that every production item leaving our plant meets the absolute highest global standards — empowering structural engineers and builders to confidently raise frameworks that stand the test of time.&rdquo;
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-start gap-3 sm:gap-4 pt-2 sm:pt-4 w-full"
          >
            <Link 
              href="/products" 
              className="group font-sans w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-xs sm:text-sm tracking-wider transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-red-600/20 flex items-center justify-center gap-2 uppercase whitespace-nowrap rounded-md"
            >
              Explore Products 
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/product-brochure" 
              className="font-sans w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-50 hover:border-slate-400 font-bold text-xs sm:text-sm tracking-wider transition-all duration-300 flex items-center justify-center gap-2 uppercase whitespace-nowrap rounded-md"
            >
              <FileText className="w-4 h-4 text-slate-500" /> 
              Download Brochure
            </Link>
          </motion.div>
          
        </div>
      </motion.div>

    </section>
  );
}

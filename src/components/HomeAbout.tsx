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
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 70, damping: 20 } 
    },
  };

  return (
    <section className="relative w-full flex flex-row items-stretch bg-white overflow-hidden min-h-[50vh]">
      {/* Forced flex-row across ALL devices */}
      
      {/* Left: Image Section (Forced 50% width) */}
      <div className="relative w-1/2 shrink-0 group overflow-hidden">
        <Image
          src="/kaaveri1.png" 
          alt="Kaaveri Steel Plant Production Facility"
          fill
          priority
          className="object-cover object-center w-full h-full transform transition-transform duration-[2000ms] ease-out group-hover:scale-105"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent pointer-events-none" />
        
        {/* Scalable Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: -20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", delay: 0.2 }}
          className="absolute top-[3vw] left-[3vw] bg-red-700 text-white p-[2vw] text-center shadow-xl z-20"
        >
          <span className="font-black block leading-none tracking-tight text-[clamp(20px,4vw,48px)]">
            30+
          </span>
          <span className="font-bold text-red-100 block uppercase tracking-widest mt-[0.5vw] pt-[0.5vw] border-t border-red-500/50 text-[clamp(6px,0.8vw,12px)]">
            Years of<br/>Excellence
          </span>
        </motion.div>
      </div>

      {/* Right: Content Section (Forced 50% width) */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="w-1/2 flex flex-col justify-center px-[clamp(16px,4vw,64px)] py-[clamp(24px,5vw,80px)] bg-white relative z-10"
      >
        <div className="w-full mx-auto flex flex-col gap-[clamp(16px,3vw,40px)]">
          
          {/* Header / Subtitle */}
          <motion.div variants={itemVariants} className="flex flex-col items-start gap-[1vw]">
            <span className="font-sans uppercase tracking-[0.2em] text-red-700 font-bold block text-[clamp(8px,1vw,14px)]">
              About Kaaveri Steels
            </span>
            <div className="w-[4vw] h-[clamp(2px,0.3vw,4px)] bg-red-700 rounded-full" />
          </motion.div>

          {/* Main Title & Body */}
          <motion.div variants={itemVariants} className="space-y-[clamp(12px,2vw,24px)]">
            <h2 className="font-serif font-bold text-slate-900 tracking-tight leading-[1.15] text-[clamp(16px,3.5vw,48px)]">
              BUILT ON INDUSTRIAL STEEL.<br />
              <span className="text-red-700">
                TRUSTED BY BUILDERS ACROSS INDIA.
              </span>
            </h2>
            
            <div className="space-y-[clamp(10px,1.5vw,20px)]">
              <p className="font-sans text-slate-600 font-normal leading-relaxed text-[clamp(10px,1.2vw,18px)]">
                At <span className="text-red-700 font-bold">KAAVERI</span>, we are deeply passionate about foundational structural integrity and committed to manufacturing perfection. As an industry-leading manufacturer of high-grade premium TMT bars and heavy structural steel products, we proudly supply modern infrastructure developments across the entire sub-continent with sustainable, precision-rolled materials engineered explicitly for multigenerational longevity.
              </p>
              <p className="font-sans text-slate-600 font-normal leading-relaxed text-[clamp(10px,1.2vw,18px)]">
                Beyond manufacturing, we believe in forging lasting partnerships with our clients. By integrating cutting-edge metallurgical technologies with eco-friendly production practices, our advanced facilities deliver steel with superior yield strength, extraordinary ductility, and unmatched seismic resistance. Whether constructing towering commercial skyscrapers or vital national infrastructure, we provide the unwavering strength your vision demands.
              </p>
            </div>
          </motion.div>

          {/* Quote Section */}
          <motion.div 
            variants={itemVariants}
            className="border-l-[clamp(2px,0.3vw,4px)] border-red-700 pl-[clamp(10px,1.5vw,24px)] py-[1vw] bg-gradient-to-r from-slate-50 to-transparent"
          >
            <p className="font-sans text-slate-700 font-medium italic leading-relaxed text-[clamp(10px,1.2vw,18px)]">
              &ldquo;Our rigorous, multi-stage quality control checks ensure that every production item leaving our plant meets the absolute highest global standards — empowering structural engineers and builders to confidently raise frameworks that stand the test of time.&rdquo;
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-row flex-wrap items-center justify-start gap-[clamp(8px,1vw,16px)] pt-[1vw] w-full"
          >
            <Link 
              href="/products" 
              className="group px-[clamp(12px,2vw,32px)] py-[clamp(8px,1.2vw,16px)] bg-red-700 hover:bg-red-800 text-white font-bold tracking-wider transition-all duration-300 shadow-lg hover:shadow-red-700/30 flex items-center justify-center gap-[0.5vw] uppercase rounded-sm text-[clamp(8px,1vw,14px)]"
            >
              Explore Products 
              <ArrowRight className="w-[clamp(12px,1.2vw,16px)] h-[clamp(12px,1.2vw,16px)] transform group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/product-brochure" 
              className="group px-[clamp(12px,2vw,32px)] py-[clamp(8px,1.2vw,16px)] border-[1.5px] border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-50 hover:border-slate-300 font-bold tracking-wider transition-all duration-300 flex items-center justify-center gap-[0.5vw] uppercase rounded-sm text-[clamp(8px,1vw,14px)]"
            >
              <FileText className="w-[clamp(12px,1.2vw,16px)] h-[clamp(12px,1.2vw,16px)] text-slate-400 group-hover:text-red-700 transition-colors" /> 
              Brochure
            </Link>
          </motion.div>
          
        </div>
      </motion.div>

    </section>
  );
}

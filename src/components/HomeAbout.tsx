"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, FileText, ShieldCheck, Award, Users } from "lucide-react";

export default function HomeAbout() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 70, damping: 22 },
    },
  };

  const stats = [
    { value: "500+", label: "Projects Delivered" },
    { value: "98%",  label: "Client Satisfaction" },
    { value: "IS 1786", label: "Certified Grade" },
  ];

  const pillars = [
    {
      icon: ShieldCheck,
      title: "BIS Certified",
      desc: "Every TMT bar meets Bureau of Indian Standards IS 1786 certification.",
    },
    {
      icon: Award,
      title: "Premium Grade",
      desc: "Fe 500D & Fe 550D high-strength steel engineered for seismic zones.",
    },
    {
      icon: Users,
      title: "Pan-India Reach",
      desc: "Trusted by contractors, developers, and government projects nationwide.",
    },
  ];

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Using a unified CSS Grid structure instead of a loose flexbox wrapper. 
        This eliminates layout bleeding and guarantees symmetric height calculation.
      */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px] lg:min-h-[850px] w-full">
        
        {/* ── LEFT PANEL: Premium Visual Asset Box ── */}
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-full min-h-full overflow-hidden group bg-slate-900">
          <Image
            src="/kaaveri1.png"
            alt="Kaaveri Steels Production Facility"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
          />
          {/* Cinema grade overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-slate-950/30" />

          {/* Floating Badge with absolute positioning metrics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: -20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            className="absolute top-6 left-6 sm:top-10 sm:left-10 lg:top-12 lg:left-12 bg-gradient-to-br from-red-600 to-red-700 text-white p-6 sm:p-8 rounded-2xl shadow-2xl z-20 backdrop-blur-sm bg-opacity-95"
          >
            <span className="block text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none">30+</span>
            <span className="block text-[11px] sm:text-xs uppercase tracking-[0.25em] mt-3 border-t border-red-400/40 pt-3 text-red-100 font-bold leading-normal">
              Years of<br />Excellence
            </span>
          </motion.div>
        </div>

        {/* ── RIGHT PANEL: High-Conversion Copy & Data ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="relative flex flex-col justify-center px-6 sm:px-12 xl:px-20 py-16 sm:py-20 lg:py-24 bg-white z-10"
        >
          {/* Editorial Ambient Background Blur element */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-50/40 rounded-full blur-[120px] pointer-events-none -z-10" />

          {/* Wrapper to hold spacing cleanly without using space-between gaps */}
          <div className="max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto w-full flex flex-col gap-12">
            
            {/* Typography Heading Group */}
            <div className="flex flex-col gap-6">
              <motion.div variants={itemVariants} className="flex flex-col items-start gap-2.5">
                <span className="uppercase tracking-[0.3em] text-red-600 text-xs sm:text-sm font-black">
                  ABOUT KAAVERI STEELS
                </span>
                <div className="w-16 h-[4px] bg-red-600 rounded-full" />
              </motion.div>

              <motion.h2 variants={itemVariants} className="font-black text-[38px] sm:text-[54px] xl:text-[60px] 2xl:text-[68px] text-slate-900 leading-[1.08] tracking-tight">
                BUILT ON INDUSTRIAL STEEL.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-600 to-red-700">
                  TRUSTED BY BUILDERS ACROSS INDIA.
                </span>
              </motion.h2>

              <motion.p variants={itemVariants} className="text-slate-600 text-[18px] sm:text-[21px] xl:text-[22px] leading-[1.7] font-normal">
                At <span className="font-bold text-red-600">KAAVERI STEELS</span>, we
                are committed to engineering excellence and manufacturing premium-quality
                TMT bars and structural steel products. With decades of expertise, we
                support infrastructure, commercial, industrial, and residential
                developments across India with reliable steel solutions built for
                strength, durability, and long-term performance.
              </p>
            </div>

            {/* Premium Blockquote Card */}
            <motion.div
              variants={itemVariants}
              className="border-l-4 border-red-600 pl-6 py-3.5 bg-slate-50/80 rounded-r-2xl border border-slate-100"
            >
              <p className="italic text-slate-700 text-[17px] sm:text-[19px] xl:text-[20px] leading-[1.65]">
                &ldquo;Our rigorous quality assurance process ensures every product
                leaving our facility meets the highest industry standards, enabling
                engineers and builders to construct with complete confidence.&rdquo;
              </p>
            </motion.div>

            {/* Feature Cards Grid Component */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5"
            >
              {pillars.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex flex-col gap-3.5 p-5 sm:p-6 rounded-2xl bg-white border border-slate-100 hover:border-red-200 hover:shadow-xl hover:shadow-red-950/[0.02] transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-[17px] xl:text-[19px] tracking-tight">{title}</h4>
                  <p className="text-slate-500 text-[14px] xl:text-[15px] leading-relaxed font-normal">{desc}</p>
                </div>
              ))}
            </motion.div>

            {/* Interactive Call to Actions & High-Value Metrics */}
            <div className="flex flex-col gap-10 mt-2">
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="group w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-base uppercase tracking-wider rounded-xl shadow-lg shadow-red-600/10 hover:shadow-xl hover:shadow-red-600/20 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Explore Products
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/product-brochure"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-10 py-4 border-2 border-slate-200 hover:border-slate-800 hover:bg-slate-900 hover:text-white text-slate-800 font-bold text-base uppercase tracking-wider rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FileText className="w-5 h-5" />
                  Download Brochure
                </Link>
              </motion.div>

              {/* High Impact Corporate Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-3 gap-4 pt-10 border-t border-slate-100"
              >
                {stats.map(({ value, label }) => (
                  <div key={label} className="flex flex-col items-start gap-1">
                    <span className="text-[34px] sm:text-[46px] xl:text-[52px] 2xl:text-[60px] font-black text-slate-900 leading-none tracking-tight">
                      {value}
                    </span>
                    <span className="text-[11px] sm:text-[13px] text-slate-400 uppercase tracking-widest font-bold leading-tight">
                      {label}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

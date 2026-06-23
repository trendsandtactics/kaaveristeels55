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
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 20 },
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
    <section className="relative w-full flex flex-col lg:flex-row bg-slate-50 overflow-hidden">

      {/* ── Left: Image (Adjusted to sit naturally alongside expanded text) ── */}
      <div className="relative w-full lg:w-1/2 h-[350px] sm:h-[480px] md:h-[600px] lg:h-auto lg:self-stretch overflow-hidden group">
        <Image
          src="/kaaveri1.png"
          alt="Kaaveri Steels Production Facility"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-slate-950/20" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: -20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
          className="absolute top-6 left-6 sm:top-8 sm:left-8 lg:top-12 lg:left-12 bg-gradient-to-br from-red-600 to-red-700 text-white p-5 sm:p-6 lg:p-7 rounded-xl shadow-2xl z-20"
        >
          <span className="block text-4xl sm:text-5xl lg:text-6xl font-black">30+</span>
          <span className="block text-[11px] sm:text-xs uppercase tracking-[0.2em] mt-3 border-t border-red-400 pt-3 text-red-100 font-bold">
            Years of<br />Excellence
          </span>
        </motion.div>
      </div>

      {/* ── Right: Content — Equalized White Spaces and Scaled Text ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        {/* Switched from justify-between to gap-10 for symmetric spacing control */}
        className="relative w-full lg:w-1/2 lg:self-stretch flex flex-col justify-center gap-10 px-6 sm:px-10 lg:px-12 xl:px-16 py-12 sm:py-16 lg:py-20 bg-white"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* ── BLOCK 1: Label + Heading + Body + Quote ── */}
        <div className="flex flex-col gap-6">

          {/* Label */}
          <motion.div variants={itemVariants} className="flex flex-col items-start gap-2">
            <span className="uppercase tracking-[0.25em] text-red-600 text-base lg:text-lg font-black">
              ABOUT KAAVERI STEELS
            </span>
            <div className="w-20 h-[4px] bg-red-600 rounded-full" />
          </motion.div>

          {/* Heading — Scaled up text sizes */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <h2 className="font-black text-[48px] sm:text-[62px] lg:text-[56px] xl:text-[66px] 2xl:text-[76px] text-slate-900 leading-[1.05] tracking-tight">
              BUILT ON INDUSTRIAL STEEL.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700">
                TRUSTED BY BUILDERS ACROSS INDIA.
              </span>
            </h2>

            <p className="text-slate-600 text-[21px] sm:text-[23px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px] leading-[1.75]">
              At <span className="font-bold text-red-600">KAAVERI STEELS</span>, we
              are committed to engineering excellence and manufacturing premium-quality
              TMT bars and structural steel products. With decades of expertise, we
              support infrastructure, commercial, industrial, and residential
              developments across India with reliable steel solutions built for
              strength, durability, and long-term performance.
            </p>
          </motion.div>

          {/* Quote — Scaled up text size */}
          <motion.div
            variants={itemVariants}
            className="border-l-4 border-red-600 pl-6 py-4 bg-gradient-to-r from-slate-50 to-transparent rounded-r-xl border border-slate-100"
          >
            <p className="italic text-slate-700 text-[20px] sm:text-[22px] xl:text-[24px] leading-[1.7]">
              &ldquo;Our rigorous quality assurance process ensures every product
              leaving our facility meets the highest industry standards, enabling
              engineers and builders to construct with complete confidence.&rdquo;
            </p>
          </motion.div>
        </div>

        {/* ── BLOCK 2: Pillars — Scaled up layout sizes ── */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-6"
        >
          {pillars.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col gap-4 p-5 xl:p-6 rounded-xl bg-slate-50 border border-slate-100 hover:border-red-100 hover:bg-red-50/30 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-red-600/10 flex items-center justify-center shrink-0">
                <Icon className="w-6 h-6 text-red-600" />
              </div>
              <span className="font-bold text-slate-900 text-[18px] xl:text-[20px] leading-tight">{title}</span>
              <p className="text-slate-500 text-[15px] xl:text-[17px] leading-relaxed">{desc}</p>
            </div>
          ))}
        </motion.div>

        {/* ── BLOCK 3: CTAs + Stats ── */}
        <div className="flex flex-col gap-8">

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/products"
              className="group w-full sm:w-auto px-10 py-4.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-lg uppercase tracking-wider rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              Explore Products
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/product-brochure"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4.5 border-2 border-slate-200 hover:border-slate-400 hover:bg-slate-50 text-slate-700 hover:text-slate-900 font-bold text-lg uppercase tracking-wider rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FileText className="w-5 h-5" />
              Download Brochure
            </Link>
          </motion.div>

          {/* Stats — Scaled up stat numbers and labels */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 pt-8 border-t-2 border-slate-200"
          >
            {stats.map(({ value, label }) => (
              <div key={label} className="flex flex-col items-start">
                <span className="text-[42px] xl:text-[52px] 2xl:text-[62px] font-black text-slate-900 leading-none">
                  {value}
                </span>
                <span className="text-[14px] xl:text-[16px] text-slate-500 uppercase tracking-widest mt-2 font-bold">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
}

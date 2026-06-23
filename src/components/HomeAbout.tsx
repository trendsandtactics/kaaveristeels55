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

      {/* ── Left: Image ── */}
      <div className="relative w-full lg:w-1/2 h-[300px] sm:h-[420px] md:h-[560px] lg:h-auto lg:self-stretch overflow-hidden group">
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
          className="absolute top-4 left-4 sm:top-8 sm:left-8 lg:top-10 lg:left-10 bg-gradient-to-br from-red-600 to-red-700 text-white p-4 sm:p-5 lg:p-6 rounded-xl shadow-2xl z-20"
        >
          <span className="block text-3xl sm:text-4xl lg:text-5xl font-black">30+</span>
          <span className="block text-[10px] sm:text-xs uppercase tracking-[0.2em] mt-2 border-t border-red-400 pt-2 text-red-100">
            Years of<br />Excellence
          </span>
        </motion.div>
      </div>

      {/* ── Right: Content — stretches to match image height ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative w-full lg:w-1/2 lg:self-stretch flex flex-col justify-between px-6 sm:px-10 lg:px-10 xl:px-14 py-10 sm:py-12 lg:py-14 bg-white"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* ── BLOCK 1: Label + Heading + Body + Quote ── */}
        <div className="flex flex-col gap-6">

          {/* Label */}
          <motion.div variants={itemVariants} className="flex flex-col items-start gap-2">
            <span className="uppercase tracking-[0.25em] text-red-600 text-sm lg:text-base font-black">
              ABOUT KAAVERI STEELS
            </span>
            <div className="w-16 h-[3px] bg-red-600 rounded-full" />
          </motion.div>

          {/* Heading — flows naturally, no forced breaks */}
          <motion.div variants={itemVariants} className="flex flex-col gap-5">
            <h2 className="font-black text-[46px] sm:text-[58px] lg:text-[52px] xl:text-[62px] 2xl:text-[72px] text-slate-900 leading-[1.0] tracking-tight">
              BUILT ON INDUSTRIAL STEEL.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700">
                TRUSTED BY BUILDERS ACROSS INDIA.
              </span>
            </h2>

            <p className="text-slate-600 text-[19px] sm:text-[21px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] leading-[1.75]">
              At <span className="font-bold text-red-600">KAAVERI STEELS</span>, we
              are committed to engineering excellence and manufacturing premium-quality
              TMT bars and structural steel products. With decades of expertise, we
              support infrastructure, commercial, industrial, and residential
              developments across India with reliable steel solutions built for
              strength, durability, and long-term performance.
            </p>
          </motion.div>

          {/* Quote */}
          <motion.div
            variants={itemVariants}
            className="border-l-4 border-red-600 pl-5 py-4 bg-gradient-to-r from-slate-50 to-transparent rounded-r-xl border border-slate-100"
          >
            <p className="italic text-slate-700 text-[18px] sm:text-[20px] xl:text-[22px] leading-[1.7]">
              &ldquo;Our rigorous quality assurance process ensures every product
              leaving our facility meets the highest industry standards, enabling
              engineers and builders to construct with complete confidence.&rdquo;
            </p>
          </motion.div>
        </div>

        {/* ── BLOCK 2: Pillars ── */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-3 xl:gap-4 my-8 lg:my-0 lg:py-8"
        >
          {pillars.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col gap-3 p-4 xl:p-5 rounded-xl bg-slate-50 border border-slate-100 hover:border-red-100 hover:bg-red-50/30 transition-colors duration-300"
            >
              <div className="w-11 h-11 rounded-lg bg-red-600/10 flex items-center justify-center shrink-0">
                <Icon className="w-6 h-6 text-red-600" />
              </div>
              <span className="font-bold text-slate-900 text-[16px] xl:text-[18px] leading-tight">{title}</span>
              <p className="text-slate-500 text-[14px] xl:text-[16px] leading-relaxed">{desc}</p>
            </div>
          ))}
        </motion.div>

        {/* ── BLOCK 3: CTAs + Stats ── */}
        <div className="flex flex-col gap-6">

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/products"
              className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-base uppercase tracking-wider rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              Explore Products
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/product-brochure"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 border-2 border-slate-200 hover:border-slate-400 hover:bg-slate-50 text-slate-700 hover:text-slate-900 font-bold text-base uppercase tracking-wider rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FileText className="w-5 h-5" />
              Download Brochure
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 pt-6 border-t-2 border-slate-200"
          >
            {stats.map(({ value, label }) => (
              <div key={label} className="flex flex-col items-start">
                <span className="text-[38px] xl:text-[46px] 2xl:text-[54px] font-black text-slate-900 leading-none">
                  {value}
                </span>
                <span className="text-[13px] xl:text-[15px] text-slate-500 uppercase tracking-widest mt-2 font-semibold">
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

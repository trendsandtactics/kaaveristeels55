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
      transition: { staggerChildren: 0.12, delayChildren: 0.05 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 18 },
    },
  };

  return (
    <section
      className="relative w-full flex flex-col lg:flex-row bg-white overflow-hidden"
      style={{ margin: 0, padding: 0 }}
    >
      {/* ── LEFT: Image Panel ── */}
      <div
        className="relative w-full lg:w-[52%] shrink-0 group overflow-hidden"
        style={{ minHeight: "clamp(340px, 60vh, 100vh)" }}
      >
        <Image
          src="/aboutsection.png"
          alt="Kaaveri Steel Plant Production Facility"
          fill
          priority
          className="object-cover object-center transform transition-transform duration-[2500ms] ease-out group-hover:scale-105"
        />

        {/* Dark vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/30 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />

        {/* 30+ Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: -24 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", delay: 0.2 }}
          className="absolute top-6 left-6 lg:top-8 lg:left-8 bg-red-700 text-white p-5 lg:p-6 text-center shadow-2xl z-20"
          style={{ minWidth: "clamp(80px, 10vw, 130px)" }}
        >
          <span className="font-black block leading-none tracking-tight text-4xl lg:text-5xl xl:text-6xl">
            30+
          </span>
          <span className="font-bold text-red-100 block uppercase tracking-widest mt-2 pt-2 border-t border-red-500/50 text-[10px] lg:text-xs">
            Years of<br />Excellence
          </span>
        </motion.div>

      </div>

      {/* ── RIGHT: Content Panel ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="
          w-full lg:w-[48%]
          flex flex-col justify-center
          bg-white relative z-10
          px-6 py-10
          sm:px-10 sm:py-12
          md:px-12 md:py-14
          lg:px-8 lg:py-8
          xl:px-14 xl:py-12
          2xl:px-16 2xl:py-16
        "
      >
        {/* Eyebrow */}
        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4 lg:mb-5">
          <div className="w-8 lg:w-10 h-[2px] bg-red-700" />
          <span className="uppercase tracking-[0.25em] text-red-700 font-bold text-[10px] lg:text-xs">
            About Kaaveri Steels
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          variants={itemVariants}
          className="
            font-serif font-black text-slate-900 leading-[1.1] tracking-tight
            mb-4 lg:mb-5
            text-3xl sm:text-4xl lg:text-[2rem] xl:text-4xl 2xl:text-5xl
          "
        >
          Engineered for{" "}  
          <span className="relative inline-block">
            Excellence
            <span className="absolute bottom-1 left-0 w-full h-[3px] bg-red-700/30 rounded-full" />
          </span>{" "}
          <br />
          <span className="text-red-700">Built for Generations.</span>
        </motion.h2>

        {/* Body paragraphs */}
        <motion.div
          variants={itemVariants}
          className="space-y-3 mb-4 lg:mb-5"
        >
          <p className="text-slate-600 leading-relaxed font-normal text-sm lg:text-sm xl:text-base">
            At{" "}
            <span className="text-red-700 font-bold">KAAVERI</span>, we are deeply
            passionate about foundational structural integrity and committed to
            manufacturing perfection. As an industry-leading manufacturer of high-grade
            premium TMT bars and heavy structural steel products, we proudly supply
            modern infrastructure developments across the entire sub-continent with
            sustainable, precision-rolled materials engineered explicitly for
            multigenerational longevity.
          </p>
          <p className="text-slate-600 leading-relaxed font-normal text-sm lg:text-sm xl:text-base">
            Beyond manufacturing, we believe in forging lasting partnerships with our
            clients. By integrating cutting-edge metallurgical technologies with
            eco-friendly production practices, our advanced facilities deliver steel with
            superior yield strength, extraordinary ductility, and unmatched seismic
            resistance — whether for towering skyscrapers or vital national
            infrastructure.
          </p>
        </motion.div>

        {/* Pull Quote */}
        <motion.blockquote
          variants={itemVariants}
          className="relative border-l-[3px] border-red-700 pl-5 lg:pl-6 py-2.5 mb-5 lg:mb-6 bg-gradient-to-r from-red-50/60 to-transparent rounded-r-sm"
        >
          <p className="text-slate-700 font-medium italic leading-relaxed text-sm lg:text-sm xl:text-base">
            &ldquo;Our rigorous, multi-stage quality control ensures every product leaving
            our plant meets the highest global standards — empowering engineers to raise
            frameworks that stand the test of time.&rdquo;
          </p>
        </motion.blockquote>

        {/* Divider */}
        <motion.div variants={itemVariants} className="w-full h-px bg-slate-100 mb-5 lg:mb-6" />

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center gap-3"
        >
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 px-5 py-3 lg:px-6 lg:py-3.5
              bg-red-700 hover:bg-red-800 text-white font-bold uppercase tracking-wider
              transition-all duration-300 shadow-lg hover:shadow-red-700/30
              rounded-sm text-xs"
          >
            Explore Products
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/product-brochure"
            className="group inline-flex items-center gap-2 px-5 py-3 lg:px-6 lg:py-3.5
              border border-slate-200 hover:border-red-200 text-slate-700 hover:text-red-700
              hover:bg-red-50 font-bold uppercase tracking-wider
              transition-all duration-300 rounded-sm text-xs"
          >
            <FileText className="w-4 h-4 text-slate-400 group-hover:text-red-600 transition-colors" />
            Download Brochure
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

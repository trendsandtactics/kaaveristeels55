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
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 20,
      },
    },
  };

  return (
    <section className="relative w-full flex flex-col lg:flex-row bg-slate-50 overflow-hidden">
      {/* Left Side Image */}
      <div className="relative w-full lg:w-[45%] h-[240px] sm:h-[320px] md:h-[450px] lg:min-h-[750px] xl:min-h-screen overflow-hidden group">
        <Image
          src="/kaaveri1.png"
          alt="Kaaveri Steels Production Facility"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 45vw"
          className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-slate-950/20" />

        {/* Experience Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: -20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
          className="absolute top-4 left-4 sm:top-8 sm:left-8 lg:top-10 lg:left-10 bg-gradient-to-br from-red-600 to-red-700 text-white p-3 sm:p-5 lg:p-6 rounded-xl shadow-2xl z-20"
        >
          <span className="block text-2xl sm:text-4xl lg:text-5xl font-black">
            30+
          </span>

          <span className="block text-[10px] sm:text-xs uppercase tracking-[0.2em] mt-2 border-t border-red-400 pt-2 text-red-100">
            Years of
            <br />
            Excellence
          </span>
        </motion.div>
      </div>

      {/* Right Side Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative w-full lg:w-[55%] flex flex-col justify-center px-5 sm:px-8 md:px-10 lg:px-12 xl:px-20 py-10 sm:py-12 lg:py-20 bg-white z-10 lg:shadow-[-20px_0_40px_rgba(0,0,0,0.03)]"
      >
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-[620px] xl:max-w-[700px] space-y-6 sm:space-y-8 lg:space-y-10">
          {/* Section Label */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-start space-y-3"
          >
            <span className="uppercase tracking-[0.25em] text-red-600 text-xs sm:text-sm font-black">
              ABOUT KAAVERI STEELS
            </span>

            <div className="w-16 h-1 bg-red-600 rounded-full" />
          </motion.div>

          {/* Heading & Description */}
          <motion.div variants={itemVariants} className="space-y-5">
            <h2 className="font-black text-2xl sm:text-4xl lg:text-5xl 2xl:text-6xl text-slate-900 leading-[1.1] tracking-tight">
              BUILT ON INDUSTRIAL STEEL.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700">
                TRUSTED BY BUILDERS ACROSS INDIA.
              </span>
            </h2>

            <p className="text-slate-600 text-[15px] sm:text-lg leading-7 sm:leading-relaxed">
              At{" "}
              <span className="font-bold text-red-600">
                KAAVERI STEELS
              </span>
              , we are committed to engineering excellence and manufacturing
              premium-quality TMT bars and structural steel products. With
              decades of expertise, we support infrastructure, commercial,
              industrial, and residential developments across India with
              reliable steel solutions built for strength, durability, and
              long-term performance.
            </p>
          </motion.div>

          {/* Quote */}
          <motion.div
            variants={itemVariants}
            className="border-l-4 border-red-600 pl-4 sm:pl-6 py-3 sm:py-4 bg-gradient-to-r from-slate-50 to-transparent rounded-r-xl border border-slate-100"
          >
            <p className="italic text-slate-700 text-sm sm:text-base lg:text-lg leading-relaxed">
              “Our rigorous quality assurance process ensures every product
              leaving our facility meets the highest industry standards,
              enabling engineers and builders to construct with complete
              confidence.”
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2"
          >
            <Link
              href="/products"
              className="group w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-sm uppercase tracking-wider rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              Explore Products

              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/product-brochure"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 border-2 border-slate-200 hover:border-slate-400 hover:bg-slate-50 text-slate-700 hover:text-slate-900 font-bold text-sm uppercase tracking-wider rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Download Brochure
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

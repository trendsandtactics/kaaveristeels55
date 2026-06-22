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
      <div className="relative w-full lg:w-1/2 h-[320px] sm:h-[450px] md:h-[550px] lg:min-h-screen overflow-hidden group">
        <Image
          src="/kaaveri.png‎"
          alt="Kaaveri Steels Production Facility"
          fill
          priority
          className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-slate-950/20" />

        {/* Experience Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: -20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
          className="absolute top-6 left-6 sm:top-10 sm:left-10 bg-gradient-to-br from-red-600 to-red-700 text-white p-5 sm:p-6 rounded-lg shadow-2xl z-20"
        >
          <span className="block text-4xl sm:text-5xl font-black">30+</span>

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
        className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-10 md:px-14 lg:px-16 xl:px-24 py-12 lg:py-20 bg-white relative z-10 lg:shadow-[-20px_0_40px_rgba(0,0,0,0.03)]"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-[700px] space-y-8 lg:space-y-10">
          {/* Heading */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-start space-y-3"
          >
            <span className="uppercase tracking-[0.25em] text-red-600 text-xs sm:text-sm font-black">
              ABOUT KAAVERI STEELS
            </span>

            <div className="w-14 h-1 bg-red-600 rounded-full" />
          </motion.div>

          {/* Main Content */}
          <motion.div variants={itemVariants} className="space-y-5">
            <h2 className="font-black text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-slate-900 leading-[1.1] tracking-tight">
              BUILT ON INDUSTRIAL STEEL.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700">
                TRUSTED BY BUILDERS ACROSS INDIA.
              </span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              At <span className="font-bold text-red-600">KAAVERI</span>, we
              are committed to engineering excellence and manufacturing
              premium-quality TMT bars and structural steel products. With
              decades of expertise, we support infrastructure, commercial,
              industrial, and residential developments across India with
              reliable steel solutions built for strength and durability.
            </p>
          </motion.div>

          {/* Quote */}
          <motion.div
            variants={itemVariants}
            className="border-l-4 border-red-600 pl-6 py-4 bg-gradient-to-r from-slate-50 to-transparent rounded-r-xl border border-slate-100"
          >
            <p className="italic text-slate-700 text-base sm:text-lg leading-relaxed">
              “Our rigorous quality assurance process ensures every product
              leaving our facility meets the highest industry standards,
              enabling engineers and builders to construct with complete
              confidence.”
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row gap-4 pt-4"
          >
            <Link
              href="/products"
              className="group w-full md:w-auto px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-sm uppercase tracking-wider rounded-md shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              Explore Products
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/brochure.pdf"
              target="_blank"
              className="w-full md:w-auto px-8 py-4 border-2 border-slate-200 hover:border-slate-400 hover:bg-slate-50 text-slate-700 hover:text-slate-900 font-bold text-sm uppercase tracking-wider rounded-md transition-all duration-300 flex items-center justify-center gap-2"
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

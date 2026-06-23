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
    <section className="relative w-full flex flex-col lg:flex-row bg-white overflow-hidden">
      {/* Left Image */}
      <div className="relative w-full lg:w-[55%] h-[300px] sm:h-[450px] md:h-[550px] lg:min-h-[850px] overflow-hidden group">
        <Image
          src="/kaaveri1.png"
          alt="Kaaveri Steels Production Facility"
          fill
          priority
          sizes="(max-width:1024px) 100vw, 55vw"
          className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/30" />

        {/* Experience Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="absolute top-6 left-6 sm:top-10 sm:left-10 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-2xl p-5 sm:p-6 shadow-2xl z-20"
        >
          <span className="block text-4xl sm:text-5xl font-black">
            30+
          </span>

          <div className="w-full h-px bg-red-300 my-2" />

          <span className="block text-[11px] sm:text-xs uppercase tracking-[0.2em] text-red-100">
            Years Of
            <br />
            Excellence
          </span>
        </motion.div>
      </div>

      {/* Right Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative w-full lg:w-[45%] flex items-center px-6 sm:px-10 lg:px-12 xl:px-16 py-12 lg:py-16"
      >
        <div className="w-full max-w-[580px] mx-auto space-y-8">
          {/* Label */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-start gap-3"
          >
            <span className="uppercase tracking-[0.25em] text-red-600 text-xs sm:text-sm font-bold">
              About Kaaveri Steels
            </span>

            <div className="w-14 h-1 bg-red-600 rounded-full" />
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants}>
            <h2 className="font-black text-4xl lg:text-5xl xl:text-6xl text-slate-900 leading-[1.05] tracking-tight">
              BUILT ON
              <br />
              INDUSTRIAL STEEL.
              <br />
              <span className="text-red-600">
                TRUSTED BY BUILDERS
                <br />
                ACROSS INDIA.
              </span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants}>
            <p className="text-slate-600 text-base lg:text-lg leading-relaxed">
              At{" "}
              <span className="font-semibold text-red-600">
                KAAVERI STEELS
              </span>
              , we are committed to engineering excellence and manufacturing
              premium-quality TMT bars and structural steel products. With
              decades of expertise, we support infrastructure, commercial,
              industrial, and residential developments across India through
              reliable steel solutions built for strength, durability, and
              long-term performance.
            </p>
          </motion.div>

          {/* Quote */}
          <motion.div
            variants={itemVariants}
            className="max-w-[520px] border-l-4 border-red-600 pl-5 py-2"
          >
            <p className="italic text-slate-600 text-base leading-relaxed">
              “Our rigorous quality assurance process ensures every product
              leaving our facility meets the highest industry standards,
              enabling engineers and builders to construct with complete
              confidence.”
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <Link
              href="/products"
              className="group inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/product-brochure"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-slate-300 hover:border-slate-500 text-slate-700 hover:text-slate-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
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

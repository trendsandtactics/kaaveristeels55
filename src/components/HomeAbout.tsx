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

  const stats = [
    { value: "500+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
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
    <section className="relative w-full flex flex-col lg:flex-row bg-slate-50 overflow-hidden min-h-screen">
      {/* ── Left Side Image ── */}
      <div className="relative w-full lg:w-1/2 h-[260px] sm:h-[350px] md:h-[500px] lg:h-auto lg:min-h-screen overflow-hidden group">
        <Image
          src="/kaaveri1.png"
          alt="Kaaveri Steels Production Facility"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-slate-950/20" />

        {/* Experience Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: -20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
          className="absolute top-4 left-4 sm:top-8 sm:left-8 lg:top-10 lg:left-10 bg-gradient-to-br from-red-600 to-red-700 text-white p-4 sm:p-5 lg:p-6 rounded-xl shadow-2xl z-20"
        >
          <span className="block text-3xl sm:text-4xl lg:text-5xl font-black">
            30+
          </span>
          <span className="block text-[10px] sm:text-xs uppercase tracking-[0.2em] mt-2 border-t border-red-400 pt-2 text-red-100">
            Years of
            <br />
            Excellence
          </span>
        </motion.div>
      </div>

      {/* ── Right Side Content ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative w-full lg:w-1/2 flex flex-col justify-between px-5 sm:px-8 md:px-10 lg:px-10 xl:px-12 2xl:px-16 py-10 sm:py-12 lg:py-16 bg-white"
      >
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* ── Top Block ── */}
        <div className="w-full space-y-6 sm:space-y-7">
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

          {/* Heading */}
          <motion.div variants={itemVariants} className="space-y-5">
            <h2 className="font-black text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] text-slate-900 leading-[1.05] tracking-tight">
              BUILT ON
              <br />
              INDUSTRIAL STEEL.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700">
                TRUSTED BY
                <br />
                BUILDERS ACROSS
                <br />
                INDIA.
              </span>
            </h2>

            <p className="text-slate-600 text-base lg:text-lg leading-relaxed max-w-3xl">
              At{" "}
              <span className="font-bold text-red-600">KAAVERI STEELS</span>, we
              are committed to engineering excellence and manufacturing
              premium-quality TMT bars and structural steel products. With
              decades of expertise, we support infrastructure, commercial,
              industrial, and residential developments across India with reliable
              steel solutions built for strength, durability, and long-term
              performance.
            </p>
          </motion.div>

          {/* Quote */}
          <motion.div
            variants={itemVariants}
            className="border-l-4 border-red-600 pl-5 py-4 bg-gradient-to-r from-slate-50 to-transparent rounded-r-xl border border-slate-100"
          >
            <p className="italic text-slate-700 text-sm sm:text-base lg:text-lg leading-relaxed">
              "Our rigorous quality assurance process ensures every product
              leaving our facility meets the highest industry standards, enabling
              engineers and builders to construct with complete confidence."
            </p>
          </motion.div>
        </div>

        {/* ── Middle Block — Pillars ── */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-7 sm:my-8"
        >
          {pillars.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col gap-2 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-red-100 hover:bg-red-50/30 transition-colors duration-300"
            >
              <div className="w-9 h-9 rounded-lg bg-red-600/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-red-600" />
              </div>
              <span className="font-bold text-slate-900 text-sm">{title}</span>
              <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </motion.div>

        {/* ── Bottom Block ── */}
        <div className="w-full space-y-6">
          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/products"
              className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-sm uppercase tracking-wider rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              Explore Products
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/product-brochure"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 border-2 border-slate-200 hover:border-slate-400 hover:bg-slate-50 text-slate-700 hover:text-slate-900 font-bold text-sm uppercase tracking-wider rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Download Brochure
            </Link>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200"
          >
            {stats.map(({ value, label }) => (
              <div key={label} className="flex flex-col items-start">
                <span className="text-2xl xl:text-3xl font-black text-slate-900 leading-none">
                  {value}
                </span>
                <span className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest mt-1.5">
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

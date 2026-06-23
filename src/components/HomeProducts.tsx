"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const products = [
  {
    name: "TMT Bars",
    image: "/tmt1.png",
    category: "TMT PRODUCTS",
    description:
      "High-strength ribbed TMT bars built for maximum durability, flexibility, and earthquake resistance.",
    href: "/products?category=TMT",
    accentColor: "group-hover:border-red-500/50",
  },
  {
    name: "Structural Steels",
    image: "/structural.png",
    category: "STRUCTURAL PRODUCTS",
    description:
      "Premium quality structural steels designed for robust frameworks and enduring performance.",
    href: "/products?category=Structural",
    accentColor: "group-hover:border-yellow-500/50",
  },
];

export default function HomeProducts() {
  return (
    <section className="relative overflow-hidden w-full bg-slate-900 py-20 lg:py-28">
      {/* Crisp Background Image with optimized dark uniform overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg2.png"
          alt="Products Background"
          fill
          priority
          className="object-cover object-center pointer-events-none"
        />
        {/* Increased opacity layer from 10% to 45% for superior text legibility */}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-full mx-auto px-4 md:px-8 lg:px-12 xl:px-16 flex flex-col justify-center items-center min-h-screen py-12 lg:py-20 gap-12 lg:gap-16">
        
        {/* Heading Section */}
        <div className="text-center w-full max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-4 mb-5"
          >
            <div className="w-12 h-[2px] bg-red-500" />
            <span className="uppercase tracking-[0.45em] text-red-500 text-lg md:text-xl lg:text-2xl font-black">
              Our Products
            </span>
            <div className="w-12 h-[2px] bg-red-500" />
          </motion.div>

          {/* Changed to font-serif, updated text size, and bumped tracking to mirror image mockup */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight drop-shadow-md"
          >
            Masterpieces of <span className="text-red-500">Steel</span>
          </motion.h2>

          {/* Upgraded size to text-lg/text-xl and swapped text-slate-400 for high-contrast slate-200 */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-5xl mx-auto text-xl md:text-2xl lg:text-3xl text-slate-200 leading-relaxed font-normal drop-shadow-sm"
          >
            Engineered to perfection, our diverse range of steel products forms
            the resilient core of iconic structures worldwide.
          </motion.p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 xl:gap-10 w-[80%] max-w-[80%] mx-auto flex-grow items-stretch">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="w-full h-full flex"
            >
              <Link href={product.href} className="block w-full h-full group">
                <div
                  className={`
                    relative
                    overflow-hidden
                    rounded-[28px]
                    shadow-2xl
                    min-h-[800px] md:min-h-[900px] lg:min-h-[1000px]
                    w-full
                    border border-white/15
                    bg-slate-900/50
                    backdrop-blur-md
                    transition-all
                    duration-500
                    flex flex-col justify-end items-start
                    ${product.accentColor}
                  `}
                >
                  {/* Dynamic Zoom Product Image */}
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="
                      object-cover object-center
                      transition-transform
                      duration-1000
                      ease-out
                      group-hover:scale-110
                    "
                  />

                  {/* Advanced Gradient Overlay for Perfect Text Visibility */}
                  <div className="absolute inset-x-0 bottom-0 h-[75%] lg:h-[65%] z-10 bg-gradient-to-t from-black/95 via-black/70 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 z-10 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />

                  {/* Card Interactive Content */}
                  <div className="relative z-20 p-8 md:p-12 lg:p-14 w-full h-full flex flex-col items-start justify-end text-left mt-auto overflow-hidden">
                    <span className="text-red-500 font-bold tracking-[0.2em] text-lg md:text-xl lg:text-2xl mb-4 block transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                      {product.category}
                    </span>
                    
                    <div className="w-16 h-[4px] bg-red-500 mb-6 rounded-full transition-all duration-500 group-hover:w-32 group-hover:bg-white shadow-[0_0_10px_rgba(255,0,0,0.5)] group-hover:shadow-[0_0_15px_rgba(255,255,255,0.8)]" />

                    {/* Increased heading sizes */}
                    <h3 className="text-white text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight drop-shadow-xl transform transition-transform duration-500 group-hover:-translate-y-2">
                      {product.name}
                    </h3>

                    {/* Enhanced readable font colors & size */}
<p className="text-slate-200 max-w-3xl leading-[1.4] text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-10 font-medium drop-shadow-lg transform transition-all duration-500 group-hover:-translate-y-2 group-hover:text-white">
  {product.description}
</p>

                    <div className="flex flex-wrap items-center justify-start gap-4 md:gap-6 pt-2 transform transition-transform duration-500 group-hover:-translate-y-2">
                      <div className="px-8 py-4 md:px-10 md:py-5 rounded-full border border-white/40 bg-black/40 backdrop-blur-md text-white font-bold text-sm md:text-base lg:text-lg tracking-widest transition-all duration-500 group-hover:bg-white group-hover:text-black group-hover:border-white group-hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                        EXPLORE PRODUCT
                      </div>

                      <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center transition-all duration-500 group-hover:bg-red-600 group-hover:border-red-600 group-hover:translate-x-2 shadow-xl group-hover:shadow-[0_0_30px_rgba(220,38,38,0.6)]">
                        <ArrowRight className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

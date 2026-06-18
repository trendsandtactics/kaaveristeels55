"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Layers3,
  Handshake,
  Leaf,
} from "lucide-react";

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

const features = [
  {
    icon: ShieldCheck,
    title: "High Strength",
    subtitle: "Built to Last",
  },
  {
    icon: Layers3,
    title: "Superior Quality",
    subtitle: "Tested & Assured",
  },
  {
    icon: Handshake,
    title: "Trusted Across India",
    subtitle: "Building The Nation",
  },
  {
    icon: Leaf,
    title: "Sustainable Steel",
    subtitle: "For A Better Tomorrow",
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
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 md:px-8 lg:px-12 flex flex-col justify-between min-h-screen">
        
        {/* Heading Section */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-4 mb-5"
          >
            <div className="w-10 h-[2px] bg-red-500" />
            <span className="uppercase tracking-[0.45em] text-red-500 text-sm font-black">
              Our Products
            </span>
            <div className="w-10 h-[2px] bg-red-500" />
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
        <div className="grid lg:grid-cols-2 gap-8 xl:gap-10 w-full flex-grow items-stretch">
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
                    min-h-[550px] md:min-h-[620px] lg:h-full
                    w-full
                    border border-white/15
                    bg-slate-900/50
                    backdrop-blur-md
                    transition-all
                    duration-500
                    flex flex-col justify-end
                    ${product.accentColor}
                  `}
                >
                  {/* Dynamic Zoom Product Image */}
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-105
                    "
                  />

                  {/* Card Interactive Content */}
                  <div className="relative z-20 p-8 md:p-12 lg:p-14 w-full">
                    <div className="w-14 h-[4px] bg-red-500 mb-5 rounded-full transition-all duration-300 group-hover:w-24" />

                    {/* Increased heading sizes */}
                    <h3 className="text-white text-4xl md:text-6xl font-black mb-5 tracking-tight drop-shadow">
                      {product.name}
                    </h3>

                    {/* Enhanced readable font colors & size */}
                    <p className="text-slate-100 max-w-xl leading-relaxed text-xl md:text-2xl lg:text-3xl mb-10 font-normal drop-shadow-sm opacity-95">
                      {product.description}
                    </p>

                    <div className="flex items-center justify-between pt-2">
                      <div className="px-10 py-5 md:px-12 md:py-6 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white font-black text-base md:text-lg lg:text-xl tracking-wider transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:border-white">
                        EXPLORE PRODUCT
                      </div>

                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-2 shadow-xl">
                        <ArrowRight className="w-8 h-8 md:w-10 md:h-10 text-black" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Features Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            mt-16 lg:mt-24
            bg-slate-950/70
            backdrop-blur-lg
            rounded-[24px]
            border
            border-white/10
            p-8 md:p-10
            w-full
          "
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {features.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex items-center gap-5 justify-start lg:justify-center">
                  <div className="w-14 h-14 rounded-2xl bg-red-500/15 border border-red-500/25 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-red-400" />
                  </div>

                  <div>
                    {/* Bumped text hierarchy in feature strip */}
                    <h4 className="font-black text-white text-xl md:text-2xl lg:text-3xl tracking-tight mb-0.5">{item.title}</h4>
                    <p className="text-slate-300 text-lg md:text-xl font-medium">{item.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

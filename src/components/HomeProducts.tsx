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
    <section className="relative overflow-hidden w-full bg-slate-950 py-16 lg:py-24">
      {/* Crisp Background Image with explicit dark solid overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/productbg.png"
          alt="Products Background"
          fill
          priority
          className="object-cover object-center pointer-events-none"
        />
        {/* Solid uniform opacity block instead of distracting gradients */}
        <div className="absolute inset-0 bg-black/85" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 md:px-8 lg:px-12 flex flex-col justify-between min-h-screen">
        
        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-4 mb-4"
          >
            <div className="w-8 h-[2px] bg-red-500" />
            <span className="uppercase tracking-[0.4em] text-red-500 text-xs font-black">
              Our Products
            </span>
            <div className="w-8 h-[2px] bg-red-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-sans font-extrabold tracking-tight text-4xl md:text-6xl lg:text-7xl text-white mb-4"
          >
            Masterpieces of <span className="text-red-500">Steel</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-base md:text-lg text-slate-400 leading-relaxed"
          >
            Engineered to perfection, our diverse range of steel products forms
            the resilient core of iconic structures worldwide.
          </motion.p>
        </div>

        {/* Product Cards Grid - Occupies the primary real estate space */}
        <div className="grid lg:grid-cols-2 gap-6 xl:gap-8 w-full flex-grow items-stretch">
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
                    rounded-[24px]
                    shadow-2xl
                    min-h-[500px] md:min-h-[580px] lg:h-full
                    w-full
                    border border-white/10
                    bg-slate-900/40
                    backdrop-blur-sm
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

                  {/* Elegant High-Contrast Bottom Vignette Shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 duration-500 group-hover:via-black/50" />

                  {/* Clean Shimmer Sweep Animation */}
                  <div
                    className="
                      absolute
                      -left-full
                      top-0
                      h-full
                      w-1/2
                      bg-gradient-to-r
                      from-transparent
                      via-white/10
                      to-transparent
                      skew-x-12
                      transition-all
                      duration-1000
                      group-hover:left-[150%]
                      z-10
                    "
                  />

                  {/* Card Header Category Tag */}
                  <div className="absolute top-0 left-0 p-6 md:p-8 z-20">
                    <div
                      className="
                        inline-flex
                        items-center
                        px-4
                        py-1.5
                        rounded-full
                        bg-black/50
                        backdrop-blur-md
                        border
                        border-white/10
                        text-white
                        text-[11px]
                        font-bold
                        tracking-widest
                      "
                    >
                      {product.category}
                    </div>
                  </div>

                  {/* Card Core Interactive Content */}
                  <div className="relative z-20 p-6 md:p-10 lg:p-12 w-full">
                    <div className="w-12 h-[3px] bg-red-500 mb-4 rounded-full transition-all duration-300 group-hover:w-20" />

                    <h3 className="text-white text-3xl md:text-5xl font-black mb-4 tracking-tight">
                      {product.name}
                    </h3>

                    <p className="text-slate-200 max-w-md leading-relaxed text-sm md:text-base mb-8 opacity-90">
                      {product.description}
                    </p>

                    <div className="flex items-center justify-between pt-2">
                      <div className="px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white font-bold text-xs tracking-wider transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:border-white">
                        EXPLORE PRODUCT
                      </div>

                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-2 shadow-lg">
                        <ArrowRight className="w-5 h-5 text-black" />
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
            mt-12 lg:mt-16
            bg-slate-900/60
            backdrop-blur-md
            rounded-[20px]
            border
            border-white/5
            p-6 md:p-8
            w-full
          "
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex items-center gap-4 justify-start lg:justify-center">
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-red-400" />
                  </div>

                  <div>
                    <h4 className="font-extrabold text-white text-sm md:text-base tracking-tight">{item.title}</h4>
                    <p className="text-slate-400 text-xs md:text-sm">{item.subtitle}</p>
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

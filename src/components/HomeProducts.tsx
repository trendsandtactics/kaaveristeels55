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
  },
  {
    name: "Structural Steels",
    image: "/structural.png",
    category: "STRUCTURAL PRODUCTS",
    description:
      "Premium quality structural steels designed for robust frameworks and enduring performance.",
    href: "/products?category=Structural",
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
    <section className="relative overflow-hidden py-20 lg:py-24 w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/productbg.png"
          alt="Products Background"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/80" />
      </div>

      {/* Main Container - Full width approach to eliminate side blank spaces */}
      <div className="relative z-10 w-full px-4 md:px-12 lg:px-16 xl:px-24 mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-4 mb-5"
          >
            <div className="w-12 h-[2px] bg-red-500" />
            <span className="uppercase tracking-[0.35em] text-red-400 text-sm font-bold">
              Our Products
            </span>
            <div className="w-12 h-[2px] bg-red-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6"
          >
            Masterpieces of <span className="text-red-400">Steel</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto text-lg text-white/70 leading-relaxed"
          >
            Engineered to perfection, our diverse range of steel products forms
            the resilient core of iconic structures worldwide.
          </motion.p>
        </div>

        {/* Product Cards Grid - Massive sizing configuration */}
        <div className="grid lg:grid-cols-2 gap-8 xl:gap-12 w-full">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              className="w-full"
            >
              <Link href={product.href} className="block w-full">
                <div
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[32px]
                    shadow-[0_25px_70px_rgba(0,0,0,0.6)]
                    h-[600px] md:h-[650px] lg:h-[700px]
                    cursor-pointer
                    border border-white/10
                    w-full
                  "
                >
                  {/* Product Visual Asset */}
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                  {/* Branding Color Overlay Accent */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/15 via-transparent to-transparent" />

                  {/* Shimmer Effect */}
                  <div
                    className="
                      absolute
                      -left-full
                      top-0
                      h-full
                      w-1/2
                      bg-gradient-to-r
                      from-transparent
                      via-white/15
                      to-transparent
                      skew-x-12
                      transition-all
                      duration-1000
                      group-hover:left-[140%]
                    "
                  />

                  {/* Card Content Layout */}
                  <div className="absolute inset-0 z-20 p-8 md:p-12 lg:p-16 flex flex-col justify-between">
                    <div>
                      <div
                        className="
                          inline-flex
                          items-center
                          px-5
                          py-2
                          rounded-full
                          bg-white/10
                          backdrop-blur-xl
                          border
                          border-white/20
                          text-white
                          text-xs
                          font-semibold
                          tracking-wider
                        "
                      >
                        {product.category}
                      </div>
                    </div>

                    <div>
                      <div className="w-16 h-1 bg-yellow-400 mb-6 rounded-full" />

                      <h3 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-none">
                        {product.name}
                      </h3>

                      <p className="text-white/85 max-w-xl leading-relaxed text-base md:text-lg mb-10">
                        {product.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="px-8 py-4 rounded-full border border-white/30 backdrop-blur-md text-white font-semibold text-sm tracking-wide transition-colors group-hover:bg-white/10">
                          EXPLORE PRODUCT
                        </div>

                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-3">
                          <ArrowRight className="w-6 h-6 text-black" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Features Strip - Extended to match edge alignment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            mt-16 lg:mt-20
            bg-white/10
            backdrop-blur-xl
            rounded-[32px]
            shadow-2xl
            border
            border-white/15
            p-8
            lg:p-10
            w-full
          "
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex items-center gap-5 justify-start lg:justify-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-400/30 flex items-center justify-center shrink-0">
                    <Icon className="w-7 h-7 text-green-400" />
                  </div>

                  <div>
                    <h4 className="font-bold text-white text-lg">{item.title}</h4>
                    <p className="text-white/55 text-sm md:text-base">{item.subtitle}</p>
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

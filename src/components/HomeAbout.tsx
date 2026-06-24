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

export default function HomeProducts() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/bg2.png"
          alt="Steel Background"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/65" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-5xl mx-auto mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-red-500" />
            <span className="uppercase tracking-[0.45em] text-red-400 text-sm md:text-base font-bold">
              OUR PRODUCTS
            </span>
            <div className="w-12 h-[2px] bg-red-500" />
          </div>

          <h2
            className="
              font-serif
              font-bold
              text-5xl
              md:text-6xl
              lg:text-7xl
              text-white
              leading-tight
              drop-shadow-[0_10px_40px_rgba(0,0,0,0.9)]
            "
          >
            Masterpieces of{" "}
            <span className="text-red-500">Steel</span>
          </h2>

          <p
            className="
              mt-6
              text-lg
              md:text-xl
              text-white/95
              max-w-3xl
              mx-auto
              leading-relaxed
              drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]
            "
          >
            Engineered to perfection, our diverse range of steel products forms
            the resilient core of iconic structures worldwide.
          </p>
        </motion.div>

        {/* Product Cards */}
        <div className="grid lg:grid-cols-2 gap-8 xl:gap-10 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
            >
              <Link href={product.href} className="group block">
                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[30px]
                    aspect-[16/9]
                    border
                    border-white/10
                    shadow-[0_25px_80px_rgba(0,0,0,0.45)]
                    transition-all
                    duration-700
                    hover:-translate-y-2
                    hover:shadow-[0_40px_120px_rgba(0,0,0,0.6)]
                  "
                >
                  {/* Product Image */}
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="
                      object-contain
                      object-right
                      p-4 md:p-6
                      transition-all
                      duration-1000
                      group-hover:scale-105
                    "
                  />

                  {/* Left Overlay for Content Visibility */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-r
                      from-black/85
                      via-black/50
                      to-transparent
                      z-10
                    "
                  />

                  {/* Content */}
                  <div
                    className="
                      relative
                      z-20
                      h-full
                      flex
                      flex-col
                      justify-end
                      p-6
                      md:p-8
                      lg:p-10
                      max-w-[55%]
                    "
                  >
                    <span
                      className="
                        uppercase
                        tracking-[0.25em]
                        text-red-400
                        text-xs
                        md:text-sm
                        font-bold
                      "
                    >
                      {product.category}
                    </span>

                    <div className="w-16 h-[3px] bg-red-500 rounded-full mt-4 mb-5" />

                    <h3
                      className="
                        text-white
                        text-3xl
                        md:text-4xl
                        lg:text-5xl
                        font-black
                        leading-tight
                        mb-4
                      "
                    >
                      {product.name}
                    </h3>

                    <p
                      className="
                        text-white/90
                        text-sm
                        md:text-base
                        lg:text-lg
                        leading-relaxed
                        mb-8
                      "
                    >
                      {product.description}
                    </p>

                    <div className="flex items-center gap-4">
                      <div
                        className="
                          px-5
                          py-3
                          rounded-full
                          bg-red-600
                          text-white
                          font-semibold
                          text-xs
                          md:text-sm
                          tracking-wider
                          transition-all
                          duration-500
                          group-hover:bg-red-700
                        "
                      >
                        EXPLORE PRODUCT
                      </div>

                      <div
                        className="
                          w-11
                          h-11
                          rounded-full
                          bg-white/10
                          backdrop-blur-sm
                          border
                          border-white/20
                          flex
                          items-center
                          justify-center
                          transition-all
                          duration-500
                          group-hover:bg-red-600
                          group-hover:border-red-600
                          group-hover:translate-x-2
                        "
                      >
                        <ArrowRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Premium Shine Effect */}
                  <div
                    className="
                      absolute
                      inset-0
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-700
                      bg-gradient-to-r
                      from-transparent
                      via-white/10
                      to-transparent
                      -translate-x-full
                      group-hover:translate-x-full
                    "
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

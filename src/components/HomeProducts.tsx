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
    <section className="relative overflow-hidden w-full py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg2.png"
          alt="Products Background"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Strong Overlay */}
        <div className="absolute inset-0 bg-black/75" />

        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70" />
      </div>

      <div className="relative z-10 max-w-[1800px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Heading Section */}
        <div className="max-w-5xl mx-auto text-center mb-16 lg:mb-20 relative">
          {/* Glass Panel */}
          <div className="absolute inset-0 rounded-[32px] bg-black/35 backdrop-blur-md border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.5)]" />

          <div className="relative px-8 py-10 lg:px-16 lg:py-12">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-[2px] bg-red-500" />
              <span className="uppercase tracking-[0.45em] text-red-400 text-sm md:text-base lg:text-lg font-black">
                OUR PRODUCTS
              </span>
              <div className="w-12 h-[2px] bg-red-500" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="
                font-serif
                font-bold
                text-4xl
                md:text-6xl
                lg:text-7xl
                text-white
                mb-6
                tracking-tight
                leading-tight
                drop-shadow-[0_8px_30px_rgba(0,0,0,1)]
              "
            >
              Masterpieces of{" "}
              <span className="text-red-500">Steel</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="
                max-w-4xl
                mx-auto
                text-lg
                md:text-xl
                lg:text-2xl
                text-white/95
                leading-relaxed
                font-medium
                drop-shadow-[0_4px_20px_rgba(0,0,0,1)]
              "
            >
              Engineered to perfection, our diverse range of steel products
              forms the resilient core of iconic structures worldwide.
            </motion.p>
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid lg:grid-cols-2 gap-8 xl:gap-10">
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
            >
              <Link href={product.href} className="group block">
                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[28px]
                    shadow-[0_25px_80px_rgba(0,0,0,0.45)]
                    border
                    border-white/10
                    transition-all
                    duration-700
                    hover:-translate-y-2
                    hover:shadow-[0_35px_100px_rgba(0,0,0,0.55)]
                  "
                >
                  {/* Product Image */}
                  <div className="relative aspect-[16/11]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="
                        object-cover
                        transition-transform
                        duration-1000
                        group-hover:scale-105
                      "
                    />
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 lg:p-12">
                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/60
                        via-black/10
                        to-transparent
                      "
                    />

                    <div className="relative z-10">
                      <span className="uppercase tracking-[0.25em] text-red-400 text-sm md:text-base font-bold">
                        {product.category}
                      </span>

                      <div className="w-14 h-[3px] bg-red-500 rounded-full mt-4 mb-5 group-hover:w-24 transition-all duration-500" />

                      <h3 className="text-white text-4xl md:text-5xl font-black mb-4 drop-shadow-lg">
                        {product.name}
                      </h3>

                      <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-xl mb-8">
                        {product.description}
                      </p>

                      <div className="flex items-center gap-4">
                        <div
                          className="
                            px-6 py-3
                            rounded-full
                            border border-white/30
                            backdrop-blur-md
                            bg-white/10
                            text-white
                            text-sm
                            font-semibold
                            tracking-widest
                            transition-all
                            duration-500
                            group-hover:bg-red-600
                            group-hover:border-red-600
                          "
                        >
                          EXPLORE PRODUCT
                        </div>

                        <div
                          className="
                            w-12 h-12
                            rounded-full
                            bg-white/15
                            backdrop-blur-md
                            border border-white/20
                            flex items-center justify-center
                            transition-all duration-500
                            group-hover:bg-red-600
                            group-hover:border-red-600
                            group-hover:translate-x-2
                          "
                        >
                          <ArrowRight className="w-5 h-5 text-white" />
                        </div>
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

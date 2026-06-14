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
    <section
      className="
        relative
        overflow-hidden
        py-20
        lg:py-28
        bg-gradient-to-b
        from-white
        via-[#fafafa]
        to-[#f5f6f3]
      "
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-green-100/30 rounded-full blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-yellow-100/30 rounded-full blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-4 mb-5"
          >
            <div className="w-12 h-[2px] bg-red-600" />

            <span className="uppercase tracking-[0.35em] text-red-600 text-sm font-bold">
              Our Products
            </span>

            <div className="w-12 h-[2px] bg-red-600" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="
              font-serif
              text-4xl
              md:text-6xl
              lg:text-7xl
              text-slate-900
              mb-6
            "
          >
            Masterpieces of{" "}
            <span className="text-red-600">
              Steel
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="
              max-w-3xl
              mx-auto
              text-lg
              text-slate-600
              leading-relaxed
            "
          >
            Engineered to perfection, our diverse range of steel products
            forms the resilient core of iconic structures worldwide.
          </motion.p>
        </div>

        {/* Product Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
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
              <Link href={product.href}>
                <div
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[32px]
                    shadow-[0_20px_60px_rgba(0,0,0,0.15)]
                    h-[520px]
                    cursor-pointer
                  "
                >
                  {/* Image */}
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  {/* Overlay */}
                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-t
                      from-black
                      via-black/60
                      to-black/10
                    "
                  />

                  {/* Gold Glow */}
                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-br
                      from-yellow-500/20
                      via-transparent
                      to-transparent
                    "
                  />

                  {/* Shine Effect */}
                  <div
                    className="
                      absolute
                      -left-full
                      top-0
                      h-full
                      w-1/2
                      bg-gradient-to-r
                      from-transparent
                      via-white/20
                      to-transparent
                      skew-x-12
                      transition-all
                      duration-1000
                      group-hover:left-[140%]
                    "
                  />

                  {/* Content */}
                  <div className="absolute inset-0 z-20 p-8 lg:p-10 flex flex-col justify-between">
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
                      <div className="w-12 h-1 bg-yellow-400 mb-5 rounded-full" />

                      <h3
                        className="
                          text-white
                          text-4xl
                          lg:text-5xl
                          font-bold
                          mb-5
                          leading-none
                        "
                      >
                        {product.name}
                      </h3>

                      <p
                        className="
                          text-white/85
                          max-w-sm
                          leading-relaxed
                          text-base
                          mb-8
                        "
                      >
                        {product.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div
                          className="
                            px-6
                            py-3
                            rounded-full
                            border
                            border-white/30
                            backdrop-blur-md
                            text-white
                            font-semibold
                            text-sm
                          "
                        >
                          EXPLORE PRODUCT
                        </div>

                        <div
                          className="
                            w-14
                            h-14
                            rounded-full
                            bg-white
                            flex
                            items-center
                            justify-center
                            transition-transform
                            duration-300
                            group-hover:translate-x-2
                          "
                        >
                          <ArrowRight className="w-5 h-5 text-black" />
                        </div>
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            mt-12
            bg-white
            rounded-[32px]
            shadow-xl
            border
            border-gray-100
            p-6
            lg:p-8
          "
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-center gap-4"
                >
                  <div
                    className="
                      w-14
                      h-14
                      rounded-full
                      bg-green-50
                      flex
                      items-center
                      justify-center
                      shrink-0
                    "
                  >
                    <Icon className="w-6 h-6 text-green-700" />
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900">
                      {item.title}
                    </h4>

                    <p className="text-slate-500 text-sm">
                      {item.subtitle}
                    </p>
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

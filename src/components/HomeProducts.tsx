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
    subtitle: "Built To Last",
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
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/productbg.png"
          alt="Products Background"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/80" />

        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950/90" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.08),transparent_60%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-14 h-[2px] bg-yellow-400" />
            <span className="uppercase tracking-[0.35em] text-yellow-400 text-xs md:text-sm font-bold">
              Our Products
            </span>
            <div className="w-14 h-[2px] bg-yellow-400" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white"
          >
            Masterpieces Of{" "}
            <span className="text-yellow-400">Steel</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto mt-6 text-white/70 text-base md:text-lg leading-relaxed"
          >
            Engineered to perfection, our diverse range of steel products forms
            the resilient core of iconic structures worldwide.
          </motion.p>
        </div>

        {/* Product Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
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
              <Link href={product.href}>
                <div
                  className="
                  group
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-yellow-500/20
                  bg-gradient-to-br
                  from-black/80
                  via-slate-950/80
                  to-black/90
                  backdrop-blur-xl
                  min-h-[460px]
                  lg:min-h-[500px]
                  p-8
                  md:p-10
                  transition-all
                  duration-500
                  hover:border-yellow-400/50
                  hover:-translate-y-2
                  hover:shadow-[0_0_50px_rgba(234,179,8,0.18)]
                "
                >
                  {/* Glow */}
                  <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 bg-yellow-400/20 blur-[120px]" />

                  {/* Shine */}
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
                    group-hover:left-[140%]
                  "
                  />

                  <div className="relative z-10 h-full flex flex-col lg:flex-row items-center justify-between gap-10">
                    {/* Content */}
                    <div className="flex-1">
                      <span
                        className="
                        inline-flex
                        items-center
                        px-5
                        py-2
                        rounded-full
                        border
                        border-yellow-400/30
                        bg-yellow-500/10
                        text-yellow-300
                        text-xs
                        font-semibold
                        tracking-wider
                      "
                      >
                        {product.category}
                      </span>

                      <div className="w-12 h-1 bg-yellow-400 rounded-full mt-8 mb-5" />

                      <h3 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-5">
                        {product.name}
                      </h3>

                      <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8">
                        {product.description}
                      </p>

                      <div className="flex items-center gap-4">
                        <div
                          className="
                          px-6
                          py-3
                          rounded-full
                          border
                          border-yellow-400/30
                          text-white
                          font-semibold
                          text-sm
                          transition-all
                          duration-300
                          group-hover:bg-yellow-400
                          group-hover:text-black
                        "
                        >
                          EXPLORE PRODUCT
                        </div>

                        <div
                          className="
                          w-12
                          h-12
                          rounded-full
                          bg-yellow-400
                          flex
                          items-center
                          justify-center
                          transition-all
                          duration-300
                          group-hover:translate-x-2
                        "
                        >
                          <ArrowRight className="w-5 h-5 text-black" />
                        </div>
                      </div>
                    </div>

                    {/* Product Image */}
                    <div className="relative flex-1 flex justify-center items-center">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={420}
                        height={420}
                        className="
                        object-contain
                        max-h-[350px]
                        md:max-h-[420px]
                        transition-transform
                        duration-700
                        group-hover:scale-105
                        drop-shadow-[0_0_30px_rgba(234,179,8,0.4)]
                      "
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
          mt-14
          rounded-[32px]
          border
          border-white/10
          bg-slate-900/60
          backdrop-blur-xl
          overflow-hidden
        "
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`
                    flex items-center gap-4 p-8
                    ${
                      index !== features.length - 1
                        ? "lg:border-r border-white/10"
                        : ""
                    }
                  `}
                >
                  <div
                    className="
                    w-14
                    h-14
                    rounded-full
                    border
                    border-yellow-400/30
                    bg-yellow-500/10
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                  >
                    <Icon className="w-6 h-6 text-yellow-400" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-white text-base">
                      {item.title}
                    </h4>

                    <p className="text-white/60 text-sm mt-1">
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

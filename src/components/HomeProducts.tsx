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
  BadgeCheck,
  Zap,
} from "lucide-react";

const products = [
  {
    name: "TMT Bars",
    image: "/tmt1.png",
    category: "TMT Products",
    badge: "Earthquake resistant",
    accentColor: "bg-red-600",
    badgeColor: "bg-red-50 text-red-800",
    categoryColor: "text-red-600",
    description:
      "High-strength ribbed TMT bars built for maximum durability, flexibility, and earthquake resistance in demanding construction environments.",
    href: "/products?category=TMT",
    specs: ["Fe 500D Grade", "IS 1786:2008", "Corrosion resistant"],
  },
  {
    name: "Structural Steels",
    image: "/structural.png",
    category: "Structural Products",
    badge: "Premium grade",
    accentColor: "bg-yellow-600",
    badgeColor: "bg-yellow-50 text-yellow-800",
    categoryColor: "text-yellow-600",
    description:
      "Premium quality structural steels designed for robust frameworks and enduring performance across commercial and infrastructure projects.",
    href: "/products?category=Structural",
    specs: ["IS 2062 Grade", "High tensile", "Weldable"],
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
    <section className="relative overflow-hidden py-20 lg:py-28 bg-white">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(220,38,38,0.04)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(202,138,4,0.05)_0%,_transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-14 lg:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-4 mb-4"
          >
            <div className="w-10 h-[2px] bg-red-600" />
            <span className="uppercase tracking-[0.3em] text-red-600 text-xs font-semibold">
              Our Products
            </span>
            <div className="w-10 h-[2px] bg-red-600" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-4 leading-tight"
          >
            Masterpieces of{" "}
            <span className="text-red-600">Steel</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-base text-slate-500 leading-relaxed"
          >
            Engineered to perfection — our diverse range of steel products forms
            the resilient core of iconic structures worldwide.
          </motion.p>
        </div>

        {/* Product Cards */}
        <div className="flex flex-col gap-5 mb-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
            >
              <Link href={product.href}>
                <div className="group relative flex overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 min-h-[200px]">
                  {/* Left accent bar */}
                  <div className={`w-1.5 flex-shrink-0 ${product.accentColor}`} />

                  {/* Image panel */}
                  <div className="relative w-48 sm:w-56 md:w-64 flex-shrink-0 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-between flex-1 p-6 lg:p-8">
                    <div>
                      {/* Category + badge row */}
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className={`text-[11px] font-semibold tracking-[0.15em] uppercase ${product.categoryColor}`}
                        >
                          {product.category}
                        </span>
                        <span
                          className={`text-[11px] font-medium px-2.5 py-0.5 rounded-md ${product.badgeColor}`}
                        >
                          {product.badge}
                        </span>
                      </div>

                      {/* Product name */}
                      <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 leading-tight">
                        {product.name}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-slate-500 leading-relaxed max-w-md mb-4">
                        {product.description}
                      </p>

                      {/* Spec pills */}
                      <div className="flex flex-wrap gap-2">
                        {product.specs.map((spec) => (
                          <span
                            key={spec}
                            className="inline-flex items-center gap-1 text-xs text-slate-500 border border-gray-200 rounded-full px-3 py-1"
                          >
                            <BadgeCheck className="w-3 h-3 text-slate-400" />
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between mt-6">
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 border border-gray-200 rounded-full px-5 py-2 group-hover:border-slate-400 transition-colors duration-200">
                        Explore product
                        <ArrowRight className="w-4 h-4" />
                      </span>

                      <div className="w-9 h-9 rounded-full bg-slate-50 border border-gray-200 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1">
                        <ArrowRight className="w-4 h-4 text-slate-500" />
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
          transition={{ duration: 0.55 }}
          className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden bg-white"
        >
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-center gap-3 px-5 py-5 lg:py-6"
              >
                <div className="w-9 h-9 rounded-lg bg-slate-50 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-slate-500" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-800 leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

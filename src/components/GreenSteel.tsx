"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Leaf,
  ShieldCheck,
  Factory,
  Building2,
} from "lucide-react";

export default function GreenSteel() {
  const features = [
    {
      icon: <Leaf className="w-5 h-5" />,
      title: "5-Star Rated",
      subtitle: "Green TMT Bars",
    },
    {
      icon: <Factory className="w-5 h-5" />,
      title: "Low Carbon",
      subtitle: "Emissions",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Certified",
      subtitle: "Green Steel",
    },
    {
      icon: <Building2 className="w-5 h-5" />,
      title: "Sustainable",
      subtitle: "Construction",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-green-100 rounded-full blur-[180px] opacity-40" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-green-200 rounded-full blur-[160px] opacity-30" />

      <div className="relative grid lg:grid-cols-2 min-h-screen">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-20 flex items-center"
        >
          <div className="w-full px-6 sm:px-10 lg:px-16 py-16 lg:py-24">
            {/* Logos */}
            <div className="flex flex-wrap items-center gap-5 mb-10">
              <div className="relative w-24 h-14 md:w-32 md:h-20">
                <Image
                  src="/image/Ministry_of_Steel_India.svg"
                  alt="Ministry of Steel"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="hidden sm:block w-px h-12 bg-gray-300" />

              <div className="relative w-40 h-12 md:w-56 md:h-16">
                <Image
                  src="/image/kaaveriwbg.png"
                  alt="Kaaveri"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Heading */}
            <div className="mb-8">
              <h2 className="leading-[0.85]">
                <span className="block text-5xl sm:text-6xl xl:text-[95px] font-black tracking-tight text-slate-900">
                  OFFICIALLY
                </span>

                <span className="block text-5xl sm:text-6xl xl:text-[95px] font-black tracking-tight text-green-600">
                  CERTIFIED
                </span>
              </h2>

              <div className="flex items-center gap-3 mt-6">
                <div className="w-20 h-1 bg-green-600 rounded-full" />

                <span className="text-green-700 font-semibold uppercase tracking-[0.35em] text-xs sm:text-sm">
                  GREEN STEEL
                </span>
              </div>
            </div>

            {/* Subtitle */}
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 leading-snug mb-6">
              Kaaveri TMT Bars Officially Certified as{" "}
              <span className="text-green-600">Green Steel</span>
            </h3>

            {/* Stars */}
            <div className="flex gap-2 mb-8">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-6 h-6 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="
                    bg-white/95
                    backdrop-blur-xl
                    border border-green-100
                    rounded-3xl
                    p-5
                    shadow-xl
                    hover:-translate-y-2
                    hover:shadow-2xl
                    transition-all
                    duration-300
                  "
                >
                  <div className="w-12 h-12 rounded-full bg-green-100 text-green-700 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>

                  <h4 className="font-semibold text-sm text-slate-800">
                    {item.title}
                  </h4>

                  <p className="text-xs text-gray-500 mt-1">
                    {item.subtitle}
                  </p>
                </div>
              ))}
            </div>

            {/* Description */}
            <p className="text-lg text-slate-600 leading-relaxed mb-6 max-w-xl">
              5-Star Rated Green TMT Bars with verified low carbon
              emissions. Committed to building eco-friendly structures
              and a sustainable future for India.
            </p>

            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-600" />
              <p className="font-semibold text-green-700 text-lg">
                Together We Build Responsibly
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative min-h-[500px] lg:min-h-screen"
        >
          {/* Full Background Image */}
          <Image
            src="/green.png"
            alt="Green Steel"
            fill
            priority
            className="object-cover"
          />

          {/* Premium Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/90 lg:to-white" />

          {/* Floating Certificate */}
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              right-4
              sm:right-8
              lg:right-12
              top-1/2
              -translate-y-1/2
              z-20
            "
          >
            <div className="bg-white p-3 rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
              <Image
                src="/Green.jpg"
                alt="Certificate"
                width={420}
                height={560}
                className="
                  rounded-2xl
                  w-[220px]
                  sm:w-[280px]
                  lg:w-[360px]
                  xl:w-[420px]
                  h-auto
                "
              />
            </div>
          </motion.div>

          {/* Floating Badge */}
          <div className="absolute bottom-8 left-8 z-20 hidden md:block">
            <div className="bg-green-600 text-white px-6 py-4 rounded-2xl shadow-2xl">
              <p className="text-3xl font-black">5★</p>
              <p className="text-sm uppercase tracking-wider">
                Certified Green Steel
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

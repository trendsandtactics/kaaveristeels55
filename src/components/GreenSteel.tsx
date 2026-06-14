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

  const benefits = [
    {
      title: "Lower Emissions",
      subtitle: "Greener Planet",
      icon: "🌍",
    },
    {
      title: "Higher Strength",
      subtitle: "Lasting Structures",
      icon: "🛡️",
    },
    {
      title: "Made In India",
      subtitle: "Better Tomorrow",
      icon: "🇮🇳",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#f7faf7] to-[#edf7ee] py-20 lg:py-28">

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-green-100/50 rounded-full blur-[150px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-200/40 rounded-full blur-[140px]" />

      {/* Decorative Leaves */}
      <div className="absolute top-10 right-10 opacity-70 hidden lg:block">
        <Image
          src="/image/leaf.png"
          alt=""
          width={180}
          height={180}
          className="object-contain"
        />
      </div>

      {/* Skyline Background */}
      <div className="absolute bottom-0 left-0 w-full opacity-10">
        <Image
          src="/image/city-skyline.png"
          alt=""
          width={2000}
          height={300}
          className="w-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            {/* Logos */}
            <div className="flex items-center gap-6 mb-10">

              <div className="relative w-36 h-20">
                <Image
                  src="/image/Ministry_of_Steel_India.svg"
                  alt="Ministry of Steel"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="w-px h-12 bg-gray-300" />

              <div className="relative w-52 h-16">
                <Image
                  src="/image/kaaveriwbg.png"
                  alt="Kaaveri"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Heading */}
            <div className="mb-6">

              <h2 className="leading-[0.9]">
                <span className="block text-5xl md:text-6xl xl:text-8xl font-black text-slate-900 tracking-tight">
                  OFFICIALLY
                </span>

                <span className="block text-5xl md:text-6xl xl:text-8xl font-black text-green-600 tracking-tight">
                  CERTIFIED
                </span>
              </h2>

              <div className="flex items-center gap-3 mt-5">
                <div className="w-16 h-1 bg-green-600 rounded-full" />
                <span className="uppercase tracking-[0.3em] text-green-700 font-semibold text-sm">
                  Green Steel
                </span>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-6 leading-snug">
              Kaaveri TMT Bars Officially Certified As{" "}
              <span className="text-green-600">
                Green Steel
              </span>
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

            {/* Feature Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">

              {features.map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-green-100 rounded-2xl p-4 shadow-lg shadow-green-50"
                >
                  <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center mb-3">
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
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mb-6">
              5-Star Rated Green TMT Bars with verified low carbon
              emissions. Committed to building eco-friendly structures
              and a sustainable future for India.
            </p>

            <p className="text-xl font-semibold text-green-700">
              Thank you for trusting Kaaveri.
            </p>

            <p className="text-lg font-medium text-slate-700">
              Together we build responsibly.
            </p>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >

            {/* Benefit Cards */}
            <div className="hidden xl:flex absolute right-[-130px] top-1/2 -translate-y-1/2 flex-col gap-5 z-20">

              {benefits.map((item, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-green-900 to-green-700 text-white p-5 rounded-3xl w-48 shadow-2xl"
                >
                  <div className="text-3xl mb-3">
                    {item.icon}
                  </div>

                  <h4 className="font-semibold text-lg">
                    {item.title}
                  </h4>

                  <p className="text-sm text-green-100">
                    {item.subtitle}
                  </p>
                </div>
              ))}
            </div>

            {/* Glow */}
            <div className="absolute inset-0 bg-green-400/20 blur-[120px] rounded-full scale-110" />

            {/* Pedestal */}
            <div className="absolute bottom-[-30px] w-[80%] h-10 bg-white rounded-full blur-md shadow-2xl" />

            {/* Certificate Frame */}
            <div className="relative bg-[#222] p-4 rounded-xl shadow-[0_30px_80px_rgba(0,0,0,0.25)]">

              <Image
                src="/Green.jpg"
                alt="Green Steel Certificate"
                width={900}
                height={1200}
                priority
                className="rounded-md bg-white max-w-[500px] w-full h-auto"
              />

            </div>

          </motion.div>

        </div>

      </div>

      {/* Bottom Steel Bars */}
      <div className="absolute bottom-0 left-0 hidden xl:block opacity-90">
        <Image
          src="/image/steel-bars.png"
          alt="Steel Bars"
          width={550}
          height={160}
          className="object-contain"
        />
      </div>

      {/* Bottom Leaves */}
      <div className="absolute bottom-0 left-1/3 hidden lg:block">
        <Image
          src="/image/leaf-bottom.png"
          alt=""
          width={200}
          height={200}
        />
      </div>

    </section>
  );
}

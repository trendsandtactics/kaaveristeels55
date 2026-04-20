"use client";

import React from "react";
import Image from "next/image";

export default function MapEmbed() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">

      {/* 🌆 Background */}
      <div className="absolute inset-0">
        <Image
          src="/bg1.png"
          alt="background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* ✨ Soft overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/80" />

      {/* 🌟 Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[0.25em] text-xs md:text-sm text-gray-500 mb-4">
            KAAVERI STEELS
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Trust On Site
          </h1>

          <p className="mt-4 text-gray-600 text-base md:text-lg">
            We don’t just promise quality — we prove it with live testing,
            transparency, and engineering excellence.
          </p>

        </div>

        {/* 🚚 Vehicle */}
        <div className="relative mt-10 md:mt-14 flex justify-center">

          <div className="relative w-full max-w-6xl h-[260px] sm:h-[340px] md:h-[420px] lg:h-[500px]">

            <Image
              src="/vehicle.png"
              alt="vehicle"
              fill
              priority
              className="object-contain object-bottom 
              drop-shadow-[0_40px_80px_rgba(0,0,0,0.35)] 
              transition-transform duration-700 hover:scale-[1.02]"
            />

          </div>

        </div>

        {/* 🔴 CTA */}
        <div className="flex justify-center mt-6 md:mt-10">

          <button className="relative overflow-hidden bg-red-600 text-white 
          px-8 md:px-10 py-3 md:py-4 rounded-xl font-semibold text-sm md:text-base 
          shadow-lg hover:shadow-xl transition duration-300 group">

            <span className="relative z-10">Book an Appointment</span>

            {/* subtle shine effect */}
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition" />

          </button>

        </div>

      </div>

      {/* ✨ Bottom fade for premium feel */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />

    </section>
  );
}

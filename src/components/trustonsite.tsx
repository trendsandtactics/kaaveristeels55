"use client";

import React from "react";
import Image from "next/image";

export default function MapEmbed() {
  return (
    <section className="relative pt-28 pb-10 md:pb-12 overflow-hidden">

      {/* 🌆 Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/bg1.png"
          alt="background"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        {/* TITLE */}
        <p className="uppercase tracking-widest text-sm text-gray-500 mb-3">
          KAAVERI STEELS
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
          Trust On Site
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          We don’t just promise quality — we prove it with live testing,
          transparency, and engineering excellence.
        </p>

        {/* 🚚 VEHICLE HERO (FULL IMAGE VISIBLE FIXED) */}
        <div className="relative w-full flex justify-center mb-12">
          <div className="relative w-full h-[280px] sm:h-[360px] md:h-[460px] lg:h-[520px]">

            <Image
              src="/vehicle.png"
              alt="vehicle"
              fill
              priority
              className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
            />

          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-6 md:mt-10">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 md:py-4 text-sm md:text-base font-semibold tracking-wide rounded-lg shadow-md hover:shadow-lg transition duration-300">
            Book an Appointment
          </button>
        </div>

      </div>
    </section>
  );
}

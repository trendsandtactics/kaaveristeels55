"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function TrustOnSite() {
  return (
    <section className="relative w-full pt-16 pb-6 sm:pt-20 sm:pb-8 md:pt-24 lg:pt-28 flex items-center">

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

      {/* Light overlay */}
      <div className="absolute inset-0 bg-white/70" />

      {/* 🌟 FULL WIDTH CONTENT */}
      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 text-center">

        {/* TITLE */}
        <p className="uppercase tracking-[0.25em] text-[10px] sm:text-xs lg:text-sm text-gray-500 mb-4">
          KAAVERI STEELS
        </p>

        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-gray-900 mb-4">
          Trust On Site
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-sm sm:text-base lg:text-lg">
          We don’t just promise quality — we prove it with live testing,
          transparency, and engineering excellence.
        </p>

        {/* 🚚 VEHICLE (FULL WIDTH CONTROLLED) */}
        <div className="relative w-full flex justify-center mb-6">

          <div className="relative w-full max-w-[1400px] h-[200px] sm:h-[260px] md:h-[300px] lg:h-[380px] xl:h-[520px]">

            <Image
              src="/vehicle.png"
              alt="vehicle"
              fill
              priority
              className="object-contain object-bottom drop-shadow-[0_40px_80px_rgba(0,0,0,0.35)]"
            />

          </div>

        </div>

        {/* CTA */}
        <div className="flex justify-center mt-2 md:mt-4">
          <Link href="/trust-on-site#book-test" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 sm:px-8 sm:py-3 lg:px-10 lg:py-4 text-xs sm:text-sm lg:text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition">
            Book an Appointment
          </Link>
        </div>

      </div>

    </section>
  );
}

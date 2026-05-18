"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function TrustOnSite() {
  return (
    <section className="relative w-full pt-28 pb-8 md:pt-32 md:pb-10 flex items-center">

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
      <div className="relative z-10 w-full px-6 md:px-12 text-center">

        {/* TITLE */}
        <p className="uppercase tracking-[0.25em] text-xs md:text-sm text-gray-500 mb-4">
          KAAVERI STEELS
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
          Trust On Site
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          We don’t just promise quality — we prove it with live testing,
          transparency, and engineering excellence.
        </p>

        {/* 🚚 VEHICLE (FULL WIDTH CONTROLLED) */}
        <div className="relative w-full flex justify-center mb-6">

          <div className="relative w-full max-w-[1400px] h-[260px] sm:h-[340px] md:h-[420px] lg:h-[520px]">

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
          <Link href="/trust-on-site#book-test" className="bg-red-600 hover:bg-red-700 text-white px-8 md:px-10 py-3 md:py-4 text-sm md:text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition">
            Book an Appointment
          </Link>
        </div>

      </div>

    </section>
  );
}

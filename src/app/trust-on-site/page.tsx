"use client";

import React from "react";
import Link from "next/link";

export default function TrustOnSitePage() {
  return (
    <main className="flex flex-col min-h-screen w-full pt-24 bg-white overflow-hidden">

      {/* 🌟 HERO */}
      <section className="relative w-full py-28 overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/background1.png" // 👉 replace with your bg image
            className="w-full h-full object-cover opacity-20"
            alt="background"
          />
        </div>

        {/* Soft overlay */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />

        <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
          <p className="uppercase tracking-widest text-sm mb-4 text-black font-semibold">
            KAAVERI STEELS
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-black mb-6">
            Trust On Site
          </h1>

          <p className="text-lg text-black/80 max-w-2xl mx-auto">
            We Don’t Just Promise Quality – We Prove It with live testing,
            transparency, and engineering excellence.
          </p>
        </div>
      </section>

      {/* 🚚 VEHICLE SECTION */}
      <section className="relative py-36 overflow-visible">

        {/* Moving Background Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-full animate-pulse opacity-20">
            <img
              src="/bg-pattern.png" // 👉 subtle texture image
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto flex items-center justify-center">

          <div className="relative flex items-center justify-center">

            {/* VEHICLE */}
            <img
              src="/vehicle.png"
              alt="vehicle"
              className="w-[800px] relative z-20 drop-shadow-[0_50px_80px_rgba(0,0,0,0.35)]"
            />

            {/* SHADOW */}
            <div className="absolute bottom-[-30px] w-[550px] h-[70px] bg-black/20 blur-3xl rounded-full z-10" />

            {/* FLOATING POINTS (ANIMATED) */}

            {/* LEFT TOP */}
            <div className="absolute left-[-120px] top-[80px] z-30 animate-bounce-slow">
              <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-full px-5 py-2 border">
                🚚 Mobile Testing Vehicle
              </div>
            </div>

            {/* LEFT BOTTOM */}
            <div className="absolute left-[-80px] bottom-[60px] z-30 animate-bounce-slow delay-200">
              <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-full px-5 py-2 border">
                ⚡ Instant Test Results
              </div>
            </div>

            {/* RIGHT TOP */}
            <div className="absolute right-[-120px] top-[80px] z-30 animate-bounce-slow delay-300">
              <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-full px-5 py-2 border">
                👁️ Live Testing
              </div>
            </div>

            {/* RIGHT BOTTOM */}
            <div className="absolute right-[-80px] bottom-[60px] z-30 animate-bounce-slow delay-500">
              <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-full px-5 py-2 border">
                🛡️ 100+ Years Strength
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🔴 FEATURES */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">

        <div className="bg-red-600 text-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">
            We Don’t Just Promise Quality
          </h2>

          <ul className="space-y-4 text-sm">
            <li>✔ Fully Equipped Mobile Testing Vehicle</li>
            <li>✔ Instant Test Result</li>
            <li>✔ Live Testing in Front of Engineers & Builders</li>
          </ul>
        </div>

        <div className="bg-red-600 text-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">
            Why This Changes Everything
          </h2>

          <ul className="space-y-4 text-sm">
            <li>✔ No Blind Trust</li>
            <li>✔ Complete Transparency</li>
            <li>✔ No Compromise On Strength</li>
            <li>✔ Confidence For 100+ Years of Structure Life</li>
          </ul>
        </div>
      </section>

      {/* ⚪ CTA */}
      <section className="bg-white text-center py-16 border-t">
        <h2 className="text-4xl font-bold mb-4 text-black">
          KAAVERI TMT
        </h2>

        <p className="text-lg mb-6 text-gray-700">
          Tested. Certified. Trusted.
        </p>

        <p className="text-xl mb-2 text-black">
          For Free Test call us @
        </p>

        <p className="text-3xl font-bold text-red-600">
          +91 88558 24555
        </p>

        <Link
          href="/contact-us"
          className="inline-block mt-8 px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold"
        >
          Contact Now
        </Link>
      </section>

    </main>
  );
}

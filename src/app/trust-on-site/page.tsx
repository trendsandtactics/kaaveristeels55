"use client";

import React from "react";
import Link from "next/link";

export default function TrustOnSitePage() {
  return (
    <main className="flex flex-col min-h-screen w-full bg-white overflow-hidden">

      {/* 🌟 HERO */}
      <section className="w-full bg-yellow-400 py-24 md:py-32 px-6 text-center">
        <div className="max-w-5xl mx-auto">

          <p className="uppercase tracking-widest text-sm mb-4 text-black font-semibold">
            KAAVERI STEELS
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight">
            Trust On Site
          </h1>

          <p className="text-base md:text-lg text-black/80 max-w-2xl mx-auto">
            We don’t just promise quality — we prove it with live testing,
            transparency, and engineering excellence.
          </p>

        </div>
      </section>


      {/* 🚚 VEHICLE SECTION WITH CUSTOM BACKGROUND */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/your-bg-image.png" // 🔁 replace with your image
            alt="background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center text-white">

          <h2 className="text-2xl md:text-3xl font-bold mb-12">
            On-Site Testing Experience
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              "🚚 Mobile Testing Vehicle",
              "⚡ Instant Test Results",
              "👁️ Live Testing",
              "🛡️ 100+ Years Strength",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/90 text-black shadow-lg rounded-xl px-5 py-4 text-center font-medium border hover:scale-105 transition"
              >
                {item}
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* 🔴 FEATURES */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

          <div className="bg-red-600 text-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-xl md:text-2xl font-bold mb-6">
              We Don’t Just Promise Quality
            </h2>

            <ul className="space-y-3 text-sm md:text-base">
              <li>✔ Fully Equipped Mobile Testing Vehicle</li>
              <li>✔ Instant Test Result</li>
              <li>✔ Live Testing with Engineers & Builders</li>
            </ul>
          </div>

          <div className="bg-red-600 text-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-xl md:text-2xl font-bold mb-6">
              Why This Changes Everything
            </h2>

            <ul className="space-y-3 text-sm md:text-base">
              <li>✔ No Blind Trust</li>
              <li>✔ Complete Transparency</li>
              <li>✔ No Compromise On Strength</li>
              <li>✔ Confidence for 100+ Years</li>
            </ul>
          </div>

        </div>
      </section>


      {/* ⚪ CTA */}
      <section className="bg-gray-50 text-center py-16 px-6 border-t">
        <div className="max-w-xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            KAAVERI TMT
          </h2>

          <p className="text-base md:text-lg mb-6 text-gray-700">
            Tested. Certified. Trusted.
          </p>

          <p className="text-lg text-black mb-2">
            For Free Test call us
          </p>

          <p className="text-2xl md:text-3xl font-bold text-red-600">
            +91 88558 24555
          </p>

          <Link
            href="/contact-us"
            className="inline-block mt-8 px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold transition"
          >
            Contact Now
          </Link>

        </div>
      </section>

    </main>
  );
}

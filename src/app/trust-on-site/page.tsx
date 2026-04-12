"use client";

import React from "react";
import Link from "next/link";

export default function TrustOnSitePage() {
  return (
    <main className="w-full bg-[#f3f4f6]">

      {/* 🌟 HERO SECTION */}
    <section className="relative pt-28 md:pt-32 pb-20 overflow-hidden">

  {/* 🌆 Background Image */}
  <div className="absolute inset-0">
    <img
      src="/hero-bg.jpg"   // your background image
      alt="background"
      className="w-full h-full object-cover"
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

    {/* 🚚 VEHICLE HERO */}
    <div className="relative flex justify-center mb-12">
      <img
        src="/vehicle.png"
        alt="vehicle"
        className="w-full max-w-5xl object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
      />
    </div>

    {/* 🪨 STEEL STRIP */}
    <div className="w-full max-w-4xl mx-auto bg-gray-900 text-white py-3 text-sm md:text-base font-semibold tracking-widest rounded">
      KAAVERI TMT — 550D
    </div>

  </div>
</section>


      {/* 🔴 CONTENT SECTION */}
      <section className="px-6 md:px-20 py-16">

        {/* HEADERS */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">

          <div className="bg-red-700 text-white text-center py-4 rounded-md font-bold text-lg">
            “We Don’t Just Promise Quality – We Prove It.”
          </div>

          <div className="bg-red-700 text-white text-center py-4 rounded-md font-bold text-lg">
            Why This Changes Everything
          </div>

        </div>

        {/* LIST */}
        <div className="grid md:grid-cols-2 gap-10 text-gray-800">

          <ul className="space-y-4">
            <li>▶ Fully Equipped Mobile Testing Vehicle</li>
            <li>▶ Instant Test Result</li>
            <li>▶ Live Testing in Front of Engineers & Builders</li>
          </ul>

          <ul className="space-y-4">
            <li>▶ No Blind Trust</li>
            <li>▶ Complete Transparency</li>
            <li>▶ No Compromise On Strength</li>
            <li>▶ Confidence For 100+ Years of Structure Life</li>
          </ul>

        </div>

      </section>


      {/* 📞 CTA */}
      <section className="text-center py-16 px-6 bg-white border-t">

        <h2 className="text-4xl font-extrabold text-red-700 mb-2">
          KAAVERI TMT
        </h2>

        <p className="text-gray-600 mb-4">
          Tested. Certified. Trusted.
        </p>

        <p className="text-gray-700 mb-2">
          For Free Test call us @
        </p>

        <p className="text-3xl font-bold text-red-700 mb-6">
          +91 88558 24555
        </p>

        <Link
          href="/contact-us"
          className="inline-block bg-red-700 hover:bg-red-800 text-white px-8 py-3 rounded-md font-semibold transition"
        >
          Contact Now
        </Link>

      </section>

    </main>
  );
}

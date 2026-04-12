"use client";

import React from "react";
import Link from "next/link";

export default function TrustOnSitePage() {
  return (
    <main className="w-full bg-[#f3f4f6]">

      {/* 🔝 TOP STRIP */}
      <section className="w-full bg-white border-b px-6 py-4 flex flex-col md:flex-row justify-between items-center">
        
        <div className="text-left">
          <h1 className="text-xl font-bold text-red-700">KAAVERI</h1>
          <p className="text-sm text-gray-600">TMT Bars & Structural</p>
        </div>

        <h2 className="text-lg font-semibold text-gray-800 my-2 md:my-0">
          TRUST ON SITE
        </h2>

        <p className="text-sm text-gray-600">
          www.kaaveristeels.co.in
        </p>
      </section>


      {/* 🔴 FEATURE HEADERS */}
      <section className="px-6 md:px-20 py-10 grid md:grid-cols-2 gap-6">

        <div className="bg-red-700 text-white text-center py-4 rounded-md font-bold">
          “We Don’t Just Promise Quality – We Prove It.”
        </div>

        <div className="bg-red-700 text-white text-center py-4 rounded-md font-bold">
          Why This Changes Everything
        </div>

      </section>


      {/* 📋 FEATURES LIST */}
      <section className="px-6 md:px-20 pb-16 grid md:grid-cols-2 gap-10 text-gray-800">

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

      </section>


      {/* 🏗 CENTER TITLE */}
      <section className="text-center py-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-red-700">
          KAAVERI TMT
        </h2>
        <p className="text-gray-600 mt-2">
          Tested. Certified. Trusted.
        </p>
      </section>


      {/* 🚚 VEHICLE IMAGE */}
      <section className="flex justify-center px-6 py-10">
        <img
          src="/vehicle.png"
          alt="vehicle"
          className="w-full max-w-5xl object-contain"
        />
      </section>


      {/* 🪨 STEEL STRIP */}
      <section className="w-full bg-gray-800 text-white text-center py-4 font-semibold tracking-widest">
        KAAVERI TMT — 550D
      </section>


      {/* 📞 CONTACT */}
      <section className="text-center py-12 px-6">

        <p className="text-gray-700 mb-2">
          For Free Test call us @
        </p>

        <p className="text-3xl md:text-4xl font-bold text-red-700 mb-6">
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

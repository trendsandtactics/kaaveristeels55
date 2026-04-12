"use client";

import React from "react";
import Link from "next/link";

export default function TrustOnSitePage() {
  return (
    <main className="bg-[#f5f5f5] py-10 px-4">

      <div className="max-w-6xl mx-auto bg-white shadow-2xl border rounded-lg overflow-hidden">

        {/* 🔝 TOP HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-center p-6 border-b">

          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold text-red-700">KAAVERI</h1>
            <p className="text-sm text-gray-600">TMT Bars & Structural</p>
          </div>

          <div className="text-center my-4 md:my-0">
            <h2 className="text-xl font-bold text-black">TRUST ON SITE</h2>
          </div>

          <div className="text-center md:text-right text-sm text-gray-600">
            <p>www.kaaveristeels.co.in</p>
          </div>

        </div>


        {/* 🔴 FEATURE HEADINGS */}
        <div className="grid md:grid-cols-2 gap-6 p-6">

          <div className="bg-red-700 text-white text-center py-4 px-4 rounded-md font-bold text-lg">
            “We Don’t Just Promise Quality – We Prove It.”
          </div>

          <div className="bg-red-700 text-white text-center py-4 px-4 rounded-md font-bold text-lg">
            Why This Changes Everything
          </div>

        </div>


        {/* 📋 FEATURES LIST */}
        <div className="grid md:grid-cols-2 gap-6 px-8 pb-10">

          <ul className="space-y-4 text-gray-800">
            <li>▶ Fully Equipped Mobile Testing Vehicle</li>
            <li>▶ Instant Test Result</li>
            <li>▶ Live Testing in Front of Engineers & Builders</li>
          </ul>

          <ul className="space-y-4 text-gray-800">
            <li>▶ No Blind Trust</li>
            <li>▶ Complete Transparency</li>
            <li>▶ No Compromise On Strength</li>
            <li>▶ Confidence For 100+ Years of Structure Life</li>
          </ul>

        </div>


        {/* 🏗 CENTER TITLE */}
        <div className="text-center py-6">
          <h2 className="text-4xl font-extrabold text-red-700">
            KAAVERI TMT
          </h2>
          <p className="text-gray-700 mt-2">
            Tested. Certified. Trusted.
          </p>
        </div>


        {/* 🚚 VEHICLE IMAGE */}
        <div className="flex justify-center px-6">
          <img
            src="/vehicle.png"
            alt="vehicle"
            className="w-full max-w-4xl object-contain"
          />
        </div>


        {/* 🪨 STEEL BAR STRIP */}
        <div className="mt-6 bg-gray-800 text-white text-center py-3 font-semibold tracking-widest">
          KAAVERI TMT — 550D
        </div>


        {/* 📞 CONTACT */}
        <div className="text-center py-8">
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
        </div>

      </div>

    </main>
  );
}

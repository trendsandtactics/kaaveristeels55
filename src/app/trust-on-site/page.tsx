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
      src="/bg1.png"   // your background image
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

  </div>
</section>


      {/* 🔴 CONTENT SECTION */}
     <section className="px-6 md:px-20 py-16 bg-gray-50">
  
  <div className="max-w-7xl mx-auto">

    {/* HEADER CARDS */}
    <div className="grid md:grid-cols-2 gap-6 mb-12">

      <div className="bg-gradient-to-r from-red-700 to-red-500 text-white text-center py-5 rounded-xl font-semibold text-lg shadow-md">
        “We Don’t Just Promise Quality – We Prove It.”
      </div>

      <div className="bg-gradient-to-r from-red-700 to-red-500 text-white text-center py-5 rounded-xl font-semibold text-lg shadow-md">
        Why This Changes Everything
      </div>

    </div>

    {/* CONTENT */}
    <div className="grid md:grid-cols-2 gap-8">

      {/* LEFT CARD */}
      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300">
        <ul className="space-y-5">

          {[
            "Fully Equipped Mobile Testing Vehicle",
            "Instant Test Result",
            "Live Testing in Front of Engineers & Builders"
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3 group">
              
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white transition">
                ✓
              </span>

              <p className="text-gray-700 group-hover:text-black transition">
                {item}
              </p>

            </li>
          ))}

        </ul>
      </div>

      {/* RIGHT CARD */}
      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300">
        <ul className="space-y-5">

          {[
            "No Blind Trust",
            "Complete Transparency",
            "No Compromise On Strength",
            "Confidence For 100+ Years of Structure Life"
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3 group">
              
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white transition">
                ✓
              </span>

              <p className="text-gray-700 group-hover:text-black transition">
                {item}
              </p>

            </li>
          ))}

        </ul>
      </div>

    </div>

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

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

    <div className="flex justify-center mt-10">
  <button
    className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 md:py-4 text-sm md:text-base font-semibold tracking-wide rounded-lg shadow-md hover:shadow-lg transition duration-300"
  >
    Book an Appointment
  </button>
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
     <section className="relative py-16 px-6 md:px-12 overflow-hidden">

  {/* Background Gradient */}
  <div className="absolute inset-0 bg-gradient-to-r from-red-700 via-red-600 to-red-500"></div>

  {/* Subtle Pattern */}
  <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')]"></div>

  <div className="relative max-w-5xl mx-auto text-center text-white">

    {/* Heading */}
    <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-wide">
      KAAVERI TMT
    </h2>

    {/* Tagline */}
    <p className="text-white/90 text-base md:text-lg mb-6">
      Tested. Certified. Trusted.
    </p>

    {/* Divider */}
    <div className="w-16 h-1 bg-white mx-auto mb-6 rounded-full"></div>

    {/* Call Text */}
    <p className="text-white/90 mb-2 text-sm md:text-base">
      For Free Test, Call Us
    </p>

    {/* Phone */}
    <p className="text-2xl md:text-4xl font-bold mb-8 tracking-wide">
      +91 88558 24555
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">

      <Link
        href="/contact-us"
        className="bg-white text-red-700 px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg hover:bg-gray-100 transition"
      >
        Contact Now
      </Link>

      <a
        href="tel:+918855824555"
        className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-700 transition"
      >
        Call Now
      </a>

    </div>

  </div>

</section>

    </main>
  );
}

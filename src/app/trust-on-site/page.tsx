"use client";

import React from "react";
import Image from "next/image";

export default function TrustOnSitePage() {
  return (
    <main className="w-full bg-[#f3f4f6]">

      {/* 🌟 HERO SECTION */}
    <section className="relative pt-28 md:pt-32 pb-20 overflow-hidden">

  {/* 🌆 Background Image */}
  <div className="absolute inset-0">
    <Image
      src="/bg1.png"   // your background image
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

    {/* 🚚 VEHICLE HERO */}
    <div className="relative flex justify-center mb-12">
      <Image
        src="/vehicle.png"
        alt="vehicle"
        width={1024}
        height={500}
        priority
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
  <section className="relative py-16 px-4 md:px-10 overflow-hidden">

  {/* Background Gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-red-800 via-red-700 to-red-600"></div>

  {/* Decorative Glow */}
  <div className="absolute -top-20 -left-20 w-72 h-72 bg-red-500 opacity-30 blur-3xl rounded-full"></div>
  <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-yellow-400 opacity-20 blur-3xl rounded-full"></div>

  {/* Content Wrapper */}
  <div className="relative max-w-6xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10">

    {/* Left Content */}
    <div className="text-white max-w-lg">

      <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
        Don’t Take Chances <br /> With Your Foundation.
      </h2>

      <p className="text-white/80 text-sm md:text-base mb-6">
        Book a <span className="font-semibold text-white">Free Test</span> of your current steel supply.
        Our Mobile Testing Vehicle will arrive within 48 hours.
      </p>

      {/* Phone CTA */}
      <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/10 w-fit">
        <div className="w-12 h-12 flex items-center justify-center bg-yellow-400 text-red-800 rounded-lg text-xl font-bold">
          ☎
        </div>
        <div>
          <p className="text-xs text-white/70 tracking-wide">
            CALL NOW FOR FREE TEST
          </p>
          <p className="text-xl md:text-2xl font-bold tracking-wide">
            +91 88558 24555
          </p>
        </div>
      </div>

    </div>

    {/* Right Form */}
    <div className="w-full max-w-md bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-xl">

      <div className="flex flex-col gap-4">

        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-4 py-3 rounded-md bg-white/90 text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full px-4 py-3 rounded-md bg-white/90 text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <input
          type="text"
          placeholder="Site Location"
          className="w-full px-4 py-3 rounded-md bg-white/90 text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <button className="w-full bg-yellow-400 hover:bg-yellow-300 text-red-900 font-semibold py-3 rounded-md tracking-wide transition duration-300 shadow-md hover:shadow-lg">
          BOOK FREE ON-SITE TEST
        </button>

      </div>

    </div>

  </div>

</section>

    </main>
  );
}

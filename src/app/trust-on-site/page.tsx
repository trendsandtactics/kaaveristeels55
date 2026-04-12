"use client";

import React from "react";
import Link from "next/link";

export default function TrustOnSitePage() {
  return (
    <main className="flex flex-col min-h-screen w-full bg-white overflow-hidden">

      {/* 🌟 HERO */}
      <section className="relative w-full py-28 md:py-36 px-6 text-center bg-gradient-to-br from-yellow-400 to-yellow-500">

        <div className="max-w-5xl mx-auto">
          <p className="uppercase tracking-widest text-sm mb-4 text-black/70 font-semibold">
            KAAVERI STEELS
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold text-black mb-6 leading-tight">
            Trust On Site
          </h1>

          <p className="text-lg md:text-xl text-black/80 max-w-2xl mx-auto">
            We don’t just promise quality — we prove it with live testing,
            transparency, and engineering excellence.
          </p>
        </div>
      </section>


      {/* 🚚 EXPERIENCE SECTION */}
      <section className="relative py-28 px-6 bg-gray-50">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-14 text-gray-900">
            On-Site Testing Experience
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              { icon: "🚚", text: "Mobile Testing Vehicle" },
              { icon: "⚡", text: "Instant Test Results" },
              { icon: "👁️", text: "Live Testing" },
              { icon: "🛡️", text: "100+ Years Strength" },
            ].map((item, i) => (
              <div
                key={i}
                className="backdrop-blur-lg bg-white/70 border border-gray-200 shadow-xl rounded-2xl p-6 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <p className="font-semibold text-gray-800">{item.text}</p>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* 🔴 FEATURES */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          <div className="bg-gradient-to-br from-red-600 to-red-700 text-white rounded-3xl p-10 shadow-xl hover:scale-[1.02] transition">
            <h2 className="text-2xl font-bold mb-6">
              We Don’t Just Promise Quality
            </h2>

            <ul className="space-y-4 text-base">
              <li>✔ Fully Equipped Mobile Testing Vehicle</li>
              <li>✔ Instant Test Result</li>
              <li>✔ Live Testing with Engineers & Builders</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-red-600 to-red-700 text-white rounded-3xl p-10 shadow-xl hover:scale-[1.02] transition">
            <h2 className="text-2xl font-bold mb-6">
              Why This Changes Everything
            </h2>

            <ul className="space-y-4 text-base">
              <li>✔ No Blind Trust</li>
              <li>✔ Complete Transparency</li>
              <li>✔ No Compromise On Strength</li>
              <li>✔ Confidence for 100+ Years</li>
            </ul>
          </div>

        </div>
      </section>


      {/* 🚀 CTA PREMIUM */}
      <section className="relative bg-gray-100 py-24 px-6 text-center overflow-hidden">

        <div className="max-w-3xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
            KAAVERI TMT
          </h2>

          <p className="text-lg text-gray-600 mb-6">
            Tested. Certified. Trusted.
          </p>

          <p className="text-lg text-gray-800 mb-2">
            For Free Test call us
          </p>

          <p className="text-3xl font-bold text-red-600 mb-10">
            +91 88558 24555
          </p>

          {/* 🚚 VEHICLE IMAGE (HERO STYLE) */}
          <div className="relative flex justify-center mb-10">
            <img
              src="/vehicle.png"
              alt="vehicle"
              className="w-full max-w-2xl drop-shadow-2xl hover:scale-105 transition duration-500"
            />
          </div>

          <Link
            href="/contact-us"
            className="inline-block px-10 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition"
          >
            Contact Now
          </Link>

        </div>

        {/* subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-200/30 blur-3xl rounded-full"></div>
      </section>

    </main>
  );
}

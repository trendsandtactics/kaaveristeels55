"use client";

import React from "react";
import Link from "next/link";

export default function TrustOnSitePage() {
  return (
    <main className="flex flex-col w-full bg-black text-white overflow-hidden">

      {/* 🌟 HERO – CINEMATIC */}
      <section className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden">

        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 opacity-95" />

        {/* Noise / texture layer */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-[url('/noise.png')]" />

        <div className="relative z-10 px-6">

          <p className="uppercase tracking-[6px] text-sm mb-6 text-black/70">
            KAAVERI STEELS
          </p>

          <h1 className="text-6xl md:text-8xl font-extrabold text-black leading-tight mb-6">
            Trust On Site
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-black/80">
            We don’t just promise quality — we prove it with live testing,
            transparency, and engineering excellence.
          </p>

        </div>

        {/* bottom fade */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />
      </section>


      {/* 🚚 EXPERIENCE – FLOATING CARDS */}
      <section className="relative py-32 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl md:text-5xl font-bold mb-20">
            On-Site Testing Experience
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {[
              "🚚 Mobile Testing Vehicle",
              "⚡ Instant Test Results",
              "👁️ Live Testing",
              "🛡️ 100+ Years Strength",
            ].map((item, i) => (
              <div
                key={i}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 transition duration-500 hover:-translate-y-3 hover:scale-105"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition" />

                <p className="relative z-10 text-lg font-medium">
                  {item}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* 🔴 FEATURES – SPLIT DESIGN */}
      <section className="relative py-32 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          {[{
            title: "We Don’t Just Promise Quality",
            list: [
              "Fully Equipped Mobile Testing Vehicle",
              "Instant Test Result",
              "Live Testing with Engineers & Builders"
            ]
          },
          {
            title: "Why This Changes Everything",
            list: [
              "No Blind Trust",
              "Complete Transparency",
              "No Compromise On Strength",
              "Confidence for 100+ Years"
            ]
          }].map((block, i) => (

            <div
              key={i}
              className="relative p-10 rounded-3xl bg-gradient-to-br from-red-600 to-red-700 shadow-2xl hover:scale-[1.03] transition duration-500"
            >
              <h2 className="text-2xl font-bold mb-6">
                {block.title}
              </h2>

              <ul className="space-y-4 text-base">
                {block.list.map((item, idx) => (
                  <li key={idx}>✔ {item}</li>
                ))}
              </ul>

              {/* glow */}
              <div className="absolute -inset-1 bg-red-500 blur-2xl opacity-20 rounded-3xl"></div>
            </div>

          ))}

        </div>
      </section>


      {/* 🚀 CTA – HERO STYLE */}
      <section className="relative py-36 px-6 text-center overflow-hidden">

        {/* glowing background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-red-500/20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />

        <div className="relative z-10 max-w-3xl mx-auto">

          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            KAAVERI TMT
          </h2>

          <p className="text-lg text-gray-300 mb-6">
            Tested. Certified. Trusted.
          </p>

          <p className="text-gray-400 mb-2">
            For Free Test call us
          </p>

          <p className="text-3xl font-bold text-red-500 mb-12">
            +91 88558 24555
          </p>

          {/* 🚚 FLOATING VEHICLE */}
          <div className="flex justify-center mb-12">
            <img
              src="/vehicle.png"
              alt="vehicle"
              className="max-w-2xl w-full drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)] hover:scale-105 transition duration-500"
            />
          </div>

          <Link
            href="/contact-us"
            className="inline-block px-12 py-5 bg-red-600 hover:bg-red-700 text-white rounded-full text-lg font-bold shadow-2xl hover:scale-105 transition"
          >
            Contact Now
          </Link>

        </div>
      </section>

    </main>
  );
}

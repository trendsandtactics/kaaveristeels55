"use client";

import React, { useRef } from "react";
import Link from "next/link";

export default function TrustOnSitePage() {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="w-full bg-[#f3f4f6]">

      {/* 🌟 HERO SECTION */}
      <section className="relative pt-28 md:pt-32 pb-20 overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/bg1.png"
            alt="background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

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

          {/* Vehicle */}
          <div className="flex justify-center mb-12">
            <img
              src="/vehicle.png"
              alt="vehicle"
              className="w-full max-w-5xl object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
            />
          </div>

          {/* CTA */}
          <button
            onClick={scrollToForm}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 md:py-4 text-sm md:text-base font-semibold rounded-lg shadow-md hover:shadow-lg transition"
          >
            Book an Appointment
          </button>

        </div>
      </section>


      {/* 🔴 CONTENT SECTION */}
      <section className="px-6 md:px-20 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-2 gap-6 mb-12">

            <div className="bg-gradient-to-r from-red-700 to-red-500 text-white text-center py-5 rounded-xl font-semibold text-lg shadow-md">
              “We Don’t Just Promise Quality – We Prove It.”
            </div>

            <div className="bg-gradient-to-r from-red-700 to-red-500 text-white text-center py-5 rounded-xl font-semibold text-lg shadow-md">
              Why This Changes Everything
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* LEFT */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <ul className="space-y-5">
                {[
                  "Fully Equipped Mobile Testing Vehicle",
                  "Instant Test Result",
                  "Live Testing in Front of Engineers & Builders"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-red-100 text-red-600">
                      ✓
                    </span>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <ul className="space-y-5">
                {[
                  "No Blind Trust",
                  "Complete Transparency",
                  "No Compromise On Strength",
                  "Confidence For 100+ Years of Structure Life"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-red-100 text-red-600">
                      ✓
                    </span>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>


      {/* 📞 CTA FORM SECTION */}
      <section
        ref={formRef}
        className="py-16 px-6 md:px-12 bg-gray-100"
      >
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-red-800 to-red-600 rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div className="text-white">

            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
              Don't Take Chances <br /> With Your Foundation.
            </h2>

            <p className="text-white/90 mb-8">
              Book a <span className="font-semibold">Free Test</span> of your current steel supply.
              <br />
              Our Mobile Testing Vehicle will arrive within 48 hours.
            </p>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/10 border border-white/20">
                📞
              </div>

              <div>
                <p className="text-xs tracking-widest text-white/70">
                  CALL NOW FOR FREE TEST
                </p>
                <p className="text-xl md:text-2xl font-bold">
                  +91 88558 24555
                </p>
              </div>
            </div>

          </div>

          {/* FORM */}
          <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 shadow-lg">

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-md bg-white text-gray-800 outline-none"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-md bg-white text-gray-800 outline-none"
              />

              <input
                type="text"
                placeholder="Site Location"
                className="w-full px-4 py-3 rounded-md bg-white text-gray-800 outline-none"
              />

              <button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-md tracking-wide transition"
              >
                BOOK FREE ON-SITE TEST
              </button>

            </form>

          </div>

        </div>
      </section>

    </main>
  );
}

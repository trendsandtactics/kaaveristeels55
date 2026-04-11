import React from "react";
import Link from "next/link";

export default function TrustOnSitePage() {
  return (
    <main className="flex flex-col min-h-screen w-full pt-24 bg-white">

      {/* 🌟 HERO */}
      <section className="relative w-full py-28 overflow-hidden">

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500" />

        {/* Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4)_0%,transparent_60%)]" />

        <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
          <p className="uppercase tracking-widest text-sm mb-4 text-black font-semibold">
            KAAVERI STEELS
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-black mb-6">
            Trust On Site
          </h1>

          <p className="text-lg text-black/80 max-w-2xl mx-auto">
            We Don’t Just Promise Quality – We Prove It with live testing,
            transparency, and engineering excellence.
          </p>
        </div>
      </section>

      {/* 🚚 VEHICLE SECTION */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-yellow-100 via-white to-white">

        {/* Glow */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-[700px] h-[700px] bg-yellow-300/30 blur-[140px] rounded-full" />
        </div>

        <div className="relative max-w-6xl mx-auto flex items-center justify-center">

          <div className="relative flex items-center justify-center">

            {/* VEHICLE */}
            <img
              src="/vehicle.png"
              alt="vehicle"
              className="w-[720px] relative z-10 drop-shadow-[0_40px_60px_rgba(0,0,0,0.35)]"
            />

            {/* SHADOW */}
            <div className="absolute bottom-[-20px] w-[500px] h-[60px] bg-black/20 blur-2xl rounded-full" />

            {/* LEFT TOP */}
            <div className="absolute -left-10 top-10 group">
              <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-xl px-5 py-3 border hover:scale-105 transition">
                🚚 Mobile Testing Vehicle
              </div>
              <div className="w-16 h-[2px] bg-gray-300 ml-auto mt-1" />
            </div>

            {/* LEFT BOTTOM */}
            <div className="absolute -left-5 bottom-10 group">
              <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-xl px-5 py-3 border hover:scale-105 transition">
                ⚡ Instant Test Results
              </div>
              <div className="w-20 h-[2px] bg-gray-300 ml-auto mt-1" />
            </div>

            {/* RIGHT TOP */}
            <div className="absolute -right-10 top-10 group">
              <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-xl px-5 py-3 border hover:scale-105 transition">
                👁️ Live Testing
              </div>
              <div className="w-16 h-[2px] bg-gray-300 mt-1" />
            </div>

            {/* RIGHT BOTTOM */}
            <div className="absolute -right-5 bottom-10 group">
              <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-xl px-5 py-3 border hover:scale-105 transition">
                🛡️ 100+ Years Strength
              </div>
              <div className="w-20 h-[2px] bg-gray-300 mt-1" />
            </div>

          </div>
        </div>
      </section>

      {/* 🔴 FEATURES */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">

        <div className="bg-red-600 text-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">
            We Don’t Just Promise Quality
          </h2>

          <ul className="space-y-4 text-sm">
            <li>✔ Fully Equipped Mobile Testing Vehicle</li>
            <li>✔ Instant Test Result</li>
            <li>✔ Live Testing in Front of Engineers & Builders</li>
          </ul>
        </div>

        <div className="bg-red-600 text-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">
            Why This Changes Everything
          </h2>

          <ul className="space-y-4 text-sm">
            <li>✔ No Blind Trust</li>
            <li>✔ Complete Transparency</li>
            <li>✔ No Compromise On Strength</li>
            <li>✔ Confidence For 100+ Years of Structure Life</li>
          </ul>
        </div>
      </section>

      {/* ⚪ CTA */}
      <section className="bg-white text-center py-16 border-t">
        <h2 className="text-4xl font-bold mb-4 text-black">KAAVERI TMT</h2>

        <p className="text-lg mb-6 text-gray-700">
          Tested. Certified. Trusted.
        </p>

        <p className="text-xl mb-2 text-black">
          For Free Test call us @
        </p>

        <p className="text-3xl font-bold text-red-600">
          +91 88558 24555
        </p>

        <Link
          href="/contact-us"
          className="inline-block mt-8 px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold"
        >
          Contact Now
        </Link>
      </section>

    </main>
  );
}

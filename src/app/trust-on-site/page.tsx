import React from "react";
import Link from "next/link";
import { Truck, Zap, Eye, ShieldCheck } from "lucide-react";

export default function TrustOnSitePage() {
  return (
    <main className="flex flex-col min-h-screen w-full pt-24 bg-white">

      {/* 🌟 PREMIUM HERO */}
      <section className="relative w-full py-28 overflow-hidden">

        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500" />

        {/* Soft Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4)_0%,transparent_60%)]" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
          
          <p className="uppercase tracking-widest text-sm mb-4 text-black font-semibold">
            Get In Touch
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

      {/* 🚚 VEHICLE WITH FLOATING POINTS */}
     <section className="relative py-28 overflow-hidden bg-gradient-to-b from-yellow-100 via-white to-white">

  {/* Glow Background */}
  <div className="absolute inset-0 flex justify-center">
    <div className="w-[600px] h-[600px] bg-yellow-300 opacity-30 blur-[120px] rounded-full" />
  </div>

  <div className="relative max-w-6xl mx-auto flex items-center justify-center">

    {/* 🚚 VEHICLE */}
    <img
      src="/vehicle.png"
      alt="vehicle"
      className="w-[750px] relative z-10 drop-shadow-[0_30px_40px_rgba(0,0,0,0.25)]"
    />

    {/* 🔴 FLOATING CARDS */}

    {/* LEFT TOP */}
    <div className="absolute left-0 top-16 backdrop-blur-lg bg-white/80 shadow-xl rounded-xl px-5 py-3 border border-white/50">
      <div className="flex items-center gap-2">
        <span className="text-red-600">🚚</span>
        <p className="text-sm font-semibold">
          Mobile Testing Vehicle
        </p>
      </div>
    </div>

    {/* LEFT BOTTOM */}
    <div className="absolute left-10 bottom-10 backdrop-blur-lg bg-white/80 shadow-xl rounded-xl px-5 py-3 border border-white/50">
      <div className="flex items-center gap-2">
        <span className="text-red-600">⚡</span>
        <p className="text-sm font-semibold">
          Instant Test Results
        </p>
      </div>
    </div>

    {/* RIGHT TOP */}
    <div className="absolute right-0 top-16 backdrop-blur-lg bg-white/80 shadow-xl rounded-xl px-5 py-3 border border-white/50">
      <div className="flex items-center gap-2">
        <span className="text-red-600">👁️</span>
        <p className="text-sm font-semibold">
          Live Testing
        </p>
      </div>
    </div>

    {/* RIGHT BOTTOM */}
    <div className="absolute right-10 bottom-10 backdrop-blur-lg bg-white/80 shadow-xl rounded-xl px-5 py-3 border border-white/50">
      <div className="flex items-center gap-2">
        <span className="text-red-600">🛡️</span>
        <p className="text-sm font-semibold">
          100+ Years Strength
        </p>
      </div>
    </div>

  </div>
</section>

      {/* 🔴 FEATURES (UNCHANGED CLEAN STYLE) */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">

        <div className="bg-red-600 text-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">
            We Don’t Just Promise Quality
          </h2>

          <ul className="space-y-4">
            <li>✔ Fully Equipped Mobile Testing Vehicle</li>
            <li>✔ Instant Test Result</li>
            <li>✔ Live Testing in Front of Engineers & Builders</li>
          </ul>
        </div>

        <div className="bg-red-600 text-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">
            Why This Changes Everything
          </h2>

          <ul className="space-y-4">
            <li>✔ No Blind Trust</li>
            <li>✔ Complete Transparency</li>
            <li>✔ No Compromise On Strength</li>
            <li>✔ Confidence For 100+ Years of Structure Life</li>
          </ul>
        </div>
      </section>

      {/* ⚪ CLEAN CTA */}
      <section className="bg-white text-center py-16 border-t">
        <h2 className="text-4xl font-bold mb-4 text-black">KAAVERI TMT</h2>
        <p className="text-lg mb-6 text-gray-700">
          Tested. Certified. Trusted.
        </p>

        <p className="text-xl mb-2 text-black">For Free Test call us @</p>
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

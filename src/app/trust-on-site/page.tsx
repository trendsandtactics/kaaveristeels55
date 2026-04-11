import React from "react";
import Link from "next/link";
import { Truck, Zap, Eye, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Trust On Site | KAAVERI Steels",
  description:
    "We don’t just promise quality – we prove it with live testing and complete transparency.",
};

const leftFeatures = [
  {
    icon: <Truck className="w-8 h-8 text-red-600" />,
    title: "Fully Equipped Mobile Testing Vehicle",
  },
  {
    icon: <Zap className="w-8 h-8 text-red-600" />,
    title: "Instant Test Result",
  },
  {
    icon: <Eye className="w-8 h-8 text-red-600" />,
    title: "Live Testing in Front of Engineers & Builders",
  },
];

const rightFeatures = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-red-600" />,
    title: "No Blind Trust",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-red-600" />,
    title: "Complete Transparency",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-red-600" />,
    title: "No Compromise On Strength",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-red-600" />,
    title: "Confidence For 100+ Years of Structure Life",
  },
];

export default function TrustOnSitePage() {
  return (
    <main className="flex flex-col min-h-screen w-full pt-24 bg-gray-50">

      {/* 🔶 HERO SECTION */}
      <div className="relative w-full py-28 text-center overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/construction-bg.jpg" // 👉 replace with your image
            alt="construction"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/90 via-yellow-400/90 to-yellow-500/90" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
            KAAVERI TRUST ON SITE
          </h1>

          <p className="text-xl font-semibold text-black">
            “We Don’t Just Promise Quality – We Prove It.”
          </p>
        </div>
      </div>

      {/* 🚚 VEHICLE IMAGE SECTION (YOU ADD IMAGE HERE) */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6 text-black">
          On-Site Testing Vehicle
        </h2>

        {/* Replace below with your vehicle image */}
        <div className="max-w-5xl mx-auto">
          <img
            src="/vehicle.png" // 👉 your vehicle image
            alt="testing vehicle"
            className="w-full object-contain"
          />
        </div>
      </section>

      {/* 🔴 FEATURES */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">

        {/* Left */}
        <div className="bg-red-600 text-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">
            We Don’t Just Promise Quality
          </h2>

          <div className="space-y-5">
            {leftFeatures.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                {item.icon}
                <p className="font-medium">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="bg-red-600 text-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">
            Why This Changes Everything
          </h2>

          <div className="space-y-5">
            {rightFeatures.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                {item.icon}
                <p className="font-medium">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⚪ CLEAN CTA SECTION (NO BLACK) */}
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

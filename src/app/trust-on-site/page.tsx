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

      {/* Hero Section */}
      <div className="w-full py-20 bg-white text-center border-b">
        <h1 className="text-4xl md:text-6xl font-bold text-red-700 mb-4">
          KAAVERI TRUST ON SITE
        </h1>

        <p className="text-xl font-semibold text-black">
          “We Don’t Just Promise Quality – We Prove It.”
        </p>
      </div>

      {/* Features Section */}
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

      {/* Bottom Banner */}
      <section className="bg-black text-white text-center py-16">
        <h2 className="text-4xl font-bold mb-4">KAAVERI TMT</h2>
        <p className="text-lg mb-6">Tested. Certified. Trusted.</p>

        <p className="text-xl mb-2">For Free Test call us @</p>
        <p className="text-3xl font-bold text-red-500">
          +91 88558 24555
        </p>

        <Link
          href="/contact-us"
          className="inline-block mt-8 px-8 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-bold"
        >
          Contact Now
        </Link>
      </section>
    </main>
  );
}

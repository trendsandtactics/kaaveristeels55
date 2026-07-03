"use client";

import {
  ShieldCheck,
  Microscope,
  Cog,
  Factory,
  Link2,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Cog,
    title: "GERMAN TECHNOLOGY",
    desc: "Technologically advanced German technology for high strength & long durability.",
  },
  {
    icon: Factory,
    title: "IN-HOUSE BILLET MANUFACTURING",
    desc: "Complete control from raw material selection to superior quality assurance.",
  },
  {
    icon: BarChart3,
    title: "AUTOMATED PRODUCTION",
    desc: "AI & CNC-controlled manufacturing ensures precision and consistency.",
  },
  {
    icon: Microscope,
    title: "ADVANCED TESTING",
    desc: "Multi-parameter testing at every stage of production.",
  },
  {
    icon: ShieldCheck,
    title: "BIS COMPLIANT MANUFACTURING",
    desc: "Precision manufacturing as per BIS standards.",
  },
  {
    icon: Link2,
    title: "CORROSION RESISTANCE",
    desc: "Excellent resistance to corrosion for durable structures.",
  },
];

const approvals = [
  "CHENNAI METRO RAIL",
  "TNPWD",
  "TNPHC",
  "TNHB",
  "TNEB",
  "PWD",
];

export default function FullWidthQualitySection() {
  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-white py-20 overflow-hidden">

      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center px-6 mb-14">
        <span className="uppercase tracking-[0.35em] text-red-700 text-sm font-semibold">
          Our Strength
        </span>

        <h2 className="mt-3 text-4xl md:text-6xl font-black font-serif text-gray-900">
          Engineered for Excellence
        </h2>

        <div className="w-20 h-1 bg-red-600 mx-auto mt-6 rounded-full" />
      </div>

      {/* Feature Cards */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">

          {features.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 duration-500 overflow-hidden relative"
            >
              {/* Top Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-red-50/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="relative p-8 flex flex-col items-center text-center">

                <div className="w-20 h-20 rounded-full bg-gradient-to-b from-white to-red-50 border border-red-100 shadow-md flex items-center justify-center mb-7 group-hover:scale-110 transition">
                  <item.icon
                    className="text-red-600"
                    size={32}
                  />
                </div>

                <h3 className="font-serif font-bold uppercase text-lg leading-tight text-gray-900 mb-5">
                  {item.title}
                </h3>

                <p className="text-gray-500 leading-8 text-sm">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Accent */}
              <div className="h-1.5 w-full bg-red-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </div>
          ))}

        </div>
      </div>

      {/* Trust Strip */}
      <div className="max-w-7xl mx-auto px-6 mt-10">

        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-md bg-white">

          <div className="flex flex-col lg:flex-row">

            {/* Left */}
            <div className="bg-gradient-to-r from-red-700 to-red-600 text-white lg:w-60 flex items-center justify-center p-8">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6" />
                <span className="uppercase tracking-wider font-bold">
                  Trusted By
                </span>
              </div>
            </div>

            {/* Logos */}
            <div className="flex-1 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6">

              {approvals.map((item) => (
                <div
                  key={item}
                  className="group border-l border-gray-100 p-6 flex flex-col items-center justify-center hover:bg-gray-50 transition"
                >
                  <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                    <ShieldCheck className="text-blue-600 w-6 h-6" />
                  </div>

                  <span className="font-semibold text-gray-800 text-xs tracking-wide text-center">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Right */}
            <div className="lg:w-80 bg-gradient-to-br from-gray-50 to-white border-l border-gray-100 flex items-center justify-center p-8">

              <div className="text-center">

                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="text-red-600" />
                </div>

                <h4 className="font-bold text-xl text-gray-900 leading-snug">
                  Trusted for Government,
                  <br />
                  Infrastructure,
                  <br />
                  Commercial &
                  <br />
                  Residential Projects
                </h4>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

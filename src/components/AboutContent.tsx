"use client";

import Image from "next/image";
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

// Updated to include image paths. 
// Note: Place these images in your Next.js /public directory (e.g., /public/logos/...)
const approvals = [
  { name: "CHENNAI METRO RAIL", logo: "/CMRL.png" },
  { name: "TNPWD", logo: "/TNPWD.png" },
  { name: "TNPHC", logo: "/TNPHC.png" },
  { name: "TNHB", logo: "/TNHB.png" },
  { name: "TNEB", logo: "/TNEB.png" },
];

export default function FullWidthQualitySection() {
  return (
    <section className="w-full bg-gradient-to-b from-white via-gray-50 to-white py-20 overflow-hidden">
      {/* Heading */}
      <div className="w-full text-center px-6 sm:px-8 lg:px-16 xl:px-24 mb-16">
        <span className="uppercase tracking-[0.35em] text-red-700 text-sm font-semibold">
          Our Strength
        </span>

        <h2 className="mt-4 text-4xl md:text-5xl xl:text-6xl font-black font-serif text-gray-900">
          Engineered for Excellence
        </h2>

        <div className="w-24 h-1 bg-red-600 mx-auto mt-6 rounded-full" />
      </div>

      {/* Feature Cards */}
      <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Hover Background */}
              <div className="absolute inset-0 bg-gradient-to-b from-red-50/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="relative p-8 flex flex-col items-center text-center">
                {/* Icon */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-b from-white to-red-50 border border-red-100 shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon
                    size={34}
                    className="text-red-600"
                  />
                </div>

                <h3 className="font-serif font-bold text-lg uppercase text-gray-900 leading-tight mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm leading-7">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Accent */}
              <div className="h-1.5 bg-red-600 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Trust Strip */}
      <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 mt-12">
        <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-lg bg-white">
          <div className="flex flex-col xl:flex-row">
            {/* Left */}
            <div className="xl:w-72 bg-gradient-to-r from-red-700 to-red-600 text-white flex items-center justify-center p-8">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-7 h-7" />

                <span className="uppercase tracking-widest font-bold text-lg">
                  Trusted By
                </span>
              </div>
            </div>

            {/* Middle - Updated for Logos */}
            <div className="flex-1 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
              {approvals.map((item) => (
                <div
                  key={item.name}
                  className="group border-l border-gray-100 p-8 flex flex-col items-center justify-center hover:bg-gray-50 transition"
                >
                  {/* Image Container with relative positioning for Next/Image fill */}
                  <div className="relative w-20 h-16 mb-4 group-hover:scale-110 transition-transform flex items-center justify-center">
                    <Image
                      src={item.logo}
                      alt={`${item.name} Logo`}
                      fill
                      className="object-contain" 
                      sizes="(max-width: 768px) 80px, 80px"
                    />
                  </div>

                  <span className="text-xs font-semibold text-gray-800 tracking-wide text-center">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Right */}
            <div className="xl:w-80 border-l border-gray-100 bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-10">
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-5">
                  <ShieldCheck className="text-red-600 w-7 h-7" />
                </div>

                <h4 className="font-bold text-2xl text-gray-900 leading-snug">
                  Trusted for
                  <br />
                  Government,
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

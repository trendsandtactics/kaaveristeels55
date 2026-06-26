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

const approvals = [
  { name: "CHENNAI METRO RAIL", logo: "/CMRL.png" },
  { name: "TNPWD", logo: "/TNPWD.png" },
  { name: "TNPHC", logo: "/TNPHC.png" },
  { name: "TNHB", logo: "/TNHB.png" },
  { name: "TNEB", logo: "/TNEB.png" },
];

export default function FullWidthQualitySection() {
  return (
    <section className="w-full bg-gradient-to-b from-white via-gray-50 to-white py-16 md:py-20 overflow-hidden">
      {/* Heading */}
      <div className="w-full text-center px-6 sm:px-8 lg:px-16 xl:px-24 mb-12 md:mb-16">
        <span className="uppercase tracking-[0.35em] text-red-700 text-xs md:text-sm font-semibold">
          Our Strength
        </span>

        <h2 className="mt-4 text-3xl md:text-5xl xl:text-6xl font-black font-serif text-gray-900">
          Engineered for Excellence
        </h2>

        <div className="w-16 md:w-24 h-1 bg-red-600 mx-auto mt-6 rounded-full" />
      </div>

      {/* Feature Cards - Changed grid breakdown to prevent squishing on standard laptops */}
      <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-6 xl:gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
            >
              {/* Hover Background */}
              <div className="absolute inset-0 bg-gradient-to-b from-red-50/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="relative p-6 lg:p-8 flex flex-col items-center text-center flex-grow">
                {/* Icon */}
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-b from-white to-red-50 border border-red-100 shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon
                    size={32}
                    className="text-red-600 w-8 h-8 lg:w-10 lg:h-10"
                  />
                </div>

                <h3 className="font-serif font-bold text-base lg:text-lg uppercase text-gray-900 leading-tight mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Accent */}
              <div className="h-1.5 bg-red-600 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 mt-auto" />
            </div>
          ))}
        </div>
      </div>

      {/* Trust Strip */}
      <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 mt-16 md:mt-20">
        <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-lg bg-white">
          <div className="flex flex-col xl:flex-row">
            
            {/* Left Section */}
            <div className="xl:w-64 2xl:w-72 bg-gradient-to-r from-red-700 to-red-600 text-white flex items-center justify-center p-8">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-7 h-7" />
                <span className="uppercase tracking-widest font-bold text-lg whitespace-nowrap">
                  Trusted By
                </span>
              </div>
            </div>

            {/* Middle Section - Logos Grid */}
            <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 border-y xl:border-y-0 xl:border-x border-gray-100">
              {approvals.map((item) => (
                <div
                  key={item.name}
                  className="group p-6 lg:p-8 flex flex-col items-center justify-center hover:bg-gray-50 transition border-b sm:border-b-0 sm:border-r border-gray-100 last:border-0"
                >
                  <div className="relative w-16 h-12 lg:w-20 lg:h-16 mb-4 group-hover:scale-110 transition-transform flex items-center justify-center">
                    <Image
                      src={item.logo}
                      alt={`${item.name} Logo`}
                      fill
                      className="object-contain" 
                      sizes="(max-width: 768px) 80px, 80px"
                    />
                  </div>
                  <span className="text-[10px] lg:text-xs font-semibold text-gray-800 tracking-wide text-center">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Right Section - Removed hardcoded <br/> tags to allow natural text flow */}
            <div className="xl:w-72 2xl:w-80 bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-8 lg:p-10">
              <div className="text-center w-full">
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4 lg:mb-5">
                  <ShieldCheck className="text-red-600 w-6 h-6 lg:w-7 lg:h-7" />
                </div>
                <h4 className="font-bold text-lg lg:text-xl xl:text-2xl text-gray-900 leading-snug max-w-xs mx-auto">
                  Trusted for Government, Infrastructure, Commercial & Residential Projects
                </h4>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

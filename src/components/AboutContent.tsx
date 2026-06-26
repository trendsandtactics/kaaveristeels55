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
    <section className="w-full bg-gradient-to-b from-white via-gray-50 to-white py-16 lg:py-20 overflow-hidden">
      {/* Heading */}
      <div className="w-full text-center px-4 sm:px-8 lg:px-8 xl:px-24 mb-12 lg:mb-16">
        <span className="uppercase tracking-[0.35em] text-red-700 text-xs lg:text-sm font-semibold">
          Our Strength
        </span>

        <h2 className="mt-3 lg:mt-4 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black font-serif text-gray-900">
          Engineered for Excellence
        </h2>

        <div className="w-16 lg:w-24 h-1 bg-red-600 mx-auto mt-4 lg:mt-6 rounded-full" />
      </div>

      {/* Feature Cards */}
      <div className="w-full px-4 sm:px-8 lg:px-8 xl:px-24">
        {/* Changed lg:grid-cols-3 to lg:grid-cols-6 to force single row on laptops */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 xl:gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 lg:hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
            >
              {/* Hover Background */}
              <div className="absolute inset-0 bg-gradient-to-b from-red-50/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

              {/* Scaled padding for smaller laptops (lg:p-4) vs desktops (xl:p-8) */}
              <div className="relative p-6 lg:p-4 xl:p-8 flex flex-col items-center text-center grow">
                {/* Scaled icon wrapper */}
                <div className="w-16 h-16 lg:w-14 lg:h-14 xl:w-20 xl:h-20 rounded-full bg-gradient-to-b from-white to-red-50 border border-red-100 shadow-md flex items-center justify-center mb-4 lg:mb-5 group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <item.icon
                    className="text-red-600 w-7 h-7 lg:w-6 lg:h-6 xl:w-[34px] xl:h-[34px]"
                  />
                </div>

                {/* Scaled typography */}
                <h3 className="font-serif font-bold text-base lg:text-[13px] xl:text-lg uppercase text-gray-900 leading-tight mb-2 lg:mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm lg:text-xs xl:text-sm leading-relaxed lg:leading-normal xl:leading-7 mt-auto">
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
      <div className="w-full px-4 sm:px-8 lg:px-8 xl:px-24 mt-10 lg:mt-12">
        <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-lg bg-white">
          {/* Changed xl:flex-row to lg:flex-row */}
          <div className="flex flex-col lg:flex-row">
            
            {/* Left Box */}
            <div className="lg:w-48 xl:w-72 bg-gradient-to-r from-red-700 to-red-600 text-white flex items-center justify-center p-6 lg:p-4 xl:p-8 shrink-0">
              <div className="flex items-center gap-2 xl:gap-3">
                <ShieldCheck className="w-6 h-6 lg:w-5 lg:h-5 xl:w-7 xl:h-7" />
                <span className="uppercase tracking-wider xl:tracking-widest font-bold text-base lg:text-sm xl:text-lg">
                  Trusted By
                </span>
              </div>
            </div>

            {/* Middle - Logos Grid */}
            <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {approvals.map((item) => (
                <div
                  key={item.name}
                  className="group lg:border-l border-t lg:border-t-0 border-gray-100 p-6 lg:p-4 xl:p-8 flex flex-col items-center justify-center hover:bg-gray-50 transition"
                >
                  <div className="relative w-20 h-16 lg:w-16 lg:h-12 xl:w-20 xl:h-16 mb-3 xl:mb-4 group-hover:scale-110 transition-transform flex items-center justify-center">
                    <Image
                      src={item.logo}
                      alt={`${item.name} Logo`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 64px, 80px"
                    />
                  </div>

                  <span className="text-xs lg:text-[10px] xl:text-xs font-semibold text-gray-800 tracking-wide text-center">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Right Box */}
            <div className="lg:w-56 xl:w-80 lg:border-l border-t lg:border-t-0 border-gray-100 bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-8 lg:p-4 xl:p-10 shrink-0">
              <div className="text-center w-full">
                <div className="w-12 h-12 lg:w-10 lg:h-10 xl:w-14 xl:h-14 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4 xl:mb-5">
                  <ShieldCheck className="text-red-600 w-6 h-6 lg:w-5 lg:h-5 xl:w-7 xl:h-7" />
                </div>

                <h4 className="font-bold text-xl lg:text-sm xl:text-2xl text-gray-900 leading-snug lg:leading-tight xl:leading-snug">
                  Trusted for
                  <br />
                  Government,
                  <br />
                  Infrastructure,
                  <br className="hidden lg:block" />
                  <span className="lg:hidden"> Commercial & </span>
                  <span className="hidden lg:inline">Commercial &</span>
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

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
  { name: "CMDA", logo: "/cmda.png" },
  { name: "SDAT", logo: "/SDAT.png" },
  { name: "TANGEDCO", logo: "/TANGEDCO.png" },
  { name: "THERMAX", logo: "/thermax.png" },
  { name: "TANTRANSCO", logo: "/TTCL.png" },
  { name: "TNUHBD", logo: "/tnhouse.png" },
];

export default function FullWidthQualitySection() {
  return (
    // Reduced vertical padding for 800px height constraints
    <section className="w-full bg-gradient-to-b from-white via-gray-50 to-white py-12 lg:py-14 2xl:py-20 overflow-hidden">
      
      {/* Heading */}
      {/* Reduced horizontal padding at xl (1280px) to give cards more width */}
      <div className="w-full text-center px-4 sm:px-8 lg:px-10 xl:px-12 2xl:px-24 mb-10 lg:mb-12 2xl:mb-16">
        <span className="uppercase tracking-[0.35em] text-red-700 text-xs 2xl:text-sm font-semibold">
          Our Strength
        </span>

        <h2 className="mt-3 lg:mt-4 text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black font-serif text-gray-900">
          Engineered for Excellence
        </h2>

        <div className="w-16 lg:w-20 2xl:w-24 h-1 bg-red-600 mx-auto mt-4 2xl:mt-6 rounded-full" />
      </div>

      {/* Feature Cards */}
      <div className="w-full px-4 sm:px-8 lg:px-10 xl:px-12 2xl:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4 2xl:gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 lg:hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-red-50/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

              {/* Tighter padding at lg/xl to prevent cramped text at 1280px */}
              <div className="relative p-6 lg:p-4 xl:p-5 2xl:p-8 flex flex-col items-center text-center grow">
                <div className="w-14 h-14 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-20 2xl:h-20 rounded-full bg-gradient-to-b from-white to-red-50 border border-red-100 shadow-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <item.icon
                    className="text-red-600 w-6 h-6 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-[34px] 2xl:h-[34px]"
                  />
                </div>

                {/* Highly specific text sizing for 1280px so it fits cleanly on one or two lines */}
                <h3 className="font-serif font-bold text-base lg:text-[11px] xl:text-[13px] 2xl:text-lg uppercase text-gray-900 leading-tight mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm lg:text-[10px] xl:text-xs 2xl:text-sm leading-relaxed lg:leading-normal mt-auto">
                  {item.desc}
                </p>
              </div>

              <div className="h-1.5 bg-red-600 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 mt-auto" />
            </div>
          ))}
        </div>
      </div>

      {/* Trust Strip */}
      <div className="w-full px-4 sm:px-8 lg:px-10 xl:px-12 2xl:px-24 mt-8 lg:mt-10 2xl:mt-12">
        <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-lg bg-white">
          <div className="flex flex-col lg:flex-row">
            
            {/* Left Box - Controlled width for laptops */}
            <div className="lg:w-40 xl:w-48 2xl:w-72 bg-gradient-to-r from-red-700 to-red-600 text-white flex items-center justify-center p-4 lg:p-4 xl:p-6 2xl:p-8 shrink-0">
              <div className="flex items-center gap-2 xl:gap-3">
                <ShieldCheck className="w-5 h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7" />
                <span className="uppercase tracking-wider font-bold text-sm xl:text-base 2xl:text-lg">
                  Trusted By
                </span>
              </div>
            </div>

            {/* Middle - Logos Grid */}
<div className="flex-1 overflow-hidden group">
  <div className="flex animate-scroll group-hover:[animation-play-state:paused]">
    {[...approvals, ...approvals].map((item, index) => (
      <div
        key={`${item.name}-${index}`}
        className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 px-4 py-2 flex flex-col items-center"
      >
        {/* Logo */}
        <div className="flex h-20 w-full items-center justify-center">
          <Image
            src={item.logo}
            alt={`${item.name} Logo`}
            width={90}
            height={60}
            className="block h-16 w-auto object-contain"
          />
        </div>

        {/* Name */}
        <span className="mt-2 text-[10px] xl:text-xs font-semibold text-gray-800 tracking-wide text-center leading-tight">
          {item.name}
        </span>
      </div>
    ))}
  </div>
</div>

            {/* Right Box - Controlled width for laptops */}
            <div className="lg:w-48 xl:w-56 2xl:w-80 lg:border-l border-t lg:border-t-0 border-gray-100 bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-6 lg:p-4 xl:p-6 2xl:p-10 shrink-0">
              <div className="text-center w-full">
                <div className="w-10 h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-3 xl:mb-4">
                  <ShieldCheck className="text-red-600 w-5 h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7" />
                </div>

                <h4 className="font-bold text-sm xl:text-base 2xl:text-2xl text-gray-900 leading-snug">
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

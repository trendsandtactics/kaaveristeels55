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
      <div className="w-full mt-12 lg:mt-16 2xl:mt-20">
        <div className="bg-white py-8 lg:py-12 border-y border-gray-100">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3">
              <ShieldCheck className="w-6 h-6 text-red-600" />
              <h3 className="font-bold text-lg text-gray-800 uppercase tracking-wider">
                Trusted By
              </h3>
            </div>
          </div>
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
              {[...approvals, ...approvals].map((item, index) => (
                <li
                  key={`${item.name}-${index}`}
                  className="flex flex-col items-center justify-center w-40"
                >
                  <div className="relative h-16 w-full">
                    <Image
                      src={item.logo}
                      alt={item.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="mt-2 text-xs text-center font-semibold text-gray-600">
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import {
  ShieldCheck,
  Microscope,
  Cog,
  Factory,
  Link2,
  BarChart3,
  Ruler
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

const sizes = ["8", "10", "12", "16", "20", "25", "32"];

const approvals = [
  "Chennai Metro Rail",
  "TNPWD",
  "TNPHC",
  "TNHB",
  "TNEB",
  "PWD",
];

export default function FullWidthQualitySection() {
  return (
    <section className="w-full bg-white font-sans antialiased overflow-hidden flex flex-col shadow-sm">
      
      {/* 1. TOP FEATURES BANNER - Full Width with subtle gradient */}
      <div className="w-full border-y border-gray-100 bg-gradient-to-b from-gray-50/80 to-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
          {features.map((item, index) => (
            <div
              key={index}
              className="group px-6 py-12 text-center flex flex-col items-center hover:bg-white transition-all duration-500 cursor-default relative overflow-hidden"
            >
              {/* Subtle hover background effect */}
              <div className="absolute inset-0 bg-red-50/0 group-hover:bg-red-50/30 transition-colors duration-500 z-0" />
              
              <div className="relative z-10 w-16 h-16 bg-white rounded-2xl shadow-sm border border-red-100 flex items-center justify-center mb-6 group-hover:-translate-y-2 group-hover:shadow-lg group-hover:shadow-red-100/50 group-hover:border-red-200 transition-all duration-300">
                <item.icon size={28} className="text-red-700 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="relative z-10 font-bold text-[13px] text-gray-900 tracking-wider mb-3 uppercase">
                {item.title}
              </h3>
              <p className="relative z-10 text-xs text-gray-500 leading-relaxed max-w-[220px] group-hover:text-gray-700 transition-colors">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 2. SIZES BANNER - Dark thematic break */}
      <div className="w-full bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <div className="flex items-center gap-3 text-slate-300">
            <Ruler size={24} className="text-red-500" />
            <h4 className="font-bold tracking-widest uppercase text-sm">Available Sizes (MM)</h4>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {sizes.map((size) => (
              <div 
                key={size} 
                className="w-12 h-12 rounded-full border border-slate-700 bg-slate-800 flex items-center justify-center font-bold text-lg hover:bg-red-600 hover:border-red-500 hover:text-white hover:-translate-y-1 transition-all duration-300 cursor-default shadow-sm"
              >
                {size}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. BOTTOM APPROVALS BANNER */}
      <div className="w-full flex flex-col lg:flex-row bg-white">
        
        {/* Approved By Label */}
        <div className="bg-amber-400 px-8 py-8 lg:w-48 flex items-center justify-center shrink-0 shadow-inner">
          <h4 className="font-black text-gray-900 tracking-widest uppercase text-center lg:text-left text-sm">
            Approved By
          </h4>
        </div>

        {/* Logos/Names */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 divide-y md:divide-y-0 md:divide-x divide-gray-100 border-y lg:border-y-0 border-gray-100">
          {approvals.map((item) => (
            <div
              key={item}
              className="group px-4 py-8 flex flex-col items-center justify-center bg-white hover:bg-gray-50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-amber-50 group-hover:border-amber-200 transition-all duration-300">
                <ShieldCheck className="w-5 h-5 text-gray-400 group-hover:text-amber-600 transition-colors" />
              </div>
              <span className="text-[11px] sm:text-xs font-bold text-gray-600 group-hover:text-gray-900 text-center uppercase tracking-wide">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Trusted For Label */}
        <div className="bg-slate-50 px-8 py-8 lg:w-80 flex flex-col items-center justify-center shrink-0 text-center border-l border-gray-100">
          <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mb-3">
            <ShieldCheck size={16} className="text-red-700" />
          </div>
          <p className="font-bold text-sm text-gray-800 leading-snug">
            Trusted for Government, Infrastructure, Commercial & Residential Projects.
          </p>
        </div>
        
      </div>
    </section>
  );
}

"use client";

import {
  ShieldCheck,
  Microscope,
  Cog,
  Factory,
  Link2,
  BarChart3,
  CheckCircle2
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
    <section className="w-full bg-white font-sans antialiased overflow-hidden flex flex-col">
      
      {/* 1. TOP FEATURES BANNER - Full Width, subtle background */}
      <div className="w-full border-y border-gray-100 bg-gray-50/50">
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {features.map((item, index) => (
            <div
              key={index}
              className="group px-6 py-10 text-center flex flex-col items-center hover:bg-white transition-all duration-300 cursor-default"
            >
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-red-100 flex items-center justify-center mb-5 group-hover:-translate-y-1 group-hover:shadow-md transition-all duration-300">
                <item.icon size={28} className="text-red-700" />
              </div>
              <h3 className="font-bold text-[13px] text-gray-900 tracking-wider mb-3 uppercase">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed max-w-[220px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. BOTTOM APPROVALS BANNER */}
      <div className="w-full flex flex-col lg:flex-row border-t border-gray-100 bg-white">
        
        {/* Approved By Label */}
        <div className="bg-yellow-400 px-8 py-6 lg:w-48 flex items-center justify-center shrink-0">
          <h4 className="font-black text-gray-900 tracking-widest uppercase text-center lg:text-left">
            Approved By
          </h4>
        </div>

        {/* Logos/Names */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {approvals.map((item) => (
            <div
              key={item}
              className="px-6 py-6 flex flex-col items-center justify-center bg-white hover:bg-gray-50 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5 text-gray-400" />
              </div>
              <span className="text-xs font-bold text-gray-700 text-center uppercase tracking-wide">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Trusted For Label */}
        <div className="bg-yellow-400 px-8 py-6 lg:w-72 flex items-center justify-center shrink-0 text-center">
          <p className="font-bold text-sm text-gray-900 leading-snug">
            Trusted for Government, Infrastructure, Commercial & Residential Projects.
          </p>
        </div>
        
      </div>
    </section>
  );
}

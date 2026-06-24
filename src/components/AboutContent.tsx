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

      {/* 2. MAIN CONTENT AREA - Edge to Edge Splitting */}
      <div className="w-full flex flex-col xl:flex-row">
        
        {/* LEFT PANELS: Grades (Red Gradient) */}
        <div className="w-full xl:w-[30%] bg-gradient-to-br from-red-950 via-red-900 to-red-700 text-white p-10 lg:p-16 flex flex-col justify-center relative overflow-hidden">
          {/* Decorative background glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-500 opacity-20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight leading-none mb-4 drop-shadow-lg">
              KAAVERI GST
              <span className="block text-red-200 mt-2 text-3xl lg:text-4xl">TMT BARS</span>
            </h2>
            
            <div className="inline-block px-4 py-1 bg-yellow-400/10 border border-yellow-400/30 rounded-full mt-6 mb-8">
              <h3 className="text-yellow-400 font-bold tracking-widest text-sm uppercase">
                Available Grades
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {["FE 500", "FE 500D", "FE 550", "FE 550D", "FE 600D", "HSCRS"].map((grade) => (
                <div
                  key={grade}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-xl px-5 py-3 text-sm font-bold tracking-wide transition-colors cursor-default"
                >
                  {grade}
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center lg:justify-start">
              {/* Optional: Add an image here if needed, styled beautifully */}
               <img
                  src="/tmt-bars.png"
                  alt="TMT Bars Illustration"
                  className="w-full max-w-[240px] drop-shadow-[0_20px_30px_rgba(0,0,0,0.4)]"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }} 
                />
            </div>
          </div>
        </div>

        {/* CENTER PANEL: Sizes (Clean White) */}
        <div className="w-full xl:w-[35%] bg-white p-10 lg:p-16 flex flex-col justify-center">
          <h3 className="text-2xl font-black text-gray-900 mb-8 uppercase tracking-tight">
            Available Sizes
          </h3>

          <div className="flex flex-wrap gap-4 mb-12">
            {sizes.map((size) => (
              <div
                key={size}
                className="w-16 h-16 rounded-full bg-yellow-400 hover:bg-yellow-500 flex items-center justify-center font-black text-xl text-gray-900 shadow-sm transition-all duration-300 cursor-pointer"
              >
                {size}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-auto">
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                Standard Length
              </p>
              <p className="font-black text-red-700 text-2xl">
                12.2 METERS
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                Custom Lengths
              </p>
              <p className="font-black text-red-700 text-2xl">
                UP TO 30 METERS
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: Quality (Dark Theme with Image) */}
        <div className="w-full xl:w-[35%] bg-slate-950 text-white p-10 lg:p-16 flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute inset-0 opacity-10 mix-blend-screen transition-opacity duration-700 group-hover:opacity-20">
            <img
              src="/laboratory.jpg"
              alt=""
              className="w-full h-full object-cover grayscale"
            />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="text-yellow-400 w-8 h-8" />
              <h3 className="text-yellow-400 font-black text-2xl uppercase tracking-tight">
                Commitment to Quality
              </h3>
            </div>
            
            <p className="text-slate-300 text-lg leading-relaxed mb-10">
              Every KAAVERI product undergoes rigorous quality checks through
              sophisticated chemical and physical testing facilities.
            </p>

            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
              {[
                "Raw Material Inspection",
                "Spectrometric Analysis",
                "Online Production",
                "Physical Testing",
                "BIS Verification",
                "Test Certificates",
                "Dimensional Accuracy",
                "Chemical Analysis",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
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

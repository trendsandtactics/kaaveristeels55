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

const sizes = ["8", "10", "12", "16", "20", "25", "32"];

export default function QualityBanner() {
  return (
    <section className="w-full min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center font-sans">
      <div className="w-full max-w-[1536px] mx-auto">
        {/* Main Container */}
        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl transition-shadow duration-300 hover:shadow-3xl">
          
          {/* TOP SECTION: Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 divide-y sm:divide-y-0 border-b border-gray-100">
            {features.map((item, index) => (
              <div
                key={index}
                className="group p-6 text-center flex flex-col items-center hover:bg-red-50/50 transition-colors duration-300 sm:border-r border-gray-100 last:border-r-0"
              >
                <div className="p-3 bg-red-50 rounded-full group-hover:bg-red-100 transition-colors duration-300 mb-4">
                  <item.icon
                    size={32}
                    className="text-red-700 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-bold text-sm text-gray-900 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-xs mt-3 text-gray-500 leading-relaxed max-w-[200px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* MIDDLE SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-12 bg-white">
            
            {/* LEFT: Grades */}
            <div className="lg:col-span-4 bg-gradient-to-br from-red-950 via-red-800 to-red-700 text-white p-8 lg:p-10 flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -mr-20 -mt-20 group-hover:opacity-10 transition-opacity duration-700"></div>
              
              <h2 className="text-3xl font-extrabold tracking-tight relative z-10">
                KAAVERI GST TMT BARS
              </h2>
              <h3 className="mt-6 text-yellow-400 font-bold tracking-widest text-sm relative z-10">
                AVAILABLE GRADES
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-5 relative z-10">
                {["FE 500", "FE 500D", "FE 550", "FE 550D", "FE 600D", "HSCRS"].map((grade) => (
                  <div
                    key={grade}
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 rounded-lg text-center py-2.5 text-sm font-semibold transition-all duration-300 cursor-default"
                  >
                    {grade}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-center relative z-10">
                <img
                  src="/tmt-bars.png"
                  alt="TMT Bars"
                  className="w-full max-w-[280px] drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* CENTER: Sizes */}
            <div className="lg:col-span-3 p-8 lg:p-10 bg-white border-y lg:border-y-0 lg:border-x border-gray-100 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-gray-900">
                AVAILABLE SIZES
              </h3>

              <div className="grid grid-cols-4 sm:grid-cols-7 lg:grid-cols-4 gap-4 mt-6">
                {sizes.map((size) => (
                  <div
                    key={size}
                    className="aspect-square rounded-full bg-yellow-400 hover:bg-yellow-500 flex items-center justify-center font-bold text-gray-900 shadow-sm hover:shadow-md hover:scale-110 transition-all duration-300 cursor-pointer text-sm sm:text-base"
                  >
                    {size}
                  </div>
                ))}
              </div>

              <div className="mt-10 space-y-6">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <p className="text-xs font-semibold text-gray-500 tracking-wider">
                    STANDARD LENGTH
                  </p>
                  <p className="font-extrabold text-red-700 text-lg mt-1">
                    12.2 METERS
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <p className="text-xs font-semibold text-gray-500 tracking-wider">
                    CUSTOM LENGTHS
                  </p>
                  <p className="font-extrabold text-red-700 text-lg mt-1">
                    UP TO 30 METERS
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT: Quality */}
            <div className="lg:col-span-5 bg-gray-900 text-white p-8 lg:p-10 relative overflow-hidden flex flex-col justify-center group">
              <div className="absolute inset-0 opacity-20 mix-blend-overlay group-hover:opacity-30 transition-opacity duration-700">
                <img
                  src="/laboratory.jpg"
                  alt="Quality Lab Background"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 mb-2">
                  <ShieldCheck className="text-yellow-400" size={24} />
                  <h3 className="text-yellow-400 font-extrabold text-2xl">
                    COMMITMENT TO QUALITY
                  </h3>
                </div>
                
                <p className="mt-4 text-base text-gray-300 leading-relaxed max-w-lg">
                  Every KAAVERI product undergoes rigorous quality checks through
                  sophisticated chemical and physical testing facilities.
                </p>

                <div className="grid sm:grid-cols-2 gap-x-4 gap-y-4 mt-8">
                  {[
                    "Raw Material Inspection",
                    "Spectrometric Analysis",
                    "Online Production Monitoring",
                    "Physical Testing",
                    "BIS Standard Verification",
                    "Test Certificate Issuance",
                    "Dimensional Accuracy",
                    "Chemical Analysis",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-gray-200 hover:text-white transition-colors cursor-default"
                    >
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.6)]" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM SECTION: Approvals */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 border-t border-gray-100 bg-white">
            
            <div className="col-span-2 md:col-span-4 lg:col-span-1 bg-yellow-400 font-extrabold text-gray-900 text-sm flex flex-col items-center justify-center p-6 text-center tracking-wider">
              <span>APPROVED</span>
              <span>BY</span>
            </div>

            {[
              "Chennai Metro Rail",
              "TNPWD",
              "TNPHC",
              "TNHB",
              "TNEB",
              "PWD",
            ].map((item) => (
              <div
                key={item}
                className="p-6 text-center border-l border-gray-100 border-t md:border-t-0 flex flex-col items-center justify-center hover:bg-gray-50 transition-colors group"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-gray-100 mb-3 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheck size={20} className="text-gray-400 group-hover:text-red-700 transition-colors" />
                </div>
                <p className="text-xs font-bold text-gray-600">{item}</p>
              </div>
            ))}

            <div className="col-span-2 md:col-span-4 lg:col-span-1 bg-yellow-400 p-6 flex items-center justify-center text-center">
              <p className="font-bold text-sm text-gray-900 leading-snug">
                Trusted for Government, Infrastructure, Commercial & Residential Projects.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

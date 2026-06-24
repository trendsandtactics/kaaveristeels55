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
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Main Container */}
        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">

          {/* TOP SECTION */}
          <div className="grid lg:grid-cols-6 divide-y lg:divide-y-0 lg:divide-x">
            {features.map((item, index) => (
              <div
                key={index}
                className="p-5 text-center flex flex-col items-center"
              >
                <item.icon
                  size={34}
                  className="text-red-700 mb-3"
                />

                <h3 className="font-bold text-xs lg:text-sm text-gray-900">
                  {item.title}
                </h3>

                <p className="text-[11px] mt-2 text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* MIDDLE SECTION */}
          <div className="grid lg:grid-cols-12 border-t">

            {/* LEFT */}
            <div className="lg:col-span-4 bg-gradient-to-r from-red-950 via-red-800 to-red-700 text-white p-6">
              <h2 className="text-2xl font-bold">
                KAAVERI GST TMT BARS
              </h2>

              <h3 className="mt-4 text-yellow-400 font-semibold">
                AVAILABLE GRADES
              </h3>

              <div className="grid grid-cols-3 gap-3 mt-4">
                {[
                  "FE 500",
                  "FE 500D",
                  "FE 550",
                  "FE 550D",
                  "FE 600D",
                  "HSCRS",
                ].map((grade) => (
                  <div
                    key={grade}
                    className="bg-white/15 rounded-md text-center py-2 text-sm font-semibold"
                  >
                    {grade}
                  </div>
                ))}
              </div>

              <div className="mt-5">
                <img
                  src="/tmt-bars.png"
                  alt="TMT Bars"
                  className="w-full max-w-[250px] mx-auto"
                />
              </div>
            </div>

            {/* CENTER */}
            <div className="lg:col-span-3 p-6 bg-white">
              <h3 className="text-xl font-bold">
                AVAILABLE SIZES
              </h3>

              <div className="grid grid-cols-4 gap-3 mt-5">
                {sizes.map((size) => (
                  <div
                    key={size}
                    className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center font-bold text-sm"
                  >
                    {size}
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-3">
                <div>
                  <p className="text-xs text-gray-500">
                    STANDARD LENGTH
                  </p>
                  <p className="font-bold text-red-700">
                    12.2 METERS
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    CUSTOM LENGTHS
                  </p>
                  <p className="font-bold text-red-700">
                    UP TO 30 METERS
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-5 bg-gray-900 text-white p-6 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <img
                  src="/laboratory.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative z-10">
                <h3 className="text-yellow-400 font-bold text-xl">
                  COMMITMENT TO QUALITY
                </h3>

                <p className="mt-3 text-sm text-gray-200">
                  Every KAAVERI product undergoes rigorous quality checks through
                  sophisticated chemical and physical testing.
                </p>

                <div className="grid md:grid-cols-2 gap-3 mt-6">
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
                      className="flex items-center gap-2 text-sm"
                    >
                      <span className="w-2 h-2 rounded-full bg-yellow-400" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM SECTION */}
          <div className="grid lg:grid-cols-8 border-t">

            <div className="bg-yellow-400 font-bold text-sm flex items-center justify-center p-5">
              APPROVED BY
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
                className="p-5 text-center border-l"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-slate-100 mb-2" />
                <p className="text-xs font-medium">{item}</p>
              </div>
            ))}

            <div className="bg-yellow-400 p-5 flex items-center justify-center text-center">
              <p className="font-semibold text-sm">
                Trusted for Government,
                Infrastructure, Commercial &
                Residential Projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

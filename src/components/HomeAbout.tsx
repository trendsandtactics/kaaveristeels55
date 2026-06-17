/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import React from "react";
import {
  Factory,
  ShieldCheck,
  Users,
  Leaf,
  Map,
  Package,
  Download,
  ArrowRight,
  Award,
  TrendingUp,
} from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative w-full bg-slate-50 font-sans antialiased py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Industrial Facility Image Block (5 Columns) */}
          <div className="relative lg:col-span-5 h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl group">
            <Image
              src="/download.png"
              alt="KAAVERI Steel Manufacturing Plant"
              fill
              priority
              className="object-cover object-center transform scale-100 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            />
            {/* Elegant Overlay Subtle Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

            {/* Floating Ribbon Badge */}
            <div className="absolute top-0 left-6 bg-red-600 text-white shadow-lg px-5 py-6 rounded-b-xl flex flex-col items-center z-20 animate-fade-in">
              <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">30+</span>
              <span className="text-[10px] tracking-wider uppercase text-center font-bold text-red-100 mt-1 leading-tight">
                Years Of<br />Excellence
              </span>
            </div>
          </div>

          {/* Right Side: Content Frame (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Section Tagline */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-red-600 uppercase tracking-widest text-xs font-bold">
                About Kaaveri
              </span>
              <div className="w-8 h-[2px] bg-red-600" />
            </div>

            {/* Editorial Scale Typography */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              BUILT ON STEEL. <br />
              <span className="text-red-600">TRUSTED BY INDIA.</span>
            </h2>

            {/* Description Body Text */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mt-6 font-normal">
              At <span className="font-semibold text-slate-900">KAAVERI</span>, we are passionate about steel and dedicated to excellence. 
              As a leading manufacturer of TMT bars and structural steel products, we supply the construction 
              industry with materials engineered for longevity.
            </p>

            {/* Executive Quote Block */}
            <div className="my-6 pl-4 border-l-4 border-red-600 bg-white p-5 rounded-r-xl shadow-sm">
              <p className="text-slate-700 italic text-sm sm:text-base font-medium leading-relaxed">
                "Our rigorous quality control ensures every product meets the highest global standards — empowering builders to raise structures that stand the test of time."
              </p>
            </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
                <div className="group min-h-[190px] bg-white rounded-2xl border border-slate-200 p-7 flex flex-col justify-center hover:border-red-500 hover:shadow-2xl transition-all duration-500">
                  <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-5">
                    <Package className="w-8 h-8 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-slate-900">
                      Premium TMT Bars
                    </h4>
                    <p className="text-slate-500 mt-2 text-base">
                      High strength & durability
                    </p>
                  </div>
                </div>

                <div className="group min-h-[190px] bg-white rounded-2xl border border-slate-200 p-7 flex flex-col justify-center hover:border-red-500 hover:shadow-2xl transition-all duration-500">
                  <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-5">
                    <ShieldCheck className="w-8 h-8 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-slate-900">
                      ISI Certified
                    </h4>
                    <p className="text-slate-500 mt-2 text-base">
                      Tested & trusted
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm flex flex-col gap-2">
                <Users className="w-5 h-5 text-red-600" />
                <div>
                  <h4 className="font-bold text-xs text-slate-900 tracking-tight uppercase">Trusted Partners</h4>
                  <p className="text-slate-500 text-[11px] mt-0.5">Pan-India network</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow-md">
                Explore More
                <ArrowRight size={16} />
              </button>

              <button className="bg-white border border-slate-200 hover:border-slate-300 text-slate-700 px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 font-semibold text-sm transition-all duration-200 shadow-sm">
                <Download size={16} />
                Download Brochure
              </button>
            </div>
          </div>
        </div>

        {/* Info Rows Segmented Separately Below */}
        <div className="mt-20 border-t border-slate-200 pt-12">
          
          {/* Features Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <FeatureItem icon={<Factory />} title="Advanced Manufacturing" desc="State-of-the-art facilities with global technology standards." />
            <FeatureItem icon={<ShieldCheck />} title="Quality Assured" desc="Stringent testing processes for uncompromised structural quality." />
            <FeatureItem icon={<Leaf />} title="Sustainable Tomorrow" desc="Committed to eco-friendly production standard practices." />
            <FeatureItem icon={<Map />} title="Pan India Presence" desc="Strong distribution network across the entire nation." />
          </div>

          {/* Stats Analytics Dashboard Row */}
          <div className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 shadow-md grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 lg:divide-x lg:divide-slate-100">
            <StatItem icon={<Award />} value="30+" label="Years of Excellence" />
            <div className="pt-4 sm:pt-0"><StatItem icon={<Users />} value="500+" label="Happy Customers" /></div>
            <div className="pt-4 lg:pt-0"><StatItem icon={<TrendingUp />} value="1 Mn+" label="Tons Capacity" /></div>
            <div className="pt-4 lg:pt-0"><StatItem icon={<ShieldCheck />} value="ISI" label="Certified Products" /></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ icon, title, desc }: { icon: React.ReactElement; title: string; desc: string }) {
  return (
    <div className="flex gap-4">
      <div className="shrink-0 text-red-600 mt-1">
        {React.cloneElement(icon, { size: 22 })}
      </div>
      <div>
        <h4 className="text-sm font-bold text-slate-900 tracking-tight">{title}</h4>
        <p className="text-slate-500 text-xs sm:text-sm mt-1.5 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function StatItem({ icon, value, label }: { icon: React.ReactElement; value: string; label: string }) {
  return (
    <div className="flex items-center gap-4 lg:justify-center w-full">
      <div className="shrink-0 p-3 bg-red-50 text-red-600 rounded-xl">
        {React.cloneElement(icon, { size: 24 })}
      </div>
      <div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-none">{value}</h3>
        <p className="text-slate-500 text-[11px] font-medium tracking-wider uppercase mt-1">{label}</p>
      </div>
    </div>
  );
}

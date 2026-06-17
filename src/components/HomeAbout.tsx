"use client";

import Image from "next/image";
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
    <section className="relative w-full bg-white font-sans antialiased overflow-hidden flex flex-col justify-between min-h-screen">
      {/* Container stripped of absolute max-width limits to occupy full viewport width */}
      <div className="w-full max-w-none flex flex-col flex-grow">
        
        {/* Main Edge-to-Edge Split Grid System */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 bg-white overflow-hidden w-full flex-grow">
          
          {/* Left Side: Industrial Facility Image Block */}
          <div className="relative lg:col-span-5 xl:col-span-5 h-[460px] sm:h-[560px] lg:h-auto overflow-hidden w-full group">
            <Image
              src="/download.png"
              alt="KAAVERI Steel Manufacturing Plant"
              fill
              priority
              className="object-cover object-center transform scale-100 group-hover:scale-[1.02] transition-transform duration-[1000ms] ease-out"
            />

            {/* Immersive Top-Left Floating Ribbon Badge */}
            <div className="absolute top-0 left-8 sm:left-16 bg-gradient-to-b from-[#dc2626] to-[#b91c1c] shadow-2xl w-[85px] sm:w-[100px] pt-8 pb-10 px-2 flex flex-col justify-center items-center z-20">
              <h3 className="text-4xl sm:text-5xl font-serif font-black text-white tracking-tighter">30+</h3>
              <p className="text-[10px] sm:text-[11px] tracking-[2px] uppercase text-center text-red-100 font-black leading-tight mt-1.5">
                Years Of<br />Excellence
              </p>
              <div 
                className="absolute bottom-0 left-0 right-0 h-4 bg-white"
                style={{ clipPath: "polygon(0 100%, 50% 0, 100% 100%, 100% 0, 0 0)" }}
              />
            </div>

            {/* Sharp Diagonal Accent Red Slash */}
            <div 
              className="hidden lg:block absolute top-0 bottom-0 right-0 w-[60px] bg-[#dc2626] z-10 translate-x-[2px]"
              style={{
                clipPath: "polygon(100% 0, 100% 100%, 0% 100%, 60% 0)",
              }}
            />
          </div>

          {/* Right Side: Completely Expansive content frame spanning remaining width */}
          <div 
            className="relative lg:col-span-7 xl:col-span-7 bg-white z-10 lg:-ml-14 pl-6 pr-6 sm:px-16 lg:pl-28 lg:pr-16 xl:pl-32 xl:pr-40 py-16 lg:py-24 flex flex-col justify-center w-full flex-grow"
            style={{
              clipPath: typeof window !== "undefined" && window.innerWidth >= 1024 
                ? "polygon(60px 0, 100% 0, 100% 100%, 0% 100%)" 
                : "none"
            }}
          >
            {/* Section Tagline */}
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[#dc2626] uppercase tracking-[4px] text-xs sm:text-sm font-black">
                About Kaaveri
              </span>
              <div className="w-12 h-[2px] bg-[#dc2626]" />
            </div>

            {/* Editorial Scale Typography */}
            <h2 className="text-4xl sm:text-5xl xl:text-[56px] font-serif font-black text-[#0f2137] tracking-tight leading-[1.1]">
              BUILT ON STEEL.
            </h2>
            <h2 className="text-4xl sm:text-5xl xl:text-[56px] font-serif font-black text-[#dc2626] tracking-tight leading-[1.1] mt-1.5 uppercase">
              Trusted By India.
            </h2>

            {/* Description Body Text */}
            <p className="text-slate-700 text-base sm:text-lg xl:text-xl max-w-4xl leading-relaxed mt-6 font-normal">
              At <span className="font-bold text-[#dc2626]">KAAVERI</span>, we are passionate about steel and dedicated to excellence. 
              As a leading manufacturer of TMT bars and structural steel products, we supply the construction 
              industry with materials engineered for longevity.
            </p>

            {/* Full-width Restored Executive Quote Block */}
            <div className="my-8 flex gap-4 max-w-4xl bg-slate-50/80 border border-slate-200/80 p-6 rounded-r-2xl border-l-4 border-l-[#dc2626] shadow-sm items-start">
              <span className="text-[#dc2626] font-serif text-5xl font-black leading-none select-none mt-1">“</span>
              <p className="text-slate-800 italic text-sm sm:text-base xl:text-lg font-medium leading-relaxed">
                Our rigorous quality control ensures every product meets the highest global standards — empowering 
                builders to raise structures that stand the test of time.
              </p>
            </div>

            {/* Specifications Grid scaling elegantly with full-width container space */}
            <div className="border border-slate-200/80 rounded-xl bg-slate-50/40 shadow-sm grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 overflow-hidden max-w-4xl mb-8">
              <div className="p-5 flex items-center gap-4 hover:bg-white transition-all duration-200 group/badge">
                <div className="p-3 bg-red-50 rounded-xl text-[#dc2626] group-hover/badge:bg-[#dc2626] group-hover/badge:text-white transition-colors duration-200">
                  <Package className="w-5 h-5 shrink-0" />
                </div>
                <div>
                  <h4 className="font-black text-xs text-slate-900 tracking-tight">PREMIUM TMT BARS</h4>
                  <p className="text-slate-600 text-[11px] mt-0.5">High strength & safety</p>
                </div>
              </div>

              <div className="p-5 flex items-center gap-4 hover:bg-white transition-all duration-200 group/badge">
                <div className="p-3 bg-red-50 rounded-xl text-[#dc2626] group-hover/badge:bg-[#dc2626] group-hover/badge:text-white transition-colors duration-200">
                  <ShieldCheck className="w-5 h-5 shrink-0" />
                </div>
                <div>
                  <h4 className="font-black text-xs text-slate-900 tracking-tight">ISI CERTIFIED</h4>
                  <p className="text-slate-600 text-[11px] mt-0.5">Tested & trusted</p>
                </div>
              </div>

              <div className="p-5 flex items-center gap-4 hover:bg-white transition-all duration-200 group/badge">
                <div className="p-3 bg-red-50 rounded-xl text-[#dc2626] group-hover/badge:bg-[#dc2626] group-hover/badge:text-white transition-colors duration-200">
                  <Users className="w-5 h-5 shrink-0" />
                </div>
                <div>
                  <h4 className="font-black text-xs text-slate-900 tracking-tight">TRUSTED PARTNERS</h4>
                  <p className="text-slate-600 text-[11px] mt-0.5">Nationwide network</p>
                </div>
              </div>
            </div>

            {/* Action Callouts */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#b91c1c] hover:bg-[#a31a1a] text-white px-8 py-4 rounded-xl flex items-center justify-center gap-2.5 font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-98">
                Explore More
                <ArrowRight size={15} />
              </button>

              <button className="bg-white border-2 border-slate-300 hover:border-slate-800 text-slate-800 hover:text-black px-8 py-4 rounded-xl flex items-center justify-center gap-2.5 font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-98">
                <Download size={15} />
                Download Brochure
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Heavy Industry Footers */}
        <div className="w-full mt-auto">
          {/* Top Features Banner Row */}
          <div className="bg-[#030d1a] text-white w-full relative border-b border-white/5">
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-white/10 w-full relative z-10">
              <DarkFeatureItem
                icon={<Factory size={24} className="text-[#dc2626]" />}
                title="Advanced Manufacturing"
                desc="State-of-the-art facilities with global technology"
              />
              <DarkFeatureItem
                icon={<ShieldCheck size={24} className="text-[#dc2626]" />}
                title="Quality Assured"
                desc="Stringent testing for uncompromised quality"
              />
              <DarkFeatureItem
                icon={<Leaf size={24} className="text-[#dc2626]" />}
                title="Sustainable Tomorrow"
                desc="Committed to eco-friendly production standard practices"
              />
              <DarkFeatureItem
                icon={<Map size={24} className="text-[#dc2626]" />}
                title="Pan India Presence"
                desc="Strong distribution network across the entire nation"
              />
            </div>
          </div>

          {/* Bottom Statistics Analytics Row */}
          <div className="bg-white border-t border-slate-200/80 w-full shadow-lg">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-y divide-x divide-slate-100 sm:divide-y-0 lg:divide-slate-200 w-full">
              <LightStatItem
                icon={<Award size={32} className="text-[#dc2626]" />}
                value="30+"
                label="Years of Excellence"
              />
              <LightStatItem
                icon={<Users size={32} className="text-[#dc2626]" />}
                value="500+"
                label="Happy Customers"
              />
              <LightStatItem
                icon={<TrendingUp size={32} className="text-[#dc2626]" />}
                value="1 Mn+"
                label="Tons Capacity"
              />
              <LightStatItem
                icon={<ShieldCheck size={32} className="text-[#dc2626]" />}
                value="ISI"
                label="Certified Products"
              />
            </div>
          </div>

          {/* Industrial Contrast Strip */}
          <div className="w-full h-2.5 bg-gradient-to-r from-slate-400 via-slate-500 to-slate-400 border-t border-b border-black/10 shadow-inner" />
        </div>

      </div>
    </section>
  );
}

function DarkFeatureItem({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="p-6 sm:p-8 xl:p-10 flex items-start gap-4 w-full hover:bg-white/[0.025] transition-colors duration-300">
      <div className="shrink-0 p-2.5 bg-white/5 rounded-xl border border-white/10 shadow-inner">{icon}</div>
      <div>
        <h4 className="text-xs font-black uppercase tracking-[2px] text-white/95">{title}</h4>
        <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed font-normal">{desc}</p>
      </div>
    </div>
  );
}

function LightStatItem({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="p-6 sm:p-8 xl:p-10 flex items-center justify-center gap-5 w-full hover:bg-slate-50/80 transition-colors duration-200">
      <div className="shrink-0 p-3 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">{icon}</div>
      <div>
        <h3 className="text-3xl sm:text-4xl font-serif font-black text-slate-900 tracking-tight leading-none">{value}</h3>
        <p className="text-slate-600 text-[11px] sm:text-xs mt-2 font-black tracking-widest uppercase">{label}</p>
      </div>
    </div>
  );
}

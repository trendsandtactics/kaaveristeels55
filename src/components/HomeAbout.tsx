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
    <section className="relative w-full bg-[#f8f9fa] font-sans antialiased overflow-hidden pb-4">
      <div className="w-full mx-auto max-w-[1920px]">
        
        {/* Main Section - Industrial Layout Grid Splitter */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 min-h-[680px] xl:min-h-[780px] bg-white overflow-hidden w-full">
          
          {/* Left Side: Industrial Facility Image Block */}
          <div className="relative lg:col-span-6 xl:col-span-6 h-[400px] sm:h-[500px] lg:h-auto overflow-hidden w-full group">
            <Image
              src="/download.png"
              alt="KAAVERI Steel Manufacturing Plant"
              fill
              priority
              className="object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Premium Top-Left Vertical Ribbon Badge */}
            <div className="absolute top-0 left-6 sm:left-12 bg-gradient-to-b from-[#dc2626] to-[#b91c1c] shadow-2xl w-[80px] sm:w-[90px] pt-6 pb-8 px-2 flex flex-col justify-center items-center z-20">
              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tighter">30+</h3>
              <p className="text-[9px] sm:text-[10px] tracking-[1.5px] uppercase text-center text-red-100 font-bold leading-tight mt-1">
                Years Of<br />Excellence
              </p>
              {/* Swallowtail cut shape at bottom of ribbon */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-3 bg-white"
                style={{ clipPath: "polygon(0 100%, 50% 0, 100% 100%, 100% 0, 0 0)" }}
              />
            </div>

            {/* Red accent underlying line beneath chevron divider */}
            <div 
              className="hidden lg:block absolute top-0 bottom-0 right-0 w-[30px] bg-[#dc2626] z-10"
              style={{
                clipPath: "polygon(100% 0, 100% 100%, 0% 100%, 100% 50%, 0% 0)",
              }}
            />
          </div>

          {/* Right Side: Content Area with Native CSS Clip Path Handling */}
          <div 
            className="relative lg:col-span-6 xl:col-span-6 bg-[#f8f9fa] z-10 lg:-ml-8 xl:-ml-12 pl-6 pr-6 sm:px-12 lg:pl-16 lg:pr-12 xl:pl-24 xl:pr-24 py-12 lg:py-16 flex flex-col justify-center w-full
              [clip-path:none] lg:[clip-path:polygon(6%_0,100%_0,100%_100%,0%_100%,6%_50%)] xl:[clip-path:polygon(8%_0,100%_0,100%_100%,0%_100%,8%_50%)]"
          >
            {/* Section Label Tag */}
            <div className="flex items-center gap-2.5 mb-4">
              <span className="text-[#dc2626] uppercase tracking-[3px] text-[11px] font-black">
                About Kaaveri
              </span>
              <div className="w-8 h-[1.5px] bg-[#dc2626]" />
            </div>

            {/* Massive Editorial Headings */}
            <h2 className="text-3xl sm:text-4xl xl:text-[46px] font-serif font-black text-[#0f2137] tracking-tight leading-[1.15]">
              BUILT ON STEEL.
            </h2>
            <h2 className="text-3xl sm:text-4xl xl:text-[46px] font-serif font-black text-[#dc2626] tracking-tight leading-[1.15] mt-1 uppercase">
              Trusted By India.
            </h2>

            {/* Intro paragraph */}
            <p className="text-slate-600 text-sm xl:text-base max-w-xl leading-relaxed mt-5 font-normal">
              At <span className="font-bold text-[#dc2626]">KAAVERI</span>, we are passionate about steel and dedicated to excellence. 
              As a leading manufacturer of TMT bars and structural steel products, we supply the construction 
              industry with materials engineered for longevity.
            </p>

            {/* Blockquote Component */}
            <div className="my-5 flex gap-3.5 max-w-xl bg-white border border-slate-200/60 p-4 rounded-r-xl border-l-4 border-l-[#dc2626] shadow-sm">
              <span className="text-[#dc2626] font-serif text-3xl font-black leading-none select-none">“</span>
              <p className="text-slate-700 italic text-xs sm:text-sm font-medium leading-relaxed">
                Our rigorous quality control ensures every product meets the highest global standards — empowering 
                builders to raise structures that stand the test of time.
              </p>
            </div>

            {/* Grid Feature Row Cards */}
            <div className="border border-slate-200/80 rounded-xl bg-white shadow-sm grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 overflow-hidden max-w-2xl">
              <div className="p-3.5 flex items-center gap-3 hover:bg-slate-50/50 transition-colors duration-200">
                <div className="p-2 bg-red-50 rounded-lg text-[#dc2626]">
                  <Package className="w-5 h-5 shrink-0" />
                </div>
                <div>
                  <h4 className="font-black text-[11px] text-slate-900 tracking-tight">PREMIUM TMT BARS</h4>
                  <p className="text-slate-500 text-[10px] mt-0.5">High strength & safety</p>
                </div>
              </div>

              <div className="p-3.5 flex items-center gap-3 hover:bg-slate-50/50 transition-colors duration-200">
                <div className="p-2 bg-red-50 rounded-lg text-[#dc2626]">
                  <ShieldCheck className="w-5 h-5 shrink-0" />
                </div>
                <div>
                  <h4 className="font-black text-[11px] text-slate-900 tracking-tight">ISI CERTIFIED</h4>
                  <p className="text-slate-500 text-[10px] mt-0.5">Tested & trusted</p>
                </div>
              </div>

              <div className="p-3.5 flex items-center gap-3 hover:bg-slate-50/50 transition-colors duration-200">
                <div className="p-2 bg-red-50 rounded-lg text-[#dc2626]">
                  <Users className="w-5 h-5 shrink-0" />
                </div>
                <div>
                  <h4 className="font-black text-[11px] text-slate-900 tracking-tight">TRUSTED PARTNERS</h4>
                  <p className="text-slate-500 text-[10px] mt-0.5">Nationwide network</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3.5 mt-6">
              <button className="bg-[#b91c1c] hover:bg-[#a31a1a] text-white px-6 sm:px-8 py-3.5 rounded-lg flex items-center justify-center gap-2 font-bold text-xs tracking-wider uppercase transition-all duration-200 shadow-md hover:shadow-lg active:scale-95">
                Explore More
                <ArrowRight size={13} />
              </button>

              <button className="bg-white border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 px-6 sm:px-8 py-3.5 rounded-lg flex items-center justify-center gap-2 font-bold text-xs tracking-wider uppercase transition-all duration-200 shadow-sm active:scale-95">
                <Download size={13} />
                Download Brochure
              </button>
            </div>
          </div>
        </div>

        {/* Charcoal Blue Features Ribbon */}
        <div className="bg-[#030d1a] text-white w-full relative border-b border-white/5">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-white/10 w-full relative z-10">
            <DarkFeatureItem
              icon={<Factory size={22} className="text-[#dc2626]" />}
              title="Advanced Manufacturing"
              desc="State-of-the-art facilities with global technology"
            />
            <DarkFeatureItem
              icon={<ShieldCheck size={22} className="text-[#dc2626]" />}
              title="Quality Assured"
              desc="Stringent testing for uncompromised quality"
            />
            <DarkFeatureItem
              icon={<Leaf size={22} className="text-[#dc2626]" />}
              title="Sustainable Tomorrow"
              desc="Committed to eco-friendly production standard practices"
            />
            <DarkFeatureItem
              icon={<Map size={22} className="text-[#dc2626]" />}
              title="Pan India Presence"
              desc="Strong distribution network across the entire nation"
            />
          </div>
        </div>

        {/* Analytics Footer Ribbon */}
        <div className="bg-white border-t border-slate-200/60 w-full shadow-sm">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y divide-x divide-slate-100 sm:divide-y-0 lg:divide-slate-200 w-full">
            <LightStatItem
              icon={<Award size={28} className="text-[#dc2626]" />}
              value="30+"
              label="Years of Excellence"
            />
            <LightStatItem
              icon={<Users size={28} className="text-[#dc2626]" />}
              value="500+"
              label="Happy Customers"
            />
            <LightStatItem
              icon={<TrendingUp size={28} className="text-[#dc2626]" />}
              value="1 Mn+"
              label="Tons Capacity"
            />
            <LightStatItem
              icon={<ShieldCheck size={28} className="text-[#dc2626]" />}
              value="ISI"
              label="Certified Products"
            />
          </div>
        </div>

        {/* Steel Texture Bottom Accent Accent */}
        <div className="w-full h-2 bg-gradient-to-r from-slate-400 via-slate-500 to-slate-400 border-t border-b border-black/10 shadow-inner mt-0.5" />

      </div>
    </section>
  );
}

function DarkFeatureItem({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="p-6 sm:p-8 flex items-start gap-4 w-full hover:bg-white/[0.02] transition-colors duration-300">
      <div className="shrink-0 p-2 bg-white/5 rounded-lg border border-white/10">{icon}</div>
      <div>
        <h4 className="text-[11px] font-black uppercase tracking-[1.5px] text-white/95">
          {title}
        </h4>
        <p className="text-slate-400 text-xs mt-1.5 leading-relaxed font-normal">
          {desc}
        </p>
      </div>
    </div>
  );
}

function LightStatItem({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="p-6 sm:p-7 flex items-center justify-center gap-4 w-full hover:bg-slate-50/60 transition-colors duration-200">
      <div className="shrink-0 p-2.5 bg-slate-50 rounded-xl">{icon}</div>
      <div>
        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-none">
          {value}
        </h3>
        <p className="text-slate-500 text-[11px] mt-1.5 font-bold tracking-wide uppercase">{label}</p>
      </div>
    </div>
  );
}

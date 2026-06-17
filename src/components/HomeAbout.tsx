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
    <section className="relative w-full bg-[#f8f9fa] font-sans antialiased left-0 right-0 overflow-hidden pb-4">
      <div className="w-full min-w-full">
        
        {/* Main Section - Dynamic Double Angle Grid Splitter */}
        <div className="relative grid grid-cols-1 lg:grid-cols-[52%_48%] min-h-[720px] xl:min-h-[820px] bg-white overflow-hidden w-full">
          
          {/* Left Side: Industrial Facility Image Block */}
          <div className="relative h-[480px] sm:h-[580px] lg:h-auto overflow-hidden w-full">
            <Image
              src="/download.png"
              alt="KAAVERI Steel Manufacturing Plant"
              fill
              priority
              className="object-cover object-center"
            />

            {/* Complete Top-Left Vertical Ribbon Badge */}
            <div className="absolute top-0 left-10 bg-gradient-to-b from-red-600 to-red-700 shadow-xl w-[90px] pt-8 pb-10 px-2 flex flex-col justify-center items-center z-20">
              <h3 className="text-4xl font-black text-white tracking-tighter">30+</h3>
              <p className="text-[10px] tracking-[1.5px] uppercase text-center text-red-100 font-bold leading-tight mt-2">
                Years Of<br />Excellence
              </p>
              {/* Swallowtail cut shape at bottom of ribbon */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-4 bg-white"
                style={{ clipPath: "polygon(0 100%, 50% 0, 100% 100%, 100% 0, 0 0)" }}
              />
            </div>

            {/* Red accent underlying line beneath chevron divider */}
            <div 
              className="hidden lg:block absolute top-0 bottom-0 right-0 w-[45px] bg-red-600 z-10"
              style={{
                clipPath: "polygon(100% 0, 100% 100%, 0% 100%, 45% 48%, 0% 0)",
              }}
            />
          </div>

          {/* Right Side: Editorial Content Area with Chevron Clip-Path */}
          <div 
            className="relative bg-[#f8f9fa] z-10 lg:-ml-[10%] pl-8 pr-8 sm:px-16 lg:pl-24 lg:pr-16 xl:pr-24 py-16 lg:py-20 flex flex-col justify-center w-full"
            style={{
              clipPath: typeof window !== 'undefined' && window.innerWidth >= 1024 
                ? "polygon(8% 0, 100% 0, 100% 100%, 0% 100%, 8% 48%)" 
                : "none"
            }}
          >
            {/* Section Label Tag */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-red-600 uppercase tracking-[4px] text-xs font-black">
                About Kaaveri
              </span>
              <div className="w-10 h-[1.5px] bg-red-600" />
            </div>

            {/* Massive Serif Headings */}
            <h2 className="text-4xl sm:text-5xl xl:text-[54px] font-serif font-black text-[#0f2137] tracking-tight leading-[1.12]">
              BUILT ON STEEL.
            </h2>
            <h2 className="text-4xl sm:text-5xl xl:text-[54px] font-serif font-black text-red-600 tracking-tight leading-[1.12] mt-0.5 uppercase">
              Trusted By India.
            </h2>

            {/* Intro paragraph */}
            <p className="text-slate-600 text-sm xl:text-base max-w-2xl leading-relaxed mt-6 font-normal">
              At <span className="font-bold text-red-600">KAAVERI</span>, we are passionate about steel and dedicated to excellence. 
              As a leading manufacturer of TMT bars and structural steel products, we supply the construction 
              industry with materials engineered for longevity.
            </p>

            {/* New Blockquote Component style matching image */}
            <div className="my-6 flex gap-4 max-w-2xl bg-white/40 p-4 rounded-r-lg border-l-4 border-red-600">
              <span className="text-red-600 font-serif text-4xl font-black leading-none select-none">“</span>
              <p className="text-slate-700 italic text-sm xl:text-base font-medium leading-relaxed">
                Our rigorous quality control ensures every product meets the highest global standards — empowering 
                builders to raise structures that stand the test of time.
              </p>
            </div>

            {/* Single Grid Row Row Box Cards */}
            <div className="border border-slate-200/80 rounded-xl bg-white shadow-sm grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 overflow-hidden max-w-3xl">
              <div className="p-4 flex items-center gap-3.5">
                <div className="p-2.5 bg-red-50 rounded-lg text-red-600">
                  <Package className="w-6 h-6 shrink-0" />
                </div>
                <div>
                  <h4 className="font-extrabold text-xs text-slate-900 leading-tight">PREMIUM TMT BARS</h4>
                  <p className="text-slate-500 text-[11px] mt-0.5">High strength & durability</p>
                </div>
              </div>

              <div className="p-4 flex items-center gap-3.5">
                <div className="p-2.5 bg-red-50 rounded-lg text-red-600">
                  <ShieldCheck className="w-6 h-6 shrink-0" />
                </div>
                <div>
                  <h4 className="font-extrabold text-xs text-slate-900 leading-tight">ISI CERTIFIED</h4>
                  <p className="text-slate-500 text-[11px] mt-0.5">Tested & trusted</p>
                </div>
              </div>

              <div className="p-4 flex items-center gap-3.5">
                <div className="p-2.5 bg-red-50 rounded-lg text-red-600">
                  <Users className="w-6 h-6 shrink-0" />
                </div>
                <div>
                  <h4 className="font-extrabold text-xs text-slate-900 leading-tight">TRUSTED PARTNERS</h4>
                  <p className="text-slate-500 text-[11px] mt-0.5">Nationwide network</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-md flex items-center justify-center gap-3 font-extrabold text-xs tracking-wider uppercase transition-colors shadow-sm">
                Explore More
                <ArrowRight size={14} />
              </button>

              <button className="bg-white border border-slate-300 hover:border-slate-400 text-slate-800 px-8 py-4 rounded-md flex items-center justify-center gap-3 font-extrabold text-xs tracking-wider uppercase transition-colors shadow-sm">
                <Download size={14} />
                Download Brochure
              </button>
            </div>
          </div>
        </div>

        {/* Industrial Charcoal Blue Features Ribbon with Ambient Spark Accents */}
        <div className="bg-[#041122] text-white w-full relative">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-white/10 w-full relative z-10">
            <DarkFeatureItem
              icon={<Factory size={26} className="text-red-500" />}
              title="Advanced Manufacturing"
              desc="State-of-the-art facilities with global technology"
            />
            <DarkFeatureItem
              icon={<ShieldCheck size={26} className="text-red-500" />}
              title="Quality Assured"
              desc="Stringent testing for uncompromised quality"
            />
            <DarkFeatureItem
              icon={<Leaf size={26} className="text-red-500" />}
              title="Sustainable Tomorrow"
              desc="Committed to eco-friendly practices"
            />
            <DarkFeatureItem
              icon={<Map size={26} className="text-red-500" />}
              title="Pan India Presence"
              desc="Strong distribution network across the nation"
            />
          </div>
        </div>

        {/* Crisp Light Analytics Footer Ribbon */}
        <div className="bg-white border-t border-slate-200/60 w-full">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-slate-200 w-full">
            <LightStatItem
              icon={<Award size={32} className="text-red-600" />}
              value="30+"
              label="Years of Excellence"
            />
            <LightStatItem
              icon={<Users size={32} className="text-red-600" />}
              value="500+"
              label="Happy Customers"
            />
            <LightStatItem
              icon={<TrendingUp size={32} className="text-red-600" />}
              value="1 Mn+"
              label="Tons Capacity"
            />
            <LightStatItem
              icon={<ShieldCheck size={32} className="text-red-600" />}
              value="ISI"
              label="Certified Products"
            />
          </div>
        </div>

        {/* Bottom TMT Rebar Styled Steel Texture Strip Accent */}
        <div className="w-full h-2.5 bg-gradient-to-r from-slate-400 via-slate-600 to-slate-400 border-t border-b border-black/20 shadow-inner mt-0.5" />

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
    <div className="p-8 flex items-start gap-4 w-full">
      <div className="shrink-0 mt-0.5">{icon}</div>
      <div>
        <h4 className="text-[11px] font-black uppercase tracking-[1.5px] text-white/95">
          {title}
        </h4>
        <p className="text-slate-400 text-xs mt-2 leading-relaxed font-normal">
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
    <div className="p-6 sm:p-8 flex items-center justify-center gap-4 w-full">
      <div className="shrink-0">{icon}</div>
      <div>
        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-none">
          {value}
        </h3>
        <p className="text-slate-500 text-xs mt-1.5 font-bold tracking-wide">{label}</p>
      </div>
    </div>
  );
}

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
    <section className="relative w-full bg-[#fdfdfd] font-sans antialiased left-0 right-0 overflow-hidden select-none pb-0">
      <div className="w-full min-w-full">
        
        {/* Main Hero Container Block */}
        <div className="relative grid grid-cols-1 lg:grid-cols-[53%_47%] min-h-[640px] xl:min-h-[760px] bg-white overflow-hidden w-full">
          
          {/* Left Block: Plant Asset Viewport */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-auto overflow-hidden w-full z-0">
            <Image
              src="/downlaod.png"
              alt="KAAVERI Steel Manufacturing Plant"
              fill
              priority
              className="object-cover object-center scale-100 transition-transform duration-[5000ms] ease-out hover:scale-102"
            />

            {/* Immersive Left Ribbon Overlay Badge */}
            <div className="absolute top-0 left-12 bg-gradient-to-b from-[#ce1a1a] to-[#b01212] shadow-xl w-[84px] pt-7 pb-9 px-2 flex flex-col justify-center items-center z-30 tracking-normal">
              <h3 className="text-4xl font-black text-white tracking-tighter leading-none">30+</h3>
              <p className="text-[9px] tracking-[1.5px] uppercase text-center text-red-100 font-extrabold leading-tight mt-2">
                Years Of<br />Excellence
              </p>
              {/* Swallowtail cut graphic configuration */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-3 bg-white/0"
                style={{
                  clipPath: "polygon(0 100%, 50% 0, 100% 100%, 100% 0, 0 0)",
                  background: "inherit"
                }}
              />
            </div>

            {/* Chevron Edge Red Trim Accenting Layer */}
            <div 
              className="hidden lg:block absolute top-0 bottom-0 right-0 w-[60px] bg-[#ce1a1a] z-10 translate-x-[1px]"
              style={{
                clipPath: "polygon(100% 0, 100% 100%, 0% 100%, 55% 46%, 0% 0)",
              }}
            />
          </div>

          {/* Right Block: Pure Content Layout Area with Asymmetrical Chevron Split */}
          <div 
            className="relative bg-[#f8f9fa] z-20 lg:-ml-[11%] pl-8 pr-8 sm:px-16 lg:pl-28 lg:pr-12 xl:pr-24 py-16 lg:py-20 flex flex-col justify-center w-full"
            style={{
              clipPath: typeof window !== 'undefined' && window.innerWidth >= 1024 
                ? "polygon(11% 0, 100% 0, 100% 100%, 0% 100%, 11% 46%)" 
                : "none"
            }}
          >
            {/* Minimalist Corporate Section Tagline */}
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[#ce1a1a] uppercase tracking-[4px] text-[11px] font-black">
                About Kaaveri
              </span>
              <div className="w-8 h-[1px] bg-[#ce1a1a]" />
            </div>

            {/* Clean Enterprise Heading Stack */}
            <h2 className="text-[38px] sm:text-[46px] xl:text-[54px] font-sans font-extrabold text-[#091a2f] tracking-tight leading-[1.12]">
              BUILT ON STEEL.
            </h2>
            <h2 className="text-[38px] sm:text-[46px] xl:text-[54px] font-sans font-extrabold text-[#ce1a1a] tracking-tight leading-[1.12] mt-0.5">
              TRUSTED BY INDIA.
            </h2>

            {/* Main Brand Profile Copy */}
            <p className="text-slate-600 text-sm xl:text-[15px] max-w-2xl leading-relaxed mt-5 font-normal">
              At <span className="font-bold text-[#ce1a1a]">KAAVERI</span>, we are passionate about steel and dedicated to excellence. 
              As a leading manufacturer of TMT bars and structural steel products, we supply the construction 
              industry with materials engineered for longevity.
            </p>

            {/* Custom Framed Blockquote Feature Component */}
            <div className="my-6 flex gap-4 max-w-2xl bg-white/40 p-4 rounded-r-xl border-l-[3px] border-[#ce1a1a]">
              <span className="text-[#ce1a1a] font-serif text-3xl font-black leading-none select-none">“</span>
              <p className="text-slate-700 italic text-[13px] xl:text-sm font-medium leading-relaxed">
                Our rigorous quality control ensures every product meets the highest global standards — empowering 
                builders to raise structures that stand the test of time.
              </p>
            </div>

            {/* Dynamic Pill Feature Blocks Grid Container */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-4xl">
              <div className="bg-white border border-slate-100 rounded-xl py-3.5 px-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-2 bg-red-50 rounded-lg text-[#ce1a1a] shrink-0">
                  <Package className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-[11px] xl:text-xs text-slate-900 tracking-tight">PREMIUM TMT BARS</h4>
                  <p className="text-slate-400 text-[10px] mt-0.5 whitespace-nowrap">High strength & durability</p>
                </div>
              </div>

              <div className="bg-white border border-slate-100 rounded-xl py-3.5 px-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-2 bg-red-50 rounded-lg text-[#ce1a1a] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-[11px] xl:text-xs text-slate-900 tracking-tight">ISI CERTIFIED</h4>
                  <p className="text-slate-400 text-[10px] mt-0.5 whitespace-nowrap">Tested & trusted</p>
                </div>
              </div>

              <div className="bg-white border border-slate-100 rounded-xl py-3.5 px-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-2 bg-red-50 rounded-lg text-[#ce1a1a] shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-[11px] xl:text-xs text-slate-900 tracking-tight">TRUSTED PARTNERS</h4>
                  <p className="text-slate-400 text-[10px] mt-0.5 whitespace-nowrap">Nationwide network</p>
                </div>
              </div>
            </div>

            {/* Micro-Interactive Call to Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-[#ce1a1a] hover:bg-[#b01212] text-white px-7 py-3.5 rounded flex items-center justify-center gap-3 font-extrabold text-[11px] tracking-wider uppercase transition-colors shadow-sm">
                Explore More
                <ArrowRight size={13} />
              </button>

              <button className="bg-white border border-slate-200 hover:border-slate-300 text-slate-800 px-7 py-3.5 rounded flex items-center justify-center gap-3 font-extrabold text-[11px] tracking-wider uppercase transition-colors shadow-sm">
                <Download size={13} />
                Download Brochure
              </button>
            </div>
          </div>
        </div>

        {/* Textured Midnight Blue Feature Ribbon */}
        <div className="bg-[#030e1b] text-white w-full relative border-t border-white/[0.03]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-white/5 w-full relative z-10">
            <DarkFeatureItem
              icon={<Factory size={22} className="text-[#ce1a1a]" />}
              title="Advanced Manufacturing"
              desc="State-of-the-art facilities with global technology"
            />
            <DarkFeatureItem
              icon={<ShieldCheck size={22} className="text-[#ce1a1a]" />}
              title="Quality Assured"
              desc="Stringent testing for uncompromised quality"
            />
            <DarkFeatureItem
              icon={<Leaf size={22} className="text-[#ce1a1a]" />}
              title="Sustainable Tomorrow"
              desc="Committed to eco-friendly practices"
            />
            <DarkFeatureItem
              icon={<Map size={22} className="text-[#ce1a1a]" />}
              title="Pan India Presence"
              desc="Strong distribution network across the nation"
            />
          </div>
        </div>

        {/* Clean Light Analytics Ribbon */}
        <div className="bg-white border-t border-b border-slate-100 w-full">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-slate-100 w-full">
            <LightStatItem
              icon={<Award size={28} className="text-[#ce1a1a]" />}
              value="30+"
              label="Years of Excellence"
            />
            <LightStatItem
              icon={<Users size={28} className="text-[#ce1a1a]" />}
              value="500+"
              label="Happy Customers"
            />
            <LightStatItem
              icon={<TrendingUp size={28} className="text-[#ce1a1a]" />}
              value="1 Mn+"
              label="Tons Capacity"
            />
            <LightStatItem
              icon={<ShieldCheck size={28} className="text-[#ce1a1a]" />}
              value="ISI"
              label="Certified Products"
            />
          </div>
        </div>

        {/* Structural Metallic Accent Foundation Rim */}
        <div className="w-full h-[7px] bg-gradient-to-r from-slate-400 via-slate-500 to-slate-400 border-t border-black/10 shadow-sm" />

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
    <div className="p-7 flex items-start gap-3.5 w-full">
      <div className="shrink-0 mt-0.5">{icon}</div>
      <div>
        <h4 className="text-[11px] font-black uppercase tracking-[1.5px] text-white/90">
          {title}
        </h4>
        <p className="text-slate-400 text-[11px] mt-1.5 leading-relaxed font-normal">
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
    <div className="p-6 sm:p-7 flex items-center justify-center gap-4 w-full">
      <div className="shrink-0">{icon}</div>
      <div>
        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-none">
          {value}
        </h3>
        <p className="text-slate-400 text-[11px] mt-1.5 font-bold tracking-wide uppercase">{label}</p>
      </div>
    </div>
  );
}

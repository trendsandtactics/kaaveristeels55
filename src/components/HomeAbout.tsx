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
    <section className="relative w-full bg-white font-sans antialiased left-0 right-0 overflow-hidden">
      <div className="w-full min-w-full">
        
        {/* Main Hero Grid Section - Immersive Full Bleed */}
        <div className="relative grid grid-cols-1 lg:grid-cols-[50%_50%] min-h-[750px] xl:min-h-[880px] bg-white overflow-hidden w-full">
          
          {/* Left Side: Cinematic Image with Zoom Effect */}
          <div className="relative h-[500px] sm:h-[600px] lg:h-auto overflow-hidden w-full group/img">
            <Image
              src="/downlaod.png"
              alt="KAAVERI Steel Structure"
              fill
              priority
              className="object-cover object-center transition-transform duration-[6000ms] ease-out group-hover/img:scale-105"
            />

            {/* Glowing Accent Gradient Layer */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

            {/* Top-Left Premium Floating Experience Card */}
            <div className="absolute top-0 left-12 bg-white/95 backdrop-blur-md shadow-2xl w-[120px] py-8 px-4 flex flex-col justify-center items-center z-20 border-b-[6px] border-red-600 rounded-b-xl transition-transform duration-500 hover:-translate-y-1">
              <h3 className="text-5xl font-black text-red-600 tracking-tighter">30+</h3>
              <p className="text-[10px] tracking-[3px] uppercase text-center text-slate-700 font-extrabold leading-tight mt-3">
                Years Of<br />Excellence
              </p>
            </div>

            {/* Sharp Geometric Red accent slash strip */}
            <div 
              className="hidden lg:block absolute top-0 bottom-0 right-0 w-[50px] bg-red-600 z-10"
              style={{
                clipPath: "polygon(100% 0, 100% 100%, 0% 100%, 80% 0)",
              }}
            />
          </div>

          {/* Right Side: Bold & Spacious Editorial Typography Content Area */}
          <div 
            className="relative bg-white z-10 lg:-ml-[10%] pl-8 pr-8 sm:px-16 lg:pl-28 lg:pr-20 xl:pr-32 py-20 lg:py-24 flex flex-col justify-center w-full"
            style={{
              clipPath: typeof window !== 'undefined' && window.innerWidth >= 1024 
                ? "polygon(10% 0, 100% 0, 100% 100%, 0% 100%)" 
                : "none"
            }}
          >
            {/* Section Tagline */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-red-600 uppercase tracking-[5px] text-xs font-black">
                About Kaaveri
              </span>
              <div className="w-12 h-[2px] bg-red-600" />
            </div>

            {/* Ultra-Bold Impact Headings */}
            <h2 className="text-5xl sm:text-6xl xl:text-[72px] font-serif font-black text-[#0f2137] tracking-tight leading-[1.08]">
              Built On Steel.
            </h2>
            <h2 className="text-5xl sm:text-6xl xl:text-[72px] font-serif font-black text-red-600 tracking-tight leading-[1.08] mt-2">
              Trusted By India.
            </h2>

            <div className="w-20 h-[3px] bg-red-600 mt-8 mb-8" />

            {/* Readability Optimized Copy Descriptors */}
            <div className="space-y-6 text-slate-600 text-base xl:text-lg max-w-xl leading-relaxed font-normal">
              <p>
                At <span className="font-bold text-slate-900">KAAVERI</span>, we are passionate about steel and dedicated to excellence.
                As a leading manufacturer of TMT bars and structural steel products,
                we supply the construction industry with materials engineered for longevity.
              </p>
              <p className="border-l-4 border-slate-200 pl-4 italic text-slate-500">
                Our rigorous quality control ensures every product meets the highest
                global standards — empowering builders to raise structures that
                stand the test of time.
              </p>
            </div>

            {/* Clean, Interactive Grid Features Container */}
            <div className="mt-12 border border-slate-200 rounded-xl bg-white shadow-lg shadow-slate-100/50 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 overflow-hidden">
              <div className="p-6 flex items-center gap-4 hover:bg-slate-50/50 transition-colors duration-300">
                <Package className="w-9 h-9 text-red-600 shrink-0" />
                <div>
                  <h4 className="font-extrabold text-sm xl:text-base text-slate-900 leading-tight">Premium TMT Bars</h4>
                  <p className="text-slate-500 text-xs mt-1">High strength & durability</p>
                </div>
              </div>

              <div className="p-6 flex items-center gap-4 hover:bg-slate-50/50 transition-colors duration-300">
                <ShieldCheck className="w-9 h-9 text-red-600 shrink-0" />
                <div>
                  <h4 className="font-extrabold text-sm xl:text-base text-slate-900 leading-tight">ISI Certified</h4>
                  <p className="text-slate-500 text-xs mt-1">Tested & trusted</p>
                </div>
              </div>

              <div className="p-6 flex items-center gap-4 hover:bg-slate-50/50 transition-colors duration-300">
                <Users className="w-9 h-9 text-red-600 shrink-0" />
                <div>
                  <h4 className="font-extrabold text-sm xl:text-base text-slate-900 leading-tight">Trusted Partners</h4>
                  <p className="text-slate-500 text-xs mt-1">Nationwide network</p>
                </div>
              </div>
            </div>

            {/* Elevated Dynamic Action Buttons */}
            <div className="flex flex-wrap gap-5 mt-10">
              <button className="group bg-red-600 hover:bg-red-700 hover:shadow-xl hover:shadow-red-600/20 text-white px-10 py-5 rounded-lg flex items-center justify-center gap-3 font-extrabold text-xs tracking-widest uppercase transition-all duration-300 min-w-[200px]">
                Explore More
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button className="group border-2 border-slate-300 hover:border-slate-900 text-slate-900 px-10 py-5 rounded-lg flex items-center justify-center gap-3 font-extrabold text-xs tracking-widest uppercase transition-all duration-300 min-w-[200px]">
                <Download size={16} className="transition-transform duration-300 group-hover:scale-110" />
                Download Brochure
              </button>
            </div>
          </div>
        </div>

        {/* Premium Deep Blue Value Props Banner */}
        <div className="bg-[#051326] text-white border-b border-white/5 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-white/10 w-full">
            <DarkFeatureItem
              icon={<Factory size={32} className="text-red-500" />}
              title="Advanced Manufacturing"
              desc="State-of-the-art facilities with global technology"
            />
            <DarkFeatureItem
              icon={<ShieldCheck size={32} className="text-red-500" />}
              title="Quality Assured"
              desc="Stringent testing for uncompromised quality"
            />
            <DarkFeatureItem
              icon={<Leaf size={32} className="text-red-500" />}
              title="Sustainable Tomorrow"
              desc="Committed to eco-friendly practices"
            />
            <DarkFeatureItem
              icon={<Map size={32} className="text-red-500" />}
              title="Pan India Presence"
              desc="Strong distribution network across the nation"
            />
          </div>
        </div>

        {/* Dynamic Bold Statistics Footer Banner */}
        <div className="bg-white border-t border-slate-200 w-full">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-slate-200 w-full">
            <LightStatItem
              icon={<Award size={36} className="text-red-600" />}
              value="30+"
              label="Years of Excellence"
            />
            <LightStatItem
              icon={<Users size={36} className="text-red-600" />}
              value="500+"
              label="Happy Customers"
            />
            <LightStatItem
              icon={<TrendingUp size={36} className="text-red-600" />}
              value="1 Mn+"
              label="Tons Capacity"
            />
            <LightStatItem
              icon={<ShieldCheck size={36} className="text-red-600" />}
              value="ISI"
              label="Certified Products"
            />
          </div>
        </div>

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
    <div className="p-10 flex items-start gap-5 w-full hover:bg-white/[0.02] transition-colors duration-300 group">
      <div className="shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110">{icon}</div>
      <div>
        <h4 className="text-xs font-black uppercase tracking-[2px] text-white">
          {title}
        </h4>
        <p className="text-slate-400 text-xs xl:text-sm mt-3 leading-relaxed font-normal">
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
    <div className="p-8 sm:p-12 flex items-center justify-center gap-5 w-full hover:bg-slate-50/60 transition-colors duration-300 group">
      <div className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5">{icon}</div>
      <div>
        <h3 className="text-3xl sm:text-4xl xl:text-5xl font-black text-slate-900 tracking-tight leading-none">
          {value}
        </h3>
        <p className="text-slate-500 text-xs xl:text-sm mt-2 font-bold tracking-wide">{label}</p>
      </div>
    </div>
  );
}

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
    <section className="relative w-full bg-white font-sans antialiased left-0 right-0">
      {/* Container forced to occupy 100% viewport width without padding or max-width limitations */}
      <div className="w-full min-w-full">
        
        {/* Main Hero Grid Section - Full Bleed */}
        <div className="relative grid grid-cols-1 lg:grid-cols-[53%_47%] min-h-[680px] xl:min-h-[780px] bg-white overflow-hidden w-full">
          
          {/* Left Side: Image with Experience Badge */}
          <div className="relative h-[450px] sm:h-[550px] lg:h-auto overflow-hidden w-full">
            <Image
              src="/downlaod.png"
              alt="KAAVERI Steel Structure"
              fill
              priority
              className="object-cover object-center"
            />

            {/* Top-Left Floating Experience Card */}
            <div className="absolute top-0 left-10 bg-white shadow-md w-[100px] py-6 px-2 flex flex-col justify-center items-center z-20 border-b-4 border-red-600">
              <h3 className="text-4xl font-extrabold text-red-600 tracking-tight">30+</h3>
              <p className="text-[9px] tracking-[2px] uppercase text-center text-slate-500 font-semibold leading-tight mt-2">
                Years Of<br />Excellence
              </p>
            </div>

            {/* Red accent strip behind the clip-path angle gap */}
            <div 
              className="hidden lg:block absolute top-0 bottom-0 right-0 w-[40px] bg-red-600 z-10"
              style={{
                clipPath: "polygon(100% 0, 100% 100%, 0% 100%, 75% 0)",
              }}
            />
          </div>

          {/* Right Side: Content Area with Angled Clip Path */}
          <div 
            className="relative bg-white z-10 lg:-ml-[12%] pl-8 pr-8 sm:px-12 lg:pl-24 lg:pr-16 xl:pr-24 py-16 lg:py-20 flex flex-col justify-center w-full"
            style={{
              clipPath: typeof window !== 'undefined' && window.innerWidth >= 1024 
                ? "polygon(12% 0, 100% 0, 100% 100%, 0% 100%)" 
                : "none"
            }}
          >
            {/* Section Tagline */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-red-600 uppercase tracking-[3px] text-xs font-bold">
                About Kaaveri
              </span>
              <div className="w-8 h-[1px] bg-red-600" />
            </div>

            {/* Main Display Headings */}
            <h2 className="text-4xl sm:text-5xl xl:text-[56px] font-serif font-black text-[#0f2137] leading-[1.15]">
              Built On Steel.
            </h2>
            <h2 className="text-4xl sm:text-5xl xl:text-[56px] font-serif font-black text-red-600 leading-[1.15] mt-1">
              Trusted By India.
            </h2>

            <div className="w-12 h-[2px] bg-red-600 mt-6 mb-6" />

            {/* Copy Descriptors */}
            <div className="space-y-4 text-slate-600 text-sm xl:text-base max-w-xl leading-relaxed font-normal">
              <p>
                At KAAVERI, we are passionate about steel and dedicated to excellence.
                As a leading manufacturer of TMT bars and structural steel products,
                we supply the construction industry with materials engineered for longevity.
              </p>
              <p>
                Our rigorous quality control ensures every product meets the highest
                global standards — empowering builders to raise structures that
                stand the test of time.
              </p>
            </div>

            {/* Combined 3-Column Features Card Container */}
            <div className="mt-10 border border-slate-200 rounded-lg bg-white shadow-sm grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 overflow-hidden">
              <div className="p-5 flex items-center gap-4">
                <Package className="w-8 h-8 text-red-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-xs xl:text-sm text-slate-900 leading-tight">Premium TMT Bars</h4>
                  <p className="text-slate-500 text-[11px] xl:text-xs mt-0.5">High strength & durability</p>
                </div>
              </div>

              <div className="p-5 flex items-center gap-4">
                <ShieldCheck className="w-8 h-8 text-red-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-xs xl:text-sm text-slate-900 leading-tight">ISI Certified</h4>
                  <p className="text-slate-500 text-[11px] xl:text-xs mt-0.5">Tested & trusted</p>
                </div>
              </div>

              <div className="p-5 flex items-center gap-4">
                <Users className="w-8 h-8 text-red-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-xs xl:text-sm text-slate-900 leading-tight">Trusted Partners</h4>
                  <p className="text-slate-500 text-[11px] xl:text-xs mt-0.5">Nationwide network</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded flex items-center justify-center gap-3 font-bold text-xs tracking-wider uppercase transition-colors min-w-[180px]">
                Explore More
                <ArrowRight size={14} />
              </button>

              <button className="border border-slate-300 hover:border-slate-400 text-slate-800 px-8 py-4 rounded flex items-center justify-center gap-3 font-bold text-xs tracking-wider uppercase transition-colors min-w-[180px]">
                <Download size={14} />
                Download Brochure
              </button>
            </div>
          </div>
        </div>

        {/* Navy Blue Feature Strip - Full Bleed */}
        <div className="bg-[#06162c] text-white border-b border-white/5 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-white/10 w-full">
            <DarkFeatureItem
              icon={<Factory size={28} className="text-red-500" />}
              title="Advanced Manufacturing"
              desc="State-of-the-art facilities with global technology"
            />
            <DarkFeatureItem
              icon={<ShieldCheck size={28} className="text-red-500" />}
              title="Quality Assured"
              desc="Stringent testing for uncompromised quality"
            />
            <DarkFeatureItem
              icon={<Leaf size={28} className="text-red-500" />}
              title="Sustainable Tomorrow"
              desc="Committed to eco-friendly practices"
            />
            <DarkFeatureItem
              icon={<Map size={28} className="text-red-500" />}
              title="Pan India Presence"
              desc="Strong distribution network across the nation"
            />
          </div>
        </div>

        {/* Light Minimalist Stats Footer - Full Bleed */}
        <div className="bg-white border-t border-slate-200 w-full">
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
      <div className="shrink-0 mt-1">{icon}</div>
      <div>
        <h4 className="text-xs font-bold uppercase tracking-[1.5px] text-white">
          {title}
        </h4>
        <p className="text-slate-400 text-xs mt-2 leading-relaxed">
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
        <p className="text-slate-500 text-xs mt-1.5 font-medium">{label}</p>
      </div>
    </div>
  );
}

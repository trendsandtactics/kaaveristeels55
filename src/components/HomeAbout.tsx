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
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-white">
      {/* Background Effects */}
      <div className="absolute top-20 right-0 h-[500px] w-[500px] rounded-full bg-red-100/40 blur-[150px]" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-blue-100/30 blur-[120px]" />

      <div className="relative">
        {/* Main Layout */}
        <div className="grid lg:grid-cols-[58%_42%] min-h-screen">
          {/* Image Side */}
          <div className="relative min-h-[600px] lg:min-h-screen overflow-hidden">
            <Image
              src="/downlaod.png"
              alt="KAAVERI Steel"
              fill
              priority
              className="object-cover object-center scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-transparent" />

            {/* Experience Card */}
            <div className="absolute top-8 md:top-14 left-8 md:left-14 bg-white/95 backdrop-blur-lg shadow-2xl w-[120px] h-[150px] flex flex-col justify-center items-center z-20 rounded-lg">
              <h3 className="text-5xl font-black text-red-600">30+</h3>

              <p className="text-[11px] tracking-[3px] uppercase text-center text-slate-600 leading-relaxed mt-2">
                Years Of
                <br />
                Excellence
              </p>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600 rounded-b-lg" />
            </div>
          </div>

          {/* Content Side */}
          <div className="relative flex items-center bg-white overflow-hidden">
            {/* Diagonal Divider */}
            <div className="hidden lg:block absolute -left-[180px] top-0 h-full w-[350px] bg-white rotate-[14deg]" />

            {/* Decorative Letter */}
            <div className="absolute top-0 right-0 text-[220px] xl:text-[300px] font-black text-slate-100 leading-none pointer-events-none select-none">
              K
            </div>

            <div className="relative z-10 px-8 md:px-14 xl:px-20 2xl:px-28 py-20">
              {/* Label */}
              <div className="flex items-center gap-5 mb-8">
                <span className="text-red-600 uppercase tracking-[4px] text-sm font-bold">
                  About Kaaveri
                </span>

                <div className="w-20 h-[2px] bg-red-600" />
              </div>

              {/* Heading */}
              <h2 className="text-5xl md:text-6xl xl:text-7xl 2xl:text-[6rem] font-black leading-[0.95] tracking-tight text-slate-900">
                Built On Steel.
              </h2>

              <h2 className="text-5xl md:text-6xl xl:text-7xl 2xl:text-[6rem] font-black leading-[0.95] tracking-tight text-red-600">
                Trusted By India.
              </h2>

              <div className="w-20 h-1 bg-red-600 mt-8 mb-10 rounded-full" />

              {/* Description */}
              <div className="space-y-6 max-w-3xl">
                <p className="text-lg xl:text-xl text-slate-600 leading-relaxed">
                  At KAAVERI, we are passionate about steel and dedicated to
                  excellence. As a leading manufacturer of TMT bars and
                  structural steel products, we supply the construction industry
                  with materials engineered for longevity and superior
                  performance.
                </p>

                <p className="text-lg xl:text-xl text-slate-600 leading-relaxed">
                  Our rigorous quality control ensures every product meets the
                  highest global standards, empowering builders to create
                  structures that stand the test of time.
                </p>
              </div>

              {/* Feature Cards */}
              <div className="grid md:grid-cols-3 gap-4 mt-12">
                <div className="group bg-white rounded-2xl border border-slate-200 p-6 hover:border-red-500 hover:shadow-xl transition-all duration-500">
                  <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-4">
                    <Package className="w-7 h-7 text-red-600" />
                  </div>

                  <h4 className="font-bold text-lg text-slate-900">
                    Premium TMT Bars
                  </h4>

                  <p className="text-slate-500 mt-2 text-sm">
                    High strength & durability
                  </p>
                </div>

                <div className="group bg-white rounded-2xl border border-slate-200 p-6 hover:border-red-500 hover:shadow-xl transition-all duration-500">
                  <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-4">
                    <ShieldCheck className="w-7 h-7 text-red-600" />
                  </div>

                  <h4 className="font-bold text-lg text-slate-900">
                    ISI Certified
                  </h4>

                  <p className="text-slate-500 mt-2 text-sm">
                    Tested & trusted
                  </p>
                </div>

                <div className="group bg-white rounded-2xl border border-slate-200 p-6 hover:border-red-500 hover:shadow-xl transition-all duration-500">
                  <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-4">
                    <Users className="w-7 h-7 text-red-600" />
                  </div>

                  <h4 className="font-bold text-lg text-slate-900">
                    Trusted Partners
                  </h4>

                  <p className="text-slate-500 mt-2 text-sm">
                    Nationwide network
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-5 mt-12">
                <button className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-5 rounded-xl font-bold uppercase tracking-wider flex items-center gap-3 shadow-xl transition-all duration-300">
                  Explore More

                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>

                <button className="bg-white border-2 border-slate-200 hover:border-red-600 px-10 py-5 rounded-xl font-bold uppercase tracking-wider flex items-center gap-3 transition-all duration-300">
                  <Download size={18} />
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Feature Strip */}
        <div className="relative z-20 lg:-mt-20 bg-gradient-to-r from-[#04101f] via-[#081b34] to-[#04101f] shadow-2xl">
          <div className="grid md:grid-cols-2 xl:grid-cols-4">
            <Feature
              icon={<Factory size={32} />}
              title="Advanced Manufacturing"
              desc="State-of-the-art facilities with global technology"
            />

            <Feature
              icon={<ShieldCheck size={32} />}
              title="Quality Assured"
              desc="Stringent testing for uncompromised quality"
            />

            <Feature
              icon={<Leaf size={32} />}
              title="Sustainable Tomorrow"
              desc="Committed to eco-friendly and responsible practices"
            />

            <Feature
              icon={<Map size={32} />}
              title="Pan India Presence"
              desc="Strong distribution network across the nation"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white border-t border-slate-200">
          <div className="grid md:grid-cols-2 xl:grid-cols-4">
            <Stat
              icon={<Award size={34} />}
              value="30+"
              label="Years Of Excellence"
            />

            <Stat
              icon={<Users size={34} />}
              value="500+"
              label="Happy Customers"
            />

            <Stat
              icon={<TrendingUp size={34} />}
              value="1 Mn+"
              label="Tons Capacity"
            />

            <Stat
              icon={<ShieldCheck size={34} />}
              value="ISI"
              label="Certified Products"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="group flex gap-5 p-8 border-b xl:border-b-0 border-white/10 xl:border-r last:border-r-0 hover:bg-white/5 transition-all duration-300">
      <div className="text-red-500 shrink-0">{icon}</div>

      <div>
        <h4 className="text-white uppercase tracking-[2px] font-bold text-sm">
          {title}
        </h4>

        <p className="text-slate-300 mt-3 text-sm leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}

function Stat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="group flex items-center gap-5 p-10 border-b xl:border-b-0 xl:border-r last:border-r-0 hover:bg-slate-50 transition-all duration-300">
      <div className="text-red-600 shrink-0">{icon}</div>

      <div>
        <h3 className="text-5xl font-black text-slate-900">{value}</h3>

        <p className="text-slate-500 mt-2">{label}</p>
      </div>
    </div>
  );
}

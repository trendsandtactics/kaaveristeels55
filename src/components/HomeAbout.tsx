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
    <section className="relative w-full overflow-hidden bg-[#f8f8f8]">
      <div className="relative w-full">
        {/* Main Section */}
        <div className="relative grid min-h-screen lg:grid-cols-[60%_40%]">
          {/* Left Image */}
          <div className="relative min-h-[700px] lg:min-h-screen overflow-hidden">
            <Image
              src="/downlaod.png"
              alt="Steel Structure"
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/5" />

            {/* Experience Badge */}
            <div className="absolute top-12 left-12 bg-white w-[120px] h-[150px] shadow-2xl flex flex-col items-center justify-center z-20">
              <h3 className="text-5xl font-bold text-red-600">30+</h3>

              <p className="text-xs tracking-[3px] uppercase text-slate-600 text-center mt-2 leading-relaxed">
                Years Of Excellence
              </p>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600" />
            </div>
          </div>

          {/* Right Content */}
          <div className="relative bg-white flex items-center">
            {/* Diagonal Divider */}
            <div className="hidden lg:block absolute -left-[180px] top-0 h-full w-[340px] bg-white rotate-[14deg] origin-top-right" />

            <div className="relative z-10 px-8 md:px-14 xl:px-20 py-20">
              {/* Label */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-red-600 uppercase tracking-[4px] text-sm font-semibold">
                  About Kaaveri
                </span>

                <div className="w-16 h-[2px] bg-red-600" />
              </div>

              {/* Heading */}
              <h2 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-tight text-slate-900">
                Built On Steel.
              </h2>

              <h2 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-tight text-red-600 mt-2">
                Trusted By India.
              </h2>

              <div className="w-16 h-[3px] bg-red-600 mt-8 mb-10" />

              {/* Description */}
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed max-w-5xl">
                <p>
                  At KAAVERI, we are passionate about steel and dedicated to
                  excellence. As a leading manufacturer of TMT bars and
                  structural steel products, we supply the construction industry
                  with materials engineered for longevity.
                </p>

                <p>
                  Our rigorous quality control ensures every product meets the
                  highest global standards, empowering builders to raise
                  structures that stand the test of time.
                </p>
              </div>

              {/* Feature Cards */}
              <div className="grid md:grid-cols-3 mt-12 border rounded-xl overflow-hidden shadow-sm bg-white">
                <div className="flex gap-4 p-6">
                  <Package className="w-10 h-10 text-red-600 shrink-0" />

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Premium TMT Bars
                    </h4>

                    <p className="text-sm text-slate-500">
                      High strength & durability
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-6 border-x">
                  <ShieldCheck className="w-10 h-10 text-red-600 shrink-0" />

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      ISI Certified
                    </h4>

                    <p className="text-sm text-slate-500">
                      Tested & trusted
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-6">
                  <Users className="w-10 h-10 text-red-600 shrink-0" />

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Trusted Partners
                    </h4>

                    <p className="text-sm text-slate-500">
                      Nationwide network
                    </p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-5 mt-10">
                <button className="group bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-md flex items-center gap-3 font-semibold tracking-wider uppercase transition-all">
                  Explore More

                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>

                <button className="border border-slate-300 hover:border-red-600 px-10 py-5 rounded-md flex items-center gap-3 font-semibold tracking-wider uppercase text-slate-900 transition-colors">
                  <Download size={18} />
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dark Feature Strip */}
        <div className="relative z-20 w-full -mt-16 bg-gradient-to-r from-[#071326] via-[#0f2341] to-[#071326]">
          <div className="grid md:grid-cols-2 xl:grid-cols-4">
            <Feature
              icon={<Factory size={40} />}
              title="Advanced Manufacturing"
              desc="State-of-the-art facilities with global technology"
            />

            <Feature
              icon={<ShieldCheck size={40} />}
              title="Quality Assured"
              desc="Stringent testing for uncompromised quality"
            />

            <Feature
              icon={<Leaf size={40} />}
              title="Sustainable Tomorrow"
              desc="Committed to eco-friendly and responsible practices"
            />

            <Feature
              icon={<Map size={40} />}
              title="Pan India Presence"
              desc="Strong distribution network across the nation"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="w-full bg-white border-t border-slate-200 shadow-sm">
          <div className="grid md:grid-cols-2 xl:grid-cols-4">
            <Stat
              icon={<Award size={38} />}
              value="30+"
              label="Years Of Excellence"
            />

            <Stat
              icon={<Users size={38} />}
              value="500+"
              label="Happy Customers"
            />

            <Stat
              icon={<TrendingUp size={38} />}
              value="1 Mn+"
              label="Tons Capacity"
            />

            <Stat
              icon={<ShieldCheck size={38} />}
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
    <div className="flex gap-5 p-8 border-b lg:border-b-0 border-white/10 lg:border-r">
      <div className="text-red-500 shrink-0">{icon}</div>

      <div>
        <h4 className="text-white uppercase tracking-[2px] font-semibold">
          {title}
        </h4>

        <p className="text-slate-300 mt-2 text-sm leading-relaxed">
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
    <div className="flex items-center gap-5 p-8 border-b lg:border-b-0 lg:border-r last:border-r-0">
      <div className="text-red-600 shrink-0">{icon}</div>

      <div>
        <h3 className="text-4xl md:text-5xl font-bold text-slate-900">
          {value}
        </h3>

        <p className="text-slate-500 mt-1">{label}</p>
      </div>
    </div>
  );
}

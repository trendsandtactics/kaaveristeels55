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
        <div className="relative grid lg:grid-cols-[60%_40%] min-h-[900px]">
          {/* Left Image */}
          <div className="relative h-[550px] md:h-[700px] lg:h-[900px] overflow-hidden">
            <Image
              src="/downlaod.png"
              alt="KAAVERI Steel"
              fill
              priority
              className="object-cover object-center transition-transform duration-[4000ms] hover:scale-110"
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

          {/* Right Content */}
          <div className="relative bg-white flex items-center">
            {/* Diagonal Divider */}
            <div className="hidden lg:block absolute -left-[180px] top-0 h-full w-[340px] bg-white rotate-[14deg] origin-top-right" />

            <div className="relative z-10 px-8 md:px-14 xl:px-20 py-20">
              {/* Label */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-red-600 uppercase tracking-[4px] text-sm font-bold">
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

              <div className="w-16 h-1 bg-red-600 mt-8 mb-10" />

              {/* Description */}
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed max-w-3xl">
                <p>
                  At KAAVERI, we are passionate about steel and dedicated to
                  excellence. As a leading manufacturer of TMT bars and
                  structural steel products, we supply the construction industry
                  with materials engineered for longevity.
                </p>

                <p>
                  Our rigorous quality control ensures every product meets the
                  highest global standards, empowering builders to create
                  structures that stand the test of time.
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

                <div className="group min-h-[190px] bg-white rounded-2xl border border-slate-200 p-7 flex flex-col justify-center hover:border-red-500 hover:shadow-2xl transition-all duration-500">
                  <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-5">
                    <Users className="w-8 h-8 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-slate-900">
                      Trusted Partners
                    </h4>
                    <p className="text-slate-500 mt-2 text-base">
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
        <div className="relative z-20 bg-gradient-to-r from-[#031126] via-[#082042] to-[#031126]">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
            <Feature
              icon={<Factory size={34} />}
              title="Advanced Manufacturing"
              desc="State-of-the-art facilities with global technology"
            />

            <Feature
              icon={<ShieldCheck size={34} />}
              title="Quality Assured"
              desc="Stringent testing for uncompromised quality"
            />

            <Feature
              icon={<Leaf size={34} />}
              title="Sustainable Tomorrow"
              desc="Committed to eco-friendly practices"
            />

            <Feature
              icon={<Map size={34} />}
              title="Pan India Presence"
              desc="Strong distribution network across India"
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
    <div className="group relative overflow-hidden p-8 xl:p-10 border-b sm:border-r border-white/10 hover:bg-white/5 transition-all duration-500 min-h-[160px] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/0 to-red-600/0 group-hover:from-red-600/5 group-hover:via-red-600/10 group-hover:to-red-600/5 transition-all duration-500" />

      <div className="relative flex gap-5 items-start">
        <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-red-500 shrink-0 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>

        <div>
          <h4 className="text-white text-base xl:text-lg uppercase tracking-[2px] font-bold">
            {title}
          </h4>

          <p className="text-slate-300 mt-3 text-sm xl:text-base leading-relaxed">
            {desc}
          </p>
        </div>
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
    <div className="group flex items-center gap-5 p-8 xl:p-10 border-b xl:border-b-0 xl:border-r border-slate-200 hover:bg-slate-50 transition-all duration-300 min-h-[150px]">
      <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center text-red-600 shrink-0">
        {icon}
      </div>

      <div>
        <h3 className="text-4xl xl:text-5xl font-black text-slate-900">
          {value}
        </h3>

        <p className="text-slate-500 mt-2 text-sm xl:text-base">{label}</p>
      </div>
    </div>
  );
}

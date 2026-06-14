"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Factory,
  ShieldCheck,
  HardHat,
  ArrowRight,
  Download,
} from "lucide-react";

export default function HomeAbout() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">

      {/* Background Shape */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-red-50 rounded-full blur-3xl opacity-40" />

      {/* Watermark */}
      <div className="absolute bottom-0 right-0 opacity-[0.06] pointer-events-none">
        <Image
          src="/Background.png"
          alt=""
          width={800}
          height={800}
        />
      </div>

      <div className="w-full max-w-[1700px] mx-auto px-6 md:px-10 xl:px-20 relative z-10">

        <div className="grid lg:grid-cols-[60%_40%] gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-[2px] bg-red-600" />

              <span className="uppercase tracking-[4px] text-red-600 text-sm font-semibold">
                ABOUT KAAVERI
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl xl:text-7xl font-black leading-[0.95] text-slate-900 mb-8">
              Strength That
              <span className="block text-red-600">
                Shapes The Future
              </span>
            </h2>

            <div className="w-24 h-[3px] bg-gray-200 mb-10 relative">
              <div className="absolute left-0 top-0 w-12 h-[3px] bg-red-600" />
            </div>

            <div className="space-y-8 text-lg leading-relaxed text-gray-600 max-w-4xl">

              <p>
                At KAAVERI, we are passionate about steel and dedicated
                to excellence. As a leading manufacturer of TMT bars and
                structural steel products, we provide premium quality
                materials trusted by engineers, builders and developers.
              </p>

              <p>
                Through advanced manufacturing processes, rigorous quality
                standards and continuous innovation, we help create
                stronger and safer structures for future generations.
              </p>

            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-8 mt-14 max-w-3xl">

              <div>
                <h3 className="text-4xl font-black text-red-600">
                  500+
                </h3>

                <p className="text-gray-500 mt-2">
                  Projects Delivered
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-red-600">
                  100K+
                </h3>

                <p className="text-gray-500 mt-2">
                  Tons Produced
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-red-600">
                  100%
                </h3>

                <p className="text-gray-500 mt-2">
                  Quality Tested
                </p>
              </div>

            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-5 mt-14">

              <Link href="/about-us">
                <button className="h-16 px-10 rounded-2xl bg-gradient-to-r from-red-700 to-red-500 text-white font-bold flex items-center gap-3 shadow-lg hover:-translate-y-1 transition-all duration-300">
                  Explore More
                  <ArrowRight size={18} />
                </button>
              </Link>

              <button className="h-16 px-10 rounded-2xl border border-gray-200 bg-white text-gray-700 font-semibold flex items-center gap-3 hover:shadow-md transition-all duration-300">
                <Download size={18} />
                Download Brochure
              </button>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div>

            <div className="relative overflow-hidden rounded-[40px] shadow-[0_25px_80px_rgba(0,0,0,0.15)]">

              <Image
                src="/image/about1.png"
                alt="Kaaveri Steel"
                width={900}
                height={1000}
                className="w-full h-[700px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            </div>

          </div>

        </div>

        {/* FEATURES */}
        <div className="grid md:grid-cols-3 gap-8 mt-28">

          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
            <Factory className="text-red-600 mb-6" size={30} />

            <h4 className="font-bold text-2xl text-slate-900 mb-3">
              Premium TMT Bars
            </h4>

            <p className="text-gray-500 leading-relaxed">
              High-strength steel solutions engineered for durability,
              safety and long-term performance.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
            <ShieldCheck className="text-red-600 mb-6" size={30} />

            <h4 className="font-bold text-2xl text-slate-900 mb-3">
              ISI Certified
            </h4>

            <p className="text-gray-500 leading-relaxed">
              Manufactured under strict quality control processes and
              certified to industry standards.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
            <HardHat className="text-red-600 mb-6" size={30} />

            <h4 className="font-bold text-2xl text-slate-900 mb-3">
              Trusted Builders
            </h4>

            <p className="text-gray-500 leading-relaxed">
              Preferred by leading contractors, developers and
              infrastructure projects nationwide.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

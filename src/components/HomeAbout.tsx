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
    <section className="relative overflow-hidden bg-[#fafafa] py-16 lg:py-24">

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-red-50 blur-3xl opacity-70" />

        <Image
          src="/Background.png"
          alt=""
          fill
          className="object-contain object-right opacity-[0.08]"
        />
      </div>

      <div className="relative z-10 w-full px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-24">

        <div className="grid lg:grid-cols-[55%_45%] gap-8 xl:gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-[2px] bg-red-600" />

              <span className="uppercase tracking-[4px] text-red-600 text-sm font-semibold">
                ABOUT KAAVERI
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl xl:text-7xl font-black leading-[0.95] text-slate-900 mb-8">
              Strength That
              <span className="block text-red-600">
                Shapes The Future
              </span>
            </h2>

            <div className="w-24 h-[3px] bg-gray-200 mb-10 relative">
              <div className="absolute left-0 top-0 w-12 h-[3px] bg-red-600" />
            </div>

            <div className="space-y-6 text-base lg:text-lg leading-relaxed text-gray-600 max-w-4xl">
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

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 max-w-3xl">

              <div>
                <h3 className="text-3xl lg:text-5xl font-black text-red-600">
                  500+
                </h3>
                <p className="text-gray-500 mt-2 text-sm">
                  Projects Delivered
                </p>
              </div>

              <div>
                <h3 className="text-3xl lg:text-5xl font-black text-red-600">
                  100K+
                </h3>
                <p className="text-gray-500 mt-2 text-sm">
                  Tons Produced
                </p>
              </div>

              <div>
                <h3 className="text-3xl lg:text-5xl font-black text-red-600">
                  100%
                </h3>
                <p className="text-gray-500 mt-2 text-sm">
                  Quality Tested
                </p>
              </div>

            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mt-12">

              <Link href="/about-us">
                <button className="h-14 px-8 rounded-2xl bg-gradient-to-r from-red-700 to-red-500 text-white font-bold flex items-center gap-3 shadow-lg hover:-translate-y-1 transition-all duration-300">
                  Explore More
                  <ArrowRight size={18} />
                </button>
              </Link>

              <button className="h-14 px-8 rounded-2xl border border-gray-200 bg-white text-gray-700 font-semibold flex items-center gap-3 hover:shadow-md transition-all duration-300">
                <Download size={18} />
                Download Brochure
              </button>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:justify-end">

            <div className="relative w-full h-[500px] lg:h-[700px] overflow-hidden rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.15)]">

              <Image
                src="/image/about1.png"
                alt="Kaaveri Steel"
                fill
                priority
                sizes="45vw"
                className="object-cover scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

            </div>

          </div>

        </div>

        {/* FEATURES */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">

          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300">
            <Factory className="text-red-600 mb-6" size={30} />

            <h4 className="font-bold text-xl text-slate-900 mb-3">
              Premium TMT Bars
            </h4>

            <p className="text-gray-500 leading-relaxed">
              High-strength steel solutions engineered for durability,
              safety and long-term performance.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300">
            <ShieldCheck className="text-red-600 mb-6" size={30} />

            <h4 className="font-bold text-xl text-slate-900 mb-3">
              ISI Certified
            </h4>

            <p className="text-gray-500 leading-relaxed">
              Manufactured under strict quality control processes and
              certified to industry standards.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300">
            <HardHat className="text-red-600 mb-6" size={30} />

            <h4 className="font-bold text-xl text-slate-900 mb-3">
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

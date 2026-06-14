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
    <section className="relative overflow-hidden bg-[#f8f8f8] py-24 lg:py-32">

      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Image
          src="/Background.png"
          alt=""
          fill
          className="object-contain object-right opacity-[0.08]"
        />
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-50 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* Top Content */}
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">

          {/* Content */}
          <div>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-[2px] bg-red-600" />

              <span className="uppercase tracking-[4px] text-red-600 font-semibold text-sm">
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

            <div className="space-y-8 text-gray-600 text-lg leading-relaxed max-w-3xl">
              <p>
                At KAAVERI, we are passionate about steel and dedicated to
                excellence. As a leading manufacturer of TMT bars and
                structural steel products, we are committed to delivering
                superior quality materials for modern construction.
              </p>

              <p>
                Through advanced manufacturing processes, stringent quality
                control, and a commitment to innovation, we empower builders
                and developers to create structures that stand strong for
                generations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 mt-12">

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

          {/* Image Card */}
          <div className="relative">

            <div className="relative overflow-hidden rounded-[32px] shadow-2xl">

              <Image
                src="/image/about1.png"
                alt="Kaaveri Steel"
                width={700}
                height={800}
                className="w-full h-[600px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <div className="absolute bottom-8 left-8 right-8">

                <div className="bg-white rounded-3xl p-6 shadow-xl">

                  <div className="grid grid-cols-3 gap-6 text-center">

                    <div>
                      <h3 className="text-3xl font-black text-red-600">
                        500+
                      </h3>

                      <p className="text-sm text-gray-500 mt-1">
                        Projects
                      </p>
                    </div>

                    <div>
                      <h3 className="text-3xl font-black text-red-600">
                        100K+
                      </h3>

                      <p className="text-sm text-gray-500 mt-1">
                        Tons Produced
                      </p>
                    </div>

                    <div>
                      <h3 className="text-3xl font-black text-red-600">
                        100%
                      </h3>

                      <p className="text-sm text-gray-500 mt-1">
                        Quality Tested
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">

          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">

            <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mb-6">
              <Factory className="text-red-600" size={26} />
            </div>

            <h4 className="font-bold text-2xl text-slate-900 mb-3">
              Premium TMT Bars
            </h4>

            <p className="text-gray-500 leading-relaxed">
              Engineered for superior strength, durability, and long-term
              structural performance.
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">

            <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mb-6">
              <ShieldCheck className="text-red-600" size={26} />
            </div>

            <h4 className="font-bold text-2xl text-slate-900 mb-3">
              ISI Certified
            </h4>

            <p className="text-gray-500 leading-relaxed">
              Manufactured under rigorous quality standards and tested for
              maximum reliability.
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">

            <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mb-6">
              <HardHat className="text-red-600" size={26} />
            </div>

            <h4 className="font-bold text-2xl text-slate-900 mb-3">
              Trusted Builders
            </h4>

            <p className="text-gray-500 leading-relaxed">
              Preferred by contractors, developers, and infrastructure
              projects nationwide.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

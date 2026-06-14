"use client";

import React from "react";
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
    <section className="relative overflow-hidden bg-[#f7f7f7]">
      {/* Background Texture */}
      <div className="absolute inset-0">
        <Image
          src="/image/aboutbackground.png"
          alt=""
          fill
          className="object-cover opacity-10"
        />
      </div>

      <div className="relative z-10">
        <div className="grid lg:grid-cols-[45%_55%] min-h-screen">
          {/* LEFT IMAGE SECTION */}
          <div className="relative h-[450px] lg:h-screen w-full overflow-hidden">
            <Image
              src="/image/about1.png"
              alt="Kaaveri Steel"
              fill
              priority
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/25" />

            {/* Tagline */}
            <div className="absolute top-10 left-8 lg:top-16 lg:left-16 z-20">
              <div className="w-14 h-[3px] bg-red-600 mb-4" />

              <h4 className="text-white uppercase tracking-[4px] text-xs lg:text-sm font-semibold leading-6 lg:leading-7">
                MAKING INDIA
                <br />
                STRONGER
              </h4>
            </div>
          </div>

          {/* RIGHT CONTENT SECTION */}
          <div className="relative flex items-center py-16 lg:py-0">
            <div className="absolute inset-0 opacity-[0.03]">
              <Image
                src="/image/aboutbackground.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>

            <div className="relative z-10 px-6 sm:px-12 lg:px-20 xl:px-24 max-w-[850px]">
              {/* Section Label */}
              <div className="flex items-center gap-4 mb-6 lg:mb-8">
                <div className="w-14 h-[2px] bg-red-600" />

                <span className="uppercase tracking-[4px] text-red-600 font-bold text-xs lg:text-sm">
                  ABOUT KAAVERI
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-[72px] leading-tight lg:leading-[0.95] font-black text-slate-900">
                Strength That
                <span className="block text-red-600">
                  Shapes The Future
                </span>
              </h2>

              {/* Divider */}
              <div className="w-24 h-[3px] bg-gray-200 mt-6 lg:mt-8 mb-8 lg:mb-10 relative">
                <div className="absolute left-0 top-0 w-10 h-[3px] bg-red-600" />
              </div>

              {/* Content */}
              <div className="space-y-6 lg:space-y-8 text-gray-700 text-base lg:text-lg leading-relaxed">
                <p>
                  At KAAVERI, we are passionate about steel and dedicated
                  to excellence. As a leading manufacturer of TMT bars and
                  structural steel products, we are committed to providing
                  the construction industry with the highest quality
                  materials.
                </p>

                <p>
                  Our state-of-the-art manufacturing processes and
                  rigorous quality control ensure every product meets the
                  highest global standards, empowering builders to create
                  structures that stand the test of time.
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
                <div>
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                    <Factory className="text-red-600" size={24} />
                  </div>

                  <h4 className="font-bold text-lg text-slate-900">
                    Premium TMT Bars
                  </h4>

                  <p className="text-sm text-gray-500 mt-2">
                    High strength & durability
                  </p>
                </div>

                <div>
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                    <ShieldCheck className="text-red-600" size={24} />
                  </div>

                  <h4 className="font-bold text-lg text-slate-900">
                    ISI Certified
                  </h4>

                  <p className="text-sm text-gray-500 mt-2">
                    Tested & Trusted
                  </p>
                </div>

                <div>
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                    <HardHat className="text-red-600" size={24} />
                  </div>

                  <h4 className="font-bold text-lg text-slate-900">
                    Trusted Builders
                  </h4>

                  <p className="text-sm text-gray-500 mt-2">
                    Nationwide partnerships
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-12">
                <Link href="/about-us">
                  <button className="w-full sm:w-auto h-14 px-8 bg-gradient-to-r from-red-700 to-red-500 text-white rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg hover:shadow-red-500/30 hover:-translate-y-1 transition-all duration-300">
                    Explore More
                    <ArrowRight size={18} />
                  </button>
                </Link>

                <button className="w-full sm:w-auto h-14 px-8 border-2 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all duration-300">
                    <Download size={18} />
                    Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

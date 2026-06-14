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
    <section className="relative overflow-hidden bg-[#f8f8f8]">
      {/* Background Texture */}
      <div className="absolute inset-0">
        <Image
          src="/image/aboutbackground.png"
          alt=""
          fill
          priority
          className="object-cover opacity-10"
        />
      </div>

      <div className="relative z-10">
        <div className="grid lg:grid-cols-[48%_52%] min-h-screen">

          {/* ================= LEFT PANEL ================= */}
          <div className="relative h-[550px] lg:h-screen overflow-hidden">

            <Image
              src="/image/about1.png"
              alt="Kaaveri Steel"
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/10" />

            <div className="relative z-20 flex flex-col justify-between h-full px-8 lg:px-16 py-10 lg:py-16">

              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-[2px] bg-red-500" />

                  <span className="text-white uppercase tracking-[4px] text-xs font-semibold">
                    ABOUT KAAVERI
                  </span>
                </div>

                <h2 className="max-w-[500px] text-white text-4xl lg:text-6xl font-black leading-tight">
                  Building The
                  <span className="block text-red-500">
                    Future With Steel
                  </span>
                </h2>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <h3 className="text-white text-3xl font-bold">
                    500+
                  </h3>

                  <p className="text-white/70 text-sm">
                    Projects Delivered
                  </p>
                </div>

                <div>
                  <h3 className="text-white text-3xl font-bold">
                    100K+
                  </h3>

                  <p className="text-white/70 text-sm">
                    Tons Produced
                  </p>
                </div>

                <div>
                  <h3 className="text-white text-3xl font-bold">
                    100%
                  </h3>

                  <p className="text-white/70 text-sm">
                    Quality Tested
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden lg:block absolute top-0 right-0 h-full w-[120px] bg-[#f8f8f8] skew-x-[-12deg] translate-x-1/2" />
          </div>

          {/* ================= RIGHT PANEL ================= */}
          <div className="relative flex items-center bg-[#f8f8f8]">

            <div className="absolute inset-0 overflow-hidden">
              <Image
                src="/Background.png"
                alt=""
                fill
                className="object-contain object-right opacity-15"
              />
            </div>

            <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 xl:px-20 py-16">

              {/* Label */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-[2px] bg-red-600" />

                <span className="uppercase tracking-[4px] text-red-600 font-bold text-xs">
                  ABOUT KAAVERI
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl sm:text-5xl lg:text-[72px] font-black leading-[0.95] text-slate-900">
                Strength That
                <span className="block text-red-600">
                  Shapes The Future
                </span>
              </h2>

              <div className="w-24 h-[3px] bg-gray-200 mt-8 mb-10 relative">
                <div className="absolute left-0 top-0 w-12 h-[3px] bg-red-600" />
              </div>

              {/* Content */}
              <div className="space-y-8 text-gray-700 text-base lg:text-lg leading-relaxed max-w-[900px]">

                <p>
                  At KAAVERI, we are passionate about steel and dedicated
                  to excellence. As a leading manufacturer of TMT bars
                  and structural steel products, we are committed to
                  providing the construction industry with the highest
                  quality materials.
                </p>

                <p>
                  Our state-of-the-art manufacturing processes and
                  rigorous quality control ensure every product meets
                  the highest global standards, empowering builders
                  to create structures that stand the test of time.
                </p>

              </div>

              {/* Feature Cards */}
              <div className="grid md:grid-cols-3 gap-6 mt-14">

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                  <Factory
                    className="text-red-600 mb-4"
                    size={26}
                  />

                  <h4 className="font-bold text-lg text-slate-900">
                    Premium TMT Bars
                  </h4>

                  <p className="text-sm text-gray-500 mt-2">
                    High strength & durability
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                  <ShieldCheck
                    className="text-red-600 mb-4"
                    size={26}
                  />

                  <h4 className="font-bold text-lg text-slate-900">
                    ISI Certified
                  </h4>

                  <p className="text-sm text-gray-500 mt-2">
                    Tested & Trusted
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                  <HardHat
                    className="text-red-600 mb-4"
                    size={26}
                  />

                  <h4 className="font-bold text-lg text-slate-900">
                    Trusted Builders
                  </h4>

                  <p className="text-sm text-gray-500 mt-2">
                    Nationwide Partnerships
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

                <button className="h-16 px-10 rounded-2xl bg-white border border-gray-200 text-gray-700 font-semibold flex items-center gap-3 hover:shadow-md transition-all duration-300">
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

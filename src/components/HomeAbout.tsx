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
    <section className="relative overflow-hidden bg-[#f8f8f8] py-20 lg:py-28">

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -top-40 left-1/3 w-[900px] h-[900px] bg-white rounded-full blur-3xl opacity-70" />

        {/* Curved Lines */}
        <div className="absolute right-0 top-0 w-[900px] h-[900px]">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full border border-red-100"
              style={{
                width: `${700 + i * 40}px`,
                height: `${700 + i * 40}px`,
                top: `${i * 12}px`,
                right: `${-250 + i * 10}px`,
              }}
            />
          ))}
        </div>

        {/* Dots */}
        <div className="absolute top-20 right-24 grid grid-cols-6 gap-4">
          {[...Array(36)].map((_, i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-gray-300"
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-[1700px] mx-auto px-6 lg:px-12">

        {/* Main Section */}
        <div className="grid lg:grid-cols-[48%_52%] gap-10 items-center">

          {/* Left */}
          <div>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[2px] bg-red-600" />
              <span className="uppercase tracking-[4px] text-red-600 text-sm font-semibold">
                ABOUT KAAVERI
              </span>
            </div>

            <h2 className="font-serif text-[52px] md:text-[70px] xl:text-[82px] leading-[0.95] font-bold text-slate-900">
              Strength That
              <span className="block text-red-600">
                Shapes The Future
              </span>
            </h2>

            <div className="mt-8 flex items-center gap-3">
              <div className="w-10 h-[3px] bg-red-600" />
              <div className="w-10 h-[3px] bg-gray-200" />
            </div>

            <div className="mt-10 max-w-2xl space-y-6 text-gray-600 leading-relaxed text-lg">
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

            <div className="flex flex-wrap gap-5 mt-12">

              <Link href="/about-us">
                <button className="h-14 px-10 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-semibold flex items-center gap-3 transition">
                  Explore More
                  <ArrowRight size={18} />
                </button>
              </Link>

              <button className="h-14 px-10 rounded-2xl border border-gray-300 bg-white font-medium flex items-center gap-3">
                <Download size={18} />
                Download Brochure
              </button>

            </div>
          </div>

          {/* Right */}
          <div className="relative min-h-[700px] flex items-center justify-center">

            {/* Red Circle */}
            <div className="absolute w-[650px] h-[650px] rounded-full bg-red-600 top-10 right-10" />

            {/* House */}
            <div className="relative z-20">
              <Image
                src="/image/about1.png"
                alt="Kaaveri"
                width={950}
                height={750}
                priority
                className="object-contain"
              />
            </div>

            {/* TMT Bars */}
            <Image
              src="/image/tmt-bars.png"
              alt="TMT Bars"
              width={500}
              height={250}
              className="absolute bottom-0 right-0 z-30"
            />

          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 bg-white rounded-[30px] shadow-lg border border-gray-100 p-8">

          <div className="grid md:grid-cols-3">

            <div className="flex items-center gap-5 md:border-r border-gray-200">

              <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center">
                <Factory className="text-white" size={24} />
              </div>

              <div>
                <h3 className="text-4xl font-bold text-slate-900">
                  500+
                </h3>
                <p className="text-gray-500">
                  Projects Delivered
                </p>
              </div>

            </div>

            <div className="flex items-center gap-5 md:px-10 md:border-r border-gray-200">

              <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center">
                <Factory className="text-white" size={24} />
              </div>

              <div>
                <h3 className="text-4xl font-bold text-slate-900">
                  100K+
                </h3>
                <p className="text-gray-500">
                  Tons Produced
                </p>
              </div>

            </div>

            <div className="flex items-center gap-5 md:px-10">

              <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center">
                <ShieldCheck className="text-white" size={24} />
              </div>

              <div>
                <h3 className="text-4xl font-bold text-slate-900">
                  100%
                </h3>
                <p className="text-gray-500">
                  Quality Tested
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* Features */}
        <div className="grid lg:grid-cols-3 gap-8 mt-10">

          {/* Card 1 */}
          <div className="bg-white rounded-[30px] p-8 shadow-lg border border-gray-100">

            <div className="flex gap-6">

              <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                <Factory className="text-red-600" size={34} />
              </div>

              <div className="w-px bg-red-200" />

              <div>
                <h4 className="text-2xl font-bold text-slate-900">
                  Premium TMT Bars
                </h4>

                <p className="text-gray-500 mt-4 leading-relaxed">
                  High-strength steel solutions engineered for durability,
                  safety and long-term performance.
                </p>

                <div className="w-16 h-1 bg-red-600 mt-6 rounded-full" />
              </div>

            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[30px] p-8 shadow-lg border border-gray-100">

            <div className="flex gap-6">

              <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                <ShieldCheck className="text-red-600" size={34} />
              </div>

              <div className="w-px bg-red-200" />

              <div>
                <h4 className="text-2xl font-bold text-slate-900">
                  ISI Certified
                </h4>

                <p className="text-gray-500 mt-4 leading-relaxed">
                  Manufactured under strict quality control processes
                  and certified to industry standards.
                </p>

                <div className="w-16 h-1 bg-red-600 mt-6 rounded-full" />
              </div>

            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-[30px] p-8 shadow-lg border border-gray-100">

            <div className="flex gap-6">

              <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                <HardHat className="text-red-600" size={34} />
              </div>

              <div className="w-px bg-red-200" />

              <div>
                <h4 className="text-2xl font-bold text-slate-900">
                  Trusted Builders
                </h4>

                <p className="text-gray-500 mt-4 leading-relaxed">
                  Preferred by leading contractors, developers and
                  infrastructure projects nationwide.
                </p>

                <div className="w-16 h-1 bg-red-600 mt-6 rounded-full" />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

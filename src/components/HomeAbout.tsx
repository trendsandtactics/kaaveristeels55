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
    <section className="relative overflow-hidden bg-[#f7f7f7] py-20 lg:py-28">

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Concentric arcs top-right */}
        <div className="absolute -right-64 -top-64 w-[900px] h-[900px]">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full border border-red-100"
              style={{
                width: `${600 + i * 50}px`,
                height: `${600 + i * 50}px`,
                top: `${i * 5}px`,
                left: `${i * 5}px`,
              }}
            />
          ))}
        </div>

        {/* Dots grid */}
        <div className="absolute top-16 right-16 grid grid-cols-6 gap-4">
          {[...Array(36)].map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full bg-gray-300" />
          ))}
        </div>

        {/* Bottom-right red blob */}
        <div className="absolute -bottom-40 -right-20 w-[700px] h-[700px] bg-red-600 rounded-[40%] rotate-12" />
      </div>

      <div className="relative z-10 max-w-[1700px] mx-auto px-6 lg:px-12">

        {/* Main Section */}
        <div className="grid lg:grid-cols-[46%_54%] gap-10 items-center">

          {/* Left */}
          <div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-[2px] bg-red-600" />
              <span className="uppercase tracking-[4px] text-red-600 text-sm font-bold">
                ABOUT KAAVERI
              </span>
            </div>

            <h2 className="font-serif text-[44px] md:text-[56px] xl:text-[64px] leading-[1.15] font-bold text-slate-900">
              Strength That
              <span className="block text-red-600">
                Shapes The Future
              </span>
            </h2>

            <div className="mt-6 flex items-center gap-3">
              <div className="w-10 h-[3px] bg-red-600" />
              <div className="w-10 h-[3px] bg-gray-200" />
            </div>

            <div className="mt-8 max-w-2xl space-y-5 text-gray-500 leading-relaxed">
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

            <div className="flex flex-wrap gap-4 mt-10">

              <Link href="/about-us">
                <button className="h-12 px-7 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold flex items-center gap-2 transition text-sm">
                  Explore More
                  <ArrowRight size={16} />
                </button>
              </Link>

              <button className="h-12 px-7 rounded-xl border border-gray-300 bg-white font-medium flex items-center gap-2 text-sm">
                <Download size={16} />
                Download Brochure
              </button>

            </div>
          </div>

          {/* Right */}
          <div className="relative min-h-[450px] lg:min-h-[600px] flex items-center justify-center">

            {/* Red Circle behind */}
            <div className="absolute w-[480px] h-[480px] rounded-full bg-red-600 top-0 right-0 lg:right-10" />

            {/* House */}
            <div className="relative z-20 w-full max-w-[850px]">
              <Image
                src="/image/about1.png"
                alt="Kaaveri"
                width={950}
                height={750}
                priority
                className="object-contain w-full h-auto"
              />
            </div>

            {/* TMT Bars */}
            <Image
              src="/image/tmt-bars.png"
              alt="TMT Bars"
              width={500}
              height={250}
              className="absolute bottom-0 right-0 z-30 w-[60%] h-auto"
            />

          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 bg-white rounded-[24px] shadow-lg border border-gray-100 p-6 lg:p-8">

          <div className="grid sm:grid-cols-3 gap-6">

            <div className="flex items-center gap-4 sm:border-r border-gray-200">
              <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shrink-0">
                <Factory className="text-white" size={22} />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-slate-900">500+</h3>
                <p className="text-gray-500 text-sm">Projects Delivered</p>
              </div>
            </div>

            <div className="flex items-center gap-4 sm:px-6 sm:border-r border-gray-200">
              <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shrink-0">
                <Factory className="text-white" size={22} />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-slate-900">100K+</h3>
                <p className="text-gray-500 text-sm">Tons Produced</p>
              </div>
            </div>

            <div className="flex items-center gap-4 sm:px-6">
              <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="text-white" size={22} />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-slate-900">100%</h3>
                <p className="text-gray-500 text-sm">Quality Tested</p>
              </div>
            </div>

          </div>
        </div>

        {/* Features */}
        <div className="grid lg:grid-cols-3 gap-6 mt-6">

          {/* Card 1 */}
          <div className="bg-white rounded-[24px] p-7 shadow-lg border border-gray-100">
            <div className="flex gap-5">
              <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shrink-0">
                <Factory className="text-white" size={26} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900">
                  Premium TMT Bars
                </h4>
                <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                  High-strength steel solutions engineered for durability,
                  safety and long-term performance.
                </p>
                <div className="w-14 h-[3px] bg-red-600 mt-5 rounded-full" />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[24px] p-7 shadow-lg border border-gray-100">
            <div className="flex gap-5">
              <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="text-white" size={26} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900">
                  ISI Certified
                </h4>
                <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                  Manufactured under strict quality control processes
                  and certified to industry standards.
                </p>
                <div className="w-14 h-[3px] bg-red-600 mt-5 rounded-full" />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-[24px] p-7 shadow-lg border border-gray-100">
            <div className="flex gap-5">
              <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shrink-0">
                <HardHat className="text-white" size={26} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900">
                  Trusted Builders
                </h4>
                <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                  Preferred by leading contractors, developers and
                  infrastructure projects nationwide.
                </p>
                <div className="w-14 h-[3px] bg-red-600 mt-5 rounded-full" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

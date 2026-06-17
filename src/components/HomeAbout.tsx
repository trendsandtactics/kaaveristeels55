"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  FileText,
  Award,
  ShieldCheck,
  Users,
  HardHat,
  Factory,
} from "lucide-react";

const features = [
  {
    title: "Premium TMT Bars",
    desc: "Manufactured using advanced thermo-mechanical treatment technology for superior strength and seismic resistance.",
    icon: ShieldCheck,
  },
  {
    title: "BIS Certified Quality",
    desc: "Strict quality control and certified manufacturing processes ensuring industry-leading standards.",
    icon: Award,
  },
  {
    title: "Structural Integrity",
    desc: "Engineered to withstand extreme loads and provide long-term durability in every application.",
    icon: HardHat,
  },
  {
    title: "Trusted Nationwide",
    desc: "Supplying infrastructure and commercial projects across India with reliable steel solutions.",
    icon: Users,
  },
];

export default function HomeAbout() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #000 1px, transparent 0)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative grid lg:grid-cols-[55%_45%] min-h-screen">
        {/* LEFT IMAGE SECTION */}
        <div className="relative min-h-[500px] lg:min-h-screen overflow-hidden">
          <Image
            src="/product.png"
            alt="Kaaveri Steel Plant"
            fill
            priority
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-transparent" />

          {/* Top Badge */}
          <div className="absolute top-8 left-8 z-20">
            <div className="bg-red-600 text-white px-6 py-5 rounded-2xl shadow-2xl">
              <h3 className="text-4xl font-black leading-none">30+</h3>
              <p className="text-xs uppercase tracking-widest mt-2">
                Years Excellence
              </p>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="absolute bottom-8 left-8 right-8 z-20">
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-xl">
                <h3 className="text-3xl font-black text-red-600">500+</h3>
                <p className="text-xs font-semibold text-slate-600">
                  Projects
                </p>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-xl">
                <h3 className="text-3xl font-black text-red-600">20+</h3>
                <p className="text-xs font-semibold text-slate-600">
                  States Served
                </p>
              </div>

              <div className="bg-red-600 text-white rounded-2xl p-5 shadow-xl">
                <h3 className="text-3xl font-black">100%</h3>
                <p className="text-xs font-semibold">
                  Quality Assurance
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex items-center py-16 lg:py-20 px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="max-w-3xl w-full">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-12 bg-red-600" />
              <span className="uppercase tracking-[0.35em] text-red-600 text-xs font-bold">
                About Kaaveri Steels
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl xl:text-6xl font-black leading-tight text-slate-900">
              Building India's
              <span className="block text-red-600">
                Strongest Foundations
              </span>
            </h2>

            {/* Description */}
            <p className="mt-8 text-slate-600 leading-relaxed text-base lg:text-lg">
              At{" "}
              <span className="font-bold text-red-600">
                KAAVERI STEELS
              </span>
              , we manufacture premium-quality TMT bars and structural steel
              products designed to power modern infrastructure. Our commitment
              to precision engineering, rigorous quality standards, and
              sustainable manufacturing has made us a trusted name across India.
            </p>

            {/* Quote */}
            <div className="mt-8 border-l-4 border-red-600 pl-5">
              <p className="italic text-slate-700 leading-relaxed">
                “Every steel product leaving our facility undergoes rigorous
                quality checks to ensure unmatched strength, durability, and
                reliability for generations.”
              </p>
            </div>

            {/* Trust Metrics */}
            <div className="grid grid-cols-3 gap-6 py-8 mt-8 border-y border-slate-200">
              <div>
                <h3 className="text-4xl font-black text-red-600">30+</h3>
                <p className="text-sm text-slate-500 mt-1">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-red-600">500+</h3>
                <p className="text-sm text-slate-500 mt-1">
                  Projects Delivered
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-red-600">20+</h3>
                <p className="text-sm text-slate-500 mt-1">
                  States Served
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-5 mt-10">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="group bg-white border border-slate-200 rounded-2xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-5 group-hover:bg-red-600 transition-all duration-300">
                      <Icon className="w-7 h-7 text-red-600 group-hover:text-white transition-all duration-300" />
                    </div>

                    <h4 className="font-black text-slate-900 uppercase text-sm tracking-wide mb-3">
                      {item.title}
                    </h4>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 rounded-xl text-white font-bold tracking-wider uppercase shadow-xl hover:scale-105 transition-all duration-300"
              >
                Explore Products
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/brochure.pdf"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-slate-300 rounded-xl text-slate-700 hover:bg-slate-50 font-bold tracking-wider uppercase transition-all duration-300"
              >
                <FileText size={18} />
                Download Brochure
              </Link>
            </div>

            {/* Bottom Tag */}
            <div className="mt-10 flex items-center gap-3 text-slate-500">
              <Factory className="w-5 h-5 text-red-600" />
              <span className="text-sm font-medium">
                Trusted Manufacturing Partner for Modern Infrastructure
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

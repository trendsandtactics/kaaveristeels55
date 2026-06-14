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
  const stats = [
    {
      number: "500+",
      label: "Projects Delivered",
      icon: Factory,
    },
    {
      number: "100K+",
      label: "Tons Produced",
      icon: Factory,
    },
    {
      number: "100%",
      label: "Quality Tested",
      icon: ShieldCheck,
    },
  ];

  const features = [
    {
      title: "Premium TMT Bars",
      description:
        "High-strength steel solutions engineered for durability, safety and long-term structural performance.",
      icon: Factory,
    },
    {
      title: "ISI Certified Quality",
      description:
        "Manufactured under rigorous testing processes and certified to meet the highest industry standards.",
      icon: ShieldCheck,
    },
    {
      title: "Trusted By Builders",
      description:
        "Preferred by contractors, engineers and infrastructure projects across the nation.",
      icon: HardHat,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#0f172a] py-20 lg:py-28">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-red-600/20 blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-red-500/10 blur-[120px]" />

        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-16">
        {/* Main Layout */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2">
              <span className="h-2 w-2 rounded-full bg-red-500" />
              <span className="text-xs font-semibold uppercase tracking-[4px] text-red-400">
                About Kaaveri
              </span>
            </div>

            <h2 className="text-4xl font-black leading-tight text-white md:text-6xl xl:text-7xl">
              Building
              <span className="block text-red-500">
                Stronger Futures
              </span>
            </h2>

            <p className="mt-8 text-base leading-relaxed text-slate-300 md:text-lg">
              KAAVERI is a trusted manufacturer of premium TMT bars and steel
              products, delivering unmatched strength, reliability and quality
              for modern infrastructure, residential and industrial projects.
            </p>

            <p className="mt-5 text-base leading-relaxed text-slate-400">
              Through advanced manufacturing technologies, strict quality
              standards and continuous innovation, we empower engineers,
              builders and developers to create safer and stronger structures
              for generations.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/about-us">
                <button className="group flex h-14 items-center gap-2 rounded-2xl bg-red-600 px-8 font-semibold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-[0_15px_40px_rgba(220,38,38,0.35)]">
                  Explore More
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </Link>

              <button className="flex h-14 items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-8 font-medium text-white backdrop-blur-xl transition hover:bg-white/10">
                <Download size={18} />
                Download Brochure
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            {/* Experience Card */}
            <div className="absolute left-0 top-10 z-30">
              <div className="rounded-3xl bg-white p-6 shadow-2xl">
                <h3 className="text-4xl font-black text-red-600">25+</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[3px] text-slate-500">
                  Years Experience
                </p>
              </div>
            </div>

            {/* Main Image Card */}
            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />

              <Image
                src="/image/about1.png"
                alt="Kaaveri"
                width={1000}
                height={800}
                priority
                className="w-full object-cover"
              />

              {/* Floating Metric */}
              <div className="absolute bottom-8 left-8 z-20 rounded-3xl bg-white p-5 shadow-2xl">
                <h4 className="text-3xl font-black text-red-600">500+</h4>
                <p className="text-sm text-slate-600">
                  Projects Delivered
                </p>
              </div>
            </div>

            {/* TMT Bars */}
            <Image
              src="/image/tmt-bars.png"
              alt="TMT Bars"
              width={500}
              height={300}
              className="absolute -bottom-12 right-0 z-20 w-[45%] drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <div className="grid gap-8 md:grid-cols-3">
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex items-center gap-5 border-white/10 md:border-r last:border-r-0"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600">
                    <Icon className="text-white" size={26} />
                  </div>

                  <div>
                    <h3 className="text-4xl font-black text-white">
                      {item.number}
                    </h3>
                    <p className="mt-1 text-slate-400">
                      {item.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Features */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(220,38,38,0.18)]"
              >
                <div className="absolute left-0 top-0 h-1 w-full bg-red-600" />

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600 text-white">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-relaxed text-slate-500">
                  {item.description}
                </p>

                <div className="mt-6 h-1 w-12 rounded-full bg-red-600 transition-all duration-500 group-hover:w-24" />
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-12 overflow-hidden rounded-[36px] bg-gradient-to-r from-red-600 to-red-700 p-10 lg:p-14">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-red-100">
                Build With Confidence
              </p>

              <h3 className="text-3xl font-black text-white lg:text-5xl">
                Ready To Build Stronger
                <span className="block">
                  With KAAVERI Steel?
                </span>
              </h3>
            </div>

            <Link href="/contact-us">
              <button className="flex h-14 items-center gap-2 rounded-2xl bg-white px-8 font-semibold text-red-600 transition hover:scale-105">
                Get A Quote
                <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

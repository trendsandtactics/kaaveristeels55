"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Truck,
  Clock3,
  Users,
  SearchCheck,
  ShieldCheck,
  Award,
} from "lucide-react";

const leftFeatures = [
  {
    icon: Truck,
    title: "Fully Equipped",
    subtitle: "Mobile Testing Vehicle",
  },
  {
    icon: Clock3,
    title: "Instant",
    subtitle: "Test Result",
  },
  {
    icon: Users,
    title: "Live Testing In Front Of",
    subtitle: "Engineers & Builders",
  },
];

const rightFeatures = [
  {
    icon: SearchCheck,
    title: "Complete",
    subtitle: "Transparency",
  },
  {
    icon: ShieldCheck,
    title: "No Compromise",
    subtitle: "On Strength",
  },
  {
    icon: Award,
    title: "Confidence For",
    subtitle: "100+ Years Of Structure Life",
  },
];

export default function TrustOnSite() {
  return (
    <section className="relative overflow-hidden py-20 xl:py-28 2xl:py-32">

      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/bg1.png"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[2200px] mx-auto px-6 md:px-10 xl:px-20 2xl:px-32">

        {/* Header */}
        <div className="text-center mb-12 xl:mb-20">

          <p className="uppercase tracking-[0.5em] text-sm xl:text-base text-gray-500 mb-5">
            KAAVERI STEELS
          </p>

          <h2 className="text-5xl md:text-7xl xl:text-8xl 2xl:text-[6rem] font-black text-gray-900 leading-none">
            Trust On Site
          </h2>

          <p className="max-w-5xl mx-auto mt-8 text-xl md:text-2xl text-gray-600 leading-relaxed">
            We don’t just promise quality — we prove it with live testing,
            transparency, and engineering excellence.
          </p>

        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-[520px_1fr_520px] items-center gap-4">

          {/* LEFT FEATURES */}
          <div className="space-y-8 order-2 lg:order-1">

            {leftFeatures.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group flex items-center gap-6 rounded-[32px] border border-red-100 bg-white/95 p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 min-h-[150px]"
                >
                  <div className="flex h-[90px] w-[90px] min-w-[90px] items-center justify-center rounded-full bg-gradient-to-br from-red-700 to-red-500 text-white shadow-xl">
                    <Icon size={42} />
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                      {item.title}
                    </h3>

                    <p className="text-xl text-gray-600 mt-2 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>

          {/* CENTER IMAGE */}
          <div className="order-1 lg:order-2 flex justify-center">

            <div className="relative w-full max-w-[1400px] h-[450px] md:h-[600px] lg:h-[700px] xl:h-[850px] 2xl:h-[950px]">

              <Image
                src="/vehicle.png"
                alt="Trust On Site Vehicle"
                fill
                priority
                className="object-contain object-center drop-shadow-[0_50px_100px_rgba(0,0,0,0.35)]"
              />

            </div>

          </div>

          {/* RIGHT FEATURES */}
          <div className="space-y-8 order-3">

            {rightFeatures.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group flex items-center gap-6 rounded-[32px] border border-red-100 bg-white/95 p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 min-h-[150px]"
                >
                  <div className="flex h-[90px] w-[90px] min-w-[90px] items-center justify-center rounded-full bg-gradient-to-br from-red-700 to-red-500 text-white shadow-xl">
                    <Icon size={42} />
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                      {item.title}
                    </h3>

                    <p className="text-xl text-gray-600 mt-2 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>

        </div>

        {/* CTA */}
        <div className="flex justify-center mt-8 xl:mt-12">

          <Link
            href="/trust-on-site#book-test"
            className="bg-red-600 hover:bg-red-700 text-white px-14 py-5 text-xl font-semibold rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Book an Appointment
          </Link>

        </div>

      </div>
    </section>
  );
}

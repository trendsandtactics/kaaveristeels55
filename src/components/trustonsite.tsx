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
    <section className="relative overflow-hidden py-20 lg:py-28">
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

      <div className="relative z-10 max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.35em] text-xs sm:text-sm text-gray-500 mb-4">
            KAAVERI STEELS
          </p>

          <h2 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-gray-900">
            Trust On Site
          </h2>

          <p className="max-w-3xl mx-auto mt-5 text-gray-600 text-base md:text-lg">
            We don’t just promise quality — we prove it with live testing,
            transparency, and engineering excellence.
          </p>
        </div>

        {/* Main Section */}
        <div className="grid lg:grid-cols-[420px_1fr_420px] gap-10 items-center">

          {/* LEFT FEATURES */}
          <div className="space-y-6 order-2 lg:order-1">
            {leftFeatures.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group flex items-center gap-5 rounded-3xl border border-red-100 bg-white/95 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 min-h-[120px]"
                >
                  <div className="flex h-[72px] w-[72px] min-w-[72px] items-center justify-center rounded-full bg-gradient-to-br from-red-700 to-red-500 text-white shadow-lg">
                    <Icon size={34} />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 text-2xl leading-tight">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-lg mt-1 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CENTER IMAGE */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-[1000px] h-[300px] sm:h-[380px] md:h-[480px] lg:h-[600px]">
              <Image
                src="/vehicle.png"
                alt="Trust On Site Vehicle"
                fill
                priority
                className="object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.35)]"
              />
            </div>
          </div>

          {/* RIGHT FEATURES */}
          <div className="space-y-6 order-3">
            {rightFeatures.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group flex items-center gap-5 rounded-3xl border border-red-100 bg-white/95 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 min-h-[120px]"
                >
                  <div className="flex h-[72px] w-[72px] min-w-[72px] items-center justify-center rounded-full bg-gradient-to-br from-red-700 to-red-500 text-white shadow-lg">
                    <Icon size={34} />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 text-2xl leading-tight">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-lg mt-1 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* CTA */}
        <div className="flex justify-center mt-10">
          <Link
            href="/trust-on-site#book-test"
            className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-2xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Book an Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}

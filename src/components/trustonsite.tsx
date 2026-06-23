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

      <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]" />

      <div className="relative z-10 max-w-[1700px] mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="uppercase tracking-[0.3em] text-xs text-gray-500 mb-3">
            KAAVERI STEELS
          </p>

          <h2 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-gray-900">
            Trust On Site
          </h2>

          <p className="max-w-3xl mx-auto mt-5 text-gray-600 text-base lg:text-lg">
            We don’t just promise quality — we prove it with live testing,
            transparency, and engineering excellence.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-[320px_1fr_320px] gap-8 items-center">

          {/* Left Features */}
          <div className="space-y-5 order-2 lg:order-1">
            {leftFeatures.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group flex items-center gap-4 rounded-3xl border border-red-100 bg-white/90 backdrop-blur-sm p-5 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-red-700 to-red-500 text-white shadow-lg">
                    <Icon size={30} />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">
                      {item.title}
                    </h3>
                    <p className="text-gray-700">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Vehicle */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-[950px] h-[260px] sm:h-[350px] md:h-[450px] lg:h-[550px]">
              <Image
                src="/vehicle.png"
                alt="Trust On Site Vehicle"
                fill
                priority
                className="object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.35)]"
              />
            </div>
          </div>

          {/* Right Features */}
          <div className="space-y-5 order-3">
            {rightFeatures.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group flex items-center gap-4 rounded-3xl border border-red-100 bg-white/90 backdrop-blur-sm p-5 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-red-700 to-red-500 text-white shadow-lg">
                    <Icon size={30} />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">
                      {item.title}
                    </h3>
                    <p className="text-gray-700">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <Link
            href="/trust-on-site#book-test"
            className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-2xl font-semibold shadow-xl transition-all duration-300 hover:scale-105"
          >
            Book an Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}

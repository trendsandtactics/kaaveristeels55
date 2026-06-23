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
    <section className="relative overflow-hidden py-32 xl:py-40 bg-[#f8f9fb]">

      <div className="relative z-10 w-full max-w-[2400px] mx-auto px-8 md:px-12 xl:px-24">

        {/* Header */}
        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.6em] text-base text-gray-500 mb-6">
            KAAVERI STEELS
          </p>

          <h2 className="text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] 2xl:text-[8rem] font-black text-gray-900 leading-none">
            Trust On Site
          </h2>

          <p className="max-w-6xl mx-auto mt-8 text-2xl md:text-3xl text-gray-600 leading-relaxed">
            We don’t just promise quality — we prove it with live testing,
            transparency, and engineering excellence.
          </p>

        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-[500px_minmax(1100px,1fr)_500px] items-center gap-24">

          {/* LEFT FEATURES */}
          <div className="space-y-10">

            {leftFeatures.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex items-center gap-8 bg-white border border-red-100 rounded-[32px] p-10 min-h-[170px] shadow-xl"
                >
                  <div className="flex h-[90px] w-[90px] min-w-[90px] items-center justify-center rounded-full bg-red-600 text-white shadow-lg">
                    <Icon size={42} />
                  </div>

                  <div>
                    <h3 className="text-3xl xl:text-4xl font-bold text-gray-900 leading-tight">
                      {item.title}
                    </h3>

                    <p className="text-xl xl:text-2xl text-gray-600 mt-3 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>

          {/* CENTER IMAGE */}
          <div className="flex justify-center">

            <div className="relative w-full h-[700px] xl:h-[850px] 2xl:h-[950px]">

              <Image
                src="/vehicle.png"
                alt="Trust On Site Vehicle"
                fill
                priority
                className="object-contain object-center scale-[1.4] xl:scale-[1.6] drop-shadow-[0_60px_120px_rgba(0,0,0,0.25)]"
              />

            </div>

          </div>

          {/* RIGHT FEATURES */}
          <div className="space-y-10">

            {rightFeatures.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex items-center gap-8 bg-white border border-red-100 rounded-[32px] p-10 min-h-[170px] shadow-xl"
                >
                  <div className="flex h-[90px] w-[90px] min-w-[90px] items-center justify-center rounded-full bg-red-600 text-white shadow-lg">
                    <Icon size={42} />
                  </div>

                  <div>
                    <h3 className="text-3xl xl:text-4xl font-bold text-gray-900 leading-tight">
                      {item.title}
                    </h3>

                    <p className="text-xl xl:text-2xl text-gray-600 mt-3 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>

        </div>

        {/* CTA */}
        <div className="flex justify-center mt-20">

          <Link
            href="/trust-on-site#book-test"
            className="bg-red-600 hover:bg-red-700 text-white px-20 py-7 text-2xl font-bold rounded-3xl shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Book an Appointment
          </Link>

        </div>

      </div>

    </section>
  );
}

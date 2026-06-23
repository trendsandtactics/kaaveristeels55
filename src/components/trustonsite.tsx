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
    <section className="relative overflow-hidden bg-[#f8f9fb] py-24 xl:py-32">

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-14">

          <p className="uppercase tracking-[0.5em] text-sm md:text-base text-gray-500 mb-5">
            KAAVERI STEELS
          </p>

          <h2 className="text-6xl md:text-7xl xl:text-8xl font-black text-gray-900 leading-none">
            Trust On Site
          </h2>

          <p className="max-w-5xl mx-auto mt-6 text-xl md:text-2xl text-gray-600 leading-relaxed">
            We don’t just promise quality — we prove it with live testing,
            transparency, and engineering excellence.
          </p>

        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-[360px_minmax(900px,1fr)_360px] xl:grid-cols-[380px_minmax(1000px,1fr)_380px] items-center gap-0">

          {/* Left Features */}
          <div className="space-y-6 lg:translate-x-20 z-20">

            {leftFeatures.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex items-center gap-5 bg-white border border-red-100 rounded-[28px] p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex h-[72px] w-[72px] min-w-[72px] items-center justify-center rounded-full bg-red-600 text-white shadow-lg">
                    <Icon size={34} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                      {item.title}
                    </h3>

                    <p className="text-base text-gray-600 mt-1">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>

          {/* Vehicle */}
          <div className="relative flex justify-center z-10">

            <div className="relative w-full h-[500px] lg:h-[650px] xl:h-[750px]">

              <Image
                src="/vehicle.png"
                alt="Trust On Site Vehicle"
                fill
                priority
                className="object-contain object-center scale-[1.45] xl:scale-[1.6] drop-shadow-[0_40px_80px_rgba(0,0,0,0.25)]"
              />

            </div>

          </div>

          {/* Right Features */}
          <div className="space-y-6 lg:-translate-x-20 z-20">

            {rightFeatures.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex items-center gap-5 bg-white border border-red-100 rounded-[28px] p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex h-[72px] w-[72px] min-w-[72px] items-center justify-center rounded-full bg-red-600 text-white shadow-lg">
                    <Icon size={34} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                      {item.title}
                    </h3>

                    <p className="text-base text-gray-600 mt-1">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>

        </div>

        {/* CTA */}
        <div className="flex justify-center -mt-4 lg:-mt-10">

          <Link
            href="/trust-on-site#book-test"
            className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 text-lg font-semibold rounded-2xl shadow-xl transition-all duration-300 hover:scale-105"
          >
            Book an Appointment
          </Link>

        </div>

      </div>

    </section>
  );
}

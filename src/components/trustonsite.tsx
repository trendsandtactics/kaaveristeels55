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

function FeatureCard({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: React.ElementType;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="group flex items-center gap-4 rounded-[28px] border border-red-100 bg-white/95 p-5 shadow-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

      <div className="flex h-16 w-16 min-w-[64px] items-center justify-center rounded-full bg-red-600 text-white shadow-lg">
        <Icon size={28} />
      </div>

      <div>
        <h3 className="text-lg xl:text-xl font-bold text-gray-900 leading-tight">
          {title}
        </h3>

        <p className="text-sm text-gray-600 mt-1">
          {subtitle}
        </p>
      </div>

    </div>
  );
}

export default function TrustOnSite() {
  return (
    <section className="relative min-h-[1200px] overflow-hidden flex items-center">

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

      {/* Light Overlay */}
      <div className="absolute inset-0 bg-white/50" />

      {/* Content */}
      <div className="relative z-10 w-full px-6 xl:px-10 2xl:px-16">

        {/* Heading */}
        <div className="text-center mb-10">

          <p className="uppercase tracking-[1em] text-gray-500 text-sm mb-3">
            KAAVERI STEELS
          </p>

          <h2 className="text-5xl md:text-7xl xl:text-8xl font-black text-gray-900">
            Trust On Site
          </h2>

          <p className="max-w-4xl mx-auto mt-4 text-lg md:text-2xl text-gray-700">
            We don’t just promise quality — we prove it with live testing,
            transparency, and engineering excellence.
          </p>

        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-[420px_minmax(1400px,1fr)_420px] items-center gap-2">

          {/* Left Features */}
          <div className="space-y-4 z-20">

            {leftFeatures.map((item, index) => (
              <FeatureCard
                key={index}
                icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
              />
            ))}

          </div>

          {/* Vehicle */}
          <div className="relative flex justify-center items-center">

            <div className="relative w-full h-[900px] xl:h-[1000px]">

              <Image
                src="/vehicle.png"
                alt="Trust On Site Vehicle"
                fill
                priority
                className="object-contain object-center scale-[2] drop-shadow-[0_50px_80px_rgba(0,0,0,0.35)]"
              />

            </div>

          </div>

          {/* Right Features */}
          <div className="space-y-4 z-20">

            {rightFeatures.map((item, index) => (
              <FeatureCard
                key={index}
                icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
              />
            ))}

          </div>

        </div>

        {/* CTA */}
        <div className="flex justify-center -mt-10 relative z-30">

          <Link
            href="/trust-on-site#book-test"
            className="bg-red-600 hover:bg-red-700 text-white px-14 py-5 text-xl md:text-2xl font-bold rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Book an Appointment
          </Link>

        </div>

      </div>

    </section>
  );
}

```tsx
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
    <div className="group flex items-center gap-5 rounded-[28px] border border-red-100 bg-white/95 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="flex h-16 w-16 min-w-[64px] items-center justify-center rounded-full bg-red-600 text-white shadow-lg">
        <Icon size={30} />
      </div>

      <div>
        <h3 className="text-xl xl:text-2xl font-bold text-gray-900 leading-tight">
          {title}
        </h3>

        <p className="text-sm xl:text-base text-gray-600 mt-1">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export default function TrustOnSite() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">

      {/* Background Image */}
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
      <div className="absolute inset-0 bg-white/85 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[2200px] mx-auto px-6 md:px-10 xl:px-16 2xl:px-24">

        {/* Header */}
        <div className="text-center mb-16 xl:mb-24">

          <p className="uppercase tracking-[0.5em] text-sm md:text-base text-gray-500 mb-5">
            KAAVERI STEELS
          </p>

          <h2 className="text-6xl md:text-7xl xl:text-8xl 2xl:text-[7rem] font-black text-gray-900 leading-none">
            Trust On Site
          </h2>

          <p className="max-w-5xl mx-auto mt-6 text-xl md:text-2xl text-gray-700 leading-relaxed">
            We don’t just promise quality — we prove it with live testing,
            transparency, and engineering excellence.
          </p>

        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-[420px_minmax(900px,1fr)_420px] xl:grid-cols-[450px_minmax(1100px,1fr)_450px] items-center gap-8">

          {/* Left Features */}
          <div className="space-y-6">
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
          <div className="flex justify-center">

            <div className="relative w-full h-[650px] md:h-[750px] lg:h-[850px] xl:h-[1000px]">

              <Image
                src="/vehicle.png"
                alt="Trust On Site Vehicle"
                fill
                priority
                className="object-contain object-center scale-[1.2] xl:scale-[1.35] drop-shadow-[0_60px_120px_rgba(0,0,0,0.3)]"
              />

            </div>

          </div>

          {/* Right Features */}
          <div className="space-y-6">
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
        <div className="flex justify-center mt-20">

          <Link
            href="/trust-on-site#book-test"
            className="bg-red-600 hover:bg-red-700 text-white px-16 py-6 text-xl md:text-2xl font-bold rounded-3xl shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Book an Appointment
          </Link>

        </div>

      </div>

    </section>
  );
}
```

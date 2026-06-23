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
    <div className="group flex items-center gap-6 rounded-[2rem] border border-red-100 bg-white/95 p-8 shadow-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="flex h-20 w-20 min-w-[80px] items-center justify-center rounded-full bg-red-600 text-white shadow-xl">
        <Icon size={40} />
      </div>

      <div>
        <h3 className="text-2xl xl:text-3xl 2xl:text-4xl font-bold text-gray-900 leading-tight">
          {title}
        </h3>

        <p className="text-lg xl:text-xl 2xl:text-2xl text-gray-600 mt-2">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export default function TrustOnSite() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center py-20">

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
      <div className="absolute inset-0 bg-white/0 backdrop-blur-[0px]" />

      {/* Content - Removed max-w to occupy whole section edge-to-edge */}
      <div className="relative z-10 w-full px-6 md:px-12 xl:px-20 2xl:px-32">

        {/* Header - Scaled up text significantly */}
        <div className="text-center mb-16 xl:mb-20">

          <p className="uppercase tracking-[2em] text-lg md:text-xl font-semibold text-gray-500 mb-6 pl-[2em]">
            KAAVERI STEELS
          </p>

          <h2 className="text-7xl md:text-8xl xl:text-[8rem] 2xl:text-[11rem] font-black text-gray-900 leading-none tracking-tight">
            Trust On Site
          </h2>

          <p className="max-w-7xl mx-auto mt-8 text-2xl md:text-4xl 2xl:text-5xl text-gray-700 leading-relaxed font-medium">
            We don’t just promise quality — we prove it with live testing,
            transparency, and engineering excellence.
          </p>

        </div>

        {/* Main Content - Adjusted grid to give massive space to the center */}
        <div className="grid lg:grid-cols-[450px_1fr_450px] xl:grid-cols-[550px_1fr_550px] 2xl:grid-cols-[650px_1fr_650px] items-center gap-8 xl:gap-12">

          {/* Left Features */}
          <div className="space-y-12 relative z-20">
            {leftFeatures.map((item, index) => (
              <FeatureCard
                key={index}
                icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
              />
            ))}
          </div>

          {/* Vehicle - Maximized height and scale */}
          <div className="flex justify-center relative z-10">
            <div className="relative w-full h-[850px] md:h-[1000px] lg:h-[1200px] xl:h-[1400px] 2xl:h-[1600px]">
              <Image
                src="/vehicle.png"
                alt="Trust On Site Vehicle"
                fill
                priority
                className="object-contain object-center scale-[1.3] xl:scale-[1.5] 2xl:scale-[1.65] drop-shadow-[0_80px_140px_rgba(0,0,0,0.4)]"
              />
            </div>
          </div>

          {/* Right Features */}
          <div className="space-y-12 relative z-20">
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

        {/* CTA - Moved up and scaled up */}
        <div className="flex justify-center mt-10 xl:-mt-10 2xl:-mt-20 relative z-30">

          <Link
            href="/trust-on-site#book-test"
            className="bg-red-600 hover:bg-red-700 text-white px-20 py-8 text-3xl md:text-5xl font-extrabold rounded-full shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_60px_rgba(220,38,38,0.4)]"
          >
            Book an Appointment
          </Link>

        </div>

      </div>

    </section>
  );
}

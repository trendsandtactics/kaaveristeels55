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
    <div className="group flex items-center gap-5 rounded-[28px] border border-red-100 bg-white/95 p-6 xl:p-8 shadow-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="flex h-16 w-16 xl:h-20 xl:w-20 min-w-[64px] xl:min-w-[80px] items-center justify-center rounded-full bg-red-600 text-white shadow-lg">
        <Icon className="w-8 h-8 xl:w-10 xl:h-10" />
      </div>

      <div>
        <h3 className="text-xl xl:text-2xl 2xl:text-3xl font-bold text-gray-900 leading-tight">
          {title}
        </h3>

        <p className="text-sm xl:text-lg 2xl:text-xl text-gray-600 mt-1">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export default function TrustOnSite() {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col justify-center py-20 w-full">

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

      {/* Content Container - Uses full width with responsive padding */}
      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 flex flex-col items-center">

        {/* Header */}
        <div className="text-center mb-10 xl:mb-16 w-full">
          <p className="uppercase tracking-[1.5em] text-sm md:text-lg font-semibold text-gray-500 mb-5 ml-[1.5em]">
            KAAVERI STEELS
          </p>

          <h2 className="text-5xl md:text-7xl xl:text-8xl 2xl:text-[7rem] font-black text-gray-900 leading-none tracking-tight">
            Trust On Site
          </h2>

          <p className="max-w-5xl mx-auto mt-6 text-xl md:text-3xl xl:text-4xl text-gray-700 leading-relaxed font-medium">
            We don’t just promise quality — we prove it with live testing,
            transparency, and engineering excellence.
          </p>
        </div>

        {/* Main Content Grid - Responsive fractional widths instead of fixed massive pixels */}
        <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr_350px] xl:grid-cols-[450px_1fr_450px] items-center gap-8 w-full">

          {/* Left Features */}
          <div className="space-y-6 xl:space-y-10 relative z-20">
            {leftFeatures.map((item, index) => (
              <FeatureCard
                key={index}
                icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
              />
            ))}
          </div>

          {/* Vehicle Display - Fills central space naturally without exploding */}
          <div className="flex justify-center items-center relative z-10 w-full h-[400px] md:h-[550px] lg:h-[650px] xl:h-[800px] 2xl:h-[900px] pointer-events-none">
            <Image
              src="/vehicle.png"
              alt="Trust On Site Vehicle"
              fill
              priority
              className="object-contain object-center drop-shadow-[0_40px_80px_rgba(0,0,0,0.3)]"
            />
          </div>

          {/* Right Features */}
          <div className="space-y-6 xl:space-y-10 relative z-20">
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

        {/* CTA - Neatly placed below the grid, pulled up slightly with responsive margin */}
        <div className="mt-12 xl:mt-4 relative z-30">
          <Link
            href="/trust-on-site#book-test"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-12 py-5 xl:px-20 xl:py-7 text-2xl xl:text-4xl font-extrabold rounded-full shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_50px_rgba(220,38,38,0.3)]"
          >
            Book an Appointment
          </Link>
        </div>

      </div>

    </section>
  );
}

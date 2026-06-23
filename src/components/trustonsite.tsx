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
  alignRight = false,
}: {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  alignRight?: boolean;
}) {
  return (
    <div className={`group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white/90 p-5 shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl ${alignRight ? "lg:flex-row-reverse lg:text-right" : ""}`}>
      <div className="flex h-14 w-14 min-w-[56px] items-center justify-center rounded-full bg-red-600 text-white shadow-md transition-transform duration-300 group-hover:scale-110">
        <Icon size={26} />
      </div>

      <div className="flex flex-col justify-center">
        <h3 className="text-lg font-bold text-gray-900 leading-snug">
          {title}
        </h3>
        <p className="text-xs md:text-sm text-gray-600 mt-0.5">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export default function TrustOnSite() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center py-16 lg:py-24 bg-gray-50/50">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg1.png"
          alt="Background Texture"
          fill
          priority
          className="object-cover opacity-40 mix-blend-multiply"
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 lg:mb-20">
          <p className="uppercase tracking-[0.6em] text-xs md:text-sm font-semibold text-red-600 mb-3">
            KAAVERI STEELS
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight leading-none mb-4">
            Trust On Site
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6 rounded-full" />
          <p className="max-w-3xl mx-auto text-base md:text-xl text-gray-600 font-medium leading-relaxed">
            We don’t just promise quality — we prove it with live testing, 
            transparency, and engineering excellence.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

          {/* Left Features */}
          <div className="space-y-4 order-2 lg:order-1">
            {leftFeatures.map((item, index) => (
              <FeatureCard
                key={index}
                icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
              />
            ))}
          </div>

          {/* Center Vehicle Showcase */}
          <div className="flex justify-center items-center order-1 lg:order-2 my-6 lg:my-0 relative group">
            {/* Ambient Radial Glow behind the vehicle */}
            <div className="absolute w-72 h-72 bg-red-500/10 rounded-full blur-3xl -z-10 group-hover:bg-red-500/20 transition-all duration-700" />
            
            <div className="relative w-full max-w-[480px] aspect-[4/3] sm:aspect-square lg:aspect-auto lg:h-[450px]">
              <Image
                src="/vehicle.png"
                alt="Trust On Site Vehicle"
                fill
                priority
                className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Features */}
          <div className="space-y-4 order-3">
            {rightFeatures.map((item, index) => (
              <FeatureCard
                key={index}
                icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
                alignRight={true}
              />
            ))}
          </div>

        </div>

        {/* CTA Button Section */}
        <div className="flex justify-center mt-14 lg:mt-20">
          <Link
            href="/trust-on-site#book-test"
            className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 text-lg font-bold rounded-xl shadow-xl hover:shadow-red-600/20 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
          >
            Book an Appointment
          </Link>
        </div>

      </div>
    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Award, Users, CheckCircle2 } from "lucide-react";

// 1. Data array cleanly defined and closed before the component
const aboutFeatures = [
  {
    icon: ShieldCheck,
    title: "Uncompromising Quality",
    description: "Every batch of Kaaveri Steel undergoes rigorous automated testing to ensure maximum tensile strength and durability.",
  },
  {
    icon: Award,
    title: "Certified Excellence",
    description: "Fully compliant with international manufacturing standards, trusted by structural engineers nationwide.",
  },
  {
    icon: Users,
    title: "Customer-Centric Approach",
    description: "We work directly alongside builders and developers to deliver custom structural steel solutions on time.",
  },
];

export default function HomeAbout() {
  return (
    <section className="relative w-full bg-white overflow-hidden py-16 md:py-24">
      {/* Background Accent Graphics */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-red-50/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-gray-50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Media Showcase */}
          <div className="lg:col-span-5 relative w-full aspect-[4/3] sm:aspect-square lg:h-[550px] rounded-2xl overflow-hidden shadow-2xl bg-gray-100 group">
            <Image
              src="/image_182f9a.jpg"
              alt="Kaaveri Steels Production Facility"
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* Right Column: Narrative & Features */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <p className="uppercase tracking-[0.4em] text-xs md:text-sm font-bold text-red-600 mb-3">
                ABOUT KAAVERI STEELS
              </p>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-6">
                Building Foundations That Last For Generations
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                With decades of pioneering experience in metallurgical engineering, Kaaveri Steels 
                has remained at the forefront of infrastructure development. We manufacture high-performance 
                TMT bars designed to withstand extreme structural stress and seismic conditions.
              </p>
            </div>

            {/* Dynamic Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {aboutFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex gap-4 p-4 rounded-xl transition-colors duration-300 hover:bg-gray-50">
                    <div className="flex h-12 w-12 min-w-[48px] items-center justify-center rounded-xl bg-red-50 text-red-600">
                      <IconComponent size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Call to Action Row */}
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <Link
                href="/about"
                className="inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Learn More Our History
              </Link>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-500 px-2">
                <CheckCircle2 className="text-green-600 w-5 h-5" />
                ISO 9001:2015 Certified Production
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Award, Users, CheckCircle2 } from "lucide-react";

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
    // 1. EXPANDED SECTION PADDING: Increased vertical padding (py-24 to py-36) for huge breathing room
    <section className="relative w-full bg-white overflow-hidden py-24 md:py-36">
      {/* Background Accent Graphics */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-[500px] h-[500px] bg-red-50/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-[500px] h-[500px] bg-gray-50 rounded-full blur-3xl pointer-events-none" />

      {/* 2. MAXIMIZED CONTAINER WIDTH: Upgraded from max-w-7xl to max-w-[1600px] for ultra-wide screen impact */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
        
        {/* 3. WIDER GRID SPACING: Increased layout gap (gap-16 to xl:gap-24) to isolate columns beautifully */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24 items-center">
          
          {/* Left Column: Media Showcase (Scaled higher for larger monitors) */}
          <div className="lg:col-span-5 relative w-full aspect-[4/3] sm:aspect-square lg:h-[650px] xl:h-[750px] rounded-[32px] overflow-hidden shadow-2xl bg-gray-100 group">
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
          <div className="lg:col-span-7 space-y-12">
            <div>
              <p className="uppercase tracking-[0.5em] text-sm font-bold text-red-600 mb-4">
                ABOUT KAAVERI STEELS
              </p>
              
              {/* 4. HERO TYPOGRAPHY SCALING: Pushed heading text to text-4xl up to massive text-7xl sizes */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-gray-900 tracking-tight leading-[1.05] mb-8">
                Building Foundations That Last For Generations
              </h2>
              
              {/* 5. ENHANCED PARAGRAPH TEXT: Increased body copy font sizing and line spacing for crisp readability */}
              <p className="text-lg md:text-xl xl:text-2xl text-gray-600 leading-relaxed font-normal">
                With decades of pioneering experience in metallurgical engineering, Kaaveri Steels 
                has remained at the forefront of infrastructure development. We manufacture high-performance 
                TMT bars designed to withstand extreme structural stress and seismic conditions.
              </p>
            </div>

            {/* Dynamic Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
              {aboutFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex gap-6 p-6 rounded-2xl transition-colors duration-300 hover:bg-gray-50">
                    {/* 6. BIGGER ICON BOX SIZES: Scaled icon wrappers up to h-16 w-16 with larger interior icons */}
                    <div className="flex h-16 w-16 min-w-[64px] items-center justify-center rounded-2xl bg-red-50 text-red-600">
                      <IconComponent size={32} />
                    </div>
                    <div>
                      <h3 className="text-xl xl:text-2xl font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-base xl:text-lg text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Call to Action Row */}
            <div className="pt-6 flex flex-wrap gap-8 items-center">
              {/* Prominent Action Button */}
              <Link
                href="/about"
                className="inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white font-bold text-lg xl:text-xl px-10 py-5 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Learn More Our History
              </Link>
              <div className="flex items-center gap-3 text-base xl:text-lg font-semibold text-gray-500 px-2">
                <CheckCircle2 className="text-green-600 w-6 h-6" />
                ISO 9001:2015 Certified Production
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

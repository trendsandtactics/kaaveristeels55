"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Play,
  Factory,
  ShieldCheck,
  HardHat,
  ArrowRight,
  Download,
} from "lucide-react";

export default function HomeAbout() {
  const [playVideo, setPlayVideo] = useState(false);

  const thumbnailUrl = "/image/about1.png";
  const youtubeVideoId = "dQw4w9WgXcQ";

  return (
    <section className="relative overflow-hidden bg-[#f7f7f7]">
      {/* Main Background */}
      <div className="absolute inset-0">
        <Image
          src="/image/aboutbackground.png"
          alt=""
          fill
          priority
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-white/70" />
      </div>

      <div className="relative z-10">
        <div className="grid lg:grid-cols-[42%_58%] min-h-screen">

          {/* LEFT PANEL */}
          <div className="relative h-[60vh] lg:h-screen overflow-hidden lg:[clip-path:polygon(0_0,82%_0,100%_50%,82%_100%,0_100%)]">

            {!playVideo ? (
              <>
                <Image
                  src={thumbnailUrl}
                  alt="Kaaveri Steel"
                  fill
                  priority
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/45" />

                {/* Top Tagline */}
                <div className="absolute top-10 left-8 lg:top-16 lg:left-12 z-20">
                  <div className="w-14 h-[3px] bg-red-600 mb-4" />

                  <h4 className="text-white uppercase tracking-[4px] text-xs lg:text-sm font-semibold leading-7">
                    MAKING INDIA
                    <br />
                    STRONGER
                  </h4>
                </div>

                {/* Play Button */}
                <button
                  onClick={() => setPlayVideo(true)}
                  className="absolute inset-0 flex items-center justify-center z-20"
                >
                  <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full border-4 border-white/40 backdrop-blur-sm flex items-center justify-center hover:scale-105 transition-all duration-300">

                    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-red-600 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(220,38,38,0.6)]">
                      <Play
                        fill="white"
                        className="text-white ml-1"
                        size={30}
                      />
                    </div>

                  </div>
                </button>

                {/* Bottom Text */}
                <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-white uppercase tracking-[4px] text-xs font-semibold whitespace-nowrap">
                  WATCH OUR STORY
                </div>
              </>
            ) : (
              <iframe
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`}
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            )}
          </div>

          {/* RIGHT PANEL */}
          <div className="relative flex items-center py-16 lg:py-0">

            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src="/Background.png"
                alt=""
                fill
                priority
                className="object-contain object-right opacity-30"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#f7f7f7] via-[#f7f7f7]/70 to-transparent" />
            </div>

            <div className="relative z-10 w-full px-6 sm:px-10 lg:px-12 xl:px-16">

              {/* Section Label */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-[2px] bg-red-600" />

                <span className="uppercase tracking-[4px] text-red-600 font-bold text-xs lg:text-sm">
                  ABOUT KAAVERI
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl sm:text-5xl lg:text-[72px] font-black leading-[0.95] text-slate-900">
                Strength That
                <span className="block text-red-600">
                  Shapes The Future
                </span>
              </h2>

              {/* Divider */}
              <div className="w-24 h-[3px] bg-gray-200 mt-8 mb-10 relative">
                <div className="absolute left-0 top-0 w-12 h-[3px] bg-red-600" />
              </div>

              {/* Description */}
              <div className="space-y-8 text-gray-700 text-base lg:text-lg leading-relaxed">

                <p>
                  At KAAVERI, we are passionate about steel and dedicated
                  to excellence. As a leading manufacturer of TMT bars and
                  structural steel products, we are committed to providing
                  the construction industry with the highest quality
                  materials.
                </p>

                <p>
                  Our state-of-the-art manufacturing processes and rigorous
                  quality control ensure every product meets the highest
                  global standards, empowering builders to create structures
                  that stand the test of time.
                </p>

              </div>

              {/* Features */}
              <div className="grid md:grid-cols-3 gap-8 mt-14">

                <div className="group">
                  <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mb-4 group-hover:bg-red-100 transition-all">
                    <Factory className="text-red-600" size={26} />
                  </div>

                  <h4 className="font-bold text-lg text-slate-900">
                    Premium TMT Bars
                  </h4>

                  <p className="text-sm text-gray-500 mt-2">
                    High strength & durability
                  </p>
                </div>

                <div className="group">
                  <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mb-4 group-hover:bg-red-100 transition-all">
                    <ShieldCheck className="text-red-600" size={26} />
                  </div>

                  <h4 className="font-bold text-lg text-slate-900">
                    ISI Certified
                  </h4>

                  <p className="text-sm text-gray-500 mt-2">
                    Tested & Trusted
                  </p>
                </div>

                <div className="group">
                  <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mb-4 group-hover:bg-red-100 transition-all">
                    <HardHat className="text-red-600" size={26} />
                  </div>

                  <h4 className="font-bold text-lg text-slate-900">
                    Trusted Builders
                  </h4>

                  <p className="text-sm text-gray-500 mt-2">
                    Nationwide Partnerships
                  </p>
                </div>

              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 mt-14">

                <Link href="/about-us">
                  <button className="h-16 px-10 bg-gradient-to-r from-red-700 to-red-500 text-white rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg hover:-translate-y-1 hover:shadow-red-500/30 transition-all duration-300">
                    <Play size={18} />
                    Watch Our Journey
                    <ArrowRight size={18} />
                  </button>
                </Link>

                <button className="h-16 px-10 border-2 border-gray-200 rounded-xl text-gray-700 font-semibold flex items-center justify-center gap-3 hover:bg-white hover:border-gray-300 transition-all duration-300">
                  <Download size={18} />
                  Download Brochure
                </button>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

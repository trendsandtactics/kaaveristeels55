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
  Download
} from "lucide-react";

export default function HomeAbout() {
  const [playVideo, setPlayVideo] = useState(false);
  const thumbnailUrl = "/image/about1.png"; // Replace with actual thumbnail path
  const youtubeVideoId = "dQw4w9WgXcQ"; // Replace with actual YouTube video ID

  return (
<section className="relative overflow-hidden bg-[#f7f7f7] py-12 lg:py-0">
  {/* Background Texture */}
  <div className="absolute inset-0">
    <Image
      src="/image/aboutbackground.png"
      alt=""
      fill
      className="object-cover opacity-10"
    />
  </div>

  <div className="relative z-10">
    <div className="grid lg:grid-cols-[48vw_52vw] min-h-screen items-center">
      
      {/* LEFT PANEL */}
      <div
        className="relative h-[60vh] lg:h-screen w-full overflow-hidden lg:[clip-path:polygon(0_0,82%_0,100%_50%,82%_100%,0_100%)] rounded-3xl lg:rounded-none mx-4 lg:mx-0 max-w-[calc(100%-2rem)] lg:max-w-none shadow-2xl lg:shadow-none"
      >
        {!playVideo ? (
          <>
            <Image
              src={thumbnailUrl}
              alt="Kaaveri"
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />

            {/* Tagline */}
            <div className="absolute top-8 left-8 lg:top-16 lg:left-12 z-20">
              <div className="w-10 lg:w-14 h-[3px] bg-red-600 mb-3 lg:mb-5" />
              <h4 className="text-white uppercase tracking-[2px] lg:tracking-[4px] text-xs lg:text-sm font-semibold leading-6 lg:leading-7 drop-shadow-md">
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
              <div className="w-20 h-20 lg:w-32 lg:h-32 border-2 lg:border-4 border-white/50 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <div className="w-12 h-12 lg:w-20 lg:h-20 bg-red-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.6)]">
                  <Play
                    fill="white"
                    size={24}
                    className="text-white ml-1 lg:w-8 lg:h-8"
                  />
                </div>
              </div>
            </button>

            <div className="absolute bottom-16 lg:bottom-28 left-1/2 -translate-x-1/2 text-white uppercase tracking-[2px] lg:tracking-[4px] text-xs lg:text-sm font-semibold whitespace-nowrap drop-shadow-md">
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
      <div className="relative flex items-center mt-8 lg:mt-0">
        <div className="absolute inset-0 opacity-[0.03]">
          <Image
            src="/image/aboutbackground.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 px-6 sm:px-12 lg:px-24 max-w-[850px]">
          {/* Label */}
          <div className="flex items-center gap-4 mb-6 lg:mb-8">
            <div className="w-14 h-[2px] bg-red-600" />

            <span className="uppercase tracking-[2px] lg:tracking-[4px] text-red-600 font-bold text-xs lg:text-sm">
              ABOUT KAAVERI
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-[72px] leading-tight lg:leading-[0.95] font-black text-slate-900">
            Strength That
            <span className="block text-red-600">
              Shapes The Future
            </span>
          </h2>

          <div className="w-20 lg:w-28 h-[3px] bg-gray-200 mt-6 lg:mt-8 mb-8 lg:mb-10 relative">
            <div className="absolute left-0 top-0 w-10 h-[3px] bg-red-600" />
          </div>

          {/* Content */}
          <div className="space-y-6 lg:space-y-8 text-base lg:text-lg leading-relaxed text-gray-700">
            <p>
              At KAAVERI, we are passionate about steel and dedicated
              to excellence. As a leading manufacturer of TMT bars and
              structural steel products, we are committed to providing
              the construction industry with the highest quality
              materials.
            </p>

            <p>
              Our state-of-the-art manufacturing processes and
              rigorous quality control ensure every product meets the
              highest global standards, empowering builders to create
              structures that stand the test of time.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 mt-10 lg:mt-12">
            <div>
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                <Factory className="text-red-600" size={24} />
              </div>

              <h4 className="font-bold text-base lg:text-lg text-slate-900">
                Premium TMT Bars
              </h4>

              <p className="text-xs lg:text-sm text-gray-500 mt-1 lg:mt-2">
                High strength & durability
              </p>
            </div>

            <div>
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                <ShieldCheck className="text-red-600" size={24} />
              </div>

              <h4 className="font-bold text-base lg:text-lg text-slate-900">
                ISI Certified
              </h4>

              <p className="text-xs lg:text-sm text-gray-500 mt-1 lg:mt-2">
                Tested & Trusted
              </p>
            </div>

            <div>
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                <HardHat className="text-red-600" size={24} />
              </div>

              <h4 className="font-bold text-base lg:text-lg text-slate-900">
                Trusted Builders
              </h4>

              <p className="text-xs lg:text-sm text-gray-500 mt-1 lg:mt-2">
                Nationwide partnerships
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-5 mt-10 lg:mt-14">
            <Link href="/about-us">
              <button className="w-full sm:w-auto h-14 lg:h-16 px-8 lg:px-10 bg-gradient-to-r from-red-700 to-red-500 text-white rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg hover:shadow-red-500/30 hover:-translate-y-1 transition-all duration-300">
                <Play size={18} />
                Watch Our Journey
                <ArrowRight size={18} />
              </button>
            </Link>

            <button className="w-full sm:w-auto h-14 lg:h-16 px-8 lg:px-10 border-2 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all duration-300">
              <Download size={18} />
              Download Brochure
            </button>
          </div>
        </div>

        {/* FLOATING STATS CARD */}
        

      </div>
    </div>
  </div>
</section>
  );
}

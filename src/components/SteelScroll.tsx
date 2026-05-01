"use client";

import Link from "next/link";

export default function SteelScroll() {
  return (
    <section
      id="steel-scroll-section"
      className="relative w-full h-[100dvh] overflow-hidden -mt-20 md:-mt-24"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/kaaveri01.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-end justify-center px-6 pb-14 md:pb-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-6 md:gap-10 text-center">

          {/* Heading */}
          <h2 className="font-sans text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_10px_40px_rgba(0,0,0,0.9)]">
              Building India&apos;s Future
            </span>
          </h2>

          {/* Button */}
          <Link href="/products">
            <button className="relative px-8 py-4 rounded-full bg-red-600 text-white text-xs md:text-sm uppercase tracking-[0.25em] font-semibold overflow-hidden group shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all duration-300 hover:scale-105">
              
              {/* Text */}
              <span className="relative z-10 transition-colors duration-300 group-hover:text-red-600">
                Explore Our Products
              </span>

              {/* Hover Fill */}
              <div className="absolute inset-0 bg-white scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 blur-xl bg-red-500/40" />
            </button>
          </Link>

        </div>
      </div>
    </section>
  );
}

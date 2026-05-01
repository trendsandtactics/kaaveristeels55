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

      {/* Light overlay for readability (no gradient) */}
      <div className="absolute inset-0 bg-black/25 z-[1]" />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-end justify-center px-6 pb-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-6 md:gap-10 text-center">

          {/* Heading */}
          <h2 className="font-sans text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.2]">
            Building India&apos;s Future
          </h2>

          {/* Button */}
          <Link href="/products">
            <button className="px-8 py-4 bg-red-600 text-white text-xs md:text-sm uppercase tracking-[0.2em] font-semibold border border-red-600 transition-all duration-300 hover:bg-transparent hover:text-white hover:border-white">
              Explore Our Products
            </button>
          </Link>

        </div>
      </div>
    </section>
  );
}

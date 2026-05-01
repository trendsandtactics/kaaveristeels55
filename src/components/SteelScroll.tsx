"use client";

import Link from "next/link";

export default function SteelScroll() {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/kaaveri01.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark gradient overlay (important fix) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center px-6 md:px-16">
        <div className="max-w-2xl text-left space-y-6">

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
            Building India&apos;s Future
          </h1>

          {/* Subtext (adds professionalism) */}
          <p className="text-gray-200 text-sm md:text-lg max-w-md">
            High-quality TMT bars engineered for strength, safety, and long-lasting infrastructure.
          </p>

          {/* Button */}
          <Link href="/products">
            <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white text-sm uppercase tracking-wider font-semibold transition-all duration-300 shadow-lg">
              Explore Products
            </button>
          </Link>

        </div>
      </div>
    </section>
  );
}

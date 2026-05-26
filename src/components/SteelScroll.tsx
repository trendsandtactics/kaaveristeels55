"use client";

import Link from "next/link";

export default function SteelScroll() {
  return (
    <section
      id="steel-scroll-section"
      className="relative w-full h-[100dvh] overflow-hidden -mt-20 lg:-mt-24"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover brightness-[1.05] contrast-[1.1]"
        src="/kaaveri01.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-end justify-center px-4 sm:px-8 lg:px-12 pb-8 sm:pb-12 lg:pb-16">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 lg:gap-6 text-center">

          {/* Heading */}
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-white font-bold leading-tight drop-shadow-[0_6px_40px_rgba(0,0,0,1)]">
            Building India&apos;s Future
          </h2>

          {/* Button */}
          <Link href="/products">
            <button className="self-center relative px-6 py-3 sm:px-8 sm:py-4 bg-accent-red text-white font-body text-[10px] sm:text-xs lg:text-sm uppercase tracking-[0.2em] font-bold overflow-hidden group border-2 border-accent-red shadow-lg">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-accent-red">
                Explore Our Products
              </span>
              <div className="absolute inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 z-0" />
            </button>
          </Link>

        </div>
      </div>
    </section>
  );
}

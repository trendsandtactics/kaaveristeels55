"use client";

export default function SteelScroll() {
  return (
    <section
      id="steel-scroll-section"
      className="relative w-full h-screen overflow-hidden -mt-20 md:-mt-24"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/kaaveri01.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/90 z-[1]" />

      {/* BOTTOM CENTER CONTENT */}
      <div className="absolute inset-0 z-10 flex items-end justify-center px-6 pb-10 md:pb-16">

        <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-4 md:gap-6 text-center">

          {/* Heading */}
          <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white font-bold leading-tight drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
            Building India&apos;s Future
          </h2>

          {/* Button */}
          <button className="px-6 py-3 md:px-8 md:py-4 bg-[#7A1C1C] text-white font-semibold text-xs md:text-lg uppercase tracking-wider rounded-md shadow-[0_8px_30px_rgba(122,28,28,0.6)] hover:bg-[#5c1414] hover:scale-105 transition duration-300 ease-in-out whitespace-nowrap">
            Explore Our Products
          </button>

        </div>

      </div>
    </section>
  );
}

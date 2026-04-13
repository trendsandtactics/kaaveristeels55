"use client";

export default function SteelScroll() {
  return (
    <section
      id="steel-scroll-section"
      className="relative w-full h-[100dvh] overflow-hidden -mt-20 md:-mt-24"
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
      <div className="absolute inset-0 z-10 flex items-end justify-center px-6 pb-12 md:pb-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-4 md:gap-6 text-center">

          {/* Heading */}
          <h2 className="font-sans text-xl sm:text-2xl md:text-4xl lg:text-5xl text-white font-bold leading-tight drop-shadow-[0_6px_40px_rgba(0,0,0,1)]">
            Building India&apos;s Future
          </h2>

          {/* Button */}
          <button className="px-5 py-2.5 md:px-7 md:py-3 bg-[#7A1C1C] text-white font-semibold text-[10px] md:text-sm uppercase tracking-wider rounded-md shadow-[0_10px_40px_rgba(122,28,28,0.7)] hover:bg-[#5c1414] hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out whitespace-nowrap">
            Explore Our Products
          </button>

        </div>
      </div>
    </section>
  );
}

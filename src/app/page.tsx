"use client";

import SteelScroll from "@/components/SteelScroll";
import HomeAbout from "@/components/HomeAbout";
import GreenSteel from "@/components/GreenSteel";
import HomeProducts from "@/components/HomeProducts";
import SteelCalculator from "@/components/Calculators/SteelCalculator";
import MapEmbed from "@/components/MapEmbed";
import TrustOnsite from "@/components/trustonsite";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full relative pt-20 md:pt-24 gap-12 md:gap-0">
      
      <section className="scroll-section scroll-mt-20 md:scroll-mt-24 w-full flex flex-col md:justify-center md:min-h-[calc(100svh-6rem)] py-8 md:py-0">
        {/* Scrollytelling Hero Area */}
        <SteelScroll />
      </section>

      <section className="scroll-section scroll-mt-20 md:scroll-mt-24 w-full flex flex-col md:justify-center md:min-h-[calc(100svh-6rem)] py-8 md:py-0">
        {/* About Section */}
        <HomeAbout />
      </section>

      <section className="scroll-section scroll-mt-20 md:scroll-mt-24 w-full flex flex-col md:justify-center md:min-h-[calc(100svh-6rem)] py-8 md:py-0">
        {/* Products Section */}
        <HomeProducts />
      </section>

      <section className="scroll-section scroll-mt-20 md:scroll-mt-24 w-full flex flex-col md:justify-center md:min-h-[calc(100svh-6rem)] py-8 md:py-0">
        {/* Green Steel Certification Section */}
        <GreenSteel />
      </section>

      <section className="scroll-section scroll-mt-20 md:scroll-mt-24 w-full flex flex-col md:justify-center md:min-h-[calc(100svh-6rem)] py-8 md:py-0">
        {/* Calculator Section */}
        <SteelCalculator />
      </section>

      <section className="scroll-section scroll-mt-20 md:scroll-mt-24 w-full flex flex-col md:justify-center md:min-h-[calc(100svh-6rem)] py-8 md:py-0">
        {/* Trust Section */}
        <TrustOnsite />
      </section>

      <section className="scroll-section scroll-mt-20 md:scroll-mt-24 w-full flex flex-col md:justify-center md:min-h-[calc(100svh-6rem)] py-8 md:py-0">
        {/* Map Section */}
        <MapEmbed />
      </section>

    </div>
  );
}

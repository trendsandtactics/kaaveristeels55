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
    <div className="flex flex-col items-center w-full relative pt-20 lg:pt-24 overflow-x-hidden">
      
      <section className="w-full flex flex-col">
        {/* Scrollytelling Hero Area */}
        <SteelScroll />
      </section>

      <section className="scroll-section scroll-mt-20 lg:scroll-mt-24 w-full flex flex-col lg:justify-center min-h-[calc(100svh-5rem)] lg:min-h-[calc(100svh-6rem)] py-12 lg:py-0">
        {/* About Section */}
        <HomeAbout />
      </section>

      <section className="scroll-section scroll-mt-20 lg:scroll-mt-24 w-full flex flex-col lg:justify-center min-h-[calc(100svh-5rem)] lg:min-h-[calc(100svh-6rem)] py-12 lg:py-0">
        {/* Products Section */}
        <HomeProducts />
      </section>

      <section className="scroll-section scroll-mt-20 lg:scroll-mt-24 w-full flex flex-col lg:justify-center min-h-[calc(100svh-5rem)] lg:min-h-[calc(100svh-6rem)] py-12 lg:py-0">
        {/* Green Steel Certification Section */}
        <GreenSteel />
      </section>

      <section className="scroll-section scroll-mt-20 lg:scroll-mt-24 w-full flex flex-col lg:justify-center min-h-[calc(100svh-5rem)] lg:min-h-[calc(100svh-6rem)] py-12 lg:py-0">
        {/* Calculator Section */}
        <SteelCalculator />
      </section>

      <section className="scroll-section scroll-mt-20 lg:scroll-mt-24 w-full flex flex-col lg:justify-center min-h-[calc(100svh-5rem)] lg:min-h-[calc(100svh-6rem)] py-12 lg:py-0">
        {/* Trust Section */}
        <TrustOnsite />
      </section>

      <section className="scroll-section scroll-mt-20 lg:scroll-mt-24 w-full flex flex-col lg:justify-center min-h-[calc(100svh-5rem)] lg:min-h-[calc(100svh-6rem)] py-12 lg:py-0">
        {/* Map Section */}
        <MapEmbed />
      </section>

    </div>
  );
}

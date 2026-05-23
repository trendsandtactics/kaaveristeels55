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
    <div className="flex flex-col items-center w-full relative gap-12 md:gap-16">
      
      <section className="scroll-section scroll-mt-20 md:scroll-mt-24 w-full flex flex-col py-8 md:py-12">
        {/* Scrollytelling Hero Area */}
        <SteelScroll />
      </section>

      <section className="scroll-section scroll-mt-20 md:scroll-mt-24 w-full flex flex-col py-8 md:py-12">
        {/* About Section */}
        <HomeAbout />
      </section>

      <section className="scroll-section scroll-mt-20 md:scroll-mt-24 w-full flex flex-col py-8 md:py-12">
        {/* Products Section */}
        <HomeProducts />
      </section>

      <section className="scroll-section scroll-mt-20 md:scroll-mt-24 w-full flex flex-col py-8 md:py-12">
        {/* Green Steel Certification Section */}
        <GreenSteel />
      </section>

      <section className="scroll-section scroll-mt-20 md:scroll-mt-24 w-full flex flex-col py-8 md:py-12">
        {/* Calculator Section */}
        <SteelCalculator />
      </section>

      <section className="scroll-section scroll-mt-20 md:scroll-mt-24 w-full flex flex-col py-8 md:py-12">
        {/* Trust Section */}
        <TrustOnsite />
      </section>

      <section className="scroll-section scroll-mt-20 md:scroll-mt-24 w-full flex flex-col py-8 md:py-12">
        {/* Map Section */}
        <MapEmbed />
      </section>

    </div>
  );
}

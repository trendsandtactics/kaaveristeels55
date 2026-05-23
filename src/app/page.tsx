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
    <div className="flex flex-col items-center w-full relative">
      
      <section className="scroll-section scroll-mt-20 md:scroll-mt-24 w-full flex flex-col">
        {/* Scrollytelling Hero Area */}
        <SteelScroll />
      </section>

      <section className="scroll-section scroll-mt-20 md:scroll-mt-24 w-full flex flex-col">
        {/* About Section */}
        <HomeAbout />
      </section>

      <section className="scroll-section scroll-mt-20 md:scroll-mt-24 w-full flex flex-col">
        {/* Products Section */}
        <HomeProducts />
      </section>

      <section className="scroll-section scroll-mt-20 md:scroll-mt-24 w-full flex flex-col">
        {/* Green Steel Certification Section */}
        <GreenSteel />
      </section>

      <section className="scroll-section scroll-mt-20 md:scroll-mt-24 w-full flex flex-col">
        {/* Calculator Section */}
        <SteelCalculator />
      </section>

      <section className="scroll-section scroll-mt-20 md:scroll-mt-24 w-full flex flex-col">
        {/* Trust Section */}
        <TrustOnsite />
      </section>

      <section className="scroll-section scroll-mt-20 md:scroll-mt-24 w-full flex flex-col">
        {/* Map Section */}
        <MapEmbed />
      </section>

    </div>
  );
}

"use client";

import { useEffect } from "react";
import SteelScroll from "@/components/SteelScroll";
import HomeAbout from "@/components/HomeAbout";
import GreenSteel from "@/components/GreenSteel";
import HomeProducts from "@/components/HomeProducts";
import SteelCalculator from "@/components/Calculators/SteelCalculator";
import MapEmbed from "@/components/MapEmbed";
import TrustOnsite from "@/components/trustonsite";

export default function Home() {
  useEffect(() => {
    // Prevent smooth-scroll jump bug when applying scroll snapping globally
    document.documentElement.style.scrollBehavior = "auto";
    document.documentElement.style.scrollSnapType = "";

    // Scale down contents of sections if they are taller than the screen.
    // This guarantees all data is perfectly visible in one scroll on ALL devices.
    const scaleSectionsToFit = () => {
      const sections = Array.from(document.querySelectorAll(".scroll-section")) as HTMLElement[];
      const headerOffset = window.innerWidth >= 1024 ? 96 : 80;
      const availableHeight = window.innerHeight - headerOffset;

      sections.forEach((sec) => {
        const child = sec.firstElementChild as HTMLElement;
        if (!child) return;

        // Reset zoom to calculate natural height correctly
        (child.style as any).zoom = "1";
        const childHeight = child.scrollHeight;
        
        if (childHeight > availableHeight) {
          const scale = availableHeight / childHeight;
          // Scale down to 98% of available height to give a slight visual padding
          (child.style as any).zoom = (scale * 0.98).toString();
        }
      });
    };

    scaleSectionsToFit(); // Run once on mount
    window.addEventListener("resize", scaleSectionsToFit);

    // Force scroll to top on initial load, then safely apply snap behavior globally
    window.scrollTo(0, 0);
    const snapTimeout = setTimeout(() => {
      document.documentElement.style.scrollSnapType = "y mandatory";
    }, 100);
    
    return () => {
      clearTimeout(snapTimeout);
      window.removeEventListener("resize", scaleSectionsToFit);
      document.documentElement.style.scrollSnapType = "";
    };
  }, []);

  return (
    <div className="flex flex-col items-center w-full relative pt-20 lg:pt-24 overflow-x-hidden">
      
      <section className="scroll-section snap-start snap-always w-full flex flex-col lg:justify-center min-h-[calc(100svh-5rem)] lg:min-h-[calc(100svh-6rem)]">
        {/* Scrollytelling Hero Area */}
        <SteelScroll />
      </section>

      <section className="scroll-section snap-start snap-always scroll-mt-20 lg:scroll-mt-24 w-full flex flex-col lg:justify-center min-h-[calc(100svh-5rem)] lg:min-h-[calc(100svh-6rem)] py-12 lg:py-0">
        {/* About Section */}
        <HomeAbout />
      </section>

      <section className="scroll-section snap-start snap-always scroll-mt-20 lg:scroll-mt-24 w-full flex flex-col lg:justify-center min-h-[calc(100svh-5rem)] lg:min-h-[calc(100svh-6rem)] py-12 lg:py-0">
        {/* Products Section */}
        <HomeProducts />
      </section>

      <section className="scroll-section snap-start snap-always scroll-mt-20 lg:scroll-mt-24 w-full flex flex-col lg:justify-center min-h-[calc(100svh-5rem)] lg:min-h-[calc(100svh-6rem)] py-12 lg:py-0">
        {/* Green Steel Certification Section */}
        <GreenSteel />
      </section>

      <section className="scroll-section snap-start snap-always scroll-mt-20 lg:scroll-mt-24 w-full flex flex-col lg:justify-center min-h-[calc(100svh-5rem)] lg:min-h-[calc(100svh-6rem)] py-12 lg:py-0">
        {/* Calculator Section */}
        <SteelCalculator />
      </section>

      <section className="scroll-section snap-start snap-always scroll-mt-20 lg:scroll-mt-24 w-full flex flex-col lg:justify-center min-h-[calc(100svh-5rem)] lg:min-h-[calc(100svh-6rem)] py-12 lg:py-0">
        {/* Trust Section */}
        <TrustOnsite />
      </section>

      <section className="scroll-section snap-start snap-always scroll-mt-20 lg:scroll-mt-24 w-full flex flex-col lg:justify-center min-h-[calc(100svh-5rem)] lg:min-h-[calc(100svh-6rem)] py-12 lg:py-0">
        {/* Map Section */}
        <MapEmbed />
      </section>

    </div>
  );
}

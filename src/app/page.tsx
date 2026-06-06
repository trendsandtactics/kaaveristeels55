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
    const handleResize = () => {
      // Enable native CSS scroll snapping for desktop and tablet landscape (>= 1024px)
      if (window.innerWidth >= 1024) {
        // We delay applying scrollSnapType to avoid the skip-to-bottom bug on initial load.
      } else {
        document.documentElement.style.scrollSnapType = "";
        document.documentElement.style.scrollBehavior = "";
      }

      const sections = Array.from(document.querySelectorAll(".scroll-section")) as HTMLElement[];
      const headerOffset = window.innerWidth < 768 ? 80 : 96;
      const availableHeight = window.innerHeight - headerOffset;

      sections.forEach((sec) => {
        if (sec.tagName.toLowerCase() === "footer") return;

        const child = sec.firstElementChild as HTMLElement;
        if (!child) return;

        // Reset zoom to calculate natural height correctly
        (child.style as CSSStyleDeclaration & { zoom: string }).zoom = "1";
        
        if (window.innerWidth >= 1024) {
          // Force height to exactly fit viewport to guarantee a single snap scroll
          sec.style.height = `${availableHeight}px`;
          sec.style.overflow = "hidden";
          
          void child.offsetHeight; // Force layout reflow
          const childHeight = child.scrollHeight;
          
          if (childHeight > availableHeight) {
            const scale = availableHeight / childHeight;
            // Scale down to 98% of available height to give a slight visual padding
            (child.style as CSSStyleDeclaration & { zoom: string }).zoom = (scale * 0.98).toString();
          }
        } else {
          // Reset constraints strictly on smaller layouts like mobile
          sec.style.height = "";
          sec.style.overflow = "";
        }
      });
    };

    // Disable snapping temporarily during hydration to prevent Chrome scroll jump bug
    document.documentElement.style.scrollSnapType = "";
    document.documentElement.style.scrollBehavior = "auto";
    
    handleResize(); // Calculate and enforce heights immediately

    // Force scroll to top on initial load, then apply snap behavior safely
    window.scrollTo(0, 0);
    const snapTimeout = setTimeout(() => {
      if (window.innerWidth >= 1024) {
        document.documentElement.style.scrollSnapType = "y mandatory";
      }
    }, 100);

    window.addEventListener("resize", handleResize);
    
    return () => {
      clearTimeout(snapTimeout);
      window.removeEventListener("resize", handleResize);
      document.documentElement.style.scrollSnapType = "";
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <div className="flex flex-col items-center w-full relative pt-20 lg:pt-24 overflow-x-hidden">
      
      <section className="scroll-section w-full flex flex-col snap-start snap-always min-h-[calc(100svh-5rem)] lg:min-h-[calc(100svh-6rem)]">
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

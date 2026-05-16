"use client";

import { useEffect } from "react";
import SteelScroll from "@/components/SteelScroll";
import HomeAbout from "@/components/HomeAbout";
import GreenSteel from "@/components/GreenSteel";
import HomeProducts from "@/components/HomeProducts";
import SteelCalculator from "@/components/Calculators/SteelCalculator";
import MapEmbed from "@/components/MapEmbed";
import TrustOnsite from "@/components/trustonsite";
import { animate } from "framer-motion";

export default function Home() {
  useEffect(() => {
    let isScrolling = false;
    let wheelTimer: NodeJS.Timeout;

    const handleWheel = (e: WheelEvent) => {
      // Prevent interfering if a modal is open
      if (document.body.style.overflow === "hidden") return;
      
      // Disable default scroll to prevent jumpiness and inertia problems
      e.preventDefault();
      
      if (isScrolling) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      const sections = Array.from(document.querySelectorAll(".scroll-section")) as HTMLElement[];
      if (sections.length === 0) return;

      // Calculate which section is currently active
      let currentIndex = 0;
      let minDiff = Infinity;
      const currentScroll = window.scrollY;
      const headerOffset = 80;

      sections.forEach((sec, idx) => {
        const top = sec.getBoundingClientRect().top + window.scrollY;
        const diff = Math.abs(top - headerOffset - currentScroll);
        if (diff < minDiff) {
          minDiff = diff;
          currentIndex = idx;
        }
      });

      const nextIndex = Math.max(0, Math.min(currentIndex + direction, sections.length - 1));

      if (currentIndex !== nextIndex) {
        isScrolling = true;
        const targetTop = sections[nextIndex].getBoundingClientRect().top + window.scrollY;
        
        animate(window.scrollY, targetTop - headerOffset, {
          duration: 0.9,
          ease: [0.76, 0, 0.24, 1], // Gorgeous custom cinematic easing curve
          onUpdate: (latest) => window.scrollTo(0, latest)
        });
        
        // Debounce scrolling so the awesome transition finishes beautifully
        wheelTimer = setTimeout(() => {
          isScrolling = false;
        }, 1000);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      clearTimeout(wheelTimer);
    };
  }, []);

  return (
    <div className="flex flex-col items-center w-full relative pt-20 md:pt-24">
      
      <section className="scroll-section scroll-mt-20 md:scroll-mt-24 min-h-[calc(100svh-5rem)] md:min-h-[calc(100svh-6rem)] w-full flex flex-col justify-center">
        {/* Scrollytelling Hero Area */}
        <SteelScroll />
      </section>

      <section className="scroll-section scroll-mt-20 md:scroll-mt-24 min-h-[calc(100svh-5rem)] md:min-h-[calc(100svh-6rem)] w-full flex flex-col justify-center">
        {/* About Section */}
        <HomeAbout />
      </section>

      <section className="scroll-section scroll-mt-20 md:scroll-mt-24 min-h-[calc(100svh-5rem)] md:min-h-[calc(100svh-6rem)] w-full flex flex-col justify-center">
        {/* Products Section */}
        <HomeProducts />
      </section>

      <section className="scroll-section scroll-mt-20 md:scroll-mt-24 min-h-[calc(100svh-5rem)] md:min-h-[calc(100svh-6rem)] w-full flex flex-col justify-center">
        {/* Green Steel Certification Section */}
        <GreenSteel />
      </section>

      <section className="scroll-section scroll-mt-20 md:scroll-mt-24 min-h-[calc(100svh-5rem)] md:min-h-[calc(100svh-6rem)] w-full flex flex-col justify-center">
        {/* Calculator Section */}
        <SteelCalculator />
      </section>

      <section className="scroll-section scroll-mt-20 md:scroll-mt-24 min-h-[calc(100svh-5rem)] md:min-h-[calc(100svh-6rem)] w-full flex flex-col justify-center">
        {/* Trust Section */}
        <TrustOnsite />
      </section>

      <section className="scroll-section scroll-mt-20 md:scroll-mt-24 min-h-[calc(100svh-5rem)] md:min-h-[calc(100svh-6rem)] w-full flex flex-col justify-center">
        {/* Map Section */}
        <MapEmbed />
      </section>

    </div>
  );
}

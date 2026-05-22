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
    // Disable scroll-jacking strictly on mobile phones only.
    // Tablets and laptops will retain the presentation-like snap scrolling.
    if (window.innerWidth < 768) return;

    let isScrolling = false;
    let wheelTimer: NodeJS.Timeout;

    const handleWheel = (e: WheelEvent) => {
      // Prevent interfering if a modal is open
      if (document.body.style.overflow === "hidden") return;
      
      const direction = e.deltaY > 0 ? 1 : -1;
      const sections = Array.from(document.querySelectorAll(".scroll-section")) as HTMLElement[];
      if (sections.length === 0) return;

      // Calculate which section is currently active
      let currentIndex = 0;
      let minDiff = Infinity;
      const currentScroll = window.scrollY;
      const headerOffset = window.innerWidth < 768 ? 80 : 96;

      sections.forEach((sec, idx) => {
        const top = sec.getBoundingClientRect().top + window.scrollY;
        const diff = Math.abs(top - headerOffset - currentScroll);
        if (diff < minDiff) {
          minDiff = diff;
          currentIndex = idx;
        }
      });

      // Graceful fallback: If the current section is taller than the viewport,
      // allow native scrolling so the user can read the overflowing content.
      const activeSection = sections[currentIndex];
      if (activeSection) {
        const rect = activeSection.getBoundingClientRect();
        if (rect.height > window.innerHeight) {
          const isAtTop = rect.top >= headerOffset - 10;
          const isAtBottom = rect.bottom <= window.innerHeight + 10;

          // If scrolling up while not at the top, or down while not at the bottom, let native scroll happen
          if (direction === -1 && !isAtTop) return;
          if (direction === 1 && !isAtBottom) return;
        }
      }

      // Disable default scroll to prevent jumpiness and inertia problems
      e.preventDefault();
      
      if (isScrolling) return;

      const nextIndex = Math.max(0, Math.min(currentIndex + direction, sections.length - 1));

      if (currentIndex !== nextIndex) {
        isScrolling = true;
        const targetTop = sections[nextIndex].getBoundingClientRect().top + window.scrollY;
        
        animate(window.scrollY, targetTop - headerOffset, {
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1], // Fast, snappy, and attractive easing curve
          onUpdate: (latest) => window.scrollTo(0, latest)
        });
        
        // Debounce scrolling so the user can scroll again right after the transition
        wheelTimer = setTimeout(() => {
          isScrolling = false;
        }, 500);
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
      
      <section className="scroll-section scroll-mt-20 md:scroll-mt-24 w-full flex flex-col justify-center min-h-[calc(100svh-5rem)] md:min-h-[calc(100svh-6rem)] py-10 md:py-0">
        {/* Scrollytelling Hero Area */}
        <SteelScroll />
      </section>

      <section className="scroll-section scroll-mt-20 md:scroll-mt-24 w-full flex flex-col justify-center min-h-[calc(100svh-5rem)] md:min-h-[calc(100svh-6rem)] py-10 md:py-0">
        {/* About Section */}
        <HomeAbout />
      </section>

      <section className="scroll-section scroll-mt-20 md:scroll-mt-24 w-full flex flex-col justify-center min-h-[calc(100svh-5rem)] md:min-h-[calc(100svh-6rem)] py-10 md:py-0">
        {/* Products Section */}
        <HomeProducts />
      </section>

      <section className="scroll-section scroll-mt-20 md:scroll-mt-24 w-full flex flex-col justify-center min-h-[calc(100svh-5rem)] md:min-h-[calc(100svh-6rem)] py-10 md:py-0">
        {/* Green Steel Certification Section */}
        <GreenSteel />
      </section>

      <section className="scroll-section scroll-mt-20 md:scroll-mt-24 w-full flex flex-col justify-center min-h-[calc(100svh-5rem)] md:min-h-[calc(100svh-6rem)] py-10 md:py-0">
        {/* Calculator Section */}
        <SteelCalculator />
      </section>

      <section className="scroll-section scroll-mt-20 md:scroll-mt-24 w-full flex flex-col justify-center min-h-[calc(100svh-5rem)] md:min-h-[calc(100svh-6rem)] py-10 md:py-0">
        {/* Trust Section */}
        <TrustOnsite />
      </section>

      <section className="scroll-section scroll-mt-20 md:scroll-mt-24 w-full flex flex-col justify-center min-h-[calc(100svh-5rem)] md:min-h-[calc(100svh-6rem)] py-10 md:py-0">
        {/* Map Section */}
        <MapEmbed />
      </section>

    </div>
  );
}

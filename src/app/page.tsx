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
    if (window.innerWidth <= 1024) return;

    // Remove CSS smooth scrolling temporarily to prevent it from fighting
    // with Framer Motion, which causes severe jittering/stuttering.
    const html = document.documentElement;
    html.classList.remove("scroll-smooth");

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

      // Disable default scroll to prevent jumpiness and inertia problems
      e.preventDefault();
      
      if (isScrolling) return;

      const nextIndex = Math.max(0, Math.min(currentIndex + direction, sections.length - 1));

      if (currentIndex !== nextIndex) {
        isScrolling = true;
        const targetTop = sections[nextIndex].getBoundingClientRect().top + window.scrollY;
        
        animate(window.scrollY, targetTop - headerOffset, {
          duration: 0.8,
          ease: [0.25, 1, 0.5, 1], // Softer and smoother easing curve
          onUpdate: (latest) => window.scrollTo(0, latest)
        });
        
        // Increase debounce to absorb laptop trackpad inertia and prevent multi-jumping
        wheelTimer = setTimeout(() => {
          isScrolling = false;
        }, 1200);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      html.classList.add("scroll-smooth");
      clearTimeout(wheelTimer);
    };
  }, []);

  return (
    <div className="flex flex-col items-center w-full relative pt-20 lg:pt-24 overflow-x-hidden">
      
      <section className="scroll-section w-full flex flex-col">
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

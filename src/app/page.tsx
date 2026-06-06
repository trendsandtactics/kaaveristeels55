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

    // Remove CSS smooth scrolling temporarily to prevent it from fighting
    // with Framer Motion, which causes severe jittering/stuttering.
    const html = document.documentElement;
    html.classList.remove("scroll-smooth");

    // Dynamically scale down contents of sections if they are taller than the screen.
    // This guarantees you see the *whole* component in one scroll on smaller laptop screens.
    const scaleSectionsToFit = () => {
      const sections = Array.from(document.querySelectorAll(".scroll-section")) as HTMLElement[];
      const headerOffset = window.innerWidth < 768 ? 80 : 96;
      const availableHeight = window.innerHeight - headerOffset;

      sections.forEach((sec) => {
        const child = sec.firstElementChild as HTMLElement;
        if (!child) return;

        // Reset zoom to calculate natural height correctly
        (child.style as CSSStyleDeclaration & { zoom: string }).zoom = "1";
        const childHeight = child.scrollHeight;
        
        if (childHeight > availableHeight) {
          const scale = availableHeight / childHeight;
          // Scale down to 98% of available height to give a slight visual padding
          (child.style as CSSStyleDeclaration & { zoom: string }).zoom = (scale * 0.98).toString();
        }
      });
    };

    let lastAnimationTime = 0;
    let lastWheelTime = 0;

    const handleWheel = (e: WheelEvent) => {
      // Prevent interfering if a modal is open
      if (document.body.style.overflow === "hidden") return;
      
      const direction = e.deltaY > 0 ? 1 : -1;
      const sections = Array.from(document.querySelectorAll(".scroll-section")) as HTMLElement[];
      if (sections.length === 0) return;

      const currentScroll = window.scrollY;
      const headerOffset = window.innerWidth < 768 ? 80 : 96;
      const firstSectionTop = sections[0].getBoundingClientRect().top + window.scrollY;

      // If we are currently above the first snap section (in the Hero area)
      if (currentScroll < firstSectionTop - headerOffset - 10) {
        // If scrolling up, let native scroll happen
        if (direction === -1) return;
        
        // If scrolling down, check how close we are to the first snap section
        const distanceToFirst = firstSectionTop - headerOffset - currentScroll;
        if (distanceToFirst > window.innerHeight * 0.4) {
          return; // Still far away, let native scroll happen
        }
      } else if (currentScroll >= firstSectionTop - headerOffset - 10 && currentScroll <= firstSectionTop - headerOffset + 10) {
        // We are exactly AT the first snap section
        if (direction === -1) {
          // Scrolling up from the first section -> native scroll into Hero area
          return;
        }
      }

      // Calculate which section is currently active
      let currentIndex = 0;
      let minDiff = Infinity;

      sections.forEach((sec, idx) => {
        const top = sec.getBoundingClientRect().top + window.scrollY;
        const diff = Math.abs(top - headerOffset - currentScroll);
        if (diff < minDiff) {
          minDiff = diff;
          currentIndex = idx;
        }
      });

      // If we are pulling down from the hero section, force index to -1 so nextIndex is 0
      if (currentScroll < firstSectionTop - headerOffset - 10 && direction === 1) {
        currentIndex = -1;
      }

      // Disable default scroll to prevent jumpiness and inertia problems
      e.preventDefault();
      
      const now = Date.now();
      const timeSinceLastAnimation = now - lastAnimationTime;
      const timeSinceLastWheel = now - lastWheelTime;
      lastWheelTime = now;

      // Wait for both the animation to finish (1200ms) AND trackpad inertia to stop (150ms)
      if (timeSinceLastAnimation < 1200 || timeSinceLastWheel < 150) return;

      const nextIndex = Math.max(0, Math.min(currentIndex + direction, sections.length - 1));

      if (currentIndex !== nextIndex) {
        lastAnimationTime = now;
        const targetTop = sections[nextIndex].getBoundingClientRect().top + window.scrollY;
        
        animate(window.scrollY, targetTop - headerOffset, {
          duration: 0.8,
          ease: [0.25, 1, 0.5, 1], // Softer and smoother easing curve
          onUpdate: (latest) => window.scrollTo(0, latest)
        });
      }
    };

    scaleSectionsToFit(); // Run once on mount
    window.addEventListener("resize", scaleSectionsToFit);
    window.addEventListener("wheel", handleWheel, { passive: false });
    
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("resize", scaleSectionsToFit);
      html.classList.add("scroll-smooth");
    };
  }, []);

  return (
    <div className="flex flex-col items-center w-full relative pt-20 lg:pt-24 overflow-x-hidden">
      
      <section className="scroll-section scroll-mt-20 lg:scroll-mt-24 w-full flex flex-col lg:justify-center min-h-[calc(100svh-5rem)] lg:min-h-[calc(100svh-6rem)]">
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

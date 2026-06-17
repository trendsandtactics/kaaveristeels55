"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, animate } from "framer-motion";
import { ArrowRight, Download, CheckCircle2, Award, Shield, Globe } from "lucide-react";

// Animated Counter Component
function AnimatedCounter({ to, suffix }: { to: number | string; suffix: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!nodeRef.current || !inView) return;
    
    if (typeof to === "string") {
      nodeRef.current.textContent = to + suffix;
      return;
    }

    const controls = animate(0, to, {
      duration: 2.5,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate(value) {
        if (nodeRef.current) {
          nodeRef.current.textContent = Math.round(value) + suffix;
        }
      },
    });
    return () => controls.stop();
  }, [to, suffix, inView]);

  return <span ref={nodeRef}>{typeof to === "number" ? "0" : to}</span>;
}

export default function HomeAbout() {
  const stats = [
    { number: 30, suffix: "+", label: "Years of\nExcellence", icon: <Award className="text-red-500 w-6 h-6" /> },
    { number: 1, suffix: "Mn+", label: "Tons\nCapacity", icon: <Shield className="text-red-500 w-6 h-6" /> },
    { number: "ISI", suffix: "", label: "Certified\nProducts", icon: <CheckCircle2 className="text-red-500 w-6 h-6" /> },
    { number: "PAN INDIA", suffix: "", label: "Vast Distribution\nNetwork", icon: <Globe className="text-red-500 w-6 h-6" /> },
  ];

  return (
    <section className="relative w-full min-h-screen bg-black text-white flex flex-col justify-between py-16 md:py-24 overflow-hidden">
      {/* Background Graphic Asset */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/Aboutbg.png"
          alt="Kaaveri Steel Cinematic Industrial Background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Subtle dark ambient vignettes */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
      </div>

      {/* Main Content Layout Container */}
      <div className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 z-10 my-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Text Block */}
        <div className="flex flex-col max-w-[620px]">
          {/* Subheading tag */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-[3px] bg-red-600" />
            <span className="uppercase tracking-[0.2em] text-red-500 text-xs sm:text-sm font-bold">
              About Kaaveri
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-sans tracking-tight leading-[1.1] mb-8">
            Forging India’s <br />
            Future in Steel <br />
            <span className="text-red-600">Excellence</span>
          </h2>

          {/* Body Prose Description */}
          <div className="space-y-6 text-gray-300 text-sm sm:text-base md:text-lg font-normal leading-relaxed mb-10 opacity-90">
            <p>
              At Kaaveri, we engineer the resilient core of iconic structures. As a leading manufacturer of premium TMT bars and structural steel, we blend decades of metallurgical mastery with cutting-edge technology.
            </p>
            <p>
              Every bar we forge meets stringent global standards, providing unyielding strength, supreme ductility, and sustainable solutions for generations to come.
            </p>
          </div>

          {/* Statistics Horizontal Grid Layout */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-start mb-12 border-l border-white/10 pl-4 sm:pl-0 sm:border-none">
            {stats.map((stat) => (
              <div key={stat.label} className="flex gap-3 items-start sm:flex-col sm:gap-2">
                <div className="mt-1 sm:mt-0 opacity-80">{stat.icon}</div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center">
                    {typeof stat.number === "number" ? (
                      <AnimatedCounter to={stat.number} suffix={stat.suffix} />
                    ) : (
                      <span>{stat.number}</span>
                    )}
                  </div>
                  <div className="text-gray-400 text-[11px] font-bold uppercase tracking-wider leading-tight whitespace-pre-line mt-1">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Action Interactive Elements */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5">
            <Link href="/about-us">
              <button className="bg-red-600 text-white px-6 sm:px-8 py-3.5 rounded-sm uppercase tracking-widest font-bold text-xs flex items-center gap-3 transition-colors duration-300 hover:bg-red-700">
                <span>Discover Our Legacy</span>
                <ArrowRight size={16} />
              </button>
            </Link>
            
            <button className="bg-transparent border border-white/30 hover:border-white text-white px-6 sm:px-8 py-3.5 rounded-sm uppercase tracking-widest font-bold text-xs flex items-center gap-3 transition-colors duration-300">
              <Download size={16} className="text-gray-400" />
              Download Brochure
            </button>
          </div>
        </div>

        {/* Right Area acts as spacing wrapper to highlight raw graphics */}
        <div className="hidden lg:block w-full h-[500px]" />
      </div>

      {/* Footer Branding Feature Ribbon */}
      <div className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 z-10 mt-12">
        <div className="w-full bg-black/40 backdrop-blur-md border border-white/10 p-8 sm:p-10 rounded-sm grid md:grid-cols-[40%_1fr] gap-8 items-center">
          
          {/* Quote Block */}
          <div className="relative pl-6 border-l-2 border-red-600">
            <span className="absolute -top-4 left-4 text-6xl text-red-600/20 font-serif select-none pointer-events-none">“</span>
            <p className="text-lg sm:text-xl font-medium tracking-wide text-white leading-snug">
              Building stronger structures. <br />
              Building a stronger India.
            </p>
          </div>

          {/* Three Feature Highlight Grid */}
          <div className="grid sm:grid-cols-3 gap-6 md:gap-8 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full" /> Premium Quality
              </h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                Stringent testing at every step for unmatched quality.
              </p>
            </div>
            
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full" /> Built To Last
              </h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                Superior strength, corrosion resistance & durability.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full" /> Sustainable Future
              </h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                Responsible manufacturing for generations to come.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

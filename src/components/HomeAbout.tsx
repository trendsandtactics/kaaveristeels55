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
    { number: 30, suffix: "+", label: "Years of\nExcellence", icon: <Award className="text-red-500 w-7 h-7" /> },
    { number: 1, suffix: "Mn+", label: "Tons\nCapacity", icon: <Shield className="text-red-500 w-7 h-7" /> },
    { number: "ISI", suffix: "", label: "Certified\nProducts", icon: <CheckCircle2 className="text-red-500 w-7 h-7" /> },
    { number: "PAN INDIA", suffix: "", label: "Vast Distribution\nNetwork", icon: <Globe className="text-red-500 w-7 h-7" /> },
  ];

  return (
    <section className="relative w-full min-h-screen bg-black text-white flex flex-col justify-between py-12 md:py-16 overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
      </div>

      {/* Main Content Layout Container */}
      <div className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 z-10 my-auto grid lg:grid-cols-12 gap-8 items-center">
        
        {/* Left-aligned Content Block (Shifted slightly left with optimized column weight) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col lg:col-span-8 xl:col-span-9 w-full"
        >
          {/* Subheading tag */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[3px] bg-red-600" />
            <span className="uppercase tracking-[0.25em] text-red-500 text-xs sm:text-sm font-extrabold">
              About Kaaveri
            </span>
          </div>

          {/* Expanded Main Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-sans tracking-tight leading-[1.1] mb-6 max-w-[850px]">
            Forging India’s <br />
            Future in Steel <br />
            <span className="text-red-600">Excellence</span>
          </h2>

          {/* Crisp, Highly Readable Prose Description */}
          <div className="space-y-4 text-gray-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-8 max-w-[800px] opacity-95">
            <p>
              At Kaaveri, we engineer the resilient core of iconic structures. As a leading
              manufacturer of premium TMT bars and structural steel, we blend decades of
              metallurgical mastery with cutting-edge technology.
            </p>
            <p>
              Every bar we forge meets stringent global standards, providing unyielding
              strength, supreme ductility, and sustainable solutions for generations to come.
            </p>
          </div>

          {/* Statistics Horizontal Grid Layout */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-start mb-10 border-l border-white/10 pl-4 sm:pl-0 sm:border-none">
            {stats.map((stat, idx) => (
              <motion.div 
                key={stat.label} 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex gap-4 items-start sm:flex-col sm:gap-3"
              >
                <div className="mt-1 sm:mt-0 opacity-90">{stat.icon}</div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-white tracking-tight flex items-center">
                    {typeof stat.number === "number" ? (
                      <AnimatedCounter to={stat.number} suffix={stat.suffix} />
                    ) : (
                      <span>{stat.number}</span>
                    )}
                  </div>
                  <div className="text-gray-400 text-xs font-bold uppercase tracking-wider leading-tight whitespace-pre-line mt-1.5">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Action Interactive Elements */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link href="/about-us">
              <button className="bg-red-600 text-white px-8 sm:px-10 py-3.5 rounded-sm uppercase tracking-widest font-bold text-xs sm:text-sm flex items-center gap-3 transition-all duration-300 hover:bg-red-700 active:scale-95 shadow-lg shadow-red-600/20">
                <span>Discover Our Legacy</span>
                <ArrowRight size={18} />
              </button>
            </Link>
            
            <button className="bg-transparent border border-white/30 hover:border-white text-white px-8 sm:px-10 py-3.5 rounded-sm uppercase tracking-widest font-bold text-xs sm:text-sm flex items-center gap-3 transition-all duration-300 active:scale-95">
              <Download size={18} className="text-gray-400" />
              Download Brochure
            </button>
          </div>
        </motion.div>

        {/* Right Area Spacer */}
        <div className="hidden lg:block lg:col-span-4 xl:col-span-3" />
      </div>

      {/* Footer Feature Box Container (Brought securely back into view) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 z-10 mt-10"
      >
        <div className="w-full bg-black/60 backdrop-blur-md border border-white/10 p-6 sm:p-10 rounded-sm grid md:grid-cols-[30%_1fr] gap-6 items-center">
          
          {/* Quote Block */}
          <div className="relative pl-6 border-l-4 border-red-600">
            <span className="absolute -top-6 left-4 text-6xl text-red-600/20 font-serif select-none pointer-events-none">“</span>
            <p className="text-lg sm:text-xl font-semibold tracking-wide text-white leading-snug">
              Building stronger structures. <br />
              Building a stronger India.
            </p>
          </div>

          {/* Three Feature Highlight Grid */}
          <div className="grid sm:grid-cols-3 gap-6 md:gap-8 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-8">
            <div>
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-white mb-1.5 flex items-center gap-2">
                <span className="w-2 h-2 bg-red-600 rounded-full" /> Premium Quality
              </h4>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Stringent testing at every step for unmatched quality standards.
              </p>
            </div>
            
            <div>
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-white mb-1.5 flex items-center gap-2">
                <span className="w-2 h-2 bg-red-600 rounded-full" /> Built To Last
              </h4>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Superior physical strength, unmatched corrosion resistance & durability.
              </p>
            </div>

            <div>
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-white mb-1.5 flex items-center gap-2">
                <span className="w-2 h-2 bg-red-600 rounded-full" /> Sustainable Future
              </h4>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Responsible global-standard manufacturing practices for generations to come.
              </p>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

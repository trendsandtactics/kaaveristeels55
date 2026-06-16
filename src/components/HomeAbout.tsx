"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, animate } from "framer-motion";
import { ArrowRight, Download, MapPinned, ShieldCheck } from "lucide-react";

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
      ease: [0.25, 0.1, 0.25, 1], // Custom easing for premium feel
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
    { number: 30, suffix: "+", label: "Years of Excellence" },
    { number: 500, suffix: "+", label: "Happy Customers" },
    { number: 1, suffix: " Mn+", label: "Tons Capacity" },
    { number: "ISI", suffix: "", label: "Certified Products" },
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-24 lg:py-32 overflow-hidden bg-[#020617]">
      {/* Background Cinematic Assets */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/image/about1.png"
          alt="Kaaveri Steel Factory Background"
          fill
          priority
          className="object-cover object-center blur-sm opacity-[0.15] mix-blend-luminosity"
        />
        {/* Dark Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-transparent to-[#020617]" />
        
        {/* Animated Molten Metal & Accent Glows */}
        <motion.div 
          animate={{ y: [0, -40, 0], opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-orange-600/10 blur-[120px] rounded-full" 
        />
        <motion.div 
          animate={{ x: [0, 40, 0], opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/4 w-[700px] h-[700px] bg-red-700/10 blur-[150px] rounded-full" 
        />
      </div>

      <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Main Layout Container */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full rounded-[32px]"
        >
          {/* Glassmorphism Background (Overflow Hidden for containment) */}
          <div className="absolute inset-0 bg-[#0a0f18]/60 backdrop-blur-[20px] border border-white/[0.08] rounded-[32px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)]">
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-red-600/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
          </div>

          {/* Grid Layout (Visible Overflow for overlapping images) */}
          <div className="relative z-10 grid lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-center p-6 sm:p-10 md:p-14 lg:p-16">
            
            {/* LEFT SIDE (45%) */}
            <motion.div
              initial={{ opacity: 0, x: -50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative w-full h-[400px] sm:h-[500px] lg:h-[700px] group lg:-ml-12 lg:mt-8 z-20"
            >
              {/* Soft glow around floating image */}
              <div className="absolute -inset-4 bg-red-600/20 blur-[50px] rounded-full z-[-1] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="absolute inset-0 rounded-[24px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.8)] border border-white/10 transition-transform duration-700 group-hover:scale-[1.03] group-hover:-translate-y-2 bg-[#050505]">
                <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />
                
                <Image
                  src="/tmtbar1.png"
                  alt="Premium Kaaveri TMT Steel Rods"
                  fill
                  className="object-cover object-bottom transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* 3D Depth & Cinematic Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-40 mix-blend-overlay" />
              </div>
            </motion.div>

            {/* RIGHT SIDE (55%) */}
            <div className="flex flex-col justify-center relative z-20">
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-4 mb-6"
              >
                <span className="w-12 h-[2px] bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
                <span className="uppercase tracking-[0.25em] text-red-500 text-xs sm:text-sm font-bold">
                  About Kaaveri
                </span>
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-serif text-5xl md:text-6xl lg:text-[72px] leading-[1.05] text-white font-black mb-8 drop-shadow-2xl"
              >
                Forging The <br />
                <span className="text-red-600 drop-shadow-[0_0_20px_rgba(220,38,38,0.4)]">Future.</span>
              </motion.h2>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="max-w-[500px] space-y-5 text-gray-300 text-base sm:text-lg font-light leading-relaxed mb-12"
              >
                <p>
                  At KAAVERI, we engineer the resilient core of iconic structures. As a leading manufacturer of premium TMT bars and structural steel, we blend decades of metallurgical mastery with cutting-edge 2026 technology.
                </p>
                <p>
                  Every bar we forge meets stringent global standards, providing unyielding strength, supreme ductility, and sustainable solutions for generations to come.
                </p>
              </motion.div>

              {/* Animated Stats Grid */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-12">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                    className="group relative overflow-hidden bg-[#0f172a]/40 border border-white/[0.08] rounded-[20px] p-6 backdrop-blur-[20px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(220,38,38,0.15)] hover:bg-white/5 hover:border-white/20"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-2 relative z-10">
                      <AnimatedCounter to={stat.number} suffix={stat.suffix} />
                    </div>
                    <div className="text-gray-400 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.15em] relative z-10 group-hover:text-white transition-colors duration-300">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Trust Badges */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap items-center gap-8 sm:gap-12 mb-12 pt-8 border-t border-white/[0.08]"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
                    <ShieldCheck size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-white text-sm sm:text-base font-bold tracking-wide">ISI Certified</div>
                    <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest mt-0.5">Global Standard</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                    <MapPinned size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-white text-sm sm:text-base font-bold tracking-wide">Pan India</div>
                    <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest mt-0.5">Vast Network</div>
                  </div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="flex flex-wrap items-center gap-5 sm:gap-6"
              >
                <Link href="/about-us">
                  <button className="relative group bg-gradient-to-r from-red-600 to-red-800 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full uppercase tracking-[0.15em] font-bold text-xs sm:text-sm flex items-center gap-3 transition-all duration-500 hover:scale-105 hover:shadow-[0_15px_30px_rgba(220,38,38,0.4)] overflow-hidden border border-red-500/50">
                    <span className="relative z-10">Discover Our Legacy</span>
                    <ArrowRight size={18} className="relative z-10 transition-transform duration-500 group-hover:translate-x-1" />
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </button>
                </Link>
                
                <button className="group bg-white/[0.05] border border-white/20 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full uppercase tracking-[0.15em] font-bold text-xs sm:text-sm flex items-center gap-3 backdrop-blur-md transition-all duration-500 hover:scale-105 hover:bg-white/10 hover:border-white/40 hover:shadow-[0_15px_30px_rgba(255,255,255,0.1)]">
                  <Download size={18} className="text-gray-400 group-hover:text-white transition-colors duration-500" />
                  Download Brochure
                </button>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
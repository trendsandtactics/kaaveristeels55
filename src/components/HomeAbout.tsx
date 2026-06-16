"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, animate } from "framer-motion";
import { ArrowRight, Download, MapPinned, Award } from "lucide-react";

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
    <section className="relative w-full min-h-screen flex items-center justify-center py-24 overflow-hidden bg-[#050505]">
      {/* Background Assets */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/about1.png"
          alt="Kaaveri Steel Factory"
          fill
          priority
          className="object-cover object-center opacity-40 mix-blend-luminosity"
        />
        {/* Gradients for luxury depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Glassmorphism Container */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full bg-white/5 backdrop-blur-[20px] border border-white/10 rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.5)] p-8 md:p-14 lg:p-20 overflow-hidden relative"
        >
          {/* Internal Accent Glow */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-600/20 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
            {/* Left: Typography & Intro */}
            <div className="flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-4 mb-8"
              >
                <span className="w-16 h-[2px] bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
                <span className="uppercase tracking-[0.3em] text-red-500 text-sm font-bold">
                  About Kaaveri
                </span>
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-[80px] leading-[1.05] text-white font-black mb-8"
              >
                Forging The <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">Future.</span>
              </motion.h2>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6 text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-xl"
              >
                <p>
                  At KAAVERI, we engineer the resilient core of iconic structures. As a leading manufacturer of premium TMT bars and structural steel, we blend decades of metallurgical mastery with cutting-edge 2026 technology.
                </p>
                <p>
                  Every bar we forge meets stringent global standards, providing unyielding strength, supreme ductility, and sustainable solutions for generations to come.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap items-center gap-6 mt-12"
              >
                <Link href="/about-us">
                  <button className="relative overflow-hidden group bg-red-600 text-white px-8 py-4 rounded-full uppercase tracking-[0.15em] font-bold text-sm flex items-center gap-3 transition-all hover:bg-red-700 hover:shadow-[0_0_30px_rgba(220,38,38,0.4)]">
                    <span className="relative z-10">Discover Our Legacy</span>
                    <ArrowRight size={18} className="relative z-10 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>
                
                <button className="group text-white px-8 py-4 rounded-full uppercase tracking-[0.15em] font-bold text-sm flex items-center gap-3 border border-white/20 hover:bg-white/10 transition-all">
                  <Download size={18} className="text-gray-400 group-hover:text-white transition-colors" />
                  Brochure
                </button>
              </motion.div>
            </div>

            {/* Right: Stats & Features */}
            <div className="flex flex-col justify-center gap-12">
              {/* Animated Stats Grid */}
              <div className="grid grid-cols-2 gap-6 md:gap-8">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                    className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:bg-white/10 transition-colors"
                  >
                    <div className="text-4xl lg:text-5xl font-black text-white mb-2">
                      <AnimatedCounter to={stat.number} suffix={stat.suffix} />
                    </div>
                    <div className="text-gray-400 text-sm font-semibold uppercase tracking-wider">
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
                className="flex items-center gap-8 pt-8 border-t border-white/10"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center text-red-500">
                    <Award size={24} />
                  </div>
                  <div>
                    <div className="text-white font-bold">ISI Certified</div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest">Global Standards</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-500">
                    <MapPinned size={24} />
                  </div>
                  <div>
                    <div className="text-white font-bold">Pan India</div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest">Vast Network</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
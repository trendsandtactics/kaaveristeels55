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

// SVG TMT Bars Component
function TmtBars() {
  return (
    <svg
      viewBox="0 0 480 520"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-auto"
      style={{ filter: "drop-shadow(0 0 40px rgba(180,80,0,0.5))" }}
    >
      <defs>
        <linearGradient id="bar1g" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#666" />
          <stop offset="18%" stopColor="#bbb" />
          <stop offset="35%" stopColor="#e8e8e8" />
          <stop offset="50%" stopColor="#f5f5f5" />
          <stop offset="65%" stopColor="#d0d0d0" />
          <stop offset="82%" stopColor="#999" />
          <stop offset="100%" stopColor="#555" />
        </linearGradient>
        <linearGradient id="bar2g" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#555" />
          <stop offset="20%" stopColor="#aaa" />
          <stop offset="40%" stopColor="#ddd" />
          <stop offset="55%" stopColor="#f0f0f0" />
          <stop offset="70%" stopColor="#c0c0c0" />
          <stop offset="100%" stopColor="#444" />
        </linearGradient>
        <linearGradient id="bar3g" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#777" />
          <stop offset="25%" stopColor="#ccc" />
          <stop offset="45%" stopColor="#eee" />
          <stop offset="60%" stopColor="#fff" />
          <stop offset="75%" stopColor="#c8c8c8" />
          <stop offset="100%" stopColor="#666" />
        </linearGradient>
        <linearGradient id="bar4g" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#888" />
          <stop offset="22%" stopColor="#d0d0d0" />
          <stop offset="42%" stopColor="#f0f0f0" />
          <stop offset="58%" stopColor="#fcfcfc" />
          <stop offset="75%" stopColor="#d8d8d8" />
          <stop offset="100%" stopColor="#777" />
        </linearGradient>
        <linearGradient id="glowBot" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff6a00" stopOpacity="0" />
          <stop offset="60%" stopColor="#ff6a00" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#ff9d00" stopOpacity="1" />
        </linearGradient>
        <filter id="barGlow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Bar 1 — leftmost */}
      <g transform="translate(30,120)">
        <rect x="0" y="0" width="54" height="360" rx="6" fill="url(#bar1g)" />
        {[30,55,80,105,130,155,180,205,230,255,280,305].map((y) => (
          <rect key={y} x="4" y={y} width="46" height="7" rx="3" fill="rgba(255,255,255,0.18)" />
        ))}
        <text x="27" y="-8" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="9" fontWeight="700" fill="#aaa" letterSpacing="1">KAAVERI</text>
        <rect x="0" y="280" width="54" height="80" rx="6" fill="url(#glowBot)" opacity="0.7" />
      </g>

      {/* Bar 2 */}
      <g transform="translate(100,60)">
        <rect x="0" y="0" width="62" height="420" rx="7" fill="url(#bar2g)" />
        {[30,58,86,114,142,170,198,226,254,282,310,338,366].map((y) => (
          <rect key={y} x="5" y={y} width="52" height="8" rx="3" fill="rgba(255,255,255,0.15)" />
        ))}
        <text x="31" y="-8" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="9" fontWeight="700" fill="#bbb" letterSpacing="1">KAAVERI</text>
        <rect x="0" y="340" width="62" height="80" rx="7" fill="url(#glowBot)" opacity="0.9" />
      </g>

      {/* Bar 3 — tallest, brightest */}
      <g transform="translate(180,0)">
        <rect x="0" y="0" width="72" height="480" rx="8" fill="url(#bar3g)" />
        {[28,57,86,115,144,173,202,231,260,289,318,347,376,405].map((y) => (
          <rect key={y} x="6" y={y} width="60" height="9" rx="3.5" fill="rgba(255,255,255,0.2)" />
        ))}
        <text x="36" y="-10" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fontWeight="700" fill="#ddd" letterSpacing="1.5">KAAVERI</text>
        <rect x="0" y="390" width="72" height="90" rx="8" fill="url(#glowBot)" opacity="1" />
        <ellipse cx="36" cy="480" rx="40" ry="18" fill="#ff9d00" opacity="0.85" filter="url(#barGlow)" />
        <ellipse cx="36" cy="480" rx="22" ry="10" fill="#fff" opacity="0.7" filter="url(#barGlow)" />
      </g>

      {/* Bar 4 */}
      <g transform="translate(270,40)">
        <rect x="0" y="0" width="66" height="440" rx="7" fill="url(#bar4g)" />
        {[28,56,84,112,140,168,196,224,252,280,308,336,364].map((y) => (
          <rect key={y} x="5" y={y} width="56" height="8" rx="3" fill="rgba(255,255,255,0.16)" />
        ))}
        <text x="33" y="-8" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="9" fontWeight="700" fill="#bbb" letterSpacing="1">KAAVERI</text>
        <rect x="0" y="360" width="66" height="80" rx="7" fill="url(#glowBot)" opacity="0.8" />
      </g>

      {/* Bar 5 — rightmost */}
      <g transform="translate(352,80)">
        <rect x="0" y="0" width="58" height="400" rx="6" fill="url(#bar1g)" />
        {[28,55,82,109,136,163,190,217,244,271,298,325].map((y) => (
          <rect key={y} x="4" y={y} width="50" height="7" rx="3" fill="rgba(255,255,255,0.14)" />
        ))}
        <text x="29" y="-8" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="9" fontWeight="700" fill="#aaa" letterSpacing="1">KAAVERI</text>
        <rect x="0" y="320" width="58" height="80" rx="6" fill="url(#glowBot)" opacity="0.65" />
      </g>

      {/* Global floor glow */}
      <ellipse cx="240" cy="510" rx="220" ry="28" fill="#ff6a00" opacity="0.35" filter="url(#barGlow)" />
    </svg>
  );
}

export default function HomeAbout() {
  const stats = [
    { number: 30, suffix: "+", label: "Years of\nExcellence", icon: <Award className="text-red-500 w-5 h-5" /> },
    { number: 1, suffix: "Mn+", label: "Tons\nCapacity", icon: <Shield className="text-red-500 w-5 h-5" /> },
    { number: "ISI", suffix: "", label: "Certified\nProducts", icon: <CheckCircle2 className="text-red-500 w-5 h-5" /> },
    { number: "PAN INDIA", suffix: "", label: "Vast Distribution\nNetwork", icon: <Globe className="text-red-500 w-5 h-5" /> },
  ];

  return (
    <section className="relative w-full min-h-screen bg-black text-white flex flex-col justify-between overflow-hidden">

      {/* ── Background Layers ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Your cinematic industrial photo */}
        <Image
          src="/Aboutbg.png"
          alt="Kaaveri Steel Industrial Background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Fire / heat glow overlay on right */}
        <div className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 55% 65% at 88% 60%, rgba(180,74,0,0.55) 0%, transparent 60%),
              radial-gradient(ellipse 35% 45% at 78% 75%, rgba(255,106,0,0.3) 0%, transparent 55%),
              radial-gradient(ellipse 25% 35% at 92% 42%, rgba(255,157,0,0.15) 0%, transparent 50%)
            `
          }}
        />
        {/* Left dark fade so text is readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent" />
        {/* Top & bottom vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
      </div>

      {/* ── Animated Sparks ── */}
      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
        {[
          { left: "68%", top: "62%", size: 3, color: "#ff9d00", dx: "-30px", dy: "-60px", delay: "0s", dur: "1.8s" },
          { left: "72%", top: "58%", size: 2, color: "#ffcc00", dx: "20px",  dy: "-80px", delay: ".3s", dur: "2.1s" },
          { left: "65%", top: "70%", size: 4, color: "#ff6a00", dx: "-50px", dy: "-40px", delay: ".6s", dur: "1.5s" },
          { left: "75%", top: "65%", size: 2, color: "#ffffff", dx: "35px",  dy: "-70px", delay: ".9s", dur: "2.3s" },
          { left: "70%", top: "72%", size: 3, color: "#ff9d00", dx: "-15px", dy: "-90px", delay: "1.2s", dur: "1.9s" },
          { left: "78%", top: "60%", size: 2, color: "#ffcc00", dx: "25px",  dy: "-55px", delay: "1.5s", dur: "2.0s" },
          { left: "63%", top: "68%", size: 3, color: "#ff4500", dx: "-40px", dy: "-50px", delay: ".4s",  dur: "1.7s" },
          { left: "80%", top: "55%", size: 2, color: "#ffffff", dx: "10px",  dy: "-100px",delay: "1.8s", dur: "2.5s" },
          { left: "67%", top: "75%", size: 5, color: "#ff6a00", dx: "-60px", dy: "-30px", delay: ".2s",  dur: "1.6s" },
          { left: "73%", top: "50%", size: 2, color: "#ffd700", dx: "30px",  dy: "-120px",delay: "2.0s", dur: "2.2s" },
        ].map((s, i) => (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              left: s.left,
              top: s.top,
              width: s.size,
              height: s.size,
              background: s.color,
              animationName: "sparkfly",
              animationDuration: s.dur,
              animationDelay: s.delay,
              animationIterationCount: "infinite",
              animationTimingFunction: "ease-out",
              ["--dx" as string]: s.dx,
              ["--dy" as string]: s.dy,
            }}
          />
        ))}
      </div>

      {/* ── TMT Bars (right side) ── */}
      <div className="absolute right-0 top-0 bottom-0 w-[52%] z-[3] flex items-end justify-end pb-14 pointer-events-none">
        <TmtBars />
      </div>

      {/* ── Main Content Grid ── */}
      <div className="relative z-10 flex-1 flex items-center py-16 md:py-24 px-6 sm:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col max-w-[580px]"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-[3px] bg-red-600 flex-shrink-0" />
            <span className="uppercase tracking-[0.2em] text-red-500 text-xs font-bold">
              About Kaaveri
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-[56px] font-black tracking-tight leading-[1.05] mb-8">
            Forging India&apos;s <br />
            Future in Steel <br />
            <span className="text-red-600">Excellence</span>
          </h2>

          {/* Body */}
          <div className="space-y-4 text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
            <p>
              At Kaaveri, we engineer the resilient core of iconic structures. As a leading manufacturer
              of premium TMT bars and structural steel, we blend decades of metallurgical mastery with
              cutting-edge technology.
            </p>
            <p>
              Every bar we forge meets stringent global standards, providing unyielding strength,
              supreme ductility, and sustainable solutions for generations to come.
            </p>
          </div>

          {/* Stats Row */}
          <div className="flex border-l border-white/10 mb-10">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-start px-4 sm:px-5 border-r border-white/10 first:pl-3"
              >
                <div className="mb-2 opacity-80">{stat.icon}</div>
                <div className="text-xl sm:text-2xl font-black tracking-tight leading-none flex items-baseline">
                  {typeof stat.number === "number" ? (
                    <AnimatedCounter to={stat.number} suffix={stat.suffix} />
                  ) : (
                    <span className={stat.number === "PAN INDIA" ? "text-base font-black" : ""}>
                      {stat.number}
                    </span>
                  )}
                </div>
                <div className="text-gray-500 text-[10px] font-bold uppercase tracking-wider leading-tight whitespace-pre-line mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/about-us">
              <button className="bg-red-600 text-white px-6 sm:px-8 py-3.5 uppercase tracking-widest font-bold text-[10px] flex items-center gap-3 transition-colors duration-300 hover:bg-red-700">
                <span>Discover Our Legacy</span>
                <ArrowRight size={14} />
              </button>
            </Link>

            <button className="bg-transparent border border-white/25 hover:border-white/60 text-white px-6 sm:px-8 py-3.5 uppercase tracking-widest font-bold text-[10px] flex items-center gap-3 transition-colors duration-300">
              <Download size={14} className="text-gray-400" />
              Download Brochure
            </button>
          </div>
        </motion.div>
      </div>

      {/* ── Footer Ribbon ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 w-full px-6 sm:px-12 lg:px-20 pb-8"
      >
        <div className="w-full bg-black/50 backdrop-blur-md border border-white/10 p-8 sm:p-10 grid md:grid-cols-[38%_1fr] gap-8 items-center">

          {/* Quote */}
          <div className="relative pl-6 border-l-2 border-red-600">
            <span className="absolute -top-4 left-3 text-6xl text-red-600/20 font-serif select-none pointer-events-none leading-none">
              &ldquo;
            </span>
            <p className="text-lg sm:text-xl font-semibold tracking-wide text-white leading-snug">
              Building stronger structures. <br />
              Building a stronger India.
            </p>
          </div>

          {/* Feature highlights */}
          <div className="grid sm:grid-cols-3 gap-6 md:gap-8 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-white mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full" /> Premium Quality
              </h4>
              <p className="text-gray-400 text-[11px] leading-relaxed">
                Stringent testing at every step for unmatched quality.
              </p>
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-white mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full" /> Built To Last
              </h4>
              <p className="text-gray-400 text-[11px] leading-relaxed">
                Superior strength, corrosion resistance &amp; durability.
              </p>
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-white mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full" /> Sustainable Future
              </h4>
              <p className="text-gray-400 text-[11px] leading-relaxed">
                Responsible manufacturing for generations to come.
              </p>
            </div>
          </div>

        </div>
      </motion.div>

      {/* ── Keyframe for sparks — injected via style tag ── */}
      <style>{`
        @keyframes sparkfly {
          0%   { opacity: 1; transform: translate(0, 0) scale(1); }
          100% { opacity: 0; transform: translate(var(--dx), var(--dy)) scale(0.2); }
        }
      `}</style>
    </section>
  );
}

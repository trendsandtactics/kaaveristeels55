"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Factory,
  ShieldCheck,
  Users,
  Leaf,
  Map,
  Download,
  ArrowRight,
  Award,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: <Factory size={28} />,
      title: "Advanced Manufacturing",
      desc: "State-of-the-art facilities equipped with global technology.",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Quality Assured",
      desc: "Stringent testing protocols for uncompromised quality.",
    },
    {
      icon: <Leaf size={28} />,
      title: "Sustainable Tomorrow",
      desc: "Committed to eco-friendly and responsible steelmaking.",
    },
    {
      icon: <Map size={28} />,
      title: "Pan India Presence",
      desc: "Strong distribution network delivering across the nation.",
    },
  ];

  const stats = [
    { value: "30+", label: "Years Of Excellence", icon: <Award size={28} /> },
    { value: "500+", label: "Happy Customers", icon: <Users size={28} /> },
    { value: "1Mn+", label: "Tons Capacity", icon: <TrendingUp size={28} /> },
    { value: "ISI", label: "Certified Products", icon: <ShieldCheck size={28} /> },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-slate-50 py-20 lg:py-32">
      {/* Ambient Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/5 blur-[120px] rounded-full mix-blend-multiply pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[100px] rounded-full mix-blend-multiply pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        
        {/* 1. Hero-style Intro Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24 lg:mb-32">
          
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] md:aspect-[4/3] lg:aspect-[4/5] w-full rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src="/about-house.jpg"
                alt="Steel Structure"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Floating Glassmorphism Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="absolute -bottom-8 -right-2 md:-right-8 lg:-right-10 bg-white/80 backdrop-blur-xl border border-white p-6 md:p-8 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] max-w-[260px] md:max-w-[280px]"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 shrink-0">
                  <Award size={24} />
                </div>
                <h3 className="text-4xl font-black text-slate-900">30+</h3>
              </div>
              <p className="text-xs md:text-sm font-bold text-slate-600 uppercase tracking-widest leading-relaxed">
                Years of Engineering Excellence
              </p>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2 flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-1 bg-red-600 rounded-full" />
              <span className="text-red-600 uppercase tracking-[0.2em] text-sm font-bold">
                About Kaaveri
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] text-slate-900 mb-6">
              Built On Steel.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
                Trusted By India.
              </span>
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-2xl">
              At KAAVERI, we are passionate about steel and dedicated to excellence. As a leading manufacturer of TMT bars and structural steel products, we supply the construction industry with materials engineered for longevity and unyielding strength.
            </p>

            {/* Modern List Features */}
            <div className="space-y-5 mb-10">
              {[
                "Premium TMT Bars for high strength & durability",
                "100% ISI Certified products tested for global standards",
                "Nationwide network of trusted distribution partners",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 shrink-0">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-slate-700 font-semibold">{item}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <button className="group relative px-8 py-4 bg-red-600 text-white font-bold uppercase tracking-wider rounded-xl overflow-hidden shadow-lg shadow-red-600/30 transition-all hover:-translate-y-1">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative flex items-center gap-3">
                  Explore More <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-800 font-bold uppercase tracking-wider rounded-xl hover:border-red-600 hover:text-red-600 transition-all flex items-center gap-3">
                <Download size={18} /> Brochure
              </button>
            </div>
          </motion.div>
        </div>

        {/* 2. Glassmorphism Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 lg:mb-24">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_20px_40px_rgba(220,38,38,0.08)] hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                {feat.icon}
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-3">{feat.title}</h4>
              <p className="text-slate-500 leading-relaxed text-sm">{feat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* 3. Floating Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative w-full bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl"
        >
          {/* Inner ambient glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.2),transparent_50%)]" />
          
          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`p-8 lg:p-12 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors duration-300 ${
                  i % 2 === 0 && i !== 0 ? "border-t lg:border-t-0 border-white/10" : ""
                }`}
              >
                <div className="text-red-500 mb-4">{stat.icon}</div>
                <h3 className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</h3>
                <p className="text-slate-400 font-semibold uppercase tracking-wider text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

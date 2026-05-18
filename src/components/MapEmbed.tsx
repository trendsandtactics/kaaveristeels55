"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Factory } from "lucide-react";

const locations = [
  {
    title: "Unit 1",
    icon: Factory,
    label: "Manufacturing Facility",
    address: [
      "No.7/1 & 4/3, Komal Road, Maruthur Village,",
      "Therizhandur Post, Kuttalam Taluk,",
      "Mayiladuthurai District - 609 808",
    ],
    map: "https://maps.google.com/maps?q=Komal%20Road%20Maruthur%20Village%20Therizhandur%20Mayiladuthurai%20609808&t=&z=14&ie=UTF8&iwloc=&output=embed",
  },
  {
    title: "Unit 2",
    icon: Factory,
    label: "Manufacturing Facility",
    address: [
      "S.F.No: 22/1A, Musiri – Thuraiyur Main Road,",
      "Jambunathapuram Post, Musiri Taluk,",
      "Trichy – 621 205",
    ],
    map: "https://maps.google.com/maps?q=Musiri%20Thuraiyur%20Main%20Road%20Jambunathapuram%20Trichy%20621205&t=&z=14&ie=UTF8&iwloc=&output=embed",
  },
];

export default function MapEmbed() {
  const [activeTab, setActiveTab] = useState(0);

  const activeLocation = locations[activeTab];
  const Icon = activeLocation.icon;

  return (
    <section className="relative w-full py-12 md:py-16 px-6 md:px-12">

      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/map.jpg"
          alt="background"
          fill
          className="object-cover"
        />
      </div>

      {/* Optional overlay for readability */}
      <div className="absolute inset-0 -z-10 bg-white/80" />

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-8 md:mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-black">
            Our Locations
          </h2>
          <p className="mt-3 text-base md:text-lg font-sans text-black/70">
            Explore our corporate office and production facilities across Tamil Nadu.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-6 md:mb-8">
          {locations.map((loc, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
            className={`px-5 md:px-6 py-2.5 rounded-full text-sm md:text-base font-sans font-semibold transition-all duration-300 border ${
                activeTab === index
                  ? "bg-red-700 text-white border-red-700 shadow-md"
                  : "bg-white text-black/70 border-black/10 hover:border-red-500 hover:text-red-600"
              }`}
            >
              {loc.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="relative overflow-hidden rounded-[24px] border border-black/10 bg-white/95 backdrop-blur shadow-[0_15px_40px_rgba(0,0,0,0.06)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-2"
            >
              
              {/* Left Content */}
              <div className="flex flex-col justify-center p-6 md:p-10 lg:p-12">
                
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-700">
                    <Icon size={20} />
                  </div>

                  <span className="rounded-full bg-black/5 px-3 py-1.5 text-xs font-sans font-semibold uppercase tracking-[0.15em] text-black/60">
                    {activeLocation.label}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-sans font-bold text-black mb-4">
                  {activeLocation.title}
                </h3>

                <div className="space-y-2 font-sans text-black/70 text-base md:text-lg">
                  {activeLocation.address.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>

            <a 
              href={activeLocation.map.replace("&output=embed", "")} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-6 inline-flex items-center gap-2 font-sans text-red-700 font-semibold hover:text-red-800 transition-colors cursor-pointer"
            >
              <MapPin size={16} />
              <span className="text-sm font-sans">Find us on Google Maps</span>
            </a>

                <div className="mt-5 h-[2px] w-16 rounded-full bg-red-500" />
              </div>

              {/* Map */}
              <div className="relative min-h-[280px] md:min-h-[360px]">
                <iframe
                  src={activeLocation.map}
                  className="absolute inset-0 w-full h-full border-0 pointer-events-none"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-black/10" />
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

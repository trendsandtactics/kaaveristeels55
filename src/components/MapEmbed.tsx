"use client";

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
    <section className="relative w-full py-20 md:py-28 px-6 md:px-12 bg-gradient-to-b from-white to-[#f8f8f8] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
        >
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-black">
            Our Locations
          </h2>
          <p className="mt-5 text-base md:text-lg text-black/65">
            Explore our corporate office and production facilities across Tamil Nadu.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 md:mb-12">
          {locations.map((loc, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-5 md:px-7 py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 border ${
                activeTab === index
                  ? "bg-red-700 text-white border-red-700 shadow-lg"
                  : "bg-white text-black/70 border-black/10 hover:border-red-500 hover:text-red-600"
              }`}
            >
              {loc.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="relative overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2"
            >
              
              {/* Left Content */}
              <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14">
                
                <div className="inline-flex items-center gap-3 mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-700">
                    <Icon size={22} />
                  </div>

                  <span className="rounded-full bg-black/5 px-4 py-2 text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-black/60">
                    {activeLocation.label}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
                  {activeLocation.title}
                </h3>

                <div className="space-y-3 text-black/70 text-lg">
                  {activeLocation.address.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-3 text-red-700 font-semibold">
                  <MapPin size={18} />
                  <span>Find us on Google Maps</span>
                </div>

                <div className="mt-8 h-[3px] w-24 rounded-full bg-red-500" />
              </div>

              {/* Map */}
              <div className="relative min-h-[320px] md:min-h-[420px] bg-[#f3f3f3]">
                <iframe
                  src={activeLocation.map}
                  className="absolute inset-0 w-full h-full border-0"
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

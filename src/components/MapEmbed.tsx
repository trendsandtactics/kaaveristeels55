"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Factory } from "lucide-react";

const locations = [
  {
    id: 1,
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
    id: 2,
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
          <p className="text-sm md:text-base uppercase tracking-[0.28em] text-accent-red font-semibold">
            Our Locations
          </p>

          <p className="mt-5 text-base md:text-lg text-black/65 leading-relaxed">
            Explore our corporate office and production facilities across Tamil
            Nadu, built to serve clients with trusted steel solutions.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 md:mb-12">
          {locations.map((loc, index) => (
            <button
              key={loc.id}
              onClick={() => setActiveTab(index)}
              className={`px-5 md:px-7 py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 border ${
                activeTab === index
                  ? "bg-accent-red text-white border-accent-red shadow-lg"
                  : "bg-white text-black/70 border-black/10 hover:border-accent-red/40 hover:text-accent-red"
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
              key={activeLocation.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2"
            >
              
              {/* Left Content */}
              <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14">
                <div className="inline-flex items-center gap-3 mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-red/10 text-accent-red">
                    <Icon size={22} />
                  </div>
                  <span className="rounded-full bg-black/5 px-4 py-2 text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-black/60">
                    {activeLocation.label}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
                  {activeLocation.title}
                </h3>

                <div className="space-y-2 text-black/70 text-lg">
                  {activeLocation.address.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-2 text-accent-red font-semibold">
                  <MapPin size={18} />
                  <span>Find us on Google Maps</span>
                </div>

                <div className="mt-6 h-[3px] w-24 bg-accent-yellow rounded-full" />
              </div>

              {/* Map */}
              <div className="relative min-h-[320px] md:min-h-[420px]">
                <iframe
                  src={activeLocation.map}
                  title={activeLocation.title}
                  width="100%"
                  height="100%"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full border-0"
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

"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function SteelCalculatorHero() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* BACKGROUND */}
      <img
        src="/steel.png"
        alt="steel"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* 50:50 LAYOUT */}
      <div className="relative z-10 w-full h-full grid grid-cols-2">

        {/* LEFT SIDE (EMPTY / IMAGE AREA) */}
        <div></div>

        {/* RIGHT SIDE (CENTERED CARD INSIDE RIGHT HALF) */}
        <div className="flex items-center justify-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md"
          >
            <div className="rounded-3xl bg-[#f3f3f3] shadow-2xl overflow-hidden">

              {/* HEADER */}
              <div className="bg-orange-600 p-6 text-white text-center">
                <h2 className="text-2xl font-bold">Steel Calculator</h2>
                <p className="text-xs">FAST & ACCURATE ESTIMATION</p>
              </div>

              {/* BODY */}
              <div className="p-5 space-y-4">

                <div className="grid grid-cols-2 gap-3">
                  <input
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="p-3 rounded-xl bg-gray-200"
                  />
                  <input
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="p-3 rounded-xl bg-gray-200"
                  />
                </div>

                <div className="grid grid-cols-2 bg-gray-300 rounded-xl p-1">
                  <button className="bg-white rounded-lg py-2">Construction</button>
                  <button className="py-2 text-gray-600">Weight</button>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <select className="p-3 rounded-xl bg-gray-200">
                    <option>Residential</option>
                  </select>
                  <input placeholder="Area (sqft)" className="p-3 rounded-xl bg-gray-200" />
                  <input value="1" className="p-3 rounded-xl bg-gray-200" />
                </div>

                <button className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold">
                  Calculate Steel
                </button>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

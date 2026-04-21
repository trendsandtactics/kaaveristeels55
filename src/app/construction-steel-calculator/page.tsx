"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function SteelCalculatorHero() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [structureType, setStructureType] = useState("residential");
  const [area, setArea] = useState("");
  const [floors, setFloors] = useState("1");

  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <img
        src="/steel.png"
        alt="steel"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* CONTENT */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">

        {/* RIGHT-SHIFTED CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md transform translate-x-20 md:translate-x-40"
        >
          <div className="rounded-3xl bg-[#f4f4f4] shadow-2xl overflow-hidden">

            {/* HEADER */}
            <div className="bg-orange-600 py-6 text-center text-white rounded-t-3xl">
              <h2 className="text-2xl font-bold">Steel Calculator</h2>
              <p className="text-xs tracking-wide opacity-90">
                FAST & ACCURATE ESTIMATION
              </p>
            </div>

            {/* BODY */}
            <div className="p-6 space-y-4">

              {/* INPUTS */}
              <div className="grid grid-cols-2 gap-3">
                <input
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="p-3 rounded-xl bg-gray-200 outline-none"
                />
                <input
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="p-3 rounded-xl bg-gray-200 outline-none"
                />
              </div>

              {/* TABS */}
              <div className="grid grid-cols-2 bg-gray-300 rounded-xl p-1">
                <button className="bg-white rounded-lg py-2 font-medium">
                  Construction
                </button>
                <button className="py-2 text-gray-600">Weight</button>
              </div>

              {/* INPUT ROW */}
              <div className="grid grid-cols-3 gap-3">
                <select
                  value={structureType}
                  onChange={(e) => setStructureType(e.target.value)}
                  className="p-3 rounded-xl bg-gray-200 outline-none"
                >
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                </select>

                <input
                  placeholder="Area (sqft)"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="p-3 rounded-xl bg-gray-200 outline-none"
                />

                <input
                  value={floors}
                  onChange={(e) => setFloors(e.target.value)}
                  className="p-3 rounded-xl bg-gray-200 outline-none"
                />
              </div>

              {/* BUTTON */}
              <button className="w-full bg-orange-500 text-white py-3 rounded-xl text-lg font-semibold hover:bg-orange-600 transition">
                Calculate Steel
              </button>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

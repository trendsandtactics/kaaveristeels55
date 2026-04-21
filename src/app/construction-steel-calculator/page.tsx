"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SteelCalculatorHero() {
  const [activeTab, setActiveTab] = useState<"construction" | "weight">("construction");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [structureType, setStructureType] = useState("residential");
  const [area, setArea] = useState("");
  const [floors, setFloors] = useState("1");
  const [estimatedSteel, setEstimatedSteel] = useState<number | null>(null);

  const validateLead = () => {
    if (!name || !phone) {
      alert("Enter Name & Phone");
      return false;
    }
    return true;
  };

  const calculateConstruction = () => {
    if (!validateLead()) return;

    let multiplier = 4;
    if (structureType === "commercial") multiplier = 5;
    if (structureType === "infrastructure") multiplier = 6;

    const totalArea = Number(area) * Number(floors);
    if (totalArea > 0) setEstimatedSteel(totalArea * multiplier);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* BACKGROUND */}
      <img
        src="/steel.png"
        alt="steel"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* RIGHT SIDE WITH INNER SHIFT */}
      <div className="relative z-10 w-full h-full flex items-center justify-end pr-6 md:pr-20">

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-md mr-10 md:mr-32"
        >
          <div className="rounded-3xl bg-[#f3f3f3] shadow-2xl overflow-hidden">

            {/* HEADER */}
            <div className="bg-orange-600 p-6 text-white text-center">
              <h2 className="text-2xl font-bold">Steel Calculator</h2>
              <p className="text-xs tracking-wide opacity-90">
                FAST & ACCURATE ESTIMATION
              </p>
            </div>

            {/* BODY */}
            <div className="p-5 space-y-4">

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
                <button
                  onClick={() => setActiveTab("construction")}
                  className={`py-2 rounded-lg font-medium ${
                    activeTab === "construction" ? "bg-white" : ""
                  }`}
                >
                  Construction
                </button>

                <button
                  onClick={() => setActiveTab("weight")}
                  className={`py-2 rounded-lg font-medium ${
                    activeTab === "weight" ? "bg-white" : ""
                  }`}
                >
                  Weight
                </button>
              </div>

              <AnimatePresence mode="wait">

                {/* CONSTRUCTION */}
                {activeTab === "construction" && (
                  <motion.div key="c" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

                    <div className="grid grid-cols-3 gap-3">
                      <select
                        value={structureType}
                        onChange={(e) => setStructureType(e.target.value)}
                        className="p-3 rounded-xl bg-gray-200 outline-none"
                      >
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="infrastructure">Infrastructure</option>
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

                    <button
                      onClick={calculateConstruction}
                      className="mt-4 w-full bg-orange-500 text-white py-3 rounded-xl text-lg font-semibold hover:bg-orange-600 transition"
                    >
                      Calculate Steel
                    </button>

                    {estimatedSteel && (
                      <div className="mt-4 text-center bg-green-50 p-4 rounded-xl">
                        <p className="text-2xl font-bold">{estimatedSteel} kg</p>
                      </div>
                    )}

                  </motion.div>
                )}

                {/* WEIGHT */}
                {activeTab === "weight" && (
                  <motion.div key="w" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <p className="text-center text-gray-500 text-sm">
                      Weight calculator can be added here
                    </p>
                  </motion.div>
                )}

              </AnimatePresence>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

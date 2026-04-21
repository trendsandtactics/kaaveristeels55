"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SteelCalculator() {
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

      {/* CENTERED CONTENT */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-6">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md"
        >
          <div className="rounded-3xl bg-white shadow-2xl overflow-hidden">

            {/* HEADER */}
            <div className="bg-orange-600 p-6 text-white text-center">
              <h2 className="text-2xl font-bold">Steel Calculator</h2>
              <p className="text-xs tracking-wide">FAST & ACCURATE ESTIMATION</p>
            </div>

            {/* BODY */}
            <div className="p-5 space-y-4">

              <div className="grid grid-cols-2 gap-3">
                <input
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="p-3 rounded-xl border bg-gray-100"
                />
                <input
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="p-3 rounded-xl border bg-gray-100"
                />
              </div>

              <div className="grid grid-cols-2 bg-gray-200 rounded-xl p-1">
                <button
                  onClick={() => setActiveTab("construction")}
                  className={`py-2 rounded-lg ${
                    activeTab === "construction" ? "bg-white" : ""
                  }`}
                >
                  Construction
                </button>
                <button
                  onClick={() => setActiveTab("weight")}
                  className={`py-2 rounded-lg ${
                    activeTab === "weight" ? "bg-white" : ""
                  }`}
                >
                  Weight
                </button>
              </div>

              <AnimatePresence mode="wait">
                {activeTab === "construction" && (
                  <motion.div key="c" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <div className="grid grid-cols-3 gap-3">
                      <select
                        value={structureType}
                        onChange={(e) => setStructureType(e.target.value)}
                        className="p-3 border rounded-xl bg-gray-100"
                      >
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="infrastructure">Infrastructure</option>
                      </select>

                      <input
                        placeholder="Area (sqft)"
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                        className="p-3 border rounded-xl bg-gray-100"
                      />

                      <input
                        placeholder="1"
                        value={floors}
                        onChange={(e) => setFloors(e.target.value)}
                        className="p-3 border rounded-xl bg-gray-100"
                      />
                    </div>

                    <button
                      onClick={calculateConstruction}
                      className="mt-4 w-full bg-orange-500 text-white py-3 rounded-xl text-lg font-semibold"
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
              </AnimatePresence>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

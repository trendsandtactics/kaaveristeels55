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

  const [diameter, setDiameter] = useState("8");
  const [length, setLength] = useState("12");
  const [quantity, setQuantity] = useState("");
  const [estimatedWeight, setEstimatedWeight] = useState<number | null>(null);
  const [bundleCount, setBundleCount] = useState<number | null>(null);

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

  const calculateWeight = () => {
    if (!validateLead()) return;

    const d = Number(diameter);
    const l = Number(length);
    const q = Number(quantity);

    if (d > 0 && l > 0 && q > 0) {
      const weightPerBar = ((d * d) / 162) * l;
      const totalWeight = weightPerBar * q;

      setEstimatedWeight(totalWeight);

      let barsPerBundle = 1;
      switch (d) {
        case 8: barsPerBundle = 10; break;
        case 10: barsPerBundle = 7; break;
        case 12: barsPerBundle = 5; break;
        case 16: barsPerBundle = 3; break;
        case 20: barsPerBundle = 2; break;
        case 25: barsPerBundle = 1; break;
        case 32: barsPerBundle = 1; break;
      }
      setBundleCount(Math.ceil(q / barsPerBundle));
    }
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden">

      {/* BACKGROUND */}
      <img
        src="/steel.png"
        alt="steel"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* FLOATING RIGHT CORNER CALCULATOR */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed bottom-6 right-6 w-full max-w-sm z-50"
      >
        <div className="rounded-3xl bg-white/95 backdrop-blur-xl shadow-2xl overflow-hidden">

          {/* HEADER */}
          <div className="bg-gradient-to-r from-orange-600 to-orange-500 p-6 text-white text-center">
            <h2 className="text-xl font-bold">Steel Calculator</h2>
            <p className="text-xs opacity-90">Fast & Accurate Estimation</p>
          </div>

          {/* BODY */}
          <div className="p-4 space-y-4">

            {/* INPUTS */}
            <div className="grid grid-cols-2 gap-2">
              <input
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-2 rounded-lg border text-sm"
              />
              <input
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="p-2 rounded-lg border text-sm"
              />
            </div>

            {/* TABS */}
            <div className="grid grid-cols-2 bg-gray-100 rounded-lg p-1 text-sm">
              <button
                onClick={() => setActiveTab("construction")}
                className={`py-1 rounded ${
                  activeTab === "construction" ? "bg-white shadow" : ""
                }`}
              >
                Construction
              </button>

              <button
                onClick={() => setActiveTab("weight")}
                className={`py-1 rounded ${
                  activeTab === "weight" ? "bg-white shadow" : ""
                }`}
              >
                Weight
              </button>
            </div>

            <AnimatePresence mode="wait">

              {/* CONSTRUCTION */}
              {activeTab === "construction" && (
                <motion.div key="c" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

                  <div className="grid grid-cols-3 gap-2">
                    <select
                      value={structureType}
                      onChange={(e) => setStructureType(e.target.value)}
                      className="p-2 border rounded-lg text-sm"
                    >
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="infrastructure">Infrastructure</option>
                    </select>

                    <input
                      placeholder="Area"
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                      className="p-2 border rounded-lg text-sm"
                    />

                    <input
                      placeholder="Floors"
                      value={floors}
                      onChange={(e) => setFloors(e.target.value)}
                      className="p-2 border rounded-lg text-sm"
                    />
                  </div>

                  <button
                    onClick={calculateConstruction}
                    className="mt-3 w-full bg-orange-500 text-white py-2 rounded-lg text-sm"
                  >
                    Calculate Steel
                  </button>

                  {estimatedSteel && (
                    <div className="mt-3 text-center bg-green-50 p-3 rounded-lg">
                      <p className="text-lg font-bold">{estimatedSteel} kg</p>
                    </div>
                  )}

                </motion.div>
              )}

              {/* WEIGHT */}
              {activeTab === "weight" && (
                <motion.div key="w" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

                  <div className="grid grid-cols-2 gap-2 text-sm">

                    <select
                      value={diameter}
                      onChange={(e) => setDiameter(e.target.value)}
                      className="p-2 border rounded-lg"
                    >
                      {[8, 10, 12, 16, 20, 25, 32].map((d) => (
                        <option key={d} value={d}>{d} mm</option>
                      ))}
                    </select>

                    <input
                      type="number"
                      value={length}
                      onChange={(e) => setLength(e.target.value)}
                      className="p-2 border rounded-lg"
                      placeholder="Length"
                    />

                    <input
                      type="number"
                      placeholder="Qty"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      className="p-2 border rounded-lg col-span-2"
                    />

                    <button
                      onClick={calculateWeight}
                      className="col-span-2 bg-orange-500 text-white p-2 rounded-lg"
                    >
                      Calculate
                    </button>
                  </div>

                  {estimatedWeight && (
                    <div className="mt-3 space-y-2 text-sm text-center">

                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="font-bold">{estimatedWeight.toFixed(2)} kg</p>
                      </div>

                      <div className="bg-purple-50 p-3 rounded-lg">
                        <p className="font-bold">{bundleCount} Bundles</p>
                      </div>

                    </div>
                  )}

                </motion.div>
              )}

            </AnimatePresence>

          </div>
        </div>
      </motion.div>

    </section>
  );
}

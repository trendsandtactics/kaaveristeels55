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

      const barsPerBundle = d <= 10 ? 10 : d <= 16 ? 5 : 3;
      setBundleCount(Math.ceil(q / barsPerBundle));
    }
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden">

      {/* FULL BACKGROUND IMAGE */}
      <img
        src="/steel.png"
        alt="steel"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* CONTENT LAYER */}
      <div className="relative z-10 min-h-screen flex items-center">

        <div className="w-full max-w-7xl mx-auto px-4 md:px-10 grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
      

          {/* RIGHT CALCULATOR */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full max-w-xl ml-auto"
          >
            <div className="rounded-3xl bg-white/95 backdrop-blur-xl shadow-2xl overflow-hidden">

              {/* HEADER */}
              <div className="bg-gradient-to-r from-orange-600 to-orange-500 p-6 text-white text-center">
                <h2 className="text-2xl font-bold">Steel Calculator</h2>
                <p className="text-sm opacity-90">Fast & Accurate Estimation</p>
              </div>

              {/* BODY */}
              <div className="p-5 space-y-4">

                {/* INPUTS */}
                <div className="grid grid-cols-2 gap-3">
                  <input
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="p-3 rounded-xl border"
                  />
                  <input
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="p-3 rounded-xl border"
                  />
                </div>

                {/* TABS */}
                <div className="grid grid-cols-2 bg-gray-100 rounded-xl p-1">
                  <button
                    onClick={() => setActiveTab("construction")}
                    className={`py-2 rounded-lg ${
                      activeTab === "construction" ? "bg-white shadow" : ""
                    }`}
                  >
                    Construction
                  </button>

                  <button
                    onClick={() => setActiveTab("weight")}
                    className={`py-2 rounded-lg ${
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

                      <div className="grid grid-cols-3 gap-3">
                        <select
                          value={structureType}
                          onChange={(e) => setStructureType(e.target.value)}
                          className="p-3 border rounded-xl"
                        >
                          <option value="residential">Residential</option>
                          <option value="commercial">Commercial</option>
                          <option value="infrastructure">Infrastructure</option>
                        </select>

                        <input
                          placeholder="Area"
                          value={area}
                          onChange={(e) => setArea(e.target.value)}
                          className="p-3 border rounded-xl"
                        />

                        <input
                          placeholder="Floors"
                          value={floors}
                          onChange={(e) => setFloors(e.target.value)}
                          className="p-3 border rounded-xl"
                        />
                      </div>

                      <button
                        onClick={calculateConstruction}
                        className="mt-4 w-full bg-orange-500 text-white py-3 rounded-xl hover:brightness-110"
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

                      <div className="grid grid-cols-4 gap-3">
                        <select
                          value={diameter}
                          onChange={(e) => setDiameter(e.target.value)}
                          className="p-3 border rounded-xl"
                        >
                          {[8, 10, 12, 16, 20, 25].map((d) => (
                            <option key={d}>{d}</option>
                          ))}
                        </select>

                        <input
                          value={length}
                          onChange={(e) => setLength(e.target.value)}
                          className="p-3 border rounded-xl"
                        />

                        <input
                          placeholder="Qty"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                          className="p-3 border rounded-xl"
                        />

                        <button
                          onClick={calculateWeight}
                          className="bg-orange-500 text-white rounded-xl"
                        >
                          Go
                        </button>
                      </div>

                      {estimatedWeight && (
                        <div className="grid grid-cols-2 gap-3 mt-4 text-center">
                          <div className="bg-blue-50 p-4 rounded-xl">
                            {estimatedWeight.toFixed(2)} kg
                          </div>
                          <div className="bg-purple-50 p-4 rounded-xl">
                            {bundleCount}
                          </div>
                        </div>
                      )}

                    </motion.div>
                  )}

                </AnimatePresence>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

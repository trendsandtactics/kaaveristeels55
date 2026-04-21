"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SteelCalculator() {
  const [activeTab, setActiveTab] = useState("construction");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [structureType, setStructureType] = useState("residential");
  const [area, setArea] = useState("");
  const [floors, setFloors] = useState("1");
  const [estimatedSteel, setEstimatedSteel] = useState(null);

  const [diameter, setDiameter] = useState("8");
  const [length, setLength] = useState("12");
  const [quantity, setQuantity] = useState("");
  const [estimatedWeight, setEstimatedWeight] = useState(null);
  const [bundleCount, setBundleCount] = useState(null);

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
        className="absolute inset-0 w-full h-full object-cover scale-110"
      />

      {/* DARK OVERLAY (reduces empty look) */}
      <div className="absolute inset-0 bg-black/30" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 min-h-screen grid grid-cols-1 md:grid-cols-2 items-center px-4 md:px-12 gap-6">

        {/* LEFT SIDE CONTENT (fills empty space) */}
        <div className="hidden md:flex flex-col text-white max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Strong Foundation.
            <br />
            Stronger Tomorrow.
          </h1>
          <p className="mt-4 text-lg opacity-90">
            Trusted by builders. Calculate steel requirements instantly with high accuracy.
          </p>
        </div>

        {/* RIGHT SIDE CALCULATOR */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-lg ml-auto"
        >
          <div className="rounded-3xl bg-white/95 backdrop-blur-xl shadow-2xl overflow-hidden">

            {/* HEADER */}
            <div className="bg-orange-600 p-6 text-white text-center">
              <h2 className="text-2xl font-bold">Steel Calculator</h2>
              <p className="text-sm opacity-90">Fast & Accurate Estimation</p>
            </div>

            {/* BODY */}
            <div className="p-5 space-y-4">

              {/* NAME + PHONE */}
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
                      className="mt-4 w-full bg-orange-500 text-white py-3 rounded-xl"
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

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      <select
                        value={diameter}
                        onChange={(e) => setDiameter(e.target.value)}
                        className="p-3 border rounded-xl"
                      >
                        {[8, 10, 12, 16, 20, 25, 32].map((d) => (
                          <option key={d} value={d}>{d} mm</option>
                        ))}
                      </select>

                      <input
                        type="number"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                        className="p-3 border rounded-xl"
                      />

                      <input
                        type="number"
                        placeholder="Qty"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className="p-3 border rounded-xl"
                      />

                      <button
                        onClick={calculateWeight}
                        className="bg-orange-500 text-white rounded-xl"
                      >
                        Calculate
                      </button>
                    </div>

                    {estimatedWeight && (
                      <div className="grid grid-cols-2 gap-3 mt-4 text-center">
                        <div className="bg-blue-50 p-4 rounded-xl">
                          <p className="text-sm text-gray-500">Total Weight</p>
                          <p className="font-bold text-xl text-blue-700">
                            {estimatedWeight.toFixed(2)} kg
                          </p>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-xl">
                          <p className="text-sm text-gray-500">Bundles</p>
                          <p className="font-bold text-xl text-purple-700">
                            {bundleCount}
                          </p>
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
    </section>
  );
}

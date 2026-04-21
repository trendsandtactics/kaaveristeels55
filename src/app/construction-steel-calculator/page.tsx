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
      alert("Please enter both Name and Phone number to proceed.");
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
        default: barsPerBundle = 1;
      }
      setBundleCount(Math.ceil(q / barsPerBundle));
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-gray-900 pt-20 md:pt-24">
      
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img
          src="/steel.png"
          alt="Steel background"
          className="w-full h-full object-cover object-[30%_center] md:object-left"
        />
        <div className="absolute inset-0 bg-black/10 md:bg-transparent" />
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 
                      min-h-[700px] md:min-h-[850px] 
                      flex justify-center md:justify-end items-center">
        
        {/* CALCULATOR CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md"
        >
          <div className="rounded-3xl bg-white/95 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.3)] overflow-hidden border border-white/20">
            
            {/* HEADER */}
            <div className="bg-orange-600 p-6 text-white text-center">
              <h2 className="text-xl font-bold">Steel Calculator</h2>
              <p className="text-[10px] uppercase tracking-widest">Fast & Accurate Estimation</p>
            </div>

            {/* FORM */}
            <div className="p-6 md:p-8 space-y-4">

              {/* NAME + PHONE */}
              <div className="grid grid-cols-2 gap-3">
                <input
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="p-3 text-sm rounded-xl border border-gray-200 focus:border-orange-500 outline-none"
                />
                <input
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="p-3 text-sm rounded-xl border border-gray-200 focus:border-orange-500 outline-none"
                />
              </div>

              {/* TABS */}
              <div className="grid grid-cols-2 bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setActiveTab("construction")}
                  className={`py-2 text-xs font-bold rounded-lg ${
                    activeTab === "construction"
                      ? "bg-white text-orange-600 shadow"
                      : "text-gray-500"
                  }`}
                >
                  Construction
                </button>
                <button
                  onClick={() => setActiveTab("weight")}
                  className={`py-2 text-xs font-bold rounded-lg ${
                    activeTab === "weight"
                      ? "bg-white text-orange-600 shadow"
                      : "text-gray-500"
                  }`}
                >
                  Weight
                </button>
              </div>

              <AnimatePresence mode="wait">
                {activeTab === "construction" ? (
                  <motion.div key="c" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

                    <div className="grid grid-cols-3 gap-2">
                      <select
                        value={structureType}
                        onChange={(e) => setStructureType(e.target.value)}
                        className="p-3 border rounded-xl text-xs"
                      >
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="infrastructure">Infrastructure</option>
                      </select>

                      <input
                        placeholder="Area"
                        type="number"
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                        className="p-3 border rounded-xl text-xs"
                      />

                      <input
                        placeholder="Floors"
                        type="number"
                        value={floors}
                        onChange={(e) => setFloors(e.target.value)}
                        className="p-3 border rounded-xl text-xs"
                      />
                    </div>

                    <button
                      onClick={calculateConstruction}
                      className="w-full bg-orange-500 text-white py-3 rounded-xl font-bold"
                    >
                      Calculate Steel
                    </button>

                    {estimatedSteel && (
                      <div className="text-center bg-orange-50 p-4 rounded-xl">
                        <p className="text-sm text-orange-600">Estimated Steel</p>
                        <p className="text-2xl font-bold text-orange-700">
                          {estimatedSteel.toLocaleString()} kg
                        </p>
                      </div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div key="w" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

                    <div className="grid grid-cols-2 gap-3">
                      <select
                        value={diameter}
                        onChange={(e) => setDiameter(e.target.value)}
                        className="p-3 border rounded-xl text-xs"
                      >
                        {[8, 10, 12, 16, 20, 25, 32].map((d) => (
                          <option key={d}>{d} mm</option>
                        ))}
                      </select>

                      <input
                        type="number"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                        className="p-3 border rounded-xl text-xs"
                      />

                      <input
                        placeholder="Quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className="p-3 border rounded-xl text-xs col-span-2"
                      />
                    </div>

                    <button
                      onClick={calculateWeight}
                      className="w-full bg-orange-500 text-white py-3 rounded-xl font-bold"
                    >
                      Calculate Weight
                    </button>

                    {estimatedWeight && (
                      <div className="grid grid-cols-2 gap-3 text-center">
                        <div className="bg-blue-50 p-3 rounded-xl">
                          <p className="text-xs">Weight</p>
                          <p className="font-bold">{estimatedWeight.toFixed(2)} kg</p>
                        </div>
                        <div className="bg-purple-50 p-3 rounded-xl">
                          <p className="text-xs">Bundles</p>
                          <p className="font-bold">{bundleCount}</p>
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

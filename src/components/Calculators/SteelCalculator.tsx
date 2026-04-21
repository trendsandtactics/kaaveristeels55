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

      {/* BACKGROUND IMAGE */}
      <img
        src="/steel.png"
        alt="steel"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen flex items-center justify-end px-4 md:px-10">

        {/* RIGHT SIDE CALCULATOR */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-xl"
        >
          <div className="rounded-3xl bg-white/95 backdrop-blur-xl shadow-2xl overflow-hidden">

            {/* HEADER */}
            <div className="bg-orange-600 p-6 text-white text-center">
              <h2 className="text-2xl font-bold">Steel Calculator</h2>
              <p className="text-sm opacity-90">Fast & Accurate Estimation</p>
            </div>

            {/* BODY */}
            <div className="p-5 space-y-4">

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
<<<<<<< HEAD
=======
                      )}

                    </motion.div>
                  )}

                  {/* WEIGHT */}
                  {activeTab === "weight" && (
                    <motion.div key="w" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="flex flex-col">
                          <label className="text-xs text-gray-500 ml-1 mb-1">Diameter</label>
                          <select
                            value={diameter}
                            onChange={(e) => setDiameter(e.target.value)}
                            className="p-3 border rounded-xl bg-white"
                          >
                            {[8, 10, 12, 16, 20, 25, 32].map((d) => (
                              <option key={d} value={d}>{d} mm</option>
                            ))}
                          </select>
                        </div>

                        <div className="flex flex-col">
                          <label className="text-xs text-gray-500 ml-1 mb-1">Length (m)</label>
                          <input
                            type="number"
                            value={length}
                            onChange={(e) => setLength(e.target.value)}
                            className="p-3 border rounded-xl bg-white"
                          />
                        </div>

                        <div className="flex flex-col">
                          <label className="text-xs text-gray-500 ml-1 mb-1">Qty (Pieces)</label>
                          <input
                            type="number"
                            placeholder="E.g. 100"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            className="p-3 border rounded-xl bg-white"
                          />
                        </div>

                        <div className="flex flex-col justify-end">
                          <button
                            onClick={calculateWeight}
                            className="w-full bg-orange-500 text-white p-3 rounded-xl hover:bg-orange-600 transition-colors"
                          >
                            Calculate
                          </button>
                        </div>
>>>>>>> dec6bdf (ujk)
                      </div>
                    )}
                  </motion.div>
                )}

<<<<<<< HEAD
              </AnimatePresence>
=======
                      {estimatedWeight && (
                        <div className="grid grid-cols-2 gap-3 mt-4 text-center text-sm md:text-base">
                          <div className="bg-blue-50 p-4 rounded-xl flex flex-col justify-center">
                            <span className="text-gray-500 text-xs uppercase tracking-wider mb-1">Total Weight</span>
                            <span className="font-bold text-blue-700 text-xl">{estimatedWeight.toFixed(2)} kg</span>
                          </div>
                          <div className="bg-purple-50 p-4 rounded-xl flex flex-col justify-center">
                            <span className="text-gray-500 text-xs uppercase tracking-wider mb-1">Est. Bundles</span>
                            <span className="font-bold text-purple-700 text-xl">{bundleCount}</span>
                          </div>
                          <div className="col-span-2 bg-gray-50 p-3 rounded-xl text-gray-600 text-xs text-left">
                            <p><strong>Note:</strong> Standard bundle size for {diameter}mm TMT is {
                              diameter === "8" ? "10" :
                              diameter === "10" ? "7" :
                              diameter === "12" ? "5" :
                              diameter === "16" ? "3" :
                              diameter === "20" ? "2" : "1"
                            } pieces.</p>
                            <p className="mt-1">Approximate weight per piece ({length}m): <strong>{(((Number(diameter) * Number(diameter)) / 162) * Number(length)).toFixed(2)} kg</strong>.</p>
                          </div>
                        </div>
                      )}

                    </motion.div>
                  )}

                </AnimatePresence>

              </div>
>>>>>>> dec6bdf (ujk)
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

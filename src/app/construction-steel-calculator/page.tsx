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
    <section className="relative w-full overflow-hidden bg-gray-900">
      
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img
          src="/steel.png"
          alt="Steel background"
          className="w-full h-full object-cover object-center md:object-left"
        />
        {/* Subtle overlay to help white text/inputs pop if needed */}
        <div className="absolute inset-0 bg-black/5 md:bg-transparent" />
      </div>

      {/* CONTENT WRAPPER - Increased padding to increase overall section height */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20 md:py-40 flex justify-center md:justify-end items-center">
        
        {/* CALCULATOR CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md"
        >
          <div className="rounded-3xl bg-white/95 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.3)] overflow-hidden border border-white/20">
            
            {/* HEADER */}
            <div className="bg-orange-600 p-6 text-white text-center">
              <h2 className="text-xl font-bold tracking-tight">Steel Calculator</h2>
              <p className="text-[10px] font-medium opacity-90 uppercase tracking-widest">Fast & Accurate Estimation</p>
            </div>

            {/* FORM BODY */}
            <div className="p-6 md:p-8 space-y-4">
              
              <div className="grid grid-cols-2 gap-3">
                <input
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="p-3 text-sm rounded-xl border border-gray-200 focus:border-orange-500 outline-none transition-all placeholder:text-gray-400"
                />
                <input
                  placeholder="Phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="p-3 text-sm rounded-xl border border-gray-200 focus:border-orange-500 outline-none transition-all placeholder:text-gray-400"
                />
              </div>

              <div className="grid grid-cols-2 bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setActiveTab("construction")}
                  className={`py-2.5 rounded-lg text-xs font-bold transition-all ${
                    activeTab === "construction" ? "bg-white shadow-sm text-orange-600" : "text-gray-500"
                  }`}
                >
                  Construction
                </button>
                <button
                  onClick={() => setActiveTab("weight")}
                  className={`py-2.5 rounded-lg text-xs font-bold transition-all ${
                    activeTab === "weight" ? "bg-white shadow-sm text-orange-600" : "text-gray-500"
                  }`}
                >
                  Weight
                </button>
              </div>

              <AnimatePresence mode="wait">
                {activeTab === "construction" ? (
                  <motion.div 
                    key="c" 
                    initial={{ opacity: 0, y: 5 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: -5 }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <select
                        value={structureType}
                        onChange={(e) => setStructureType(e.target.value)}
                        className="p-3 border border-gray-200 rounded-xl bg-white text-xs text-gray-600 cursor-pointer"
                      >
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="infrastructure">Infrastructure</option>
                      </select>
                      <input
                        placeholder="Area (sqft)"
                        type="number"
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                        className="p-3 border border-gray-200 rounded-xl text-xs outline-none focus:border-orange-500"
                      />
                      <input
                        placeholder="Floors"
                        type="number"
                        value={floors}
                        onChange={(e) => setFloors(e.target.value)}
                        className="p-3 border border-gray-200 rounded-xl text-xs outline-none focus:border-orange-500"
                      />
                    </div>
                    <button
                      onClick={calculateConstruction}
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl shadow-lg transition-all active:scale-[0.97]"
                    >
                      Calculate Steel
                    </button>
                    {estimatedSteel && (
                      <div className="bg-orange-50 border border-orange-100 p-4 rounded-2xl text-center">
                         <span className="text-[10px] text-orange-600 font-bold block uppercase mb-1">Total Estimated Steel</span>
                        <p className="text-2xl font-black text-orange-700">{estimatedSteel.toLocaleString()} kg</p>
                      </div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div 
                    key="w" 
                    initial={{ opacity: 0, y: 5 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: -5 }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-2 gap-3">
                       <div className="flex flex-col gap-1">
                        <label className="text-[9px] font-bold text-gray-400 uppercase ml-1">Diameter</label>
                        <select
                          value={diameter}
                          onChange={(e) => setDiameter(e.target.value)}
                          className="p-3 border border-gray-200 rounded-xl bg-white text-xs text-gray-600"
                        >
                          {[8, 10, 12, 16, 20, 25, 32].map((d) => (
                            <option key={d} value={d}>{d} mm</option>
                          ))}
                        </select>
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-[9px] font-bold text-gray-400 uppercase ml-1">Length (m)</label>
                        <input
                          type="number"
                          value={length}
                          onChange={(e) => setLength(e.target.value)}
                          className="p-3 border border-gray-200 rounded-xl text-xs outline-none focus:border-orange-500"
                        />
                      </div>
                      <div className="col-span-2">
                         <label className="text-[9px] font-bold text-gray-400 uppercase ml-1">Quantity (Pieces)</label>
                         <input
                          type="number"
                          placeholder="e.g. 100"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                          className="p-3 border border-gray-200 rounded-xl text-xs w-full outline-none focus:border-orange-500"
                        />
                      </div>
                    </div>
                    <button
                      onClick={calculateWeight}
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl transition-all shadow-md active:scale-[0.97]"
                    >
                      Calculate Weight
                    </button>
                    {estimatedWeight && (
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-blue-50 border border-blue-100 p-4 rounded-2xl text-center">
                          <span className="text-[9px] text-blue-600 font-bold block uppercase mb-1">Weight</span>
                          <span className="font-black text-blue-800 text-lg">{estimatedWeight.toFixed(2)} kg</span>
                        </div>
                        <div className="bg-purple-50 border border-purple-100 p-4 rounded-2xl text-center">
                          <span className="text-[9px] text-purple-600 font-bold block uppercase mb-1">Bundles</span>
                          <span className="font-black text-purple-800 text-lg">{bundleCount}</span>
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

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

  const saveEnquiry = async (message: string) => {
    try {
      await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          enquiry_type: "calculator",
          message,
        }),
      });
    } catch (err) {
      console.error("Failed to save enquiry", err);
    }
  };

  const calculateConstruction = () => {
    if (!validateLead()) return;

    let multiplier = 4;
    if (structureType === "commercial") multiplier = 5;
    if (structureType === "infrastructure") multiplier = 6;

    const totalArea = Number(area) * Number(floors);
    if (totalArea > 0) {
      const steel = totalArea * multiplier;
      setEstimatedSteel(steel);
      saveEnquiry(`Construction Calculator Details:\n- Structure Type: ${structureType}\n- Area: ${area} sqft\n- Floors: ${floors}\n- Total Area: ${totalArea} sqft\n- Estimated Steel: ${steel} kg`);
    }
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
      const bundles = Math.ceil(q / barsPerBundle);
      setBundleCount(bundles);
      saveEnquiry(`Weight Calculator Details:\n- Diameter: ${d} mm\n- Length: ${l} m\n- Quantity: ${q} pieces\n- Estimated Weight: ${totalWeight.toFixed(2)} kg\n- Estimated Bundles: ${bundles}`);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-gray-900 pt-20 md:pt-24">

      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img
          src="/steel.png"
          alt="Steel background"
          className="w-full h-full object-cover object-[30%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 
                      min-h-[650px] md:min-h-[850px] 
                      flex items-center justify-center md:justify-end">

        {/* CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="rounded-3xl bg-white/90 backdrop-blur-xl 
                          shadow-[0_25px_80px_rgba(0,0,0,0.35)] 
                          border border-white/20 overflow-hidden">

            {/* HEADER */}
            <div className="bg-gradient-to-r from-orange-600 to-orange-500 p-6 text-white text-center">
              <h2 className="text-2xl font-extrabold">Steel Calculator</h2>
              <p className="text-xs tracking-widest opacity-90">FAST & ACCURATE ESTIMATION</p>
            </div>

            {/* BODY */}
            <div className="p-6 md:p-8 space-y-5">

              {/* NAME + PHONE */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="p-3 rounded-xl border border-gray-200 focus:border-orange-500 outline-none text-sm shadow-sm"
                />
                <input
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="p-3 rounded-xl border border-gray-200 focus:border-orange-500 outline-none text-sm shadow-sm"
                />
              </div>

              {/* TABS */}
              <div className="flex bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setActiveTab("construction")}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition ${
                    activeTab === "construction"
                      ? "bg-white text-orange-600 shadow"
                      : "text-gray-500"
                  }`}
                >
                  Construction
                </button>
                <button
                  onClick={() => setActiveTab("weight")}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition ${
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

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <select
                        value={structureType}
                        onChange={(e) => setStructureType(e.target.value)}
                        className="p-3 rounded-xl border text-xs shadow-sm"
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
                        className="p-3 rounded-xl border text-xs shadow-sm"
                      />

                      <input
                        placeholder="Floors"
                        type="number"
                        value={floors}
                        onChange={(e) => setFloors(e.target.value)}
                        className="p-3 rounded-xl border text-xs shadow-sm"
                      />
                    </div>

                    <button
                      onClick={calculateConstruction}
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 
                                 hover:from-orange-600 hover:to-orange-700 
                                 text-white font-bold py-3.5 rounded-xl 
                                 shadow-lg transition-all active:scale-95"
                    >
                      Calculate Steel
                    </button>

                    {estimatedSteel && (
                      <div className="bg-orange-50 border border-orange-100 p-4 rounded-xl text-center">
                        <p className="text-xs text-orange-600">Estimated Steel</p>
                        <p className="text-2xl font-bold text-orange-700">
                          {estimatedSteel.toLocaleString()} kg
                        </p>
                      </div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div key="w" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <select
                        value={diameter}
                        onChange={(e) => setDiameter(e.target.value)}
                        className="p-3 rounded-xl border text-xs shadow-sm"
                      >
                        {[8, 10, 12, 16, 20, 25, 32].map((d) => (
                          <option key={d} value={d}>{d} mm</option>
                        ))}
                      </select>

                      <input
                        type="number"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                        className="p-3 rounded-xl border text-xs shadow-sm"
                      />

                      <input
                        placeholder="Quantity"
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className="p-3 rounded-xl border text-xs shadow-sm sm:col-span-2"
                      />
                    </div>

                    <button
                      onClick={calculateWeight}
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 
                                 hover:from-orange-600 hover:to-orange-700 
                                 text-white font-bold py-3.5 rounded-xl 
                                 shadow-lg transition-all active:scale-95"
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

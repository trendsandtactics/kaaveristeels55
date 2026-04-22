"use client";

import Image from "next/image";
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
      saveEnquiry(`Construction Calculator Details:
- Structure Type: ${structureType}
- Area: ${area} sqft
- Floors: ${floors}
- Total Area: ${totalArea} sqft
- Estimated Steel: ${steel} kg`);
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

      saveEnquiry(`Weight Calculator Details:
- Diameter: ${d} mm
- Length: ${l} m
- Quantity: ${q}
- Weight: ${totalWeight} kg
- Bundles: ${bundles}`);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-gray-900">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/steel.png"
          alt="Steel"
          fill
          className="object-cover object-center md:object-left"
        />
        <div className="absolute inset-0 bg-black/5 md:bg-transparent" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20 md:py-40 flex justify-center md:justify-end items-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md"
        >
          <div className="rounded-3xl bg-white/95 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.3)] overflow-hidden border border-white/20">
            
            {/* HEADER */}
            <div className="bg-red-800 p-6 text-white text-center">
              <h2 className="text-xl font-bold">Steel Calculator</h2>
              <p className="text-[10px] uppercase tracking-widest">Fast & Accurate Estimation</p>
            </div>

            {/* BODY */}
            <div className="p-6 md:p-8 space-y-4">
              
              <div className="grid grid-cols-2 gap-3">
                <input
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="p-3 rounded-xl border border-gray-200 focus:border-red-800 outline-none"
                />
                <input
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="p-3 rounded-xl border border-gray-200 focus:border-red-800 outline-none"
                />
              </div>

              {/* TABS */}
              <div className="grid grid-cols-2 bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setActiveTab("construction")}
                  className={`py-2 rounded-lg ${
                    activeTab === "construction" ? "bg-white text-red-800" : "text-gray-500"
                  }`}
                >
                  Construction
                </button>
                <button
                  onClick={() => setActiveTab("weight")}
                  className={`py-2 rounded-lg ${
                    activeTab === "weight" ? "bg-white text-red-800" : "text-gray-500"
                  }`}
                >
                  Weight
                </button>
              </div>

              <AnimatePresence mode="wait">
                {activeTab === "construction" ? (
                  <motion.div key="c" className="space-y-4">
                    
                    <select
                      value={structureType}
                      onChange={(e) => setStructureType(e.target.value)}
                      className="p-3 border rounded-xl w-full"
                    >
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="infrastructure">Infrastructure</option>
                    </select>

                    <input
                      placeholder="Area"
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                      className="p-3 border rounded-xl w-full focus:border-red-800"
                    />

                    <input
                      placeholder="Floors"
                      value={floors}
                      onChange={(e) => setFloors(e.target.value)}
                      className="p-3 border rounded-xl w-full focus:border-red-800"
                    />

                    <button
                      onClick={calculateConstruction}
                      className="w-full bg-red-800 hover:bg-red-900 text-white py-3 rounded-xl"
                    >
                      Calculate Steel
                    </button>

                    {estimatedSteel && (
                      <div className="bg-red-50 border border-red-200 p-4 rounded-xl text-center">
                        <p className="text-red-800">Estimated Steel</p>
                        <p className="text-red-900 text-2xl font-bold">
                          {estimatedSteel} kg
                        </p>
                      </div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div key="w" className="space-y-4">

                    <input
                      placeholder="Diameter"
                      value={diameter}
                      onChange={(e) => setDiameter(e.target.value)}
                      className="p-3 border rounded-xl w-full focus:border-red-800"
                    />

                    <input
                      placeholder="Length"
                      value={length}
                      onChange={(e) => setLength(e.target.value)}
                      className="p-3 border rounded-xl w-full focus:border-red-800"
                    />

                    <input
                      placeholder="Quantity"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      className="p-3 border rounded-xl w-full focus:border-red-800"
                    />

                    <button
                      onClick={calculateWeight}
                      className="w-full bg-red-800 hover:bg-red-900 text-white py-3 rounded-xl"
                    >
                      Calculate Weight
                    </button>

                    {estimatedWeight && (
                      <div className="bg-red-50 border border-red-200 p-4 rounded-xl text-center">
                        <p className="text-red-800">Weight</p>
                        <p className="text-red-900 font-bold">{estimatedWeight} kg</p>
                        <p className="text-red-800">Bundles: {bundleCount}</p>
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

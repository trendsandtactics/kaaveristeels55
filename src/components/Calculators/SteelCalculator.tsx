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
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-gray-900">

      <div className="absolute inset-0 z-0">
        <Image
          src="/steel.png"
          alt="Steel background"
          fill
          priority
          className="object-cover object-center md:object-left"
        />
        <div className="absolute inset-0 bg-black/5 md:bg-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20 md:py-40 flex justify-center md:justify-end items-center">

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md"
        >
          <div className="rounded-3xl bg-white/95 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.3)] overflow-hidden border border-white/20">

            {/* HEADER */}
            <div className="bg-red-800 p-6 text-white text-center">
              <h2 className="text-xl font-bold tracking-tight">Steel Calculator</h2>
              <p className="text-[10px] font-medium opacity-90 uppercase tracking-widest">Fast & Accurate Estimation</p>
            </div>

            <div className="p-6 md:p-8 space-y-4">

              <div className="grid grid-cols-2 gap-3">
                <input
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="p-3 text-sm rounded-xl border border-gray-200 focus:border-red-800 outline-none"
                />
                <input
                  placeholder="Phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="p-3 text-sm rounded-xl border border-gray-200 focus:border-red-800 outline-none"
                />
              </div>

              <div className="grid grid-cols-2 bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setActiveTab("construction")}
                  className={`py-2.5 rounded-lg text-xs font-bold ${
                    activeTab === "construction" ? "bg-white shadow-sm text-red-800" : "text-gray-500"
                  }`}
                >
                  Construction
                </button>
                <button
                  onClick={() => setActiveTab("weight")}
                  className={`py-2.5 rounded-lg text-xs font-bold ${
                    activeTab === "weight" ? "bg-white shadow-sm text-red-800" : "text-gray-500"
                  }`}
                >
                  Weight
                </button>
              </div>

              <AnimatePresence mode="wait">
                {activeTab === "construction" ? (
                  <motion.div key="c" className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <select className="p-3 border border-gray-200 rounded-xl text-xs">
                        <option>Residential</option>
                        <option>Commercial</option>
                        <option>Infrastructure</option>
                      </select>
                      <input placeholder="Area" className="p-3 border border-gray-200 rounded-xl text-xs focus:border-red-800" />
                      <input placeholder="Floors" className="p-3 border border-gray-200 rounded-xl text-xs focus:border-red-800" />
                    </div>

                    <button className="w-full bg-red-800 hover:bg-red-900 text-white font-bold py-3.5 rounded-xl">
                      Calculate Steel
                    </button>

                    {estimatedSteel && (
                      <div className="bg-red-50 border border-red-200 p-4 rounded-2xl text-center">
                        <span className="text-[10px] text-red-800 font-bold block uppercase mb-1">
                          Total Estimated Steel
                        </span>
                        <p className="text-2xl font-black text-red-900">
                          {estimatedSteel} kg
                        </p>
                      </div>
                    )}
                  </motion.div>
                ) : null}
              </AnimatePresence>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function SteelCalculator() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [structureType, setStructureType] = useState("residential");
  const [area, setArea] = useState("");
  const [floors, setFloors] = useState("1");
  const [estimatedSteel, setEstimatedSteel] = useState<number | null>(null);

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

    if (totalArea > 0) {
      const steel = totalArea * multiplier;
      setEstimatedSteel(steel);
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
          className="object-cover"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-24 flex justify-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md"
        >
          <div className="rounded-3xl bg-white shadow-xl overflow-hidden">

            {/* HEADER */}
            <div className="bg-red-800 p-6 text-white text-center">
              <h2 className="text-xl font-bold">Steel Calculator</h2>
            </div>

            {/* BODY */}
            <div className="p-6 space-y-4">

              <div className="grid grid-cols-2 gap-3">
                <input
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="p-3 border rounded-xl focus:border-red-800"
                />
                <input
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="p-3 border rounded-xl focus:border-red-800"
                />
              </div>

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
                placeholder="Area (sqft)"
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
                className="w-full bg-red-800 text-white py-3 rounded-xl hover:bg-red-900"
              >
                Calculate Steel
              </button>

              {estimatedSteel && (
                <div className="bg-red-50 border border-red-200 p-4 rounded-xl text-center">
                  <p className="text-red-800 font-bold">Estimated Steel</p>
                  <p className="text-2xl font-bold text-red-900">
                    {estimatedSteel} kg
                  </p>
                </div>
              )}

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
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
  const [estimatedCost, setEstimatedCost] = useState<number | null>(null);

  // Dynamic configuration from CMS
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [calcConfig, setCalcConfig] = useState<any>(null);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const res = await fetch("/api/public/content/calculators?limit=10", { cache: "no-store" });
        const { data } = await res.json();
        const item = data?.find((d: { slug: string; }) => d.slug === "steel-calculator" || d.slug === "construction-steel") || data?.[0];
        
        if (item?.extra_data) {
          const parsedExtra = typeof item.extra_data === "string" ? JSON.parse(item.extra_data) : item.extra_data;
          setCalcConfig({
            formula: parsedExtra.formula,
            parameters: typeof parsedExtra.parameters === "string" && parsedExtra.parameters.startsWith("{") ? JSON.parse(parsedExtra.parameters) : {}
          });
        }
      } catch (err) {
        console.error("Failed to load calculator config:", err);
      }
    };
    fetchConfig();
  }, []);

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

    // Use dynamic multipliers or fallback to defaults
    const defaultMultipliers: Record<string, number> = { residential: 4, commercial: 5, infrastructure: 6 };
    const multipliers = calcConfig?.parameters?.multipliers || defaultMultipliers;
    
    const multiplier = multipliers[structureType] || 4;
    const totalArea = Number(area) * Number(floors);

    if (totalArea > 0) {
      let steel = totalArea * multiplier;

      // Support dynamic expression formula execution 
      if (calcConfig?.formula && typeof calcConfig.formula === "string") {
        try {
          // Use Function with parameters to safely evaluate the mathematical string
          const fn = new Function("totalArea", "multiplier", "return " + calcConfig.formula);
          steel = fn(totalArea, multiplier);
        } catch (e) {
          console.warn("Formula evaluation failed, falling back to default.", e);
        }
      }

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
      // Divisor is conventionally 162 but can be dynamic 
      const divisor = calcConfig?.parameters?.weightDivisor || 162;
      let totalWeight = (((d * d) / divisor) * l) * q;

      if (calcConfig?.parameters?.weightFormula && typeof calcConfig.parameters.weightFormula === "string") {
        try {
          const fn = new Function("d", "l", "q", "divisor", "return " + calcConfig.parameters.weightFormula);
          totalWeight = fn(d, l, q, divisor);
        } catch (e) {
          console.warn("Weight formula evaluation failed, falling back to default.", e);
        }
      }
      setEstimatedWeight(totalWeight);

      const bundleDefaults: Record<string, number> = { "8": 10, "10": 7, "12": 5, "16": 3, "20": 2 };
      const bundleConfig = calcConfig?.parameters?.barsPerBundle || bundleDefaults;
      const barsPerBundle = bundleConfig[String(d)] || 1;

      let bundles = Math.ceil(q / barsPerBundle);

      if (calcConfig?.parameters?.bundleFormula && typeof calcConfig.parameters.bundleFormula === "string") {
        try {
          const fn = new Function("q", "barsPerBundle", "return " + calcConfig.parameters.bundleFormula);
          bundles = fn(q, barsPerBundle);
        } catch (e) {
          console.warn("Bundle formula evaluation failed, falling back to default.", e);
        }
      }
      setBundleCount(bundles);

      // Cost Calculation
      const pricePerKg = calcConfig?.parameters?.pricePerKg || 0;
      let cost = totalWeight * pricePerKg; // default fallback

      // Support dynamic cost formula execution 
      if (calcConfig?.parameters?.costFormula && typeof calcConfig.parameters.costFormula === "string") {
        try {
          const fn = new Function("totalWeight", "pricePerKg", "bundles", "return " + calcConfig.parameters.costFormula);
          cost = fn(totalWeight, pricePerKg, bundles);
        } catch (e) {
          console.warn("Cost formula evaluation failed, falling back to default.", e);
        }
      }
      setEstimatedCost(cost > 0 ? cost : null);

      saveEnquiry(`Weight Calculator Details:
- Diameter: ${d} mm
- Length: ${l} m
- Quantity: ${q}
- Weight: ${totalWeight} kg
- Bundles: ${bundles}${cost > 0 ? `\n- Estimated Cost: ₹${cost.toFixed(2)}` : ''}`);
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
                        {estimatedCost !== null && (
                          <>
                            <p className="text-red-800 mt-2">Estimated Cost</p>
                            <p className="text-red-900 font-bold">₹{estimatedCost.toFixed(2)}</p>
                          </>
                        )}
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

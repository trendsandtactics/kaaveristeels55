"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ConstructionSteelCalculatorClient() {
  const [activeTab, setActiveTab] = useState<"construction" | "weight">("construction");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [structureType, setStructureType] = useState("");
  const [area, setArea] = useState("");
  const [floors, setFloors] = useState("");
  const [estimatedSteel, setEstimatedSteel] = useState<number | null>(null);
  const [diameter, setDiameter] = useState("");
  const [length, setLength] = useState("");
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
        const item = data?.find((d: { slug: string; }) => d.slug === "construction-steel") || data?.[0];
        
        if (item?.extra_data) {
          const parsedExtra = typeof item.extra_data === "string" ? JSON.parse(item.extra_data) : item.extra_data;
          let parsedParameters = {};
          try {
            parsedParameters = typeof parsedExtra.parameters === "string" && parsedExtra.parameters.startsWith("{") ? JSON.parse(parsedExtra.parameters) : parsedExtra.parameters || {};
          } catch (e) {
            console.warn("Failed to parse calculator parameters json", e);
          }
          setCalcConfig({
            formula: parsedExtra.formula,
            parameters: parsedParameters
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

  const saveEnquiry = async (message: string, extraData: Record<string, string | number> = {}) => {
    try {
      // Save to existing Backend API
      await fetch("/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          enquiry_type: "calculator",
          message,
        }),
      });

      // Send Email via custom API
      const emailResponse = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: name,
          Phone: phone,
          Email: "no-email@provided.com",
          Type: "Steel Calculator",
          Details: message,
          _subject: "New Steel Calculator Enquiry",
          ...extraData,
        }),
      });
      const emailData = await emailResponse.json();

      if (!emailResponse.ok || !emailData.success) {
        throw new Error(emailData.error || "Something went wrong sending the email.");
      }
    } catch (err) {
      console.error("Failed to save enquiry", err);
    }
  };

  const calculateConstruction = () => {
    if (!validateLead()) return;

    if (!structureType || !area || !floors) {
      alert("Please enter Structure Type, Area, and Floors to calculate.");
      return;
    }

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
- Estimated Steel: ${steel} kg`, {
        "Structure Type": structureType,
        "Area (sqft)": area,
        "Floors": floors,
        "Total Area (sqft)": totalArea,
        "Estimated Steel (kg)": steel,
      });
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
- Bundles: ${bundles}${cost > 0 ? `\n- Estimated Cost: ₹${cost.toFixed(2)}` : ''}`, {
        "Diameter (mm)": d,
        "Length (m)": l,
        "Quantity": q,
        "Weight (kg)": totalWeight,
        "Bundles": bundles,
        ...(cost > 0 ? { "Estimated Cost": `₹${cost.toFixed(2)}` } : {})
      });
    }
  };

  return (
    <section className="relative w-full min-h-[100svh] overflow-x-hidden bg-gray-900 flex items-center pt-28 pb-12 lg:pt-32">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/steel.png"
          alt="KAAVERI Construction Steel Reinforcement Bars"
          fill
          className="object-cover object-center lg:object-left"
          priority
        />
        <div className="absolute inset-0 bg-black/60 lg:bg-black/20" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 items-center min-h-[80vh]">

          {/* LEFT SIDE INTRO FOR SEO */}
          <div className="hidden lg:flex flex-col justify-center pr-8 text-white">
            <span className="text-accent-yellow font-bold uppercase tracking-[0.25em] text-xs mb-3">
              KAAVERI Engineering Utilities
            </span>
            <h1 className="font-serif text-4xl xl:text-5xl font-extrabold leading-tight mb-5 drop-shadow-lg">
              Construction Steel & TMT Bar Estimator
            </h1>
            <p className="text-white/80 text-base leading-relaxed max-w-lg mb-6">
              Quickly estimate the required TMT steel quantity in kilograms and metric tonnes for residential homes, commercial towers, or infrastructure projects.
            </p>
            <div className="flex items-center gap-6 text-sm text-white/90">
              <div>
                <span className="block font-bold text-xl text-accent-yellow">Fe 550D</span>
                <span className="text-xs text-white/70">High Ductility Grade</span>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div>
                <span className="block font-bold text-xl text-accent-yellow">IS 1786</span>
                <span className="text-xs text-white/70">BIS Certified Standard</span>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div>
                <span className="block font-bold text-xl text-accent-yellow">D²/162</span>
                <span className="text-xs text-white/70">Accurate Meter Weights</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="flex justify-center lg:justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-[95%] sm:max-w-md lg:max-w-md xl:max-w-lg"
            >
              <div className="rounded-3xl bg-white/95 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.3)] overflow-hidden border border-white/20">

                {/* HEADER */}
                <div className="bg-red-800 p-4 sm:p-5 text-white text-center">
                  <h2 className="text-lg sm:text-xl font-bold">
                    Steel Calculator
                  </h2>
                  <p className="text-[10px] sm:text-xs uppercase tracking-widest mt-1">
                    Fast & Accurate Estimation
                  </p>
                </div>

                {/* BODY */}
                <div className="p-4 sm:p-6 space-y-4">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="p-3 rounded-xl border border-gray-200 focus:border-red-800 outline-none text-sm w-full"
                    />

                    <input
                      type="tel"
                      placeholder="Phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="p-3 rounded-xl border border-gray-200 focus:border-red-800 outline-none text-sm w-full"
                    />
                  </div>

                  {/* TABS */}
                  <div className="grid grid-cols-2 bg-gray-100 rounded-xl p-1">
                    <button
                      onClick={() => setActiveTab("construction")}
                      className={`py-2 rounded-lg text-xs font-bold transition-all ${
                        activeTab === "construction"
                          ? "bg-red-800 text-white shadow-md"
                          : "text-gray-600 hover:text-black"
                      }`}
                    >
                      Construction Steel
                    </button>
                    <button
                      onClick={() => setActiveTab("weight")}
                      className={`py-2 rounded-lg text-xs font-bold transition-all ${
                        activeTab === "weight"
                          ? "bg-red-800 text-white shadow-md"
                          : "text-gray-600 hover:text-black"
                      }`}
                    >
                      Weight Calculator
                    </button>
                  </div>

                  {/* TAB CONTENT */}
                  <AnimatePresence mode="wait">
                    {activeTab === "construction" ? (
                      <motion.div
                        key="construction"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-3"
                      >
                        <select
                          value={structureType}
                          onChange={(e) => setStructureType(e.target.value)}
                          className="w-full p-3 rounded-xl border border-gray-200 text-sm focus:border-red-800 outline-none"
                        >
                          <option value="">Select Structure Type</option>
                          <option value="residential">Residential</option>
                          <option value="commercial">Commercial</option>
                          <option value="infrastructure">Infrastructure</option>
                        </select>

                        <input
                          type="number"
                          placeholder="Built-up Area (sq.ft)"
                          value={area}
                          onChange={(e) => setArea(e.target.value)}
                          className="w-full p-3 rounded-xl border border-gray-200 text-sm focus:border-red-800 outline-none"
                        />

                        <input
                          type="number"
                          placeholder="Number of Floors"
                          value={floors}
                          onChange={(e) => setFloors(e.target.value)}
                          className="w-full p-3 rounded-xl border border-gray-200 text-sm focus:border-red-800 outline-none"
                        />

                        <button
                          onClick={calculateConstruction}
                          className="w-full bg-red-800 hover:bg-red-900 text-white py-3 rounded-xl font-medium transition-colors text-sm"
                        >
                          Calculate Steel Requirement
                        </button>

                        {estimatedSteel && (
                          <div className="bg-red-50 border border-red-200 p-4 rounded-xl text-center">
                            <p className="text-red-800 text-xs uppercase font-medium">Estimated Steel Requirement</p>
                            <p className="text-xl sm:text-2xl font-bold text-red-900 mt-1">{estimatedSteel} kg</p>
                            <p className="text-xs text-red-700 mt-1">({(estimatedSteel / 1000).toFixed(2)} Metric Tons)</p>
                          </div>
                        )}
                      </motion.div>
                    ) : (
                      <motion.div
                        key="weight"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-3"
                      >
                        <select
                          value={diameter}
                          onChange={(e) => setDiameter(e.target.value)}
                          className="w-full p-3 rounded-xl border border-gray-200 text-sm focus:border-red-800 outline-none"
                        >
                          <option value="">Select Bar Diameter (mm)</option>
                          <option value="8">8 mm</option>
                          <option value="10">10 mm</option>
                          <option value="12">12 mm</option>
                          <option value="16">16 mm</option>
                          <option value="20">20 mm</option>
                          <option value="25">25 mm</option>
                          <option value="32">32 mm</option>
                        </select>

                        <div className="grid grid-cols-2 gap-3">
                          <input
                            type="number"
                            placeholder="Length (m)"
                            value={length}
                            onChange={(e) => setLength(e.target.value)}
                            className="p-3 rounded-xl border border-gray-200 text-sm focus:border-red-800 outline-none w-full"
                          />

                          <input
                            type="number"
                            placeholder="Quantity (pcs)"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            className="p-3 rounded-xl border border-gray-200 text-sm focus:border-red-800 outline-none w-full"
                          />
                        </div>

                        <button
                          onClick={calculateWeight}
                          className="w-full bg-red-800 hover:bg-red-900 text-white py-3 rounded-xl font-medium transition-colors text-sm"
                        >
                          Calculate Weight
                        </button>

                        {estimatedWeight && (
                          <div className="bg-red-50 border border-red-200 p-3 sm:p-4 rounded-xl text-center">
                            <div className="grid grid-cols-2 gap-2">
                              <div>
                                <p className="text-red-800 text-[10px] sm:text-xs uppercase">Weight</p>
                                <p className="text-red-900 font-bold">{estimatedWeight} kg</p>
                              </div>
                              <div>
                                <p className="text-red-800 text-[10px] sm:text-xs uppercase">Bundles</p>
                                <p className="text-red-900 font-bold">{bundleCount}</p>
                              </div>
                            </div>
                            {estimatedCost !== null && (
                              <div className="mt-2 pt-2 border-t border-red-200/50">
                                <p className="text-red-800 text-[10px] sm:text-xs uppercase">Estimated Cost</p>
                                <p className="text-red-900 font-bold">₹{estimatedCost.toFixed(2)}</p>
                              </div>
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
        </div>
      </div>
    </section>
  );
}

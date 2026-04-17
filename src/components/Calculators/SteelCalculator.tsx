"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SteelCalculator() {

  const [activeTab, setActiveTab] = useState<"construction" | "weight">("construction");

  const [name,setName] = useState("");
  const [phone,setPhone] = useState("");

  const [structureType,setStructureType] = useState("residential");
  const [area,setArea] = useState("");
  const [floors,setFloors] = useState("1");
  const [estimatedSteel,setEstimatedSteel] = useState<number | null>(null);

  const [diameter,setDiameter] = useState("8");
  const [length,setLength] = useState("12");
  const [quantity,setQuantity] = useState("");
  const [estimatedWeight,setEstimatedWeight] = useState<number | null>(null);
  const [bundleCount,setBundleCount] = useState<number | null>(null);

  const validateLead = () => {
    if(!name || !phone){
      alert("Please enter your Name and Phone Number");
      return false;
    }
    return true;
  };

  const calculateConstruction = () => {

    if(!validateLead()) return;

    let multiplier = 4;

    if(structureType === "commercial") multiplier = 5;
    if(structureType === "infrastructure") multiplier = 6;

    const totalArea = Number(area) * Number(floors);

    if(totalArea > 0){
      setEstimatedSteel(totalArea * multiplier);
    }

  };

  const calculateWeight = () => {

    if(!validateLead()) return;

    const d = Number(diameter);
    const l = Number(length);
    const q = Number(quantity);

    if(d > 0 && l > 0 && q > 0){

      const weightPerBar = ((d*d)/162)*l;
      const totalWeight = weightPerBar*q;

      setEstimatedWeight(totalWeight);

      const barsPerBundle = d <= 10 ? 10 : d <= 16 ? 5 : 3;
      setBundleCount(Math.ceil(q / barsPerBundle));

    }

  };

  return (
    <motion.section
      initial={{opacity:0,y:15}}
      animate={{opacity:1,y:0}}
      className="mx-auto w-full max-w-6xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_70px_-25px_rgba(15,23,42,0.35)]"
    >

      {/* Header */}

      <div className="relative border-b border-slate-200 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 p-6 text-center text-white md:p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.28),transparent_40%)]" />
        <p className="relative text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
          Precision Planning Tool
        </p>
        <h2 className="relative mt-2 text-2xl font-bold md:text-3xl">
          Steel <span className="text-red-400">Calculator</span>
        </h2>
        <p className="relative mt-2 text-sm text-white/75 md:text-base">
          Premium estimation workflow for site planning, procurement, and execution.
        </p>
      </div>


      {/* Lead Inputs */}

      <div className="border-b border-slate-200 bg-slate-50/80 p-4 md:p-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Contact Details</p>
        <div className="grid gap-3 md:grid-cols-2">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="rounded-xl border border-slate-300 bg-white p-3 text-sm text-slate-800 outline-none ring-red-500/30 transition focus:ring-2"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            className="rounded-xl border border-slate-300 bg-white p-3 text-sm text-slate-800 outline-none ring-red-500/30 transition focus:ring-2"
          />
        </div>
      </div>


      {/* Tabs */}

      <div className="border-b border-slate-200 bg-white p-3 md:p-4">
        <div className="grid grid-cols-2 rounded-xl bg-slate-100 p-1">
          <button
            onClick={()=>setActiveTab("construction")}
            className={`rounded-lg px-3 py-2.5 text-sm font-semibold transition md:text-base ${
              activeTab==="construction"
              ? "bg-white text-slate-900 shadow-sm"
              : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Construction Steel
          </button>

          <button
            onClick={()=>setActiveTab("weight")}
            className={`rounded-lg px-3 py-2.5 text-sm font-semibold transition md:text-base ${
              activeTab==="weight"
              ? "bg-white text-slate-900 shadow-sm"
              : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Weight & Bundle
          </button>
        </div>
      </div>


      <div className="bg-gradient-to-b from-white to-slate-50/70 p-5 md:p-7">

        <AnimatePresence mode="wait">

        {/* Construction Calculator */}

        {activeTab==="construction" && (

          <motion.div
            key="construction"
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            className="space-y-4"
          >
            <p className="text-sm text-slate-600">
              Estimate total steel requirement based on project type, built-up area, and number of floors.
            </p>

            <div className="grid md:grid-cols-3 gap-3">

              <select
                value={structureType}
                onChange={(e)=>setStructureType(e.target.value)}
                className="rounded-xl border border-slate-300 bg-white p-3 text-sm text-slate-800 outline-none ring-red-500/30 transition focus:ring-2"
              >
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="infrastructure">Infrastructure</option>
              </select>

              <input
                type="number"
                placeholder="Area (sq.ft)"
                value={area}
                onChange={(e)=>setArea(e.target.value)}
                className="rounded-xl border border-slate-300 bg-white p-3 text-sm text-slate-800 outline-none ring-red-500/30 transition focus:ring-2"
              />

              <input
                type="number"
                placeholder="Floors"
                value={floors}
                onChange={(e)=>setFloors(e.target.value)}
                className="rounded-xl border border-slate-300 bg-white p-3 text-sm text-slate-800 outline-none ring-red-500/30 transition focus:ring-2"
              />

            </div>

            <button
              onClick={calculateConstruction}
              className="w-full rounded-xl bg-gradient-to-r from-slate-900 to-slate-700 py-3 font-semibold text-white shadow-lg shadow-slate-300 transition hover:brightness-110"
            >
              Calculate Steel
            </button>

            {estimatedSteel && (

              <div className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-5 text-center md:p-7">

                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700/80">
                  Estimated Steel Requirement
                </p>

                <p className="mt-2 text-3xl font-bold text-emerald-900 md:text-4xl">
                  {estimatedSteel.toLocaleString()} kg
                </p>
                <p className="mt-2 text-sm text-emerald-800/80">Use this estimate to shortlist procurement quantity and delivery scheduling.</p>

              </div>

            )}

          </motion.div>

        )}


        {/* Weight Calculator */}

        {activeTab==="weight" && (

          <motion.div
            key="weight"
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            className="space-y-4"
          >
            <p className="text-sm text-slate-600">
              Compute total bar weight and estimated bundle count using diameter, length, and quantity.
            </p>

            <div className="grid md:grid-cols-4 gap-3">

              <select
                value={diameter}
                onChange={(e)=>setDiameter(e.target.value)}
                className="rounded-xl border border-slate-300 bg-white p-3 text-sm text-slate-800 outline-none ring-red-500/30 transition focus:ring-2"
              >
                {[8,10,12,16,20,25,32].map(d=>(
                  <option key={d} value={d}>{d} mm</option>
                ))}
              </select>

              <input
                type="number"
                value={length}
                onChange={(e)=>setLength(e.target.value)}
                className="rounded-xl border border-slate-300 bg-white p-3 text-sm text-slate-800 outline-none ring-red-500/30 transition focus:ring-2"
              />

              <input
                type="number"
                placeholder="Quantity"
                value={quantity}
                onChange={(e)=>setQuantity(e.target.value)}
                className="rounded-xl border border-slate-300 bg-white p-3 text-sm text-slate-800 outline-none ring-red-500/30 transition focus:ring-2"
              />

              <button
                onClick={calculateWeight}
                className="rounded-xl bg-gradient-to-r from-slate-900 to-slate-700 text-sm font-semibold text-white shadow-lg shadow-slate-300 transition hover:brightness-110"
              >
                Calculate
              </button>

            </div>

            {estimatedWeight && (

              <div className="grid md:grid-cols-2 gap-3">

                <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-5 text-center">

                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700/80">
                    Total Weight
                  </p>

                  <p className="mt-2 text-3xl font-bold text-blue-900">
                    {estimatedWeight.toFixed(2)} kg
                  </p>

                </div>

                <div className="rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 to-white p-5 text-center">

                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-700/80">
                    Bundles
                  </p>

                  <p className="mt-2 text-3xl font-bold text-violet-900">
                    {bundleCount}
                  </p>

                </div>

              </div>

            )}

          </motion.div>

        )}

        </AnimatePresence>

      </div>

    </motion.section>

  );

}

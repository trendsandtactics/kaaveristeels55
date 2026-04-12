"use client";

import React, { useState, useEffect } from "react";

// Type definition for your MySQL products
type Product = {
  id: number;
  category: string;
  name: string;
  description: string;
  tmt_grade?: string;
  tmt_size?: string;
  structural_type?: string;
  dimensions?: string;
};

export default function AdminProductsPage() {
  // Tab State
  const [activeTab, setActiveTab] = useState<"TMT" | "Structural">("TMT");

  // Form State
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  
  // TMT Specific Fields
  const [tmtGrade, setTmtGrade] = useState("Fe 500D");
  const [tmtSize, setTmtSize] = useState("12mm");
  
  // Structural Specific Fields
  const [structuralType, setStructuralType] = useState("I-Beam");
  const [dimensions, setDimensions] = useState("");

  // MySQL Products State
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch existing products from MySQL (Simulated)
  useEffect(() => {
    // TODO: Replace with your actual API fetch call:
    // fetch('/api/products').then(res => res.json()).then(data => setProducts(data));
    
    // Mock data mimicking MySQL rows
    setProducts([
      { id: 1, category: "TMT", name: "KAAVERI Fe 550D", description: "High strength earthquake resistant TMT bar.", tmt_grade: "Fe 550D", tmt_size: "16mm" },
      { id: 2, category: "Structural", name: "Heavy Duty I-Beam", description: "Premium structural steel for load bearing.", structural_type: "I-Beam", dimensions: "200x100mm" }
    ]);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const payload = {
      category: activeTab,
      name,
      description,
      ...(activeTab === "TMT" ? { tmtGrade, tmtSize } : { structuralType, dimensions })
    };

    // TODO: POST payload to your API route to save in MySQL
    console.log("Payload to submit:", payload);
    
    alert("Product saved successfully!");
    
    // Reset Form
    setName("");
    setDescription("");
    setDimensions("");
  };

  // Filter products by the currently selected tab
  const filteredProducts = products.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Top Navigation Tabs */}
        <div className="bg-white shadow-sm rounded-2xl p-6 border border-gray-200 flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-4 md:mb-0">Product Management</h1>
          <div className="flex space-x-2 bg-gray-100 p-1 rounded-xl">
            <button
              onClick={() => setActiveTab("TMT")}
              className={`px-8 py-2 font-bold rounded-lg transition-all ${activeTab === "TMT" ? "bg-white text-red-600 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
            >
              TMT Bars
            </button>
            <button
              onClick={() => setActiveTab("Structural")}
              className={`px-8 py-2 font-bold rounded-lg transition-all ${activeTab === "Structural" ? "bg-white text-red-600 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
            >
              Structural Steel
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* LEFT: Add Product Form */}
          <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">
              Add New {activeTab === "TMT" ? "TMT Bar" : "Structural Steel"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Common Fields */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Product Name</label>
                <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. KAAVERI Super 500" className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-red-500 outline-none" />
              </div>

              {/* Dynamic Fields: TMT */}
              {activeTab === "TMT" && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Grade</label>
                    <select value={tmtGrade} onChange={(e) => setTmtGrade(e.target.value)} className="w-full border border-gray-300 px-4 py-2 rounded-lg bg-white">
                      <option value="Fe 500">Fe 500</option>
                      <option value="Fe 500D">Fe 500D</option>
                      <option value="Fe 550">Fe 550</option>
                      <option value="Fe 550D">Fe 550D</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Size / Dia</label>
                    <select value={tmtSize} onChange={(e) => setTmtSize(e.target.value)} className="w-full border border-gray-300 px-4 py-2 rounded-lg bg-white">
                      <option value="8mm">8mm</option>
                      <option value="10mm">10mm</option>
                      <option value="12mm">12mm</option>
                      <option value="16mm">16mm</option>
                      <option value="20mm">20mm</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Dynamic Fields: Structural */}
              {activeTab === "Structural" && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Steel Type</label>
                    <select value={structuralType} onChange={(e) => setStructuralType(e.target.value)} className="w-full border border-gray-300 px-4 py-2 rounded-lg bg-white">
                      <option value="I-Beam">I-Beam</option>
                      <option value="C-Channel">C-Channel</option>
                      <option value="Angle">Angle</option>
                      <option value="Round Bar">Round Bar</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Dimensions</label>
                    <input type="text" required value={dimensions} onChange={(e) => setDimensions(e.target.value)} placeholder="e.g. 100x50 mm" className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-red-500 outline-none" />
                  </div>
                </div>
              )}

              {/* Common Fields */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Description</label>
                <textarea required value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Brief product description..." rows={3} className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-red-500 outline-none" />
              </div>

              <button type="submit" className="w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 shadow-md transition-colors">
                Publish Product
              </button>
            </form>
          </div>

          {/* RIGHT: Previous Products from MySQL */}
          <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">
              Previous {activeTab === "TMT" ? "TMT Bars" : "Structural Steels"}
            </h2>
            
            {filteredProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-10 text-gray-400">
                <span className="text-4xl mb-2">📦</span>
                <p>No products found in this category.</p>
              </div>
            ) : (
              <ul className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                {filteredProducts.map((product) => (
                  <li key={product.id} className="p-5 border border-gray-100 rounded-xl bg-gray-50 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-bold text-lg text-gray-900">{product.name}</span>
                      <span className="text-xs font-bold px-3 py-1 bg-red-100 text-red-700 rounded-full uppercase tracking-wider">
                        {product.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                    
                    <div className="flex gap-4 text-sm font-semibold text-gray-700 bg-white p-3 rounded-lg border border-gray-200">
                      {product.category === "TMT" ? (
                        <>
                          <span>Grade: <span className="text-red-600">{product.tmt_grade}</span></span>
                          <span>Size: <span className="text-red-600">{product.tmt_size}</span></span>
                        </>
                      ) : (
                        <>
                          <span>Type: <span className="text-red-600">{product.structural_type}</span></span>
                          <span>Dim: <span className="text-red-600">{product.dimensions}</span></span>
                        </>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
"use client";

import React, { useState } from "react";

export default function AdminQuestionsPage() {
  const [category, setCategory] = useState("TMT");
  const [question, setQuestion] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: Connect to your Next.js API route or FastAPI backend to insert into MySQL
    console.log("Payload to submit:", { category, question });
    
    alert("Question saved successfully!");
    setQuestion(""); // Reset the question field after submission
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 border-b pb-4">
          Add Product Question
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Category Dropdown */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Product Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white"
            >
              <option value="TMT">TMT Bars</option>
              <option value="Structural">Structural Steel</option>
            </select>
          </div>

          {/* Question Input */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Question
            </label>
            <input
              type="text"
              required
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Enter the question here..."
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition duration-300 mt-4 shadow-md"
          >
            Save Question
          </button>
        </form>
      </div>
    </div>
  );
}
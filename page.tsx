"use client";

import React, { useState, useEffect } from "react";

export default function AdminAboutPage() {
  const [formData, setFormData] = useState({
    heading: "",
    subheading: "",
    content: "",
    imageUrl: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch('/api/about')
      .then(res => res.json())
      .then(data => {
        if (data && !data.error) {
          setFormData({
            heading: data.heading || "",
            subheading: data.subheading || "",
            content: data.content || "",
            imageUrl: data.image_url || data.imageUrl || ""
          });
        }
      })
      .catch(err => console.error("Failed to fetch about data", err));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      const res = await fetch('/api/about', { 
        method: 'PUT', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData) 
      });
      
      if (!res.ok) throw new Error("Update failed");
      setMessage("About page content updated successfully!");
    } catch (error) {
      setMessage("Failed to update content.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md mt-10">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Manage About Us Page</h1>
      {message && (
        <div className={`p-4 mb-6 rounded-md font-medium ${message.includes("success") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Heading</label>
          <input
            type="text"
            name="heading"
            value={formData.heading}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subheading</label>
          <input
            type="text"
            name="subheading"
            value={formData.subheading}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Content</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            rows={6}
            className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Hero Image URL</label>
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
        >
          {isLoading ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
}
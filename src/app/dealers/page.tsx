"use client";

import { useState } from "react";

export default function MediaAndEventsPage() {
  // State to handle which tab is currently active
  const [activeTab, setActiveTab] = useState<"images" | "videos">("images");

  // Mock Data: Replace these with your actual image paths or API data
  const images = [
    { id: 1, src: "https://placehold.co/600x400/eeeeee/999999?text=Event+Image+1", alt: "Event 1" },
    { id: 2, src: "https://placehold.co/600x400/eeeeee/999999?text=Event+Image+2", alt: "Event 2" },
    { id: 3, src: "https://placehold.co/600x400/eeeeee/999999?text=Event+Image+3", alt: "Event 3" },
    { id: 4, src: "https://placehold.co/600x400/eeeeee/999999?text=Event+Image+4", alt: "Event 4" },
  ];

  // Mock Data: Replace these with your actual YouTube, Vimeo, or local video URLs
  const videos = [
    { id: 1, title: "Event Video 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 2, title: "Event Video 2", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  ];

  return (
    <main className="flex flex-col min-h-screen w-full pt-20 bg-gray-50">
      {/* Hero Section */}
      <div className="w-full py-12 md:py-20 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 text-black relative overflow-hidden shadow-xl border-b border-black/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.6)_0%,transparent_70%)] pointer-events-none mix-blend-overlay" />
        <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-4 text-gray-900 font-extrabold tracking-tight">
            Media & Events
          </h1>
          <p className="font-body text-gray-800 max-w-2xl mx-auto text-base md:text-lg font-medium">
            Explore our latest updates, galleries, and event highlights.
          </p>
        </div>
      </div>

      <section className="px-6 py-12 md:py-20 max-w-7xl mx-auto w-full flex-grow">
        {/* Tab Switches */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("images")}
            className={`px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
              activeTab === "images"
                ? "bg-red-600 text-white shadow-md shadow-red-600/20 ring-1 ring-red-600"
                : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:shadow-sm"
            }`}
          >
            Images
          </button>
          <button
            onClick={() => setActiveTab("videos")}
            className={`px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
              activeTab === "videos"
                ? "bg-red-600 text-white shadow-md shadow-red-600/20 ring-1 ring-red-600"
                : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:shadow-sm"
            }`}
          >
            Videos
          </button>
        </div>

        {/* Tab Content */}
        <div className="w-full">
          {activeTab === "images" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {images.map((img) => (
                <div
                  key={img.id}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm bg-gray-200 border border-gray-100"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}

          {activeTab === "videos" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videos.map((vid) => (
                <div
                  key={vid.id}
                  className="relative aspect-video rounded-2xl overflow-hidden shadow-md bg-gray-200 border border-gray-100"
                >
                  <iframe
                    src={vid.url}
                    title={vid.title}
                    className="absolute inset-0 w-full h-full"
                    allowFullScreen
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
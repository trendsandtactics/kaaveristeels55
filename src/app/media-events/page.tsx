"use client";

import { useEffect, useState } from "react";

type MediaEvent = {
  id: number;
  title: string;
  short_description: string;
  cover_image: string;
  video_url: string;
  extra_data: {
    event_date?: string;
    media_type?: string;
  };
};

export default function MediaEventsPage() {
  const [activeTab, setActiveTab] = useState<"images" | "videos">("images");
  const [items, setItems] = useState<MediaEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("/api/admin/content/mediaEvents?limit=500");
        if (res.ok) {
          const data = await res.json();
          // Only show published items to users
          const published = (data.data || []).filter((i: any) => i.status === "published");
          setItems(published);
        }
      } catch (err) {
        console.error("Failed to fetch media events", err);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  // Fallback support if events were created before adding media_type
  const imageItems = items.filter(
    (item) => item.extra_data?.media_type === "image" || (!item.extra_data?.media_type && item.cover_image && !item.video_url)
  );
  
  const videoItems = items.filter(
    (item) => item.extra_data?.media_type === "video" || (!item.extra_data?.media_type && item.video_url)
  );

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
          {loading ? (
            <div className="text-center py-20 text-gray-500">Loading media...</div>
          ) : activeTab === "images" ? (
            imageItems.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {imageItems.map((img) => (
                  <div
                    key={img.id}
                    className="group relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div className="aspect-[4/3] relative bg-gray-200 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={img.cover_image || "https://placehold.co/600x400/eeeeee/999999?text=No+Image"}
                        alt={img.title}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4 flex-grow">
                      <h3 className="font-bold text-gray-900 text-lg mb-1">{img.title}</h3>
                      {img.extra_data?.event_date && (
                        <p className="text-xs text-red-600 font-semibold mb-2">{img.extra_data.event_date}</p>
                      )}
                      <p className="text-sm text-gray-600 line-clamp-2">{img.short_description}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 text-gray-500">No image events found.</div>
            )
          ) : (
            videoItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {videoItems.map((vid) => (
                  <div
                    key={vid.id}
                    className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
                  >
                    <div className="relative aspect-video bg-gray-200 overflow-hidden">
                      <iframe
                        src={vid.video_url}
                        title={vid.title}
                        className="absolute inset-0 w-full h-full"
                        allowFullScreen
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-gray-900 text-xl mb-1">{vid.title}</h3>
                      {vid.extra_data?.event_date && (
                        <p className="text-xs text-red-600 font-semibold mb-2">{vid.extra_data.event_date}</p>
                      )}
                      <p className="text-sm text-gray-600">{vid.short_description}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 text-gray-500">No video events found.</div>
            )
          )}
        </div>
      </section>
    </main>
  );
}

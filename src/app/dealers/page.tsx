"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { MapPin, Phone, Mail, LocateFixed } from "lucide-react";

interface Dealer {
  id: number;
  title: string;
  address: string;
  city: string;
  state: string;
  phone: string;
  email?: string;
  mapUrl?: string;
  latitude?: string;
  longitude?: string;
}

function getDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371; // Radius of the earth in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in km
}

export default function DealersPage() {
  const [dealers, setDealers] = useState<Dealer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedCity, setSelectedCity] = useState<string>("All");
  const [selectedDealer, setSelectedDealer] = useState<Dealer | null>(null);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [locating, setLocating] = useState(false);
  const [locationError, setLocationError] = useState("");

  const loadDealers = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch("/api/public/content/dealers?limit=100", { cache: "no-store" });
      if (!res.ok) throw new Error("Failed to fetch dealers.");
      const data = await res.json();

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const fetchedDealers: Dealer[] = (data.data || []).map((item: any) => {
        let extra = item.extra_data;
        if (typeof extra === "string") {
          try { extra = JSON.parse(extra); } catch { extra = {}; }
        }
        return {
          id: item.id,
          title: item.title,
          address: item.short_description || "",
          city: extra?.city || "",
          state: extra?.state || "",
          phone: extra?.phone || "",
          email: extra?.email || "",
          mapUrl: extra?.map_url || "",
          latitude: extra?.latitude || "",
          longitude: extra?.longitude || "",
        };
      });

      // Fallback mock if API is empty for demonstration
      if (fetchedDealers.length === 0) {
        fetchedDealers.push(
          {
            id: 1,
            title: "Chennai Steel Hub",
            address: "12, Mount Road, Guindy",
            city: "Chennai",
            state: "Tamil Nadu",
            phone: "+91 98765 43210",
            email: "chennai@kaaveristeel.com",
            mapUrl: "https://maps.google.com/maps?q=Guindy,%20Chennai&t=&z=13&ie=UTF8&iwloc=&output=embed",
          },
          {
            id: 2,
            title: "Madurai Metals",
            address: "45, Bypass Road",
            city: "Madurai",
            state: "Tamil Nadu",
            phone: "+91 87654 32109",
            email: "madurai@kaaveristeel.com",
            mapUrl: "https://maps.google.com/maps?q=Bypass%20Road,%20Madurai&t=&z=13&ie=UTF8&iwloc=&output=embed",
          }
        );
      }

      setDealers(fetchedDealers);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Unable to fetch dealers."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadDealers();
  }, [loadDealers]);

  // Ask for location on mount (Trigger browser allow popup)
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (err) => console.log("Location access denied or error:", err)
      );
    }
  }, []);

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by your browser.");
      return;
    }
    setLocating(true);
    setLocationError("");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setSelectedCity("All");
        setSelectedDealer(null);
        setLocating(false);
      },
      () => {
        setLocationError("Unable to retrieve your location.");
        setLocating(false);
      }
    );
  };

  // Reset selected dealer when city changes
  useEffect(() => {
    setSelectedDealer(null);
  }, [selectedCity]);

  const cities = useMemo(() => {
    const uniqueCities = Array.from(new Set(dealers.map(d => d.city).filter(Boolean)));
    return ["All", ...uniqueCities.sort()];
  }, [dealers]);

  const filteredDealers = useMemo(() => {
    let result = dealers;
    if (selectedCity !== "All") {
      result = result.filter(d => d.city === selectedCity);
    }
    if (userLocation) {
      result = [...result].sort((a, b) => {
        const latA = parseFloat(a.latitude || "0");
        const lngA = parseFloat(a.longitude || "0");
        const latB = parseFloat(b.latitude || "0");
        const lngB = parseFloat(b.longitude || "0");

        if (!latA || !lngA) return 1;
        if (!latB || !lngB) return -1;

        const distA = getDistance(userLocation.lat, userLocation.lng, latA, lngA);
        const distB = getDistance(userLocation.lat, userLocation.lng, latB, lngB);

        return distA - distB;
      });
    }
    return result;
  }, [dealers, selectedCity, userLocation]);

  const activeMapUrl = useMemo(() => {
    const baseUrl = "https://www.google.com/maps/d/embed?mid=1RbM92MaO-rY-tnUoNiLR_irhlqJg5C4&ehbc=2E312F&noprof=1";
    
    if (selectedDealer) {
      if (selectedDealer.latitude && selectedDealer.longitude) {
        return `${baseUrl}&ll=${selectedDealer.latitude},${selectedDealer.longitude}&z=15`;
      }
    } else if (selectedCity !== "All" && filteredDealers.length > 0) {
      const first = filteredDealers[0];
      if (first.latitude && first.longitude) {
        return `${baseUrl}&ll=${first.latitude},${first.longitude}&z=12`;
      }
    } else if (userLocation) {
      return `${baseUrl}&ll=${userLocation.lat},${userLocation.lng}&z=11`;
    }
    
    return baseUrl;
  }, [selectedDealer, filteredDealers, selectedCity, userLocation]);

  return (
    <main className="flex flex-col min-h-screen w-full relative pt-24 bg-gray-50 overflow-hidden transition-colors duration-500">
      {/* Hero Section */}
      <div className="w-full py-24 md:py-32 bg-gradient-to-r from-accent-yellow via-[#FFD700] to-accent-yellow text-black relative overflow-hidden shadow-2xl group border-b-4 border-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_60%)] pointer-events-none mix-blend-overlay" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none mix-blend-overlay opacity-30" />

        <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-6">
            <div className="w-12 h-[2px] bg-black" />
            <h2 className="font-body uppercase tracking-[0.2em] font-bold text-sm text-black">
              Our Network
            </h2>
            <div className="w-12 h-[2px] bg-black" />
          </div>

          <h1 className="font-heading text-5xl md:text-7xl mb-6 text-black drop-shadow-md">
            Find a Dealer Near You
          </h1>

          <p className="font-body text-black/80 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Locate authorized KAAVERI Steels dealers and partners to get the
            quality products and services you need for your project.
          </p>
        </div>
      </div>

      {/* Dealers List Section */}
      <section className="px-6 py-12 md:py-20 max-w-7xl mx-auto w-full z-10 relative">
        {/* Filter Row */}
        <div className="mb-10 flex flex-col md:flex-row gap-6 items-center justify-between bg-white p-6 rounded-2xl shadow-sm border border-black/10">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <h3 className="font-heading text-2xl text-black">Filter by City</h3>
            <button
              onClick={handleGetLocation}
              disabled={locating}
              className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 border border-red-200 rounded-lg font-semibold text-sm hover:bg-red-100 transition-colors disabled:opacity-50"
              title="Find Dealers Near Me"
            >
              <LocateFixed className={`w-4 h-4 ${locating ? "animate-pulse" : ""}`} />
              {locating ? "Locating..." : "Near Me"}
            </button>
          </div>
          
          <div className="w-full md:w-auto flex flex-col">
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full md:w-72 border border-black/20 rounded-xl px-4 py-3 bg-gray-50 outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 font-body text-sm font-semibold transition-all shadow-sm"
            >
              {cities.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
            {locationError && <p className="text-xs text-red-600 mt-2 text-right">{locationError}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left Column: Dealers List */}
          <div className="lg:col-span-5 flex flex-col gap-5 max-h-[400px] lg:max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
          {loading ? (
            <p className="py-10 text-center text-sm text-black/60 font-semibold">
              Loading dealers...
            </p>
          ) : error ? (
            <p className="py-10 text-center text-sm text-red-600 font-semibold">{error}</p>
          ) : filteredDealers.length === 0 ? (
            <p className="py-10 text-center text-sm text-black/60 font-semibold">
              No dealers found for this location.
            </p>
          ) : (
            filteredDealers.map((dealer) => (
              <div
                key={dealer.id}
                onClick={() => {
                  setSelectedDealer(dealer);
                  if (window.innerWidth < 1024) {
                    document.getElementById("map-view")?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className={`cursor-pointer rounded-2xl border p-6 transition-all duration-300 ${
                  selectedDealer?.id === dealer.id
                    ? "border-red-600 bg-red-50 shadow-md ring-1 ring-red-600"
                    : "border-black/10 bg-white hover:shadow-lg hover:-translate-y-1 hover:border-black/20"
                }`}
              >
                <h3 className="font-heading text-xl font-semibold text-black">
                  {dealer.title}
                </h3>
                <div className="mt-4 space-y-2">
                  <div className="flex items-start gap-3 text-sm text-black/70">
                    <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-red-600" />
                    <p>{dealer.address}, {dealer.city}, {dealer.state}</p>
                  </div>
                  {dealer.phone && (
                    <div className="flex items-center gap-3 text-sm text-black/70">
                      <Phone className="w-4 h-4 shrink-0 text-red-600" />
                      <p>{dealer.phone}</p>
                    </div>
                  )}
                  {dealer.email && (
                    <div className="flex items-center gap-3 text-sm text-black/70">
                      <Mail className="w-4 h-4 shrink-0 text-red-600" />
                      <a href={`mailto:${dealer.email}`} className="hover:text-red-600 hover:underline">{dealer.email}</a>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
          </div>

          {/* Right Column: Google Map */}
          <div id="map-view" className="lg:col-span-7 h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-lg border border-black/10 relative bg-gray-200">
            <iframe
              key={activeMapUrl}
              src={activeMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
              title="Dealer Location Map"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

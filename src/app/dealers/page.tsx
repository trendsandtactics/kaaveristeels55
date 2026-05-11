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

async function fetchShortAddress(lat: number, lng: number) {
  try {
    const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`);
    const data = await res.json();
    if (data?.address) {
      const { suburb, neighbourhood, city_district, city, town, village, state } = data.address;
      const locality = neighbourhood || suburb || city_district || town || village;
      const region = city || state;
      if (locality && region && locality !== region) return `${locality}, ${region}`;
      return locality || region || city || state || data.display_name?.split(",")[0] || "";
    }
    if (data?.display_name) {
      return data.display_name.split(",").slice(0, 2).join(", ");
    }
  } catch (e) {
    console.error(e);
  }
  return "";
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
  const [visibleCount, setVisibleCount] = useState(50);
  const [userAddress, setUserAddress] = useState("");

  const loadDealers = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch("/api/public/content/dealers?limit=5000", { cache: "no-store" });
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
        async (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          setUserLocation({ lat, lng });
          
          const address = await fetchShortAddress(lat, lng);
          if (address) setUserAddress(address);
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
      async (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        setUserLocation({ lat, lng });
        setSelectedCity("All");
        setSelectedDealer(null);
        
        const address = await fetchShortAddress(lat, lng);
        if (address) setUserAddress(address);

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
    setVisibleCount(50);
  }, [selectedCity]);

  useEffect(() => {
    setVisibleCount(50);
  }, [userLocation]);

  const cities = useMemo(() => {
    const uniqueCities = Array.from(new Set(dealers.map(d => d.city).filter(Boolean)));
    return ["All", ...uniqueCities.sort()];
  }, [dealers]);

  const filteredDealers = useMemo(() => {
    let result = dealers;
    if (selectedCity !== "All") {
      result = result.filter(d => d.city === selectedCity);
    }
    
    const withDistance = result.map(d => {
      let distance: number | null = null;
      if (userLocation && d.latitude && d.longitude) {
        const lat = parseFloat(d.latitude);
        const lng = parseFloat(d.longitude);
        if (lat && lng) {
          distance = getDistance(userLocation.lat, userLocation.lng, lat, lng);
        }
      }
      
      let isCityMatch = false;
      if (userAddress && d.city) {
        const parts = userAddress.toLowerCase().split(',').map(p => p.trim());
        const dc = d.city.toLowerCase().trim();
        if (dc && parts.some(p => p && (p === dc || dc.includes(p) || p.includes(dc)))) {
          isCityMatch = true;
        }
      }

      return { ...d, distance, isCityMatch };
    });

    if (userLocation || userAddress) {
      withDistance.sort((a, b) => {
        if (userAddress) {
          if (a.isCityMatch && !b.isCityMatch) return -1;
          if (!a.isCityMatch && b.isCityMatch) return 1;
        }
        const distA = a.distance !== null ? a.distance : Infinity;
        const distB = b.distance !== null ? b.distance : Infinity;
        if (distA !== distB) return distA < distB ? -1 : 1;
        return a.title.localeCompare(b.title);
      });
    }
    return withDistance;
  }, [dealers, selectedCity, userLocation, userAddress]);

  const activeMapUrl = useMemo(() => {
    const baseUrl = "https://www.google.com/maps/d/embed?mid=1rSs36GRxboJ0rm90vpd-HVfbWRNE_oM&ehbc=2E312F&noprof=1";
    
    if (selectedDealer) {
      if (selectedDealer.latitude && selectedDealer.longitude) {
        return `https://maps.google.com/maps?q=${selectedDealer.latitude},${selectedDealer.longitude}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
      } else if (selectedDealer.mapUrl) {
        return selectedDealer.mapUrl;
      } else {
        return `https://maps.google.com/maps?q=${encodeURIComponent(selectedDealer.address + ', ' + selectedDealer.city)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
      }
    } else if (selectedCity !== "All" && filteredDealers.length > 0) {
      const first = filteredDealers.find(d => d.latitude && d.longitude);
      if (first && first.latitude && first.longitude) {
        return `https://maps.google.com/maps?q=${first.latitude},${first.longitude}&t=&z=12&ie=UTF8&iwloc=&output=embed`;
      }
    } else if (userLocation) {
      return `https://maps.google.com/maps?q=${userLocation.lat},${userLocation.lng}&t=&z=12&ie=UTF8&iwloc=&output=embed`;
    }
    
    return baseUrl;
  }, [selectedDealer, filteredDealers, selectedCity, userLocation]);

  return (
    <main className="flex flex-col min-h-screen w-full relative pt-20 bg-gray-50 overflow-hidden transition-colors duration-500">
      {/* Hero Section */}
      <div className="w-full py-12 md:py-20 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 text-black relative overflow-hidden shadow-xl border-b border-black/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.6)_0%,transparent_70%)] pointer-events-none mix-blend-overlay" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none mix-blend-overlay opacity-40" />

        <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-4 opacity-90">
            <div className="w-8 h-[2px] bg-black/70" />
            <h2 className="font-body uppercase tracking-widest font-bold text-sm text-black/80">
              Our Network
            </h2>
            <div className="w-8 h-[2px] bg-black/70" />
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-4 text-gray-900 font-extrabold tracking-tight drop-shadow-sm">
            Find a Dealer Near You
          </h1>

          <p className="font-body text-gray-800 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-medium">
            Locate authorized KAAVERI Steels dealers and partners to get the
            quality products and services you need for your project.
          </p>
        </div>
      </div>

      {/* Dealers List Section */}
      <section className="px-6 py-12 md:py-20 max-w-7xl mx-auto w-full z-10 relative">
        {/* Filter Row */}
        <div className="mb-8 flex flex-col md:flex-row gap-6 items-center justify-between bg-white p-6 rounded-2xl shadow-md border border-gray-100">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <h3 className="font-heading text-2xl font-bold text-gray-900">Filter by City</h3>
            <button
              onClick={handleGetLocation}
              disabled={locating}
              className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 border border-red-100 rounded-lg font-semibold text-sm hover:bg-red-100 transition-colors disabled:opacity-50"
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
          <div className="lg:col-span-5 flex flex-col gap-4">
            {userLocation && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-xl shrink-0 shadow-sm">
                <p className="text-sm text-green-800 font-semibold flex items-center gap-2">
                  <LocateFixed className="w-5 h-5 shrink-0" />
                  <span className="truncate" title={userAddress}>
                    {userAddress ? `Near: ${userAddress}` : "Showing dealers near your location"}
                  </span>
                </p>
              </div>
            )}
            <div className="flex flex-col gap-4 max-h-[400px] lg:max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
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
            <>
            {filteredDealers.slice(0, visibleCount).map((dealer) => (
              <div
                key={dealer.id}
                onClick={() => {
                  setSelectedDealer(dealer);
                  if (window.innerWidth < 1024) {
                    document.getElementById("map-view")?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className={`cursor-pointer rounded-2xl border p-5 md:p-6 transition-all duration-300 ${
                  selectedDealer?.id === dealer.id
                    ? "border-red-600 bg-red-50 shadow-md ring-1 ring-red-600"
                    : "border-black/10 bg-white hover:shadow-lg hover:-translate-y-1 hover:border-black/20"
                }`}
              >
            <div className="flex justify-between items-start gap-2">
              <h3 className="font-heading text-xl md:text-2xl font-bold text-gray-900">
                {dealer.title}
              </h3>
              {dealer.distance !== null && dealer.distance !== undefined && (
                <span className="shrink-0 rounded-full bg-red-100 px-2.5 py-1 text-xs font-bold text-red-700">
                  {dealer.distance.toFixed(1)} km
                </span>
              )}
            </div>
                <div className="mt-4 space-y-3">
                  <div className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                    <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-red-600" />
                    <p className="font-medium leading-tight">{dealer.address}, {dealer.city}, {dealer.state}</p>
                  </div>
                  {dealer.phone && (
                    <div className="flex items-center gap-3 text-sm md:text-base text-gray-700">
                      <Phone className="w-5 h-5 shrink-0 text-red-600" />
                      <p className="font-medium">{dealer.phone}</p>
                    </div>
                  )}
                  {dealer.email && (
                    <div className="flex items-center gap-3 text-sm md:text-base text-gray-700">
                      <Mail className="w-5 h-5 shrink-0 text-red-600" />
                      <a href={`mailto:${dealer.email}`} className="font-medium hover:text-red-600 hover:underline transition-colors">{dealer.email}</a>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {visibleCount < filteredDealers.length && (
              <button
                onClick={() => setVisibleCount((prev) => prev + 50)}
                className="w-full py-3 mt-2 bg-red-50 border border-red-200 text-red-700 font-semibold rounded-xl hover:bg-red-100 transition-colors shrink-0"
              >
                Load More Dealers ({filteredDealers.length - visibleCount} remaining)
              </button>
            )}
            </>
          )}
            </div>
          </div>

          {/* Right Column: Google Map */}
          <div id="map-view" className="lg:col-span-7 h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl border border-black/10 relative bg-gray-200">
            <iframe
              key={activeMapUrl}
              src={activeMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={`absolute left-0 w-full ${activeMapUrl.includes('/d/embed') ? '-top-[60px] h-[calc(100%+60px)]' : 'top-0 h-full'}`}
              title="Dealer Location Map"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

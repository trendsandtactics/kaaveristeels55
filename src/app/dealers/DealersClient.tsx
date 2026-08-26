"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { MapPin, Phone, Mail, LocateFixed, Search, Navigation, X } from "lucide-react";
import Image from "next/image";
import { resolveMediaUrl } from "@/lib/media";

interface Dealer {
  id: number;
  title: string;
  address: string;
  city: string;
  taluka?: string;
  state: string;
  phone: string;
  email?: string;
  mapUrl?: string;
  latitude?: string;
  longitude?: string;
  coverImage?: string | null;
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

export default function DealersClient() {
  const [dealers, setDealers] = useState<Dealer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedCity, setSelectedCity] = useState<string>("All");
  const [selectedTaluka, setSelectedTaluka] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedDealer, setSelectedDealer] = useState<Dealer | null>(null);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [locating, setLocating] = useState(false);
  const [locationError, setLocationError] = useState("");
  const [visibleCount, setVisibleCount] = useState(50);
  const [userAddress, setUserAddress] = useState("");

  const [filterData, setFilterData] = useState<{
    cities: { name: string; count: number }[];
    talukas: { city: string; taluka: string; count: number }[];
    total: number;
  }>({ cities: [], talukas: [], total: 0 });

  // Load distinct cities and talukas from SQL
  const loadFilters = useCallback(async () => {
    try {
      const res = await fetch("/api/public/content/dealers?filters=true");
      if (!res.ok) return;
      const data = await res.json();
      if (data && Array.isArray(data.cities)) {
        setFilterData(data);
      }
    } catch {
      // Ignore filter load failure
    }
  }, []);

  useEffect(() => {
    loadFilters();
  }, [loadFilters]);

  // Fetch dealers strictly filtered via MySQL SQL queries
  const loadDealers = useCallback(async (city: string, taluka: string, q: string) => {
    try {
      setLoading(true);
      setError("");

      const params = new URLSearchParams();
      params.set("limit", "5000");
      if (city && city !== "All") params.set("city", city);
      if (taluka && taluka !== "All") params.set("taluka", taluka);
      if (q.trim()) params.set("q", q.trim());

      const res = await fetch(`/api/public/content/dealers?${params.toString()}`);
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
          title: item.title || "",
          address: item.short_description || "",
          city: (extra?.city || item.city || "").trim(),
          taluka: (extra?.taluka || extra?.taluk || item.taluka || item.taluk || "").trim(),
          state: (extra?.state || item.state || "").trim(),
          phone: extra?.phone || item.phone || "",
          email: extra?.email || item.email || "",
          mapUrl: extra?.map_url || item.map_url || "",
          latitude: extra?.latitude || item.latitude || "",
          longitude: extra?.longitude || item.longitude || "",
          coverImage: item.cover_image || null,
        };
      });

      setDealers(fetchedDealers);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Unable to fetch dealers."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  // Trigger SQL query whenever city, taluka, or search query changes
  useEffect(() => {
    const handler = setTimeout(() => {
      loadDealers(selectedCity, selectedTaluka, searchQuery);
    }, 150);
    return () => clearTimeout(handler);
  }, [loadDealers, selectedCity, selectedTaluka, searchQuery]);

  // Initial location detection: fast IP fallback + high accuracy GPS on mount
  useEffect(() => {
    let isMounted = true;

    // Fast IP geolocation fallback so shops sort by location immediately without waiting
    const fetchIpLocation = async () => {
      try {
        const res = await fetch("https://ipwho.is/", { cache: "no-store" });
        if (!res.ok) return;
        const data = await res.json();
        if (isMounted && data?.success && typeof data.latitude === "number" && typeof data.longitude === "number") {
          setUserLocation((prev) => prev ?? { lat: data.latitude, lng: data.longitude });
          const locStr = [data.city, data.region].filter(Boolean).join(", ");
          if (locStr) {
            setUserAddress((prev) => prev || locStr);
          }
        }
      } catch {
        // Ignore IP fallback error
      }
    };

    fetchIpLocation();

    // High accuracy GPS geolocation
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          if (!isMounted) return;
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          setUserLocation({ lat, lng });

          const address = await fetchShortAddress(lat, lng);
          if (isMounted && address) setUserAddress(address);
        },
        (err) => console.log("GPS Notice:", err?.message || err),
        { enableHighAccuracy: true, timeout: 8000, maximumAge: 300000 }
      );
    }

    return () => {
      isMounted = false;
    };
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
        setSelectedTaluka("All");
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

  // Reset selected dealer when city, taluka, or search query changes
  useEffect(() => {
    setSelectedDealer(null);
    setVisibleCount(50);
  }, [selectedCity, selectedTaluka, searchQuery]);

  useEffect(() => {
    setVisibleCount(50);
  }, [userLocation]);

  const cities = useMemo(() => {
    if (filterData.cities.length > 0) {
      return ["All", ...filterData.cities.map((c) => c.name)];
    }
    const uniqueCities = Array.from(
      new Set(dealers.map((d) => d.city?.trim()).filter(Boolean))
    );
    return ["All", ...uniqueCities.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }))];
  }, [dealers, filterData.cities]);

  const talukas = useMemo(() => {
    if (filterData.talukas.length > 0) {
      const pool =
        selectedCity === "All"
          ? filterData.talukas
          : filterData.talukas.filter(
              (t) => t.city.toLowerCase() === selectedCity.toLowerCase()
            );
      const uniqueTalukas = Array.from(
        new Set(pool.map((t) => t.taluka).filter(Boolean))
      );
      return ["All", ...uniqueTalukas.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }))];
    }
    const pool =
      selectedCity === "All"
        ? dealers
        : dealers.filter((d) => d.city.toLowerCase() === selectedCity.toLowerCase());

    const uniqueTalukas = Array.from(
      new Set(pool.map((d) => d.taluka?.trim()).filter(Boolean) as string[])
    );
    return ["All", ...uniqueTalukas.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }))];
  }, [dealers, selectedCity, filterData.talukas]);

  const filteredDealers = useMemo(() => {
    const withDistance = dealers.map((d) => {
      let distance: number | null = null;
      if (userLocation && d.latitude && d.longitude) {
        const lat = parseFloat(d.latitude);
        const lng = parseFloat(d.longitude);
        if (!isNaN(lat) && !isNaN(lng)) {
          distance = getDistance(userLocation.lat, userLocation.lng, lat, lng);
        }
      }
      return { ...d, distance };
    });

    if (userLocation) {
      withDistance.sort((a, b) => {
        const distA = a.distance !== null ? a.distance : Infinity;
        const distB = b.distance !== null ? b.distance : Infinity;
        if (distA !== distB) return distA - distB;
        return a.title.localeCompare(b.title);
      });
    }
    return withDistance;
  }, [dealers, userLocation]);

  const getDirectionsUrl = useCallback((dealer: Dealer) => {
    let destination = "";
    if (dealer.latitude && dealer.longitude) {
      destination = `${dealer.latitude},${dealer.longitude}`;
    } else if (dealer.mapUrl && !dealer.mapUrl.includes("embed")) {
      return dealer.mapUrl;
    } else {
      const locParts = [
        dealer.title,
        dealer.address,
        dealer.taluka ? `${dealer.taluka}${dealer.taluka.toLowerCase().includes("taluk") ? "" : " Taluk"}` : "",
        dealer.city,
        dealer.state,
      ].filter(Boolean);
      destination = locParts.join(", ");
    }

    let url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
    if (userLocation) {
      url += `&origin=${userLocation.lat},${userLocation.lng}`;
    }
    return url;
  }, [userLocation]);

  const activeMapUrl = useMemo(() => {
    const baseUrl = "https://www.google.com/maps/d/embed?mid=13I9QtlS8-FlaTl8_rKrwFdf1PsNWpW0&ehbc=2E312F&noprof=1";
    
    if (selectedDealer) {
      if (selectedDealer.latitude && selectedDealer.longitude) {
        return `${baseUrl}&ll=${selectedDealer.latitude},${selectedDealer.longitude}&z=16`;
      } else if (selectedDealer.mapUrl) {
        return selectedDealer.mapUrl;
      } else {
        return baseUrl;
      }
    } else if ((selectedCity !== "All" || selectedTaluka !== "All") && filteredDealers.length > 0) {
      const first = filteredDealers.find((d) => d.latitude && d.longitude);
      if (first && first.latitude && first.longitude) {
        return `${baseUrl}&ll=${first.latitude},${first.longitude}&z=12`;
      }
    } else if (userLocation) {
      return `${baseUrl}&ll=${userLocation.lat},${userLocation.lng}&z=12`;
    }
    
    return baseUrl;
  }, [selectedDealer, filteredDealers, selectedCity, selectedTaluka, userLocation]);

  return (
    <main className="flex flex-col min-h-screen w-full relative bg-white overflow-hidden transition-colors duration-500">
      {/* Hero Section */}
      <div className="w-full pt-32 pb-16 md:pt-36 md:pb-24 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 text-black relative overflow-hidden shadow-xl border-b border-black/10">
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
        {/* Filter & Search Controls */}
        <div className="mb-8 flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between bg-white p-6 rounded-2xl shadow-md border border-gray-100">
          {/* Search Box */}
          <div className="relative flex-1 min-w-[240px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dealer shop name, city, taluka, address..."
              className="w-full pl-11 pr-10 py-3 bg-gray-50 border border-black/15 rounded-xl outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 font-body text-sm font-medium transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1 rounded-full"
                title="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center flex-wrap">
            {/* Filter by City */}
            <div className="flex-1 sm:flex-initial min-w-[170px]">
              <select
                value={selectedCity}
                onChange={(e) => {
                  setSelectedCity(e.target.value);
                  setSelectedTaluka("All");
                }}
                className="w-full sm:w-48 border border-black/15 rounded-xl px-3.5 py-3 bg-gray-50 outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 font-body text-sm font-semibold transition-all shadow-sm cursor-pointer"
              >
                <option value="All">All Cities ({filterData.total || dealers.length})</option>
                {cities
                  .filter((c) => c !== "All")
                  .map((city) => {
                    const cityItem = filterData.cities.find(
                      (c) => c.name.toLowerCase() === city.toLowerCase()
                    );
                    const count = cityItem ? cityItem.count : dealers.filter(
                      (d) => d.city.toLowerCase() === city.toLowerCase()
                    ).length;
                    return (
                      <option key={city} value={city}>
                        {city} ({count})
                      </option>
                    );
                  })}
              </select>
            </div>

            {/* Filter by Taluka */}
            <div className="flex-1 sm:flex-initial min-w-[170px]">
              <select
                value={selectedTaluka}
                onChange={(e) => setSelectedTaluka(e.target.value)}
                className="w-full sm:w-48 border border-black/15 rounded-xl px-3.5 py-3 bg-gray-50 outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 font-body text-sm font-semibold transition-all shadow-sm cursor-pointer"
              >
                <option value="All">
                  All Talukas {talukas.filter((t) => t !== "All").length > 0 ? `(${talukas.filter((t) => t !== "All").length})` : ""}
                </option>
                {talukas
                  .filter((t) => t !== "All")
                  .map((taluka) => {
                    const talukaItem = filterData.talukas.find(
                      (t) =>
                        t.taluka.toLowerCase() === taluka.toLowerCase() &&
                        (selectedCity === "All" || t.city.toLowerCase() === selectedCity.toLowerCase())
                    );
                    const count = talukaItem
                      ? talukaItem.count
                      : dealers.filter(
                          (d) => (d.taluka || "").toLowerCase() === taluka.toLowerCase()
                        ).length;
                    return (
                      <option key={taluka} value={taluka}>
                        {taluka} ({count})
                      </option>
                    );
                  })}
              </select>
            </div>

            {/* Near Me Button */}
            <button
              onClick={handleGetLocation}
              disabled={locating}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-red-50 text-red-600 border border-red-100 rounded-xl font-semibold text-sm hover:bg-red-100 transition-colors disabled:opacity-50 shrink-0 shadow-sm"
              title="Find Dealers Near Me"
            >
              <LocateFixed className={`w-4 h-4 ${locating ? "animate-pulse" : ""}`} />
              {locating ? "Locating..." : "Near Me"}
            </button>
          </div>
        </div>
        {locationError && <p className="text-xs text-red-600 -mt-6 mb-6 text-right px-2">{locationError}</p>}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left Column: Dealers List Sidebar */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {userLocation && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-xl shrink-0 shadow-sm flex items-center justify-between gap-3">
                <p className="text-sm text-green-800 font-semibold flex items-center gap-2 truncate">
                  <LocateFixed className="w-5 h-5 shrink-0 text-green-700" />
                  <span className="truncate" title={userAddress || "Your location"}>
                    {userAddress ? `Nearest to: ${userAddress}` : "Showing shops sorted by distance from your location"}
                  </span>
                </p>
                <span className="shrink-0 text-xs font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded-md">
                  Location Active
                </span>
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
                  No dealers found matching your search.
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
                          ? "border-red-600 bg-red-50/70 shadow-md ring-1 ring-red-600"
                          : "border-black/10 bg-white hover:shadow-lg hover:-translate-y-1 hover:border-black/20"
                      }`}
                    >
                      {dealer.coverImage && (
                        <div className="relative w-full h-56 sm:h-64 mb-5 rounded-xl overflow-hidden shrink-0 border border-black/10">
                          <Image
                            src={resolveMediaUrl(dealer.coverImage, "/image/kaaveriabout.png")}
                            alt={dealer.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                        </div>
                      )}
                      <div className="flex justify-between items-start gap-2">
                        <h3 className="font-sans text-xl md:text-2xl font-bold text-gray-900">
                          {dealer.title}
                        </h3>
                        {dealer.distance !== null && dealer.distance !== undefined && (
                          <span className="shrink-0 inline-flex items-center gap-1 rounded-full bg-red-100 px-2.5 py-1 text-xs font-bold text-red-700 shadow-sm">
                            <Navigation className="w-3 h-3 text-red-600" />
                            {dealer.distance < 1 ? `${Math.round(dealer.distance * 1000)} m` : `${dealer.distance.toFixed(1)} km`}
                          </span>
                        )}
                      </div>
                      <div className="mt-4 space-y-3">
                        <div className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                          <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-red-600" />
                          <p className="font-medium leading-tight">
                            {[
                              dealer.address,
                              dealer.taluka ? `${dealer.taluka}${dealer.taluka.toLowerCase().includes("taluk") ? "" : " Taluk"}` : "",
                              dealer.city,
                              dealer.state,
                            ]
                              .filter(Boolean)
                              .join(", ")}
                          </p>
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

                      {/* Get Directions Button */}
                      <div className="mt-5 pt-4 border-t border-black/10 flex items-center justify-between gap-3">
                        <a
                          href={getDirectionsUrl(dealer)}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.98]"
                          title="Open Google Maps directions for this dealer"
                        >
                          <Navigation className="w-4 h-4" />
                          Get Directions
                        </a>
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

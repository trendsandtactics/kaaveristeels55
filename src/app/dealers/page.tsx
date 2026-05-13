"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import {
  MapPin,
  Phone,
  Mail,
  LocateFixed,
  Search,
} from "lucide-react";

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

function getDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) {
  const R = 6371;
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}

async function fetchShortAddress(lat: number, lng: number) {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
    );

    const data = await res.json();

    if (data?.address) {
      const {
        suburb,
        neighbourhood,
        city_district,
        city,
        town,
        village,
        state,
      } = data.address;

      const locality =
        neighbourhood || suburb || city_district || town || village;

      const region = city || state;

      return locality && region
        ? `${locality}, ${region}`
        : region || locality || "";
    }
  } catch (e) {
    console.error(e);
  }

  return "";
}

export default function DealersPage() {
  const [dealers, setDealers] = useState<Dealer[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCity, setSelectedCity] = useState("All");
  const [selectedDealer, setSelectedDealer] =
    useState<Dealer | null>(null);

  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const [userAddress, setUserAddress] = useState("");
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(20);

  const loadDealers = useCallback(async () => {
    try {
      setLoading(true);

      const res = await fetch(
        "/api/public/content/dealers?limit=5000",
        {
          cache: "no-store",
        }
      );

      const data = await res.json();

      const fetchedDealers: Dealer[] = (data.data || []).map(
        (item: any) => {
          let extra = item.extra_data;

          if (typeof extra === "string") {
            try {
              extra = JSON.parse(extra);
            } catch {
              extra = {};
            }
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
        }
      );

      setDealers(fetchedDealers);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadDealers();
  }, [loadDealers]);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        setUserLocation({ lat, lng });

        const address = await fetchShortAddress(lat, lng);

        setUserAddress(address);
      });
    }
  }, []);

  const handleGetLocation = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      setUserLocation({ lat, lng });

      const address = await fetchShortAddress(lat, lng);

      setUserAddress(address);
    });
  };

  const cities = useMemo(() => {
    const unique = Array.from(
      new Set(dealers.map((d) => d.city).filter(Boolean))
    );

    return ["All", ...unique.sort()];
  }, [dealers]);

  const filteredDealers = useMemo(() => {
    let result = dealers;

    if (selectedCity !== "All") {
      result = result.filter((d) => d.city === selectedCity);
    }

    if (search.trim()) {
      const q = search.toLowerCase();

      result = result.filter(
        (d) =>
          d.title.toLowerCase().includes(q) ||
          d.city.toLowerCase().includes(q) ||
          d.state.toLowerCase().includes(q)
      );
    }

    const mapped = result.map((dealer) => {
      let distance: number | null = null;

      if (
        userLocation &&
        dealer.latitude &&
        dealer.longitude
      ) {
        distance = getDistance(
          userLocation.lat,
          userLocation.lng,
          parseFloat(dealer.latitude),
          parseFloat(dealer.longitude)
        );
      }

      return {
        ...dealer,
        distance,
      };
    });

    mapped.sort((a: any, b: any) => {
      const distA = a.distance ?? Infinity;
      const distB = b.distance ?? Infinity;

      return distA - distB;
    });

    return mapped;
  }, [dealers, selectedCity, search, userLocation]);

  const activeMapUrl = useMemo(() => {
    const base =
      "https://www.google.com/maps/d/embed?mid=1rSs36GRxboJ0rm90vpd-HVfbWRNE_oM&ehbc=2E312F&noprof=1";

    if (
      selectedDealer?.latitude &&
      selectedDealer?.longitude
    ) {
      return `${base}&ll=${selectedDealer.latitude},${selectedDealer.longitude}&z=15`;
    }

    return base;
  }, [selectedDealer]);

  return (
    <main className="min-h-screen bg-[#fffdf8] overflow-hidden">

      {/* HERO */}

      <section className="relative overflow-hidden bg-gradient-to-br from-yellow-300 via-amber-200 to-yellow-100 pt-32 pb-24">

        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,#ffffff_0%,transparent_40%)]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          <div className="text-center max-w-4xl mx-auto">

            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/70 backdrop-blur-md text-sm font-bold text-amber-700 shadow-sm mb-6">
              <MapPin className="w-4 h-4" />
              Authorized Dealer Network
            </span>

            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
              Find Dealers
              <span className="block text-red-600">
                Near Your Location
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Explore trusted KAAVERI Steels dealers,
              distributors and partners across India.
            </p>

          </div>

        </div>
      </section>

      {/* CONTENT */}

      <section className="max-w-7xl mx-auto px-6 py-12">

        {/* FILTER */}

        <div className="sticky top-20 z-20 bg-white/90 backdrop-blur-xl border border-gray-200 shadow-xl rounded-3xl p-5 mb-10">

          <div className="flex flex-col xl:flex-row gap-4">

            {/* SEARCH */}

            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

              <input
                type="text"
                placeholder="Search dealer, city..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full h-14 rounded-2xl border border-gray-200 bg-gray-50 pl-12 pr-4 outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all"
              />
            </div>

            {/* CITY */}

            <select
              value={selectedCity}
              onChange={(e) =>
                setSelectedCity(e.target.value)
              }
              className="h-14 px-5 rounded-2xl border border-gray-200 bg-gray-50 min-w-[220px] outline-none focus:border-red-500"
            >
              {cities.map((city) => (
                <option key={city}>{city}</option>
              ))}
            </select>

            {/* LOCATION */}

            <button
              onClick={handleGetLocation}
              className="h-14 px-6 rounded-2xl bg-red-600 text-white font-bold hover:bg-red-700 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <LocateFixed className="w-5 h-5" />
              Near Me
            </button>
          </div>

          {userAddress && (
            <div className="mt-4 text-sm font-medium text-green-700 bg-green-50 border border-green-100 rounded-xl p-3">
              Showing nearby dealers from:
              <span className="font-bold ml-1">
                {userAddress}
              </span>
            </div>
          )}
        </div>

        {/* GRID */}

        <div className="grid lg:grid-cols-12 gap-8">

          {/* LIST */}

          <div className="lg:col-span-5">

            <div className="space-y-5 max-h-[850px] overflow-y-auto pr-2 custom-scrollbar">

              {loading ? (
                [...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="h-44 rounded-3xl bg-gray-100 animate-pulse"
                  />
                ))
              ) : (
                <>
                  {filteredDealers
                    .slice(0, visibleCount)
                    .map((dealer: any) => (
                      <div
                        key={dealer.id}
                        onClick={() =>
                          setSelectedDealer(dealer)
                        }
                        className={`group cursor-pointer rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                          selectedDealer?.id === dealer.id
                            ? "border-red-500 bg-red-50"
                            : "border-gray-200 bg-white"
                        }`}
                      >

                        <div className="flex items-start justify-between gap-4">

                          <div>
                            <h3 className="text-2xl font-black text-gray-900">
                              {dealer.title}
                            </h3>

                            <p className="text-sm text-gray-500 mt-1">
                              {dealer.city}, {dealer.state}
                            </p>
                          </div>

                          {dealer.distance && (
                            <span className="px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold">
                              {dealer.distance.toFixed(1)} km
                            </span>
                          )}
                        </div>

                        <div className="mt-5 space-y-4">

                          <div className="flex gap-3">
                            <MapPin className="w-5 h-5 text-red-600 shrink-0 mt-1" />
                            <p className="text-gray-700 leading-relaxed">
                              {dealer.address}
                            </p>
                          </div>

                          {dealer.phone && (
                            <div className="flex gap-3">
                              <Phone className="w-5 h-5 text-red-600 shrink-0" />
                              <p className="text-gray-700">
                                {dealer.phone}
                              </p>
                            </div>
                          )}

                          {dealer.email && (
                            <div className="flex gap-3">
                              <Mail className="w-5 h-5 text-red-600 shrink-0" />
                              <a
                                href={`mailto:${dealer.email}`}
                                className="text-gray-700 hover:text-red-600 transition-colors"
                              >
                                {dealer.email}
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}

                  {visibleCount <
                    filteredDealers.length && (
                    <button
                      onClick={() =>
                        setVisibleCount(
                          (prev) => prev + 20
                        )
                      }
                      className="w-full h-14 rounded-2xl bg-red-50 border border-red-100 text-red-600 font-bold hover:bg-red-100 transition-all"
                    >
                      Load More Dealers
                    </button>
                  )}
                </>
              )}
            </div>
          </div>

          {/* MAP */}

          <div className="lg:col-span-7">

            <div className="sticky top-28 rounded-[32px] overflow-hidden border border-gray-200 shadow-2xl h-[500px] lg:h-[850px] bg-gray-100">

              <iframe
                key={activeMapUrl}
                src={activeMapUrl}
                width="100%"
                height="100%"
                loading="lazy"
                style={{ border: 0 }}
                className="w-full h-full"
                title="Dealer Map"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

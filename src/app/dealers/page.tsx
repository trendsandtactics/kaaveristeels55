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

      if (locality && region && locality !== region) {
        return `${locality}, ${region}`;
      }

      return (
        locality ||
        region ||
        city ||
        state ||
        data.display_name?.split(",")[0] ||
        ""
      );
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

  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const [locating, setLocating] = useState(false);
  const [locationError, setLocationError] = useState("");
  const [visibleCount, setVisibleCount] = useState(50);
  const [userAddress, setUserAddress] = useState("");

  const loadDealers = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(
        "/api/public/content/dealers?limit=5000",
        {
          cache: "no-store",
        }
      );

      if (!res.ok) throw new Error("Failed to fetch dealers.");

      const data = await res.json();

      const fetchedDealers: Dealer[] = (data.data || []).map(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to fetch dealers."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadDealers();
  }, [loadDealers]);

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
        (err) => console.log(err)
      );
    }
  }, []);

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      setLocationError(
        "Geolocation is not supported by your browser."
      );

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

  useEffect(() => {
    setSelectedDealer(null);
    setVisibleCount(50);
  }, [selectedCity]);

  const cities = useMemo(() => {
    const uniqueCities = Array.from(
      new Set(
        dealers.map((d) => d.city).filter(Boolean)
      )
    );

    return ["All", ...uniqueCities.sort()];
  }, [dealers]);

  const filteredDealers = useMemo(() => {
    let result = dealers;

    if (selectedCity !== "All") {
      result = result.filter(
        (d) => d.city === selectedCity
      );
    }

    const withDistance = result.map((d) => {
      let distance: number | null = null;

      if (
        userLocation &&
        d.latitude &&
        d.longitude
      ) {
        const lat = parseFloat(d.latitude);
        const lng = parseFloat(d.longitude);

        if (lat && lng) {
          distance = getDistance(
            userLocation.lat,
            userLocation.lng,
            lat,
            lng
          );
        }
      }

      return {
        ...d,
        distance,
      };
    });

    if (userLocation) {
      withDistance.sort((a, b) => {
        const distA =
          a.distance !== null
            ? a.distance
            : Infinity;

        const distB =
          b.distance !== null
            ? b.distance
            : Infinity;

        return distA - distB;
      });
    }

    return withDistance;
  }, [dealers, selectedCity, userLocation]);

  const activeMapUrl = useMemo(() => {
    const baseUrl =
      "https://www.google.com/maps/d/embed?mid=1rSs36GRxboJ0rm90vpd-HVfbWRNE_oM&ehbc=2E312F&noprof=1";

    if (selectedDealer) {
      if (
        selectedDealer.latitude &&
        selectedDealer.longitude
      ) {
        return `${baseUrl}&ll=${selectedDealer.latitude},${selectedDealer.longitude}&z=16`;
      }

      if (selectedDealer.mapUrl) {
        return selectedDealer.mapUrl;
      }
    }

    if (userLocation) {
      return `${baseUrl}&ll=${userLocation.lat},${userLocation.lng}&z=11`;
    }

    return baseUrl;
  }, [selectedDealer, userLocation]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f5f5f5]">
      {/* TOP YELLOW GRADIENT BACKGROUND */}
      <div className="absolute top-0 left-0 w-full h-[420px] bg-gradient-to-r from-[#f7b500] via-[#ffd500] to-[#f7b500] -z-10" />

      {/* LIGHT GRID EFFECT */}
      <div className="absolute top-0 left-0 w-full h-[420px] opacity-20 -z-10 bg-[linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[size:35px_35px]" />

      {/* HERO SECTION */}
      <section className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-10 h-[2px] bg-black/70" />

            <p className="uppercase tracking-[4px] text-sm font-bold text-black/80">
              Our Network
            </p>

            <div className="w-10 h-[2px] bg-black/70" />
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-[#111] leading-tight">
            Find a Dealer Near You
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-black/75 font-medium leading-relaxed">
            Locate authorized KAAVERI Steels dealers and
            partners to get the quality products and
            services you need for your project.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        {/* FILTER */}
        <div className="bg-white rounded-[28px] shadow-lg border border-gray-100 p-6 md:p-8 mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div className="flex items-center gap-4 flex-wrap">
            <h2 className="text-3xl font-black text-[#111]">
              Filter by City
            </h2>

            <button
              onClick={handleGetLocation}
              disabled={locating}
              className="flex items-center gap-2 px-5 py-3 rounded-xl border border-red-100 bg-red-50 text-red-600 font-bold hover:bg-red-100 transition-all"
            >
              <LocateFixed
                className={`w-4 h-4 ${
                  locating ? "animate-pulse" : ""
                }`}
              />

              {locating ? "Locating..." : "Near Me"}
            </button>
          </div>

          <div className="w-full md:w-[300px]">
            <select
              value={selectedCity}
              onChange={(e) =>
                setSelectedCity(e.target.value)
              }
              className="w-full rounded-2xl border border-gray-200 bg-[#fafafa] px-5 py-4 font-semibold outline-none focus:ring-2 focus:ring-red-500"
            >
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>

            {locationError && (
              <p className="text-red-600 text-sm mt-2">
                {locationError}
              </p>
            )}
          </div>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* LEFT SIDE */}
          <div className="lg:col-span-5">
            {userLocation && (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-4 mb-5">
                <p className="flex items-center gap-2 text-green-800 font-semibold">
                  <LocateFixed className="w-5 h-5" />

                  {userAddress
                    ? `Near: ${userAddress}`
                    : "Showing nearby dealers"}
                </p>
              </div>
            )}

            <div className="space-y-5 max-h-[800px] overflow-y-auto pr-2">
              {loading ? (
                <div className="bg-white rounded-2xl p-10 text-center font-semibold">
                  Loading dealers...
                </div>
              ) : error ? (
                <div className="bg-white rounded-2xl p-10 text-center text-red-600 font-semibold">
                  {error}
                </div>
              ) : filteredDealers.length === 0 ? (
                <div className="bg-white rounded-2xl p-10 text-center font-semibold">
                  No dealers found.
                </div>
              ) : (
                <>
                  {filteredDealers
                    .slice(0, visibleCount)
                    .map((dealer) => (
                      <div
                        key={dealer.id}
                        onClick={() =>
                          setSelectedDealer(dealer)
                        }
                        className={`bg-white border rounded-[24px] p-6 cursor-pointer transition-all duration-300 ${
                          selectedDealer?.id === dealer.id
                            ? "border-red-500 shadow-xl"
                            : "border-gray-100 hover:shadow-lg hover:-translate-y-1"
                        }`}
                      >
                        <div className="flex justify-between gap-4">
                          <h3 className="text-3xl font-black text-[#111] leading-tight">
                            {dealer.title}
                          </h3>

                          {dealer.distance !== null && (
                            <div className="bg-red-100 text-red-700 text-sm font-bold px-3 py-1 rounded-full whitespace-nowrap">
                              {dealer.distance.toFixed(1)} km
                            </div>
                          )}
                        </div>

                        <div className="mt-5 space-y-4">
                          <div className="flex items-start gap-3 text-gray-700">
                            <MapPin className="w-5 h-5 text-red-600 mt-1 shrink-0" />

                            <p className="font-medium leading-relaxed">
                              {dealer.address},{" "}
                              {dealer.city},{" "}
                              {dealer.state}
                            </p>
                          </div>

                          {dealer.phone && (
                            <div className="flex items-center gap-3 text-gray-700">
                              <Phone className="w-5 h-5 text-red-600 shrink-0" />

                              <p className="font-medium">
                                {dealer.phone}
                              </p>
                            </div>
                          )}

                          {dealer.email && (
                            <div className="flex items-center gap-3 text-gray-700">
                              <Mail className="w-5 h-5 text-red-600 shrink-0" />

                              <a
                                href={`mailto:${dealer.email}`}
                                className="font-medium hover:text-red-600"
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
                          (prev) => prev + 50
                        )
                      }
                      className="w-full bg-white border border-gray-200 rounded-2xl py-4 font-bold hover:bg-gray-50 transition-all"
                    >
                      Load More
                    </button>
                  )}
                </>
              )}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[30px] shadow-xl border border-gray-100 overflow-hidden p-4">
              <div className="rounded-[24px] overflow-hidden h-[700px] bg-gray-100">
                <iframe
                  key={activeMapUrl}
                  src={activeMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="Dealer Map"
                />
              </div>

              {userLocation && (
                <div className="mt-5 border border-gray-100 rounded-2xl p-5">
                  <div className="flex items-start gap-3">
                    <LocateFixed className="w-5 h-5 text-green-600 mt-1" />

                    <div>
                      <p className="font-bold text-lg text-[#111]">
                        Using your location
                      </p>

                      <p className="text-gray-600 mt-1">
                        {userAddress}
                      </p>

                      <button
                        onClick={handleGetLocation}
                        className="mt-4 text-red-600 font-bold hover:underline"
                      >
                        Update Location
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

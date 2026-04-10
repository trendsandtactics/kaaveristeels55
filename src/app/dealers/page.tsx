"use client";

import { useState, useEffect, useCallback } from "react";

interface Dealer {
  id: number;
  title: string;
  address: string;
  city: string;
  state: string;
  phone: string;
  email?: string;
  mapUrl?: string;
}

export default function DealersPage() {
  const [dealers, setDealers] = useState<Dealer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  return (
    <main className="min-h-screen bg-[#f6f6f6]">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 py-16 sm:py-24 md:py-32 text-black shadow-lg">
        <div className="pointer-events-none absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <div className="mb-4 sm:mb-6 flex items-center justify-center gap-2 sm:gap-4">
            <div className="h-[2px] w-8 sm:w-12 bg-black" />
            <h1 className="font-body text-xs sm:text-sm font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-black">
              Our Network
            </h1>
            <div className="h-[2px] w-8 sm:w-12 bg-black" />
          </div>

          <h2 className="font-heading text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Find a Dealer Near You
          </h2>

          <p className="mx-auto mt-4 sm:mt-6 max-w-3xl text-sm sm:text-base leading-relaxed text-black/75 md:text-lg">
            Locate authorized KAAVERI Steels dealers and partners to get the
            quality products and services you need for your project.
          </p>
        </div>
      </section>

      {/* Dealers List Section */}
      <section className="px-4 py-10 sm:py-14 md:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-[1600px]">
          {loading ? (
            <p className="py-12 sm:py-20 text-center text-sm sm:text-base text-black/60">
              Loading dealers...
            </p>
          ) : error ? (
            <p className="py-12 sm:py-20 text-center text-sm sm:text-base text-red-600">{error}</p>
          ) : dealers.length === 0 ? (
            <p className="py-12 sm:py-20 text-center text-sm sm:text-base text-black/60">
              No dealers available yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {dealers.map((dealer) => (
                <div
                  key={dealer.id}
                  className="rounded-[20px] sm:rounded-[30px] border border-black/10 bg-white p-5 sm:p-6 md:p-8 shadow-[0_8px_25px_rgba(0,0,0,0.04)] sm:shadow-[0_12px_35px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)]"
                >
                  <h3 className="font-heading text-lg sm:text-xl font-semibold text-black md:text-2xl">
                    {dealer.name}
                  </h3>
                  <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-black/70 md:text-base">
                    {dealer.address},<br />
                    {dealer.city}, {dealer.state} {dealer.zip}
                  </p>
                  <div className="mt-5 sm:mt-6 border-t border-black/10 pt-5 sm:pt-6">
                    <p className="text-xs sm:text-sm text-black/70 md:text-base">
                      <strong>Phone:</strong> {dealer.phone}
                    </p>
                    {dealer.email && (
                      <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-black/70 md:text-base break-words">
                        <strong>Email:</strong>{" "}
                        <a
                          href={`mailto:${dealer.email}`}
                          className="text-accent-yellow hover:underline"
                        >
                          {dealer.email}
                        </a>
                      </p>
                    )}
                    {dealer.website && (
                      <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-black/70 md:text-base break-words">
                        <strong>Website:</strong>{" "}
                        <a
                          href={`https://${dealer.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent-yellow hover:underline"
                        >
                          {dealer.website}
                        </a>
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

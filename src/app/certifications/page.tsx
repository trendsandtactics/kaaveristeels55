"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";

type Certification = {
  id: number;
  title: string;
  description: string;
  issuedBy: string;
  issueDate: string | null;
  createdAt: string;
  fileUrl?: string;
  fileName?: string | null;
  fileType?: string | null;
};

export default function CertificationsPage() {
  const [items, setItems] = useState<Certification[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedCertificate, setSelectedCertificate] = useState<{
    title: string;
    fileUrl: string;
  } | null>(null);

  const loadItems = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("/api/certifications", {
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("Unable to fetch certificates.");
      }

      const data = await response.json();
      setItems(data.certifications ?? []);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Unable to fetch certificates."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadItems();
  }, [loadItems]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedCertificate(null);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const imageItems = useMemo(() => {
    return items.filter((item) => {
      const fileUrl = item.fileUrl || `/api/certifications/${item.id}/file`;
      return (
        item.fileType?.startsWith("image/") ||
        /\.(png|jpg|jpeg|webp|gif|bmp|svg)$/i.test(item.fileName || fileUrl)
      );
    });
  }, [items]);

  return (
    <main className="min-h-screen bg-[#f6f6f6]">
      {/* Hero Section (UNCHANGED) */}
      <section className="relative w-full overflow-hidden bg-gradient-to-r from-accent-yellow via-[#FFD700] to-accent-yellow pt-28 pb-6 md:pt-32 md:pb-8 text-black shadow-2xl">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_60%)] mix-blend-overlay" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 mix-blend-overlay" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <div className="mb-4 flex items-center justify-center gap-4">
            <div className="h-[2px] w-12 bg-black" />
            <h1 className="font-body text-sm font-bold uppercase tracking-[0.2em] text-black">
              Verified Certificates
            </h1>
            <div className="h-[2px] w-12 bg-black" />
          </div>

          <h2 className="font-heading text-4xl leading-tight md:text-6xl">
            Trusted Quality.
            <br />
            Proven Standards.
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-black/75 md:text-lg">
            Explore KAAVERI certifications published directly from the admin
            panel for complete public transparency, trust, and quality
            assurance.
          </p>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="px-4 py-14 md:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-[1600px]">
          {loading ? (
            <p className="py-20 text-center text-base text-black/60">
              Loading certificates...
            </p>
          ) : error ? (
            <p className="py-20 text-center text-base text-red-600">{error}</p>
          ) : imageItems.length === 0 ? (
            <p className="py-20 text-center text-base text-black/60">
              No certificate images available yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
              {imageItems.map((item) => {
                const fileUrl =
                  item.fileUrl || `/api/certifications/${item.id}/file`;

                return (
                  <article
                    key={item.id}
                    className="flex h-full flex-col rounded-[30px] border border-black/10 bg-white p-6 shadow-[0_12px_35px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)]"
                  >
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <h3 className="font-heading text-xl leading-snug text-black md:text-2xl">
                        {item.title}
                      </h3>
                    </div>

                    {/* DESCRIPTION REMOVED */}

                    <button
                      type="button"
                      onClick={() =>
                        setSelectedCertificate({
                          title: item.title,
                          fileUrl,
                        })
                      }
                      className="flex flex-1 items-center justify-center rounded-[24px] border border-black/10 bg-[#fafafa] p-4 text-left transition hover:border-black/20 hover:shadow-md md:p-5"
                    >
                      <img
                        src={fileUrl}
                        alt={item.title}
                        className="block h-auto max-h-[620px] w-full rounded-2xl object-contain"
                        loading="lazy"
                      />
                    </button>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* MODAL FIXED */}
      {selectedCertificate && (
        <div className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center">
          {/* Close */}
          <button
            type="button"
            onClick={() => setSelectedCertificate(null)}
            className="absolute top-6 right-6 text-white text-2xl font-bold z-10"
          >
            ✕
          </button>

          {/* Full Image */}
          <img
            src={selectedCertificate.fileUrl}
            alt={selectedCertificate.title}
            className="max-h-[95vh] max-w-[95vw] object-contain"
          />
        </div>
      )}
    </main>
  );
}

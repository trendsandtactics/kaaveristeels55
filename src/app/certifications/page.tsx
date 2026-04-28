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
      {/* Hero */}
      <section className="relative w-full bg-gradient-to-r from-accent-yellow via-[#FFD700] to-accent-yellow pt-28 pb-6 text-black text-center">
        <h2 className="text-4xl md:text-6xl font-bold">
          Trusted Quality.
        </h2>
      </section>

      {/* Grid */}
      <section className="px-4 py-14">
        <div className="mx-auto max-w-[1400px]">
          {loading ? (
            <p className="text-center py-20">Loading...</p>
          ) : error ? (
            <p className="text-center text-red-600 py-20">{error}</p>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {imageItems.map((item) => {
                const fileUrl =
                  item.fileUrl || `/api/certifications/${item.id}/file`;

                return (
                  <article
                    key={item.id}
                    className="bg-white p-6 rounded-2xl shadow"
                  >
                    {/* TITLE ONLY */}
                    <h3 className="text-xl font-semibold mb-4">
                      {item.title}
                    </h3>

                    <button
                      onClick={() =>
                        setSelectedCertificate({
                          title: item.title,
                          fileUrl,
                        })
                      }
                    >
                      <img
                        src={fileUrl}
                        alt={item.title}
                        className="w-full rounded-lg"
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
        <div className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center">
          {/* CLOSE BUTTON */}
          <button
            onClick={() => setSelectedCertificate(null)}
            className="absolute top-6 right-6 text-white text-2xl"
          >
            ✕
          </button>

          {/* IMAGE FULL WIDTH */}
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

"use client";

import { useEffect, useState } from "react";
import { resolveMediaUrl } from "@/lib/media";

type PopupItem = {
  id: number;
  title: string;
  cover_image?: string | null;
  file_url?: string | null;
};

let cachedPopup: PopupItem | null | undefined = undefined;

export default function PopupRenderer() {
  const [popup, setPopup] = useState<PopupItem | null>(null);
  const [open, setOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  const isPdf = imageSrc.toLowerCase().includes(".pdf");

  useEffect(() => {
    if (cachedPopup !== undefined) {
      if (cachedPopup) {
        setPopup(cachedPopup);
        setImageSrc(resolveMediaUrl(cachedPopup.file_url || cachedPopup.cover_image || "", ""));
        setOpen(true);
      }
    }

    fetch("/api/public/content/popups?limit=1", { cache: "no-cache" })
      .then((res) => res.json())
      .then((data) => {
        const item = (data.data ?? [])[0];
        cachedPopup = item || null;
        if (item) {
          setPopup(item);
          setImageSrc(
            resolveMediaUrl(item.file_url || item.cover_image || "", "")
          );
          setOpen(true);
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!popup || !open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-[2px] flex items-center justify-center p-2 sm:p-6 overflow-hidden"
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpen(false);
      }}
    >
      <div className="relative w-full h-full max-w-5xl flex items-center justify-center">

        {/* Close button on image */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-2 right-2 z-[120] h-9 w-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center"
        >
          ✕
        </button>

        {isPdf ? (
          <iframe
            src={imageSrc}
            className="w-full h-full max-h-[90vh] rounded-xl bg-white shadow-2xl"
          />
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={imageSrc}
            alt={popup.title || "Popup"}
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-xl shadow-2xl"
          />
        )}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { resolveMediaUrl } from "@/lib/media";

type PopupItem = {
  id: number;
  title: string;
  cover_image?: string | null;
  file_url?: string | null;
};

export default function PopupRenderer() {
  const [popup, setPopup] = useState<PopupItem | null>(null);
  const [open, setOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  const isPdf = imageSrc.toLowerCase().includes(".pdf");

  useEffect(() => {
    fetch("/api/public/content/popups?limit=1", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        const item = (data.data ?? [])[0];
        if (item) {
          setPopup(item);
          setImageSrc(
            resolveMediaUrl(
              item.file_url || item.cover_image || "",
              ""
            )
          );
          setOpen(true);
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

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
      <button
        onClick={() => setOpen(false)}
        aria-label="Close popup"
        className="
          absolute
          top-3
          right-3
          md:top-5
          md:right-5
          z-[110]
          h-10
          w-10
          rounded-full
          bg-white/10
          hover:bg-white/20
          text-white
          flex
          items-center
          justify-center
          text-xl
          leading-none
          shadow-lg
          transition-colors
        "
      >
        ✕
      </button>

      <div className="relative w-full h-full max-w-5xl flex items-center justify-center pointer-events-none">
        {isPdf ? (
          <iframe
            src={imageSrc}
            title="Certificate"
            className="w-full h-full max-h-[90vh] rounded-xl bg-white shadow-2xl pointer-events-auto"
          />
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={imageSrc}
            alt={popup.title || "Popup"}
            className="max-w-full max-h-full object-contain drop-shadow-2xl pointer-events-auto"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        )}
      </div>
    </div>
  );
}

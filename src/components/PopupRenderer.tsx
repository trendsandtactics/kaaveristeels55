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
              item.file_url ?? item.cover_image,
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
    <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-[2px] flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full flex items-center justify-center">
        <div
          className="
            relative
            w-full
            max-w-[340px]
            sm:max-w-[420px]
            md:max-w-[500px]
            lg:max-w-[560px]
            xl:max-w-[620px]
          "
        >
          <button
            onClick={() => setOpen(false)}
            aria-label="Close popup"
            className="
              absolute
              top-2
              right-2
              sm:top-3
              sm:right-3
              z-20
              h-10
              w-10
              rounded-full
              bg-black/85
              text-white
              flex
              items-center
              justify-center
              text-xl
              leading-none
              shadow-lg
            "
          >
            ✕
          </button>

          <div
            className="w-full overflow-hidden rounded-2xl bg-white shadow-2xl"
            style={{ aspectRatio: "210 / 297" }}
          >
            {isPdf ? (
              <iframe
                src={imageSrc}
                title="Certificate"
                className="h-full w-full bg-white"
              />
            ) : (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageSrc}
              alt={popup.title || "Popup"}
              className="h-full w-full object-contain bg-white"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

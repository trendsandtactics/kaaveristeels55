"use client";

import { useEffect } from "react";

export default function AdBanner() {
  useEffect(() => {
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  return (
    <div className="w-full flex justify-center my-4 overflow-hidden z-10 relative">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-5730269879836007"
        data-ad-slot="5744753050"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
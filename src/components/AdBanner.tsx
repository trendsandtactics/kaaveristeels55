"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AdBanner() {
  const pathname = usePathname();

  useEffect(() => {
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, [pathname]); // Re-run ad initialization when the route changes

  return (
    <div key={pathname} className="w-full flex justify-center py-6 bg-gray-50 border-t border-black/5 overflow-hidden z-10 relative">
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
"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";

const approvals = [
  { name: "L&T", logo: "/clients/lt.png" },
  { name: "JSW", logo: "/clients/jsw.png" },
  { name: "TATA", logo: "/clients/tata.png" },
  { name: "NTPC", logo: "/clients/ntpc.png" },
  { name: "BHEL", logo: "/clients/bhel.png" },
  { name: "SAIL", logo: "/clients/sail.png" },
  { name: "CPWD", logo: "/clients/cpwd.png" },
  { name: "MES", logo: "/clients/mes.png" },
  { name: "IO", logo: "/clients/io.png" },
  { name: "HP", logo: "/clients/hp.png" },
];

export default function AboutContent() {
  return (
    <section className="w-full bg-gray-50 pb-16 md:pb-24">
      {/* ... other content ... */}

      {/* Trust Strip - This is where the auto-scrolling logos are */}
      <div className="w-full px-4 sm:px-8 lg:px-10 xl:px-12 2xl:px-24 mt-12 lg:mt-16 2xl:mt-20">
        <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-lg bg-white flex flex-col lg:flex-row">
          {/* Left Box */}
          <div className="lg:w-40 xl:w-48 2xl:w-72 bg-gradient-to-r from-red-700 to-red-600 text-white flex items-center justify-center p-4 lg:p-4 xl:p-6 2xl:p-8 shrink-0">
            <div className="flex items-center gap-2 xl:gap-3">
              <ShieldCheck className="w-5 h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7" />
              <span className="uppercase tracking-wider font-bold text-sm xl:text-base 2xl:text-lg">
                Trusted By
              </span>
            </div>
          </div>

          {/* Middle - Auto-scrolling Logos */}
          <div className="flex-1 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_48px,_black_calc(100%-48px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll">
              {[...approvals, ...approvals].map((item, index) => (
                <li key={`${item.name}-${index}`} className="flex flex-col items-center justify-center w-32">
                  <div className="relative h-16 w-full">
                    <Image
                      src={item.logo}
                      alt={item.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="mt-2 text-xs text-center font-semibold text-gray-600">
                     {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

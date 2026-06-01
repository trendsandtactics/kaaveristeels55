"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function GreenSteel() {
  return (
    <section className="relative w-full bg-[#f8f9fa] py-10 sm:py-12 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center gap-8 sm:gap-12 lg:gap-16">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-[55%]"
        >

          <div className="flex items-center gap-6 mb-8">
            <div className="relative w-20 h-12 sm:w-24 sm:h-16 lg:w-32 lg:h-20">
              <Image
                src="/image/Ministry_of_Steel_India.svg"
                alt="Ministry of Steel"
                fill
                className="object-contain"
              />
            </div>

            <div className="h-10 w-[2px] bg-gray-300" />

            <div className="relative w-32 h-10 sm:w-40 sm:h-12 lg:w-56 lg:h-16">
              <Image
                src="/image/kaaveriwbg.png"
                alt="KAAVERI"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-gray-800">
            Officially
          </h2>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-[#3b8226] mb-6">
            Certified
          </h2>

          <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-medium text-gray-800 mb-4">
            Kaaveri TMT Bars Officially Certified As Green Steel
          </h3>

          <div className="flex gap-1 mb-4">
            {[1,2,3,4,5].map((star)=>(
              <svg key={star} className="w-5 h-5 text-[#caa74a]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            ))}
          </div>

          <p className="text-gray-600 mb-4 text-sm sm:text-base">
            5-Star Rated Green TMT Bars with verified low carbon emissions.
            Committed to building eco-friendly structures and a sustainable future for India.
          </p>

          <p className="text-gray-800 text-sm sm:text-base">
            Thank you for trusting Kaaveri. Together we build responsibly.
          </p>

        </motion.div>


        {/* RIGHT CERTIFICATE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-[45%] flex justify-center mt-8 md:mt-0"
        >

          {/* LIMIT CERTIFICATE SIZE */}
          <div className="max-w-md w-full">
            <Image
              src="/Green.jpg"
              alt="Green Steel Certificate"
              width={800}
              height={1100}
              className="w-full h-auto object-contain shadow-lg rounded-md"
              priority
            />
          </div>

        </motion.div>

      </div>
    </section>
  );
}

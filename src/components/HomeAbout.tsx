"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomeAbout() {
  const [playVideo, setPlayVideo] = useState(false);
  const [thumbError, setThumbError] = useState(false);

  const youtubeVideoId = "OFUDOvewAG8";
  const localThumbnail = "/image/video-thumbnail.jpg";
  const fallbackThumbnail = `https://img.youtube.com/vi/${youtubeVideoId}/maxresdefault.jpg`;

  return (
    <section className="relative w-full py-16 px-6 md:px-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/aboutbackground.png"
          alt="Background Pattern"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-white/75 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16 relative z-10">
        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 relative"
        >
          <div className="relative w-full aspect-video bg-black rounded-sm overflow-hidden shadow-2xl">
            {playVideo ? (
              <iframe
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&controls=1&rel=0`}
                title="KAAVERI TMT Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            ) : (
              <div
                className="absolute inset-0 cursor-pointer group"
                onClick={() => setPlayVideo(true)}
              >
                {!thumbError ? (
                  <Image
                    src={localThumbnail}
                    alt="Video Thumbnail"
                    fill
                    priority
                    className="object-cover scale-100 group-hover:scale-105 transition duration-500"
                    onError={() => setThumbError(true)}
                  />
                ) : (
                  <Image
                    src={fallbackThumbnail}
                    alt="YouTube Video Thumbnail"
                    fill
                    unoptimized
                    className="object-cover scale-100 group-hover:scale-105 transition duration-500"
                  />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition duration-300" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-accent-red rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition duration-300">
                    <span className="text-white text-xl md:text-2xl ml-1">▶</span>
                  </div>
                </div>
              </div>
            )}

            {/* Border */}
            <div className="absolute inset-0 border-[6px] md:border-8 border-white/20 pointer-events-none z-20" />
          </div>

          {/* Clean Border Effect Only */}
          <div className="hidden md:block absolute -right-6 -bottom-6 w-full h-full border-2 border-accent-red/20 -z-10 rounded-sm" />
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full md:w-1/2 flex flex-col items-start"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-accent-red" />
            <h2 className="font-body text-accent-red uppercase tracking-[0.2em] font-bold text-sm">
              About KAAVERI
            </h2>
          </div>

          <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight">
            Strength That
            <br />
            <span className="text-accent-red">Supports The Future</span>
          </h3>

          <p className="font-body text-foreground/80 text-lg leading-relaxed mb-6 font-medium">
            At KAAVERI, we are passionate about steel and dedicated to
            excellence. As a leading manufacturer of TMT bars and structural
            steel products, we are committed to providing the construction
            industry with the highest quality materials that ensure strength,
            safety, and sustainability.
          </p>

          <p className="font-body text-foreground/80 text-lg leading-relaxed mb-10 font-medium">
            Our state-of-the-art manufacturing processes and rigorous quality
            control ensure that every product leaving our facility meets the
            highest global standards, empowering builders to create structures
            that stand the test of time.
          </p>

          <Link href="/about-us">
            <button className="relative px-8 py-4 bg-accent-red text-white font-body text-xs md:text-sm uppercase tracking-[0.2em] font-bold overflow-hidden group border-2 border-accent-red shadow-lg">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-accent-red">
                Discover Our Story
              </span>
              <div className="absolute inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 z-0" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

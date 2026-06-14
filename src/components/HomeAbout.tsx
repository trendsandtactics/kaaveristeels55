"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Play,
  ArrowRight,
  Download,
  ShieldCheck,
  Building2,
  HardHat,
  Factory,
  Award,
  BadgeCheck,
} from "lucide-react";

export default function HomeAbout() {
  const [playVideo, setPlayVideo] = useState(false);
  const [youtubeVideoId, setYoutubeVideoId] = useState("OFUDOvewAG8");
  const [thumbnailUrl, setThumbnailUrl] = useState("/image/about-video.jpg");

  useEffect(() => {
    fetch("/api/public/content/aboutUs?limit=1")
      .then((res) => res.json())
      .then((data) => {
        const item = data.data?.[0];

        if (item?.video_url) {
          let id = item.video_url;

          const regExp =
            /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;

          const match = id.match(regExp);

          if (match && match[2].length === 11) {
            id = match[2];
          }

          setYoutubeVideoId(id);
          setThumbnailUrl(
            `https://img.youtube.com/vi/${id}/maxresdefault.jpg`
          );
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#f8f8f8] py-16 lg:py-24">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('/image/aboutbackground.png')] bg-cover bg-center opacity-10" />

      <div className="relative z-10 max-w-[1700px] mx-auto">
        <div className="grid lg:grid-cols-[45%_55%] min-h-[850px]">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden"
            style={{
              clipPath:
                "polygon(0 0, 85% 0, 100% 55%, 75% 100%, 0 100%)",
            }}
          >
            {playVideo ? (
              <iframe
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`}
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            ) : (
              <>
                <Image
                  src={thumbnailUrl}
                  alt="Kaaveri Steel"
                  fill
                  priority
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/40" />

                {/* Tagline */}
                <div className="absolute top-16 left-10 z-20">
                  <div className="w-14 h-[3px] bg-red-600 mb-5" />

                  <h4 className="text-white uppercase tracking-[4px] text-sm font-semibold leading-7">
                    MAKING INDIA
                    <br />
                    STRONGER
                  </h4>
                </div>

                {/* Play Button */}
                <button
                  onClick={() => setPlayVideo(true)}
                  className="absolute inset-0 flex items-center justify-center z-20"
                >
                  <div className="w-32 h-32 border-[4px] border-white rounded-full flex items-center justify-center backdrop-blur-sm">
                    <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center">
                      <Play
                        className="text-white ml-1"
                        size={30}
                        fill="white"
                      />
                    </div>
                  </div>
                </button>

                <div className="absolute bottom-28 left-1/2 -translate-x-1/2 text-white font-semibold uppercase tracking-widest text-sm">
                  Watch Our Story
                </div>
              </>
            )}
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-white px-8 lg:px-20 py-16 lg:py-24"
          >
            {/* Heading Label */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-[2px] bg-red-600" />

              <span className="uppercase tracking-[4px] text-red-600 font-bold text-sm">
                About Kaaveri
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-5xl md:text-6xl xl:text-7xl font-black leading-[0.95] text-slate-900">
              Strength That
              <span className="block text-red-600 mt-2">
                Shapes The Future
              </span>
            </h2>

            <div className="w-28 h-[3px] bg-gray-200 mt-8 mb-10 relative">
              <div className="absolute left-0 top-0 w-10 h-[3px] bg-red-600" />
            </div>

            {/* Content */}
            <div className="space-y-8 text-lg text-gray-700 leading-relaxed max-w-3xl">
              <p>
                At KAAVERI, we are passionate about steel and dedicated to
                excellence. As a leading manufacturer of TMT bars and
                structural steel products, we are committed to providing
                the construction industry with the highest quality
                materials that ensure strength, safety and sustainability.
              </p>

              <p>
                Our state-of-the-art manufacturing processes and rigorous
                quality control ensure every product meets the highest
                global standards, empowering builders to create
                structures that stand the test of time.
              </p>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center">
                  <Factory className="text-red-600" />
                </div>

                <div>
                  <h4 className="font-bold text-xl">
                    Premium TMT Bars
                  </h4>

                  <p className="text-gray-500 text-sm mt-2">
                    High strength. Superior durability.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center">
                  <ShieldCheck className="text-red-600" />
                </div>

                <div>
                  <h4 className="font-bold text-xl">
                    ISI Certified
                  </h4>

                  <p className="text-gray-500 text-sm mt-2">
                    Tested. Trusted. Guaranteed.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center">
                  <HardHat className="text-red-600" />
                </div>

                <div>
                  <h4 className="font-bold text-xl">
                    Trusted Builders
                  </h4>

                  <p className="text-gray-500 text-sm mt-2">
                    Strong partnerships nationwide.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-5 mt-14">
              <Link href="/about-us">
                <button className="h-16 px-10 bg-gradient-to-r from-red-700 to-red-500 text-white rounded-xl font-bold flex items-center gap-3 shadow-xl">
                  <Play size={20} />
                  Watch Our Journey
                  <ArrowRight />
                </button>
              </Link>

              <button className="h-16 px-10 border border-gray-300 rounded-xl font-semibold flex items-center gap-3 hover:bg-gray-50 transition">
                <Download size={20} />
                Download Brochure
              </button>
            </div>

            {/* Floating Stats Card */}
            <div className="hidden xl:block absolute left-[-250px] bottom-10">
              <div className="bg-white rounded-[30px] shadow-2xl p-10 w-[700px]">
                <div className="grid grid-cols-3 gap-8">
                  <div className="text-center">
                    <Award
                      className="mx-auto text-red-600 mb-4"
                      size={34}
                    />

                    <h3 className="text-5xl font-black text-red-600">
                      25+
                    </h3>

                    <p className="font-semibold mt-3">
                      Years Experience
                    </p>

                    <span className="text-sm text-gray-500">
                      In Steel Excellence
                    </span>
                  </div>

                  <div className="text-center border-x">
                    <Building2
                      className="mx-auto text-red-600 mb-4"
                      size={34}
                    />

                    <h3 className="text-5xl font-black text-red-600">
                      5000+
                    </h3>

                    <p className="font-semibold mt-3">
                      Projects Served
                    </p>

                    <span className="text-sm text-gray-500">
                      Across India
                    </span>
                  </div>

                  <div className="text-center">
                    <BadgeCheck
                      className="mx-auto text-red-600 mb-4"
                      size={34}
                    />

                    <h3 className="text-5xl font-black text-red-600">
                      100%
                    </h3>

                    <p className="font-semibold mt-3">
                      Quality Tested
                    </p>

                    <span className="text-sm text-gray-500">
                      For Your Safety
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

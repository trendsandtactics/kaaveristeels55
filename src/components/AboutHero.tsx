import React from "react";
import Image from "next/image";
import { listModuleItems } from "@/lib/dynamic-cms";
import { resolveMediaUrl } from "@/lib/media";
import { ArrowRight } from "lucide-react";

interface AboutHeroItem {
  title?: string | null;
  short_description?: string | null;
  content?: string | null;
  cover_image?: string | null;
  file_url?: string | null;
  sort_order?: number | null;
}

export default async function AboutHero() {
  let items: AboutHeroItem[] = [];

  try {
    items = await listModuleItems("aboutHero", {
      status: "published",
    });

    items = items.sort(
      (a, b) => (a.sort_order || 0) - (b.sort_order || 0)
    );
  } catch (error) {
    console.error("Failed to fetch aboutHero content", error);
  }

  const about = items[0] || {
    title: "Strength That Supports The Future",
    short_description: "ABOUT KAAVERI",
    content:
      "At KAAVERI Steel, we are passionate about steel and dedicated to excellence. As a leading manufacturer of TMT bars and structural steel products, we are committed to providing the construction industry with the highest quality materials that ensure strength, safety, and sustainability.",
    cover_image: "/image/about1.png",
  };

  const image =
    about.cover_image || about.file_url
      ? resolveMediaUrl(
          (about.cover_image || about.file_url) as string,
          "/image/about1.png"
        )
      : "/image/about1.png";

  return (
    <section className="relative overflow-hidden bg-[#f7f7f7] py-20 lg:py-28">
      {/* Background Texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #000 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT IMAGE */}
          <div className="relative">
            {/* Border Box Behind */}
            <div className="absolute left-8 top-8 h-full w-full border border-[#c52b22]/25" />

            {/* Image */}
            <div className="relative z-10 overflow-hidden shadow-xl">
              <Image
                src={image}
                alt="Kaaveri Steel"
                width={900}
                height={600}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            {/* Small Label */}
            <div className="mb-8 flex items-center gap-4">
              <div className="h-[2px] w-12 bg-[#c52b22]" />

              <span className="text-sm font-semibold uppercase tracking-[4px] text-[#c52b22]">
                {about.short_description || "ABOUT KAAVERI"}
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-5xl font-medium leading-tight text-slate-900 md:text-6xl xl:text-7xl">
              Strength That
              <span className="block text-[#c52b22]">
                Supports The Future
              </span>
            </h2>

            {/* Content */}
            <div className="mt-10 space-y-8">
              <p className="text-lg leading-relaxed text-gray-600">
                {about.content}
              </p>

              <p className="text-lg leading-relaxed text-gray-600">
                Our state-of-the-art manufacturing processes and
                rigorous quality control ensure that every product
                leaving our facility meets the highest global
                standards, empowering builders to create structures
                that stand the test of time.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-12">
              <button className="group inline-flex items-center gap-3 bg-[#c52b22] px-10 py-4 text-sm font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:bg-[#a32020]">
                Discover Our Story

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

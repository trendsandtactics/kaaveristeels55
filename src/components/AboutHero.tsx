import React from "react";
import Image from "next/image";
import { listModuleItems } from "@/lib/dynamic-cms";
import { resolveMediaUrl } from "@/lib/media";
import {
  ShieldCheck,
  Award,
  Factory,
  ArrowRight,
  Download,
  Building2,
  Users,
  Leaf,
} from "lucide-react";

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
  } catch (e) {
    console.error("Failed to fetch aboutHero content", e);
  }

  const about = items[0] || {
    title: "Strength That Supports The Future",
    short_description: "ABOUT KAAVERI",
    content:
      "At KAAVERI Steel, we are passionate about steel and dedicated to excellence. As a leading manufacturer of TMT bars and structural steel products, we provide high-quality materials that ensure strength, safety, and sustainability for every project.",
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
    <section className="relative bg-[#f7f7f7] py-20 lg:py-28 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#800000_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative h-[500px] md:h-[650px] rounded-[40px] overflow-hidden shadow-2xl">
              <Image
                src={image}
                alt="Kaaveri Steel"
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            </div>

            {/* Experience Card */}
            <div className="absolute top-8 left-8 bg-[#A32020] text-white rounded-3xl p-8 shadow-2xl backdrop-blur-md">
              <ShieldCheck size={36} className="mb-4" />

              <h3 className="text-5xl font-bold">25+</h3>

              <p className="mt-2 uppercase text-sm tracking-wider">
                Years Of Excellence
              </p>

              <p className="text-sm text-white/80 mt-4 leading-relaxed">
                Building Strength.
                <br />
                Building Trust.
              </p>
            </div>

            {/* Bottom Floating Card */}
            <div className="absolute left-6 right-6 -bottom-10">
              <div className="bg-[#0d1320] text-white rounded-3xl shadow-2xl p-6 lg:p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <Factory
                      size={34}
                      className="text-red-500 mb-4"
                    />

                    <h4 className="font-semibold text-lg mb-2">
                      Advanced Manufacturing
                    </h4>

                    <p className="text-sm text-gray-400">
                      State-of-the-art facilities for superior quality.
                    </p>
                  </div>

                  <div>
                    <Award
                      size={34}
                      className="text-red-500 mb-4"
                    />

                    <h4 className="font-semibold text-lg mb-2">
                      Premium Quality
                    </h4>

                    <p className="text-sm text-gray-400">
                      Tested, certified and trusted worldwide.
                    </p>
                  </div>

                  <div>
                    <ShieldCheck
                      size={34}
                      className="text-red-500 mb-4"
                    />

                    <h4 className="font-semibold text-lg mb-2">
                      Stronger Tomorrow
                    </h4>

                    <p className="text-sm text-gray-400">
                      Sustainable processes for a better future.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:pl-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-[#A32020]" />

              <span className="uppercase tracking-[4px] text-[#A32020] font-semibold text-sm">
                {about.short_description || "ABOUT KAAVERI"}
              </span>
            </div>

            <h2 className="font-serif text-5xl md:text-6xl xl:text-7xl leading-tight font-bold text-slate-900">
              Strength That
              <span className="block text-[#A32020]">
                Supports The Future
              </span>
            </h2>

            <div className="w-24 h-1 bg-[#A32020] rounded-full mt-8 mb-8" />

            <p className="text-gray-600 text-lg leading-relaxed">
              {about.content}
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mt-6">
              Our state-of-the-art manufacturing facilities and rigorous
              quality control ensure every product meets global standards,
              empowering builders to create structures that stand the test
              of time.
            </p>

            {/* Stats */}
            <div className="mt-12">
              <div className="bg-white rounded-[30px] shadow-xl p-8">
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <Award
                      size={32}
                      className="mx-auto mb-3 text-[#A32020]"
                    />

                    <h3 className="text-4xl font-bold text-[#A32020]">
                      25+
                    </h3>

                    <p className="text-sm text-gray-600 mt-2">
                      YEARS OF EXPERIENCE
                    </p>
                  </div>

                  <div className="text-center">
                    <Building2
                      size={32}
                      className="mx-auto mb-3 text-[#A32020]"
                    />

                    <h3 className="text-4xl font-bold text-[#A32020]">
                      500+
                    </h3>

                    <p className="text-sm text-gray-600 mt-2">
                      PROJECTS SUPPLIED
                    </p>
                  </div>

                  <div className="text-center">
                    <Factory
                      size={32}
                      className="mx-auto mb-3 text-[#A32020]"
                    />

                    <h3 className="text-4xl font-bold text-[#A32020]">
                      1M+
                    </h3>

                    <p className="text-sm text-gray-600 mt-2">
                      TONS PRODUCED
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <button className="bg-[#A32020] hover:bg-[#861818] transition-all duration-300 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3 shadow-lg">
                OUR JOURNEY
                <ArrowRight size={18} />
              </button>

              <button className="border-2 border-[#A32020] text-[#A32020] hover:bg-[#A32020] hover:text-white transition-all duration-300 px-8 py-4 rounded-xl font-semibold flex items-center gap-3">
                DOWNLOAD BROCHURE
                <Download size={18} />
              </button>
            </div>

            {/* Bottom Features */}
            <div className="flex flex-wrap gap-8 mt-14 text-gray-700">
              <div className="flex items-center gap-3">
                <ShieldCheck size={22} />
                <span className="font-medium">
                  Built On Trust
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Users size={22} />
                <span className="font-medium">
                  Driven By People
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Leaf size={22} />
                <span className="font-medium">
                  Sustainable Future
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Space for Floating Card */}
        <div className="h-20" />
      </div>
    </section>
  );
}

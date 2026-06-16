"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Download,
  Factory,
  ShieldCheck,
  Users,
  Leaf,
  MapPinned,
} from "lucide-react";

export default function HomeAbout() {
  return (
    <section className="bg-[#f8f8f8] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        {/* Main Layout */}
        <div className="relative bg-white shadow-xl overflow-hidden rounded-2xl">

          <div className="grid lg:grid-cols-[55%_45%]">

            {/* IMAGE SIDE */}
            <div className="relative min-h-[400px] lg:min-h-[600px]">

              <Image
                src="/image/about1.png"
                alt="Kaaveri Steel"
                fill
                className="object-cover"
              />

              {/* Floating Years Badge */}
              <div className="absolute top-10 left-10 bg-white shadow-lg w-[120px] h-[170px] flex flex-col justify-center items-center border-b-4 border-red-600">

                <h3 className="text-5xl font-black text-red-600">
                  30+
                </h3>

                <p className="text-center text-xs uppercase tracking-[3px] text-gray-600 mt-4">
                  Years of
                  <br />
                  Excellence
                </p>

              </div>
            </div>

            {/* CONTENT SIDE */}
            <div className="relative bg-white">

              {/* ANGLED SHAPE */}
              <div className="hidden lg:block absolute left-[-120px] top-0 h-full w-[250px] bg-white skew-x-[-18deg]" />

              <div className="relative z-10 p-8 lg:p-12">

                {/* Tag */}
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-12 h-[2px] bg-red-600"></span>

                  <span className="text-red-600 uppercase tracking-[4px] text-sm font-bold">
                    About Kaaveri
                  </span>
                </div>

                {/* Heading */}
                <h2
                  className="font-black text-[#0d1b2a] leading-none"
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "clamp(3rem,5vw,5rem)",
                  }}
                >
                  Built On Steel.
                </h2>

                <h2
                  className="font-black text-red-600 leading-none mt-2"
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "clamp(3rem,5vw,5rem)",
                  }}
                >
                  Trusted By India.
                </h2>

                <div className="w-16 h-1 bg-red-600 my-10"></div>

                {/* Paragraph */}
                <div className="space-y-6 text-gray-600 leading-9 text-lg max-w-[700px]">

                  <p>
                    At KAAVERI, we are passionate about steel and dedicated
                    to excellence. As a leading manufacturer of TMT bars and
                    structural steel products, we supply the construction
                    industry with materials engineered for longevity.
                  </p>

                  <p>
                    Our rigorous quality control ensures every product meets
                    the highest global standards — empowering builders to
                    raise structures that stand the test of time.
                  </p>

                </div>

                {/* Feature Panel */}
                <div className="mt-12 bg-white border rounded-xl shadow-md">

                  <div className="grid md:grid-cols-3">

                    {[
                      {
                        Icon: Factory,
                        title: "Premium TMT Bars",
                        sub: "High strength & durability",
                      },
                      {
                        Icon: ShieldCheck,
                        title: "ISI Certified",
                        sub: "Tested & trusted",
                      },
                      {
                        Icon: Users,
                        title: "Trusted Partners",
                        sub: "Nationwide network",
                      },
                    ].map(({ Icon, title, sub }) => (
                      <div
                        key={title}
                        className="p-8 border-r last:border-r-0"
                      >
                        <Icon
                          size={40}
                          className="text-red-600 mb-4"
                        />

                        <h4 className="font-bold text-[#0d1b2a]">
                          {title}
                        </h4>

                        <p className="text-gray-500 mt-2">
                          {sub}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-5 mt-10">

                  <Link href="/about-us">
                    <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 uppercase tracking-[2px] font-semibold flex items-center gap-3 rounded-md">
                      Explore More
                      <ArrowRight size={18} />
                    </button>
                  </Link>

                  <button className="border border-gray-300 px-10 py-4 uppercase tracking-[2px] font-semibold flex items-center gap-3 rounded-md">
                    <Download size={18} />
                    Download Brochure
                  </button>

                </div>
              </div>
            </div>
          </div>

          {/* DARK VALUE STRIP */}
          <div className="bg-[#08172a] text-white">

            <div className="grid md:grid-cols-4">

              {[
                {
                  Icon: Factory,
                  title: "Advanced Manufacturing",
                  text: "State-of-the-art facilities",
                },
                {
                  Icon: ShieldCheck,
                  title: "Quality Assured",
                  text: "Stringent quality testing",
                },
                {
                  Icon: Leaf,
                  title: "Sustainable Tomorrow",
                  text: "Eco-friendly processes",
                },
                {
                  Icon: MapPinned,
                  title: "Pan India Presence",
                  text: "Strong distribution network",
                },
              ].map(({ Icon, title, text }) => (
                <div
                  key={title}
                  className="p-10 border-r border-white/10 last:border-r-0"
                >
                  <Icon
                    size={38}
                    className="text-red-500 mb-4"
                  />

                  <h4 className="font-bold uppercase tracking-[2px]">
                    {title}
                  </h4>

                  <p className="text-white/70 mt-2">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* STATS */}
          <div className="grid md:grid-cols-4 bg-white">

            {[
              ["30+", "Years of Excellence"],
              ["500+", "Happy Customers"],
              ["1 Mn+", "Tons Capacity"],
              ["ISI", "Certified Products"],
            ].map(([num, label]) => (
              <div
                key={label}
                className="p-10 text-center border-r last:border-r-0"
              >
                <h3 className="text-5xl font-black text-[#0d1b2a]">
                  {num}
                </h3>

                <p className="text-gray-500 mt-3">
                  {label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

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
  const features = [
    {
      Icon: Factory,
      title: "Premium TMT Bars",
      sub: "High strength & durability",
    },
    {
      Icon: ShieldCheck,
      title: "ISI Certified",
      sub: "Tested & trusted quality",
    },
    {
      Icon: Users,
      title: "Trusted Partners",
      sub: "Nationwide dealer network",
    },
  ];

  const values = [
    {
      Icon: Factory,
      title: "Advanced Manufacturing",
      text: "State-of-the-art facilities",
    },
    {
      Icon: ShieldCheck,
      title: "Quality Assured",
      text: "Stringent testing standards",
    },
    {
      Icon: Leaf,
      title: "Sustainable Future",
      text: "Eco-friendly processes",
    },
    {
      Icon: MapPinned,
      title: "Pan India Presence",
      text: "Strong distribution network",
    },
  ];

  const stats = [
    {
      number: "30+",
      label: "Years of Excellence",
    },
    {
      number: "500+",
      label: "Happy Customers",
    },
    {
      number: "1 Mn+",
      label: "Tons Capacity",
    },
    {
      number: "ISI",
      label: "Certified Products",
    },
  ];

  return (
    <section className="bg-[#f5f5f5] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1700px] mx-auto px-4">

        <div className="bg-white rounded-[30px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.08)]">

          {/* MAIN SECTION */}
          <div className="grid lg:grid-cols-2">

            {/* IMAGE SIDE */}
            <div className="relative min-h-[450px] lg:min-h-[700px]">

              <Image
                src="/image/about1.png"
                alt="Kaaveri Steel"
                fill
                priority
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />

              {/* YEARS CARD */}
              <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl w-[120px] h-[150px] flex flex-col justify-center items-center border-b-4 border-red-600">

                <h3 className="text-5xl font-black text-red-600">
                  30+
                </h3>

                <p className="text-center text-[11px] uppercase tracking-[2px] text-gray-600 mt-3">
                  Years Of
                  <br />
                  Excellence
                </p>

              </div>
            </div>

            {/* CONTENT SIDE */}
            <div className="relative bg-white">

              {/* ANGLED PANEL */}
              <div className="hidden lg:block absolute left-[-90px] top-0 h-full w-[180px] bg-white skew-x-[-12deg]" />

              <div className="relative z-10 p-8 md:p-12 lg:p-20">

                {/* TAG */}
                <div className="flex items-center gap-3 mb-8">

                  <span className="w-12 h-[2px] bg-red-600" />

                  <span className="uppercase tracking-[4px] text-red-600 text-sm font-bold">
                    About Kaaveri
                  </span>

                </div>

                {/* HEADING */}
                <h2
                  className="font-black leading-[1.05] text-[#08172A]"
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "clamp(2.5rem,4vw,4.5rem)",
                  }}
                >
                  Built On Steel.
                </h2>

                <h2
                  className="font-black leading-[1.05] text-red-600 mt-2"
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "clamp(2.5rem,4vw,4.5rem)",
                  }}
                >
                  Trusted By India.
                </h2>

                <div className="w-16 h-1 bg-red-600 my-8" />

                {/* CONTENT */}
                <div className="max-w-[620px] space-y-5 text-gray-600 text-base lg:text-lg leading-8">

                  <p>
                    At KAAVERI, we are passionate about steel and dedicated
                    to excellence. As a leading manufacturer of TMT bars
                    and structural steel products, we supply the construction
                    industry with materials engineered for durability,
                    strength, and reliability.
                  </p>

                  <p>
                    Our rigorous quality control ensures every product
                    meets global standards, empowering builders to create
                    structures that stand strong for generations.
                  </p>

                </div>

                {/* FEATURE CARDS */}
                <div className="grid md:grid-cols-3 gap-5 mt-12">

                  {features.map(({ Icon, title, sub }) => (
                    <div
                      key={title}
                      className="
                        group
                        bg-white
                        border
                        rounded-2xl
                        p-6
                        hover:border-red-500
                        hover:shadow-xl
                        transition-all
                        duration-300
                      "
                    >
                      <Icon
                        size={36}
                        className="
                          text-red-600
                          mb-4
                          transition-transform
                          duration-300
                          group-hover:scale-110
                        "
                      />

                      <h4 className="font-bold text-[#08172A]">
                        {title}
                      </h4>

                      <p className="text-gray-500 text-sm mt-2">
                        {sub}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex flex-wrap gap-4 mt-12">

                  <Link href="/about-us">

                    <button
                      className="
                        bg-red-600
                        hover:bg-red-700
                        text-white
                        px-8
                        py-4
                        rounded-lg
                        uppercase
                        tracking-[2px]
                        font-semibold
                        flex
                        items-center
                        gap-3
                        transition-all
                        duration-300
                        hover:-translate-y-1
                      "
                    >
                      Explore More
                      <ArrowRight size={18} />
                    </button>

                  </Link>

                  <button
                    className="
                      border
                      border-gray-300
                      hover:border-red-600
                      hover:text-red-600
                      px-8
                      py-4
                      rounded-lg
                      uppercase
                      tracking-[2px]
                      font-semibold
                      flex
                      items-center
                      gap-3
                      transition-all
                      duration-300
                    "
                  >
                    <Download size={18} />
                    Download Brochure
                  </button>

                </div>
              </div>
            </div>
          </div>

          {/* VALUE STRIP */}
          <div className="bg-[#08172A]">

            <div className="grid sm:grid-cols-2 lg:grid-cols-4">

              {values.map(({ Icon, title, text }) => (
                <div
                  key={title}
                  className="
                    p-8
                    border-r
                    border-white/10
                    last:border-r-0
                    hover:bg-white/5
                    transition-all
                    duration-300
                  "
                >
                  <Icon
                    size={28}
                    className="text-red-500 mb-4"
                  />

                  <h4 className="text-white font-semibold uppercase tracking-[1px]">
                    {title}
                  </h4>

                  <p className="text-white/60 text-sm mt-2">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* STATS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 bg-white">

            {stats.map((item) => (
              <div
                key={item.label}
                className="
                  group
                  p-10
                  text-center
                  border-r
                  last:border-r-0
                  hover:bg-gray-50
                  transition-all
                  duration-300
                "
              >
                <h3 className="text-4xl lg:text-5xl font-black text-red-600">
                  {item.number}
                </h3>

                <p className="text-gray-500 mt-3 text-sm uppercase tracking-[1px]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
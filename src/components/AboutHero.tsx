import React from "react";
import Image from "next/image";

export default function AboutHero() {
    return (
        <div className="w-full bg-white">
            {/* Hero Section */}
            <div className="w-full bg-gradient-to-r from-[#4B0000] via-[#800000] to-[#4B0000] pt-32 pb-24 relative overflow-hidden shadow-md">

                {/* Premium Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

                    <div className="text-center max-w-4xl mx-auto">

                        {/* Subtitle */}
                        <h2 className="font-sans text-white/80 uppercase tracking-[0.35em] font-semibold text-xs mb-6">
                            ABOUT US
                        </h2>

                        {/* Main Heading */}
                        <h1 className="font-sans text-5xl md:text-7xl text-white mb-6 leading-tight font-extrabold tracking-tight">
                            Welcome to <span className="text-white">KAAVERI</span>
                        </h1>

                        {/* PROFESSIONAL TMT & STRUCTURAL */}
                        <div className="flex items-center justify-center gap-5 mt-4">

                            <span className="text-white text-4xl md:text-5xl font-extrabold tracking-wider">
                                TMT
                            </span>

                            <span className="text-white/60 text-3xl md:text-4xl font-light">
                                &
                            </span>

                            <span className="text-white text-4xl md:text-5xl font-extrabold tracking-wider">
                                STRUCTURAL
                            </span>

                        </div>

                        {/* Description */}
                        <p className="font-sans text-white/80 text-lg md:text-xl leading-relaxed font-medium mt-8 max-w-3xl mx-auto">
                            KAAVERI is a trusted leader in manufacturing high-quality TMT bars and structural steel products, delivering unmatched strength, durability, and reliability for modern construction.
                        </p>

                    </div>
                </div>
            </div>

            {/* CONTENT SECTION */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 relative z-10 bg-white">

                {/* Mission */}
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 mb-24">

                    <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] overflow-hidden group">
                        <div className="absolute inset-0 bg-[#800000]/20 z-10 mix-blend-overlay group-hover:bg-transparent transition duration-500"></div>
                        <Image
                            src="/image/about1.png"
                            alt="Industrial Teamwork"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    <div className="w-full md:w-1/2">
                        <h2 className="text-black uppercase tracking-[0.25em] font-semibold text-xs mb-4">
                            OUR MISSION
                        </h2>

                        <h3 className="text-4xl md:text-5xl text-black mb-6 leading-tight font-extrabold">
                            Building Strength That Lasts
                        </h3>

                        <p className="text-black/70 text-lg leading-relaxed">
                            We manufacture superior TMT bars and structural steel that ensure safety, durability, and long-term performance in every construction project.
                        </p>
                    </div>
                </div>

                {/* Vision */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">

                    <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] overflow-hidden group">
                        <div className="absolute inset-0 bg-[#4B0000]/20 z-10 mix-blend-overlay group-hover:bg-transparent transition duration-500"></div>
                        <Image
                            src="/image/about2.png"
                            alt="Industrial Factory"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    <div className="w-full md:w-1/2">
                        <h2 className="text-black uppercase tracking-[0.25em] font-semibold text-xs mb-4">
                            OUR VISION
                        </h2>

                        <h3 className="text-4xl md:text-5xl text-black mb-6 leading-tight font-extrabold">
                            Engineering Trust Through Steel
                        </h3>

                        <p className="text-black/70 text-lg leading-relaxed">
                            Our vision is to lead the steel industry with innovation, quality, and a commitment to excellence.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

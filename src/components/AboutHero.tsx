import React from "react";
import Image from "next/image";

export default function AboutHero() {
    return (
        <div className="w-full bg-white">
            
            {/* HERO SECTION */}
            <div className="w-full bg-gradient-to-r from-[#5a0f0f] via-[#800000] to-[#a00000] pt-32 pb-24 relative overflow-hidden">
                
                {/* Subtle overlays */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12)_0%,transparent_60%)] pointer-events-none" />
                <div className="absolute inset-0 bg-black/20 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                    
                    <div className="text-center max-w-4xl mx-auto">
                        
                        {/* Label */}
                        <h2 className="text-white uppercase tracking-[0.35em] font-semibold text-xs mb-6">
                            ABOUT US
                        </h2>

                        {/* Title */}
                        <h1 className="text-white leading-tight">
                            
                            {/* Small intro */}
                            <span className="block text-3xl md:text-4xl font-light opacity-90 mb-2">
                                Welcome to
                            </span>

                            {/* Brand */}
                            <span className="block text-6xl md:text-8xl font-extrabold tracking-tight">
                                KAAVERI
                            </span>

                            {/* Category */}
                            <span className="flex items-center justify-center gap-4 mt-5 text-2xl md:text-3xl font-semibold tracking-wide">
                                <span>TMT</span>

                                <span className="text-3xl md:text-4xl font-black">
                                    &
                                </span>

                                <span>STRUCTURAL</span>
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-white/90 text-lg md:text-xl leading-relaxed font-medium mt-8 max-w-3xl mx-auto">
                            At KAAVERI, we are passionate about steel and dedicated to excellence. Our company is a leading manufacturer of TMT bars and structural steel products, committed to providing the construction industry with the highest quality materials that ensure strength, safety, and sustainability.
                        </p>

                    </div>
                </div>
            </div>

            {/* CONTENT SECTION */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 bg-white">
                
                {/* Mission */}
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 mb-24">
                    
                    <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] overflow-hidden group">
                        <div className="absolute inset-0 bg-[#800000]/10 z-10 group-hover:bg-transparent transition duration-500"></div>
                        <Image
                            src="/image/about1.png"
                            alt="Industrial Teamwork"
                            fill
                            className="object-cover transition duration-700 group-hover:scale-105"
                        />
                    </div>

                    <div className="w-full md:w-1/2">
                        <h2 className="uppercase tracking-[0.2em] font-bold text-sm mb-4 text-gray-700">
                            OUR MISSION
                        </h2>

                        <h3 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-black">
                            Building a Stronger, Sustainable Future
                        </h3>

                        <p className="text-gray-700 text-lg leading-relaxed font-medium">
                            At KAAVERI, our mission is to manufacture and supply superior TMT bars and structural steel products that contribute to the safety, durability, and sustainability of construction projects worldwide. We are committed to maintaining the highest quality standards and delivering reliable steel solutions.
                        </p>
                    </div>
                </div>

                {/* Vision */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
                    
                    <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] overflow-hidden group">
                        <div className="absolute inset-0 bg-[#800000]/20 z-10 group-hover:bg-transparent transition duration-500"></div>
                        <Image
                            src="/image/about2.png"
                            alt="Industrial Factory"
                            fill
                            className="object-cover transition duration-700 group-hover:scale-105"
                        />
                    </div>

                    <div className="w-full md:w-1/2">
                        <h2 className="uppercase tracking-[0.2em] font-bold text-sm mb-4 text-gray-700">
                            VISION
                        </h2>

                        <h3 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-black">
                            Leading the Steel Industry with Quality, Innovation, and Trust
                        </h3>

                        <p className="text-gray-700 text-lg leading-relaxed font-medium">
                            Our vision is to be the most trusted and respected manufacturer in the steel industry, known for quality, innovation, and customer satisfaction.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

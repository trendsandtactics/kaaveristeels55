import React from "react";
import Image from "next/image";

export default function AboutHero() {
    return (
        <div className="w-full bg-white">
            {/* Hero Background Section - Yellow Gradient */}
            <div className="w-full bg-gradient-to-r from-accent-yellow via-[#FFD700] to-accent-yellow pt-28 pb-8 md:pt-32 md:pb-10 relative overflow-hidden shadow-sm border-b border-black/10">

                {/* Glow effect */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_60%)] pointer-events-none mix-blend-overlay" />

                {/* Subtle grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none mix-blend-overlay opacity-30" />

                <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                    
                    {/* Welcome Section */}
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <div className="w-12 h-[2px] bg-black" />
                            <h2 className="font-sans text-black uppercase tracking-[0.2em] font-bold text-sm">
                                About Us
                            </h2>
                            <div className="w-12 h-[2px] bg-black" />
                        </div>

                        <h1 className="font-serif text-5xl md:text-7xl text-black mb-8 leading-tight drop-shadow-md font-bold">
                            Welcome to Kaaveri
                        </h1>

                        <p className="font-sans text-black/80 text-lg md:text-xl leading-relaxed font-medium">
                            At KAAVERI, we are passionate about steel and dedicated to excellence. Our company is a leading manufacturer of TMT bars and structural steel products, committed to providing the construction industry with the highest quality materials that ensure strength, safety, and sustainability.
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 relative z-10 bg-white">
                
                {/* Mission Section */}
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 mb-24">
                    <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] rounded-sm overflow-hidden group">
                        
                        <div className="absolute inset-0 bg-[#800000]/10 z-10 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500"></div>

                        <Image
                            src="/image/about1.png"
                            alt="Industrial Teamwork"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    <div className="w-full md:w-1/2">
                        <h2 className="font-body text-[#800000] uppercase tracking-[0.2em] font-bold text-sm mb-4">
                            Our Mission
                        </h2>

                        <h3 className="font-serif text-4xl md:text-5xl text-black mb-6 leading-tight drop-shadow-sm font-extrabold">
                            Building a Stronger, Sustainable Future
                        </h3>

                        <p className="font-body text-black/80 text-lg leading-relaxed font-medium">
                            At KAAVERI, our mission is to manufacture and supply superior TMT bars and structural steel products that contribute to the safety, durability, and sustainability of construction projects worldwide. We are dedicated to maintaining the highest standards of quality in all our products.
                        </p>
                    </div>
                </div>

                {/* Vision Section */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
                    <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] rounded-sm overflow-hidden group">
                        
                        <div className="absolute inset-0 bg-[#800000]/10 z-10 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500"></div>

                        <Image
                            src="/image/about2.png"
                            alt="Industrial Factory"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    <div className="w-full md:w-1/2">
                        <h2 className="font-body text-[#800000] uppercase tracking-[0.2em] font-bold text-sm mb-4">
                            Vision
                        </h2>

                        <h3 className="font-serif text-4xl md:text-5xl text-black mb-6 leading-tight drop-shadow-sm font-extrabold">
                            Leading the Steel Industry with Quality, Innovation, and Trust
                        </h3>

                        <p className="font-body text-black/80 text-lg leading-relaxed font-medium">
                            Our vision is to be the most trusted and respected manufacturer in the steel industry, renowned for our unwavering commitment to quality, innovation, and customer satisfaction. We aim to set new standards in steel manufacturing by embracing cutting-edge technology.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

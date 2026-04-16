import React from "react";
import Image from "next/image";

export default function AboutHero() {
    return (
        <div className="w-full bg-white">
            {/* Hero Background Section */}
            <div className="w-full bg-gradient-to-r from-accent-yellow via-[#FFD700] to-accent-yellow pt-28 pb-10 md:pb-12 relative overflow-hidden shadow-sm">
                {/* Background styling elements */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_60%)] pointer-events-none mix-blend-overlay" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none mix-blend-overlay opacity-30" />

                <div className="relative w-full overflow-hidden bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500 py-16 md:py-24">
  
  {/* Soft overlay for depth */}
  <div className="absolute inset-0 bg-black/5"></div>

  <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
    
    {/* Welcome Section */}
    <div className="text-center mx-auto">
      
      {/* Small Heading */}
      <h2 className="text-black uppercase tracking-[0.3em] font-bold text-xs md:text-sm mb-4">
        About Us
      </h2>

      {/* Main Heading */}
      <h1 className="text-black font-extrabold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6">
        Welcome to{" "}
        <span className="relative inline-block">
          <span className="relative z-10">KAAVERI</span>
          <span className="absolute left-0 bottom-1 w-full h-3 bg-black/10 z-0"></span>
        </span>
      </h1>

      {/* Sub Heading */}
      <h3 className="text-black font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 tracking-wide">
        TMT & STRUCTURAL
      </h3>

      {/* Description */}
      <p className="text-black/80 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-medium">
        At KAAVERI, we are passionate about steel and dedicated to excellence. 
        Our company is a leading manufacturer of TMT bars and structural steel products, 
        committed to providing the construction industry with the highest quality materials 
        that ensure strength, safety, and sustainability.
      </p>

    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 relative z-10 bg-white">
                {/* Mission Section */}
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 mb-24">
                    <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] rounded-sm overflow-hidden group">
                        <div className="absolute inset-0 bg-accent-red/10 z-10 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500"></div>
                        <Image
                            src="/image/about1.png"
                            alt="Industrial Teamwork"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    <div className="w-full md:w-1/2">
                        <h2 className="font-body text-black uppercase tracking-[0.2em] font-bold text-sm mb-4">Our Mission</h2>
                        <h3 className="font-heading text-4xl md:text-5xl text-black mb-6 leading-tight drop-shadow-sm font-extrabold">
                            Building a Stronger, Sustainable Future
                        </h3>
                        <p className="font-body text-black/80 text-lg leading-relaxed mix-blend-multiply font-medium">
                            At KAAVERI, our mission is to manufacture and supply superior TMT bars and structural steel products that contribute to the safety, durability, and sustainability of construction projects worldwide. We are dedicated to maintaining the highest standards of quality in all our products, ensuring they meet the rigorous demands of the construction industry. By leveraging advanced technology and innovative manufacturing processes, we strive to provide cost-effective and reliable steel solutions that support the growth and development of communities, ensuring that every structure built with our products stands strong and secure.
                        </p>
                    </div>
                </div>

                {/* Vision Section */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
                    <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] rounded-sm overflow-hidden group">
                        <div className="absolute inset-0 bg-accent-yellow/20 z-10 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500"></div>
                        <Image
                            src="/image/about2.png"
                            alt="Industrial Factory"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    <div className="w-full md:w-1/2">
                        <h2 className="font-body text-black uppercase tracking-[0.2em] font-bold text-sm mb-4">Vision</h2>
                        <h3 className="font-heading text-4xl md:text-5xl text-black mb-6 leading-tight drop-shadow-sm font-extrabold">
                            Leading the Steel Industry with Quality, Innovation, and Trust
                        </h3>
                        <p className="font-body text-black/80 text-lg leading-relaxed font-medium">
                            Our vision is to be the most trusted and respected manufacturer in the steel industry, renowned for our unwavering commitment to quality, innovation, and customer satisfaction. We aim to set new standards in steel manufacturing by embracing cutting-edge technology, promoting sustainable practices, and continuously exceeding the expectations of our customers, thereby contributing to the construction of a safer, more sustainable world.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

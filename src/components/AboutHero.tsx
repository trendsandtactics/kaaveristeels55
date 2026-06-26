import React from "react";
import Image from "next/image";
import { listModuleItems } from "@/lib/dynamic-cms";
import { resolveMediaUrl } from "@/lib/media";

interface AboutHeroItem {
    title?: string | null;
    short_description?: string | null;
    content?: string | null;
    cover_image?: string | null;
    file_url?: string | null;
    sort_order?: number | null;
}

function renderContent(content?: string | null) {
    if (!content) return null;
    // Detect any HTML tag (not just <p>)
    const isHTML = /<[a-z][\s\S]*>/i.test(content);
    if (isHTML) {
        return <div dangerouslySetInnerHTML={{ __html: content }} />;
    }
    return <p>{content}</p>;
}

export default async function AboutHero() {
    let items: AboutHeroItem[] = [];
    try {
        items = await listModuleItems("aboutHero", { status: "published" });
        items = items.sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0));
    } catch (e) {
        console.error("Failed to fetch aboutHero content", e);
    }

    const welcome = items[0] || {
        title: "Welcome to KAAVERI",
        short_description: "TMT & STRUCTURAL",
        content: "At KAAVERI, we are passionate about steel and dedicated to excellence. Our company is a leading manufacturer of TMT bars and structural steel products, committed to providing the construction industry with the highest quality materials that ensure strength, safety, and sustainability.",
    };

    const mission = items[1] || {
        title: "Our Mission",
        short_description: "Building a Stronger, Sustainable Future",
        content: "At KAAVERI, our mission is to manufacture and supply superior TMT bars and structural steel products that contribute to the safety, durability, and sustainability of construction projects worldwide. We are dedicated to maintaining the highest standards of quality in all our products.",
        cover_image: "/image/about1.png",
    };

    const vision = items[2] || {
        title: "Vision",
        short_description: "Leading the Steel Industry with Quality, Innovation, and Trust",
        content: "Our vision is to be the most trusted and respected manufacturer in the steel industry, renowned for our unwavering commitment to quality, innovation, and customer satisfaction. We aim to set new standards in steel manufacturing by embracing cutting-edge technology.",
        cover_image: "/image/about2.png",
    };

    const missionImage = (mission.cover_image || mission.file_url)
        ? resolveMediaUrl((mission.cover_image || mission.file_url) as string, "/image/about1.png")
        : "/image/about1.png";

    const visionImage = (vision.cover_image || vision.file_url)
        ? resolveMediaUrl((vision.cover_image || vision.file_url) as string, "/image/about2.png")
        : "/image/about2.png";

    return (
        <div className="w-full bg-white">
            {/* Hero Background Section - Yellow Gradient */}
            <div className="w-full bg-gradient-to-r from-accent-yellow via-[#FFD700] to-accent-yellow pt-28 pb-12 md:pt-32 md:pb-16 relative overflow-hidden shadow-sm border-b border-black/10">

                {/* Glow effect */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_60%)] pointer-events-none mix-blend-overlay" />

                {/* Subtle grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none mix-blend-overlay opacity-30" />

                {/* Keep the welcome text centered and contained */}
                <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                    {/* Welcome Section */}
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <div className="w-8 md:w-12 h-[2px] bg-black" />
                            <h2 className="font-sans text-black uppercase tracking-[0.2em] font-bold text-xs md:text-sm">
                                {welcome.short_description || "About Us"}
                            </h2>
                            <div className="w-8 md:w-12 h-[2px] bg-black" />
                        </div>

                        {/* Scaled text sizes for different breakpoints */}
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-black mb-6 md:mb-8 leading-tight drop-shadow-md font-bold">
                            {welcome.title}
                        </h1>

                        <div className="font-sans text-black/80 text-base md:text-lg lg:text-xl leading-relaxed font-medium whitespace-pre-wrap">
                            {renderContent(welcome.content)}
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section with a Background Image wrapper */}
            <div className="w-full relative py-16 md:py-24 overflow-hidden bg-gray-50">
                {/* Section Background Image with Light Overlay for Text Readability */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/metro.png" // Replace with your desired background image path
                        alt="Section Background"
                        fill
                        priority
                        className="object-cover"
                    />
                    {/* Soft light overlay to keep text highly legible */}
                    <div className="absolute inset-0 bg-white/90 backdrop-blur-[2px]" />
                </div>

                <div className="w-full relative z-10 flex flex-col gap-16 lg:gap-24">

                    {/* Mission Section (Full Width Split on lg instead of md) */}
                    <div className="flex flex-col lg:flex-row items-stretch w-full">
                        {/* Image scales gracefully based on device */}
                        <div className="w-full lg:w-1/2 relative h-[350px] md:h-[450px] lg:h-[600px] overflow-hidden group shadow-lg">
                            <div className="absolute inset-0 bg-[#800000]/10 z-10 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500" />
                            <Image
                                src={missionImage}
                                alt={mission.title || "Industrial Teamwork"}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        {/* Text Container: Vertically centered and properly padded */}
                        <div className="w-full lg:w-1/2 px-6 py-10 md:p-12 lg:p-16 xl:p-24 flex flex-col justify-center">
                            <h2 className="font-body text-[#800000] uppercase tracking-[0.2em] font-bold text-xs md:text-sm mb-3 md:mb-4">
                                {mission.title}
                            </h2>
                            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-black mb-4 md:mb-6 leading-tight drop-shadow-sm font-extrabold">
                                {mission.short_description}
                            </h3>
                            <div className="font-body text-black/80 text-base md:text-lg leading-relaxed font-medium whitespace-pre-wrap">
                                {renderContent(mission.content)}
                            </div>
                        </div>
                    </div>

                    {/* Vision Section (Full Width Split, Reversed on lg instead of md) */}
                    <div className="flex flex-col lg:flex-row-reverse items-stretch w-full">
                        {/* Image scales gracefully based on device */}
                        <div className="w-full lg:w-1/2 relative h-[350px] md:h-[450px] lg:h-[600px] overflow-hidden group shadow-lg">
                            <div className="absolute inset-0 bg-[#800000]/10 z-10 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500" />
                            <Image
                                src={visionImage}
                                alt={vision.title || "Industrial Factory"}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        {/* Text Container: Vertically centered and properly padded */}
                        <div className="w-full lg:w-1/2 px-6 py-10 md:p-12 lg:p-16 xl:p-24 flex flex-col justify-center">
                            <h2 className="font-body text-[#800000] uppercase tracking-[0.2em] font-bold text-xs md:text-sm mb-3 md:mb-4">
                                {vision.title}
                            </h2>
                            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-black mb-4 md:mb-6 leading-tight drop-shadow-sm font-extrabold">
                                {vision.short_description}
                            </h3>
                            <div className="font-body text-black/80 text-base md:text-lg leading-relaxed font-medium whitespace-pre-wrap">
                                {renderContent(vision.content)}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

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
        title: "Welcome to Kaaveri",
        short_description: "TMT & STRUCTURAL",
        content: "At KAAVERI, we are passionate about steel and dedicated to excellence. Our company is a leading manufacturer of TMT bars and structural steel products, committed to providing the construction industry with the highest quality materials that ensure strength, safety, and sustainability.",
    };

    const mission = items[1] || {
        title: "ABOUT US",
        short_description: "Building Strength, Delivering Excellence",
        content: "Located at Maruthur Village, Kuttalam Taluk, Mayiladuthurai District, near Kumbakonam, our state-of-the-art greenfield manufacturing facility is one of the most advanced steel production plants in India. The facility has a production capacity of 24,000 metric tonnes of TMT bars per month, enabling us to meet the growing demands of infrastructure, commercial, industrial, and residential projects across the country.",
        cover_image: "/image/about1.png",
    };

    const vision = items[2] || {
        title: "OUR LEGACY",
        short_description: "Leading the Steel Industry with Quality, Innovation, and Trust",
        content: "With decades of industry expertise, Kaaveri Steels has evolved from its roots as Mayavaram Rolling Mill Private Limited into a modern and technologically advanced steel manufacturing company. Our unwavering focus on quality and continuous innovation has helped us earn approvals from prestigious organizations.",
        cover_image: "/image/about2.png",
    };

    const missionImage = (mission.cover_image || mission.file_url)
        ? resolveMediaUrl((mission.cover_image || mission.file_url) as string, "/image/about1.png")
        : "/image/about1.png";

    const visionImage = (vision.cover_image || vision.file_url)
        ? resolveMediaUrl((vision.cover_image || vision.file_url) as string, "/image/about2.png")
        : "/image/about2.png";

    return (
        <div className="w-full bg-[#f8f9fa] font-sans">
            {/* Hero Background Section - Solid Golden Yellow matching reference */}
            <div className="w-full bg-[#FBC02D] pt-32 pb-20 relative overflow-hidden border-b border-black/5">
                <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
                    <div className="text-center">
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <div className="w-16 h-[1px] bg-black" />
                            <h2 className="text-black uppercase tracking-[0.25em] font-bold text-xs md:text-sm">
                                {welcome.short_description || "TMT & STRUCTURAL"}
                            </h2>
                            <div className="w-16 h-[1px] bg-black" />
                        </div>

                        <h1 className="font-serif text-5xl md:text-7xl text-black mb-8 leading-tight font-bold">
                            {welcome.title}
                        </h1>

                        <div className="text-black/85 text-base md:text-lg leading-relaxed font-medium max-w-3xl mx-auto whitespace-pre-wrap">
                            {renderContent(welcome.content)}
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section with a very subtle background */}
            <div className="w-full relative overflow-hidden bg-[#f4f5f7]">
                
                {/* Background watermark overlay (optional, subtle texture) */}
                <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply pointer-events-none">
                    <Image
                        src="/metro.png" // Can be swapped with a faint industrial pattern
                        alt="Background Texture"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
                </div>

                <div className="w-full relative z-10 flex flex-col">

                    {/* Section 1 (Image Left, Text Right) */}
                    <div className="flex flex-col md:flex-row items-stretch w-full min-h-[500px] lg:min-h-[650px]">
                        
                        {/* Image Half */}
                        <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-full overflow-hidden">
                            <Image
                                src={missionImage}
                                alt={mission.short_description || "Industrial Teamwork"}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Text Half */}
                        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-16 md:p-16 lg:p-24 xl:p-32 bg-white/60 backdrop-blur-md">
                            <h2 className="text-red-700 uppercase tracking-widest font-bold text-xs md:text-sm mb-4">
                                {mission.title}
                            </h2>
                            <h3 className="font-serif text-4xl md:text-5xl lg:text-5xl text-gray-900 mb-6 leading-tight font-extrabold">
                                {mission.short_description}
                            </h3>
                            <div className="text-gray-700 text-base lg:text-lg leading-relaxed whitespace-pre-wrap">
                                {renderContent(mission.content)}
                            </div>
                        </div>
                    </div>

                    {/* Section 2 (Text Left, Image Right) */}
                    <div className="flex flex-col md:flex-row-reverse items-stretch w-full min-h-[500px] lg:min-h-[650px]">
                        
                        {/* Image Half */}
                        <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-full overflow-hidden">
                            <Image
                                src={visionImage}
                                alt={vision.short_description || "Industrial Factory"}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Text Half */}
                        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-16 md:p-16 lg:p-24 xl:p-32 bg-transparent">
                            <h2 className="text-red-700 uppercase tracking-widest font-bold text-xs md:text-sm mb-4">
                                {vision.title}
                            </h2>
                            <h3 className="font-serif text-4xl md:text-5xl lg:text-5xl text-gray-900 mb-6 leading-tight font-extrabold">
                                {vision.short_description}
                            </h3>
                            <div className="text-gray-700 text-base lg:text-lg leading-relaxed whitespace-pre-wrap">
                                {renderContent(vision.content)}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

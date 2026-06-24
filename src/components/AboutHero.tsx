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

    const heroData = items[0] || {
        title: "BUILT ON\nINDUSTRIAL STEEL.",
        short_description: "TRUSTED BY\nBUILDERS ACROSS\nINDIA.",
        content: "At <strong style='color:#C41E3A'>KAAVERI</strong>, we are deeply passionate about foundational structural integrity and committed to manufacturing perfection. As an industry-leading manufacturer of high-grade premium TMT bars and heavy structural steel products, we proudly supply modern infrastructure developments across the entire sub-continent with sustainable, precision-rolled materials engineered explicitly for multigenerational longevity.",
        cover_image: "/image/hero-factory.png", 
    };

    const quoteText = `"Our rigorous, multi-stage quality control checks ensure that every production item leaving our plant meets the absolute highest global standards — empowering structural engineers and builders to confidently raise frameworks that stand the test of time."`;

    const heroImage = (heroData.cover_image || heroData.file_url)
        ? resolveMediaUrl((heroData.cover_image || heroData.file_url) as string, "/image/hero-factory.png")
        : "/image/hero-factory.png";

    return (
        // The outer section allows natural height
        <section className="w-full bg-white pt-24 lg:pt-32 pb-12 lg:pb-20 h-auto overflow-visible">
            <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row h-auto items-stretch">
                
                {/* LEFT SIDE: Image & 30+ Years Badge */}
                {/* Removed fixed/min heights, using flex-1 so it matches the right side naturally */}
                <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-auto flex-1">
                    <div className="absolute top-6 left-6 md:top-10 md:left-10 bg-[#C41E3A] text-white p-6 md:p-8 z-10 flex flex-col items-center justify-center shadow-lg">
                        <span className="text-4xl md:text-5xl font-extrabold tracking-tight mb-1">30+</span>
                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-center leading-tight">
                            Years Of<br/>Excellence
                        </span>
                    </div>

                    <Image
                        src={heroImage}
                        alt="Kaaveri Steel Factory"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* RIGHT SIDE: Typography & Buttons */}
                {/* Ensured no overflow-y or max-h classes exist here */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 py-12 lg:px-16 xl:px-24 h-auto flex-1">
                    
                    <div className="w-12 h-1 bg-[#C41E3A] mb-6"></div>
                    
                    <div className="mb-8">
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-[54px] font-extrabold leading-[1.15] text-[#0B1B2D] whitespace-pre-line mb-1">
                            {heroData.title}
                        </h1>
                        
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-[54px] font-extrabold leading-[1.15] text-[#C41E3A] whitespace-pre-line">
                            {heroData.short_description}
                        </h2>
                    </div>

                    <div className="font-sans text-gray-600 text-base lg:text-lg leading-relaxed mb-10">
                        {renderContent(heroData.content)}
                    </div>

                    <div className="border border-gray-100 rounded-xl p-6 bg-white shadow-sm mb-12">
                        <blockquote className="font-serif italic text-gray-800 text-[15px] lg:text-[17px] leading-relaxed">
                            {quoteText}
                        </blockquote>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-auto">
                        <a 
                            href="/products" 
                            className="inline-flex items-center justify-center bg-[#C41E3A] text-white font-bold text-sm tracking-wider uppercase px-8 py-4 transition-colors hover:bg-[#A01830] rounded-sm"
                        >
                            Explore Products
                        </a>
                        <a 
                            href="/brochure.pdf" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-transparent text-gray-800 border border-gray-300 font-bold text-sm tracking-wider uppercase px-8 py-4 transition-colors hover:bg-gray-50 rounded-sm"
                        >
                            Download Brochure
                        </a>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

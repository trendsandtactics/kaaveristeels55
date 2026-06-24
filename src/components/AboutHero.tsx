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

    // Defaulting to content that matches your screenshot if CMS fails
    const heroData = items[0] || {
        title: "BUILT ON \nINDUSTRIAL STEEL.",
        short_description: "TRUSTED BY \nBUILDERS ACROSS \nINDIA.",
        content: "At <strong style='color:#C41E3A'>KAAVERI</strong>, we are deeply passionate about foundational structural integrity and committed to manufacturing perfection. As an industry-leading manufacturer of high-grade premium TMT bars and heavy structural steel products, we proudly supply modern infrastructure developments across the entire sub-continent with sustainable, precision-rolled materials engineered explicitly for multigenerational longevity.",
        cover_image: "/image/hero-factory.png", 
    };

    const quoteText = `"Our rigorous, multi-stage quality control checks ensure that every production item leaving our plant meets the absolute highest global standards — empowering structural engineers and builders to confidently raise frameworks that stand the test of time."`;

    const heroImage = (heroData.cover_image || heroData.file_url)
        ? resolveMediaUrl((heroData.cover_image || heroData.file_url) as string, "/image/hero-factory.png")
        : "/image/hero-factory.png";

    return (
        // Added pt-24 lg:pt-32 to ensure content drops below your fixed navbar
        <section className="w-full bg-white pt-24 lg:pt-32 pb-12 lg:pb-20">
            <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row min-h-[600px]">
                
                {/* LEFT SIDE: Image & 30+ Years Badge */}
                <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full">
                    {/* Floating Red Badge */}
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
                <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 py-12 lg:px-16 xl:px-24">
                    
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-2 text-[#0B1B2D]">
                        {heroData.title?.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>)}
                    </h1>
                    
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-8 text-[#C41E3A]">
                        {heroData.short_description?.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>)}
                    </h2>

                    <div className="font-sans text-gray-600 text-base lg:text-lg leading-relaxed mb-10">
                        {renderContent(heroData.content)}
                    </div>

                    <blockquote className="font-serif italic text-gray-800 text-lg lg:text-xl leading-relaxed mb-12 border-l-2 border-transparent">
                        {quoteText}
                    </blockquote>

                    {/* Buttons Container */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-auto">
                        <a 
                            href="/products" 
                            className="inline-flex items-center justify-center bg-[#C41E3A] text-white font-bold text-sm tracking-wider uppercase px-8 py-4 transition-colors hover:bg-[#A01830]"
                        >
                            Explore Products
                        </a>
                        <a 
                            href="/brochure.pdf" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-transparent text-gray-800 border border-gray-300 font-bold text-sm tracking-wider uppercase px-8 py-4 transition-colors hover:bg-gray-50"
                        >
                            Download Brochure
                        </a>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

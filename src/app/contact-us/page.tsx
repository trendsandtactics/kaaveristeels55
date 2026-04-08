"use client";

import React from "react";
import MapEmbed from "@/components/MapEmbed";

export default function ContactUsPage() {
    return (
        <main className="flex min-h-screen flex-col w-full relative pt-24 bg-background">
            {/* Contact Hero Area */}
            <div className="w-full py-16 md:py-24 bg-gradient-to-r from-accent-yellow via-[#FFD700] to-accent-yellow text-black relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_60%)] pointer-events-none mix-blend-overlay" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none mix-blend-overlay opacity-30" />

                <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-12 h-[2px] bg-black" />
                        <h2 className="font-body text-black uppercase tracking-[0.2em] font-bold text-sm">Get In Touch</h2>
                        <div className="w-12 h-[2px] bg-black" />
                    </div>
                    <h1 className="font-heading text-5xl md:text-7xl mb-6 text-black drop-shadow-md">
                        Reach Out to <span className="text-black font-extrabold">KAAVERI</span>
                    </h1>
                    <p className="font-body text-black max-w-2xl mx-auto text-lg leading-relaxed font-medium">
                        Whether you have inquiries about our premium steel products or require consulting for your structural needs, our team is directly available to assist you.
                    </p>
                </div>
            </div>

            <div className="w-full flex-grow py-8">
                <MapEmbed />
            </div>
        </main>
    );
}

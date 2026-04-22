"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface GenericPlaceholderPageProps {
    title?: string;
    subtitle?: string;
    description?: string;
    icon?: string;
    color?: string;
    children?: React.ReactNode;
}

const GenericPlaceholderPage: React.FC<GenericPlaceholderPageProps> = ({
    title = "Page Title",
    subtitle = "Category",
    description = "Content coming soon.",
    icon = "🚧",
    color = "accent-red",
    children
}) => {
    // Dynamic color classes map for tailwind since we can't reliably string inject them directly into arbitary utilities
    const isYellow = color === "accent-yellow";

    return (
        <main className="flex min-h-screen flex-col w-full relative pt-24 bg-background overflow-hidden hover:bg-black/5 transition-colors duration-[2000ms]">
            {/* Dark Aesthetic Hero Area */}
            <div className={`w-full py-8 md:py-10 bg-gradient-to-r from-accent-yellow via-[#FFD700] to-accent-yellow text-black relative overflow-hidden shadow-2xl group border-b-4 border-black`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_60%)] pointer-events-none mix-blend-overlay" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none mix-blend-overlay opacity-30" />

                <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-4"
                    >
                        <div className={`w-12 h-[2px] bg-black`} />
                        <h2 className={`font-sans uppercase tracking-[0.2em] font-bold text-sm text-black`}>{subtitle}</h2>
                        <div className={`w-12 h-[2px] bg-black`} />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-sans text-5xl md:text-7xl mb-4 text-black drop-shadow-md"
                    >
                        {title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="font-sans text-black/80 max-w-2xl mx-auto text-lg leading-relaxed font-medium"
                    >
                        {description}
                    </motion.p>
                </div>
            </div>

            {/* Content Section */}
            {children ? (
                <div className="flex-1 w-full bg-white z-10 relative">
                    {children}
                </div>
            ) : (
                <div className="flex-1 flex flex-col items-center justify-center py-24 px-6 relative z-10 bg-white">
                    <div className={`w-24 h-24 mb-8 rounded-full border flex flex-col items-center justify-center text-4xl ${isYellow ? 'border-accent-yellow/20 bg-accent-yellow/5' : 'border-accent-red/20 bg-accent-red/5'}`}>
                        <span>{icon}</span>
                    </div>
                <h3 className={`font-heading text-3xl text-black mb-4 transition-colors ${isYellow ? 'group-hover:text-accent-yellow' : 'group-hover:text-accent-red'}`}>Under Construction</h3>
                <p className="font-body text-black/60 mb-8 max-w-lg text-center font-medium">We are currently forging beautiful new content for this section. Check back shortly!</p>
                <Link href="/" className={`px-8 py-3 bg-black text-white font-body text-xs uppercase tracking-widest transition-colors font-bold shadow-lg ${isYellow ? 'hover:bg-accent-yellow hover:text-black' : 'hover:bg-accent-red'}`}>
                        Return to Home
                    </Link>
                </div>
            )}
        </main>
    );
};

export default GenericPlaceholderPage;
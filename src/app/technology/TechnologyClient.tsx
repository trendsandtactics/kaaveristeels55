"use client";

import React from "react";
import GenericPlaceholderPage from "@/components/GenericPlaceholderPage";
import { motion } from "framer-motion";

export default function TechnologyClient() {
    return (
        <GenericPlaceholderPage
            title="Advanced Manufacturing"
            subtitle="Our Technology"
            description="Explore the cutting-edge machinery, automated systems, and quenching technologies that give KAAVERI TMT bars their legendary strength."
            icon="⚙️"
            color="accent-red"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
                {/* Tech Showcase Section */}
                <div className="mb-32">
                    <h3 className="font-heading text-4xl text-center text-black mb-16">The Science of Strength</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-200 shadow-2xl rounded-xl overflow-hidden">
                        <div className="bg-black text-white p-12 md:p-16 relative overflow-hidden flex flex-col justify-center">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-red/20 rounded-full blur-[80px] pointer-events-none" />
                            <p className="font-body text-white/70 font-medium leading-relaxed mb-8 relative z-10">
                                Our advanced quenching technology rapidly cools the outer layer of the steel bar while keeping the core hot. This creates a highly hardened &quot;Martensite&quot; exterior layer, while the heat from the core slowly tempers the inner layers.
                            </p>
                            <ul className="space-y-4 font-body text-sm font-bold tracking-widest uppercase relative z-10">
                                <li className="flex items-center gap-3"><span className="w-8 h-[2px] bg-accent-red" /> High Yield Strength</li>
                                <li className="flex items-center gap-3"><span className="w-8 h-[2px] bg-accent-red" /> Superior Ductility</li>
                                <li className="flex items-center gap-3"><span className="w-8 h-[2px] bg-accent-red" /> Excellent Weldability</li>
                            </ul>
                        </div>
                        <div className="bg-[url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center min-h-[400px] relative">
                            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black" />
                        </div>
                    </div>
                </div>

                {/* Automation Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { step: "01", title: "Automated Billet Heating", text: "Computer-controlled walking beam furnaces calculate the exact optimal temperature profiles for every batch to prevent structural anomalies." },
                        { step: "02", title: "Cantilever Roughing Mill", text: "High-speed continuous rolling using rigid cantilever stands to guarantee precise weight/meter ratios and perfect rib geometry." },
                        { step: "03", title: "Spectrometric Analysis", text: "Online optical emission spectrometers continually analyze chemical composition (Carbon, Phosphorus, Sulphur) in real-time." }
                    ].map((tech, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-8 border-t-8 border-black hover:border-accent-yellow hover:-translate-y-2 shadow-lg transition-all"
                        >
                            <div className="font-heading text-5xl text-gray-200 mb-6 font-bold">{tech.step}</div>
                            <h4 className="font-heading text-2xl text-black mb-4">{tech.title}</h4>
                            <p className="font-body text-black/70 font-medium">{tech.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </GenericPlaceholderPage>
    );
}

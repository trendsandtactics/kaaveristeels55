"use client";

import React from "react";
import GenericPlaceholderPage from "@/components/GenericPlaceholderPage";

export default function QualityPolicyClient() {
    return (
        <GenericPlaceholderPage
            title="Uncompromising Quality"
            subtitle="Quality Policy"
            description="Our promise is strength. Read our comprehensive quality policy that guarantees the absolute best structural steel on the market."
            icon="✅"
            color="accent-yellow"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
                <div className="max-w-4xl mx-auto bg-white border border-gray-200 shadow-2xl p-8 md:p-16 relative">
                    {/* Decorative watermark */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] opacity-[0.03] font-heading select-none pointer-events-none whitespace-nowrap">
                        KAAVERI
                    </div>

                    <h3 className="font-heading text-4xl text-black mb-8 text-center bg-accent-yellow inline-block px-4 py-1 -mt-24 shadow-md rotate-[-2deg]">Official Declaration</h3>

                    <div className="prose prose-lg mx-auto font-body text-black/80 font-medium">
                        <p className="lead text-xl text-black font-semibold mb-8">
                            At KAAVERI TMT Bars & Structurals, we recognize that our products form the critical backbone of infrastructure that houses lives, businesses, and communities. Quality is not a department; it is our fundamental reason for operation.
                        </p>

                        <h4 className="font-heading text-2xl text-black mt-12 mb-4 border-b-2 border-accent-yellow pb-2 inline-block">1. Raw Material Supremacy</h4>
                        <p>
                            We pledge to use only the highest grade, chemically purified billets. Every batch of raw material undergoes rigorous spectrometric analysis before entering the heated forge. Any material deviating by even 0.01% from acceptable carbon/manganese ratios is immediately rejected.
                        </p>

                        <h4 className="font-heading text-2xl text-black mt-12 mb-4 border-b-2 border-accent-yellow pb-2 inline-block">2. Technological Precision</h4>
                        <p>
                            Our quenching and tempering technology operates on closed-loop feedback systems using PLC automation. This guarantees a perfect martensitic outer ring and a ductile ferrite-pearlite core on every millimeter of our TMT bars, ensuring superior yield strength and unmatched seismic resistance.
                        </p>

                        <h4 className="font-heading text-2xl text-black mt-12 mb-4 border-b-2 border-accent-yellow pb-2 inline-block">3. Continuous Improvement</h4>
                        <p>
                            We empower every employee to stop the production line if a quality discrepancy is suspected. We invest heavily in ongoing R&D and employee training to ensure our metallurgical processes remain at the global bleeding edge.
                        </p>

                        <div className="mt-16 pt-8 border-t border-gray-200 flex justify-between items-center">
                            <div>
                                <div className="font-[Signature] text-4xl text-black mb-2 -rotate-2">Director Name</div>
                                <div className="font-body text-sm font-bold tracking-widest uppercase text-black/50">Managing Director</div>
                            </div>
                            <div className="w-24 h-24 bg-[url('/image/kaveerilogo.png')] bg-contain bg-no-repeat bg-center opacity-30 grayscale" />
                        </div>
                    </div>
                </div>
            </div>
        </GenericPlaceholderPage>
    );
}

import React from "react";
import { ShieldCheck, HardHat, CheckCircle, Award } from "lucide-react";

export const metadata = {
  title: "Trust On Site | KAAVERI Steels",
  description: "Building trust on site through rigorous quality checks, transparent processes, and guaranteed material strength.",
};

const trustFeatures = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-red-600" />,
    title: "100% Quality Assurance",
    description: "Every batch of KAAVERI Steels undergoes rigorous automated and manual testing to ensure it exceeds industry standards.",
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-red-600" />,
    title: "On-Site Testing Support",
    description: "We provide comprehensive on-site testing support and documentation to give engineers and contractors absolute peace of mind.",
  },
  {
    icon: <Award className="w-8 h-8 text-red-600" />,
    title: "Certified Materials",
    description: "Our steel products are certified by national and international regulatory bodies, guaranteeing structural integrity.",
  },
  {
    icon: <HardHat className="w-8 h-8 text-red-600" />,
    title: "Expert Guidance",
    description: "Our technical experts are available for site visits to guide optimal usage, storage, and application of our steel products.",
  }
];

export default function TrustOnSitePage() {
  return (
    <main className="flex flex-col min-h-screen w-full relative pt-24 bg-gray-50 overflow-hidden transition-colors duration-500">
      {/* Hero Section */}
      <div className="w-full py-24 md:py-32 bg-gradient-to-r from-accent-yellow via-[#FFD700] to-accent-yellow text-black relative overflow-hidden shadow-2xl group border-b-4 border-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_60%)] pointer-events-none mix-blend-overlay" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none mix-blend-overlay opacity-30" />

        <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-6">
            <div className="w-12 h-[2px] bg-black" />
            <h2 className="font-body uppercase tracking-[0.2em] font-bold text-sm text-black">
              Reliability Guaranteed
            </h2>
            <div className="w-12 h-[2px] bg-black" />
          </div>

          <h1 className="font-heading text-5xl md:text-7xl mb-6 text-black drop-shadow-md">
            Trust On Site
          </h1>

          <p className="font-body text-black/80 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            We deliver more than just steel. We deliver the confidence that your structure will stand the test of time.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <section className="px-6 py-16 md:py-24 max-w-7xl mx-auto w-full z-10 relative">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl text-black mb-4">Why Contractors Trust Us</h2>
          <p className="font-body text-black/70 max-w-2xl mx-auto">
            From the manufacturing plant to your construction site, transparency and quality control are at the core of what we do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {trustFeatures.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-black/10 hover:shadow-lg hover:-translate-y-1 hover:border-black/20 transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start"
            >
              <div className="w-16 h-16 shrink-0 bg-red-50 rounded-xl flex items-center justify-center border border-red-100">
                {item.icon}
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-black mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-black/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications & Bottom Banner */}
      <section className="w-full bg-black text-white py-16 md:py-20 border-t-4 border-red-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-5xl mb-6">
            Request a Site Visit
          </h2>
          <p className="font-body text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Want to see the KAAVERI difference firsthand? Request an expert site visit to discuss material specifications and testing.
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-body font-bold uppercase tracking-wider text-sm hover:bg-red-700 transition-colors rounded-lg"
          >
            Schedule a Visit
          </a>
        </div>
      </section>
    </main>
  );
}
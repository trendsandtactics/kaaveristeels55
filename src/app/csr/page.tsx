import React from "react";
import { ShieldCheck, HardHat, CheckCircle, Award } from "lucide-react";

export const metadata = {
  title: "Trust On Site | KAAVERI Steels",
  description: "Quality. Transparency. Strength.",
};

const trustFeatures = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-red-600" />,
    title: "100% Quality Assurance",
    description: "Every batch undergoes strict testing to exceed standards.",
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-red-600" />,
    title: "On-Site Testing",
    description: "Live testing support for complete transparency.",
  },
  {
    icon: <Award className="w-8 h-8 text-red-600" />,
    title: "Certified Materials",
    description: "Approved by top regulatory bodies for strength.",
  },
  {
    icon: <HardHat className="w-8 h-8 text-red-600" />,
    title: "Expert Guidance",
    description: "Professional support for usage and application.",
  }
];

export default function TrustOnSitePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-6 py-12">
      
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {trustFeatures.map((item, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex gap-5 items-start"
          >
            <div className="w-14 h-14 flex items-center justify-center bg-red-50 rounded-xl">
              {item.icon}
            </div>

            <div>
              <h3 className="text-xl font-bold text-black mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}

      </div>

    </main>
  );
}

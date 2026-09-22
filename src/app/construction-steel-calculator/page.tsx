import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import ConstructionSteelCalculatorClient from "./ConstructionSteelCalculatorClient";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbJsonLd, getFaqJsonLd } from "@/lib/jsonld";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata("construction-steel-calculator");
}

const CALCULATOR_FAQS = [
  {
    question: "How is construction steel requirement calculated for a residential building?",
    answer:
      "As a standard civil engineering rule of thumb, residential buildings require approximately 4.0 to 4.5 kg of TMT steel reinforcement per square foot of total built-up area (Area × Number of Floors). Commercial buildings typically require 5.0 to 5.5 kg/sq.ft.",
  },
  {
    question: "What is the formula to calculate TMT steel bar weight per meter?",
    answer:
      "The weight of a TMT steel bar per meter is calculated using the formula Weight = D² / 162.2, where D is the diameter of the bar in millimeters. For example, a 16mm bar weighs (16 × 16) / 162.2 = 1.58 kg per meter.",
  },
  {
    question: "Why should Fe 550D TMT steel be used in construction?",
    answer:
      "Fe 550D grade steel offers a high yield strength of 550 N/mm² combined with exceptional ductility (elongation > 14.5%), making buildings significantly more resistant to seismic tremors and earthquakes.",
  },
];

export default function ConstructionSteelCalculatorPage() {
  const breadcrumbs = getBreadcrumbJsonLd([
    {
      name: "Construction Steel Calculator",
      path: "/construction-steel-calculator",
    },
  ]);

  const faqSchema = getFaqJsonLd(CALCULATOR_FAQS);

  return (
    <main className="w-full flex flex-col min-h-screen">
      <JsonLd id="calc-breadcrumbs" data={breadcrumbs} />
      <JsonLd id="calc-faq" data={faqSchema} />
      <ConstructionSteelCalculatorClient />
    </main>
  );
}

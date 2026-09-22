import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import HomeClient from "@/app/HomeClient";
import JsonLd from "@/components/JsonLd";
import { getProductJsonLd, getFaqJsonLd } from "@/lib/jsonld";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata("home");
}

const HOME_FAQS = [
  {
    question: "Why choose KAAVERI Fe 550D TMT steel bars for construction?",
    answer:
      "KAAVERI Fe 550D TMT bars combine high yield strength (550 N/mm²) with superior elongation (>14.5%) and German quenching technology, ensuring optimal earthquake resistance, bendability, and thermal durability.",
  },
  {
    question: "Where are KAAVERI Steels manufacturing plants located?",
    answer:
      "KAAVERI operates state-of-the-art steel manufacturing plants in Mayiladuthurai District (Komal Road, Maruthur Village) and Trichy District (Musiri – Thuraiyur Main Road), Tamil Nadu.",
  },
  {
    question: "How can I book a free on-site steel quality test?",
    answer:
      "You can request a complimentary on-site test through our 'Trust on Site' initiative on our website. Our mobile testing vehicle arrives within 48 hours to verify bar weight, rib patterns, and ductility on your site.",
  },
];

export default function Home() {
  const productSchema = getProductJsonLd();
  const faqSchema = getFaqJsonLd(HOME_FAQS);

  return (
    <>
      <JsonLd id="home-product-schema" data={productSchema} />
      <JsonLd id="home-faq-schema" data={faqSchema} />
      <HomeClient />
    </>
  );
}


import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import TrustOnSiteClient from "./TrustOnSiteClient";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbJsonLd, getFaqJsonLd } from "@/lib/jsonld";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata("trust-on-site");
}

const TRUST_FAQS = [
  {
    question: "What is KAAVERI's Trust on Site mobile testing service?",
    answer:
      "Trust on Site is a complimentary quality testing service where KAAVERI's certified mobile testing vehicle visits your construction site to verify steel weight per meter, diameter consistency, rib design, and bend ductility.",
  },
  {
    question: "How quickly does the testing vehicle arrive at my site?",
    answer:
      "Once you submit a request, our mobile testing engineers coordinate with you and typically arrive at your construction site within 48 hours across Tamil Nadu.",
  },
  {
    question: "Is there any charge for booking an on-site steel quality test?",
    answer:
      "No, the Trust on Site verification is 100% free of charge with zero obligation, allowing builders, engineers, and home builders to confirm genuine steel quality.",
  },
];

export default function TrustOnSitePage() {
  const breadcrumbs = getBreadcrumbJsonLd([{ name: "Trust on Site", path: "/trust-on-site" }]);
  const faqSchema = getFaqJsonLd(TRUST_FAQS);

  return (
    <>
      <JsonLd id="trust-breadcrumbs" data={breadcrumbs} />
      <JsonLd id="trust-faq" data={faqSchema} />
      <TrustOnSiteClient />
    </>
  );
}


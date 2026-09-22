import type { Metadata } from "next";
import DynamicModulePage from "@/components/DynamicModulePage";
import { buildPageMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbJsonLd, getProductJsonLd, getFaqJsonLd } from "@/lib/jsonld";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata("products");
}

const PRODUCT_FAQS = [
  {
    question: "What grades of TMT steel bars does KAAVERI manufacture?",
    answer:
      "KAAVERI manufactures high-strength Fe 550D and Fe 500 TMT steel bars compliant with BIS standard IS 1786:2008, engineered with advanced German quenching technology.",
  },
  {
    question: "What are the key advantages of KAAVERI Fe 550D TMT bars?",
    answer:
      "KAAVERI Fe 550D bars offer higher yield strength (550 N/mm²), superior elongation (> 14.5%) for seismic and earthquake safety, optimal rib patterns for concrete bonding, and corrosion resistance.",
  },
  {
    question: "What sizes are available in KAAVERI TMT steel bars?",
    answer:
      "We supply standard diameters of 8mm, 10mm, 12mm, 16mm, 20mm, 25mm, and 32mm, suitable for residential homes, high-rise buildings, bridges, and infrastructure projects.",
  },
];

export default function ProductsPage() {
  const breadcrumbs = getBreadcrumbJsonLd([{ name: "Products", path: "/products" }]);
  const productSchema = getProductJsonLd();
  const faqSchema = getFaqJsonLd(PRODUCT_FAQS);

  return (
    <>
      <JsonLd id="products-breadcrumbs" data={breadcrumbs} />
      <JsonLd id="products-product-schema" data={productSchema} />
      <JsonLd id="products-faq-schema" data={faqSchema} />
      <DynamicModulePage
        module="products"
        heading="Products"
        subtitle="Explore premium TMT, structural and industrial steel offerings with detailed specifications, brochures and feature highlights."
      />
    </>
  );
}


import type { Metadata } from "next";
import DynamicModulePage from "@/components/DynamicModulePage";
import { buildPageMetadata } from "@/lib/seo";

export const revalidate = 300;

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata("product-brochure");
}

export default function ProductBrochurePage() {
  return <DynamicModulePage module="brochures" heading="Product Brochures" subtitle="Download latest product brochures, data sheets and catalog files from one place." />;
}

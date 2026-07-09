import type { Metadata } from "next";
import DynamicModulePage from "@/components/DynamicModulePage";
import { buildPageMetadata } from "@/lib/seo";

export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata("products");
}

export default function ProductsPage() {
  return <DynamicModulePage module="products" heading="Products" subtitle="Explore premium TMT, structural and industrial steel offerings with detailed specifications, brochures and feature highlights." />;
}

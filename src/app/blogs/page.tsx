import type { Metadata } from "next";
import DynamicModulePage from "@/components/DynamicModulePage";
import { buildPageMetadata } from "@/lib/seo";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata("blogs");
}

export default function BlogsPage() {
  return <DynamicModulePage module="blogs" heading="Blogs & Insights" subtitle="Read technical guides, market updates and engineering thought leadership from our teams." />;
}

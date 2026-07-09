import type { Metadata } from "next";
import DynamicModulePage from "@/components/DynamicModulePage";
import { buildPageMetadata } from "@/lib/seo";

export const revalidate = 300;

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata("careers");
}

export default function CareersPage() {
  return <DynamicModulePage module="careers" heading="Careers" subtitle="Explore job openings and build your career with KAAVERI’s manufacturing excellence teams." />;
}

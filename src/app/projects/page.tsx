import type { Metadata } from "next";
import DynamicModulePage from "@/components/DynamicModulePage";
import { buildPageMetadata } from "@/lib/seo";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata("projects");
}

export default function ProjectsPage() {
  return <DynamicModulePage module="projects" heading="Projects" subtitle="Discover completed and ongoing infrastructure, industrial and commercial steel projects." />;
}

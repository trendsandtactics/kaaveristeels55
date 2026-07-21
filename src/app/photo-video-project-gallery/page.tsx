import type { Metadata } from "next";
import DynamicModulePage from "@/components/DynamicModulePage";
import { buildPageMetadata } from "@/lib/seo";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata("photo-video-project-gallery");
}

export default function PhotoVideoProjectGalleryPage() {
  return <DynamicModulePage module="galleries" heading="Photo / Video / Project Gallery" subtitle="Experience site visuals, milestone videos and project showcases through dynamic galleries." />;
}

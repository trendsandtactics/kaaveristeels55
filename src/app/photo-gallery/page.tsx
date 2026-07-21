import type { Metadata } from "next";
import DynamicModulePage from "@/components/DynamicModulePage";
import { buildPageMetadata } from "@/lib/seo";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata("photo-gallery");
}

export default function PhotoGalleryPage() {
  return <DynamicModulePage module="galleries" heading="Photo Gallery" subtitle="Browse production, event and project galleries in an organized visual showcase." />;
}

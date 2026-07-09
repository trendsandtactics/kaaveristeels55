import DynamicModulePage from "@/components/DynamicModulePage";
import { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const revalidate = 300;

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata("media-events");
}

export default function MediaEventsPage() {
  return (
    <DynamicModulePage
      module="mediaEvents"
      heading="Media & Events"
      subtitle="Discover the latest updates, event highlights, and media coverage from KAAVERI Steels."
    />
  );
}
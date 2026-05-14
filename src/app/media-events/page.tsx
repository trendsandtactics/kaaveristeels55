import DynamicModulePage from "@/components/DynamicModulePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media & Events | KAAVERI Steels",
  description: "Stay updated with the latest news, media, and events at KAAVERI Steels.",
};

export default function MediaEventsPage() {
  return (
    <DynamicModulePage
      module="mediaEvents"
      heading="Media & Events"
      subtitle="Discover the latest updates, event highlights, and media coverage from KAAVERI Steels."
    />
  );
}
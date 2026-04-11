import React from "react";
import DynamicModulePage from "@/components/DynamicModulePage";

export const metadata = {
  title: "Announcements & Popups | KAAVERI Steels",
  description: "Latest announcements and updates from KAAVERI Steels.",
};

export default function PopupModulesPage() {
  return (
    <DynamicModulePage
      module="popups"
      heading="Announcements"
      subtitle="The latest updates, offers, and announcements from KAAVERI Steels."
    />
  );
}
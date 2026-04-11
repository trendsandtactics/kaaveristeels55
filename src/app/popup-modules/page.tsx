import React from "react";
import DynamicModulePage from "@/components/DynamicModulePage";

export const metadata = {
  title: "Popup Modules | KAAVERI Steels",
  description: "View active popup announcements and event highlights.",
};

export default function PopupModulesPage() {
  return (
    <DynamicModulePage
      module="popups"
      heading="Popup Announcements"
      subtitle="Browse all currently active popups and events."
    />
  );
}
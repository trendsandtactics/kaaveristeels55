"use client";

import GenericPlaceholderPage from "@/components/GenericPlaceholderPage";

export default function PopupModulesPage() {
  return (
    <GenericPlaceholderPage
      title="Popup Modules"
      subtitle="Certificates • Wishes • Events"
      description="Manage popup modules for certificates, greetings, event planners, and campaign announcements."
      icon="🔔"
      color="accent-yellow"
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 px-4 py-12 sm:grid-cols-2 sm:gap-6 sm:px-6 sm:py-16 md:grid-cols-3 md:px-12 md:py-20">
        {[
          "Certificate Popups",
          "Festival / Wishes Popups",
          "Event Planner Popups",
        ].map((item) => (
          <div key={item} className="rounded-xl sm:rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm transition hover:shadow-md">
            <h3 className="font-heading mb-2 text-xl text-black sm:text-2xl">{item}</h3>
            <p className="font-body text-sm text-black/70 sm:text-base">Placeholder module ready for CMS/API integration.</p>
          </div>
        ))}
      </div>
    </GenericPlaceholderPage>
  );
}

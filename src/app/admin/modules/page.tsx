"use client";

import AdminContentManager from "@/components/AdminContentManager";

export default function AdminModulesPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-100 px-6 pb-12 pt-32 md:px-12">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(circle_at_top_right,_#fda4af_0%,_transparent_38%),radial-gradient(circle_at_left,_#7dd3fc_0%,_transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl">
        <header className="mb-8 rounded-2xl border border-white/70 bg-white/80 p-6 shadow-sm backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-red">Admin CMS</p>
          <h1 className="mt-2 font-heading text-4xl text-slate-900">Dynamic Modules Management</h1>
          <p className="mt-2 text-sm text-slate-600">Manage products, media/events, blogs, projects, careers, dealers, galleries, brochures and popup content.</p>
        </header>

        <AdminContentManager />
      </div>
    </div>
  );
}

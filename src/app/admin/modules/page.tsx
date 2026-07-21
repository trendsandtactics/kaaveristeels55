"use client";

import AdminContentManager from "@/components/AdminContentManager";
import { LayoutDashboard } from "lucide-react";

export default function AdminModulesPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-100 px-4 pb-12 pt-24 sm:px-6 sm:pt-28 md:px-12 lg:pt-32">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(circle_at_top_right,_#fda4af_0%,_transparent_38%),radial-gradient(circle_at_left,_#7dd3fc_0%,_transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl">
        <header className="mb-6 rounded-2xl border border-white/70 bg-white/80 p-5 shadow-sm backdrop-blur sm:mb-8 sm:p-6">
          <div className="flex items-center gap-3">
            <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-slate-900 to-slate-700 text-white shadow-md sm:flex">
              <LayoutDashboard className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-red">Admin CMS</p>
              <h1 className="mt-1 font-heading text-2xl text-slate-900 sm:text-4xl">Dynamic Modules Management</h1>
            </div>
          </div>
          <p className="mt-3 text-sm text-slate-600">Manage products, media/events, blogs, projects, careers, dealers, galleries, brochures and popup content.</p>
        </header>

        <AdminContentManager />
      </div>
    </div>
  );
}

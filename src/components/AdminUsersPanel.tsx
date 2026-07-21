"use client";

import { FormEvent, useEffect, useState } from "react";
import { Trash2, KeyRound, Users as UsersIcon } from "lucide-react";
import { ASSIGNABLE_MODULES, type ModuleName } from "@/lib/admin-modules";

type AdminUser = {
  id: number;
  email: string;
  enabledModules: string[];
  status: "active" | "disabled";
  createdAt: string;
};

const emptyForm = { email: "", password: "", enabledModules: [] as ModuleName[] };

export default function AdminUsersPanel() {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [saving, setSaving] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/users", { cache: "no-store" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Unable to load users.");
      setUsers(data.data ?? []);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to load users.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const resetForm = () => {
    setForm(emptyForm);
    setEditingId(null);
  };

  const toggleModule = (key: ModuleName) => {
    setForm((s) => ({
      ...s,
      enabledModules: s.enabledModules.includes(key)
        ? s.enabledModules.filter((m) => m !== key)
        : [...s.enabledModules, key],
    }));
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSaving(true);
    setMessage("");
    try {
      const url = editingId ? `/api/admin/users/${editingId}` : "/api/admin/users";
      const method = editingId ? "PUT" : "POST";
      const body: Record<string, unknown> = { email: form.email, enabledModules: form.enabledModules };
      if (form.password) body.password = form.password;

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Save failed.");

      setMessage(editingId ? "User updated." : "User created.");
      resetForm();
      fetchUsers();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Save failed.");
    } finally {
      setSaving(false);
    }
  };

  const editUser = (user: AdminUser) => {
    setEditingId(user.id);
    setForm({ email: user.email, password: "", enabledModules: user.enabledModules as ModuleName[] });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleStatus = async (user: AdminUser) => {
    const nextStatus = user.status === "active" ? "disabled" : "active";
    await fetch(`/api/admin/users/${user.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: nextStatus }),
    });
    fetchUsers();
  };

  const deleteUser = async (id: number) => {
    if (!confirm("Delete this admin user? They will no longer be able to log in.")) return;
    const res = await fetch(`/api/admin/users/${id}`, { method: "DELETE" });
    if (res.ok) {
      setMessage("User deleted.");
      fetchUsers();
    }
  };

  return (
    <div className="grid gap-6 xl:grid-cols-2">
      <div className="rounded-2xl border border-slate-200/80 bg-white/95 p-4 shadow-lg shadow-slate-200/60 sm:p-6">
        <div className="mb-1 flex items-center gap-2">
          <span className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white shadow-sm ${editingId ? "bg-gradient-to-br from-blue-500 to-blue-600" : "bg-gradient-to-br from-red-500 to-rose-600"}`}>
            <UsersIcon className="h-4 w-4" />
          </span>
          <h3 className="font-serif text-xl text-slate-900 sm:text-2xl">{editingId ? "Edit" : "Create"} Admin User</h3>
        </div>
        <p className="mb-4 text-sm text-slate-600">Give a teammate their own login and choose exactly which modules they can see and manage.</p>

        <form onSubmit={submit} className="space-y-4">
          <input
            required
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-red-500/30 transition focus:ring-2"
          />
          <div className="relative">
            <KeyRound className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              required={!editingId}
              type="password"
              placeholder={editingId ? "New password (leave blank to keep current)" : "Password (min 6 characters)"}
              value={form.password}
              onChange={(e) => setForm((s) => ({ ...s, password: e.target.value }))}
              className="w-full rounded-lg border border-slate-300 py-2 pl-9 pr-3 text-sm outline-none ring-red-500/30 transition focus:ring-2"
              minLength={6}
            />
          </div>

          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Enabled Modules</p>
            <div className="grid grid-cols-1 gap-1.5 rounded-xl border border-slate-200 bg-slate-50/60 p-3 sm:grid-cols-2">
              {ASSIGNABLE_MODULES.map((module) => {
                const Icon = module.icon;
                const checked = form.enabledModules.includes(module.key);
                return (
                  <label
                    key={module.key}
                    className={`flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 text-sm transition ${checked ? "bg-white shadow-sm ring-1 ring-red-200" : "hover:bg-white/70"}`}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleModule(module.key)}
                      className="rounded border-slate-300 text-red-600 focus:ring-red-500"
                    />
                    <Icon className="h-3.5 w-3.5 shrink-0 text-slate-500" />
                    <span className="truncate text-slate-700">{module.label}</span>
                  </label>
                );
              })}
            </div>
          </div>

          <div className="flex gap-2 border-t border-slate-100 pt-4">
            <button type="submit" disabled={saving} className="rounded-lg bg-gradient-to-r from-red-500 to-rose-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-rose-400/30 transition hover:brightness-110 disabled:opacity-60">
              {saving ? "Saving..." : editingId ? "Update User" : "Create User"}
            </button>
            {editingId ? (
              <button type="button" onClick={resetForm} className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                Cancel
              </button>
            ) : null}
          </div>
        </form>

        {message ? <p className="mt-4 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">{message}</p> : null}
      </div>

      <div className="rounded-2xl border border-slate-200/80 bg-white/95 p-4 shadow-lg shadow-slate-200/60 sm:p-6">
        <div className="mb-4 flex items-center gap-2">
          <h3 className="font-serif text-xl text-slate-900 sm:text-2xl">Admin Users</h3>
          <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-bold text-slate-600">{users.length}</span>
        </div>

        {loading ? (
          <div className="flex items-center justify-center gap-2 py-8 text-sm text-slate-500">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-t-red-500" />
            Loading...
          </div>
        ) : users.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-slate-200 py-10 text-center">
            <UsersIcon className="h-8 w-8 text-slate-300" />
            <p className="text-sm text-slate-500">No additional admin users yet.</p>
          </div>
        ) : (
          <div className="space-y-2">
            {users.map((user) => (
              <div key={user.id} className="rounded-xl border border-slate-200 p-3 transition hover:bg-slate-50/60">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="font-semibold text-slate-900">{user.email}</p>
                    <p className="text-xs text-slate-500">{user.enabledModules.length} module{user.enabledModules.length === 1 ? "" : "s"} enabled</p>
                  </div>
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold capitalize ${user.status === "active" ? "bg-emerald-100 text-emerald-700" : "bg-slate-200 text-slate-600"}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${user.status === "active" ? "bg-emerald-500" : "bg-slate-400"}`} />
                    {user.status}
                  </span>
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-1">
                  <button onClick={() => editUser(user)} className="rounded-md px-2 py-1 text-xs font-semibold text-blue-700 transition hover:bg-blue-50">Edit</button>
                  <button onClick={() => toggleStatus(user)} className="rounded-md px-2 py-1 text-xs font-semibold text-amber-700 transition hover:bg-amber-50">
                    {user.status === "active" ? "Disable" : "Enable"}
                  </button>
                  <button onClick={() => deleteUser(user.id)} className="flex items-center gap-1 rounded-md px-2 py-1 text-xs font-semibold text-red-700 transition hover:bg-red-50">
                    <Trash2 className="h-3 w-3" />
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

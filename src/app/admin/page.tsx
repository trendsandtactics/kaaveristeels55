"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL ?? "admin@kaaveristeels.com";
const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD ?? "Admin@Kaaveri";

export default function AdminPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (email.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase() && password === ADMIN_PASSWORD) {
      setLoginError("");
      router.push("/admin/modules");
      return;
    }

    setLoginError("Invalid email or password.");
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 px-6 pb-12 pt-32 md:px-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-red-500/20 blur-3xl" />
        <div className="absolute -right-24 bottom-12 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <section className="relative mx-auto max-w-md rounded-3xl border border-white/15 bg-white/10 p-7 shadow-2xl backdrop-blur-xl">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100/80">Kaaveri Admin</p>
        <h1 className="mb-2 font-heading text-3xl text-white">Admin Login</h1>
        <p className="mb-6 text-sm text-white/70">Sign in to continue to Dynamic CMS panel.</p>

        <form onSubmit={onSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
            className="w-full rounded-xl border border-white/25 bg-white/90 px-3 py-2.5 text-sm text-slate-900 shadow-sm outline-none ring-red-500/40 transition focus:ring-2"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            className="w-full rounded-xl border border-white/25 bg-white/90 px-3 py-2.5 text-sm text-slate-900 shadow-sm outline-none ring-red-500/40 transition focus:ring-2"
            required
          />
          <button type="submit" className="w-full rounded-xl bg-gradient-to-r from-red-500 to-rose-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-rose-900/35 transition hover:brightness-110">Sign In</button>
        </form>

        {loginError ? <p className="mt-4 rounded-lg border border-red-300/40 bg-red-500/20 px-3 py-2 text-sm text-red-100">{loginError}</p> : null}
      </section>
    </div>
  );
}

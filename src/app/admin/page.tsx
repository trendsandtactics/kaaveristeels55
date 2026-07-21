"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Eye, EyeOff, Mail } from "lucide-react";

const ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL ?? "admin@kaaveristeels.com";
const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD ?? "Admin@Kaaveri";

export default function AdminPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
    <div className="relative min-h-screen overflow-hidden bg-slate-950 px-4 pb-12 pt-24 sm:px-6 sm:pt-28 md:px-12 lg:pt-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-red-500/20 blur-3xl" />
        <div className="absolute -right-24 bottom-12 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <section className="relative mx-auto w-full max-w-md rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl sm:p-7">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-rose-600 shadow-lg shadow-rose-900/40">
          <Lock className="h-5 w-5 text-white" />
        </div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100/80">Kaaveri Admin</p>
        <h1 className="mb-2 font-heading text-3xl text-white">Admin Login</h1>
        <p className="mb-6 text-sm text-white/70">Sign in to continue to Dynamic CMS panel.</p>

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="relative">
            <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
              className="w-full rounded-xl border border-white/25 bg-white/90 py-2.5 pl-9 pr-3 text-sm text-slate-900 shadow-sm outline-none ring-red-500/40 transition focus:ring-2"
              required
            />
          </div>
          <div className="relative">
            <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
              className="w-full rounded-xl border border-white/25 bg-white/90 py-2.5 pl-9 pr-9 text-sm text-slate-900 shadow-sm outline-none ring-red-500/40 transition focus:ring-2"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-700"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          <button type="submit" className="w-full rounded-xl bg-gradient-to-r from-red-500 to-rose-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-rose-900/35 transition hover:brightness-110">Sign In</button>
        </form>

        {loginError ? <p className="mt-4 rounded-lg border border-red-300/40 bg-red-500/20 px-3 py-2 text-sm text-red-100">{loginError}</p> : null}
      </section>
    </div>
  );
}

import SteelCalculator from "@/components/Calculators/SteelCalculator";

export const metadata = {
  title: "Construction Steel Calculator | KAAVERI",
};

export default function ConstructionSteelCalculatorPage() {
  return (
    <main className="flex min-h-screen flex-col w-full relative pt-24 bg-background">
      <div className="relative w-full overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-black py-24 text-white shadow-2xl md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.28)_0%,transparent_40%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:36px_36px] opacity-40" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">Construction Intelligence</p>
          <h1 className="mb-4 mt-3 font-heading text-5xl font-extrabold text-white md:text-7xl">Construction Steel Calculator</h1>
          <p className="font-body text-lg text-white/80">
            A modern estimation experience for engineers, contractors, and procurement teams—quickly calculate steel quantity, bar weight, and bundle planning with confidence.
          </p>
        </div>
      </div>
      <section className="max-w-6xl mx-auto w-full px-6 md:px-12 py-16">
        <SteelCalculator />
      </section>
    </main>
  );
}

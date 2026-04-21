export default function LoadingModuleDetail() {
  return (
    <main className="min-h-screen pt-40 pb-20 bg-gray-50 flex items-start justify-center">
      <div className="flex flex-col items-center mt-20">
        <div className="w-12 h-12 border-4 border-black/10 border-t-accent-red rounded-full animate-spin"></div>
        <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-black/50 animate-pulse">
          Loading Details...
        </p>
      </div>
    </main>
  );
}
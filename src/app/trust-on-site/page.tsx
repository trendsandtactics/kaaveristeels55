import Image from "next/image";
import { listModuleItems } from "@/lib/dynamic-cms";
import TrustOnSiteForm from "@/components/TrustOnSiteForm";

export default async function TrustOnSitePage() {
  const allItems = await listModuleItems("trustOnSite", { status: "published" });
  const leftItems = allItems.filter(item => {
    const extra = item.extra_data && typeof item.extra_data === 'string' ? JSON.parse(item.extra_data) : item.extra_data;
    return extra?.card === 'left';
  });
  const rightItems = allItems.filter(item => {
    const extra = item.extra_data && typeof item.extra_data === 'string' ? JSON.parse(item.extra_data) : item.extra_data;
    return extra?.card === 'right';
  });

  return (
    <main className="w-full bg-[#f3f4f6]">

      {/* 🌟 HERO SECTION */}
    <section className="relative pt-28 pb-6 md:pt-32 md:pb-8">

  {/* 🌆 Background Image */}
  <div className="absolute inset-0">
    <Image
      src="/bg1.png"   // your background image
      alt="background"
      fill
      priority
      className="object-cover"
    />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

    {/* TITLE */}
    <p className="font-sans uppercase tracking-widest text-sm text-gray-500 mb-3 font-bold">
      KAAVERI STEELS
    </p>

    <h1 className="font-serif text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
      Trust On Site
    </h1>

    <p className="font-sans text-gray-600 max-w-2xl mx-auto mb-10 font-medium">
      We don’t just promise quality — we prove it with live testing,
      transparency, and engineering excellence.
    </p>

    {/* 🚚 VEHICLE HERO */}
    <div className="relative flex justify-center mb-12">
      <Image
        src="/vehicle.png"
        alt="vehicle"
        width={1024}
        height={500}
        priority
        className="w-full max-w-5xl object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
      />
    </div>

    <div className="flex justify-center mt-10">
      <button
        onClick={() => document.getElementById("book-test")?.scrollIntoView({ behavior: "smooth" })}
        className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 md:py-4 text-sm md:text-base font-semibold tracking-wide rounded-lg shadow-md hover:shadow-lg transition duration-300"
      >
        Book an Appointment
      </button>
    </div>

  </div>
</section>


      {/* 🔴 CONTENT SECTION */}
     <section className="px-6 md:px-20 py-16 bg-gray-50">
  
  <div className="max-w-7xl mx-auto">

    {/* HEADER CARDS */}
    <div className="grid md:grid-cols-2 gap-6 mb-12">

      <div className="font-serif bg-gradient-to-r from-red-700 to-red-500 text-white text-center py-5 rounded-xl font-semibold text-lg shadow-md">
        “We Don’t Just Promise Quality – We Prove It.”
      </div>

      <div className="font-serif bg-gradient-to-r from-red-700 to-red-500 text-white text-center py-5 rounded-xl font-semibold text-lg shadow-md">
        Why This Changes Everything
      </div>

    </div>

    {/* CONTENT */}
    <div className="grid md:grid-cols-2 gap-8">

      {/* LEFT CARD */}
      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300">
        <ul className="space-y-5">

          {leftItems.map((item) => (
            <li key={item.id} className="flex items-start gap-3 group">
              
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white transition">
                ✓
              </span>

              <p className="text-gray-700 group-hover:text-black transition">
                {item.title}
              </p>

            </li>
          ))}

        </ul>
      </div>

      {/* RIGHT CARD */}
      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300">
        <ul className="space-y-5">

          {rightItems.map((item) => (
            <li key={item.id} className="flex items-start gap-3 group">
              
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white transition">
                ✓
              </span>

              <p className="text-gray-700 group-hover:text-black transition">
                {item.title}
              </p>

            </li>
          ))}

        </ul>
      </div>

    </div>

  </div>

</section>


      <TrustOnSiteForm />

    </main>
  );
}

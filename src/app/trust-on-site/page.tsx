import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  // Mock Data: In a real application, fetch this data using the params.slug from your CMS/Database
  const article = {
    title: "The Future of Construction: High-Grade TMT Bars Explained",
    category: "Industry Insights",
    date: "October 12, 2023",
    author: "Engineering Team",
    readTime: "5 Min Read",
    coverImage: "/bg1.png", // Replace with actual dynamic article cover image
  };

  return (
    <main className="w-full bg-[#f8f9fa] min-h-screen font-sans selection:bg-red-600 selection:text-white">
      
      {/* 🌟 HERO SECTION */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-end pb-16 md:pb-24">
        {/* Background Image */}
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          priority
          className="object-cover"
        />
        {/* Dark Industrial Overlays for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          {/* Category & Read Time */}
          <div className="flex items-center gap-4 mb-5">
            <span className="bg-red-600 text-white text-xs font-bold uppercase tracking-widest py-1.5 px-3 rounded-sm shadow-sm">
              {article.category}
            </span>
            <span className="text-gray-300 text-sm font-medium tracking-wide">
              {article.readTime}
            </span>
          </div>
          
          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] max-w-4xl mb-6 drop-shadow-lg">
            {article.title}
          </h1>
          
          {/* Meta Info */}
          <div className="flex items-center gap-4 text-gray-300 text-sm md:text-base font-medium">
            <span>By <span className="text-white font-semibold">{article.author}</span></span>
            <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
            <span>{article.date}</span>
          </div>
        </div>
      </section>

      {/* 📖 MAIN CONTENT & SIDEBAR */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

        {/* LEFT: ARTICLE CONTENT (Rich Text Display) */}
        <article className="lg:col-span-8 bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-200">
          
          <div className="text-gray-700 leading-relaxed space-y-7 text-lg md:text-[19px]">
            
            {/* Intro Paragraph */}
            <p className="text-xl md:text-2xl font-medium text-gray-900 leading-snug mb-10">
              When it comes to building structures that last for generations, the foundation and skeletal strength are non-negotiable. Thermomechanically Treated (TMT) steel bars have revolutionized the construction industry, bringing unprecedented earthquake resistance and longevity to modern infrastructure.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6 font-sans">Why TMT Exceeds Expectations</h2>
            
            <p>
              Unlike traditional steel, TMT bars go through a specialized cooling process that hardens the outer layer while keeping the inner core flexible. This dual-structure is the secret behind its immense tensile strength.
            </p>

            {/* Premium Blockquote */}
            <blockquote className="my-10 pl-6 border-l-4 border-red-600 italic text-xl md:text-2xl text-gray-800 font-serif bg-gray-50 py-8 pr-6 rounded-r-xl shadow-sm">
              "The true measure of a building's lifespan isn't seen in its facade, but hidden within its concrete veins."
            </blockquote>

            <p>
              For builders and engineers, this means fewer compromises. The higher weldability and superior elongation values make TMT the ultimate choice for seismic zones.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-10 mb-6 font-sans">Key Advantages:</h3>
            
            {/* Styled List */}
            <ul className="space-y-4 mb-8">
              {[
                { title: "Superior Ductility", desc: "Absorbs high stress without breaking." },
                { title: "Corrosion Resistance", desc: "Perfect for coastal and humid environments." },
                { title: "Cost Efficiency", desc: "Less steel is required compared to older grades." }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4 items-start bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-red-100 text-red-600 font-bold shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span><strong className="text-gray-900">{item.title}:</strong> {item.desc}</span>
                </li>
              ))}
            </ul>

            <p>
              Choosing the right steel isn't just a procurement decision; it's a commitment to safety and excellence. Always ensure your TMT bars are tested and certified.
            </p>
          </div>

          {/* Tags & Share */}
          <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap gap-3">
              <span className="bg-gray-100 hover:bg-gray-200 cursor-pointer text-gray-700 text-sm font-semibold py-2 px-5 rounded-full transition">Construction</span>
              <span className="bg-gray-100 hover:bg-gray-200 cursor-pointer text-gray-700 text-sm font-semibold py-2 px-5 rounded-full transition">TMT Steel</span>
              <span className="bg-gray-100 hover:bg-gray-200 cursor-pointer text-gray-700 text-sm font-semibold py-2 px-5 rounded-full transition">Engineering</span>
            </div>
            <div className="flex items-center gap-4 font-bold text-gray-900">
              Share:
              <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-red-600 hover:text-white transition shadow-sm">In</button>
              <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-red-600 hover:text-white transition shadow-sm">Tw</button>
              <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-red-600 hover:text-white transition shadow-sm">Fb</button>
            </div>
          </div>
        </article>

        {/* RIGHT: SIDEBAR */}
        <aside className="lg:col-span-4 space-y-8">

          {/* 🎯 CALL TO ACTION WIDGET */}
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.15)] relative overflow-hidden border border-gray-800">
            <div className="absolute top-0 right-0 w-40 h-40 bg-red-600 opacity-20 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-yellow-500 opacity-10 blur-3xl rounded-full"></div>
            
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 relative z-10 font-sans tracking-tight">Don’t Compromise <br /> on Strength.</h3>
            <p className="text-gray-400 mb-8 relative z-10 text-sm md:text-base">
              Get certified, high-quality TMT steel for your next big project. Let our experts guide you.
            </p>
            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition duration-300 shadow-[0_4px_14px_0_rgb(220,38,38,0.39)] relative z-10 tracking-wide">
              Request a Free Quote
            </button>
          </div>

          {/* 📰 RECENT POSTS WIDGET */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-xl font-extrabold text-gray-900 mb-6 border-b border-gray-200 pb-4 uppercase tracking-wider text-sm">Recent Articles</h3>
            <div className="space-y-6">
              {[
                "5 Signs Your Construction Needs Better Steel",
                "Understanding Yield Strength in TMT Bars",
                "How We Test Kaaveri Steels On-Site"
              ].map((post, idx) => (
                <Link href="#" key={idx} className="block group">
                  <h4 className="text-gray-800 font-bold group-hover:text-red-600 transition leading-snug mb-2 text-md">
                    {post}
                  </h4>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Oct 10, 2023</p>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
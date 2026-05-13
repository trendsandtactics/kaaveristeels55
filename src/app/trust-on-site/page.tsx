"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function TrustOnSitePage() {
  const [ctaTitle, setCtaTitle] = useState("Don’t Take Chances \nWith Your Foundation.");
  const [ctaDesc, setCtaDesc] = useState("Book a Free Test of your current steel supply. Our Mobile Testing Vehicle will arrive within 48 hours.");
  
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  // Automatically fetch the latest "Pages Content" from the Admin Panel to populate the CTA
  useEffect(() => {
    fetch("/api/public/content/pages?limit=1")
      .then((res) => res.json())
      .then((data) => {
        const ctaData = data.data?.[0];
        if (ctaData) {
          if (ctaData.title) setCtaTitle(ctaData.title);
          if (ctaData.short_description) setCtaDesc(ctaData.short_description);
        }
      })
      .catch(console.error);
  }, []);

  const submitSiteVisit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setLoading(true);
    setSuccess("");

    try {
      await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          enquiry_type: "site_visit",
          message: `Requested a Trust On Site visit at: ${location || "No location provided"}`,
        }),
      });
      setSuccess("Request submitted! Our team will contact you shortly.");
      setName("");
      setPhone("");
      setLocation("");
    } catch (err) {
      console.error("Failed to submit site visit", err);
    }
    setLoading(false);
  };

  return (
    <main className="w-full bg-[#f3f4f6]">

      {/* 🌟 HERO SECTION */}
    <section className="relative pt-28 pb-6 md:pt-32 md:pb-8 overflow-hidden">

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

    <h1 className="font-sans text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
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

      <div className="bg-gradient-to-r from-red-700 to-red-500 text-white text-center py-5 rounded-xl font-semibold text-lg shadow-md">
        “We Don’t Just Promise Quality – We Prove It.”
      </div>

      <div className="bg-gradient-to-r from-red-700 to-red-500 text-white text-center py-5 rounded-xl font-semibold text-lg shadow-md">
        Why This Changes Everything
      </div>

    </div>

    {/* CONTENT */}
    <div className="grid md:grid-cols-2 gap-8">

      {/* LEFT CARD */}
      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300">
        <ul className="space-y-5">

          {[
            "Fully Equipped Mobile Testing Vehicle",
            "Instant Test Result",
            "Live Testing in Front of Engineers & Builders"
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3 group">
              
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white transition">
                ✓
              </span>

              <p className="text-gray-700 group-hover:text-black transition">
                {item}
              </p>

            </li>
          ))}

        </ul>
      </div>

      {/* RIGHT CARD */}
      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300">
        <ul className="space-y-5">

          {[
            "No Blind Trust",
            "Complete Transparency",
            "No Compromise On Strength",
            "Confidence For 100+ Years of Structure Life"
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3 group">
              
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white transition">
                ✓
              </span>

              <p className="text-gray-700 group-hover:text-black transition">
                {item}
              </p>

            </li>
          ))}

        </ul>
      </div>

    </div>

  </div>

</section>


      {/* 📞 CTA */}
 <section id="book-test" className="relative py-16 px-4 md:px-10 overflow-hidden">

  {/* Full Section Gradient (no inner red box) */}
  <div className="absolute inset-0 bg-gradient-to-br from-red-800 via-red-700 to-red-600"></div>

  {/* Decorative Glow */}
  <div className="absolute -top-20 -left-20 w-72 h-72 bg-red-500 opacity-30 blur-3xl rounded-full"></div>
  <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-yellow-400 opacity-20 blur-3xl rounded-full"></div>

  {/* Content Wrapper (transparent, no background) */}
  <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

    {/* Left Content */}
    <div className="text-white max-w-lg">

      <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 whitespace-pre-wrap">
        {ctaTitle}
      </h2>

      <p className="text-white/80 text-sm md:text-base mb-6 whitespace-pre-wrap">
        {ctaDesc}
      </p>

      {/* Phone CTA */}
      <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/10 w-fit backdrop-blur-md">
        <div className="w-12 h-12 flex items-center justify-center bg-yellow-400 text-red-800 rounded-lg text-xl font-bold">
          ☎
        </div>
        <div>
          <p className="text-xs text-white/70 tracking-wide">
            CALL NOW FOR FREE TEST
          </p>
          <p className="text-xl md:text-2xl font-bold tracking-wide">
            +91 88558 24555
          </p>
        </div>
      </div>

    </div>

    {/* Right Form */}
    <div className="w-full max-w-md bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 shadow-xl">

      <form onSubmit={submitSiteVisit} className="flex flex-col gap-4">

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-md bg-white/90 text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-md bg-white/90 text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <input
          type="text"
          placeholder="Site Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full px-4 py-3 rounded-md bg-white/90 text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <button type="submit" disabled={loading} className="w-full bg-yellow-400 hover:bg-yellow-300 text-red-900 font-semibold py-3 rounded-md tracking-wide transition duration-300 shadow-md hover:shadow-lg disabled:opacity-70">
          {loading ? "SUBMITTING..." : "BOOK FREE ON-SITE TEST"}
        </button>

        {success && <p className="text-green-300 text-sm text-center font-medium mt-2">{success}</p>}

      </form>

    </div>

  </div>

</section>


    </main>
  );
}

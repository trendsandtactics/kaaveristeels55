"use client";

import { FormEvent, useState } from "react";

const baseInputClasses = "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-500 outline-none transition focus:ring-2 focus:ring-red-500";

export default function EnquiryForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    enquiry_type: "product",
    product_name: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setStatusMessage("Submitting...");

    const formData = {
      ...form,
      _subject: `New Website Enquiry: ${form.enquiry_type}`,
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/karthikjungleemara@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatusMessage("Enquiry submitted successfully. We will be in touch!");
        setForm({
          name: "",
          email: "",
          phone: "",
          enquiry_type: "product",
          product_name: "",
          message: "",
        });
      } else {
        throw new Error(data.message || "Something went wrong. Please try again.");
      }
    } catch (error: unknown) {
      setStatusMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative w-full pt-24 pb-6 md:pt-28 md:pb-8 px-6 md:px-12 bg-cover bg-center"
      style={{
        backgroundImage: "url('/bg.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative max-w-3xl mx-auto bg-white/90 rounded-2xl p-6 md:p-8 shadow-xl border border-black/10">
        
        {/* Heading */}
        <div className="mb-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Get in Touch
          </h2>
          <p className="text-black/60 mt-2">
            Have a question or a project in mind? Let&apos;s talk.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={submit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            
            <input
              required
              placeholder="Name"
              className={baseInputClasses}
              value={form.name}
              onChange={(e) =>
                setForm((s) => ({ ...s, name: e.target.value }))
              }
            />

            <input
              required
              type="email"
              placeholder="Email"
              className={baseInputClasses}
              value={form.email}
              onChange={(e) =>
                setForm((s) => ({ ...s, email: e.target.value }))
              }
            />

            <input
              placeholder="Phone"
              className={baseInputClasses}
              value={form.phone}
              onChange={(e) =>
                setForm((s) => ({ ...s, phone: e.target.value }))
              }
            />

            <select
              className={baseInputClasses}
              value={form.enquiry_type}
              onChange={(e) =>
                setForm((s) => ({
                  ...s,
                  enquiry_type: e.target.value,
                }))
              }
            >
              <option value="product">Product Enquiry</option>
              <option value="other">Sales Enquiry</option>
            </select>

          </div>

          <input
            placeholder="Product name (optional)"
            className={baseInputClasses}
            value={form.product_name}
            onChange={(e) =>
              setForm((s) => ({ ...s, product_name: e.target.value }))
            }
          />

          <textarea
            placeholder="Message"
            className={`${baseInputClasses} min-h-28`}
            value={form.message}
            onChange={(e) =>
              setForm((s) => ({ ...s, message: e.target.value }))
            }
          />

          <button
            disabled={loading}
            className="w-full rounded-lg bg-red-600 hover:bg-red-700 transition text-white py-3 font-semibold disabled:opacity-70"
          >
            {loading ? "Submitting..." : "Submit Enquiry"}
          </button>
        </form>

        {/* Status Message */}
        {statusMessage && (
          <div className={`mt-6 p-4 rounded-lg text-sm font-semibold text-center ${
            statusMessage.includes("successfully") 
              ? "bg-green-50 text-green-700 border border-green-200" 
              : statusMessage.includes("Submitting")
              ? "bg-blue-50 text-blue-700 border border-blue-200"
              : "bg-red-50 text-red-700 border border-red-200"
          }`}>
            {statusMessage}
          </div>
        )}
      </div>
    </section>
  );
}

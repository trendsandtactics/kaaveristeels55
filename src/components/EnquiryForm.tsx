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
    setStatusMessage("");

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatusMessage(data.error ?? "Submission failed.");
        setLoading(false);
        return;
      }

      setStatusMessage("Enquiry submitted successfully.");
      setForm({
        name: "",
        email: "",
        phone: "",
        enquiry_type: "product",
        product_name: "",
        message: "",
      });
    } catch {
      // ESLint-safe: no unused variable
      setStatusMessage("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section
      className="relative w-full pt-28 pb-8 md:pt-32 md:pb-10 px-6 md:px-12 bg-cover bg-center"
      style={{
        backgroundImage: "url('/bg.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative max-w-3xl mx-auto bg-white/90 rounded-2xl p-8 shadow-xl border border-black/10">
        
        {/* Heading */}
        <div className="mb-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Get in Touch
          </h2>
          <p className="text-black/60 mt-2">
            Have a question or a project in mind? Let's talk.
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
            className="w-full rounded-lg bg-red-600 hover:bg-red-700 transition text-white py-3 font-semibold"
          >
            {loading ? "Submitting..." : "Submit Enquiry"}
          </button>
        </form>

        {/* Status Message */}
        {statusMessage && (
          <p className="text-sm mt-4 text-black/70 text-center">
            {statusMessage}
          </p>
        )}
      </div>
    </section>
  );
}

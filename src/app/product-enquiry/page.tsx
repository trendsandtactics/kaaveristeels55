"use client";

import { FormEvent, useState } from "react";

export default function ProductEnquiryPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    enquiry_type: "product",
    product_name: "",
    message: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    const response = await fetch("/api/enquiries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (!response.ok) {
      setMessage(data.error ?? "Submission failed.");
      setLoading(false);
      return;
    }

    setMessage("Enquiry submitted successfully.");
    setForm({
      name: "",
      email: "",
      phone: "",
      enquiry_type: "product",
      product_name: "",
      message: "",
    });
    setLoading(false);
  };

  return (
    <main
      className="min-h-screen flex items-center justify-center px-6 py-12 bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('/images/steel-bg.jpg')", // replace with your image path
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Form Container */}
      <div className="relative z-10 w-full max-w-3xl backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 shadow-xl">
        <h1 className="text-4xl font-bold text-white">
          Product / Other Enquiry
        </h1>
        <p className="text-white/70 mt-2 text-sm">
          Share your requirement and our team will respond quickly.
        </p>

        <form onSubmit={submit} className="mt-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              required
              placeholder="Name"
              className="input"
              value={form.name}
              onChange={(e) =>
                setForm((s) => ({ ...s, name: e.target.value }))
              }
            />
            <input
              required
              type="email"
              placeholder="Email"
              className="input"
              value={form.email}
              onChange={(e) =>
                setForm((s) => ({ ...s, email: e.target.value }))
              }
            />
            <input
              placeholder="Phone"
              className="input"
              value={form.phone}
              onChange={(e) =>
                setForm((s) => ({ ...s, phone: e.target.value }))
              }
            />
            <select
              className="input"
              value={form.enquiry_type}
              onChange={(e) =>
                setForm((s) => ({
                  ...s,
                  enquiry_type: e.target.value,
                }))
              }
            >
              <option value="product">Product Enquiry</option>
              <option value="other">Other Enquiry</option>
            </select>
          </div>

          <input
            placeholder="Product name (optional)"
            className="input w-full"
            value={form.product_name}
            onChange={(e) =>
              setForm((s) => ({ ...s, product_name: e.target.value }))
            }
          />

          <textarea
            placeholder="Message"
            className="input w-full min-h-28"
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

        {message && (
          <p className="text-sm mt-4 text-white/80">{message}</p>
        )}
      </div>

      {/* Tailwind reusable input style */}
      <style jsx>{`
        .input {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          padding: 10px;
          border-radius: 8px;
          font-size: 14px;
          outline: none;
        }
        .input::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }
        .input:focus {
          border-color: #ef4444;
          background: rgba(255, 255, 255, 0.15);
        }
      `}</style>
    </main>
  );
}

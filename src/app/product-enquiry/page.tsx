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

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));

        setMessage(
          data.error || data.message || "Submission failed."
        );
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
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Unknown error";

      if (errorMessage.includes("Failed to fetch")) {
        setMessage(
          "Browser extension or ad-blocker may be blocking the request."
        );
      } else {
        setMessage("Network error. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-10 overflow-hidden"
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Decorative Blurs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-red-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-5xl">
        <div className="overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl">

          {/* Header */}
          <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 p-6 sm:p-8 md:p-10 text-white">
            <span className="inline-block rounded-full bg-white/20 px-4 py-1 text-xs font-semibold tracking-wider">
              ENQUIRY FORM
            </span>

            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold">
              Sales & Dealer
              <span className="block text-red-100">
                Enquiry Form
              </span>
            </h1>

            <p className="mt-3 text-sm sm:text-base text-red-100 max-w-2xl">
              Share your requirements and our team will contact you shortly.
            </p>
          </div>

          {/* Form Section */}
          <div className="bg-white/95 p-5 sm:p-8 md:p-10">
            <form onSubmit={submit} className="space-y-5">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  required
                  type="text"
                  placeholder="Full Name"
                  className="input"
                  value={form.name}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                />

                <input
                  required
                  type="email"
                  placeholder="Email Address"
                  className="input"
                  value={form.email}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="input"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      phone: e.target.value,
                    }))
                  }
                />

                <select
                  className="input"
                  value={form.enquiry_type}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      enquiry_type: e.target.value,
                    }))
                  }
                >
                  <option value="product">
                    Sales Enquiry
                  </option>
                  <option value="other">
                    Dealer Enquiry
                  </option>
                </select>
              </div>

              <input
                type="text"
                placeholder="Product Name (Optional)"
                className="input"
                value={form.product_name}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    product_name: e.target.value,
                  }))
                }
              />

              <textarea
                placeholder="Tell us about your requirements..."
                className="textarea"
                value={form.message}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    message: e.target.value,
                  }))
                }
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-gradient-to-r from-red-600 to-red-700 py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.01] hover:shadow-xl disabled:opacity-60"
              >
                {loading
                  ? "Submitting..."
                  : "Submit Enquiry"}
              </button>
            </form>

            {message && (
              <div
                className={`mt-5 rounded-xl border p-4 text-sm ${
                  message.includes("successfully")
                    ? "bg-green-50 border-green-200 text-green-700"
                    : "bg-red-50 border-red-200 text-red-700"
                }`}
              >
                {message}
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .input {
          width: 100%;
          height: 58px;
          padding: 0 18px;
          border-radius: 14px;
          border: 1px solid #e5e7eb;
          background: #fff;
          color: #111827;
          font-size: 15px;
          transition: all 0.3s ease;
        }

        .textarea {
          width: 100%;
          min-height: 160px;
          padding: 16px 18px;
          border-radius: 14px;
          border: 1px solid #e5e7eb;
          background: #fff;
          color: #111827;
          font-size: 15px;
          resize: none;
          transition: all 0.3s ease;
        }

        .input:focus,
        .textarea:focus {
          outline: none;
          border-color: #dc2626;
          box-shadow: 0 0 0 4px rgba(220, 38, 38, 0.15);
        }

        .input::placeholder,
        .textarea::placeholder {
          color: #9ca3af;
        }

        @media (max-width: 640px) {
          .input,
          .textarea {
            font-size: 16px;
          }
        }
      `}</style>
    </main>
  );
}
```

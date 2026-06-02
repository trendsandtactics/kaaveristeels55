```tsx
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
    }

    setLoading(false);
  };

  return (
    <main
      className="relative min-h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8 py-10"
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-red-900/40" />

      {/* Decorative Blur Circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-red-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl" />

      {/* Form Container */}
      <div className="relative z-10 w-full max-w-5xl">
        <div className="rounded-3xl overflow-hidden border border-white/20 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">

          {/* Header */}
          <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 p-6 sm:p-8 md:p-10 text-white">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-xs font-medium tracking-wide">
              ENQUIRY FORM
            </span>

            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Sales & Dealer
              <span className="block text-red-100">
                Enquiry Form
              </span>
            </h1>

            <p className="mt-3 text-red-100 max-w-2xl text-sm sm:text-base">
              Tell us your requirements and our team will get
              back to you with the best solution.
            </p>
          </div>

          {/* Form Area */}
          <div className="bg-white/95 p-5 sm:p-8 md:p-10">
            <form
              onSubmit={submit}
              className="space-y-5"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  required
                  placeholder="Full Name"
                  className="input"
                  value={form.name}
                  onChange={(e) =>
                    setForm((s) => ({
                      ...s,
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
                    setForm((s) => ({
                      ...s,
                      email: e.target.value,
                    }))
                  }
                />

                <input
                  placeholder="Phone Number"
                  className="input"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((s) => ({
                      ...s,
                      phone: e.target.value,
                    }))
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
                  <option value="product">
                    Sales Enquiry
                  </option>
                  <option value="other">
                    Dealer Enquiry
                  </option>
                </select>
              </div>

              <input
                placeholder="Product Name (Optional)"
                className="input"
                value={form.product_name}
                onChange={(e) =>
                  setForm((s) => ({
                    ...s,
                    product_name: e.target.value,
                  }))
                }
              />

              <textarea
                placeholder="Tell us about your requirement..."
                className="textarea"
                value={form.message}
                onChange={(e) =>
                  setForm((s) => ({
                    ...s,
                    message: e.target.value,
                  }))
                }
              />

              <button
                disabled={loading}
                className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-red-600 to-red-700 py-4 text-white font-semibold text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl disabled:opacity-60"
              >
                <span className="relative z-10">
                  {loading
                    ? "Submitting..."
                    : "Submit Enquiry"}
                </span>

                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
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
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          padding: 0 18px;
          font-size: 15px;
          color: #111827;
          background: #ffffff;
          transition: all 0.3s ease;
        }

        .textarea {
          width: 100%;
          min-height: 150px;
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          padding: 16px 18px;
          font-size: 15px;
          color: #111827;
          background: #ffffff;
          resize: none;
          transition: all 0.3s ease;
        }

        .input:focus,
        .textarea:focus {
          outline: none;
          border-color: #dc2626;
          box-shadow: 0 0 0 5px rgba(220, 38, 38, 0.15);
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

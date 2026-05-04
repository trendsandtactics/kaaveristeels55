"use client";

import { FormEvent, useRef, useState } from "react";

const baseInputClasses = "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-500 outline-none transition focus:ring-2 focus:ring-red-500";

interface JobApplicationFormProps {
  careerId?: number;
  jobTitle?: string;
}

export default function JobApplicationForm({ careerId, jobTitle }: JobApplicationFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    q_experience: "",
    q_why_us: "",
    cover_letter: "",
  });

  const [file, setFile] = useState<File | null>(null);
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setStatusMessage("Submitting application...");

    try {
      let resume_url = "";

      // 1. Upload Resume if a file was selected
      if (file) {
        setStatusMessage("Uploading resume...");
        const formData = new FormData();
        formData.append("file", file);

        const uploadRes = await fetch("/api/uploads", {
          method: "POST",
          body: formData,
        });

        if (!uploadRes.ok) {
          const err = await uploadRes.json().catch(() => ({}));
          throw new Error(err.error || "Failed to upload resume.");
        }

        const uploadData = await uploadRes.json();
        resume_url = uploadData.url;
      }

      // 2. Format questions into the cover letter field matching your SQL schema
      const combinedCoverLetter = `
--- QUESTIONNAIRE ---
Q: Relevant Experience?
A: ${form.q_experience || "N/A"}

Q: Why this role?
A: ${form.q_why_us || "N/A"}

--- ADDITIONAL COVER LETTER ---
${form.cover_letter || "N/A"}
      `.trim();

      // 3. Submit Application to Database
      setStatusMessage("Saving application...");
      const response = await fetch("/api/job-applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          career_id: careerId || null,
          name: form.name,
          email: form.email,
          phone: form.phone,
          cover_letter: combinedCoverLetter,
          resume_url,
        }),
      });

      let data: { error?: string } = {};
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      }

      if (!response.ok) {
        throw new Error(data.error || "Application submission failed.");
      }

      setStatusMessage("Application submitted successfully. We will be in touch!");
      setForm({ name: "", email: "", phone: "", q_experience: "", q_why_us: "", cover_letter: "" });
      setFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error: unknown) {
      setStatusMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-black/10">
      <div className="mb-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-black">
          Apply {jobTitle ? `for ${jobTitle}` : "Now"}
        </h2>
        <p className="text-black/60 mt-2 text-sm">
          Fill out the questionnaire below and attach your resume to apply.
        </p>
      </div>

      <form onSubmit={submit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <input required placeholder="Full Name" className={baseInputClasses} value={form.name} onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))} />
          <input required type="email" placeholder="Email Address" className={baseInputClasses} value={form.email} onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))} />
          <input required placeholder="Phone Number" className={`md:col-span-2 ${baseInputClasses}`} value={form.phone} onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))} />
        </div>

        <div className="space-y-4 pt-2">
          <h3 className="font-semibold text-gray-800 border-b pb-2">Questionnaire</h3>
          
          <textarea required placeholder="Relevant Experience?" className={`${baseInputClasses} min-h-16`} value={form.q_experience} onChange={(e) => setForm((s) => ({ ...s, q_experience: e.target.value }))} />
          <textarea required placeholder="Why this role?" className={`${baseInputClasses} min-h-16`} value={form.q_why_us} onChange={(e) => setForm((s) => ({ ...s, q_why_us: e.target.value }))} />
          <textarea placeholder="Additional Cover Letter (Optional)" className={`${baseInputClasses} min-h-16`} value={form.cover_letter} onChange={(e) => setForm((s) => ({ ...s, cover_letter: e.target.value }))} />
        </div>

        <div className="pt-2">
          <h3 className="font-semibold text-gray-800 mb-2">Resume / CV</h3>
          <input
            ref={fileInputRef}
            required
            type="file"
            accept="application/pdf,.doc,.docx"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="w-full rounded-lg border border-dashed border-gray-300 px-3 py-3 text-sm file:mr-3 file:rounded-md file:border-0 file:bg-slate-100 file:px-4 file:py-2 file:text-xs file:font-semibold"
          />
          <p className="text-xs text-gray-500 mt-2">Accepted formats: PDF, DOC, DOCX. Max size: 10MB.</p>
        </div>

        <button
          disabled={loading}
          className="w-full rounded-lg bg-red-600 hover:bg-red-700 transition text-white py-3 mt-4 font-semibold disabled:opacity-70"
        >
          {loading ? "Submitting Application..." : "Submit Application"}
        </button>
      </form>

      {statusMessage && (
        <div className={`mt-6 p-4 rounded-lg text-sm font-semibold text-center ${
          statusMessage.includes("successfully") 
            ? "bg-green-50 text-green-700 border border-green-200" 
            : statusMessage.includes("Uploading") || statusMessage.includes("Saving")
            ? "bg-blue-50 text-blue-700 border border-blue-200"
            : "bg-red-50 text-red-700 border border-red-200"
        }`}>
          {statusMessage}
        </div>
      )}
    </div>
  );
}
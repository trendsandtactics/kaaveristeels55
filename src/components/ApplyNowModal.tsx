"use client";

import { useState } from "react";
import JobApplicationForm from "@/components/JobApplicationForm";

interface ApplyNowModalProps {
  careerId?: number;
  jobTitle?: string;
}

export default function ApplyNowModal({ careerId, jobTitle }: ApplyNowModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-lg bg-red-600 hover:bg-red-700 transition text-white px-8 py-3 font-semibold shadow-lg"
      >
        Apply Now
      </button>

      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          {/* Stop propagation so clicking inside the form doesn't close the modal */}
          <div 
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition text-xl font-bold"
              aria-label="Close modal"
            >
              &times;
            </button>
            <JobApplicationForm careerId={careerId} jobTitle={jobTitle} />
          </div>
        </div>
      )}
    </>
  );
}
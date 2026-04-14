"use client";

import React, { FormEvent, useCallback, useEffect, useMemo, useState } from "react";

type Certification = {
  id: number;
  title: string;
  description: string;
  issuedBy: string;
  issueDate: string | null;
  createdAt: string;
  fileUrl?: string;
  fileName?: string | null;
  fileType?: string | null;
};

const MAX_UPLOAD_BYTES = 10 * 1024 * 1024;

async function readApiResponse(
  response: Response
): Promise<{
  error?: string;
  certifications?: Certification[];
  certification?: Certification;
  success?: boolean;
}> {
  const contentType = response.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    return response.json();
  }

  const text = await response.text();
  return { error: text || "Unexpected server response." };
}

function formatDate(value: string | null) {
  if (!value) return "N/A";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function AdminCertificationsPanel() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [issuedBy, setIssuedBy] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [items, setItems] = useState<Certification[]>([]);

  const isEditing = useMemo(() => editingId !== null, [editingId]);

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setIssuedBy("");
    setIssueDate("");
    setFile(null);
    setEditingId(null);

    const fileInput = document.getElementById("certificate-file") as HTMLInputElement | null;
    if (fileInput) {
      fileInput.value = "";
    }
  };

  const loadItems = useCallback(async () => {
    const response = await fetch("/api/certifications", { cache: "no-store" });
    const data = await readApiResponse(response);

    if (!response.ok) {
      throw new Error(data.error ?? "Unable to fetch certificates.");
    }

    const certifications = (data.certifications ?? []).map((item) => ({
      ...item,
      fileUrl: item.fileUrl || `/api/certifications/${item.id}/file`,
    }));

    setItems(certifications);
  }, []);

  useEffect(() => {
    loadItems().catch(() => {
      setMessage("Unable to fetch certificates.");
    });
  }, [loadItems]);

  const handleDelete = async (id: number) => {
    setMessage("");
    setDeletingId(id);

    try {
      const response = await fetch(`/api/certifications/${id}`, {
        method: "DELETE",
      });

      const data = await readApiResponse(response);

      if (!response.ok) {
        setMessage(data.error ?? "Unable to delete certificate.");
        return;
      }

      setItems((current) => current.filter((item) => item.id !== id));

      if (editingId === id) {
        resetForm();
      }

      setMessage("Certificate deleted successfully.");
    } catch {
      setMessage("Delete failed due to network/server issue.");
    } finally {
      setDeletingId(null);
    }
  };

  const handleEdit = (item: Certification) => {
    setEditingId(item.id);
    setTitle(item.title);
    setDescription(item.description);
    setIssuedBy(item.issuedBy);
    setIssueDate(item.issueDate ? item.issueDate.slice(0, 10) : "");
    setFile(null);
    setMessage("Edit mode enabled. Update the fields and save.");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const optimizeImageFile = async (rawFile: File): Promise<File> => {
    const isPngOrWebp = rawFile.type === "image/png" || rawFile.type === "image/webp" || rawFile.name.toLowerCase().endsWith(".png");
    if (!isPngOrWebp) return rawFile;
    
    return new Promise<File>((resolve) => {
      const img = new window.Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        let width = img.width;
        let height = img.height;
        const MAX_DIM = 1920;
        
        if (width > MAX_DIM || height > MAX_DIM) {
          const ratio = Math.min(MAX_DIM / width, MAX_DIM / height);
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
        }
        
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (!ctx) return resolve(rawFile);
        
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0, width, height);
        
        canvas.toBlob((blob) => {
          if (!blob) return resolve(rawFile);
          const baseName = rawFile.name.includes('.') ? rawFile.name.substring(0, rawFile.name.lastIndexOf('.')) : rawFile.name;
          resolve(new File([blob], `${baseName}.jpg`, { type: "image/jpeg", lastModified: Date.now() }));
        }, "image/jpeg", 0.85);
      };
      img.onerror = () => resolve(rawFile);
      img.src = URL.createObjectURL(rawFile);
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setMessage("Preparing upload...");

    try {
      let finalFile = file;
      if (finalFile) {
        finalFile = await optimizeImageFile(finalFile);
        if (finalFile.size > MAX_UPLOAD_BYTES) {
          setMessage("File is too large. Please upload a file smaller than 10 MB.");
          setLoading(false);
          return;
        }
      }

      if (isEditing && editingId !== null) {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("issuedBy", issuedBy);
        formData.append("issueDate", issueDate);

        if (finalFile) {
          formData.append("file", finalFile);
        }

        const response = await fetch(`/api/certifications/${editingId}`, {
          method: "PUT",
          body: formData,
        });

        const data = await readApiResponse(response);

        if (!response.ok) {
          setMessage(data.error ?? "Update failed.");
          return;
        }

        setMessage("Certificate updated successfully.");
        resetForm();
        await loadItems();
        return;
      }

      if (!finalFile) {
        setMessage("Select certificate file.");
        setLoading(false);
        return;
      }

      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("issuedBy", issuedBy);
      formData.append("issueDate", issueDate);
      formData.append("file", finalFile);

      const response = await fetch("/api/certifications", {
        method: "POST",
        body: formData,
      });

      const data = await readApiResponse(response);

      if (!response.ok) {
        setMessage(data.error ?? "Upload failed.");
        return;
      }

      setMessage("Certificate uploaded successfully.");
      resetForm();
      await loadItems();
    } catch {
      setMessage("Request failed. Please verify server/database connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-5 gap-8">
      <section className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
        <h1 className="font-heading text-3xl text-black mb-2">Certifications Admin</h1>
        <p className="text-sm text-black/65 mb-6">
          Full CRUD for certificates with image/file URL preview support.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Certificate title"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
            required
          />

          <input
            type="text"
            value={issuedBy}
            onChange={(event) => setIssuedBy(event.target.value)}
            placeholder="Issued by"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
            required
          />

          <input
            type="date"
            value={issueDate}
            onChange={(event) => setIssueDate(event.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
          />

          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Description"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm min-h-24"
            required
          />

          <input
            id="certificate-file"
            type="file"
            accept="image/*,application/pdf,.pdf,.png,.jpg,.jpeg,.webp,.gif,.svg"
            onChange={(event) => {
              const nextFile = event.target.files?.[0] ?? null;
              setFile(nextFile);

              if (nextFile && nextFile.size > MAX_UPLOAD_BYTES) {
              setMessage("Selected file is larger than 10 MB. Please choose a smaller file.");
              } else {
                setMessage("");
              }
            }}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
          />

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 rounded-lg bg-black text-white px-4 py-2 text-sm font-semibold disabled:opacity-60"
            >
              {loading
                ? isEditing
                  ? "Updating..."
                  : "Uploading..."
                : isEditing
                ? "Update Certificate"
                : "Upload Certificate"}
            </button>

            {isEditing ? (
              <button
                type="button"
                onClick={resetForm}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-black"
              >
                Cancel
              </button>
            ) : null}
          </div>
        </form>

        {message ? <p className="mt-4 text-sm text-black/75">{message}</p> : null}
      </section>

      <section className="lg:col-span-3 bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
        <h2 className="font-heading text-2xl text-black mb-4">Uploaded Certificates</h2>

        <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
          {items.length > 0 ? (
            items.map((item) => {
              const fileUrl = item.fileUrl || `/api/certifications/${item.id}/file`;
              const isImage =
                item.fileType?.startsWith("image/") ||
                /\.(png|jpg|jpeg|webp)$/i.test(item.fileName || fileUrl);

              return (
                <article key={item.id} className="border border-gray-200 rounded-xl p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold text-black">{item.title}</h3>
                      <p className="text-xs text-black/55 mt-1">ID: {item.id}</p>
                    </div>

                    <div className="flex items-center gap-3 flex-wrap justify-end">
                      <a
                        href={fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs uppercase tracking-[0.12em] font-semibold text-blue-700"
                      >
                        View File
                      </a>

                      <a
                        href={fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs uppercase tracking-[0.12em] font-semibold text-green-700"
                      >
                        Open URL
                      </a>

                      <button
                        type="button"
                        onClick={() => handleEdit(item)}
                        className="text-xs uppercase tracking-[0.12em] font-semibold text-amber-700"
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDelete(item.id)}
                        disabled={deletingId === item.id}
                        className="text-xs uppercase tracking-[0.12em] font-semibold text-red-700 disabled:opacity-60"
                      >
                        {deletingId === item.id ? "Deleting..." : "Delete"}
                      </button>
                    </div>
                  </div>

                  <p className="text-sm text-black/70 mt-2">{item.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 text-xs text-black/60">
                    <p>Issued by: {item.issuedBy}</p>
                    <p>Issue date: {formatDate(item.issueDate)}</p>
                    <p>Created: {formatDate(item.createdAt)}</p>
                    <p className="break-all">File URL: {fileUrl}</p>
                  </div>

                  {isImage ? (
                    <div className="mt-4">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={fileUrl}
                        alt={item.title}
                        className="w-full max-h-56 object-cover rounded-lg border border-gray-200"
                      />
                    </div>
                  ) : null}
                </article>
              );
            })
          ) : (
            <p className="text-sm text-black/60">No certificates uploaded yet.</p>
          )}
        </div>
      </section>
    </div>
  );
}

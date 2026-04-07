import { NextResponse } from "next/server";
import { getPool } from "@/lib/mysql";
import { ResultSetHeader } from "mysql2";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded." }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const mimeType = file.type || "application/octet-stream";
    const fileName = file.name || "upload.bin";

    const pool = getPool();
    const [result] = await pool.execute<ResultSetHeader>(
      `INSERT INTO cms_uploads (file_name, mime_type, file_data) VALUES (?, ?, ?)`,
      [fileName, mimeType, buffer]
    );

    return NextResponse.json({ url: `/api/uploads/${result.insertId}` });
  } catch (error) {
    console.error("Upload API Error:", error);
    return NextResponse.json({ error: "Failed to upload file." }, { status: 500 });
  }
}
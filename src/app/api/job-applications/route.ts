import { NextResponse } from "next/server";
import { getPool } from "@/lib/mysql";

export async function GET(request: Request) {
  try {
    const [rows] = await getPool().query("SELECT * FROM job_applications ORDER BY created_at DESC");
    return NextResponse.json({ data: rows });
  } catch (error) {
    console.error("Fetch Job Applications Error:", error);
    return NextResponse.json({ error: "Failed to fetch job applications" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { career_id, name, email, phone, cover_letter, resume_url } = body;

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Name, email, and phone are required" }, { status: 400 });
    }

    const [result] = await getPool().query(
      "INSERT INTO job_applications (career_id, name, email, phone, cover_letter, resume_url) VALUES (?, ?, ?, ?, ?, ?)",
      [career_id || null, name, email, phone, cover_letter || "", resume_url || ""]
    );

    return NextResponse.json({ success: true, id: (result as any).insertId });
  } catch (error) {
    console.error("Create Job Application Error:", error);
    return NextResponse.json({ error: "Failed to submit application" }, { status: 500 });
  }
}
import { NextResponse } from "next/server";
import { query } from "@/lib/mysql"; // Use the standard DB export based on your project configuration

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { career_id, name, email, phone, cover_letter, resume_url } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }

    const sql = `
      INSERT INTO job_applications 
      (career_id, name, email, phone, cover_letter, resume_url, status) 
      VALUES (?, ?, ?, ?, ?, ?, 'new')
    `;

    const values = [
      career_id || null,
      name,
      email,
      phone || null,
      cover_letter || null,
      resume_url || null,
    ];

    // Assuming query resolves the db execute connection
    await query(sql, values);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Job Application POST Error:", error);
    return NextResponse.json({ error: "Failed to submit job application." }, { status: 500 });
  }
}

export async function GET() {
  try {
    const sql = `SELECT * FROM job_applications ORDER BY created_at DESC LIMIT 100`;
    const result: any = await query(sql);

    // Ensure consistent unwrapping (mysql2/promise usually returns [rows, fields])
    const data = Array.isArray(result) && Array.isArray(result[0]) ? result[0] : result;

    return NextResponse.json({ data });
  } catch (error: any) {
    console.error("Job Application GET Error:", error);
    return NextResponse.json({ error: "Failed to fetch job applications." }, { status: 500 });
  }
}
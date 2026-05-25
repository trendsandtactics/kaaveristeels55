import { NextRequest, NextResponse } from "next/server";
import { ensureDynamicCmsTables } from "@/lib/dynamic-cms";
import { getPool } from "@/lib/mysql";
import { sendNotificationEmail } from "@/lib/mailer";

export async function GET() {
  try {
    await ensureDynamicCmsTables();
    const [rows] = await getPool().query("SELECT * FROM job_applications ORDER BY created_at DESC LIMIT 500");
    return NextResponse.json({ data: rows });
  } catch (error) {
    return NextResponse.json({ error: "Unable to fetch job applications." }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");
    if (!id) return NextResponse.json({ error: "ID is required." }, { status: 400 });
    await getPool().query("DELETE FROM job_applications WHERE id = ?", [id]);
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: "Unable to delete job application." }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await ensureDynamicCmsTables();
    const formData = await request.formData();
    
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const jobTitle = formData.get("job_title") as string || "General Application";
    const careerId = formData.get("career_id") ? Number(formData.get("career_id")) : null;
    const qExperience = formData.get("q_experience") as string;
    const qWhyUs = formData.get("q_why_us") as string;
    const coverLetter = formData.get("cover_letter") as string;
    
    const resumeFile = formData.get("resume") as File | null;
    const attachments: { filename: string; content: Buffer; contentType: string }[] = [];

    if (resumeFile && resumeFile.size > 0) {
      const arrayBuffer = await resumeFile.arrayBuffer();
      attachments.push({
        filename: resumeFile.name,
        content: Buffer.from(arrayBuffer),
        contentType: resumeFile.type,
      });
    }

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }

    const combinedCoverLetter = `Position: ${jobTitle}\nExperience: ${qExperience || "N/A"}\nWhy Us: ${qWhyUs || "N/A"}\n\nCover Letter:\n${coverLetter || "N/A"}`;

    // Insert into DB
    await getPool().query(
      "INSERT INTO job_applications (career_id, name, email, phone, cover_letter, status) VALUES (?, ?, ?, ?, ?, 'new')",
      [careerId, name, email, phone || null, combinedCoverLetter]
    );

    // Send email notification using centralized mailer
    await sendNotificationEmail(
      `New Job Application: ${jobTitle}`,
      `<h3>New Job Application</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone || "N/A"}</p>
      <p><b>Position:</b> ${jobTitle}</p>
      <p><b>Experience:</b><br/>${qExperience || "N/A"}</p>
      <p><b>Why Us:</b><br/>${qWhyUs || "N/A"}</p>
      <p><b>Cover Letter:</b><br/>${coverLetter || "N/A"}</p>`,
      attachments
    );

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("Job application error:", error);
    return NextResponse.json({ error: "Unable to submit application." }, { status: 500 });
  }
}
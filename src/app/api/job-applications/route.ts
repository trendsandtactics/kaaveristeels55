import { NextRequest, NextResponse } from "next/server";
import { ensureDynamicCmsTables } from "@/lib/dynamic-cms";
import { sendNotificationEmail } from "@/lib/mailer";
import type nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    await ensureDynamicCmsTables();
    const formData = await request.formData();
    
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const jobTitle = formData.get("job_title") as string || "General Application";
    const qExperience = formData.get("q_experience") as string;
    const qWhyUs = formData.get("q_why_us") as string;
    const coverLetter = formData.get("cover_letter") as string;
    
    const resumeFile = formData.get("resume") as File | null;
    const attachments: nodemailer.Attachment[] = [];

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
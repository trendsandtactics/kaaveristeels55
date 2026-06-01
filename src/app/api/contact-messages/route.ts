import { NextRequest, NextResponse } from "next/server";
import { ensureDynamicCmsTables } from "@/lib/dynamic-cms";
import { getPool } from "@/lib/mysql";
import nodemailer from "nodemailer";

export async function GET() {
  await ensureDynamicCmsTables();
  const [rows] = await getPool().query("SELECT * FROM contact_messages ORDER BY created_at DESC LIMIT 500");
  return NextResponse.json({ data: rows });
}

export async function POST(request: NextRequest) {
  try {
    await ensureDynamicCmsTables();
    const body = await request.json();
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ error: "name, email, and message are required." }, { status: 400 });
    }

    await getPool().query(
      "INSERT INTO contact_messages (name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)",
      [body.name, body.email, body.phone ?? null, body.subject ?? null, body.message],
    );

    // Send email notification
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "karthikjungleemara@gmail.com",
          pass: "vqfk acte ljlb rmmo",
        },
      });

      await transporter.sendMail({
        from: '"Kaaveri Steels" <karthikjungleemara@gmail.com>',
        to: "karthikjungleemara@gmail.com",
        subject: `New Contact Message - ${body.name}`,
        text: `A new contact message has been submitted:

Name: ${body.name}
Email: ${body.email}
Phone: ${body.phone || "N/A"}
Subject: ${body.subject || "N/A"}
Message: ${body.message}`,
      });
    } catch (emailError) {
      console.error("Email Notification Error:", emailError);
    }

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to save contact message.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

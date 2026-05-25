import { NextRequest, NextResponse } from "next/server";
import { ensureDynamicCmsTables } from "@/lib/dynamic-cms";
import { getPool } from "@/lib/mysql";
import { sendNotificationEmail } from "@/lib/mailer";

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
    await sendNotificationEmail(
      `New Contact Message - ${body.name}`,
      `<h3>New Contact Message</h3>
      <p><b>Name:</b> ${body.name}</p>
      <p><b>Email:</b> ${body.email}</p>
      <p><b>Phone:</b> ${body.phone || "N/A"}</p>
      <p><b>Subject:</b> ${body.subject || "N/A"}</p>
      <p><b>Message:</b><br/>${body.message}</p>`
    );

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to save contact message.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

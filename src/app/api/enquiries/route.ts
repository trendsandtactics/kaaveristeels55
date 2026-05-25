import { NextRequest, NextResponse } from "next/server";
import { ensureDynamicCmsTables } from "@/lib/dynamic-cms";
import { getPool } from "@/lib/mysql";
import { sendNotificationEmail } from "@/lib/mailer";

export async function POST(request: NextRequest) {
  try {
    await ensureDynamicCmsTables();
    const body = await request.json();
    
    if (!body.name || !body.phone) {
      return NextResponse.json({ error: "Name and phone are required." }, { status: 400 });
    }

    await getPool().query(
      "INSERT INTO enquiries (name, email, phone, enquiry_type, product_name, message) VALUES (?, ?, ?, ?, ?, ?)",
      [body.name, body.email || "N/A", body.phone, body.enquiry_type || "general", body.product_name || null, body.message || ""]
    );

    // Send email notification using centralized mailer
    await sendNotificationEmail(
      `New Enquiry - ${body.enquiry_type || "General"}`,
      `<h3>New Enquiry Received</h3>
      <p><b>Name:</b> ${body.name}</p>
      <p><b>Email:</b> ${body.email || "N/A"}</p>
      <p><b>Phone:</b> ${body.phone}</p>
      <p><b>Type:</b> ${body.enquiry_type || "N/A"}</p>
      <p><b>Product:</b> ${body.product_name || "N/A"}</p>
      <p><b>Message/Location:</b><br/>${body.message || "N/A"}</p>`
    );

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("Enquiry submission error:", error);
    const message = error instanceof Error ? error.message : "Unable to save enquiry.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
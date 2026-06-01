import { NextRequest, NextResponse } from "next/server";
import { ensureDynamicCmsTables } from "@/lib/dynamic-cms";
import { getPool } from "@/lib/mysql";
import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";

export async function GET() {
  await ensureDynamicCmsTables();
  const [rows] = await getPool().query("SELECT * FROM enquiries ORDER BY created_at DESC LIMIT 500");
  return NextResponse.json({ data: rows });
}

export async function POST(request: NextRequest) {
  try {
    await ensureDynamicCmsTables();
    const body = await request.json();
    if (!body.name || (!body.email && !body.phone) || !body.enquiry_type) {
      return NextResponse.json({ error: "name, enquiry_type, and either email or phone are required." }, { status: 400 });
    }

    await getPool().query(
      "INSERT INTO enquiries (name, email, phone, enquiry_type, product_name, message) VALUES (?, ?, ?, ?, ?, ?)",
      [body.name, body.email || "no-email@provided.com", body.phone || "", body.enquiry_type, body.product_name || "", body.message || ""],
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
        subject: `New Enquiry Submission (${body.enquiry_type}) - ${body.name}`,
        text: `A new enquiry has been submitted:

Name: ${body.name}
Email: ${body.email || "N/A"}
Phone: ${body.phone || "N/A"}
Enquiry Type: ${body.enquiry_type}
Product Name: ${body.product_name || "N/A"}
Message: ${body.message || "N/A"}`,
      });
    } catch (emailError) {
      console.error("Email Notification Error:", emailError);
    }

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to save enquiry.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

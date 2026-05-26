import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Configure the SMTP transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Generate an HTML table dynamically from the passed JSON body
    let htmlContent = `<h3>New Calculator Enquiry</h3>`;
    htmlContent += `<table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 600px;">`;
    for (const [key, value] of Object.entries(body)) {
      // Skip any internal/utility fields (like _subject)
      if (key.startsWith("_")) continue;
      htmlContent += `<tr><td style="font-weight: bold; background-color: #f3f4f6; width: 35%;">${key}</td><td>${value}</td></tr>`;
    }
    htmlContent += `</table>`;

    // Send the email
    await transporter.sendMail({
      from: process.env.SMTP_USER || '"Kaaveri Steels" <noreply@kaaveristeels.com>',
      to: process.env.NEXT_PUBLIC_ADMIN_EMAIL || "admin@kaaveristeels.com",
      subject: body._subject || "New Steel Calculator Enquiry",
      html: htmlContent,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email. Check SMTP settings." },
      { status: 500 }
    );
  }
}
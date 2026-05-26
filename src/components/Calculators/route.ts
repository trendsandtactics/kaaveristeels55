import { NextResponse } from "next/server";
import { sendNotificationEmail } from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Generate an HTML table dynamically from the passed JSON body
    let htmlContent = `<h3>New Calculator Enquiry</h3>`;
    htmlContent += `<table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 600px;">`;
    
    for (const [key, value] of Object.entries(body)) {
      // Skip any internal/utility fields (like _subject)
      if (key.startsWith("_")) continue;
      htmlContent += `<tr><td style="font-weight: bold; background-color: #f3f4f6; width: 35%;">${key}</td><td>${value}</td></tr>`;
    }
    htmlContent += `</table>`;

    const subject = body._subject || "New Steel Calculator Enquiry";

    // Send the email using your existing nodemailer setup in src/lib/mailer.ts
    await sendNotificationEmail(subject, htmlContent);

    return NextResponse.json({ success: true, message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error processing email request:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email." },
      { status: 500 }
    );
  }
}
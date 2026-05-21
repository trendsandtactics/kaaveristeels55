import { NextRequest, NextResponse } from "next/server";
import { ensureDynamicCmsTables } from "@/lib/dynamic-cms";
import { getPool } from "@/lib/mysql";
import { unstable_noStore as noStore } from "next/cache";
import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";
export const revalidate = 0;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: NextRequest) {
  noStore();
  try {
    await ensureDynamicCmsTables();
    const [rows] = await getPool().query("SELECT * FROM enquiries ORDER BY id DESC LIMIT 500");
    return NextResponse.json(
      { data: rows },
      {
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
        },
      }
    );
  } catch (error) {
    console.error("Database fetch error:", error);
    const message = error instanceof Error ? error.message : "Unable to fetch enquiries.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    await ensureDynamicCmsTables();
    const id = request.nextUrl.searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Enquiry ID is required." }, { status: 400 });
    }

    await getPool().query("DELETE FROM enquiries WHERE id = ?", [id]);
    return NextResponse.json({ ok: true, message: "Enquiry deleted successfully." });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to delete enquiry.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await ensureDynamicCmsTables();
    const body = await request.json();
    const keys = Object.keys(body);
    if (keys.length === 0) return NextResponse.json({ error: "Empty submission" }, { status: 400 });
    
    const values = Object.values(body);
    const placeholders = keys.map(() => "?").join(", ");
    const escapedKeys = keys.map((k) => `\`${k}\``).join(", ");
    await getPool().query(`INSERT INTO enquiries (${escapedKeys}) VALUES (${placeholders})`, values);

    // Send email notification via nodemailer
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "karthikjungleemara@gmail.com",
          pass: "vqfk acte ljlb rmmo",
        },
      });

      const emailBody = keys.map((key, index) => {
        return `${key.replace(/_/g, ' ').toUpperCase()}: ${values[index] || "N/A"}`;
      }).join("\n");

      await transporter.sendMail({
        from: '"Kaaveri Steels" <karthikjungleemara@gmail.com>',
        to: "karthikjungleemara@gmail.com",
        subject: `New Enquiry Submitted (${body.enquiry_type || "General"})`,
        text: `A new enquiry has been saved to the database:\n\n${emailBody}`,
      });
    } catch (emailError) {
      console.error("Email Notification Error:", emailError);
    }

    return NextResponse.json({ ok: true, message: "Enquiry saved successfully." });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to save enquiry.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
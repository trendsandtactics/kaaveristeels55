import { NextRequest, NextResponse } from "next/server";
import { ensureDynamicCmsTables } from "@/lib/dynamic-cms";
import { getPool } from "@/lib/mysql";
import { unstable_noStore as noStore } from "next/cache";

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
    return NextResponse.json({ ok: true, message: "Enquiry saved successfully." });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to save enquiry.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
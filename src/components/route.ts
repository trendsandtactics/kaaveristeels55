import { NextResponse } from "next/server";
import { getPool } from "@/lib/mysql";
import { RowDataPacket } from "mysql2";

export async function GET() {
  try {
    const pool = getPool();
    const [rows] = await pool.query<RowDataPacket[]>("SELECT * FROM about_page ORDER BY id DESC LIMIT 1");
    return NextResponse.json(rows[0] || {});
  } catch (error) {
    console.error("GET /api/about error:", error);
    return NextResponse.json({ error: "Failed to fetch about data" }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const pool = getPool();
    const [existing] = await pool.query<RowDataPacket[]>("SELECT id FROM about_page LIMIT 1");
    
    if (existing.length > 0) {
      await pool.query(
        "UPDATE about_page SET heading=?, subheading=?, content=?, image_url=? WHERE id=?",
        [body.heading, body.subheading, body.content, body.imageUrl, existing[0].id]
      );
    } else {
      await pool.query(
        "INSERT INTO about_page (heading, subheading, content, image_url) VALUES (?, ?, ?, ?)",
        [body.heading, body.subheading, body.content, body.imageUrl]
      );
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("PUT /api/about error:", error);
    return NextResponse.json({ error: "Failed to update about data" }, { status: 500 });
  }
}
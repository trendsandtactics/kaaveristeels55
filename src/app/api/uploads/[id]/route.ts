import { NextResponse } from "next/server";
import { getPool } from "@/lib/mysql";
import { RowDataPacket } from "mysql2";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = parseInt(params.id, 10);
    if (isNaN(id)) return new NextResponse("Invalid ID", { status: 400 });

    const pool = getPool();
    const [rows] = await pool.query<RowDataPacket[]>(
      "SELECT file_name, mime_type, file_data FROM cms_uploads WHERE id = ?",
      [id]
    );

    if (rows.length === 0) return new NextResponse("File Not Found", { status: 404 });

    const file = rows[0];

    return new NextResponse(file.file_data, {
      headers: {
        "Content-Type": file.mime_type,
        "Content-Disposition": `inline; filename="${file.file_name}"`,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    console.error("File Fetch Error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
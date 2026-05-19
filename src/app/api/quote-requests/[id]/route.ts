import { NextRequest, NextResponse } from "next/server";
import { getPool } from "@/lib/mysql";
import { ResultSetHeader, RowDataPacket } from "mysql2";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } | Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await Promise.resolve(params);
    const id = parseInt(resolvedParams.id, 10);
    if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    const pool = getPool();
    const [rows] = await pool.query<RowDataPacket[]>('SELECT * FROM quote_requests WHERE id = ?', [id]);

    if (rows.length === 0) {
      return NextResponse.json({ error: "Quote request not found" }, { status: 404 });
    }

    return NextResponse.json(rows[0]);
  } catch (error: any) {
    console.error("Error fetching quote request:", error);
    return NextResponse.json({ error: "Failed to fetch quote request" }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } | Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await Promise.resolve(params);
    const id = parseInt(resolvedParams.id, 10);
    if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    const pool = getPool();
    const [result] = await pool.execute<ResultSetHeader>('DELETE FROM quote_requests WHERE id = ?', [id]);

    if (result.affectedRows === 0) {
      return NextResponse.json({ error: "Enquiry/Quote request not found in database" }, { status: 404 });
    }

    return NextResponse.json({ message: "Enquiry deleted successfully" }, { status: 200 });
  } catch (error: any) {
    console.error("Error deleting quote request:", error);
    return NextResponse.json({ error: "Failed to delete quote request" }, { status: 500 });
  }
}
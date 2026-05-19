import { NextRequest, NextResponse } from "next/server";
import { getPool } from "@/lib/mysql";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id, 10);
    if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    const pool = getPool();
    const [result]: any = await pool.query('DELETE FROM job_applications WHERE id = ?', [id]);

    if (result.affectedRows === 0) {
      return NextResponse.json({ error: "Job application not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Job application deleted successfully" }, { status: 200 });
  } catch (error: any) {
    console.error("Error deleting job application:", error);
    return NextResponse.json({ error: "Failed to delete job application" }, { status: 500 });
  }
}
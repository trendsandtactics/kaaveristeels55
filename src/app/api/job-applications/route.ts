import { NextRequest, NextResponse } from "next/server";
import { getPool } from "@/lib/mysql";
import { ResultSetHeader } from "mysql2";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } | Promise<{ id: string }> }
) {
  try {
    // Safely extract the ID supporting both Next.js 14 and Next.js 15
    const resolvedParams = await Promise.resolve(params);
    const id = parseInt(resolvedParams.id, 10);

    if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    const pool = getPool();
    const [result] = await pool.execute<ResultSetHeader>('DELETE FROM job_applications WHERE id = ?', [id]);

    if (result.affectedRows === 0) {
      return NextResponse.json({ error: "Job application not found in database" }, { status: 404 });
    }

    return NextResponse.json({ message: "Job application deleted successfully" }, { status: 200 });
  } catch (error: unknown) {
    console.error("Error deleting job application:", error);
    return NextResponse.json({ error: "Failed to delete job application" }, { status: 500 });
  }
}
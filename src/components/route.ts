import { NextRequest, NextResponse } from "next/server";
import { getPool } from "@/lib/mysql";

export const dynamic = "force-dynamic";

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id);
    
    if (!id || isNaN(id)) {
      return NextResponse.json({ error: "Invalid ID provided." }, { status: 400 });
    }
    
    await getPool().query("DELETE FROM enquiries WHERE id = ?", [id]);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting enquiry:", error);
    return NextResponse.json({ error: "Unable to delete enquiry." }, { status: 500 });
  }
}
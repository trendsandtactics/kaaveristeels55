import { NextResponse } from "next/server";
import { getPool } from "@/lib/mysql";

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    if (!id) return NextResponse.json({ error: "ID is required" }, { status: 400 });

    await getPool().query("DELETE FROM contact_messages WHERE id = ?", [id]);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete Contact Message Error:", error);
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}
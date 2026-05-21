import { NextRequest, NextResponse } from "next/server";
import { ensureDynamicCmsTables } from "@/lib/dynamic-cms";
import { getPool } from "@/lib/mysql";

export const dynamic = "force-dynamic";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await ensureDynamicCmsTables();
    const id = params.id;

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

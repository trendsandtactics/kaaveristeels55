import { NextResponse } from "next/server";
import { listModuleItems } from "@/lib/dynamic-cms";

export async function GET(request: Request, { params }: { params: { module: string } }) {
  try {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q") || undefined;
    const limit = parseInt(searchParams.get("limit") || "50", 10);

    // Fetch published records from the MySQL database using the dynamic-cms lib
    const items = await listModuleItems(params.module, {
      status: "published",
      q,
      limit,
    });

    return NextResponse.json({ data: items });
  } catch (error) {
    console.error(`Public API Error [${params.module}]:`, error);
    return NextResponse.json({ error: "Failed to fetch module records." }, { status: 500 });
  }
}
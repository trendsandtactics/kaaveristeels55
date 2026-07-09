import { NextRequest, NextResponse } from "next/server";
import { listPageSeoEntries, upsertPageSeoEntry } from "@/lib/dynamic-cms";

export async function GET() {
  try {
    const rows = await listPageSeoEntries();
    return NextResponse.json({ data: rows });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to fetch SEO records.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const pageKey = typeof body?.page_key === "string" ? body.page_key.trim() : "";
    if (!pageKey) {
      return NextResponse.json({ error: "page_key is required." }, { status: 400 });
    }

    await upsertPageSeoEntry(pageKey, {
      title: body.title ?? null,
      description: body.description ?? null,
      keywords: body.keywords ?? null,
      og_image: body.og_image ?? null,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to save SEO record.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

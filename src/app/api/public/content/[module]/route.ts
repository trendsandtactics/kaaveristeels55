import { NextResponse } from "next/server";
import { listModuleItems, getDealerFilters } from "@/lib/dynamic-cms";

export async function GET(request: Request, { params }: { params: { module: string } }) {
  try {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q") || undefined;
    const city = searchParams.get("city") || undefined;
    const taluka = searchParams.get("taluka") || undefined;
    const filters = searchParams.get("filters") === "true";
    const limit = parseInt(searchParams.get("limit") || "5000", 10);

    if (filters && params.module === "dealers") {
      const filterData = await getDealerFilters();
      return NextResponse.json(filterData, {
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate",
        },
      });
    }

    // Fetch published records from the MySQL database using the dynamic-cms lib
    const items = await listModuleItems(params.module, {
      status: "published",
      q,
      city: city && city !== "All" ? city : undefined,
      taluka: taluka && taluka !== "All" ? taluka : undefined,
      limit,
    });

    return NextResponse.json(
      { data: items },
      {
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate",
        },
      }
    );
  } catch (error) {
    console.error(`Public API Error [${params.module}]:`, error);
    return NextResponse.json({ error: "Failed to fetch module records." }, { status: 500 });
  }
}
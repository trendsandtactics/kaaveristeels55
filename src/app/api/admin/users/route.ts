import { NextRequest, NextResponse } from "next/server";
import { createAdminUser, listAdminUsers } from "@/lib/admin-users";

export async function GET() {
  try {
    const users = await listAdminUsers();
    return NextResponse.json({ data: users });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to fetch users.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = String(body?.email ?? "").trim();
    const password = String(body?.password ?? "");
    const enabledModules = Array.isArray(body?.enabledModules) ? body.enabledModules.map(String) : [];

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
    }
    if (!password || password.length < 6) {
      return NextResponse.json({ error: "Password must be at least 6 characters." }, { status: 400 });
    }

    const id = await createAdminUser({ email, password, enabledModules });
    return NextResponse.json({ id }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to create user.";
    const isDuplicate = message.toLowerCase().includes("duplicate");
    return NextResponse.json({ error: isDuplicate ? "A user with this email already exists." : message }, { status: 400 });
  }
}

import { NextRequest, NextResponse } from "next/server";
import { deleteAdminUser, updateAdminUser } from "@/lib/admin-users";

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json();

    const input: { email?: string; password?: string; enabledModules?: string[]; status?: "active" | "disabled" } = {};
    if (typeof body?.email === "string" && body.email.trim()) input.email = body.email;
    if (typeof body?.password === "string" && body.password) {
      if (body.password.length < 6) {
        return NextResponse.json({ error: "Password must be at least 6 characters." }, { status: 400 });
      }
      input.password = body.password;
    }
    if (Array.isArray(body?.enabledModules)) input.enabledModules = body.enabledModules.map(String);
    if (body?.status === "active" || body?.status === "disabled") input.status = body.status;

    await updateAdminUser(Number(id), input);
    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to update user.";
    const isDuplicate = message.toLowerCase().includes("duplicate");
    return NextResponse.json({ error: isDuplicate ? "A user with this email already exists." : message }, { status: 400 });
  }
}

export async function DELETE(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const deleted = await deleteAdminUser(Number(id));
    if (!deleted) {
      return NextResponse.json({ error: "User not found." }, { status: 404 });
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to delete user.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

"use server";

import { revalidatePath } from "next/cache";

export async function revalidateModuleCache() {
  // This completely clears the Next.js cache for all pages and APIs.
  // It guarantees that public pages (like Products) update instantly.
  revalidatePath("/", "layout");
}
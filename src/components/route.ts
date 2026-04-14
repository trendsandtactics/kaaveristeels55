import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST() {
  try {
    // 1. Define where your uploaded files are stored locally
    // (Adjust this if your files are in a different folder, e.g., 'public/media')
    const uploadsDir = path.join(process.cwd(), "public", "uploads");
    
    // Read all files currently on the disk
    const allFiles = await fs.readdir(uploadsDir);

    // 2. Fetch all active file URLs from your database.
    // TODO: Replace these placeholder fetches with your actual DB/PocketBase queries
    // const products = await fetch("http://127.0.0.1:8090/api/collections/products/records").then(r => r.json());
    // const blogs = await fetch("http://127.0.0.1:8090/api/collections/blogs/records").then(r => r.json());
    
    const activeUrls: string[] = [
      // ...products.items.map(p => p.cover_image),
      // ...blogs.items.map(b => b.file_url)
    ].filter(Boolean); // Filter out nulls/blanks

    // Extract just the exact filenames from the active URLs
    const activeFilenames = activeUrls.map((url) => {
      const parts = url.split("/");
      return parts[parts.length - 1];
    });

    // 3. Find files in the directory that are NOT in the active database list
    const orphanedFiles = allFiles.filter((file) => !activeFilenames.includes(file));

    // 4. Delete the orphaned files to save server space
    let deletedCount = 0;
    for (const file of orphanedFiles) {
      // Safe-guard: Don't delete hidden system files or default placeholders
      if (file.startsWith(".") || file === "placeholder.png") continue;

      await fs.unlink(path.join(uploadsDir, file));
      deletedCount++;
    }

    return NextResponse.json({
      success: true,
      message: `Cleanup complete. Deleted ${deletedCount} unused files.`,
    });
  } catch (error) {
    console.error("Cleanup error:", error);
    return NextResponse.json({ error: "Failed to run cleanup" }, { status: 500 });
  }
}
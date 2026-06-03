import React from "react";
import { notFound } from "next/navigation";
import { listModuleItems } from "@/lib/dynamic-cms";
import BlogDetails from "@/components/BlogDetails";

export const revalidate = 60;

export async function generateStaticParams() {
  const blogs = await listModuleItems("blogs", { status: "published" });
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const blogs = await listModuleItems("blogs", { status: "published" });
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) return { title: "Not Found | Blogs | KAAVERI Steels" };

  return {
    title: `${blog.title} | Blogs | KAAVERI Steels`,
    description: blog.short_description || "Read our latest insights and news from KAAVERI Steels.",
  };
}

export default async function BlogDetailedPage({ params }: { params: { slug: string } }) {
  const blogs = await listModuleItems("blogs", { status: "published" });
  const blog = blogs.find((b) => b.slug === params.slug);

  // Show 404 if the blog doesn't exist
  if (!blog) {
    notFound();
  }

  // Render our beautiful client component
  return <BlogDetails blog={blog} />;
}
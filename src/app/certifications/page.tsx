"use client";

import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";

type Post = {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  imageUrl?: string;
  slug: string;
};

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadPosts = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      // This is a placeholder. Replace with your actual API endpoint.
      // For now, we'll use some mock data.
      // const response = await fetch("/api/blog", {
      //   cache: "no-store",
      // });

      // if (!response.ok) {
      //   throw new Error("Unable to fetch blog posts.");
      // }

      // const data = await response.json();
      const mockData = {
        posts: [
          {
            id: 1,
            title: "The Future of Stainless Steel in Construction",
            excerpt:
              "Discover how stainless steel is revolutionizing the construction industry with its durability, sustainability, and aesthetic appeal.",
            author: "John Doe",
            publishedAt: new Date().toISOString(),
            imageUrl:
              "https://images.unsplash.com/photo-1517964396979-9b3cb1de3a04?q=80&w=2070&auto=format&fit=crop",
            slug: "future-of-stainless-steel-in-construction",
          },
          {
            id: 2,
            title: "Choosing the Right Grade of Steel for Your Project",
            excerpt:
              "A comprehensive guide to understanding different steel grades and selecting the perfect one for your specific needs.",
            author: "Jane Smith",
            publishedAt: new Date().toISOString(),
            imageUrl:
              "https://images.unsplash.com/photo-1621947231262-21c3a24845a2?q=80&w=2070&auto=format&fit=crop",
            slug: "choosing-the-right-grade-of-steel",
          },
          {
            id: 3,
            title: "KAAVERI Steels: A Commitment to Quality and Innovation",
            excerpt:
              "Learn more about our company's history, our commitment to quality, and our vision for the future of the steel industry.",
            author: "Samuel Green",
            publishedAt: new Date().toISOString(),
            imageUrl:
              "https://images.unsplash.com/photo-1531305942448-3712a83832f7?q=80&w=2070&auto=format&fit=crop",
            slug: "kaaveri-steels-commitment-to-quality",
          },
        ],
      };
      setPosts(mockData.posts ?? []);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Unable to fetch blog posts."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  return (
    <main className="min-h-screen bg-[#f6f6f6]">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-r from-gray-800 via-gray-900 to-black py-24 text-white shadow-2xl md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_60%)] mix-blend-overlay" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50 mix-blend-overlay" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="h-[2px] w-12 bg-accent-yellow" />
            <h1 className="font-body text-sm font-bold uppercase tracking-[0.2em] text-accent-yellow">
              KAAVERI Insights
            </h1>
            <div className="h-[2px] w-12 bg-accent-yellow" />
          </div>

          <h2 className="font-heading text-4xl leading-tight md:text-6xl">
            News, Articles & Resources
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/75 md:text-lg">
            Stay updated with the latest news from the steel industry, company
            announcements, and expert insights from our team.
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="px-4 py-14 md:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-[1600px]">
          {loading ? (
            <p className="py-20 text-center text-base text-black/60">
              Loading posts...
            </p>
          ) : error ? (
            <p className="py-20 text-center text-base text-red-600">{error}</p>
          ) : posts.length === 0 ? (
            <p className="py-20 text-center text-base text-black/60">
              No blog posts available yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-black/10 bg-white p-6 shadow-[0_12px_35px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)]"
                >
                  {post.imageUrl && (
                    <div className="mb-5 aspect-video w-full overflow-hidden rounded-2xl">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="mb-3 flex items-center gap-4 text-xs text-black/60">
                    <span>
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-black/20" />
                    <span>By {post.author}</span>
                  </div>
                  <h3 className="font-heading text-xl leading-snug text-black md:text-2xl">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-accent-yellow transition"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-black/72 md:text-base">
                    {post.excerpt}
                  </p>
                  <div className="mt-6">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="font-semibold text-black transition hover:text-accent-yellow"
                    >
                      Read More &rarr;
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
import Link from "next/link";
import { getPublicModuleItemBySlug } from "@/lib/dynamic-cms";
import { notFound } from "next/navigation";
import { resolveMediaUrl } from "@/lib/media";

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getPublicModuleItemBySlug("blogs", slug);

  if (!blog) {
    notFound();
  }

  const imageSrc = resolveMediaUrl(blog.cover_image || blog.file_url || "", "");

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* 
        HERO SECTION 
        Full-width yellow background, left-aligned title, Back to Blogs link 
      */}
      <section className="relative w-full bg-[#FFD500] px-6 pb-32 pt-48">
        <div className="mx-auto max-w-[1200px] relative z-10">
          <Link 
            href="/blogs" 
            className="mb-6 inline-flex items-center text-sm font-bold uppercase tracking-wider text-black/60 transition hover:text-black"
          >
            &larr; Back to Blogs
          </Link>
          <h1 className="max-w-4xl font-sans text-4xl font-extrabold leading-tight text-black sm:text-5xl md:text-6xl drop-shadow-sm">
            {blog.title}
          </h1>
        </div>
      </section>

      {/* 
        MAIN CONTENT SECTION 
        Vertical flow, large featured image, centered content 
      */}
      <section className="relative z-20 mx-auto -mt-20 max-w-[1200px] px-4 md:px-6">
        {/* Featured Image */}
        <div className="relative w-full h-[450px] overflow-hidden rounded-[12px] bg-gray-200 shadow-xl md:h-[600px] border border-black/5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {imageSrc && <img src={imageSrc} alt={blog.title} className="w-full h-full object-cover" />}
        </div>

        {/* Article Container */}
        <div className="mx-auto mt-16 max-w-[800px] rounded-2xl bg-white p-8 shadow-sm border border-gray-100 md:p-12">
          {/* Overview Heading */}
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Overview</h2>
            <div className="mx-auto mt-4 h-1.5 w-20 rounded-full bg-accent-red"></div>
          </div>
          {/* Article Content */}
          <article className="prose prose-lg md:prose-xl prose-red max-w-none text-gray-700 leading-relaxed marker:bg-red-100 marker:text-black" dangerouslySetInnerHTML={{ __html: String(blog.content || "") }} />
        </div>
      </section>
    </main>
  );
}
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

// In a real application, this data would come from a CMS or database.
const getPostData = async (slug: string) => {
  // This is mock data for demonstration purposes.
  const posts: { [key: string]: any } = {
    "the-ultimate-guide-to-tmt-steel-bars": {
      title: "The Ultimate Guide to TMT Steel Bars in Modern Construction",
      author: "Dr. Anirban Chatterjee",
      authorImage: "/author-placeholder.png", // Placeholder image
      date: "2026-05-28",
      readingTime: "8 min read",
      category: "Construction Insights",
      featureImage: "/vehicle.png", // Using an existing image as placeholder
      content: `
        <p class="text-xl text-gray-600">When building the future, the strength of your foundation is paramount. In the world of modern construction, Thermo-Mechanically Treated (TMT) steel bars have become the gold standard for reinforcing concrete structures. But what makes them so essential?</p>
        <p>This guide will delve into the science, benefits, and applications of TMT steel bars, providing engineers, architects, and builders with the knowledge to make informed decisions for projects that are built to last for generations.</p>
        
        <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-4">What is TMT Steel?</h2>
        <p>TMT steel bars are high-strength reinforcement bars featuring a tough outer core and a soft inner core. This unique structure is achieved through a specialized manufacturing process involving controlled heating and cooling.</p>
        
        <ul class="list-disc list-inside space-y-2 my-6 pl-4">
            <li><strong>Quenching:</strong> Hot rolled steel bars are rapidly cooled by water jets. This hardens the surface to form a layer of martensite.</li>
            <li><strong>Self-Tempering:</strong> The core remains hot and austenitic. It cools down slowly, tempering the outer martensitic layer.</li>
            <li><strong>Atmospheric Cooling:</strong> The final cooling on a cooling bed turns the soft inner core into a ductile ferrite-pearlite structure.</li>
        </ul>

        <figure class="my-12">
            <img src="/bg1.png" alt="TMT Manufacturing Process" class="rounded-lg shadow-lg w-full" />
            <figcaption class="text-center text-sm text-gray-500 mt-3">The three stages of the TMT manufacturing process.</figcaption>
        </figure>

        <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-4">The Unmatched Advantages</h2>
        <p>The unique properties of TMT bars offer significant advantages over conventional steel bars.</p>
        
        <blockquote class="border-l-4 border-red-600 pl-6 py-4 my-8 bg-red-50 text-gray-700 italic">
            <p>"The superior ductility of TMT bars is a critical safety feature, allowing structures to better withstand seismic forces without catastrophic failure."</p>
        </blockquote>

        <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-3">1. Superior Strength & Ductility</h3>
        <p>The hard outer layer provides high strength, while the ductile core allows the bar to bend without breaking. This combination is crucial for earthquake-resistant structures.</p>

        <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-3">2. Enhanced Corrosion Resistance</h3>
        <p>The absence of torsional stress in the manufacturing process gives TMT bars a higher resistance to corrosion, extending the lifespan of the concrete structure.</p>

        <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-3">3. Excellent Weldability</h3>
        <p>TMT bars have a low carbon content, which makes them easy to weld without compromising strength at the weld joints. This allows for greater design flexibility and faster construction.</p>

        <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-4">Choosing the Right Grade</h2>
        <p>TMT bars come in various grades (e.g., Fe-415, Fe-500, Fe-550, Fe-600), with higher grades indicating higher strength. The choice of grade depends on the specific structural requirements of the project.</p>

        <hr class="my-12 border-gray-200" />

        <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-4">Conclusion: Building with Confidence</h2>
        <p>TMT steel bars are not just a component; they are an investment in the safety, longevity, and resilience of a structure. By understanding their properties and choosing the right quality and grade, you ensure that your project stands strong against the tests of time and nature.</p>
      `,
    },
  };

  return posts[slug] || null;
};

const RelatedArticleCard = ({ post }: { post: any }) => (
  <Link href={post.href}>
    <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <div className="relative w-full h-48">
        <Image
          src={post.image}
          alt={post.title}
          fill
          style={{objectFit: 'cover'}}
          className="group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-sm text-red-600 font-semibold uppercase tracking-wide">
          {post.category}
        </p>
        <h3 className="text-xl font-bold text-gray-900 mt-2 mb-4 flex-grow">
          {post.title}
        </h3>
        <p className="font-semibold text-gray-800 group-hover:text-red-600 transition-colors">
          Read More &rarr;
        </p>
      </div>
    </div>
  </Link>
);

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostData(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = [
    {
      href: "#",
      image: "/bg1.png",
      category: "Safety",
      title: "Why Fe-550D is the New Standard for Seismic Zones",
    },
    {
      href: "#",
      image: "/bg1.png",
      category: "Innovation",
      title: "The Economics of Using High-Grade TMT Bars",
    },
    {
      href: "#",
      image: "/bg1.png",
      category: "Quality",
      title: "A Builder’s Checklist for On-Site Steel Testing",
    },
  ];

  return (
    <main className="bg-gray-50">
      <article>
        {/* ====== HEADER ====== */}
        <header className="bg-gray-900 text-white py-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${post.featureImage})`, filter: 'blur(8px)' }}
          ></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <p className="text-red-500 font-semibold tracking-wider uppercase">
              {post.category}
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold mt-4 mb-6 text-white drop-shadow-lg">
              {post.title}
            </h1>
            <div className="flex items-center justify-center space-x-4 text-gray-200">
              <div className="flex items-center space-x-3">
                <Image
                  src={post.authorImage}
                  alt={post.author}
                  width={40}
                  height={40}
                  className="rounded-full bg-gray-700 border-2 border-white"
                />
                <span className="font-medium">{post.author}</span>
              </div>
              <span className="opacity-50">•</span>
              <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
              <span className="opacity-50">•</span>
              <span>{post.readingTime}</span>
            </div>
          </div>
        </header>

        {/* ====== ARTICLE CONTENT ====== */}
        <div className="bg-white">
          <div
            className="max-w-3xl mx-auto px-6 py-16 lg:py-24 prose lg:prose-xl"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* ====== CTA SECTION ====== */}
        <section className="bg-gray-800 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build with Uncompromising Quality?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Ensure the integrity of your project from the ground up. Contact
              Kaaveri Steels today for a consultation or to book a free on-site
              test of your steel supply.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-semibold tracking-wide rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </section>

        {/* ====== RELATED ARTICLES ====== */}
        <section className="py-20 px-6 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <RelatedArticleCard key={index} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
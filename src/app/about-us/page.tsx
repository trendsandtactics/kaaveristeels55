import AboutHero from "@/components/AboutHero";
import { listModuleItems } from "@/lib/dynamic-cms";
import { resolveMediaUrl } from "@/lib/media";

export const metadata = {
    title: "About Us | KAAVERI TMT & STRUCTURAL",
    description: "Learn about KAAVERI, a leading manufacturer of TMT bars and structural steel products.",
};

export default async function AboutUsPage() {
    const aboutUsSections = await listModuleItems("aboutUs", { status: "published" });

    return (
        <main className="flex min-h-screen flex-col items-center justify-start w-full relative bg-background pb-20">
            <AboutHero />
            
            <div className="w-full max-w-7xl mx-auto px-6 md:px-12 mt-12 md:mt-24 space-y-24">
                {aboutUsSections.map((section) => (
                    <section key={section.id} className="flex flex-col md:flex-row gap-12 items-start">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-black mb-6">
                                {section.title}
                            </h2>
                            {section.short_description && (
                                <p className="text-xl text-black/70 mb-6 font-medium leading-relaxed">
                                    {section.short_description}
                                </p>
                            )}
                            {section.content && (
                                <div 
                                    className="prose prose-lg prose-black max-w-none text-black/80 font-body"
                                    dangerouslySetInnerHTML={{ __html: section.content }}
                                />
                            )}
                        </div>
                        {section.cover_image && (
                            <div className="w-full md:w-1/2">
                                <img 
                                    src={resolveMediaUrl(section.cover_image, "")} 
                                    alt={section.title}
                                    className="w-full h-auto rounded-lg shadow-xl object-cover"
                                />
                            </div>
                        )}
                    </section>
                ))}
            </div>
        </main>
    );
}

import AboutHero from "@/components/AboutHero";
import AboutContent from "@/components/AboutContent";


export const metadata = {
    title: "About Us | KAAVERI TMT & STRUCTURAL",
    description: "Learn about KAAVERI, a leading manufacturer of TMT bars and structural steel products.",
};

export default function AboutUsPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between w-full relative bg-background">
            <AboutHero />
            <AboutContent />
        </main>
    );
}

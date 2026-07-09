import type { Metadata } from "next";
import AboutHero from "@/components/AboutHero";
import AboutContent from "@/components/AboutContent";
import { buildPageMetadata } from "@/lib/seo";

export const revalidate = 300;

export async function generateMetadata(): Promise<Metadata> {
    return buildPageMetadata("about-us");
}

export default function AboutUsPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between w-full relative bg-background">
            <AboutHero />
            <AboutContent />
        </main>
    );
}

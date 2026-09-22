import type { Metadata } from "next";
import AboutHero from "@/components/AboutHero";
import AboutContent from "@/components/AboutContent";
import { buildPageMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/jsonld";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
    return buildPageMetadata("about-us");
}

export default function AboutUsPage() {
    const breadcrumbs = getBreadcrumbJsonLd([{ name: "About Us", path: "/about-us" }]);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between w-full relative bg-background">
            <JsonLd id="about-breadcrumbs" data={breadcrumbs} />
            <AboutHero />
            <AboutContent />
        </main>
    );
}


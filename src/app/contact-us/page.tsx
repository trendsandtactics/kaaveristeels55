import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import ContactUsClient from "./ContactUsClient";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/jsonld";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata("contact-us");
}

export default function ContactUsPage() {
  const breadcrumbs = getBreadcrumbJsonLd([{ name: "Contact Us", path: "/contact-us" }]);

  return (
    <>
      <JsonLd id="contact-breadcrumbs" data={breadcrumbs} />
      <ContactUsClient />
    </>
  );
}


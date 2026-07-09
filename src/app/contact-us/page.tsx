import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import ContactUsClient from "./ContactUsClient";

export const revalidate = 300;

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata("contact-us");
}

export default function ContactUsPage() {
  return <ContactUsClient />;
}

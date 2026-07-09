import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import CertificationsClient from "./CertificationsClient";

export const revalidate = 300;

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata("certifications");
}

export default function CertificationsPage() {
  return <CertificationsClient />;
}

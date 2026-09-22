import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import CertificationsClient from "./CertificationsClient";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/jsonld";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata("certifications");
}

export default function CertificationsPage() {
  const breadcrumbs = getBreadcrumbJsonLd([{ name: "Certifications", path: "/certifications" }]);

  return (
    <>
      <JsonLd id="certifications-breadcrumbs" data={breadcrumbs} />
      <CertificationsClient />
    </>
  );
}


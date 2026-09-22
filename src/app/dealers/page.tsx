import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import DealersClient from "./DealersClient";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/jsonld";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata("dealers");
}

export default function DealersPage() {
  const breadcrumbs = getBreadcrumbJsonLd([{ name: "Dealers", path: "/dealers" }]);

  return (
    <>
      <JsonLd id="dealers-breadcrumbs" data={breadcrumbs} />
      <DealersClient />
    </>
  );
}


import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import TrustOnSiteClient from "./TrustOnSiteClient";

export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata("trust-on-site");
}

export default function TrustOnSitePage() {
  return <TrustOnSiteClient />;
}

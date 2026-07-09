import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import QualityPolicyClient from "./QualityPolicyClient";

export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata("quality-policy");
}

export default function QualityPolicyPage() {
  return <QualityPolicyClient />;
}

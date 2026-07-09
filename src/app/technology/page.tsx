import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import TechnologyClient from "./TechnologyClient";

export const revalidate = 300;

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata("technology");
}

export default function TechnologyPage() {
  return <TechnologyClient />;
}

import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import DealersClient from "./DealersClient";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata("dealers");
}

export default function DealersPage() {
  return <DealersClient />;
}

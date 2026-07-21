import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import HomeClient from "@/app/HomeClient";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata("home");
}

export default function Home() {
  return <HomeClient />;
}

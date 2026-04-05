import type { Metadata } from "next";
import QuoteClientPage from "./QuoteClientPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Quote",
  description:
    "Request a project quote from Smart Hive Labs for software, AI, and game development work.",
  path: "/quote",
  image: "/qoute.png",
  imageAlt: "Smart Hive Labs quote page",
});

export default function QuotePage() {
  return <QuoteClientPage />;
}

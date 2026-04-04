import type { Metadata } from "next";
import QuoteClientPage from "./QuoteClientPage";

export const metadata: Metadata = {
  title: "Quote",
  description:
    "Request a project quote from Smart Hive Labs for software, AI, and game development work.",
};

export default function QuotePage() {
  return <QuoteClientPage />;
}

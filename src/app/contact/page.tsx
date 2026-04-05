import type { Metadata } from "next";
import ContactClientPage from "./ContactClientPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "General enquiries, partnerships, and follow-up contact for Smart Hive Labs.",
  path: "/contact",
  image: "/contact.png",
  imageAlt: "Smart Hive Labs contact page",
});

export default function ContactPage() {
  return <ContactClientPage />;
}

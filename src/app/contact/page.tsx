import type { Metadata } from "next";
import ContactClientPage from "./ContactClientPage";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "General enquiries, partnerships, and follow-up contact for Smart Hive Labs.",
};

export default function ContactPage() {
  return <ContactClientPage />;
}

import type { Metadata } from "next";
import CareersClientPage from "./CareersClientPage";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Open roles, internships, placements, and applications at Smart Hive Labs.",
};

export default function CareersPage() {
  return <CareersClientPage />;
}

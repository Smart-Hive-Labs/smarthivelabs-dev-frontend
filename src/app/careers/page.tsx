import type { Metadata } from "next";
import CareersClientPage from "./CareersClientPage";
import { createPageMetadata } from "@/lib/metadata";
import { getCareerTracks, getVacancies } from "@/lib/cms";

export const metadata: Metadata = createPageMetadata({
  title: "Careers",
  description:
    "Open roles, internships, placements, and applications at Smart Hive Labs.",
  path: "/careers",
  image: "/careers.png",
  imageAlt: "Smart Hive Labs careers page",
});

export default async function CareersPage() {
  const [careerTracks, vacancies] = await Promise.all([
    getCareerTracks(),
    getVacancies(),
  ]);

  return <CareersClientPage careerTracks={careerTracks} vacancies={vacancies} />;
}

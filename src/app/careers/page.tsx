import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/studio/section-heading";
import { vacancies } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Development-focused vacancies and opportunities at Smart Hive Labs.",
};

export default function CareersPage() {
  return (
    <div className="section-wrap py-20 md:py-24">
      <SectionHeading
        eyebrow="Careers"
        title="Development-focused openings for the studio side of the company."
        description="The careers surface now prioritizes engineering and game development roles. Non-development roles were intentionally removed from this frontend."
      />

      <div className="mt-14 grid gap-5">
        {vacancies.map((role) => (
          <article
            key={role.title}
            className="surface-panel grid gap-6 rounded-[2rem] p-8 lg:grid-cols-[0.8fr_1.2fr_auto]"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/42">
                {role.team}
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white">
                {role.title}
              </h2>
              <p className="mt-3 text-sm text-white/56">
                {role.level} · {role.location}
              </p>
              <p className="mt-5 text-sm leading-7 text-white/60">{role.summary}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/42">
                Requirements
              </p>
              <div className="mt-4 grid gap-3">
                {role.requirements.map((item) => (
                  <p key={item} className="rounded-[1.2rem] border border-white/8 bg-white/[0.03] px-4 py-4 text-sm text-white/62">
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 lg:items-end">
              <span className="rounded-full border border-white/8 px-3 py-1 text-xs text-white/58">
                {role.status}
              </span>
              {role.applyUrl ? (
                <Button asChild className="rounded-full bg-white px-5 text-[#0b1020] hover:bg-white/90">
                  <Link href={role.applyUrl}>
                    Apply / Enquire
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              ) : (
                <p className="max-w-[12rem] text-right text-sm text-white/52">
                  Pipeline role. Use contact to register interest.
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { GithubOrganizationPanel } from "@/components/studio/github-organization-panel";
import { SectionHeading } from "@/components/studio/section-heading";
import { EmptyState } from "@/components/ui/empty-state";
import { createPageMetadata } from "@/lib/metadata";
import { getOpenSource } from "@/lib/cms";

export const metadata: Metadata = createPageMetadata({
  title: "Open Source",
  description:
    "Explore open-source work and public repositories from Smart Hive Labs.",
  path: "/open-source",
  image: "/open-source.png",
  imageAlt: "Smart Hive Labs open source page",
});

export default async function OpenSourcePage() {
  const openSourceEntries = await getOpenSource();

  return (
    <div className="section-wrap py-20 md:py-24">
      <SectionHeading
        eyebrow="Open Source"
        title="Maintained public work that reflects how the studio thinks and builds."
        description="Selected repositories are open for contribution, while the broader GitHub organization also includes public product and research work."
      />
      <div className="mt-14 grid gap-5 lg:grid-cols-2">
        {openSourceEntries.length === 0 ? (
          <EmptyState title="No repositories yet" message="Public work is on its way." />
        ) : openSourceEntries.map((entry) => (
          <article key={entry.title} className="surface-panel rounded-[2rem] p-8">
            <div className="flex items-center gap-3 text-[var(--amber)]">
              <Github className="h-4 w-4" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em]">{entry.focus}</p>
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white">
              {entry.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-white/62">{entry.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {entry.stack.map((item) => (
                <span key={item} className="rounded-full border border-white/8 px-3 py-1 text-xs text-white/58">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={entry.repository}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white transition-colors hover:border-[var(--border-amber)] hover:bg-[var(--amber-muted)] hover:text-[var(--amber)]"
              >
                Repository
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              {entry.issuesUrl ? (
                <Link
                  href={entry.issuesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white transition-colors hover:border-[var(--border-amber)] hover:bg-[var(--amber-muted)] hover:text-[var(--amber)]"
                >
                  Issues
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              ) : null}
            </div>
          </article>
        ))}
      </div>
      <div className="mt-16">
        <GithubOrganizationPanel />
      </div>
    </div>
  );
}

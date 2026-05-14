import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { AnimateIn, StaggerIn } from "@/components/home/animate-in";
import { StaggerItem } from "@/components/home/motion-card";
import { GithubOrganizationPanel } from "@/components/studio/github-organization-panel";
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
    <div className="min-h-screen bg-[#07111f]">

      {/* ── Page Hero ── */}
      <section className="section-wrap relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-20">
        <p className="pointer-events-none absolute right-0 top-0 select-none text-[clamp(3.5rem,10vw,9rem)] font-black uppercase leading-none tracking-[-0.04em] text-white/[0.032]">
          OPEN SOURCE
        </p>
        <AnimateIn delay={0.05}>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f5a623]">Open Source</p>
          <h1 className="mt-5 max-w-3xl text-[clamp(2.2rem,5vw,4.5rem)] font-semibold leading-[1.08] tracking-[-0.05em] text-white">
            Maintained public work that reflects how the studio thinks and builds.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/58">
            Selected repositories are open for contribution, while the broader GitHub organization includes additional public product and research work.
          </p>
        </AnimateIn>
      </section>

      <div className="section-wrap">
        <div className="h-px bg-white/[0.06]" />
      </div>

      {/* ── Repository Grid ── */}
      <section className="section-wrap py-20 md:py-24">
        {openSourceEntries.length === 0 ? (
          <EmptyState title="No repositories yet" message="Public work is on its way." />
        ) : (
          <StaggerIn className="grid gap-5 lg:grid-cols-2" stagger={0.09}>
            {openSourceEntries.map((entry) => (
              <StaggerItem key={entry.title} hoverY={-4}>
                <article className="group flex h-full flex-col rounded-[2rem] border border-white/[0.07] bg-[#0b1423] p-8 transition-colors hover:border-[rgba(245,166,35,0.18)]">
                  <div className="flex items-center gap-2.5 text-[#f5a623]">
                    <Github className="h-4 w-4" />
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em]">{entry.focus}</p>
                  </div>
                  <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white">
                    {entry.title}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-white/60">{entry.summary}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {entry.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/[0.08] px-3 py-1 text-xs text-white/50"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-8 flex flex-wrap gap-3">
                    <Link
                      href={entry.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white transition-colors hover:border-[rgba(245,166,35,0.28)] hover:bg-[rgba(245,166,35,0.1)] hover:text-[#f5a623]"
                    >
                      Repository
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                    {entry.issuesUrl ? (
                      <Link
                        href={entry.issuesUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white transition-colors hover:border-[rgba(245,166,35,0.28)] hover:bg-[rgba(245,166,35,0.1)] hover:text-[#f5a623]"
                      >
                        Issues
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    ) : null}
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerIn>
        )}
      </section>

      {/* ── GitHub Org Panel ── */}
      <div className="section-wrap pb-24">
        <AnimateIn>
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f5a623]">GitHub Organisation</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
              More public work on GitHub
            </h2>
          </div>
          <GithubOrganizationPanel />
        </AnimateIn>
      </div>
    </div>
  );
}

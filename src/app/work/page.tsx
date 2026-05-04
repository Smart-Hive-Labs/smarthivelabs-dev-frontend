import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/studio/section-heading";
import { caseStudies } from "@/data/siteContent";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Work",
  description:
    "Curated case studies, internal products, and prototype work from Smart Hive Labs.",
  path: "/work",
  image: "/work.png",
  imageAlt: "Smart Hive Labs work page",
});

export default function WorkPage() {
  return (
    <div className="section-wrap py-20 md:py-24">
      <SectionHeading
        eyebrow="Work"
        title="Curated case studies instead of a generic portfolio dump."
        description="Selected client work, internal products, and active initiatives presented with the right level of public detail."
      />

      <div className="mt-14 grid gap-5">
        {caseStudies.map((project) => (
          <article
            key={project.slug}
            className="surface-panel grid gap-8 rounded-[2rem] p-8 lg:grid-cols-[0.8fr_1.2fr]"
          >
            <div className="space-y-5">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-[var(--border-amber)] bg-[var(--amber-muted)] px-3 py-1 text-xs text-[var(--amber)]">
                  {project.type}
                </span>
                <span className="rounded-full border border-white/8 px-3 py-1 text-xs text-white/58">
                  {project.status}
                </span>
                <span className="rounded-full border border-white/8 px-3 py-1 text-xs text-white/58">
                  {project.visibility}
                </span>
              </div>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white">
                {project.title}
              </h2>
              <p className="text-base leading-7 text-white/64">{project.summary}</p>
              {project.metrics?.length ? (
                <div className="grid gap-3 sm:grid-cols-2">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-[1.25rem] border border-white/8 bg-white/[0.03] px-4 py-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-[var(--amber)]">
                        {metric.label}
                      </p>
                      <p className="mt-2 text-sm text-white/70">{metric.value}</p>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            <div className="space-y-6">
              <p className="text-sm leading-7 text-white/60">{project.description}</p>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--amber)]">
                  Capabilities
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.capabilities.map((capability) => (
                    <span
                      key={capability}
                      className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/56"
                    >
                      {capability}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--amber)]">
                  Tags
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/8 px-3 py-1 text-xs text-white/56"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {project.confidentialityNote ? (
                <p className="rounded-[1.25rem] border border-white/8 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-white/56">
                  {project.confidentialityNote}
                </p>
              ) : null}
              {project.links?.length ? (
                <div className="flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white transition-colors hover:border-[var(--border-amber)] hover:bg-[var(--amber-muted)] hover:text-[var(--amber)]"
                    >
                      {link.label}
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

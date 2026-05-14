import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimateIn, StaggerIn } from "@/components/home/animate-in";
import { StaggerItem } from "@/components/home/motion-card";
import { EmptyState } from "@/components/ui/empty-state";
import { createPageMetadata } from "@/lib/metadata";
import { getProjects } from "@/lib/cms";

export const metadata: Metadata = createPageMetadata({
  title: "Work",
  description:
    "Curated case studies, internal products, and prototype work from Smart Hive Labs.",
  path: "/work",
  image: "/work.png",
  imageAlt: "Smart Hive Labs work page",
});

export default async function WorkPage() {
  const caseStudies = await getProjects();

  return (
    <div className="min-h-screen bg-[#07111f]">

      {/* ── Page Hero ── */}
      <section className="section-wrap relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-20">
        <p className="pointer-events-none absolute right-0 top-0 select-none text-[clamp(5rem,18vw,16rem)] font-black uppercase leading-none tracking-[-0.04em] text-white/[0.032]">
          WORK
        </p>
        <AnimateIn delay={0.05}>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f5a623]">Work</p>
          <h1 className="mt-5 max-w-3xl text-[clamp(2.2rem,5vw,4.5rem)] font-semibold leading-[1.08] tracking-[-0.05em] text-white">
            Curated case studies instead of a generic portfolio dump.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/58">
            Selected client work, internal products, and active initiatives — presented with the right level of public detail.
          </p>
        </AnimateIn>
      </section>

      <div className="section-wrap">
        <div className="h-px bg-white/[0.06]" />
      </div>

      {/* ── Project List ── */}
      <div className="section-wrap py-20 md:py-24">
        {caseStudies.length === 0 ? (
          <EmptyState
            title="No projects yet"
            message="Our portfolio is growing. Check back soon."
          />
        ) : (
          <StaggerIn className="grid gap-6" stagger={0.1}>
            {caseStudies.map((project) => (
              <StaggerItem key={project.slug} hoverY={-3}>
                <article className="group grid gap-8 rounded-[2rem] border border-white/[0.07] bg-[#0b1423] p-8 transition-colors hover:border-[rgba(245,166,35,0.14)] lg:grid-cols-[0.8fr_1.2fr]">

                  {/* Left column */}
                  <div className="space-y-5">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full border border-[rgba(245,166,35,0.28)] bg-[rgba(245,166,35,0.1)] px-3 py-1 text-xs text-[#f5a623]">
                        {project.type}
                      </span>
                      <span className="rounded-full border border-white/[0.08] px-3 py-1 text-xs text-white/50">
                        {project.status}
                      </span>
                      <span className="rounded-full border border-white/[0.08] px-3 py-1 text-xs text-white/50">
                        {project.visibility}
                      </span>
                    </div>

                    <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white">
                      {project.title}
                    </h2>
                    <p className="text-base leading-7 text-white/62">{project.summary}</p>

                    {project.metrics?.length ? (
                      <div className="grid gap-3 sm:grid-cols-2">
                        {project.metrics.map((metric) => (
                          <div
                            key={metric.label}
                            className="rounded-[1.25rem] border border-white/[0.07] bg-white/[0.025] px-4 py-4"
                          >
                            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#f5a623]">
                              {metric.label}
                            </p>
                            <p className="mt-2 text-sm text-white/68">{metric.value}</p>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>

                  {/* Right column */}
                  <div className="space-y-6">
                    <p className="text-sm leading-7 text-white/58">{project.description}</p>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#f5a623]">Capabilities</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.capabilities.map((capability) => (
                          <span
                            key={capability}
                            className="rounded-full bg-white/[0.04] px-3 py-1 text-xs text-white/54"
                          >
                            {capability}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#f5a623]">Tags</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/[0.08] px-3 py-1 text-xs text-white/48"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {project.confidentialityNote ? (
                      <p className="rounded-[1.25rem] border border-white/[0.07] bg-white/[0.025] px-4 py-4 text-sm leading-7 text-white/50">
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
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white transition-colors hover:border-[rgba(245,166,35,0.28)] hover:bg-[rgba(245,166,35,0.1)] hover:text-[#f5a623]"
                          >
                            {link.label}
                            <ArrowUpRight className="h-4 w-4" />
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerIn>
        )}
      </div>

      {/* ── CTA Band ── */}
      <AnimateIn>
        <section className="section-wrap pb-24">
          <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(245,166,35,0.15)] bg-[#0f1729] px-8 py-12 md:px-14 md:py-16">
            <p className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 select-none text-[clamp(4rem,12vw,10rem)] font-black uppercase leading-none tracking-tight text-white/[0.028]">
              NEXT
            </p>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f5a623]">Start a project</p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
              Your build could be here next.
            </h2>
            <p className="mt-4 max-w-lg text-base leading-8 text-white/54">
              Smart Hive Labs works with businesses and partners who want product thinking alongside technical delivery.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 rounded-full bg-[#f5a623] px-6 py-3 text-sm font-bold text-black transition-opacity hover:opacity-85"
              >
                Get a Quote <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 px-6 py-3 text-sm text-white/70 transition-colors hover:border-white/24 hover:text-white"
              >
                View Services
              </Link>
            </div>
          </div>
        </section>
      </AnimateIn>
    </div>
  );
}

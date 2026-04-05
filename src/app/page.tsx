import Link from "next/link";
import { ArrowRight, ArrowUpRight, Github, Layers3, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/studio/section-heading";
import { createPageMetadata } from "@/lib/metadata";
import {
  buildProcess,
  caseStudies,
  developerProfiles,
  openSourceEntries,
  serviceOffers,
  studioPrinciples,
  studioStats,
} from "@/data/siteContent";

export const metadata = createPageMetadata({
  title: "Smart Hive Labs | Software and Game Development",
  description:
    "Smart Hive Labs builds software products, web and mobile apps, AI-enabled systems, and game development projects for businesses and partners.",
  path: "/",
  image: "/homepage.png",
  imageAlt: "Smart Hive Labs homepage",
});

const featuredProjects = caseStudies.slice(0, 3);
const featuredServices = serviceOffers.slice(0, 4);

export default function HomePage() {
  return (
    <div className="pb-24">
      <section className="hero-grid relative overflow-hidden border-b border-white/8">
        <div className="section-wrap relative py-20 md:py-28">
          <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="max-w-4xl space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/62">
                <Sparkles className="h-3.5 w-3.5" />
                Software, AI and Game Development
              </div>
              <div className="space-y-6">
                <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-white md:text-7xl">
                  We build software products and digital systems that businesses can actually operate.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-white/66 md:text-xl">
                  Smart Hive Labs is a software and game development studio for companies that need product-grade execution, curated delivery, and a cleaner path from concept to launch.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="rounded-full bg-white px-7 text-[#0b1020] hover:bg-white/90">
                  <Link href="/quote">
                    Get Quote
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/12 bg-white/4 px-7 text-white hover:bg-white/8 hover:text-white"
                >
                  <Link href="/work">
                    View Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="surface-panel rounded-[2rem] p-6 md:p-8">
              <div className="rounded-[1.5rem] border border-white/8 bg-black/20 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42">
                  Studio Notes
                </p>
                <div className="mt-6 space-y-4">
                  {studioPrinciples.map((principle) => (
                    <div
                      key={principle}
                      className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-white/72"
                    >
                      {principle}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {studioStats.map((stat) => (
              <div key={stat.label} className="surface-panel rounded-[1.75rem] px-6 py-6">
                <p className="text-sm text-white/42">{stat.label}</p>
                <p className="mt-3 text-xl font-medium tracking-[-0.03em] text-white">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap py-20 md:py-24">
        <SectionHeading
          eyebrow="Capabilities"
          title="A software-focused service stack with product discipline built in."
          description="Smart Hive Labs helps businesses plan, build, launch, and improve software products, operational tools, and interactive experiences."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {featuredServices.map((service) => (
            <div key={service.title} className="surface-panel rounded-[1.75rem] p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/40">
                {service.category}
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white">
                {service.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-white/62">
                {service.positioning}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/8 px-3 py-1 text-xs text-white/58"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-wrap py-20 md:py-24">
        <SectionHeading
          eyebrow="Selected Work"
          title="Curated work, internal products, and active exploration."
          description="A selective look at product builds, client delivery, and internal initiatives across software, AI, and interactive systems."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <div key={project.slug} className="surface-panel rounded-[1.75rem] p-7">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full border border-white/8 px-3 py-1 text-xs text-white/58">
                  {project.type}
                </span>
                <span className="text-xs text-white/42">{project.status}</span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-white">
                {project.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-white/62">{project.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/56"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Button asChild variant="ghost" className="rounded-full px-0 text-white hover:bg-transparent hover:text-white/75">
            <Link href="/work">
              Explore all work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="section-wrap py-20 md:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="Process"
            title="A tighter path from enquiry to build."
            description="Every engagement is shaped around discovery, technical planning, production delivery, and post-launch continuity."
          />
          <div className="grid gap-4">
            {buildProcess.map((phase) => (
              <div key={phase.step} className="surface-panel rounded-[1.6rem] px-6 py-5">
                <div className="flex items-start gap-5">
                  <p className="text-sm font-semibold tracking-[0.22em] text-white/40">
                    {phase.step}
                  </p>
                  <div>
                    <h3 className="text-xl font-medium text-white">{phase.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/58">{phase.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap py-20 md:py-24">
        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="surface-panel rounded-[2rem] p-8 md:p-10">
            <SectionHeading
              eyebrow="Developers"
              title="Meet the people and disciplines behind the work."
              description="Meet the engineering focus areas behind Smart Hive Labs and the disciplines that support delivery across products and platforms."
            />
            <div className="mt-10 grid gap-4">
              {developerProfiles.map((developer) => (
                <div
                  key={developer.name}
                  className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5"
                >
                  <p className="text-xs uppercase tracking-[0.24em] text-white/42">
                    {developer.role}
                  </p>
                  <h3 className="mt-3 text-xl font-medium text-white">{developer.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/60">{developer.bio}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-panel rounded-[2rem] p-8 md:p-10">
            <SectionHeading
              eyebrow="Open Source"
              title="Build in public where it sharpens the studio."
              description="Open-source work remains visible as a signal of technical range, experimentation, and contribution."
            />
            <div className="mt-10 grid gap-4">
              {openSourceEntries.map((entry) => (
                <div key={entry.title} className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5">
                  <div className="flex items-center gap-3 text-white/40">
                    <Github className="h-4 w-4" />
                    <p className="text-xs uppercase tracking-[0.24em]">{entry.focus}</p>
                  </div>
                  <h3 className="mt-4 text-xl font-medium text-white">{entry.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/60">{entry.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap pt-8">
        <div className="surface-panel rounded-[2rem] px-8 py-10 md:px-12 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/42">
                Project Enquiries
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
                Start with a quote for project work, or contact the team for general enquiries.
              </h2>
              <p className="mt-4 text-base leading-7 text-white/60">
                Project build requests and general enquiries are handled separately so each conversation starts with the right level of detail.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="outline" className="rounded-full border-white/12 bg-white/4 px-6 text-white hover:bg-white/8 hover:text-white">
                <Link href="/contact">General Contact</Link>
              </Button>
              <Button asChild className="rounded-full bg-white px-6 text-[#0b1020] hover:bg-white/90">
                <Link href="/quote">
                  Get Quote
                  <Layers3 className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimateIn, StaggerIn } from "@/components/home/animate-in";
import { StaggerItem } from "@/components/home/motion-card";
import { createPageMetadata } from "@/lib/metadata";
import { getServiceOffers } from "@/lib/cms";

export const metadata: Metadata = createPageMetadata({
  title: "Services",
  description:
    "Software development, AI-enabled systems, web and mobile application delivery, and game development services from Smart Hive Labs.",
  path: "/services",
  image: "/services.png",
  imageAlt: "Smart Hive Labs services page",
});

const serviceCategories = [
  "Product Engineering",
  "Applications",
  "AI Systems",
  "Game Development",
  "Support",
  "Advisory",
] as const;

const categoryDescriptions: Record<string, string> = {
  "Product Engineering": "End-to-end build: architecture to production deployment.",
  "Applications": "Web, mobile, and cross-platform apps built for real users.",
  "AI Systems": "Intelligent systems, LLM integration, and data pipelines.",
  "Game Development": "Unity and web-based games with polish and performance.",
  "Support": "Ongoing maintenance, technical support, and rapid iteration.",
  "Advisory": "Product and engineering consulting for teams that need clarity.",
};

export default async function ServicesPage() {
  const serviceOffers = await getServiceOffers();

  return (
    <div className="min-h-screen bg-[#07111f]">

      {/* ── Page Hero ── */}
      <section className="section-wrap relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-20">
        <p className="pointer-events-none absolute right-0 top-0 select-none text-[clamp(5rem,14vw,13rem)] font-black uppercase leading-none tracking-[-0.04em] text-white/[0.032]">
          SERVICES
        </p>
        <AnimateIn delay={0.05}>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f5a623]">Services</p>
          <h1 className="mt-5 max-w-3xl text-[clamp(2.2rem,5vw,4.5rem)] font-semibold leading-[1.08] tracking-[-0.05em] text-white">
            Software and web development services built around real delivery.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/58">
            From product engineering to AI systems and game development — every engagement is scoped with commercial intent and technical clarity.
          </p>
        </AnimateIn>
      </section>

      <div className="section-wrap">
        <div className="h-px bg-white/[0.06]" />
      </div>

      {/* ── Service Categories ── */}
      <div className="section-wrap space-y-20 py-20 md:py-24">
        {serviceCategories.map((category, catIdx) => {
          const items = serviceOffers.filter((s) => s.category === category);
          if (items.length === 0) return null;
          return (
            <AnimateIn key={category} delay={0.04 + catIdx * 0.03}>
              <section className="grid gap-8">
                {/* Category header */}
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f5a623]">{category}</p>
                    <p className="mt-1.5 text-sm text-white/42">{categoryDescriptions[category]}</p>
                  </div>
                  <div className="hidden h-px flex-1 bg-white/[0.05] md:mx-8 md:block" />
                  <p className="text-xs tabular-nums text-white/25">
                    {String(items.length).padStart(2, "0")}
                  </p>
                </div>

                {/* Cards */}
                <StaggerIn className="grid gap-5 lg:grid-cols-2" stagger={0.08}>
                  {items.map((service) => (
                    <StaggerItem key={service.title} hoverY={-4}>
                      <article className="group flex h-full flex-col rounded-[1.8rem] border border-white/[0.07] bg-[#0b1423] p-7 transition-colors hover:border-[rgba(245,166,35,0.18)]">
                        <h2 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                          {service.title}
                        </h2>
                        <p className="mt-4 text-base leading-7 text-white/62">{service.positioning}</p>
                        <p className="mt-3 text-sm leading-7 text-white/44">{service.businessValue}</p>

                        <div className="mt-auto pt-8 grid gap-5 md:grid-cols-2">
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#f5a623]">Deliverables</p>
                            <div className="mt-3 space-y-2">
                              {service.deliverables.map((item) => (
                                <p key={item} className="flex items-start gap-2 text-sm text-white/56">
                                  <span className="mt-[0.42rem] h-1 w-1 shrink-0 rounded-full bg-[#f5a623]/55" />
                                  {item}
                                </p>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#f5a623]">Technologies</p>
                            <div className="mt-3 flex flex-wrap gap-1.5">
                              {service.technologies.map((item) => (
                                <span
                                  key={item}
                                  className="rounded-full border border-white/[0.08] px-2.5 py-0.5 text-xs text-white/50"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </article>
                    </StaggerItem>
                  ))}
                </StaggerIn>
              </section>
            </AnimateIn>
          );
        })}
      </div>

      {/* ── CTA Band ── */}
      <AnimateIn>
        <section className="section-wrap pb-24">
          <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(245,166,35,0.15)] bg-[#0f1729] px-8 py-12 md:px-14 md:py-16">
            <p className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 select-none text-[clamp(4rem,12vw,10rem)] font-black uppercase leading-none tracking-tight text-white/[0.028]">
              BUILD
            </p>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f5a623]">Ready to build?</p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
              Tell Smart Hive Labs what you're building.
            </h2>
            <p className="mt-4 max-w-lg text-base leading-8 text-white/54">
              Share your build, budget direction, and timeline. We'll respond with a clear next step and a focused project conversation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 rounded-full bg-[#f5a623] px-6 py-3 text-sm font-bold text-black transition-opacity hover:opacity-85"
              >
                Get a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 px-6 py-3 text-sm text-white/70 transition-colors hover:border-white/24 hover:text-white"
              >
                General Enquiry
              </Link>
            </div>
          </div>
        </section>
      </AnimateIn>
    </div>
  );
}

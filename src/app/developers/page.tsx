import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimateIn, StaggerIn } from "@/components/home/animate-in";
import { StaggerItem } from "@/components/home/motion-card";
import { EmptyState } from "@/components/ui/empty-state";
import { studioPrinciples } from "@/data/siteContent";
import { createPageMetadata } from "@/lib/metadata";
import { getDeveloperTeam } from "@/lib/cms";

export const metadata: Metadata = createPageMetadata({
  title: "Developers",
  description:
    "Meet the developers and engineering disciplines behind Smart Hive Labs.",
  path: "/developers",
  image: "/developers.png",
  imageAlt: "Smart Hive Labs developers page",
});

export default async function DevelopersPage() {
  const developerProfiles = await getDeveloperTeam();

  return (
    <div className="min-h-screen bg-[#07111f]">

      {/* ── Page Hero ── */}
      <section className="section-wrap relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-20">
        <p className="pointer-events-none absolute right-0 top-0 select-none text-[clamp(4rem,13vw,12rem)] font-black uppercase leading-none tracking-[-0.04em] text-white/[0.032]">
          DEVELOPERS
        </p>
        <AnimateIn delay={0.05}>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f5a623]">Developers</p>
          <h1 className="mt-5 max-w-3xl text-[clamp(2.2rem,5vw,4.5rem)] font-semibold leading-[1.08] tracking-[-0.05em] text-white">
            The people and disciplines behind Smart Hive Labs.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/58">
            Meet the engineering focus areas, product thinking, and delivery principles that shape the company's software work.
          </p>
        </AnimateIn>
      </section>

      <div className="section-wrap">
        <div className="h-px bg-white/[0.06]" />
      </div>

      {/* ── Team Grid ── */}
      <section className="section-wrap py-20 md:py-24">
        <AnimateIn>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f5a623]">Team</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white md:text-3xl">
            The engineering team
          </h2>
        </AnimateIn>

        <div className="mt-10">
          {developerProfiles.length === 0 ? (
            <EmptyState
              title="No team members yet"
              message="The engineering team will be introduced here soon."
            />
          ) : (
            <StaggerIn className="grid gap-5 lg:grid-cols-3" stagger={0.1}>
              {developerProfiles.map((developer) => (
                <StaggerItem key={developer.name} hoverY={-5}>
                  <article className="group overflow-hidden rounded-[2rem] border border-white/[0.07] bg-[#0b1423] transition-colors hover:border-[rgba(245,166,35,0.18)]">
                    <div className="relative h-72 overflow-hidden">
                      <Image
                        src={developer.image}
                        alt={developer.name}
                        fill
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1423] via-[#0b1423]/20 to-transparent" />
                    </div>
                    <div className="p-7">
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#f5a623]">
                        {developer.role}
                      </p>
                      <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
                        {developer.name}
                      </h2>
                      <p className="mt-2 text-sm text-white/44">{developer.discipline}</p>
                      <p className="mt-5 text-sm leading-7 text-white/58">{developer.bio}</p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {developer.specialties.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/[0.08] px-3 py-1 text-xs text-white/50"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </StaggerIn>
          )}
        </div>
      </section>

      <div className="section-wrap">
        <div className="h-px bg-white/[0.06]" />
      </div>

      {/* ── Working Principles ── */}
      <section className="section-wrap py-20 md:py-24">
        <AnimateIn>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f5a623]">How We Work</p>
          <h2 className="mt-3 max-w-2xl text-2xl font-semibold tracking-[-0.04em] text-white md:text-3xl">
            A working model built on clarity, ownership, and delivery.
          </h2>
          <p className="mt-4 max-w-lg text-base leading-8 text-white/56">
            These principles guide how Smart Hive Labs scopes work, builds products, and supports clients.
          </p>
        </AnimateIn>

        <StaggerIn className="mt-10 grid gap-4 md:grid-cols-2" stagger={0.07}>
          {studioPrinciples.map((principle, i) => (
            <StaggerItem key={principle}>
              <div className="flex gap-4 rounded-[1.4rem] border border-white/[0.07] bg-[#0b1423] px-6 py-5">
                <span className="mt-0.5 shrink-0 text-xs font-bold tabular-nums text-[#f5a623]/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-7 text-white/62">{principle}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerIn>
      </section>

      {/* ── CTA Band ── */}
      <AnimateIn>
        <section className="section-wrap pb-24">
          <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(245,166,35,0.15)] bg-[#0f1729] px-8 py-12 md:px-14 md:py-16">
            <p className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 select-none text-[clamp(4rem,12vw,10rem)] font-black uppercase leading-none tracking-tight text-white/[0.028]">
              JOIN
            </p>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f5a623]">Join the team</p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
              Interested in working with Smart Hive Labs?
            </h2>
            <p className="mt-4 max-w-lg text-base leading-8 text-white/54">
              We hire engineers who think commercially and build with care. View open roles or submit a general application.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 rounded-full bg-[#f5a623] px-6 py-3 text-sm font-bold text-black transition-opacity hover:opacity-85"
              >
                View Careers <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </AnimateIn>
    </div>
  );
}

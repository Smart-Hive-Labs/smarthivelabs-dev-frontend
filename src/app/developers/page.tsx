import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/studio/section-heading";
import { developerProfiles, studioPrinciples } from "@/data/siteContent";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Developers",
  description:
    "Meet the developers and engineering disciplines behind Smart Hive Labs.",
  path: "/developers",
  image: "/developers.png",
  imageAlt: "Smart Hive Labs developers page",
});

export default function DevelopersPage() {
  return (
    <div className="section-wrap py-20 md:py-24">
      <SectionHeading
        eyebrow="Developers"
        title="The people and disciplines behind Smart Hive Labs."
        description="Meet the engineering focus areas, product thinking, and delivery principles that shape the company’s software work."
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {developerProfiles.map((developer) => (
          <article key={developer.name} className="surface-panel overflow-hidden rounded-[2rem]">
            <div className="relative h-72">
              <Image
                src={developer.image}
                alt={developer.name}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08101d] via-[#08101d]/20 to-transparent" />
            </div>
            <div className="p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/42">
                {developer.role}
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
                {developer.name}
              </h2>
              <p className="mt-2 text-sm text-white/46">{developer.discipline}</p>
              <p className="mt-5 text-sm leading-7 text-white/60">{developer.bio}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {developer.specialties.map((item) => (
                  <span key={item} className="rounded-full border border-white/8 px-3 py-1 text-xs text-white/58">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 surface-panel rounded-[2rem] p-8 md:p-10">
        <SectionHeading
          eyebrow="How We Work"
          title="A working model built on clarity, ownership, and delivery."
          description="These principles guide how Smart Hive Labs scopes work, builds products, and supports clients."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {studioPrinciples.map((principle) => (
            <div key={principle} className="rounded-[1.4rem] border border-white/8 bg-white/[0.03] px-5 py-5">
              <p className="text-sm leading-7 text-white/64">{principle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

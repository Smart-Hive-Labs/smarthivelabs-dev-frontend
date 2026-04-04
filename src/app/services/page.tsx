import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/studio/section-heading";
import { serviceOffers } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Software development, AI-enabled systems, web and mobile application delivery, and game development services from Smart Hive Labs.",
};

const serviceCategories = [
  "Product Engineering",
  "Applications",
  "AI Systems",
  "Game Development",
  "Support",
  "Advisory",
] as const;

export default function ServicesPage() {
  return (
    <div className="section-wrap py-20 md:py-24">
      <SectionHeading
        eyebrow="Services"
        title="Software and game development services structured around real delivery."
        description="The services page now focuses entirely on engineering-facing offers: product builds, applications, AI workflows, game development, support, and advisory."
      />

      <div className="mt-14 grid gap-12">
        {serviceCategories.map((category) => {
          const items = serviceOffers.filter((service) => service.category === category);

          return (
            <section key={category} className="grid gap-6">
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/42">
                    {category}
                  </p>
                </div>
              </div>
              <div className="grid gap-5 lg:grid-cols-2">
                {items.map((service) => (
                  <article key={service.title} className="surface-panel rounded-[1.8rem] p-7">
                    <h2 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-base leading-7 text-white/62">
                      {service.positioning}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-white/54">
                      {service.businessValue}
                    </p>

                    <div className="mt-8 grid gap-5 md:grid-cols-2">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/42">
                          Deliverables
                        </p>
                        <div className="mt-3 grid gap-2">
                          {service.deliverables.map((item) => (
                            <p key={item} className="text-sm text-white/62">
                              {item}
                            </p>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/42">
                          Technologies
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {service.technologies.map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-white/8 px-3 py-1 text-xs text-white/56"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <div className="mt-16 flex">
        <Button asChild className="rounded-full bg-white px-6 text-[#0b1020] hover:bg-white/90">
          <Link href="/quote">
            Discuss a build
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/metadata";
import { buildProcess, caseStudies, developerProfiles, serviceOffers } from "@/data/siteContent";
import { AnimateIn, StaggerIn } from "@/components/home/animate-in";
import { CountUp } from "@/components/home/count-up";
import { HiveHero } from "@/components/home/hive-hero";
import { VideoReel } from "@/components/home/video-reel";
import { FloatingCard, MotionButton, StaggerItem, TeamCard } from "@/components/home/motion-card";

export const metadata = createPageMetadata({
  title: "Smart Hive Labs | Software and Game Development",
  description:
    "Smart Hive Labs builds software products, web and mobile apps, AI-enabled systems, and game development projects for businesses and partners.",
  path: "/",
  image: "/homepage.png",
  imageAlt: "Smart Hive Labs homepage",
});

const marqueeItems = [
  "Software Products", "AI Systems", "Mobile Apps", "Game Development",
  "Web Applications", "Product Engineering", "Open Source", "SaaS Platforms",
];

const targetAudiences = [
  { num: "01", label: "Startups & Ventures", desc: "Early-stage teams needing product-grade execution without a full internal team." },
  { num: "02", label: "Growing Businesses", desc: "Companies scaling operations that need reliable software built around their workflows." },
  { num: "03", label: "Educational Institutions", desc: "Schools and edtech teams building platforms and AI-assisted learning tools." },
  { num: "04", label: "E-Commerce Brands", desc: "Stores needing marketplaces, fulfilment systems, and commerce-connected platforms." },
  { num: "05", label: "Agencies & Studios", desc: "Creative agencies that need a technical delivery partner for client builds." },
  { num: "06", label: "Corporate & Enterprise", desc: "Established businesses modernising internal systems and operational tooling." },
];

const proofStats = [
  { value: 9,   suffix: "+",  label: "Products Shipped",       detail: "Live across web and mobile" },
  { value: 4,   suffix: "+",  label: "Years Active",           detail: "Building since 2020" },
  { value: 7,   suffix: "",   label: "Service Areas",          detail: "Web · Mobile · AI · Games · More" },
  { value: 85,  suffix: "%+", label: "Delivery Consistency",   detail: "On-scope project completion" },
];

const featuredProjects = caseStudies.filter((p) => p.visibility === "Public").slice(0, 6);
const featuredServices = serviceOffers.slice(0, 4);

export default function HomePage() {
  return (
    <div className="overflow-x-hidden bg-[#07111f]">

      {/* ════════════════════════════════════════
          ACT 1 — THE HOOK
          Video as background atmosphere
      ════════════════════════════════════════ */}
      <section className="relative min-h-screen overflow-hidden flex flex-col">

        {/* ── Video — full-bleed background ── */}
        <video
          src="/motion-smarthivelabs.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />

        {/* Blend layers — only edges fade into site bg, center stays vivid */}
        {/* top: thin fade so header blends in */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#07111f] to-transparent" />
        {/* bottom: fade into next section */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#07111f] to-transparent" />
        {/* left edge only — thin */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#07111f]/70 to-transparent" />
        {/* right edge — thin */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#07111f]/50 to-transparent" />

        {/* subtle grid on top */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.018]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "64px 64px" }}
        />

        {/* hive — left side glow, sits above video */}
        <div className="pointer-events-none absolute left-[-12%] top-1/2 -translate-y-1/2 w-[50vw] max-w-[620px] aspect-square z-10 opacity-75">
          <HiveHero />
        </div>

        {/* amber right-side glow */}
        <div className="pointer-events-none absolute right-[-8%] top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#f5a623] opacity-[0.05] blur-[120px] z-10" />

        {/* ── Foreground content — anchored to bottom ── */}
        <div className="relative z-20 mt-auto">
          <div className="section-wrap pb-12 pt-0">

            <AnimateIn delay={0.4}>
              <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

                {/* left — description + buttons */}
                <div className="max-w-xl">
                  <p className="text-sm leading-6 text-white/55 md:text-base md:leading-7">
                    We build software products, AI systems, mobile apps, and games —
                    with product-grade execution from concept to launch.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <Button asChild size="lg" className="rounded-full px-7 text-sm font-semibold">
                      <Link href="/quote">Start a Project <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="rounded-full border-white/15 bg-white/[0.06] px-7 text-sm text-white backdrop-blur-md hover:bg-white/[0.12] hover:text-white">
                      <Link href="/work">View Our Work <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </div>
                </div>

                {/* right — stats */}
                <div className="flex shrink-0 gap-8">
                  {proofStats.slice(0, 3).map((s) => (
                    <div key={s.label} className="text-right sm:text-right">
                      <p className="text-2xl font-black tracking-[-0.04em] text-[#f5a623]">
                        <CountUp to={s.value} suffix={s.suffix} />
                      </p>
                      <p className="mt-0.5 text-xs text-white/35">{s.label}</p>
                    </div>
                  ))}
                </div>

              </div>
            </AnimateIn>
          </div>
        </div>

      </section>

      {/* ════════════════════════════════════════
          ACT 2 — THE IDENTITY
      ════════════════════════════════════════ */}
      <section className="border-t border-white/[0.06] bg-[#060e1c]">
        <div className="section-wrap py-24 md:py-32">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            <AnimateIn direction="left">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/[0.07] bg-[#0b1423]">
                <div className="flex items-center gap-2.5 border-b border-white/[0.07] px-5 py-4">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                  <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                  <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                  <div className="ml-3 flex-1 rounded-full bg-white/[0.05] px-4 py-1.5 text-[11px] text-white/25">smarthivelabs.dev</div>
                </div>
                <div className="relative h-full overflow-hidden">
                  <Image src="/hive.jpg" alt="Smart Hive Labs" fill className="object-cover opacity-40" />
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#060e1c] via-[#060e1c]/50 to-transparent p-6">
                    <p className="text-xs uppercase tracking-[0.24em] text-[#f5a623] mb-2">Smart Hive Labs</p>
                    <p className="text-xl font-bold text-white">Software & Game Development Studio</p>
                    <div className="mt-3 flex gap-2">
                      {["Next.js", "React Native", "Unity", "AI"].map((t) => (
                        <span key={t} className="rounded-full bg-white/[0.08] px-3 py-1 text-[11px] text-white/50">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute bottom-0 right-0 h-40 w-40 rounded-full bg-[#f5a623] opacity-[0.08] blur-[50px]" />
              </div>
            </AnimateIn>

            <AnimateIn direction="right" delay={0.15}>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#f5a623]">Who We Are</p>
              <p className="text-[clamp(1.5rem,3vw,2.6rem)] font-bold leading-[1.2] tracking-[-0.03em] text-white">
                Smart Hive Labs is a software and game development studio{" "}
                <span className="text-gradient-amber">helping businesses turn concepts into live products</span>
                {" "}that teams can actually operate.
              </p>
              <p className="mt-6 text-base leading-7 text-white/45">
                From early product thinking to production delivery — we build with precision, ship with purpose, and support growth beyond launch.
              </p>
              <Button asChild variant="ghost" className="mt-8 rounded-full px-0 text-[#f5a623] hover:bg-transparent hover:text-[#f7b84b]">
                <Link href="/services">What we offer <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </AnimateIn>
          </div>

          <AnimateIn delay={0.2} className="mt-14">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/[0.07] bg-[#0b1423] p-6">
                <p className="mb-4 text-xs uppercase tracking-[0.28em] text-white/30">Based in</p>
                <p className="text-2xl font-bold tracking-[-0.03em] text-white">Ghana, West Africa</p>
                <p className="mt-2 text-sm leading-6 text-white/45">Working with clients and partners globally, from early-stage to enterprise.</p>
              </div>
              <div className="rounded-2xl border border-white/[0.07] bg-[#0b1423] p-6">
                <p className="mb-4 text-xs uppercase tracking-[0.28em] text-white/30">Engagement Model</p>
                <div className="space-y-2.5">
                  {["Project-based builds", "Ongoing retainers", "Advisory engagements", "Partnership builds"].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <span className="h-1 w-1 shrink-0 rounded-full bg-[#f5a623]/60" />
                      <p className="text-sm text-white/60">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-white/[0.07] bg-[#0b1423] p-6">
                <p className="mb-4 text-xs uppercase tracking-[0.28em] text-white/30">What We Build</p>
                <div className="flex flex-wrap gap-2">
                  {["Web Apps", "Mobile Apps", "AI Systems", "Game Dev", "SaaS Platforms", "Internal Tools", "Open Source"].map((t) => (
                    <span key={t} className="rounded-full border border-[rgba(245,166,35,0.28)] bg-[rgba(245,166,35,0.08)] px-3 py-1 text-xs text-[#f5a623]">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ════════════════════════════════════════
          ACT 3 — THE CAPABILITY
          Ghost wordmark + white stats card + services
      ════════════════════════════════════════ */}
      <section className="relative overflow-hidden border-t border-white/[0.06]">
        {/* ghost wordmark */}
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-center pl-4 select-none overflow-hidden">
          {["SMART", "HIVE", "LABS"].map((word, i) => (
            <span key={word} className="block font-black leading-[0.88] text-[22vw] tracking-[-0.05em]" style={{ color: i === 1 ? "#f5a623" : "#ffffff", opacity: i === 1 ? 0.03 : 0.02 }}>
              {word}
            </span>
          ))}
        </div>

        <div className="section-wrap relative z-10 py-24 md:py-32">
          <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:items-start">
            <AnimateIn>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#f5a623]">precision-focused</p>
              <p className="max-w-lg text-base leading-7 text-white/45">
                Every build is shaped around business outcomes. We translate product goals into software that performs — not just code that compiles.
              </p>
            </AnimateIn>

            {/* white metrics card */}
            <AnimateIn direction="right" delay={0.1}>
              <div className="rounded-2xl bg-white p-6 shadow-2xl">
                <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.28em] text-black/35">Our Key Results</p>
                <div className="space-y-4">
                  {proofStats.map((s) => (
                    <div key={s.label} className="flex items-center justify-between border-b border-black/[0.07] pb-4 last:border-0 last:pb-0">
                      <div>
                        <p className="text-sm font-medium text-black/60">{s.label}</p>
                        <p className="text-[11px] text-black/35">{s.detail}</p>
                      </div>
                      <p className="text-2xl font-black tracking-[-0.04em] text-[#f5a623]">
                        <CountUp to={s.value} suffix={s.suffix} />
                      </p>
                    </div>
                  ))}
                </div>
                <Button asChild size="sm" className="mt-6 w-full rounded-full bg-[#07111f] text-white hover:bg-[#0f1729]">
                  <Link href="/quote">Get Started</Link>
                </Button>
              </div>
            </AnimateIn>
          </div>

          <AnimateIn delay={0.1} className="mt-20">
            <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-black leading-[0.95] tracking-[-0.05em] text-white">
              we are <span className="text-gradient-amber">next-gen</span>
              <br />software studio.
            </h2>
          </AnimateIn>

          <StaggerIn className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08} delay={0.1}>
            {featuredServices.map((s) => (
              <StaggerItem
                key={s.title}
                hoverY={-4}
                className="group flex cursor-default items-center justify-between rounded-2xl border border-white/[0.07] bg-white/[0.03] px-5 py-4 transition-colors hover:border-[rgba(245,166,35,0.3)] hover:bg-[rgba(245,166,35,0.04)]"
              >
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f5a623]/70 mb-1">{s.category}</p>
                  <p className="text-sm font-semibold text-white">{s.title}</p>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-white/20 transition-colors group-hover:text-[#f5a623]" />
              </StaggerItem>
            ))}
          </StaggerIn>

          <AnimateIn delay={0.2} className="mt-6">
            <Button asChild variant="ghost" className="rounded-full px-0 text-[#f5a623] hover:bg-transparent hover:text-[#f7b84b]">
              <Link href="/services">All services <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </AnimateIn>
        </div>
      </section>

      {/* ════════════════════════════════════════
          ACT 4 — THE SHOWREEL
      ════════════════════════════════════════ */}
      <section className="border-t border-white/[0.06] bg-[#060e1c]">
        <div className="section-wrap py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:items-center">
            <AnimateIn>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#f5a623]">In Motion</p>
              <h2 className="text-[clamp(2rem,5vw,4rem)] font-black leading-[0.95] tracking-[-0.04em] text-white">
                work that <span className="text-gradient-amber">moves.</span>
              </h2>
              <p className="mt-6 text-base leading-7 text-white/45">
                Our products are alive. They scroll, interact, respond, and perform. The best way to show what we build is to let it move.
              </p>
              <div className="mt-8 flex flex-col gap-3">
                {[
                  "Shipped products with real users",
                  "Responsive across every device",
                  "Motion-driven, story-led interfaces",
                  "AI-powered, performance-first systems",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#f5a623]" />
                    <p className="text-sm text-white/55">{item}</p>
                  </div>
                ))}
              </div>
            </AnimateIn>
            <AnimateIn direction="right" delay={0.15}>
              {/* Pass videoId="YOUR_YOUTUBE_ID" or videoSrc="/your-video.mp4" when ready */}
              <VideoReel
                title="Smart Hive Labs — Studio Showreel"
                subtitle="Products, systems, and digital experiences in motion."
              />
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          ACT 5 — THE PROOF
          Animated stats + 01-06 audience grid
      ════════════════════════════════════════ */}
      <section className="relative overflow-hidden border-t border-white/[0.06]">
        <div className="pointer-events-none absolute right-[-4%] bottom-[-4%] select-none leading-none">
          <span className="text-[28vw] font-black text-[#f5a623] opacity-[0.025]">SHL</span>
        </div>

        <div className="section-wrap relative z-10 py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center mb-24">
            <AnimateIn>
              <h2 className="text-[clamp(2.5rem,5.5vw,5rem)] font-black leading-[0.95] tracking-[-0.05em] text-white">
                data that proves<br />
                <span className="text-gradient-amber">our impact.</span>
              </h2>
            </AnimateIn>

            <StaggerIn className="grid gap-3" stagger={0.1}>
              {[
                { value: 9,   suffix: "+",  label: "Products Shipped",        detail: "Live across web and mobile platforms" },
                { value: 85,  suffix: "%+", label: "Delivery Consistency",    detail: "Projects completed on defined scope" },
                { value: 100, suffix: "%",  label: "Product-Grade Execution", detail: "Every engagement, every time" },
              ].map((s) => (
                <StaggerItem
                  key={s.label}
                  className="flex items-center justify-between rounded-2xl border border-[rgba(245,166,35,0.18)] bg-[rgba(245,166,35,0.05)] px-6 py-4"
                >
                  <div>
                    <p className="text-sm font-semibold text-white/80">{s.label}</p>
                    <p className="text-xs text-white/30 mt-0.5">{s.detail}</p>
                  </div>
                  <p className="text-4xl font-black tracking-[-0.05em] text-[#f5a623]">
                    <CountUp to={s.value} suffix={s.suffix} duration={2000} />
                  </p>
                </StaggerItem>
              ))}
            </StaggerIn>
          </div>

          <AnimateIn className="mb-10">
            <div className="flex flex-wrap items-end gap-4">
              <h2 className="text-[clamp(1.8rem,4vw,3.5rem)] font-black leading-[1.05] tracking-[-0.04em] text-white">
                who our <span className="text-gradient-amber">services</span>
              </h2>
              <h2 className="text-[clamp(1.8rem,4vw,3.5rem)] font-black leading-[1.05] tracking-[-0.04em] text-white/35">
                / are the perfect solution for
              </h2>
            </div>
          </AnimateIn>

          <StaggerIn className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
            {targetAudiences.map((a) => (
              <StaggerItem
                key={a.num}
                hoverY={-5}
                className="group rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 cursor-default transition-colors hover:border-[rgba(245,166,35,0.3)]"
              >
                <p className="text-5xl font-black tracking-[-0.06em] text-[#f5a623] opacity-25 transition-opacity duration-300 group-hover:opacity-90">
                  {a.num}
                </p>
                <p className="mt-4 text-base font-semibold text-white">{a.label}</p>
                <p className="mt-2 text-sm leading-6 text-white/40">{a.desc}</p>
              </StaggerItem>
            ))}
          </StaggerIn>
        </div>
      </section>

      {/* ════════════════════════════════════════
          ACT 6 — THE WORK
          Floating tilted cards + full project grid
      ════════════════════════════════════════ */}
      <section className="relative overflow-hidden border-t border-white/[0.06] bg-[#060e1c]">
        <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#f5a623] opacity-[0.04] blur-[130px]" />

        <div className="section-wrap relative z-10 py-24 md:py-32">

          {/* floating preview strip */}
          <div className="mb-16 flex items-end gap-4 overflow-hidden h-56">
            {featuredProjects.slice(0, 3).map((p, i) => (
              <FloatingCard
                key={p.slug}
                delay={i * 0.12}
                rotate={i === 0 ? -3 : i === 2 ? 3 : 0}
                className="shrink-0 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0b1423]"
                style={{ width: i === 1 ? "260px" : "200px", transformOrigin: "bottom center" }}
              >
                <div className="border-b border-white/[0.06] bg-[#0f1729] px-4 py-2.5">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f5a623]">{p.type}</span>
                </div>
                <div className="p-4">
                  <p className="text-sm font-bold text-white">{p.title}</p>
                  <p className="mt-1.5 text-xs leading-5 text-white/40 line-clamp-2">{p.summary}</p>
                  <div className="mt-3 flex gap-1.5">
                    {p.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="rounded-full bg-white/[0.06] px-2 py-0.5 text-[10px] text-white/35">{tag}</span>
                    ))}
                  </div>
                </div>
              </FloatingCard>
            ))}
          </div>

          <AnimateIn className="mb-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#f5a623]">Selected Work</p>
            <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-black leading-[0.95] tracking-[-0.05em] text-white">
              our work <span className="text-gradient-amber">speaks</span> for us.
            </h2>
          </AnimateIn>

          <StaggerIn className="grid gap-4 md:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
            {featuredProjects.map((p) => (
              <StaggerItem
                key={p.slug}
                hoverY={-6}
                className="group rounded-[1.75rem] border border-white/[0.07] bg-[#0b1423] p-7 cursor-default transition-colors hover:border-[rgba(245,166,35,0.3)]"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="rounded-full border border-[rgba(245,166,35,0.28)] bg-[rgba(245,166,35,0.08)] px-3 py-1 text-[11px] text-[#f5a623]">{p.type}</span>
                  <span className="rounded-full px-3 py-1 text-[11px]" style={{
                    background: p.status === "Live" ? "rgba(52,211,153,0.1)" : p.status === "Active Build" ? "rgba(245,166,35,0.1)" : "rgba(255,255,255,0.05)",
                    color: p.status === "Live" ? "#34d399" : p.status === "Active Build" ? "#f5a623" : "rgba(255,255,255,0.4)",
                  }}>{p.status}</span>
                </div>
                <h3 className="text-xl font-bold tracking-[-0.03em] text-white">{p.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/50">{p.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="rounded-full bg-white/[0.05] px-3 py-1 text-[11px] text-white/35">{tag}</span>
                  ))}
                </div>
                {p.links && p.links.length > 0 && (
                  <div className="mt-5 border-t border-white/[0.06] pt-4">
                    {p.links.map((link) => (
                      <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-[#f5a623] hover:text-[#f7b84b]">
                        {link.label} <ExternalLink className="h-3 w-3" />
                      </a>
                    ))}
                  </div>
                )}
              </StaggerItem>
            ))}
          </StaggerIn>

          <AnimateIn className="mt-10 flex items-center justify-between">
            <Button asChild variant="ghost" className="rounded-full px-0 text-[#f5a623] hover:bg-transparent hover:text-[#f7b84b]">
              <Link href="/work">Explore all work <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <div className="flex gap-2">
              {[...Array(3)].map((_, i) => (
                <span key={i} className={`h-1.5 rounded-full ${i === 0 ? "w-6 bg-[#f5a623]" : "w-1.5 bg-white/20"}`} />
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ════════════════════════════════════════
          ACT 7 — PROCESS
      ════════════════════════════════════════ */}
      <section className="border-t border-white/[0.06]">
        <div className="section-wrap py-24 md:py-32">
          <AnimateIn>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#f5a623]">How We Work</p>
            <h2 className="mb-14 max-w-2xl text-[clamp(2rem,5vw,4rem)] font-black leading-[0.95] tracking-[-0.04em] text-white">
              a tighter path from <span className="text-gradient-amber">enquiry to build.</span>
            </h2>
          </AnimateIn>
          <StaggerIn className="grid gap-4 md:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
            {buildProcess.map((phase) => (
              <StaggerItem key={phase.step} hoverY={-6} className="rounded-2xl border border-white/[0.07] bg-[#0b1423] p-6">
                <p className="text-5xl font-black tracking-[-0.06em] text-[#f5a623]">{phase.step}</p>
                <h3 className="mt-5 text-lg font-bold text-white">{phase.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/45">{phase.description}</p>
              </StaggerItem>
            ))}
          </StaggerIn>
        </div>
      </section>

      {/* ════════════════════════════════════════
          ACT 8 — THE PEOPLE
          Real photos. Horizontal scroll.
      ════════════════════════════════════════ */}
      <section className="relative overflow-hidden border-t border-white/[0.06] bg-[#060e1c]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[500px] w-[900px] rounded-full bg-[#f5a623] opacity-[0.04] blur-[140px]" />
        </div>

        <div className="section-wrap relative z-10 py-24 md:py-32">
          <AnimateIn>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#f5a623]">The People</p>
            <h2 className="mb-14 text-[clamp(2.5rem,6vw,5.5rem)] font-black leading-[0.95] tracking-[-0.05em] text-white">
              your <span className="text-gradient-amber">success.</span>
            </h2>
          </AnimateIn>

          <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-none">
            {developerProfiles.map((dev, i) => {
              const imgSrc = i === 0 ? "/mins.jpg" : i === 1 ? "/team.jpg" : "/office-environment.webp";
              return (
                <TeamCard key={dev.name} delay={i * 0.12} className="shrink-0 w-64 overflow-hidden rounded-[1.5rem] border border-white/[0.07] bg-[#0b1423]">
                  <div className="relative h-52 overflow-hidden">
                    <Image src={imgSrc} alt={dev.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1423] via-transparent to-transparent" />
                  </div>
                  <div className="p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f5a623] mb-2">{dev.role}</p>
                    <p className="text-sm font-bold text-white">{dev.name}</p>
                    <p className="mt-2 text-xs leading-5 text-white/40 line-clamp-3">{dev.bio}</p>
                  </div>
                </TeamCard>
              );
            })}
          </div>

          <div className="mt-6 flex gap-2">
            {developerProfiles.map((_, i) => (
              <span key={i} className={`h-1.5 rounded-full transition-all ${i === 0 ? "w-6 bg-[#f5a623]" : "w-1.5 bg-white/20"}`} />
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-t border-white/[0.06] py-5">
        <div className="marquee-track flex gap-10 whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-10">
              {marqueeItems.map((item) => (
                <span key={item} className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/20">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-[#f5a623] opacity-70" />
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════════
          ACT 9 — THE CLOSE
          Giant "contact us" type texture.
      ════════════════════════════════════════ */}
      <section className="relative overflow-hidden border-t border-white/[0.06] bg-[#060e1c]">
        <div className="pointer-events-none absolute bottom-[-10%] left-1/2 -translate-x-1/2 h-[700px] w-[900px] rounded-full bg-[#f5a623] opacity-[0.07] blur-[150px]" />

        {/* overlapping type texture */}
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center select-none overflow-hidden">
          {["contact", "us", "contact", "us"].map((word, i) => (
            <span
              key={i}
              className="block font-black leading-[0.82] tracking-[-0.05em]"
              style={{
                fontSize: "clamp(5rem, 19vw, 19rem)",
                opacity: i % 2 === 0 ? 0.035 : 0.022,
                transform: i % 2 === 0 ? "skewX(-2deg)" : "skewX(2deg)",
                color: i === 1 || i === 3 ? "#f5a623" : "#ffffff",
              }}
            >
              {word}
            </span>
          ))}
        </div>

        <div className="section-wrap relative z-10 py-36 md:py-48 text-center">
          <AnimateIn>
            <div className="mb-6 inline-flex items-center gap-3">
              <span className="h-px w-8 bg-[#f5a623]/40" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f5a623]">Smart Hive Labs</p>
              <span className="h-px w-8 bg-[#f5a623]/40" />
            </div>

            <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-black leading-[0.95] tracking-[-0.05em] text-white">
              we&apos;ll be <span className="text-gradient-amber">happy</span>
              <br />to assist <span className="text-gradient-amber">you.</span>
            </h2>

            <p className="mx-auto mt-8 max-w-md text-base leading-7 text-white/45">
              If you&apos;re looking to elevate your digital presence with a software product that performs — we&apos;re ready to help.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <MotionButton>
                <Button asChild size="lg" className="rounded-full px-12 py-6 text-sm font-semibold">
                  <Link href="/quote">Start Now <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </MotionButton>
              <MotionButton>
                <Button asChild size="lg" variant="outline" className="rounded-full border-white/12 bg-white/[0.04] px-12 py-6 text-sm text-white hover:bg-white/[0.08] hover:text-white">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </MotionButton>
            </div>
          </AnimateIn>
        </div>
      </section>

    </div>
  );
}

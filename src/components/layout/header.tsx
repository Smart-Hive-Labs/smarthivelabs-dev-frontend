"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Briefcase,
  Code2,
  Github,
  Home,
  Layers,
  Mail,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* ─── nav config ─── */
const navLinks = [
  { href: "/",           label: "Home",        icon: Home },
  { href: "/services",   label: "Services",    icon: Layers },
  { href: "/work",       label: "Work",        icon: Briefcase },
  { href: "/developers", label: "Developers",  icon: Code2 },
  { href: "/careers",    label: "Careers",     icon: Users },
  { href: "/open-source",label: "Open Source", icon: Github },
  { href: "/contact",    label: "Contact",     icon: Mail },
];

const pillLinks  = navLinks.filter((l) => l.href !== "/").slice(0, 5);
const bottomTabs = navLinks.filter((l) =>
  ["/", "/services", "/work", "/careers", "/contact"].includes(l.href)
);

type NavState = "full" | "pill" | "sidebar";

const SPRING = { type: "spring" as const, damping: 26, stiffness: 280 };

export default function Header() {
  const pathname               = usePathname();
  const [state, setState]      = useState<NavState>("full");
  const [tooltip, setTooltip]  = useState<string | null>(null);
  const tooltipTimer           = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* ── scroll listener ── */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setState(y < 80 ? "full" : y < 320 ? "pill" : "sidebar");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const showTooltip = (label: string) => {
    if (tooltipTimer.current) clearTimeout(tooltipTimer.current);
    setTooltip(label);
  };
  const hideTooltip = () => {
    tooltipTimer.current = setTimeout(() => setTooltip(null), 120);
  };

  /* ────────────────────────────────────────────────
     Tooltip bubble (appears right of icon in sidebar)
  ──────────────────────────────────────────────── */
  const TooltipBubble = ({ label }: { label: string }) => (
    <AnimatePresence>
      {tooltip === label && (
        <motion.div
          key={label}
          initial={{ opacity: 0, x: -6, scale: 0.92 }}
          animate={{ opacity: 1, x: 0,  scale: 1 }}
          exit={{   opacity: 0, x: -6, scale: 0.92 }}
          transition={{ duration: 0.14 }}
          className="absolute left-[calc(100%+10px)] top-1/2 -translate-y-1/2 z-[200]
                     whitespace-nowrap rounded-full border border-white/10
                     bg-[#0f1729]/95 px-3 py-1.5 text-xs font-medium text-white
                     shadow-xl backdrop-blur-xl pointer-events-none"
        >
          {label}
          {/* arrow */}
          <span className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-[#0f1729]/95" />
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      {/* ══════════════════════════════════════════
          FULL HEADER — shown at top of page
      ══════════════════════════════════════════ */}
      <motion.header
        className="sticky top-0 z-40 border-b border-white/10 bg-[#0b1020]/85 backdrop-blur-xl"
        animate={{ opacity: state === "full" ? 1 : 0 }}
        transition={{ duration: 0.22 }}
        style={{ pointerEvents: state === "full" ? "auto" : "none" }}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" aria-label="Smart Hive Labs">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white p-1.5 shadow-lg">
              <Image src="/smarthivelogo_fav.png" alt="SHL" width={28} height={28} className="h-7 w-7 rounded-xl object-contain" priority />
            </div>
            <div className="hidden sm:block">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/55">Smart Hive Labs</p>
              <p className="text-sm text-white/85">Software, AI and Game Development</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-0.5 lg:flex">
            {navLinks.filter((l) => l.href !== "/").map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm text-white/55 transition-colors hover:text-white",
                  pathname === link.href && "bg-white/8 text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <Button asChild variant="ghost" className="rounded-full px-5 text-white/75 hover:bg-white/6 hover:text-white">
              <Link href="/contact">Enquire</Link>
            </Button>
            <Button asChild className="rounded-full border-0 hover:opacity-85" style={{ background: "var(--amber)", color: "var(--amber-foreground)" }}>
              <Link href="/quote">Get Quote <ArrowUpRight className="ml-1.5 h-4 w-4" /></Link>
            </Button>
          </div>

          {/* Mobile CTA */}
          <Button asChild size="sm" className="rounded-full border-0 lg:hidden" style={{ background: "var(--amber)", color: "var(--amber-foreground)" }}>
            <Link href="/quote">Quote <ArrowUpRight className="ml-1 h-3.5 w-3.5" /></Link>
          </Button>
        </div>
      </motion.header>

      {/* ══════════════════════════════════════════
          FLOATING PILL — condensed, top-center
          Visible only on md+ when state === "pill"
      ══════════════════════════════════════════ */}
      <AnimatePresence>
        {state === "pill" && (
          <motion.div
            key="pill"
            className="fixed top-3 z-50 hidden md:flex items-center gap-0.5 rounded-full
                       border border-white/10 bg-[#0b1020]/90 backdrop-blur-2xl
                       px-2 py-2 shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
            style={{ left: "50%", x: "-50%" }}
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24, transition: { duration: 0.18 } }}
            transition={SPRING}
          >
            {/* logo mark */}
            <Link href="/" className="mr-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] border border-white/15 bg-white p-1">
              <Image src="/smarthivelogo_fav.png" alt="" width={20} height={20} className="h-full w-full rounded-lg object-contain" />
            </Link>

            {/* nav links */}
            {pillLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3 py-1.5 text-xs font-medium text-white/50 transition-colors hover:bg-white/8 hover:text-white",
                  pathname === link.href && "bg-white/10 text-white"
                )}
              >
                {link.label}
              </Link>
            ))}

            <div className="mx-1.5 h-4 w-px bg-white/12" />

            {/* CTA pill */}
            <Link
              href="/quote"
              className="flex items-center gap-1 rounded-full bg-[#f5a623] px-3.5 py-1.5 text-xs font-bold text-black transition-opacity hover:opacity-85"
            >
              Quote <ArrowUpRight className="h-3 w-3" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ══════════════════════════════════════════
          FLOATING SIDEBAR — left side, icons only
          Visible only on md+ when state === "sidebar"
      ══════════════════════════════════════════ */}
      <AnimatePresence>
        {state === "sidebar" && (
          <motion.div
            key="sidebar"
            className="fixed left-3 top-1/2 z-50 hidden md:flex flex-col items-center gap-1
                       overflow-visible rounded-[22px] border border-white/10
                       bg-[#0b1020]/92 backdrop-blur-2xl py-3
                       shadow-[0_8px_48px_rgba(0,0,0,0.55)]"
            style={{ y: "-50%", width: 52 }}
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -70, transition: { duration: 0.2 } }}
            transition={SPRING}
          >
            {/* Logo icon */}
            <Link
              href="/"
              className="relative mb-1 flex h-8 w-8 shrink-0 items-center justify-center
                         rounded-xl border border-white/15 bg-white p-1
                         transition-transform hover:scale-105"
              onMouseEnter={() => showTooltip("Home")}
              onMouseLeave={hideTooltip}
            >
              <Image src="/smarthivelogo_fav.png" alt="" width={20} height={20} className="h-full w-full rounded-lg object-contain" />
              <TooltipBubble label="Home" />
            </Link>

            <div className="w-7 border-t border-white/[0.08]" />

            {/* Nav icons */}
            <div className="flex flex-col items-center gap-0.5 px-1.5">
              {navLinks.filter((l) => l.href !== "/").map((link) => {
                const Icon  = link.icon;
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative flex h-9 w-9 items-center justify-center rounded-2xl transition-colors",
                      active
                        ? "bg-[rgba(245,166,35,0.18)] text-[#f5a623]"
                        : "text-white/40 hover:bg-white/[0.07] hover:text-white"
                    )}
                    onMouseEnter={() => showTooltip(link.label)}
                    onMouseLeave={hideTooltip}
                  >
                    <Icon className="h-[17px] w-[17px]" />
                    {active && (
                      <span className="absolute left-0 top-1/2 h-4 w-[3px] -translate-y-1/2 rounded-r-full bg-[#f5a623]" />
                    )}
                    <TooltipBubble label={link.label} />
                  </Link>
                );
              })}
            </div>

            <div className="w-7 border-t border-white/[0.08]" />

            {/* Quote icon */}
            <Link
              href="/quote"
              className="relative flex h-9 w-9 items-center justify-center rounded-2xl
                         bg-[rgba(245,166,35,0.12)] text-[#f5a623]
                         transition-colors hover:bg-[rgba(245,166,35,0.25)]"
              onMouseEnter={() => showTooltip("Get a Quote")}
              onMouseLeave={hideTooltip}
            >
              <ArrowUpRight className="h-[17px] w-[17px]" />
              <TooltipBubble label="Get a Quote" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ══════════════════════════════════════════
          MOBILE BOTTOM TAB BAR
          Always shown on < md screens
      ══════════════════════════════════════════ */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden
                   border-t border-white/10 bg-[#0b1020]/95 backdrop-blur-xl"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="flex">
          {bottomTabs.map((tab) => {
            const Icon   = tab.icon;
            const active = pathname === tab.href;
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={cn(
                  "flex flex-1 flex-col items-center justify-center gap-1 py-3 transition-colors",
                  active ? "text-[#f5a623]" : "text-white/35"
                )}
              >
                <Icon className="h-5 w-5" />
                <span className="text-[10px] font-semibold tracking-[0.03em]">{tab.label}</span>
                {active && (
                  <span className="absolute top-0 h-[2px] w-8 rounded-full bg-[#f5a623]" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

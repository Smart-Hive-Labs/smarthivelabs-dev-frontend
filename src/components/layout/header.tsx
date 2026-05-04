"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/developers", label: "Developers" },
  { href: "/careers", label: "Careers" },
  { href: "/open-source", label: "Open Source" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[color:var(--surface)]/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Smart Hive Labs home">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white p-1.5 shadow-[0_18px_40px_rgba(7,10,18,0.35)]">
            <Image
              src="/smarthivelogo_fav.png"
              alt="Smart Hive Labs logo"
              width={28}
              height={28}
              className="h-7 w-7 rounded-xl object-contain"
              priority
            />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.16em] text-white/60">
              SMART HIVE LABS
            </p>
            <p className="text-sm text-white/90">Software, AI and Game Development</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm text-white/64 transition-colors hover:text-white",
                  active && "bg-white/8 text-white"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            asChild
            variant="ghost"
            className="rounded-full px-5 text-white/80 hover:bg-white/6 hover:text-white"
          >
            <Link href="/contact">Enquire</Link>
          </Button>
          <Button
            asChild
            className="rounded-full border-0 hover:opacity-85"
            style={{ background: "var(--amber)", color: "var(--amber-foreground)" }}
          >
            <Link href="/quote">
              Get Quote
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-white/10 bg-[color:var(--surface)] px-5 py-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {links.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-sm text-white/70 transition-colors hover:bg-white/6 hover:text-white",
                    active && "bg-white/8 text-white"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-2 grid gap-2">
              <Button asChild variant="ghost" className="justify-start rounded-2xl text-white hover:bg-white/6">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Enquire
                </Link>
              </Button>
              <Button
                asChild
                className="justify-start rounded-2xl border-0 hover:opacity-85"
                style={{ background: "var(--amber)", color: "var(--amber-foreground)" }}
              >
                <Link href="/quote" onClick={() => setIsOpen(false)}>
                  Get Quote
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

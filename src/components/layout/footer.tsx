import Image from "next/image";
import Link from "next/link";
import { Github, Mail, ArrowUpRight } from "lucide-react";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/developers", label: "Developers" },
  { href: "/careers", label: "Careers" },
  { href: "/open-source", label: "Open Source" },
  { href: "/quote", label: "Get Quote" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[color:var(--surface)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.3fr_1fr] md:px-8">
        <div className="max-w-xl space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white p-1.5">
              <Image
                src="/smarthivelogo_fav.png"
                alt="Smart Hive Labs logo"
                width={28}
                height={28}
                className="h-7 w-7 rounded-xl object-contain"
              />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/45">
              Smart Hive Labs
            </p>
          </div>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
            Software and game development for businesses that need a serious build partner.
          </h2>
          <p className="text-base leading-7 text-white/62">
            Product engineering, application delivery, AI-enabled systems, curated case studies, and open-source work from a developer-focused studio.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-white">Navigate</p>
            <div className="grid gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/62 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold text-white">Contact</p>
            <a
              href="mailto:support@smarthivelabs.dev"
              className="flex items-center gap-2 text-sm text-white/62 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4" />
              support@smarthivelabs.dev
            </a>
            <Link
              href="https://github.com/Smart-Hive-Labs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/62 transition-colors hover:text-white"
            >
              <Github className="h-4 w-4" />
              github.com/Smart-Hive-Labs
            </Link>
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 px-4 py-2 text-sm text-white transition-colors hover:bg-white/6"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-sm text-white/45 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© 2026 Smart Hive Labs. All rights reserved.</p>
          <p>Software delivery, product systems, public projects, and game development.</p>
        </div>
      </div>
    </footer>
  );
}

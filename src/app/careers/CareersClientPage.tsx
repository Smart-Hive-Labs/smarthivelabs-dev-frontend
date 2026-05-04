"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SectionHeading } from "@/components/studio/section-heading";
import {
  careerApplicationRoles,
  careerTracks,
  vacancies,
} from "@/data/siteContent";

export default function CareersClientPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    portfolio: "",
    role: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("Submitting application...");

    try {
      const payload = new URLSearchParams();
      payload.append("entry.796427824", formData.name);
      payload.append("entry.165884916", formData.email);
      payload.append("entry.1272083731", formData.portfolio);
      payload.append("entry.1129857883", formData.role);
      payload.append("entry.1113827624", formData.message);

      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSedblbE_xYnh__yxeHERfXDnk8ctwASzMFHqvawYj2IvJ6xyQ/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: payload,
        }
      );

      setStatus("Application received. Smart Hive Labs will review and follow up.");
      setFormData({
        name: "",
        email: "",
        portfolio: "",
        role: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("There was a problem submitting the application. Please try again.");
    }
  };

  return (
    <div className="section-wrap py-20 md:py-24">
      <SectionHeading
        eyebrow="Careers"
        title="Open roles, internships, placements, and future talent applications."
        description="Smart Hive Labs hires across active engineering roles while also keeping clear paths for internships, NSS placements, and strong general applications."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {careerTracks.map((track) => (
          <article key={track.title} className="surface-panel rounded-[1.75rem] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--amber)]">
              {track.audience}
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white">
              {track.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/60">{track.summary}</p>
            <div className="mt-6 grid gap-3">
              {track.highlights.map((item) => (
                <p
                  key={item}
                  className="rounded-[1.2rem] border border-white/8 bg-white/[0.03] px-4 py-4 text-sm text-white/62"
                >
                  {item}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 grid gap-5">
        {vacancies.map((role) => (
          <article
            key={role.title}
            className="surface-panel grid gap-6 rounded-[2rem] p-8 lg:grid-cols-[0.8fr_1.2fr_auto]"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--amber)]">
                {role.team}
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white">
                {role.title}
              </h2>
              <p className="mt-3 text-sm text-white/56">
                {role.level} · {role.location}
              </p>
              <p className="mt-5 text-sm leading-7 text-white/60">{role.summary}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/42">
                Requirements
              </p>
              <div className="mt-4 grid gap-3">
                {role.requirements.map((item) => (
                  <p
                    key={item}
                    className="rounded-[1.2rem] border border-white/8 bg-white/[0.03] px-4 py-4 text-sm text-white/62"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 lg:items-end">
              <span className={role.status === "Open"
                ? "rounded-full border border-[var(--border-amber)] bg-[var(--amber-muted)] px-3 py-1 text-xs text-[var(--amber)]"
                : "rounded-full border border-white/8 px-3 py-1 text-xs text-white/58"}>
                {role.status}
              </span>
              {role.status === "Open" && role.applyUrl ? (
                <Button asChild className="rounded-full px-5">
                  <Link href="#apply">
                    Apply
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              ) : role.status === "Closed" ? (
                <p className="max-w-[14rem] text-right text-sm text-white/52">
                  This role is currently unavailable. You can still submit a general application.
                </p>
              ) : (
                <p className="max-w-[12rem] text-right text-sm text-white/52">
                  Pipeline role. Submit a general application to join the future shortlist.
                </p>
              )}
            </div>
          </article>
        ))}
      </div>

      <div id="apply" className="mt-16 surface-panel rounded-[2rem] p-8 md:p-10">
        <SectionHeading
          eyebrow="Apply"
          title="Apply for a role, internship, placement, or future opportunity."
          description="Use one application form for current roles and broader career tracks."
        />

        <form onSubmit={handleSubmit} className="mt-10 grid gap-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="grid gap-3">
              <label htmlFor="name" className="text-sm text-white/68">
                Full name
              </label>
              <Input
                id="name"
                value={formData.name}
                onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                className="h-12 rounded-2xl border-white/10 bg-white/5 text-white placeholder:text-white/30"
                placeholder="Your name"
                required
              />
            </div>
            <div className="grid gap-3">
              <label htmlFor="email" className="text-sm text-white/68">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                className="h-12 rounded-2xl border-white/10 bg-white/5 text-white placeholder:text-white/30"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="grid gap-3">
              <label htmlFor="portfolio" className="text-sm text-white/68">
                Portfolio or GitHub
              </label>
              <Input
                id="portfolio"
                value={formData.portfolio}
                onChange={(event) => setFormData({ ...formData, portfolio: event.target.value })}
                className="h-12 rounded-2xl border-white/10 bg-white/5 text-white placeholder:text-white/30"
                placeholder="https://github.com/yourname"
              />
            </div>
            <div className="grid gap-3">
              <label className="text-sm text-white/68">Application type</label>
              <Select
                value={formData.role}
                onValueChange={(value) => setFormData({ ...formData, role: value })}
              >
                <SelectTrigger className="h-12 rounded-2xl border-white/10 bg-white/5 text-white">
                  <SelectValue placeholder="Select role or track" />
                </SelectTrigger>
                <SelectContent>
                  {careerApplicationRoles.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-3">
            <label htmlFor="message" className="text-sm text-white/68">
              Tell us about your background
            </label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(event) => setFormData({ ...formData, message: event.target.value })}
              className="min-h-40 rounded-[1.5rem] border-white/10 bg-white/5 text-white placeholder:text-white/30"
              placeholder="Share your experience, interests, and what type of work you want to do."
              required
            />
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {status ? <p className="text-sm text-white/60">{status}</p> : <div />}
            <Button className="rounded-full px-6">
              Submit Application
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

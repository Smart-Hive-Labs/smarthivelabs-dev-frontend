"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Send, Briefcase, GraduationCap } from "lucide-react";
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
import { EmptyState } from "@/components/ui/empty-state";
import {
  careerApplicationRoles,
  type CareerTrack,
  type Vacancy,
} from "@/data/siteContent";

interface CareersClientPageProps {
  careerTracks: CareerTrack[];
  vacancies: Vacancy[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function CareersClientPage({ careerTracks, vacancies }: CareersClientPageProps) {
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
      setFormData({ name: "", email: "", portfolio: "", role: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("There was a problem submitting the application. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#07111f]">

      {/* ── Page Hero ── */}
      <section className="section-wrap relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-20">
        <p className="pointer-events-none absolute right-0 top-0 select-none text-[clamp(4.5rem,14vw,13rem)] font-black uppercase leading-none tracking-[-0.04em] text-white/[0.032]">
          CAREERS
        </p>
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.p variants={fadeUp} custom={0.05} className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f5a623]">
            Careers
          </motion.p>
          <motion.h1
            variants={fadeUp}
            custom={0.12}
            className="mt-5 max-w-3xl text-[clamp(2.2rem,5vw,4.5rem)] font-semibold leading-[1.08] tracking-[-0.05em] text-white"
          >
            Open roles, internships, placements, and future talent applications.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            custom={0.2}
            className="mt-5 max-w-xl text-base leading-8 text-white/58"
          >
            Smart Hive Labs hires across active engineering roles while keeping clear paths for internships, NSS placements, and strong general applications.
          </motion.p>
        </motion.div>
      </section>

      <div className="section-wrap">
        <div className="h-px bg-white/[0.06]" />
      </div>

      {/* ── Career Tracks ── */}
      <section className="section-wrap py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f5a623]">Career Tracks</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white md:text-3xl">
            Paths into Smart Hive Labs
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {careerTracks.length === 0 ? (
            <EmptyState title="No tracks yet" message="Career paths will be listed here soon." />
          ) : careerTracks.map((track, i) => (
            <motion.article
              key={track.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="flex flex-col rounded-[1.75rem] border border-white/[0.07] bg-[#0b1423] p-6 transition-colors hover:border-[rgba(245,166,35,0.18)]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-[rgba(245,166,35,0.1)]">
                {track.audience === "Internship" || track.audience === "Placement" ? (
                  <GraduationCap className="h-5 w-5 text-[#f5a623]" />
                ) : (
                  <Briefcase className="h-5 w-5 text-[#f5a623]" />
                )}
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#f5a623]">
                {track.audience}
              </p>
              <h2 className="mt-4 text-xl font-semibold tracking-[-0.04em] text-white">
                {track.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-white/58">{track.summary}</p>
              <div className="mt-auto pt-6 space-y-2">
                {track.highlights.map((item) => (
                  <p
                    key={item}
                    className="flex items-start gap-2 rounded-[1rem] border border-white/[0.07] bg-white/[0.025] px-4 py-3 text-xs text-white/58"
                  >
                    <span className="mt-[0.32rem] h-1 w-1 shrink-0 rounded-full bg-[#f5a623]/55" />
                    {item}
                  </p>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <div className="section-wrap">
        <div className="h-px bg-white/[0.06]" />
      </div>

      {/* ── Open Vacancies ── */}
      <section className="section-wrap py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f5a623]">Open Roles</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white md:text-3xl">
            Current vacancies
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-5">
          {vacancies.length === 0 ? (
            <EmptyState
              title="No open roles"
              message="Check back soon or submit a general application below."
            />
          ) : vacancies.map((role, i) => (
            <motion.article
              key={role.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-6 rounded-[2rem] border border-white/[0.07] bg-[#0b1423] p-8 transition-colors hover:border-[rgba(245,166,35,0.14)] lg:grid-cols-[0.8fr_1.2fr_auto]"
            >
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#f5a623]">
                  {role.team}
                </p>
                <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white">
                  {role.title}
                </h2>
                <p className="mt-3 text-sm text-white/48">
                  {role.level} · {role.location}
                </p>
                <p className="mt-5 text-sm leading-7 text-white/58">{role.summary}</p>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/36">
                  Requirements
                </p>
                <div className="mt-4 space-y-2">
                  {role.requirements.map((item) => (
                    <p
                      key={item}
                      className="flex items-start gap-2 rounded-[1.2rem] border border-white/[0.07] bg-white/[0.025] px-4 py-3 text-sm text-white/58"
                    >
                      <span className="mt-[0.4rem] h-1 w-1 shrink-0 rounded-full bg-white/30" />
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4 lg:items-end">
                <span
                  className={
                    role.status === "Open"
                      ? "rounded-full border border-[rgba(245,166,35,0.28)] bg-[rgba(245,166,35,0.1)] px-3 py-1 text-xs text-[#f5a623]"
                      : "rounded-full border border-white/[0.08] px-3 py-1 text-xs text-white/50"
                  }
                >
                  {role.status}
                </span>
                {role.status === "Open" && role.applyUrl ? (
                  <Link
                    href="#apply"
                    className="inline-flex items-center gap-2 rounded-full bg-[#f5a623] px-5 py-2.5 text-sm font-bold text-black transition-opacity hover:opacity-85"
                  >
                    Apply <ArrowRight className="h-4 w-4" />
                  </Link>
                ) : role.status === "Closed" ? (
                  <p className="max-w-[14rem] text-right text-sm text-white/44">
                    This role is currently unavailable. Submit a general application below.
                  </p>
                ) : (
                  <p className="max-w-[12rem] text-right text-sm text-white/44">
                    Pipeline role. Submit a general application to join the future shortlist.
                  </p>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <div className="section-wrap">
        <div className="h-px bg-white/[0.06]" />
      </div>

      {/* ── Application Form ── */}
      <section id="apply" className="section-wrap py-20 pb-24 md:py-24 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f5a623]">Apply</p>
          <h2 className="mt-3 max-w-2xl text-2xl font-semibold tracking-[-0.04em] text-white md:text-3xl">
            Apply for a role, internship, placement, or future opportunity.
          </h2>
          <p className="mt-4 max-w-lg text-base leading-8 text-white/56">
            Use one application form for current roles and broader career tracks.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[2rem] border border-white/[0.07] bg-[#0b1423] p-8 md:p-10"
        >
          <div className="grid gap-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="grid gap-3">
                <label htmlFor="name" className="text-sm text-white/62">Full name</label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12 rounded-2xl border-white/10 bg-white/[0.04] text-white placeholder:text-white/28"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="grid gap-3">
                <label htmlFor="email" className="text-sm text-white/62">Email</label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12 rounded-2xl border-white/10 bg-white/[0.04] text-white placeholder:text-white/28"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="grid gap-3">
                <label htmlFor="portfolio" className="text-sm text-white/62">Portfolio or GitHub</label>
                <Input
                  id="portfolio"
                  value={formData.portfolio}
                  onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                  className="h-12 rounded-2xl border-white/10 bg-white/[0.04] text-white placeholder:text-white/28"
                  placeholder="https://github.com/yourname"
                />
              </div>
              <div className="grid gap-3">
                <label className="text-sm text-white/62">Application type</label>
                <Select
                  value={formData.role}
                  onValueChange={(value) => setFormData({ ...formData, role: value })}
                >
                  <SelectTrigger className="h-12 rounded-2xl border-white/10 bg-white/[0.04] text-white">
                    <SelectValue placeholder="Select role or track" />
                  </SelectTrigger>
                  <SelectContent>
                    {careerApplicationRoles.map((item) => (
                      <SelectItem key={item} value={item}>{item}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-3">
              <label htmlFor="message" className="text-sm text-white/62">Tell us about your background</label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="min-h-40 rounded-[1.5rem] border-white/10 bg-white/[0.04] text-white placeholder:text-white/28"
                placeholder="Share your experience, interests, and what type of work you want to do."
                required
              />
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              {status ? (
                <p className="text-sm text-white/58">{status}</p>
              ) : (
                <div />
              )}
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-[#f5a623] px-6 py-3 text-sm font-bold text-black transition-opacity hover:opacity-85"
              >
                Submit Application
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.form>
      </section>
    </div>
  );
}

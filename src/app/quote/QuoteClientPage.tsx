"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const projectTypes = [
  "Web Application",
  "Mobile Application",
  "Backend Platform",
  "AI-Enabled Product",
  "Game Development",
  "Product Advisory",
];

const timelines = ["Immediate", "2-4 Weeks", "1-3 Months", "3+ Months"];
const budgets = ["Under $2k", "$2k - $10k", "$10k - $25k", "$25k+"];

const valueProps = [
  "Custom software and product engineering",
  "Web, mobile, AI-enabled systems, and game development",
  "Business-first scoping instead of generic enquiry intake",
];

export default function QuoteClientPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    timeline: "",
    budget: "",
    projectDetails: "",
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("Sending quote request...");

    try {
      const payload = new URLSearchParams();
      payload.append("entry.2037285691", formData.name);
      payload.append("entry.1492959357", formData.email);
      payload.append("entry.1356979553", formData.company);
      payload.append("entry.1614785805", formData.service);
      payload.append(
        "entry.2139609860",
        `Timeline: ${formData.timeline}\nBudget: ${formData.budget}\n\n${formData.projectDetails}`
      );
      payload.append("entry.754821484", formData.budget);

      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSdEgbgVi4Fhpg4Fd82_DLG8V-cbVo9mhvwDzUJYnzpxWnmE8Q/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: payload,
        }
      );

      setStatus("Quote request sent. Smart Hive Labs will respond with the next step.");
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        timeline: "",
        budget: "",
        projectDetails: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("There was a problem sending the quote request. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#07111f]">

      {/* ── Page Hero ── */}
      <section className="section-wrap relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-20">
        <p className="pointer-events-none absolute right-0 top-0 select-none text-[clamp(5rem,18vw,16rem)] font-black uppercase leading-none tracking-[-0.04em] text-white/[0.032]">
          QUOTE
        </p>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f5a623]">Quote</p>
          <h1 className="mt-5 max-w-3xl text-[clamp(2.2rem,5vw,4.5rem)] font-semibold leading-[1.08] tracking-[-0.05em] text-white">
            A dedicated build request flow for businesses.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/58">
            Share the type of build, budget direction, timeline, and technical context so Smart Hive Labs can respond with a useful next step.
          </p>
        </motion.div>
      </section>

      <div className="section-wrap">
        <div className="h-px bg-white/[0.06]" />
      </div>

      {/* ── Quote Layout ── */}
      <section className="section-wrap py-20 pb-24 md:py-24 md:pb-28">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">

          {/* Left: value props */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            <div className="rounded-[2rem] border border-white/[0.07] bg-[#0b1423] p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f5a623]">What we build</p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
                Product engineering for companies that ship.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/58">
                Smart Hive Labs scopes every project with commercial clarity — no boilerplate intake, no generic estimates.
              </p>

              <div className="mt-10 space-y-3">
                {valueProps.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-[1.4rem] border border-[rgba(245,166,35,0.18)] bg-[rgba(245,166,35,0.07)] px-5 py-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#f5a623]" />
                    <p className="text-sm text-white/78">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics strip */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Avg. response", value: "< 48h" },
                { label: "Engagement types", value: "4 models" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-[1.5rem] border border-white/[0.07] bg-[#0b1423] p-5">
                  <p className="text-2xl font-bold tracking-[-0.04em] text-white">{stat.value}</p>
                  <p className="mt-1.5 text-xs text-white/42 uppercase tracking-[0.18em]">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[2rem] border border-white/[0.07] bg-[#0b1423] p-8 md:p-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f5a623]">Project details</p>
            <div className="mt-8 grid gap-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="grid gap-3">
                  <label htmlFor="name" className="text-sm text-white/62">Contact name</label>
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
                  <label htmlFor="email" className="text-sm text-white/62">Work email</label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12 rounded-2xl border-white/10 bg-white/[0.04] text-white placeholder:text-white/28"
                    placeholder="you@company.com"
                    required
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="grid gap-3">
                  <label htmlFor="company" className="text-sm text-white/62">Company</label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="h-12 rounded-2xl border-white/10 bg-white/[0.04] text-white placeholder:text-white/28"
                    placeholder="Company or organization"
                  />
                </div>
                <div className="grid gap-3">
                  <label className="text-sm text-white/62">Project type</label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                  >
                    <SelectTrigger className="h-12 rounded-2xl border-white/10 bg-white/[0.04] text-white">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      {projectTypes.map((item) => (
                        <SelectItem key={item} value={item}>{item}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="grid gap-3">
                  <label className="text-sm text-white/62">Timeline</label>
                  <Select
                    value={formData.timeline}
                    onValueChange={(value) => setFormData({ ...formData, timeline: value })}
                  >
                    <SelectTrigger className="h-12 rounded-2xl border-white/10 bg-white/[0.04] text-white">
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      {timelines.map((item) => (
                        <SelectItem key={item} value={item}>{item}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-3">
                  <label className="text-sm text-white/62">Budget</label>
                  <Select
                    value={formData.budget}
                    onValueChange={(value) => setFormData({ ...formData, budget: value })}
                  >
                    <SelectTrigger className="h-12 rounded-2xl border-white/10 bg-white/[0.04] text-white">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      {budgets.map((item) => (
                        <SelectItem key={item} value={item}>{item}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-3">
                <label htmlFor="projectDetails" className="text-sm text-white/62">Goals, scope, and technical needs</label>
                <Textarea
                  id="projectDetails"
                  value={formData.projectDetails}
                  onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                  className="min-h-44 rounded-[1.5rem] border-white/10 bg-white/[0.04] text-white placeholder:text-white/28"
                  placeholder="Describe the product, the business problem, expected features, users, and any technical context."
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
                  Send Quote Request
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
}

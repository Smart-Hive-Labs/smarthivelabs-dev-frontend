"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
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
    <div className="section-wrap py-20 md:py-24">
      <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="surface-panel rounded-[2rem] p-8 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--amber)]">
            Quote
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
            A dedicated build request flow for businesses.
          </h1>
          <p className="mt-5 text-base leading-8 text-white/62">
            Share the type of build, budget direction, timeline, and technical context so Smart Hive Labs can respond with a useful next step and a clearer project conversation.
          </p>

          <div className="mt-10 grid gap-4">
            {[
              "Custom software and product engineering",
              "Web, mobile, AI-enabled systems, and game development",
              "Business-first scoping instead of generic enquiry intake",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-[1.4rem] border border-[var(--border-amber)] bg-[var(--amber-muted)] px-5 py-5 text-sm text-white/80">
                <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--amber)]" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="surface-panel rounded-[2rem] p-8 md:p-10">
          <div className="grid gap-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="grid gap-3">
                <label htmlFor="name" className="text-sm text-white/68">
                  Contact name
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
                  Work email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                  className="h-12 rounded-2xl border-white/10 bg-white/5 text-white placeholder:text-white/30"
                  placeholder="you@company.com"
                  required
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="grid gap-3">
                <label htmlFor="company" className="text-sm text-white/68">
                  Company
                </label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(event) => setFormData({ ...formData, company: event.target.value })}
                  className="h-12 rounded-2xl border-white/10 bg-white/5 text-white placeholder:text-white/30"
                  placeholder="Company or organization"
                />
              </div>
              <div className="grid gap-3">
                <label className="text-sm text-white/68">Project type</label>
                <Select
                  value={formData.service}
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                >
                  <SelectTrigger className="h-12 rounded-2xl border-white/10 bg-white/5 text-white">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    {projectTypes.map((item) => (
                      <SelectItem key={item} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="grid gap-3">
                <label className="text-sm text-white/68">Timeline</label>
                <Select
                  value={formData.timeline}
                  onValueChange={(value) => setFormData({ ...formData, timeline: value })}
                >
                  <SelectTrigger className="h-12 rounded-2xl border-white/10 bg-white/5 text-white">
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    {timelines.map((item) => (
                      <SelectItem key={item} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-3">
                <label className="text-sm text-white/68">Budget</label>
                <Select
                  value={formData.budget}
                  onValueChange={(value) => setFormData({ ...formData, budget: value })}
                >
                  <SelectTrigger className="h-12 rounded-2xl border-white/10 bg-white/5 text-white">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    {budgets.map((item) => (
                      <SelectItem key={item} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-3">
              <label htmlFor="projectDetails" className="text-sm text-white/68">
                Goals, scope, and technical needs
              </label>
              <Textarea
                id="projectDetails"
                value={formData.projectDetails}
                onChange={(event) =>
                  setFormData({ ...formData, projectDetails: event.target.value })
                }
                className="min-h-44 rounded-[1.5rem] border-white/10 bg-white/5 text-white placeholder:text-white/30"
                placeholder="Describe the product, the business problem, expected features, users, and any technical context."
                required
              />
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              {status ? <p className="text-sm text-white/60">{status}</p> : <div />}
              <Button className="rounded-full px-6">
                Send Quote Request
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

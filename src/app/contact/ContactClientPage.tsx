"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MessageSquare, ArrowUpRight, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactClientPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("Sending...");

    try {
      const payload = new URLSearchParams();
      payload.append("entry.492654800", formData.name);
      payload.append("entry.436969293", formData.email);
      payload.append("entry.138659123", formData.subject);
      payload.append("entry.6561659", formData.message);

      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSc0V8oI1MlYk036_AQaJ1ydpuaXVG4ar5NdMPlcsPMx_8IcNw/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: payload,
        }
      );

      setStatus("Message sent. Smart Hive Labs will follow up.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("There was a problem sending the message. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#07111f]">

      {/* ── Page Hero ── */}
      <section className="section-wrap relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-20">
        <p className="pointer-events-none absolute right-0 top-0 select-none text-[clamp(4.5rem,15vw,14rem)] font-black uppercase leading-none tracking-[-0.04em] text-white/[0.032]">
          CONTACT
        </p>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f5a623]">Contact</p>
          <h1 className="mt-5 max-w-3xl text-[clamp(2.2rem,5vw,4.5rem)] font-semibold leading-[1.08] tracking-[-0.05em] text-white">
            General enquiries, partnerships, and follow-ups.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/58">
            Use this page for conversations that are not yet a formal project quote — partnerships, technical questions, collaborations, and general business contact.
          </p>
        </motion.div>
      </section>

      <div className="section-wrap">
        <div className="h-px bg-white/[0.06]" />
      </div>

      {/* ── Contact Layout ── */}
      <section className="section-wrap py-20 pb-24 md:py-24 md:pb-28">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">

          {/* Left: info panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            <div className="rounded-[2rem] border border-white/[0.07] bg-[#0b1423] p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f5a623]">Reach out</p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
                Let's start a conversation.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/58">
                Partnerships, technical questions, collaborations, or general business contact — this is the right place.
              </p>

              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-3 rounded-[1.4rem] border border-white/[0.07] bg-white/[0.025] p-5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[rgba(245,166,35,0.12)]">
                    <Mail className="h-4 w-4 text-[#f5a623]" />
                  </div>
                  <p className="text-sm text-white">support@smarthivelabs.dev</p>
                </div>
                <div className="flex items-start gap-3 rounded-[1.4rem] border border-white/[0.07] bg-white/[0.025] p-5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[rgba(245,166,35,0.12)]">
                    <MessageSquare className="h-4 w-4 text-[#f5a623]" />
                  </div>
                  <p className="text-sm text-white/70">For build requests, use the dedicated quote page.</p>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 rounded-full border border-[rgba(245,166,35,0.28)] bg-[rgba(245,166,35,0.1)] px-5 py-2.5 text-sm font-medium text-[#f5a623] transition-colors hover:bg-[rgba(245,166,35,0.18)]"
                >
                  Go to Quote page <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
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
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f5a623]">Send a message</p>
            <div className="mt-8 grid gap-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="grid gap-3">
                  <label htmlFor="name" className="text-sm text-white/62">Name</label>
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
                    placeholder="you@company.com"
                    required
                  />
                </div>
              </div>

              <div className="grid gap-3">
                <label htmlFor="subject" className="text-sm text-white/62">Subject</label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="h-12 rounded-2xl border-white/10 bg-white/[0.04] text-white placeholder:text-white/28"
                  placeholder="Partnership, question, follow-up..."
                  required
                />
              </div>

              <div className="grid gap-3">
                <label htmlFor="message" className="text-sm text-white/62">Message</label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-40 rounded-[1.5rem] border-white/10 bg-white/[0.04] text-white placeholder:text-white/28"
                  placeholder="Share the context for your enquiry."
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
                  Send Message
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
}

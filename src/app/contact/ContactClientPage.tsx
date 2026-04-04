"use client";

import { useState, type FormEvent } from "react";
import { Mail, MessageSquare, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

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
    <div className="section-wrap py-20 md:py-24">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="surface-panel rounded-[2rem] p-8 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/42">
            Contact
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
            General enquiries, partnerships, and follow-ups.
          </h1>
          <p className="mt-5 text-base leading-8 text-white/62">
            Use this page for conversations that are not yet a formal project quote: partnerships, technical questions, collaborations, or general business contact.
          </p>

          <div className="mt-10 grid gap-4">
            <div className="rounded-[1.4rem] border border-white/8 bg-white/[0.03] p-5">
              <div className="flex items-center gap-3 text-white">
                <Mail className="h-4 w-4 text-white/54" />
                <p className="text-sm">support@smarthivelabs.dev</p>
              </div>
            </div>
            <div className="rounded-[1.4rem] border border-white/8 bg-white/[0.03] p-5">
              <div className="flex items-center gap-3 text-white">
                <MessageSquare className="h-4 w-4 text-white/54" />
                <p className="text-sm">For build requests, use the dedicated quote page.</p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="surface-panel rounded-[2rem] p-8 md:p-10">
          <div className="grid gap-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="grid gap-3">
                <label htmlFor="name" className="text-sm text-white/68">
                  Name
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
                  placeholder="you@company.com"
                  required
                />
              </div>
            </div>

            <div className="grid gap-3">
              <label htmlFor="subject" className="text-sm text-white/68">
                Subject
              </label>
              <Input
                id="subject"
                value={formData.subject}
                onChange={(event) => setFormData({ ...formData, subject: event.target.value })}
                className="h-12 rounded-2xl border-white/10 bg-white/5 text-white placeholder:text-white/30"
                placeholder="Partnership, question, follow-up..."
                required
              />
            </div>

            <div className="grid gap-3">
              <label htmlFor="message" className="text-sm text-white/68">
                Message
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                className="min-h-40 rounded-[1.5rem] border-white/10 bg-white/5 text-white placeholder:text-white/30"
                placeholder="Share the context for your enquiry."
                required
              />
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              {status ? <p className="text-sm text-white/60">{status}</p> : <div />}
              <Button className="rounded-full bg-white px-6 text-[#0b1020] hover:bg-white/90">
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

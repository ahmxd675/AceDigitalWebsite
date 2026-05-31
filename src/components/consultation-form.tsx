"use client";

import { useState } from "react";
import { CheckIcon } from "@/components/icons";

/*
  Consultation request form.

  For now this composes a pre-filled email to the company inbox (no backend
  required). To capture submissions server-side later, replace handleSubmit
  with a POST to a route handler or a form service (e.g. Resend, Formspree).
*/

const CONTACT_EMAIL = "hello@acedigitalsolutions.com";

const topics = [
  "Custom software",
  "Web or cloud application",
  "Systems integration",
  "Process automation",
  "Data & reporting",
  "A product enquiry",
  "Not sure yet",
];

const fieldClass =
  "w-full rounded-md border border-line-strong bg-white px-3.5 text-[15px] text-ink placeholder:text-muted/70 focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-500/20";

export function ConsultationForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const company = String(data.get("company") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const topic = String(data.get("topic") ?? "");
    const message = String(data.get("message") ?? "");

    const body = [
      `Name: ${name}`,
      company && `Company: ${company}`,
      `Email: ${email}`,
      phone && `Phone: ${phone}`,
      `Topic: ${topic}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `Consultation request — ${name}`,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-xl border border-line bg-paper p-8 text-center">
        <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-navy-700 text-white">
          <CheckIcon className="h-6 w-6" />
        </span>
        <h3 className="mt-5 text-2xl">Thank you</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-slate">
          Your email app should have opened with your message ready to send. If
          it didn&apos;t, email us directly at{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-semibold text-navy-700 underline-offset-2 hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
          . We&apos;ll get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={`${fieldClass} h-11`}
            placeholder="Jane Smith"
          />
        </Field>
        <Field label="Company" htmlFor="company" optional>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className={`${fieldClass} h-11`}
            placeholder="Acme Ltd"
          />
        </Field>
        <Field label="Work email" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={`${fieldClass} h-11`}
            placeholder="jane@acme.com"
          />
        </Field>
        <Field label="Phone" htmlFor="phone" optional>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={`${fieldClass} h-11`}
            placeholder="+44 …"
          />
        </Field>
      </div>

      <Field label="What can we help with?" htmlFor="topic">
        <select id="topic" name="topic" required className={`${fieldClass} h-11`}>
          {topics.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Tell us about your project" htmlFor="message">
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${fieldClass} resize-y py-3`}
          placeholder="What are you trying to do, and what's getting in the way?"
        />
      </Field>

      <button
        type="submit"
        className="inline-flex h-12 w-full items-center justify-center rounded-md bg-navy-700 px-6 text-[15px] font-semibold text-white transition-colors hover:bg-navy-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-600 sm:w-auto"
      >
        Send request
      </button>

      <p className="text-xs leading-relaxed text-muted">
        We&apos;ll only use your details to respond to your enquiry. No
        marketing lists, ever.
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 flex items-baseline justify-between text-sm font-medium text-ink"
      >
        {label}
        {optional && (
          <span className="text-xs font-normal text-muted">Optional</span>
        )}
      </label>
      {children}
    </div>
  );
}

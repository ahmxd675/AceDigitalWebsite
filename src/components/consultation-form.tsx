"use client";

import { useState } from "react";
import { CheckIcon } from "@/components/icons";

/*
  Consultation request form. Posts to /api/contact, which emails the enquiry
  via Resend. States: idle → submitting → success | error. On error (including
  when the backend isn't configured yet) it shows a direct-email fallback.
*/

const CONTACT_EMAIL = "contact@acedigitalsolutions.co.uk";

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
  "w-full rounded-md border border-line-strong bg-white px-3.5 text-[15px] text-ink placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25";

type Status = "idle" | "submitting" | "success" | "error";

export function ConsultationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const payload = Object.fromEntries(new FormData(e.currentTarget).entries());
    setStatus("submitting");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };

      if (!res.ok || !json.ok) {
        setError(json.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setError(
        "We couldn't reach the server. Check your connection, or email us directly.",
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-line bg-paper p-8 text-center">
        <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-accent to-navy-700 text-white shadow-md shadow-accent/25">
          <CheckIcon className="h-6 w-6" />
        </span>
        <h3 className="mt-5 text-2xl">Thank you</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-slate">
          We&apos;ve got your message and will get back to you within one
          business day. If it&apos;s urgent, email us at{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-semibold text-navy-700 underline-offset-2 hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
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
        <select
          id="topic"
          name="topic"
          required
          defaultValue=""
          className={`${fieldClass} h-11`}
        >
          <option value="" disabled>
            Select a topic…
          </option>
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

      {/* Spam honeypot — hidden from people, tempting to bots. */}
      <div className="hidden" aria-hidden="true">
        <label>
          Leave this field empty
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm leading-relaxed text-red-700"
        >
          {error}{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-semibold underline underline-offset-2"
          >
            Email us directly
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex h-12 w-full items-center justify-center rounded-md bg-navy-700 px-6 text-[15px] font-semibold text-white transition-colors hover:bg-navy-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-600 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {submitting ? "Sending…" : "Send request"}
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

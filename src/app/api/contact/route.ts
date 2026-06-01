import type { NextRequest } from "next/server";

/*
  Consultation form endpoint. Sends the enquiry as an email via Resend's REST
  API (no SDK dependency). Configure with env vars:

    RESEND_API_KEY   required — your Resend API key
    CONTACT_TO       where enquiries are delivered (default below)
    CONTACT_FROM     verified Resend sender, e.g. "ADS <noreply@yourdomain>"

  Until RESEND_API_KEY is set the endpoint returns 503 and the form shows a
  "email us directly" fallback, so nothing silently fails.
*/

const TO = process.env.CONTACT_TO ?? "contact@acedigitalsolutions.co.uk";
const FROM =
  process.env.CONTACT_FROM ?? "Ace Digital Solutions <onboarding@resend.dev>";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(data.name ?? "").trim();
  const email = String(data.email ?? "").trim();
  const company = String(data.company ?? "").trim();
  const phone = String(data.phone ?? "").trim();
  const topic = String(data.topic ?? "").trim();
  const message = String(data.message ?? "").trim();
  const honeypot = String(data.website ?? "").trim();

  // Spam trap: a real user never fills the hidden field. Accept and drop.
  if (honeypot) return Response.json({ ok: true });

  if (!name || !email || !topic || !message) {
    return Response.json(
      { error: "Please add your name, email, a topic, and a message." },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return Response.json(
      { error: "That email address doesn't look right." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json(
      {
        error:
          "Our form isn't connected yet. Please email us directly and we'll reply within one business day.",
      },
      { status: 503 },
    );
  }

  const text = [
    "New consultation request",
    "",
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

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: email,
        subject: `Consultation request: ${name}`,
        text,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("Resend error", res.status, detail);
      return Response.json(
        { error: "We couldn't send your message. Please email us directly." },
        { status: 502 },
      );
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Contact send failed", err);
    return Response.json(
      { error: "We couldn't send your message. Please email us directly." },
      { status: 502 },
    );
  }
}

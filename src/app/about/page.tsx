import type { Metadata } from "next";
import { CtaBand, PageHeader, Section } from "@/components/marketing";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ace Digital Solutions is a software company that builds custom, well-engineered software for businesses — and supports it for the long term.",
};

const principles = [
  {
    title: "Clarity over jargon",
    body: "We explain what we're doing in plain language and make sure you always understand where your project stands.",
  },
  {
    title: "Built to last",
    body: "We write clean, documented, well-tested software — the kind that's still easy to change years from now.",
  },
  {
    title: "Honest advice",
    body: "If the simplest answer isn't custom software, we'll tell you. We'd rather earn trust than oversell.",
  },
  {
    title: "In it for the long run",
    body: "We measure success by the businesses we keep working with, not by the projects we ship and forget.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="A software company built around its clients"
        lead="Ace Digital Solutions exists to give businesses software that fits them exactly — engineered properly, explained clearly, and supported for the long term."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-2xl sm:text-3xl">What we believe</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate">
              <p>
                Too many businesses are held back by software that nearly fits —
                tools that almost do the job, spreadsheets stretched far beyond
                their limits, and systems that don't talk to each other.
              </p>
              <p>
                We started Ace Digital Solutions to close that gap. We build
                custom software that matches the way a business actually works,
                so the technology supports the team instead of fighting it.
              </p>
              <p>
                We're deliberately a partner, not just a vendor. We take the
                time to understand the problem, build something solid, and stay
                on to help it grow. That long-term relationship is the whole
                point.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-xl border border-line bg-paper p-8">
              <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                In short
              </h3>
              <dl className="mt-6 space-y-6">
                <div>
                  <dt className="text-sm font-medium text-muted">What we do</dt>
                  <dd className="mt-1 text-lg text-ink">
                    Custom software & our own products
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted">Who it's for</dt>
                  <dd className="mt-1 text-lg text-ink">
                    Businesses that need a precise fit
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted">How we work</dt>
                  <dd className="mt-1 text-lg text-ink">
                    Closely, clearly, and for the long term
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </Section>

      <Section
        tone="paper"
        eyebrow="Our principles"
        title="The standards we hold ourselves to"
      >
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {principles.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-line bg-white p-8"
            >
              <h3 className="text-xl">{item.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}

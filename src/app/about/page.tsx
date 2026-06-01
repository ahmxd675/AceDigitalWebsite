import type { Metadata } from "next";
import { chipClass as chip } from "@/components/ui";
import { CtaBand, PageHeader, Section } from "@/components/marketing";
import { Reveal } from "@/components/motion";
import {
  ClarityIcon,
  DurableIcon,
  HonestIcon,
  LongRunIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ace Digital Solutions is a software company that builds custom, well-engineered software for businesses, and supports it for the long term.",
};

const principles = [
  {
    icon: ClarityIcon,
    title: "Clarity over jargon",
    body: "We explain what we're doing in plain language and make sure you always understand where your project stands.",
  },
  {
    icon: DurableIcon,
    title: "Built to last",
    body: "We write clean, documented, well-tested software: the kind that's still easy to change years from now.",
  },
  {
    icon: HonestIcon,
    title: "Honest advice",
    body: "If the simplest answer isn't custom software, we'll tell you. We'd rather earn trust than oversell.",
  },
  {
    icon: LongRunIcon,
    title: "In it for the long run",
    body: "We measure success by the businesses we keep working with, not by the projects we ship and forget.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="A software company built around its clients"
        lead="Ace Digital Solutions exists to give businesses software that fits them exactly: engineered properly, explained clearly, and supported for the long term."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <h2 className="text-2xl sm:text-3xl">What we believe</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate">
              <p>
                Too many businesses are held back by software that nearly fits:
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
          </Reveal>

          <Reveal className="lg:col-span-5" delay={120}>
            <div className="relative overflow-hidden rounded-2xl bg-navy-900 p-7 text-white shadow-xl shadow-navy-900/10">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/30 blur-3xl"
              />
              <h3 className="relative font-sans text-xs font-semibold uppercase tracking-[0.16em] text-accent-300">
                In short
              </h3>
              <dl className="relative mt-5 divide-y divide-white/10">
                <div className="py-4 first:pt-0 last:pb-0">
                  <dt className="text-sm font-medium text-navy-300">What we do</dt>
                  <dd className="mt-1 text-lg font-medium text-white">
                    High-quality custom software & our own products
                  </dd>
                </div>
                <div className="py-4 first:pt-0 last:pb-0">
                  <dt className="text-sm font-medium text-navy-300">
                    Who it&apos;s for
                  </dt>
                  <dd className="mt-1 text-lg font-medium text-white">
                    Businesses that need a precise fit
                  </dd>
                </div>
                <div className="py-4 first:pt-0 last:pb-0">
                  <dt className="text-sm font-medium text-navy-300">
                    How we work
                  </dt>
                  <dd className="mt-1 text-lg font-medium text-white">
                    Closely, clearly, and for the long term
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="paper" title="The standards we hold ourselves to">
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {principles.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="flex h-full gap-5 rounded-2xl border border-line bg-white p-8 transition duration-200 hover:-translate-y-1 hover:border-navy-300 hover:shadow-lg hover:shadow-navy-900/5">
                <span className={`${chip} h-12 w-12 shrink-0`}>
                  <item.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-xl">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate">
                    {item.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}

import type { Metadata } from "next";
import { chipClass as chip, TextLink } from "@/components/ui";
import { CtaBand, PageHeader, Section } from "@/components/marketing";
import { Reveal } from "@/components/motion";
import { CheckIcon } from "@/components/icons";
import { products } from "@/content";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Software products built by Ace Digital Solutions: automated PDF-to-Excel for accountants (Xero & Sage), the Team Hub collaboration platform, and professional business websites.",
};

const statusStyles: Record<string, string> = {
  Available: "border-success-200 bg-success-50 text-success",
  "In development": "border-navy-200 bg-navy-50 text-navy-700",
  Planned: "border-line-strong bg-paper text-muted",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        title="Software we've built and shipped"
        lead="Alongside our bespoke work, we develop our own products: practical software that solves real problems, ready to use today or tailored to the way you work."
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {products.map((product, i) => (
            <Reveal key={product.name} delay={i * 90}>
              <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-8 transition duration-200 hover:-translate-y-1 hover:border-navy-300 hover:shadow-lg hover:shadow-navy-900/5">
                <div className="flex items-start justify-between gap-4">
                  <span className={`${chip} h-12 w-12`}>
                    <product.icon className="h-6 w-6" />
                  </span>
                  <span
                    className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                      statusStyles[product.status] ?? statusStyles.Planned
                    }`}
                  >
                    {product.status}
                  </span>
                </div>

                <h2 className="mt-6 text-xl">{product.name}</h2>
                <p className="mt-1 text-sm font-semibold text-accent">
                  {product.tagline}
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-slate">
                  {product.summary}
                </p>

                <ul className="mt-6 space-y-3 border-t border-line pt-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex gap-2.5">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span className="text-sm leading-relaxed text-slate">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-1 items-end">
                  <TextLink href="/contact">Book a consultation</TextLink>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="paper">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl">
              Want one shaped to your business?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate">
              Every product we build can be configured and extended for the way
              you work. If something here is close but not quite right, we can
              tailor it, or build the right thing from the ground up.
            </p>
          </div>
          <ul className="space-y-4">
            {[
              "Configured to your processes and branding",
              "Integrated with the tools you already use",
              "Backed by the same long-term support",
            ].map((item, i) => (
              <Reveal as="li" key={item} delay={i * 80}>
                <div className="flex items-center gap-4 rounded-xl border border-line bg-white px-5 py-4 transition duration-200 hover:-translate-y-0.5 hover:border-navy-300 hover:shadow-md hover:shadow-navy-900/5">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <CheckIcon className="h-5 w-5" />
                  </span>
                  <span className="text-[15px] font-medium text-ink">{item}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      <CtaBand
        title="See one of these in action."
        text="Our products are live and in use today. Book a consultation for a walkthrough, or to talk about a version tailored to your business."
      />
    </>
  );
}

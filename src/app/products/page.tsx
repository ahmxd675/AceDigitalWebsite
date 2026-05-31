import type { Metadata } from "next";
import { TextLink } from "@/components/ui";
import { CtaBand, PageHeader, Section } from "@/components/marketing";
import { products } from "@/content";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Ace Digital Solutions builds its own software products — practical platforms that solve common problems for whole industries.",
};

const statusStyles: Record<string, string> = {
  "In development": "border-navy-200 bg-navy-50 text-navy-700",
  Available: "border-emerald-200 bg-emerald-50 text-emerald-700",
  Planned: "border-line-strong bg-paper text-muted",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Products"
        title="Software products we build and sell"
        lead="Alongside our bespoke work, we develop our own products: configurable platforms that solve problems shared across an industry, ready to adapt to your business."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.name}
              className="flex flex-col rounded-xl border border-line bg-white p-8"
            >
              <span
                className={`inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                  statusStyles[product.status] ?? statusStyles.Planned
                }`}
              >
                {product.status}
              </span>
              <h2 className="mt-5 text-2xl">{product.name}</h2>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-slate">
                {product.summary}
              </p>
              <div className="mt-6 border-t border-line pt-5">
                <TextLink href="/contact">Register your interest</TextLink>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="paper">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl">
              Want a product shaped to your business?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate">
              Every product we build can be configured and extended for the way
              you work. If something here is close but not quite right, we can
              tailor it — or build the right thing from the ground up.
            </p>
          </div>
          <ul className="space-y-4">
            {[
              "Configured to your processes and branding",
              "Integrated with the tools you already use",
              "Backed by the same long-term support",
            ].map((item) => (
              <li
                key={item}
                className="rounded-lg border border-line bg-white px-5 py-4 text-[15px] font-medium text-ink"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CtaBand
        title="Be first to know when these launch."
        text="Our products are in active development. Book a consultation to see an early look or to talk about a tailored version for your business."
      />
    </>
  );
}

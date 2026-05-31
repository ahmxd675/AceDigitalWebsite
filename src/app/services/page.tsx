import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { CtaBand, PageHeader } from "@/components/marketing";
import { CheckIcon } from "@/components/icons";
import { services } from "@/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom software development, web and cloud applications, systems integration, automation, data and reporting, and long-term support from Ace Digital Solutions.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Software services, end to end"
        lead="We cover the full journey — from understanding the problem to building, integrating, and supporting the solution. Most engagements combine several of the areas below."
      />

      <section className="bg-white">
        <Container className="py-16 sm:py-24">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24 grid gap-8 border-t border-line pt-12 lg:grid-cols-12 lg:gap-12"
              >
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy-700 text-white">
                      <service.icon className="h-6 w-6" />
                    </span>
                    <span className="font-serif text-2xl font-semibold text-navy-200">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="mt-6 text-2xl sm:text-3xl">{service.title}</h2>
                  <p className="mt-4 text-lg leading-relaxed text-slate">
                    {service.summary}
                  </p>
                </div>

                <div className="lg:col-span-7 lg:border-l lg:border-line lg:pl-12">
                  <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                    What this looks like
                  </h3>
                  <ul className="mt-5 space-y-4">
                    {service.points.map((point) => (
                      <li key={point} className="flex gap-3.5">
                        <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy-50 text-navy-700">
                          <CheckIcon className="h-4 w-4" />
                        </span>
                        <span className="text-[15px] leading-relaxed text-slate">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Not sure which of these you need?"
        text="That's normal — and it's exactly what a consultation is for. Tell us the problem, and we'll help you work out the right approach."
      />
    </>
  );
}

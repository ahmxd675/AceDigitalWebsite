import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui";
import { OctagonMotif } from "@/components/marketing";
import { ConsultationForm } from "@/components/consultation-form";

export const metadata: Metadata = {
  title: "Book a consultation",
  description:
    "Tell us what you're trying to build. Book a free, no-obligation consultation with Ace Digital Solutions and we'll help you scope it.",
};

const steps = [
  {
    title: "We listen",
    body: "Tell us the problem in your own words. There's no obligation and no hard sell.",
  },
  {
    title: "We scope it",
    body: "We ask the right questions and outline a practical approach, timeline, and cost.",
  },
  {
    title: "You decide",
    body: "You get a clear proposal. If it's a fit, we begin — if not, the advice is still yours.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-paper">
        <OctagonMotif className="pointer-events-none absolute -right-16 -top-20 hidden h-[420px] w-[420px] text-navy-300 sm:block" />
        <Container className="relative py-16 sm:py-20">
          <div className="max-w-3xl">
            <Eyebrow>Contact</Eyebrow>
            <h1 className="mt-5 text-4xl leading-[1.08] sm:text-5xl">
              Book a consultation
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate">
              Tell us what you&apos;re trying to build or the problem you&apos;re
              trying to solve. We&apos;ll get back to you within one business day
              to arrange a free, no-obligation conversation.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-7">
              <ConsultationForm />
            </div>

            {/* Aside */}
            <div className="lg:col-span-5">
              <div className="lg:border-l lg:border-line lg:pl-12">
                <h2 className="text-2xl">What to expect</h2>
                <ol className="mt-6 space-y-6">
                  {steps.map((step, i) => (
                    <li key={step.title} className="flex gap-4">
                      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy-50 font-serif text-sm font-semibold text-navy-700">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="text-lg">{step.title}</h3>
                        <p className="mt-1 text-[15px] leading-relaxed text-slate">
                          {step.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>

                <div className="mt-10 border-t border-line pt-8">
                  <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                    Prefer to reach us directly
                  </h3>
                  <dl className="mt-4 space-y-3 text-[15px]">
                    <div className="flex gap-2">
                      <dt className="text-muted">Email</dt>
                      <dd>
                        <a
                          href="mailto:hello@acedigitalsolutions.com"
                          className="font-medium text-navy-700 underline-offset-2 hover:underline"
                        >
                          hello@acedigitalsolutions.com
                        </a>
                      </dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="text-muted">Hours</dt>
                      <dd className="text-ink">Mon–Fri, 9am–5pm</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

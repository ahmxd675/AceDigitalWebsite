import type { ReactNode } from "react";
import { Button, Container, Eyebrow } from "@/components/ui";

/* Concentric octagon line motif — a quiet nod to the brand mark. */
export function OctagonMotif({ className }: { className?: string }) {
  const ring = (inset: number, opacity: number) => {
    const x0 = inset;
    const x1 = 200 - inset;
    const c = 52;
    return (
      <path
        key={inset}
        d={`M${x0 + c} ${x0} H${x1 - c} L${x1} ${x0 + c} V${x1 - c} L${x1 - c} ${x1} H${x0 + c} L${x0} ${x1 - c} V${x0 + c} Z`}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.25}
        opacity={opacity}
      />
    );
  };
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      aria-hidden
      preserveAspectRatio="xMidYMid meet"
    >
      {ring(2, 0.9)}
      {ring(24, 0.55)}
      {ring(46, 0.32)}
      {ring(68, 0.18)}
    </svg>
  );
}

/* Header band for inner pages. */
export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-paper">
      <OctagonMotif className="pointer-events-none absolute -right-16 -top-20 hidden h-[420px] w-[420px] text-navy-300 sm:block" />
      <Container className="relative py-16 sm:py-20">
        <div className="max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 text-4xl leading-[1.08] sm:text-5xl">{title}</h1>
          {lead && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate">
              {lead}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}

/* Closing call-to-action band, reused across pages. */
export function CtaBand({
  title = "Let's talk about what you're building.",
  text = "Book a no-obligation consultation. We'll listen to the problem, ask the right questions, and tell you honestly how we can help.",
}: {
  title?: ReactNode;
  text?: ReactNode;
}) {
  return (
    <section className="bg-navy-900">
      <Container className="py-16 sm:py-20">
        <div className="relative overflow-hidden">
          <div className="relative max-w-2xl">
            <Eyebrow tone="light">Get started</Eyebrow>
            <h2 className="mt-5 text-3xl text-white sm:text-4xl">{title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-navy-200">{text}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" variant="on-dark" size="lg">
                Book a consultation
              </Button>
              <Button
                href="/services"
                size="lg"
                className="border border-white/25 bg-transparent text-white hover:bg-white/10"
              >
                Explore our services
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* Generic section wrapper with optional eyebrow + heading + intro. */
export function Section({
  eyebrow,
  title,
  intro,
  children,
  tone = "white",
  className,
}: {
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  tone?: "white" | "paper";
  className?: string;
}) {
  return (
    <section className={tone === "paper" ? "bg-paper" : "bg-white"}>
      <Container className={`py-16 sm:py-24 ${className ?? ""}`}>
        {(eyebrow || title || intro) && (
          <div className="max-w-2xl">
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            {title && (
              <h2 className="mt-5 text-3xl leading-tight sm:text-4xl">
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-5 text-lg leading-relaxed text-slate">{intro}</p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}

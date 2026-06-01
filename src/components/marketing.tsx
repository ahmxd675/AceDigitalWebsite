import type { ReactNode } from "react";
import { Button, Container } from "@/components/ui";
import { LogoIcon } from "@/components/logo";

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
  title,
  lead,
}: {
  title: ReactNode;
  lead?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-paper">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
      />
      <LogoIcon className="pointer-events-none absolute -right-10 -top-10 hidden h-64 w-auto opacity-[0.07] sm:block" />
      <Container className="relative py-20 sm:py-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold leading-[1.04] tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
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
    <section className="relative overflow-hidden bg-navy-900">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 -top-24 h-80 w-80 rounded-full bg-accent/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-accent-2/20 blur-3xl"
      />
      <Container className="relative py-20 sm:py-24">
        <div className="relative overflow-hidden">
          <div className="relative max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {title}
            </h2>
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

/* Infinite scrolling capability carousel (pauses on hover, static if reduced-motion). */
export function Marquee({ items }: { items: string[] }) {
  const Row = () => (
    <div
      className="flex shrink-0 items-center gap-12 pr-12"
      aria-hidden
    >
      {items.map((item, i) => (
        <span
          key={i}
          className="flex items-center gap-3 whitespace-nowrap text-[15px] font-medium tracking-wide text-navy-100"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent-300" />
          {item}
        </span>
      ))}
    </div>
  );
  return (
    <div className="marquee">
      <div className="marquee-track">
        <Row />
        <Row />
      </div>
      <span className="sr-only">Capabilities: {items.join(", ")}.</span>
    </div>
  );
}

/* Alternating feature row: copy on one side, a visual on the other. */
export function FeatureRow({
  title,
  intro,
  visual,
  children,
  reverse = false,
  tone = "white",
}: {
  title: ReactNode;
  intro?: ReactNode;
  visual: ReactNode;
  children?: ReactNode;
  reverse?: boolean;
  tone?: "white" | "paper";
}) {
  return (
    <section className={tone === "paper" ? "bg-paper" : "bg-white"}>
      <Container className="py-16 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className={reverse ? "lg:order-2" : undefined}>
            <h2 className="text-3xl leading-tight sm:text-4xl">{title}</h2>
            {intro && (
              <p className="mt-5 text-lg leading-relaxed text-slate">{intro}</p>
            )}
            {children && <div className="mt-8">{children}</div>}
          </div>
          <div className={reverse ? "lg:order-1" : undefined}>{visual}</div>
        </div>
      </Container>
    </section>
  );
}

/* Generic section wrapper with optional heading + intro. */
export function Section({
  title,
  intro,
  children,
  tone = "white",
  className,
}: {
  title?: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  tone?: "white" | "paper";
  className?: string;
}) {
  return (
    <section className={tone === "paper" ? "bg-paper" : "bg-white"}>
      <Container className={`py-16 sm:py-24 ${className ?? ""}`}>
        {(title || intro) && (
          <div className="max-w-2xl">
            {title && (
              <h2 className="text-3xl leading-tight sm:text-4xl">{title}</h2>
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

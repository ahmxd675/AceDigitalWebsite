import { Button, chipClass as chip, Container, TextLink } from "@/components/ui";
import { CtaBand, FeatureRow, Marquee, Section } from "@/components/marketing";
import { Reveal } from "@/components/motion";
import { DeliveryCycle, IntegrationFlow } from "@/components/graphics";
import {
  BuildIcon,
  CheckIcon,
  CompassIcon,
  DesignIcon,
  DiscoverIcon,
  LayersIcon,
  SupportIcon,
} from "@/components/icons";
import { services, products } from "@/content";

const capabilities = [
  "Bespoke applications",
  "Web & cloud apps",
  "Systems integration",
  "Process automation",
  "Data & reporting",
  "API development",
  "Legacy migration",
  "Long-term support",
];

const valueProps = [
  {
    icon: CompassIcon,
    title: "Shaped around your business",
    body: "We start with how your business actually runs, then build software that fits it, instead of forcing your team to adapt to someone else's product.",
  },
  {
    icon: LayersIcon,
    title: "Yours to own",
    body: "You get well-built, documented software and the freedom that comes with it. No lock-in, no black boxes, no surprises down the line.",
  },
  {
    icon: SupportIcon,
    title: "Supported for the long term",
    body: "Launch is the beginning. We stay on to maintain, secure, and improve what we build as your needs change over time.",
  },
];

const approach = [
  {
    icon: DiscoverIcon,
    title: "Discover",
    body: "We learn your business, your goals, and where the friction is. No jargon, just the right questions.",
  },
  {
    icon: DesignIcon,
    title: "Design",
    body: "We scope a practical solution and agree on what success looks like before any code is written.",
  },
  {
    icon: BuildIcon,
    title: "Build",
    body: "We develop in clear stages, showing you working software early and often so there are no surprises.",
  },
  {
    icon: SupportIcon,
    title: "Support",
    body: "We deploy, hand over documentation, and stay on to keep everything running and improving.",
  },
];

const integrationPoints = [
  "Connect your CRM, accounting, and payment tools",
  "Migrate cleanly off legacy systems and spreadsheets",
  "One source of truth, updated automatically",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div className="hero-mesh" aria-hidden>
          <span className="blob-1" />
          <span className="blob-2" />
          <span className="blob-3" />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1.4px)",
            backgroundSize: "22px 22px",
            maskImage:
              "radial-gradient(125% 125% at 0% 0%, #000 28%, transparent 72%)",
            WebkitMaskImage:
              "radial-gradient(125% 125% at 0% 0%, #000 28%, transparent 72%)",
          }}
        />
        <Container className="relative py-28 sm:py-36 lg:py-44">
          <div className="max-w-4xl">
            <Reveal>
              <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Software, built around{" "}
                <span className="text-accent-300">your business</span>.
              </h1>
            </Reveal>
            <Reveal delay={90}>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-navy-100 sm:text-xl">
                Ace Digital Solutions is a software engineering firm building
                high-quality software for businesses. We turn the way you work
                into tools that make it faster, clearer, and easier to grow.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" variant="on-dark" size="lg">
                  Book a consultation
                </Button>
                <Button
                  href="/services"
                  size="lg"
                  className="border border-white/30 bg-transparent text-white hover:bg-white/10 focus-visible:outline-white"
                >
                  Explore our services
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>

        {/* Capability carousel (full-bleed) */}
        <div className="relative border-t border-white/10 py-6">
          <Marquee items={capabilities} />
        </div>
      </section>

      {/* Approach — delivery cycle with stages around it */}
      <section className="bg-white">
        <Container className="py-20 sm:py-28">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl leading-tight sm:text-4xl lg:text-5xl">
                A clear path from idea to working software
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate">
                One continuous cycle that keeps you in control at every step,
                from the first conversation to long after launch.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-16 grid max-w-5xl items-center gap-y-12 lg:grid-cols-3 lg:gap-x-12">
            <Reveal className="order-1 lg:order-none lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <DeliveryCycle className="mx-auto w-full max-w-[300px] lg:max-w-[380px]" />
            </Reveal>
            <Reveal
              className="order-2 lg:order-none lg:col-start-1 lg:row-start-1"
              delay={60}
            >
              <Stage item={approach[0]} col="left" />
            </Reveal>
            <Reveal
              className="order-3 lg:order-none lg:col-start-3 lg:row-start-1"
              delay={120}
            >
              <Stage item={approach[1]} col="right" />
            </Reveal>
            <Reveal
              className="order-4 lg:order-none lg:col-start-3 lg:row-start-2"
              delay={180}
            >
              <Stage item={approach[2]} col="right" />
            </Reveal>
            <Reveal
              className="order-5 lg:order-none lg:col-start-1 lg:row-start-2"
              delay={240}
            >
              <Stage item={approach[3]} col="left" />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Value props */}
      <Section
        tone="paper"
        title="A partner for software, not just a supplier"
        intro="We're a software solutions company built for businesses that need something specific. Here's what working with us means."
      >
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {valueProps.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <div className="h-full rounded-xl border border-line bg-white p-8 transition duration-200 hover:-translate-y-1 hover:border-navy-300 hover:shadow-xl hover:shadow-navy-900/10">
                <span className={`${chip} h-12 w-12`}>
                  <item.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-xl">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slate">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Services overview */}
      <Section
        title="From a single tool to a complete platform"
        intro="Whatever the shape of the problem, we build software that solves it, and stand behind it afterwards."
      >
        <dl className="mt-12 grid gap-x-12 sm:grid-cols-2">
          {services.map((service, i) => (
            <Reveal as="div" key={service.id} delay={(i % 2) * 80}>
              <div className="flex gap-4 border-t border-line py-6">
                <span className={`${chip} mt-0.5 h-10 w-10 shrink-0`}>
                  <service.icon className="h-5 w-5" />
                </span>
                <div>
                  <dt className="text-base font-semibold text-ink">
                    {service.title}
                  </dt>
                  <dd className="mt-1.5 text-[15px] leading-relaxed text-slate">
                    {service.summary}
                  </dd>
                </div>
              </div>
            </Reveal>
          ))}
        </dl>
        <div className="mt-10">
          <TextLink href="/services">See how we work on each</TextLink>
        </div>
      </Section>

      {/* Integration — data flow */}
      <FeatureRow
        reverse
        tone="paper"
        title="Your systems, finally talking to each other"
        intro="Most businesses run on tools that don't connect. We integrate them so data moves automatically, with no double entry and no gaps."
        visual={
          <Reveal>
            <IntegrationFlow className="mx-auto w-full max-w-md" />
          </Reveal>
        }
      >
        <ul className="space-y-3.5">
          {integrationPoints.map((point) => (
            <li key={point} className="flex gap-3">
              <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy-50 text-navy-700">
                <CheckIcon className="h-4 w-4" />
              </span>
              <span className="text-[15px] leading-relaxed text-slate">
                {point}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <TextLink href="/services#integration">
            More on systems integration
          </TextLink>
        </div>
      </FeatureRow>

      {/* Products teaser */}
      <Section
        title="Products we've built"
        intro="Alongside bespoke work, we build and ship our own software, ready to use today or tailored to the way you work."
      >
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {products.map((product, i) => (
            <Reveal key={product.name} delay={i * 90}>
              <div className="flex h-full flex-col rounded-xl border border-line bg-white p-7 transition duration-200 hover:-translate-y-1 hover:border-navy-300 hover:shadow-lg hover:shadow-navy-900/5">
                <span className={`${chip} h-12 w-12`}>
                  <product.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-xl">{product.name}</h3>
                <p className="mt-1 text-sm font-semibold text-accent">
                  {product.tagline}
                </p>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-slate">
                  {product.summary}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <TextLink href="/products">View our products</TextLink>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}

function Stage({
  item,
  col,
}: {
  item: (typeof approach)[number];
  col: "left" | "right";
}) {
  return (
    <div
      className={`flex items-start gap-4 ${
        col === "left" ? "lg:flex-row-reverse lg:text-right" : "lg:text-left"
      }`}
    >
      <span className={`${chip} h-11 w-11 shrink-0`}>
        <item.icon className="h-[22px] w-[22px]" />
      </span>
      <div>
        <h3 className="text-lg">{item.title}</h3>
        <p className="mt-1 text-[15px] leading-relaxed text-slate">
          {item.body}
        </p>
      </div>
    </div>
  );
}

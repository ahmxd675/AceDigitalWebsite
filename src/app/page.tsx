import { Button, Container, Eyebrow, TextLink } from "@/components/ui";
import { CtaBand, OctagonMotif, Section } from "@/components/marketing";
import { CompassIcon, LayersIcon, SupportIcon } from "@/components/icons";
import { services, products } from "@/content";

const valueProps = [
  {
    icon: CompassIcon,
    title: "Shaped around your business",
    body: "We start with how your business actually runs, then build software that fits it — instead of forcing your team to adapt to someone else's product.",
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
    step: "01",
    title: "Discover",
    body: "We learn your business, your goals, and where the friction is. No jargon — just the right questions.",
  },
  {
    step: "02",
    title: "Design",
    body: "We scope a practical solution and agree on what success looks like before any code is written.",
  },
  {
    step: "03",
    title: "Build",
    body: "We develop in clear stages, showing you working software early and often so there are no surprises.",
  },
  {
    step: "04",
    title: "Support",
    body: "We deploy, hand over documentation, and stay on to keep everything running and improving.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line bg-white">
        <OctagonMotif className="pointer-events-none absolute -right-24 -top-24 hidden h-[560px] w-[560px] text-navy-200 lg:block" />
        <Container className="relative py-20 sm:py-28">
          <div className="max-w-3xl">
            <Eyebrow>Custom software for business</Eyebrow>
            <h1 className="mt-6 text-4xl leading-[1.06] sm:text-5xl lg:text-6xl">
              Software, built around{" "}
              <span className="text-navy-700">your business</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate sm:text-xl">
              Ace Digital Solutions designs and develops custom software for
              businesses that need a precise fit. We turn the way you work into
              tools that make it faster, clearer, and easier to grow.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" size="lg">
                Book a consultation
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Explore our services
              </Button>
            </div>
          </div>

          {/* Capability strip */}
          <div className="mt-16 grid max-w-4xl grid-cols-2 gap-x-8 gap-y-4 border-t border-line pt-8 sm:grid-cols-4">
            {[
              "Bespoke applications",
              "Web & cloud",
              "Integrations",
              "Long-term support",
            ].map((label) => (
              <div
                key={label}
                className="text-sm font-medium tracking-wide text-muted"
              >
                {label}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Value props */}
      <Section
        eyebrow="Why Ace Digital Solutions"
        title="A partner for software, not just a supplier"
        intro="We're a software solutions company built for businesses that need something specific. Here's what working with us means."
      >
        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
          {valueProps.map((item) => (
            <div key={item.title} className="bg-white p-8">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                <item.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-xl">{item.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Services overview */}
      <Section
        tone="paper"
        eyebrow="What we do"
        title="From a single tool to a complete platform"
        intro="Whatever the shape of the problem, we build software that solves it — and stand behind it afterwards."
      >
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col rounded-xl border border-line bg-white p-7 transition-colors hover:border-navy-300"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-navy-700 text-white">
                <service.icon className="h-[22px] w-[22px]" />
              </span>
              <h3 className="mt-5 text-lg">{service.title}</h3>
              <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-slate">
                {service.summary}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <TextLink href="/services">See how we work on each</TextLink>
        </div>
      </Section>

      {/* Approach */}
      <Section
        eyebrow="Our approach"
        title="A clear path from idea to working software"
        intro="A straightforward process designed to reduce risk and keep you in control at every step."
      >
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {approach.map((item) => (
            <div key={item.step} className="relative">
              <div className="font-serif text-3xl font-semibold text-navy-200">
                {item.step}
              </div>
              <h3 className="mt-3 text-xl">{item.title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-slate">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Products teaser */}
      <Section
        tone="paper"
        eyebrow="Our products"
        title="Products we're building"
        intro="Alongside bespoke work, we develop our own products — practical platforms that solve common problems for whole industries."
      >
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.name}
              className="flex flex-col rounded-xl border border-line bg-white p-7"
            >
              <span className="inline-flex w-fit items-center rounded-full border border-navy-200 bg-navy-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy-700">
                {product.status}
              </span>
              <h3 className="mt-5 text-xl">{product.name}</h3>
              <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-slate">
                {product.summary}
              </p>
            </div>
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

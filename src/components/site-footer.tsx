import Link from "next/link";
import { Logo } from "@/components/logo";
import { Container } from "@/components/ui";

const COLUMNS = [
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/services", label: "Services" },
      { href: "/products", label: "Products" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "Services",
    links: [
      { href: "/services#custom-software", label: "Custom software" },
      { href: "/services#web-cloud", label: "Web & cloud apps" },
      { href: "/services#integration", label: "Systems integration" },
      { href: "/services#support", label: "Support & maintenance" },
    ],
  },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-navy-950 text-navy-100">
      <Container className="py-14">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo tone="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-200">
              Custom software, designed and built around how your business
              actually works. From first idea to long-term support.
            </p>
            <a
              href="mailto:hello@acedigitalsolutions.com"
              className="mt-5 inline-block text-sm font-medium text-white underline-offset-4 hover:underline"
            >
              hello@acedigitalsolutions.com
            </a>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading} className="lg:col-span-3">
              <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-navy-300">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-navy-100 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-4 md:col-span-2 lg:col-start-9">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-navy-300">
              Get in touch
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-navy-200">
              Tell us what you are trying to build. We will help you scope it.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-navy-100"
            >
              Book a consultation
              <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden>
                <path
                  d="M4 10h12m0 0-5-5m5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-navy-300 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Ace Digital Solutions. All rights reserved.</p>
          <p>Custom software for business.</p>
        </div>
      </Container>
    </footer>
  );
}

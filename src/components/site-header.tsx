"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoIcon, LogoLockup } from "@/components/logo";
import { Button } from "@/components/ui";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="-m-2 rounded-md p-2"
          aria-label="Ace Digital Solutions, home"
          onClick={() => setOpen(false)}
        >
          <LogoLockup className="hidden h-9 w-auto sm:block" />
          <LogoIcon className="h-9 w-auto sm:hidden" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[15px] font-medium transition-colors ${
                isActive(item.href)
                  ? "text-navy-700"
                  : "text-slate hover:text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Button href="/contact" size="md">
            Book a consultation
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-line bg-white md:hidden"
        >
          <div className="space-y-1 px-4 py-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block rounded-md px-3 py-2.5 text-base font-medium ${
                  isActive(item.href)
                    ? "bg-navy-50 text-navy-700"
                    : "text-slate hover:bg-paper"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button
              href="/contact"
              size="lg"
              className="mt-3 w-full"
              onClick={() => setOpen(false)}
            >
              Book a consultation
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}

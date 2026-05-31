import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 lg:px-8 ${className ?? ""}`}>
      {children}
    </div>
  );
}

/* Small uppercase section label used above headings. */
export function Eyebrow({
  children,
  tone = "dark",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
}) {
  const color = tone === "dark" ? "text-navy-600" : "text-navy-200";
  return (
    <span
      className={`flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] ${color}`}
    >
      <span
        className={`h-px w-6 ${tone === "dark" ? "bg-navy-300" : "bg-navy-300/50"}`}
        aria-hidden
      />
      {children}
    </span>
  );
}

type Variant = "primary" | "outline" | "ghost" | "on-dark";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md text-[15px] font-semibold transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2";

const sizes = {
  md: "h-11 px-5",
  lg: "h-12 px-6",
} as const;

const variants: Record<Variant, string> = {
  primary:
    "bg-navy-700 text-white hover:bg-navy-800 focus-visible:outline-navy-600",
  outline:
    "border border-line-strong bg-white text-ink hover:border-navy-400 hover:text-navy-700 focus-visible:outline-navy-600",
  ghost: "text-navy-700 hover:text-navy-900",
  "on-dark":
    "bg-white text-navy-800 hover:bg-navy-50 focus-visible:outline-white",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: {
  href: string;
  variant?: Variant;
  size?: keyof typeof sizes;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<typeof Link>, "href" | "className">) {
  return (
    <Link
      href={href}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className ?? ""}`}
      {...rest}
    >
      {children}
    </Link>
  );
}

/* Right-pointing arrow used on links and buttons. */
export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={className ?? "h-4 w-4"}
      aria-hidden
    >
      <path
        d="M4 10h12m0 0-5-5m5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Inline "Learn more →" style text link. */
export function TextLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-1.5 text-[15px] font-semibold text-navy-700 hover:text-navy-900 ${className ?? ""}`}
    >
      {children}
      <ArrowIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
    </Link>
  );
}

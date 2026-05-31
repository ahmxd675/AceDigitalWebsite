/* Thin, uniform line icons. Stroke-based so they sit well in navy. */
import type { SVGProps } from "react";

function Icon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    />
  );
}

export function CodeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 6l-3 12" />
    </Icon>
  );
}

export function CloudIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M7 18a4 4 0 0 1-.5-7.97 5 5 0 0 1 9.6-1.27A3.5 3.5 0 0 1 17.5 18H7Z" />
    </Icon>
  );
}

export function IntegrationIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="M6 8.5V13a4 4 0 0 0 4 4h5.5" />
    </Icon>
  );
}

export function AutomationIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 4v2.5M12 17.5V20M4 12h2.5M17.5 12H20M6.3 6.3l1.8 1.8M15.9 15.9l1.8 1.8M17.7 6.3l-1.8 1.8M8.1 15.9l-1.8 1.8" />
    </Icon>
  );
}

export function DataIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M4 19V5M20 19H4M8 19v-5M12 19v-9M16 19v-7" />
    </Icon>
  );
}

export function SupportIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M12 3 5 6v5c0 4 3 7 7 9 4-2 7-5 7-9V6l-7-3Z" />
      <path d="m9.5 12 1.8 1.8 3.2-3.4" />
    </Icon>
  );
}

export function CompassIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15 9-2 5-4 1 2-5 4-1Z" />
    </Icon>
  );
}

export function LayersIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </Icon>
  );
}

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="m5 12 4.5 4.5L19 7" />
    </Icon>
  );
}

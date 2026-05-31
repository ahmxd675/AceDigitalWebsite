import type { CSSProperties } from "react";

/*
  Vector recreation of the Ace Digital Solutions mark so the site renders
  crisply at any size and looks complete before the raster brand files are
  added. Swap to /brand/*.png or an SVG export any time — same markup.
*/

type Tone = "dark" | "light";

const outerOctagon =
  "M24 1 H80 L103 24 V60 L80 83 H24 L1 60 V24 Z";
const innerOctagon =
  "M27 8 H77 L96 27 V57 L77 76 H27 L8 57 V27 Z";

export function LogoMark({
  tone = "dark",
  className,
  style,
  title = "Ace Digital Solutions",
}: {
  tone?: Tone;
  className?: string;
  style?: CSSProperties;
  title?: string;
}) {
  const navy = "var(--color-navy-700)";
  const fill = tone === "dark" ? navy : "none";
  const stroke = tone === "dark" ? "#ffffff" : "#ffffff";
  const letters = "#ffffff";
  const outerStroke = tone === "dark" ? navy : "#ffffff";

  return (
    <svg
      viewBox="0 0 104 84"
      className={className}
      style={style}
      role="img"
      aria-label={title}
    >
      <path d={outerOctagon} fill={fill} stroke={outerStroke} strokeWidth={2} />
      <path
        d={innerOctagon}
        fill="none"
        stroke={stroke}
        strokeWidth={2.25}
        opacity={tone === "dark" ? 1 : 0.9}
      />
      <text
        x="52"
        y="55"
        textAnchor="middle"
        fontFamily="var(--font-serif)"
        fontSize="33"
        fontWeight={700}
        letterSpacing="-0.5"
        fill={letters}
      >
        ADS
      </text>
    </svg>
  );
}

export function Logo({
  tone = "dark",
  className,
}: {
  tone?: Tone;
  className?: string;
}) {
  const wordColor = tone === "dark" ? "text-navy-700" : "text-white";
  const ruleColor = tone === "dark" ? "bg-navy-300" : "bg-white/40";
  const subColor = tone === "dark" ? "text-slate" : "text-navy-100";

  return (
    <span className={`flex items-center gap-3 ${className ?? ""}`}>
      <LogoMark tone={tone} className="h-9 w-auto shrink-0" />
      <span className="flex flex-col leading-none">
        <span
          className={`font-serif text-[15px] font-semibold tracking-[0.14em] ${wordColor}`}
        >
          ACE DIGITAL
        </span>
        <span className="mt-1 flex items-center gap-2">
          <span className={`h-px w-4 ${ruleColor}`} aria-hidden />
          <span
            className={`font-serif text-[10px] font-medium tracking-[0.34em] ${subColor}`}
          >
            SOLUTIONS
          </span>
        </span>
      </span>
    </span>
  );
}

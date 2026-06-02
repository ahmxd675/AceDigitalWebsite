/*
  Abstract animated graphics (SVG + CSS). No JS, no images.
  Animation classes (.flow-dash, .orbit-dot, .node-pulse, .node-pulse-strong)
  live in globals.css and are disabled under prefers-reduced-motion.
*/
import {
  BuildIcon,
  DesignIcon,
  DiscoverIcon,
  SupportIcon,
} from "@/components/icons";
import type { ComponentType, SVGProps } from "react";

type Node = {
  cx: number;
  cy: number;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

/* Continuous delivery loop: four stages on a ring with a current flowing round. */
export function DeliveryCycle({ className }: { className?: string }) {
  const C = 170;
  const R = 115;
  const nodes: Node[] = [
    { cx: C, cy: C - R, Icon: DiscoverIcon }, // top
    { cx: C + R, cy: C, Icon: DesignIcon }, // right
    { cx: C, cy: C + R, Icon: BuildIcon }, // bottom
    { cx: C - R, cy: C, Icon: SupportIcon }, // left
  ];
  const ringPath = `M${C},${C - R} a${R},${R} 0 1,1 -0.01,0`;

  return (
    <svg
      viewBox="0 0 340 340"
      className={className}
      role="img"
      aria-label="A continuous delivery cycle: discover, design, build, support, repeating."
    >
      {/* faint guide ring */}
      <circle cx={C} cy={C} r={R} className="fill-none stroke-line-strong" strokeWidth={1.5} />
      {/* flowing current */}
      <circle
        cx={C}
        cy={C}
        r={R}
        className="flow-dash fill-none stroke-accent"
        strokeWidth={3}
        strokeDasharray="2 14"
        strokeLinecap="round"
      />
      {/* orbiting pulse dot */}
      <circle
        r={5}
        className="orbit-dot fill-accent"
        style={{ offsetPath: `path('${ringPath}')` }}
      />
      {/* brand mark in the center */}
      <image
        href="/brand/ads-icon.png"
        x={C - 34}
        y={C - 27}
        width={68}
        height={55}
        preserveAspectRatio="xMidYMid meet"
      />
      {/* nodes */}
      {nodes.map((n, i) => (
        <g
          key={i}
          className="node-pulse text-white"
          style={{ animationDelay: `${i * 0.6}s` }}
        >
          <circle
            cx={n.cx}
            cy={n.cy}
            r={31}
            className="fill-navy-700"
          />
          <circle
            cx={n.cx}
            cy={n.cy}
            r={31}
            className="fill-none stroke-accent-300/40"
            strokeWidth={1.5}
          />
          <n.Icon width={26} height={26} x={n.cx - 13} y={n.cy - 13} />
        </g>
      ))}
    </svg>
  );
}

/* Systems integration: external systems feeding a central hub, data in motion. */
export function IntegrationFlow({ className }: { className?: string }) {
  const hub = { x: 180, y: 150 };
  const outer = [
    { x: 56, y: 56, label: "CRM" },
    { x: 304, y: 56, label: "Payments" },
    { x: 56, y: 244, label: "Accounting" },
    { x: 304, y: 244, label: "Legacy DB" },
  ];
  return (
    <svg
      viewBox="0 0 360 300"
      className={className}
      role="img"
      aria-label="Separate business systems connected to a central hub, with data flowing between them."
    >
      {/* connectors with flowing data */}
      {outer.map((o, i) => {
        const mx = (o.x + hub.x) / 2;
        const my = (o.y + hub.y) / 2 + (o.y < hub.y ? -22 : 22);
        const d = `M${o.x},${o.y} Q${mx},${my} ${hub.x},${hub.y}`;
        return (
          <g key={i}>
            <path d={d} className="fill-none stroke-line-strong" strokeWidth={1.5} />
            <path
              d={d}
              className="flow-dash fill-none stroke-accent"
              strokeWidth={3}
              strokeDasharray="2 13"
              strokeLinecap="round"
              style={{ animationDelay: `${i * 0.35}s` }}
            />
          </g>
        );
      })}

      {/* outer system nodes */}
      {outer.map((o, i) => (
        <g key={i} className="node-pulse" style={{ animationDelay: `${i * 0.5}s` }}>
          <rect
            x={o.x - 28}
            y={o.y - 21}
            width={56}
            height={42}
            rx={10}
            className="fill-white stroke-line-strong"
            strokeWidth={1.5}
          />
          <text
            x={o.x}
            y={o.y + 4}
            textAnchor="middle"
            className="fill-navy-700"
            fontSize={11.5}
            fontWeight={600}
          >
            {o.label}
          </text>
        </g>
      ))}

      {/* central hub — the company mark */}
      <circle
        cx={hub.x}
        cy={hub.y}
        r={46}
        className="fill-white stroke-line-strong"
        strokeWidth={1.5}
      />
      <circle
        cx={hub.x}
        cy={hub.y}
        r={46}
        className="node-pulse-strong fill-none stroke-accent"
        strokeWidth={2}
      />
      <image
        href="/brand/ads-icon.png"
        x={hub.x - 30}
        y={hub.y - 24}
        width={60}
        height={48}
        preserveAspectRatio="xMidYMid meet"
      />
    </svg>
  );
}

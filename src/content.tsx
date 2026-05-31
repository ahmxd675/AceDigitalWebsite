import type { ComponentType, SVGProps } from "react";
import {
  AutomationIcon,
  CloudIcon,
  CodeIcon,
  DataIcon,
  IntegrationIcon,
  SupportIcon,
} from "@/components/icons";

export type Service = {
  id: string;
  title: string;
  summary: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  points: string[];
};

export const services: Service[] = [
  {
    id: "custom-software",
    title: "Custom software development",
    summary:
      "Applications built around your processes — not an off-the-shelf tool you have to bend your business around.",
    icon: CodeIcon,
    points: [
      "Internal tools and line-of-business systems",
      "Customer-facing portals and dashboards",
      "Replacing spreadsheets and manual workflows",
    ],
  },
  {
    id: "web-cloud",
    title: "Web & cloud applications",
    summary:
      "Fast, secure, responsive applications that run reliably in the cloud and scale as you grow.",
    icon: CloudIcon,
    points: [
      "Modern web apps and progressive web apps",
      "Cloud architecture and deployment",
      "Authentication, roles, and permissions",
    ],
  },
  {
    id: "integration",
    title: "Systems integration",
    summary:
      "Connect the tools you already use so data flows automatically and nothing is keyed in twice.",
    icon: IntegrationIcon,
    points: [
      "APIs between your existing systems",
      "Accounting, CRM, and payment integrations",
      "Data migration from legacy software",
    ],
  },
  {
    id: "automation",
    title: "Process automation",
    summary:
      "Take the repetitive, error-prone work off your team and let software handle it consistently.",
    icon: AutomationIcon,
    points: [
      "Automated workflows and approvals",
      "Scheduled jobs and notifications",
      "Document and report generation",
    ],
  },
  {
    id: "data",
    title: "Data & reporting",
    summary:
      "Turn the information already sitting in your business into clear, decision-ready insight.",
    icon: DataIcon,
    points: [
      "Dashboards and management reporting",
      "Data consolidation across sources",
      "Exports, analytics, and KPIs",
    ],
  },
  {
    id: "support",
    title: "Support & maintenance",
    summary:
      "We don't disappear at launch. We keep your software secure, current, and evolving with you.",
    icon: SupportIcon,
    points: [
      "Monitoring, updates, and security patches",
      "Enhancements as your needs change",
      "A team that already knows your system",
    ],
  },
];

export type Product = {
  name: string;
  status: "In development" | "Available" | "Planned";
  summary: string;
};

export const products: Product[] = [
  {
    name: "Operations Suite",
    status: "In development",
    summary:
      "A configurable platform for managing jobs, scheduling, and resources for service-based businesses.",
  },
  {
    name: "Client Portal",
    status: "In development",
    summary:
      "A white-label portal that gives your customers a secure place to view records, documents, and updates.",
  },
  {
    name: "Insight Dashboard",
    status: "Planned",
    summary:
      "Bring numbers from across your tools into one live view, with the metrics that matter to your team.",
  },
];

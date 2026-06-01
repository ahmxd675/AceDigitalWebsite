import type { ComponentType, SVGProps } from "react";
import {
  AutomationIcon,
  CloudIcon,
  CodeIcon,
  DataIcon,
  IntegrationIcon,
  PdfExcelIcon,
  SupportIcon,
  TeamIcon,
  WebsiteIcon,
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
      "Applications built around your processes, not an off-the-shelf tool you have to bend your business around.",
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
  tagline: string;
  status: "Available" | "In development" | "Planned";
  summary: string;
  features: string[];
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const products: Product[] = [
  {
    name: "PDF to Excel",
    tagline: "Built for accountants, useful in any sector",
    status: "Available",
    icon: PdfExcelIcon,
    summary:
      "Automated data extraction that turns PDF statements, invoices, and reports into a clean, ready-to-use spreadsheet, so no one re-keys figures by hand. Built first for accountants, it works for any team buried in PDFs.",
    features: [
      "Pulls data straight out of any PDF",
      "Accountant-ready export formats for Xero and Sage",
      "Works across sectors, from finance to logistics",
    ],
  },
  {
    name: "TeamLab",
    tagline: "Work together, in one place",
    status: "Available",
    icon: TeamIcon,
    summary:
      "A collaboration platform that keeps a team aligned: track individual progress, keep work moving, and talk in real time with built-in live chat.",
    features: [
      "Track individual progress",
      "Built-in live chat",
      "One shared place for the whole team",
    ],
  },
  {
    name: "Business Websites",
    tagline: "Professional sites that convert",
    status: "Available",
    icon: WebsiteIcon,
    summary:
      "Fast, modern websites built for businesses: designed to look the part, turn visitors into enquiries, and stay easy to maintain.",
    features: [
      "Custom design, built to convert",
      "Fast and mobile-first",
      "Easy to update and maintain",
    ],
  },
];

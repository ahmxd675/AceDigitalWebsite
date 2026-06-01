/*
  Icons come from Lucide (lucide-react) — the production-standard set used by
  shadcn/ui, Vercel, and others. We map them to project-semantic names here so
  the rest of the app imports stable names and we can swap an icon in one place.
*/
import {
  ArrowRight,
  Blocks,
  Boxes,
  ChartColumn,
  Check,
  Cloud,
  Compass,
  FileSpreadsheet,
  Handshake,
  Infinity as InfinityIcon,
  LayoutTemplate,
  Lightbulb,
  LifeBuoy,
  Network,
  PencilRuler,
  Search,
  Settings2,
  ShieldCheck,
  SquareCode,
  UsersRound,
  Workflow,
  type LucideProps,
} from "lucide-react";

const DEFAULTS: LucideProps = { strokeWidth: 1.75, absoluteStrokeWidth: true };

// Services
export const CodeIcon = (p: LucideProps) => <SquareCode {...DEFAULTS} {...p} />;
export const CloudIcon = (p: LucideProps) => <Cloud {...DEFAULTS} {...p} />;
export const IntegrationIcon = (p: LucideProps) => <Network {...DEFAULTS} {...p} />;
export const AutomationIcon = (p: LucideProps) => <Settings2 {...DEFAULTS} {...p} />;
export const DataIcon = (p: LucideProps) => <ChartColumn {...DEFAULTS} {...p} />;
export const SupportIcon = (p: LucideProps) => <LifeBuoy {...DEFAULTS} {...p} />;

// Value props
export const CompassIcon = (p: LucideProps) => <Compass {...DEFAULTS} {...p} />;
export const LayersIcon = (p: LucideProps) => <Boxes {...DEFAULTS} {...p} />;

// Delivery cycle
export const DiscoverIcon = (p: LucideProps) => <Search {...DEFAULTS} {...p} />;
export const DesignIcon = (p: LucideProps) => <PencilRuler {...DEFAULTS} {...p} />;
export const BuildIcon = (p: LucideProps) => <Blocks {...DEFAULTS} {...p} />;

// Products
export const PdfExcelIcon = (p: LucideProps) => <FileSpreadsheet {...DEFAULTS} {...p} />;
export const TeamIcon = (p: LucideProps) => <UsersRound {...DEFAULTS} {...p} />;
export const WebsiteIcon = (p: LucideProps) => <LayoutTemplate {...DEFAULTS} {...p} />;

// About principles
export const ClarityIcon = (p: LucideProps) => <Lightbulb {...DEFAULTS} {...p} />;
export const DurableIcon = (p: LucideProps) => <ShieldCheck {...DEFAULTS} {...p} />;
export const HonestIcon = (p: LucideProps) => <Handshake {...DEFAULTS} {...p} />;
export const LongRunIcon = (p: LucideProps) => <InfinityIcon {...DEFAULTS} {...p} />;

// Utility
export const IntegrateIcon = (p: LucideProps) => <Workflow {...DEFAULTS} {...p} />;
export const CheckIcon = (p: LucideProps) => <Check {...DEFAULTS} {...p} />;
export const ArrowRightIcon = (p: LucideProps) => <ArrowRight {...DEFAULTS} {...p} />;

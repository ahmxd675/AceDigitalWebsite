import Image from "next/image";

/*
  Brand logo, backed by the real assets in /public/brand (transparent PNGs).

  - LogoLockup : full horizontal lockup (octagon + "ACE DIGITAL SOLUTIONS").
                 Navy artwork, for light backgrounds (desktop header).
  - LogoIcon   : compact "ADS" octagon mark only. Works on light or dark.
  - LogoFooter : octagon mark + white wordmark text, for dark backgrounds.
*/

export function LogoLockup({ className }: { className?: string }) {
  return (
    <Image
      src="/brand/ads-horizontal.png"
      alt="Ace Digital Solutions"
      width={1599}
      height={464}
      priority
      className={className ?? "h-9 w-auto"}
    />
  );
}

export function LogoIcon({
  className,
  alt = "",
}: {
  className?: string;
  alt?: string;
}) {
  return (
    <Image
      src="/brand/ads-icon.png"
      alt={alt}
      width={577}
      height={465}
      className={className ?? "h-9 w-auto"}
    />
  );
}

export function LogoFooter({ className }: { className?: string }) {
  return (
    <span className={`flex items-center gap-3 ${className ?? ""}`}>
      <LogoIcon className="h-10 w-auto shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="font-serif text-[15px] font-semibold tracking-[0.14em] text-white">
          ACE DIGITAL
        </span>
        <span className="mt-1 flex items-center gap-2">
          <span className="h-px w-4 bg-white/40" aria-hidden />
          <span className="font-serif text-[10px] font-medium tracking-[0.34em] text-navy-100">
            SOLUTIONS
          </span>
        </span>
      </span>
    </span>
  );
}

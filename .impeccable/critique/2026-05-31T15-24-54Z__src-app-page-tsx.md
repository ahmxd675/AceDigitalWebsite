---
target: this website
total_score: 32
p0_count: 0
p1_count: 2
timestamp: 2026-05-31T15-24-54Z
slug: src-app-page-tsx
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Active nav + form success state; mailto can report success when no mail client opens |
| 2 | Match System / Real World | 4 | Plain, jargon-free language throughout |
| 3 | User Control and Freedom | 3 | Easy navigation; no cancel/reset on the one form |
| 4 | Consistency and Standards | 4 | Shared Section/Button/Eyebrow components; very cohesive |
| 5 | Error Prevention | 3 | Native validation; topic select defaults to first option |
| 6 | Recognition Rather Than Recall | 4 | Labeled nav, no icon-only patterns, active states |
| 7 | Flexibility and Efficiency | 3 | Multiple paths to contact; brochure site, few accelerators needed |
| 8 | Aesthetic and Minimalist Design | 3 | Clean and uncluttered, but eyebrow-on-every-section adds repeated noise |
| 9 | Error Recovery | 2 | Form "Thank you" shows even if the mail client never opened; no real error path |
| 10 | Help and Documentation | 3 | "What to expect" steps + service detail; no FAQ |
| **Total** | | **32/40** | **Good (upper) — usable & professional, but undifferentiated** |

## Anti-Patterns Verdict

**LLM assessment:** The craft is genuinely good (hairline `gap-px` divider grid, concentric octagon motif tied to the mark, real token system, no gradients). But the surface is guessable from its category. A competitor B2B software shop would describe their landing page identically: navy-on-white, serif headings + sans body, restrained palette, icon+heading+text cards, a tracked uppercase eyebrow over every section. That fails the brand register's inverse test. The dominant tell is the **eyebrow on every single section** (hero, value props, services, approach, products, every PageHeader, the CTA band) — the skill names this explicitly as AI grammar. Secondary tells: repeated identical card grids, em-dash cadence, and zero imagery on a brand surface.

**Deterministic scan:** `detect.mjs` flagged 1 issue — em-dash overuse (5 in `src/app/layout.tsx` metadata copy). Per-page files stay under the threshold individually, but the em-dash cadence recurs across all five pages' body copy.

## Overall Impression

This is a competent, trustworthy, well-engineered brochure site that does its job. Copy is clear, the component system is clean, and nothing is broken. The single biggest opportunity is **distinctiveness**: it reads as "safe B2B template" rather than "Ace Digital Solutions specifically." The brief was "classy, timeless, Microsoft-like, not AI-looking" — it landed on classy and timeless, but the execution lands inside the saturated AI-default lane for software-company sites.

## What's Working

1. **Consistent component system.** `Section`, `CtaBand`, `Button`, `Eyebrow` give every page the same rhythm. Highly predictable, zero visual drift.
2. **Restraint executed correctly.** Hairline borders, the `gap-px` divider grid for value props, the octagon motif echoing the logo — these are tasteful, intentional touches, not decoration.
3. **Copy clarity.** Plain language, no buzzwords, confident verbs. "Book a consultation," "We listen / We scope it / You decide." This is the strongest part of the site.

## Priority Issues

**[P1] Eyebrow over every section is the AI tell.** The tracked uppercase kicker ("Why Ace Digital Solutions", "What we do", "Our approach", "Our products"...) appears above nearly every heading. One named kicker as a deliberate system is voice; an eyebrow on every section is AI grammar. *Fix:* cut the eyebrow on most sections; let the serif H2 carry the section alone, or replace with one deliberate device. *Command:* `/impeccable quieter` or `/impeccable typeset`.

**[P1] The site is undifferentiated within its category.** Navy + white + serif + icon cards + eyebrows = the modal software-company landing page. *Fix:* commit to one strong, specific move (a distinctive type pairing off the Source superfamily, a committed color treatment in the hero, real imagery or a bespoke visual). *Command:* `/impeccable bolder`.

**[P2] Zero imagery on a brand surface.** Every page is type + icons + a CSS motif. No product screenshots, no photography, no bespoke visual. For a brand register this reads as incomplete, not as restrained. *Fix:* add real product UI screenshots (the Products page especially needs them) or a credible hero visual. *Command:* `/impeccable bolder`.

**[P2] mailto form reports success unconditionally.** `setSent(true)` fires regardless of whether the mail client opened, so users with no configured mail handler see "Thank you" while nothing was sent. *Fix:* wire to a route handler / form service (Resend, Formspree) — already a noted follow-up. *Command:* `/impeccable harden`.

**[P2] Em-dash cadence across all copy.** Recurs on every page; an AI-writing tell and a skill ban. *Fix:* replace with commas, colons, or periods. *Command:* `/impeccable clarify`.

## Persona Red Flags

**Jordan (First-Timer / prospective buyer):** Lands fine — the value props and "What to expect" steps answer the obvious questions. But there's no pricing signal, no case studies, and no proof (logos, testimonials, named work), so a cautious buyer has nothing concrete to trust before committing to a consultation. Products are all "In development"/"Planned" with no visuals, which can read as "nothing shipped yet."

**Riley (Stress Tester):** Submits the form with no mail client → sees "Thank you," nothing happens. Selects no topic → silently submits "Custom software" (first option). The success state can't be trusted.

**Casey (Mobile):** Works well — sticky header, hamburger with proper ARIA, h-11/h-12 buttons clear the 44px target. Minor: footer links (`text-sm`, `space-y-3`) are tight tap targets stacked closely.

## Minor Observations

- Services page numbers services 01–06, but services aren't an ordered sequence, so the numbering is decorative scaffolding. (The homepage Approach 01–04 *is* a real sequence — that numbering is earned.)
- `placeholder:text-muted/70` is roughly 2.9:1 on white — fails the 4.5:1 the skill requires for placeholder text.
- `--color-muted` (#6b7280) on `--color-paper` (#f7f7f4) is ~4.45:1, a hair under AA for the small uppercase labels sitting on paper backgrounds.
- No skip-to-content link for keyboard users.
- `scroll-behavior: smooth` has no `prefers-reduced-motion` guard.
- Source Serif 4 + Source Sans 3 is the same superfamily — a safe, very common open-source pairing; fine for the brief, but it doesn't add identity.

## Questions to Consider

- What would a version of this look like that a competitor *couldn't* describe with the same sentence?
- The brief said "not AI-looking" — what single bold, specific move would make a visitor ask "how was this built?" instead of "which template is this?"
- Products are the actual thing you sell — what would it take to show them instead of describing them?

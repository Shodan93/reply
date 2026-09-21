# Arclight Design System

## What this is

Arclight is a **fictional digital consulting & technology brand**, styled to sit in the same visual neighborhood as global digital-consulting firms (the kind of company behind postings like a "(Junior) Consultant Marketing Automation" role) — bold grotesk type, a dark/light contrast system, and a mosaic of saturated accent colors used as a graphic device — while using its own name, its own color values, and its own typeface pairing. Nothing here reproduces a real company's logo, exact colors, or copyrighted assets.

**Source provided:** a single job-posting URL (`reply.com/de/about/careers/.../JO-DEU-1996`, a Marketing-Automation/Dynamics-365 consultant role in Germany). No codebase, no Figma file, and no brand asset pack were attached. Per the brief, this is treated as a **from-scratch / brand-guidelines-only** build: the component inventory below is the standard primitive set (not enumerated from a source library), and there is **no real logo** — Arclight's wordmark is plain type, and no mark was invented.

Because no real asset pack exists to diverge from, "minimally different" here means: a consulting/tech brand with the *same genre* of visual language (confident grotesk headlines, black-and-paper base, a mosaic-tile accent motif, squared cards) built with an independent name, palette, and font pairing chosen for this project — see Visual Foundations below for the exact values and RNG-driven choices made.

## Products modeled

- **Marketing & careers website** — the only product implied by the source (a careers/job-detail page). The UI kit recreates this surface: homepage, a service page, the careers list, and a job-detail page shaped like the one in the source URL, plus an insights/article page (a section Arclight's site would plausibly have, matching the "Insights & Labs" nav pattern common to this genre of consulting site).

## Content fundamentals

- **Language:** bilingual DE/EN copy patterns, written in German where the source screen (job page) was German. Tone stays formal-professional (`Sie`-form) in German UI copy, matching B2B consulting norms; English copy uses plain, confident statements.
- **Voice:** declarative, capability-forward. Short subject-verb-object sentences ("Wir gestalten digitale Wandel." / "We build what's next."). No exclamation marks, no forced enthusiasm.
- **Casing:** Sentence case for body copy and UI labels; nav items and eyebrow labels use small caps or letter-spaced uppercase (`--ls-wide` token) for structure, not for whole sentences.
- **No emoji** anywhere in product or marketing copy — this is a formal B2B register.
- **Numbers & facts lead:** job listings, service descriptions, and stats are stated directly (e.g. "14.798 Mitarbeiter", "+€2,1 Mrd. Umsatz"-style facts) rather than dressed up with adjectives.
- **CTAs:** short verbs — "Mehr erfahren", "Jetzt bewerben", "Kontakt aufnehmen" — never "Learn more about our amazing...".

## Visual foundations

**RNG-assisted choices** (per project convention, drawn from small curated sets rather than defaulted): palette = *amber-violet* set, fonts = *Hanken Grotesk / Space Mono* pairing, name = *Arclight*.

- **Color:** a near-black ink (`--ink-900 #161616`) and warm paper white (`--paper #fdfdfa`) form the base — the same "confident black-and-white with one loud accent grid" structure this genre of consulting site uses. The accent grid is four saturated tones — violet `#6c4ce0` (primary), amber `#f2a93b`, teal `#00b894`, coral `#ff6b6b` — plus ink itself, used together as a **5-tile mosaic** (see Brand cards), never as a gradient. Only one accent (violet) is used for interactive states (links, primary buttons); the other three are reserved for the mosaic pattern and data/tag color-coding.
- **Type:** Hanken Grotesk throughout (display and body) — a grotesk sans with the same geometric, slightly condensed character as the reference genre's headline type — set at tight letter-spacing and tight line-height at display sizes (`--ls-tight`, `--lh-tight`), loosening to `--lh-relaxed` for paragraphs. Space Mono is the mono face, used only for job/req codes, dates, and tags (e.g. `JO-DEU-1996`), never for body copy.
- **Backgrounds:** flat color fields, no photography required to read a section — sections alternate paper, ink (inverse/dark hero), and the mosaic tile pattern as full-bleed section backers. No gradients anywhere in the system. No hand-drawn illustration; the mosaic grid of solid-color rectangles is the brand's one recurring graphic device, standing in for photography/illustration on hero and section-break moments.
- **Animation:** minimal and functional only — 120–200ms ease-out fades/opacity and small translateY(4px) entrances on hover/reveal (`--dur-fast`/`--dur-normal`, `--ease-out`). No bounce, no elastic easing, no parallax.
- **Hover states:** primary buttons and links darken to `--accent-primary-hover` (violet-700); secondary/outline buttons fill from transparent to `--ink-900` at 6–8% tint via `--surface-sunken`. No lightening-on-hover.
- **Press states:** buttons drop opacity slightly and translateY(1px); no scale/shrink transforms.
- **Borders:** hairline `1.5px` (`--border-w`) solid borders in `--border-subtle` (light) or `--border-strong` (ink) — never soft/blurred borders. Cards on paper backgrounds use a border, not a shadow, as the primary separation device.
- **Shadows:** reserved for elevated/overlay surfaces only (dialogs, dropdowns, toasts) — `--shadow-sm/md/lg`, all soft and low-opacity black, never colored. Flat cards in normal flow use borders, not shadows.
- **Radius:** small and consistent — `--radius-sm 4px` for inputs/tags, `--radius-md 8px` for buttons/cards, `--radius-lg 16px` only for large feature panels, `--radius-pill` for pills/badges. Nothing fully round except pills and the mosaic pattern stays hard-edged squares (no rounding on mosaic tiles — that squareness is deliberate brand geometry).
- **Transparency/blur:** used sparingly — only on sticky nav (backdrop-blur + ~92% opacity paper) and modal scrims (ink at 60% opacity). Never on cards or body content.
- **Imagery color vibe:** cool-neutral, editorial — when photography is used (see UI kit placeholders), it should read desaturated/cool rather than warm, to sit against the paper/ink base without competing with the accent mosaic.
- **Layout:** a 1240px max-width container, 24px gutter, section rhythm on the 8px spacing scale in `spacing.css`. Sticky top nav; footer is dense with link columns (matches the source page's long footer link structure).

## Iconography

No icon font, sprite sheet, or icon SVGs were provided with the source material. Icons in this system use **Phosphor Icons** (CDN, `unpkg.com/@phosphor-icons/web`), regular weight, matched to the grotesk type's geometric, slightly rounded-terminal character — flagged here as a **substitution**, not a brand-original set. No emoji used as icons or content. No unicode glyphs used as icons (arrows/chevrons in nav use inline SVG chevrons only, kept minimal). See `assets/` for the CDN reference and `guidelines/iconography.html` for usage.

## Sources

- Job posting (only material provided): `https://www.reply.com/de/about/careers/de/job-details/JO-DEU-1996` — used only for genre/tone/structure cues (nav taxonomy shape, footer structure, formal DE tone, careers/job-detail page pattern). No text, logo, or imagery from this page is reproduced.
- No Figma file, codebase, or asset pack was attached. If one exists, attach it via the Import menu and this system should be revisited to align exactly rather than by genre.

## Index

**Tokens** (`tokens/`, imported by root `styles.css`): `colors.css`, `typography.css`, `spacing.css`, `effects.css` (radius/shadow/motion).

**Components** (`components/<group>/`, each with `.jsx` + `.d.ts` + `.prompt.md` + a `.card.html`):
- `core/` — Button, IconButton, Card, Badge, Tag
- `forms/` — Input, Select, Checkbox, Radio, Switch
- `navigation/` — Tabs
- `feedback/` — Dialog, Toast, Tooltip

**Intentional additions:** none beyond the standard primitive set — no source library was provided, so this is the from-scratch standard set sized to a consulting-site's needs (marketing pages + careers flow).

**Guidelines** (`guidelines/`): color, type, spacing, radius, brand (mosaic pattern, wordmark, card treatments), iconography specimen cards.

**UI kit** (`ui_kits/marketing-site/`): `index.html` (interactive click-through), `Chrome.jsx` (header/footer), `Mosaic.jsx` (brand tile pattern), `HomeScreen.jsx`, `ServicesScreen.jsx`, `CareersScreen.jsx` (list + filters), `JobDetailScreen.jsx` (shaped like the source job-posting URL), `InsightsScreen.jsx`.

**Assets** (`assets/`): `icons-cdn.txt` — Phosphor Icons CDN reference (no icon set was provided to copy in).

**Other:** `thumbnail.html` (homepage tile), `SKILL.md` (Claude Code-portable skill version of this system).

## Fonts — flag for the user

Hanken Grotesk and Space Mono are loaded from **Google Fonts CDN** (`tokens/typography.css`), not self-hosted binaries — there is no real brand font file to match, since no source asset pack was given. If you have real brand font files, attach them and this system will switch to local `@font-face` with the real binaries.

# EVRYWHR — Brand Guide

The single source of truth for the EVRYWHR identity: colors, type, voice, and
usage. Every value below is the *actual* value running on the live site
(`data.js` palette/font system + `app.jsx` defaults), not an approximation.

> **One-liner:** EVRYWHR is a creative travel studio — films, photographs,
> objects and sound from the gap between a place's reputation and its reality.

---

## 1 · Logo & wordmark

- The studio name renders as **EVRYWHR** everywhere (no vowels, all caps).
- Set in **Cormorant Garamond** (serif) — this is the logo face.
- Don't restyle, recolor per-letter, add effects, or spell out "Everywhere"
  in body copy. If the full word is ever needed, confirm first.
- Logo asset: `assets/logo-evrywhr.png`. Variants in `assets/logo-variants/`.

---

## 2 · Color

The system is a **two-color, same-hue** model. For each accent there's a deep
shade (`accent`, for text + buttons where contrast matters) and a light shade
(`accentFill`, for blocks/fills). The site ships in the **Field** palette,
**light ("archive")** mode by default.

### Default palette — "Field" (periwinkle + lore-lime)

| Role | Hex | Use |
|------|-----|-----|
| **Accent** (blue, deep) | `#41539e` | Primary text accent, buttons, links |
| **Accent fill** (blue, light) | `#a4b8e8` | Periwinkle fill blocks |
| **Accent 2** (olive, deep) | `#54611f` | Secondary text accent |
| **Accent 2 fill** (lime, light) | `#e6ed9b` | Lore-lime highlight blocks |
| On-accent-2 text | `#14241a` | Text sitting on lime fills |

### Neutrals — light mode ("archive")

| Role | Value (oklch) | ~Hex |
|------|---------------|------|
| Background | `oklch(0.984 0.004 170)` | warm off-white `#f8faf8` |
| Surface | `oklch(1 0 0)` | white |
| Surface 2 | `oklch(0.952 0.010 168)` | pale mint-grey |
| Ink (text) | `oklch(0.26 0.022 165)` | near-black green-grey |
| Muted text | `oklch(0.48 0.018 168)` | mid green-grey |
| Hairline | `oklch(0.26 0.022 165 / 0.13)` | ink @ 13% |

### Neutrals — dark mode ("signal")

| Role | Value (oklch) |
|------|---------------|
| Background | `oklch(0.215 0.022 198)` |
| Surface | `oklch(0.262 0.024 198)` |
| Surface 2 | `oklch(0.312 0.026 196)` |
| Ink | `oklch(0.94 0.012 175)` |
| Muted | `oklch(0.72 0.018 180)` |
| Hairline | `oklch(1 0 0 / 0.14)` |

In dark mode the accents brighten: blue `#a4b8e8`, lime `#e6ed9b`.

### Alternate palettes (selectable via Tweaks)

- **Canyon** — ocean + fern, softer/bluer. Accents `#1E84B8` / `#2FA15A`.
- **Tide** — cobalt + pine, the bluest. Accents `#2C72CC` / `#1F9D6B`.

> **Rule:** never introduce a color outside this system. Need a new tone?
> Derive it in the same hue family (oklch, low chroma for neutrals).

---

## 3 · Typography

| Role | Family | Notes |
|------|--------|-------|
| **Logo** | Cormorant Garamond | serif, the wordmark |
| **Display / headlines** | Cormorant Garamond | weight 400, large serif |
| **Body / UI** | Montserrat | `system-ui` fallback |
| **Mono / labels** | Montserrat | uppercase, wide letter-spacing (≈0.14–0.16em) for kickers & eyebrows |

Fallback stacks (from `data.js`):
- Cormorant Garamond → `Georgia, serif`
- Montserrat → `system-ui, sans-serif`

Alternate display faces available in the system: **Syne**, **Hanken Grotesk**.

**Type conventions**
- Small labels/eyebrows: Montserrat, uppercase, letter-spacing ~0.14em, muted color.
- Headlines: Cormorant Garamond, regular weight (400) — let the size carry it,
  not bold.
- Keep 1–3 type roles per view. Don't add new families.

---

## 4 · Voice & tone

**Positioning:** A creative travel studio that makes films, visuals, objects
and sound rooted in curiosity, place, and perspective.

**The core idea (manifesto):**
> "We don't travel to confirm what we already believe. We go to leave a little
> less certain, a little more curious, and a lot more connected."

**Tagline (live):**
> "The world is worth understanding, not just visiting."

**Hero sub (live):**
> "A creative studio for travel-inspired storytelling — we produce films,
> visuals, artwork, and cultural projects rooted in curiosity, place, and
> perspective."

### Voice key
- **Curious, not authoritative.** We ask questions and admit what we don't know.
- **Concrete over abstract.** Specific places, objects, moments — never vague
  "wanderlust" language.
- **Punchy and lightly irreverent.** "Chaos, on purpose." Confident but never
  corporate.
- **Honest.** Real gear that survived, routes you can actually follow, the
  distance between a place's reputation and its reality.

### Avoid
- Corporate filler ("we are passionate about…", "leverage", "solutions").
- Stat-padding and invented numbers.
- Generic travel-brochure adjectives (breathtaking, hidden gem, bucket-list).
- Emoji (not part of the brand).

---

## 5 · Imagery

- Photography-led: real frames from real trips. Full-bleed where it earns it.
- 16:9 is the default crop for project covers/films; fine-tune with
  `object-position`.
- A subtle film **grain** overlay (on by default) sits over the UI — part of
  the texture, kept light (~0.05 opacity in light mode).
- Don't use stock photography or AI imagery. Where a real asset isn't in yet,
  use a labeled placeholder rather than filler.

---

## 6 · Layout & feel

- Generous whitespace; editorial, magazine-like rhythm. Density is tunable
  (compact 28 / regular 52 / airy 88 — regular is default).
- Hairline rules (1px, ink @ 13%) separate meta blocks — no heavy borders.
- Corners are nearly square (radius ~3px), not pill-rounded cards.
- Navigation order: **Lore · Projects · Dispatches · Work With Us · Shop**.
- "The Lore" replaces a conventional About page — a draggable world of
  field-record cards. Personality lives here.

---

## 7 · Where the brand lives in code

- **Colors & fonts:** `data.js` → `PALETTES`, `FONTS`, `buildTheme`.
- **Default theme + homepage copy:** `app.jsx` → `TWEAK_DEFAULTS` block.
- **Content (projects, shop, dispatches):** `data.js` + `data-ext.js`.
- Changing a palette or font value in `data.js` updates the whole site.
- Full copy inventory (every editable text slot + length limits) lives in
  `EVRYWHR - Copy Brief for Brand Agent.md`.

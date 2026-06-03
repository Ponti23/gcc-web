# GraceWeb Brand Kit — Handoff for Claude Code

> A reusable brand system for Grace Community Church — designed for use on the new website, in sermon slides, on print collateral, and on merch.

This document is the canonical specification of the brand. If you're a developer (or Claude Code) building the website, read this first. The accompanying `index.html` is the live visual reference — open it in a browser to see everything in context, and toggle palettes / type pairings via the Tweaks panel.

---

## 1. Brand essence

An everyday church for everyday people. Four operating values:

- **Refined** — quiet confidence. Whitespace is a value, not a flaw.
- **Rooted** — the leaf isn't decoration. It signals growth, life, scripture rooted.
- **Welcoming** — warm greens, soft creams, conversational copy. Never formal, never flippant.
- **Timeless** — built to look right in a print bulletin, on a tee, and on a phone five years from now.

---

## 2. Logo system

The mark is **GCC + two leaves above the second C**. Six approved lockups exist; pick the one that fits the use case:

| Lockup | Use |
|---|---|
| Primary | Default. Has wordmark "Grace Community Church" below GCC. Use wherever there's room. |
| Monogram | GCC + leaves only. For favicon, profile picture, tee chest print, small contexts. |
| Circular badge | Mark inside a ring. Stickers, embroidery patches, profile circles. |
| Horizontal | Mark left, wordmark stacked right. Web headers, email signatures, banners. |
| Reversed | Cream version on green/dark. |
| Single-color (mono) | Solid ink. For one-color print, embossing, single-color merch. |

**Clear space:** padding equal to the height of one leaf on every side.
**Minimum digital size:** 32 px tall (monogram only).
**Minimum print size:** 20 mm tall (full lockup).

**Never:** stretch, rotate, recolor outside palette, add shadow, place on busy imagery, outline / hollow.

The SVG source for each lockup lives in `logo.jsx` (`GCCMark`, `GCCBadge`, `GCCHorizontal`, `LeafIcon`, `SingleLeaf`). A downloadable SVG pack is available from section 18 of the canvas.

---

## 3. Color palette

Three palettes are shipped. **Heritage Forest** is the canonical / default; the others are explorations.

### Heritage Forest (default)
```
--brand-green:   #2D5A3D   /* Primary */
--brand-deep:    #1F3D2A   /* Deep — for dark surfaces */
--surface:       #D5DCD0   /* Sage — light surface */
--paper:         #F8F5EE   /* Cream — base background */
--brand-accent:  #C97B5C   /* Clay — single accent */
--ink:           #1A1F1B   /* Text */
```

### Garden Bloom (alternate, warmer)
```
--brand-green:   #6B7F3F   --brand-deep:    #243B26
--surface:       #EDE5D2   --paper:         #FAF8F2
--brand-accent:  #C58F8A   --ink:           #221E18
```

### Stillwater (alternate, quieter)
```
--brand-green:   #1F4A3D   --brand-deep:    #2A3A33
--surface:       #E8EDE6   --paper:         #FFFCF5
--brand-accent:  #C9A961   --ink:           #15201A
```

Use only one palette across a single surface (don't mix). Accent should be used sparingly — for emphasis, links, single highlights — never for body text or as a primary background.

WCAG contrast is computed live in section 17 of the canvas. Notable combinations:
- Ink on Paper: AAA
- Paper on Green/Deep: AAA
- Green on Paper: passes AA for body text
- Accent on Paper: AA for large text only — never use for body copy

---

## 4. Typography

Three pairings ship. **Heritage** is the default.

### Heritage (default)
- **Display:** Playfair Display — weights 400 / 600 / 700. Serif headlines.
- **Body:** Source Sans 3 — weights 400 / 500 / 600. Warm sans body.
- **Mono:** JetBrains Mono — weights 400 / 500. Labels, captions, eyebrow text.

### Modern
- Manrope for everything. Cleaner, more contemporary.

### Sanctuary
- **Display:** EB Garamond (book serif)
- **Body:** DM Sans

### Type scale (rough)
- Display XL: 88px / 0.95
- Display L: 48–64px / 1.0
- Display M: 32–36px / 1.05
- Body L: 16px / 1.55
- Body: 14px / 1.55
- Caption / eyebrow: 10–11px, mono, letter-spacing 0.18–0.22em, all caps

### Voice in type
- Italic Playfair for poetic emphasis (`<em>people.</em>`, `<em>come.</em>`)
- Mono for system labels, dates, addresses, eyebrow text
- Never bold for emphasis — use italic display, or color

---

## 5. The leaf motif

The two-leaf-on-a-stem mark from the logo can be lifted out as a standalone graphic. Use it for:
- End-of-article marks
- Section dividers
- Embroidery patches
- Section markers in printed materials
- As a pattern background (see section 6)

Sizes available: 32, 48, 70, 100, 140 px. Don't go smaller than 16 px.
Approved colorways: green-on-paper, deep-on-sage, paper-on-green, accent-on-deep, paper-on-accent.

---

## 6. Pattern

Repeating leaf pattern at **15% opacity max**. Use for:
- Tote linings
- Title-slide backdrops
- Gift-card backs
- Social-post fills behind text

Never as foreground or with opacity above 25%. Implemented as inline SVG `<pattern>` — see `patterns.jsx`.

---

## 7. Voice & tone

**We sound like a friend who's glad you came.** Plain over churchy. Specific over vague.

| Trait | Not |
|---|---|
| Warm | Cold |
| Plain | Jargon |
| Specific | Vague |
| Inviting | Hyped |

### Example rewrites
- ✅ "New here? Come at 9:50, grab a coffee, sit anywhere. We'll save you a seat."
- ❌ "We warmly invite all guests to join us for our weekly worship celebration."

- ✅ "This Sunday: what does it mean to actually love your neighbour when they're loud?"
- ❌ "Join us as Pastor Dawson unpacks the deep biblical truths of Christian neighbourliness."

---

## 8. Social templates

Three core templates:
1. **Square post** (1080×1080) — green background, white type, eyebrow mono label top
2. **Story** (1080×1920) — sage background, dark display headline, mono date stamp
3. **Event card** — split: green top with title + leaf, paper bottom with date + venue + RSVP

A dedicated **Scripture / quote template** (section 16) is the social workhorse — italic Playfair, mono reference, leaf glyph bottom-right.

---

## 9. Merch

Approved items: **t-shirt** (forest deep, paper cream), **hoodie** (ink), **tote** (natural canvas, green canvas).

Placement rules:
- Tee front: center chest, mark only (no wordmark), ~100mm wide
- Tee back: large below neckline, full sermon line or short scripture
- Hoodie: small left-chest or centered mark
- Tote: centered, primary lockup

Never use the accent (clay) as a garment base color.

---

## 10. Print collateral

Four templates ship:
- **A4 letterhead** — logo top-left, address top-right mono, signature leaf bottom-right
- **Business card** (90×55mm) — front: logo + name + role; back: solid green with pattern + italic tagline
- **A5 bulletin / order of service** — single column, dashed dividers, mono numbering
- **DL welcome card** — green with pattern overlay, "We saved you a seat"

---

## 11. Web components (this is the most relevant section for development)

The website should expose these primitives. See `web-components.jsx` for visual reference.

### Buttons
- **Primary:** filled `--brand-green`, paper text, 14px font, 600 weight, 14×24px padding, arrow suffix.
- **Secondary:** transparent, 1.5px `--brand-green` border, green text, 12×22px padding.
- **Ghost / link:** mono uppercase 11px, 0.2em letter-spacing, 1.5px bottom-border green, arrow suffix.

### Nav
Horizontal lockup left, plain text links (13px, 500 weight, 28px gap), primary button "Visit" right.

### Sermon card
- Header (160px) with `--brand-deep` background, leaf pattern at 20% opacity, week number top-left mono, title bottom in display italic.
- Body: mono date + speaker, body description (13px), ghost button "Listen".

### Event list item
Grid `60px 1fr auto`. Day-month stack on left (mono day, display number, mono month), title + venue middle, "RSVP →" mono right.

### Giving block
Solid `--brand-green` with leaf pattern 8% opacity. Mono "GIVE" eyebrow, display headline with italic, paper-bg button "Give online".

### Email signature
HTML table-based (Gmail/Outlook compatible) — see section 15. Logo left with 2px green right-border divider, name in Georgia bold, role in 11px letter-spaced caps, contact info, website link in green.

---

## 12. Presentation / sermon slides

Seven layouts in `powerpoint.jsx`:
1. **Title** — deep background, pattern 18%, eyebrow date top-left, big display headline left-aligned, attribution bottom-right
2. **Section break** — green background, centered, "PART TWO" eyebrow, display headline, thin rule under
3. **Scripture** — paper background, oversized quote mark, italic verse, mono reference in green
4. **Content / list** — eyebrow + display headline, numbered list with green mono numbers
5. **Announcement** — sage background, eyebrow "WHAT'S ON", display headline with italic emphasis, leaf glyph
6. **Livestream lower-third** — deep band bottom, leaf glyph + display name + mono role caps
7. **Closing** — green background, monogram centered, italic "See you next Sunday", website mono caps

All slides 16:9 (1920×1080).

---

## 13. Photography direction

**Real people, real light, real moments.** Window light, hands, candid faces, kids mid-chaos. Tight crops. Embrace imperfection.

### Overlay recipe (for any iPhone photo)
1. Warm white balance (+5)
2. Slight desaturation (−10)
3. Lift shadows (+15)
4. 8% forest-green overlay, multiply blend
5. Light film grain (5%)

### Don't
Stock photos. Posed "diverse smiling group" shots. Heavy filters. Overhead worship-hands clichés.

---

## 14. CSS custom properties (drop-in for the website)

```css
:root {
  /* Heritage Forest palette */
  --brand-green: #2D5A3D;
  --brand-deep:  #1F3D2A;
  --surface:     #D5DCD0;
  --paper:       #F8F5EE;
  --brand-accent:#C97B5C;
  --ink:         #1A1F1B;
  --ink-soft:    rgba(26, 31, 27, 0.6);

  /* Heritage typography */
  --brand-display: 'Playfair Display', Georgia, serif;
  --brand-body:    'Source Sans 3', system-ui, sans-serif;
  --brand-mono:    'JetBrains Mono', ui-monospace, monospace;
}

body {
  background: var(--paper);
  color: var(--ink);
  font-family: var(--brand-body);
  font-size: 16px;
  line-height: 1.55;
}

h1, h2, h3 {
  font-family: var(--brand-display);
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--brand-deep);
}

em { font-style: italic; color: var(--brand-green); }

.eyebrow {
  font-family: var(--brand-mono);
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--ink-soft);
}
```

---

## 15. File structure

```
index.html               – Live canvas, opens in browser
app.jsx                  – Composes all sections
logo.jsx                 – GCCMark, GCCBadge, GCCHorizontal, LeafIcon, SingleLeaf
palettes.jsx             – PALETTES dict, PaletteCard
typography.jsx           – TYPE_SETS dict, TypeCard
patterns.jsx             – LeafPattern, PatternSection
photography.jsx          – PhotographyDirection
powerpoint.jsx           – Slide templates
print.jsx                – Letterhead, business card, bulletin, welcome card
web-components.jsx       – Buttons, nav, sermon card, event list, giving block
social.jsx               – Instagram square, story, event card
merch.jsx                – Tee, hoodie, tote
extras.jsx               – Email sig, scripture, accessibility, logo pack
assets/logo-original.jpg – Original supplied logo (reference only)
```

The logo SVGs are **the canonical source**. Don't trace from the JPG.

---

## 16. Open issues / next decisions

- Lock in a final palette (Heritage assumed)
- Lock in a final type pairing (Heritage assumed)
- Replace the SVG re-draw of the logo with a designer vector if available
- Decide on French / dual-language requirements (currently English only)
- Photography shoot — assets here are placeholder image-slots

---
version: 1
name: Jason Kng Resume
description: >
  A flat, square, single-accent resume site in the spirit of IBM's Carbon Design System:
  white and light-grey bands, charcoal type, one blue accent, IBM Plex Sans at light weight
  for very large display type. No gradients, no shadows at rest, no glass, no ornaments.

colors:
  accent: "#0f62fe"          # the only chromatic colour: primary buttons, links, active nav, contact band
  light:
    canvas: "#ffffff"
    surface-1: "#f4f4f4"     # alternate section bands, chips, scrolled navbar
    surface-2: "#e0e0e0"     # hover/pressed tone step
    ink: "#161616"           # all running text
    ink-muted: "#525252"     # dates, secondary notes
    highlight: "accent 10% on white"   # filtered achievements
    code-bg: "#161616"
    footer-bg: "#161616"
  dark:
    canvas: "#161616"
    surface-1: "#262626"
    surface-2: "#393939"
    ink: "#f4f4f4"
    ink-muted: "#c6c6c6"
    accent-text: "accent mixed 45% with white"   # links/focus on dark ground (AA contrast)
    code-bg: "#262626"
    footer-bg: "#000000"

typography:
  family: IBM Plex Sans (300, 400, 600); IBM Plex Mono only inside real code
  hero-name:    { size: "clamp(4.25rem, 19.5vw, 20rem)", weight: 300, leading: 0.9, tracking: -0.05em }
  section-head: { size: "48 / 72 / 96px", weight: 300, leading: 0.95, tracking: -0.04em }
  statement:    { size: "24 / 36px", weight: 300, max: "~25 words" }
  title:        { size: "30–36px", weight: 300 }
  body-lg:      { size: "18–20px", weight: 400, leading: 1.5 }
  body:         { size: "16px", weight: 400, leading: 1.5, tracking: 0.16px }
  small:        { size: "14px", weight: 400 }

shapes:
  radius: 0                  # every button, chip, panel and image
spacing:
  base: 4px
  section: "clamp(5rem, 11vw, 9rem)"
  gutter: "16–32px page margins; Bootstrap g-4 on phones, g-5 from lg"
---

# Design rules

Sources: the IBM (Carbon) DESIGN.md from [awesome-design-md](https://github.com/VoltAgent/awesome-design-md) for palette, type and shapes;
[taste-skill](https://github.com/Leonxlnx/taste-skill) house rules for composition; [Vercel Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines)
for code-level UI quality. All MIT licensed.

## Page rhythm

Hero (canvas) → About (band) → Experience (canvas) → Skills (band) → Education (canvas) → Contact (accent field) → Footer (charcoal).
Neighbouring sections never share a layout:

| Section | Composition |
| --- | --- |
| Hero | Name across the full width; title, one supporting sentence and one primary action on the left; the stack as a real `<code>` block on a charcoal field on the right (hidden on phones). |
| About | One statement paragraph at statement size, one body paragraph, then four large numerals with short labels. No cards. |
| Experience | Technology filter (the page's one interactive feature), then each employer as a 4/8 split: company and span on the left, roles and achievements on the right. Consecutive roles at one company share a heading. |
| Skills | A spec sheet: a `<dl>` grid of group name over a comma-separated list in light 24px type. |
| Education | Two plain text columns. |
| Contact | The only section that changes the whole field colour: flat accent, white type, white button. |
| Footer | Charcoal close with the name returning at full width. |

## Do

- Use flat colour and tone steps (`canvas` → `surface-1` → `surface-2`) to separate things.
- Keep running text in full `ink`; use `ink-muted` only for dates and secondary notes.
- Keep every heading to two lines or fewer at every width (check at 1440, 768 and 390px).
- Set buttons square (`radius: 0`), Carbon proportions (48px tall, 12 × 16px padding), Title Case labels.
- Animate only `transform` and `opacity`; stagger section parts by 60–90ms; honour `prefers-reduced-motion`.
- Use `font-variant-numeric: tabular-nums` (`.tabular`) for dates and figures.
- Mark technology names and code with `translate="no"`.

## Don't

- No gradients (backgrounds, buttons or text), no drop shadows on things at rest, no glows, no backdrop blur.
- No small uppercase labels or pill badges above headings; put the information in the heading or first sentence.
- No hairline dividers, outlined boxes or grid lines.
- No icon-topped cards or rows of identical cards.
- No violet/indigo or a second accent colour.
- No monospace outside real code.
- No more than two typefaces (Plex Sans + Plex Mono for code).

## Verify

```bash
npx playwright-cli open http://localhost:4200
npx playwright-cli set-reduced-motion reduce   # show all content without waiting for scroll animations
npx playwright-cli resize 1440 900             # then 768 1024 and 390 844
npx playwright-cli screenshot --full-page --filename=shot.png
npx playwright-cli set-media print             # preview "Save as PDF"
```

Check each screenshot for: horizontal overflow, headings over two lines, content that failed to appear,
and anything on this page that breaks a rule above.

---
version: 2
name: Jason Kng Resume
description: >
  A modern developer-portfolio layout: a sticky sidebar (name, title, section nav, links) beside
  a scrolling content column. Geist type at sensible sizes, soft rounded cards, pill chips and
  buttons, subtle borders, one blue accent, light and dark themes.

colors:
  accent: "#2563eb"          # primary buttons, links, focus, active chips, filter highlights, contact card tint
  light:
    canvas: "#ffffff"
    surface-1: "#f6f7f9"     # cards, hover rows, soft buttons
    surface-2: "#eceef2"     # hover/pressed step
    border: "#e4e7ec"
    ink: "#0f172a"           # headings and key text
    ink-muted: "#556070"     # body copy, dates, labels (AA on white)
    code-bg: "#0f172a"
  dark:
    canvas: "#0b0f17"
    surface-1: "#121826"
    surface-2: "#1a2232"
    border: "#1f2937"
    ink: "#e6e9ef"
    ink-muted: "#98a2b3"
    accent-text: "accent mixed 40% with white"
    code-bg: "#121826"

typography:
  family: Geist (400, 500, 600); Geist Mono only inside the code window
  name:          { size: "36px phone / 48px desktop", weight: 600, tracking: tight }
  section-title: { size: "24px", weight: 600 }
  statement:     { size: "20–24px", weight: 500 }
  body:          { size: "15–18px", weight: 400, leading: 1.6 }
  meta:          { size: "13–14px", weight: 500 }

shapes:
  card-radius: 16px          # .card-soft, experience rows on hover, code window (contact card 20px)
  control-radius: pill       # buttons with .btn-pill, chips
spacing:
  section: "clamp(3.5rem, 7vw, 6rem)"
  page-padding: "24px phone / 40px tablet / 48px desktop"
---

# Design rules

## Layout

- **Desktop (≥ 992px):** Bootstrap `col-lg-5` sidebar + `col-lg-7` content inside `container-xl`.
  The sidebar (`app-sidebar`) is `position: sticky; height: 100vh` and holds the name, title,
  availability, tagline, Email/Save as PDF buttons, the section nav (line indicator grows on the
  active section) and the social links + theme toggle at the bottom.
- **Phones and tablets:** the sidebar renders as the intro at the top; a slim fixed top bar
  (`app-navbar`) carries the theme toggle and a dropdown menu. Its name fades in after scrolling.
- Sections in the content column: About (statement, stat cards, code window) → Experience
  (technology filter, date + content rows) → Skills (group label + pill chips) → Education
  (date + content rows) → Contact (accent-tinted card) → small footer line.

## Do

- Keep the name at normal heading size; the content, not the name, carries the page.
- Use tokens (`var(--surface-1)`, `tw:text-muted`...) for every colour; never hard-code a grey.
- Use `.card-soft` for tiles, `.chip` for technologies, `.btn-accent` / `.btn-soft` / `.btn-quiet`
  (add `.btn-pill`) for actions.
- Keep hover feedback subtle: tone step + border, no jumps in layout.
- Animate only `transform` and `opacity` (plus colour transitions on hover); honour
  `prefers-reduced-motion`.
- Use `.tabular` for dates and figures, `translate="no"` on technology names and code.
- Keep every heading to two lines or fewer at 1440, 768 and 390px.

## Don't

- No oversized display type or full-width name treatments.
- No gradients, glowing blobs or heavy drop shadows; depth comes from tone steps and borders.
- No second accent colour.
- No monospace outside the code window.

## Verify

```bash
npx playwright-cli open http://localhost:4200
npx playwright-cli set-reduced-motion reduce   # show all content without waiting for scroll animations
npx playwright-cli resize 1440 900             # then 768 1024 and 390 844
npx playwright-cli screenshot --full-page --filename=shot.png
npx playwright-cli set-color-scheme dark       # check dark mode
npx playwright-cli set-media print             # preview "Save as PDF"
```

Check each screenshot for horizontal overflow, content that failed to appear, the sidebar staying
in place while scrolling on desktop, and anything that breaks a rule above.

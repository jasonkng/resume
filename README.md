# Jason Kng — Resume Site

A single-page resume built with **Angular 22**, **Bootstrap 5.3** and **Tailwind CSS 4**: a modern split layout with a
sticky sidebar (name, title, section nav, links) beside a scrolling content column, set in Geist with soft cards and pill
chips. The design rules live in [`DESIGN.md`](DESIGN.md).
It is purely frontend: no backend, no database. Every push to `main` deploys it to GitHub Pages for free.

**Live:** https://jasonkng.github.io/resume/

Features: a **technology filter** on the experience section (pick a technology to highlight every achievement that
mentions it; the choice is kept in the URL, e.g. `?skill=Kubernetes`, so a filtered view can be shared), light/dark mode
(remembers your choice), scroll-in animations (disabled for users who prefer reduced motion), active-section navbar,
mobile menu, and a **Save as PDF** button that prints a clean, light version of the page.

## Run it locally

Requires Node 24 (pinned in `.nvmrc`).

```bash
nvm use          # or install Node 24 another way
npm ci
npm start        # http://localhost:4200
```

Other commands: `npm run build` (production build into `dist/resume/browser`) and `npm test` (Vitest unit tests).

## Customize it

### 1. Content: `src/app/data/resume.data.ts`

Everything on the page comes from this one typed file: name, title, tagline, links, summary, highlight stats,
skills, jobs and education. Edit it and save; TypeScript will flag a missing or misspelled field.

| Want to…                         | Do this                                                                  |
| -------------------------------- | ------------------------------------------------------------------------ |
| Add a job                        | Add an object to `experience` (newest first). Omit `end` for your current role. |
| Add a skill group                | Add `{ name, skills }` to `skillGroups`.                                 |
| Change the experience filter     | Edit each job's `tech` list. Spell each technology the way it appears in that job's achievements, or it will match nothing. |
| Reorder or hide a section        | Reorder `sections` or set `visible: false`. The navbar follows.          |
| Rename a section heading         | Change its `title` (heading) or `label` (navbar text) in `sections`.     |
| Show your phone number           | Uncomment `phone`. It is off by default to keep it away from scrapers.   |
| Add a photo                      | Put e.g. `avatar.jpg` in `public/` and set `avatarUrl: 'avatar.jpg'`.     |
| Add a link (e.g. X, a blog)      | Add `{ label, url, icon }` to `profile.links`.                           |
| Change the code window (About)   | Edit the `{ label, items }` groups in `profile.featuredStack` (~3 short items each). |
| Hide "Open to new opportunities" | Remove `availability`.                                                   |

Link icons are [Bootstrap Icons](https://icons.getbootstrap.com): use the name without the `bi-` prefix (`'linkedin'`, `'github'`).

The shape of the data is defined in `src/app/data/resume.model.ts`.

### 2. Colours and fonts: `src/styles.css`

Change the one accent colour at the top and every button, link, active chip, highlight and the contact card follow
(dark mode derives a lighter tint automatically):

```css
:root {
  --accent: #2563eb;
}
```

Fonts (Geist and Geist Mono) come from Google Fonts in `src/index.html`; swap the `<link>` there and update
`--sans-font` / `--mono-font`. Read [`DESIGN.md`](DESIGN.md) before restyling.

### 3. Link previews: `src/index.html`

The `<title>`, description and Open Graph tags there are what LinkedIn/Slack show when the link is shared.
Update them if you change your name, title or tagline.

## How Bootstrap and Tailwind work together

- **Bootstrap** provides the grid (`row`, `col-lg-6`), the navbar collapse and the base `btn`. Use its class names as normal.
- **Tailwind** provides utilities, always with the **`tw:` prefix**: `tw:flex`, `tw:text-3xl`, `tw:md:text-5xl`, `tw:dark:text-white`.
  The prefix stops clashes with Bootstrap class names like `container`, `collapse` or `p-3`.
- CSS cascade layers put Tailwind last, so a `tw:` utility always wins over Bootstrap. (The one exception is
  `!important`, where earlier layers win; that is why the print rule lives in the early `overrides` layer.)
- Theme-aware Tailwind colours are available: `tw:text-ink`, `tw:text-muted`, `tw:bg-surface`, `tw:text-accent-text`, `tw:bg-accent`.
- `tw:dark:` follows the site's light/dark toggle (Bootstrap's `data-bs-theme` attribute).

## Add a new section

1. `npx ng g c sections/projects` and build it like the others (take a `config` input, render `<section [id]="config().id">`).
2. Add `'projects'` to `SectionId` in `resume.model.ts` and an entry to `sections` in `resume.data.ts`.
3. Add a `@case ('projects')` in `src/app/app.html`.

## Check the design with Playwright CLI

[Playwright CLI](https://github.com/microsoft/playwright-cli) is a dev dependency for quick visual checks
(run `npx playwright-cli install-browser` once):

```bash
npx playwright-cli open http://localhost:4200
npx playwright-cli set-reduced-motion reduce   # show everything without scroll animations
npx playwright-cli resize 390 844              # phone; also try 768 1024 and 1440 900
npx playwright-cli screenshot --full-page --filename=phone.png
npx playwright-cli set-media print             # preview "Save as PDF"
```

## Deployment

`.github/workflows/deploy.yml` runs on every push to `main`: install → test → build → publish to GitHub Pages.
It sets the base path automatically, so the site keeps working if the repository is renamed
(a `<user>.github.io` repo is served at the root; any other name at `/<repo>/`).

To use a custom domain, add it under **Settings → Pages → Custom domain** in the repository.

> The build prints a harmless `"@charset" must be the first rule` warning. It comes from Bootstrap's CSS being placed in a cascade layer and does not affect the output.

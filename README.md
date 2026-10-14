# Jason Kng — Resume Site

A modern, single-page resume built with **Angular 22**, **Bootstrap 5.3** and **Tailwind CSS 4**.
It is purely frontend: no backend, no database. Every push to `main` deploys it to GitHub Pages for free.

**Live:** https://jasonkng.github.io/resume/

Features: light/dark mode (remembers your choice), scroll-in animations (disabled for users who prefer reduced motion),
active-section navbar, mobile menu, and a **Save as PDF** button that prints a clean, light version of the page.

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
| Add a skill group                | Add `{ name, icon, skills }` to `skillGroups`.                           |
| Reorder or hide a section        | Reorder `sections` or set `visible: false`. The navbar follows.          |
| Rename a section heading         | Change its `title` (heading) or `label` (navbar text) in `sections`.     |
| Show your phone number           | Uncomment `phone`. It is off by default to keep it away from scrapers.   |
| Add a photo                      | Put e.g. `avatar.jpg` in `public/` and set `avatarUrl: 'avatar.jpg'`.     |
| Add a link (e.g. X, a blog)      | Add `{ label, url, icon }` to `profile.links`.                           |
| Change the hero code card        | Edit the `{ label, items }` groups in `profile.featuredStack`.           |
| Hide the "Open to…" badge        | Remove `availability`.                                                   |

Icons are [Bootstrap Icons](https://icons.getbootstrap.com): use the name without the `bi-` prefix (`'linkedin'`, `'database'`).

The shape of the data is defined in `src/app/data/resume.model.ts`.

### 2. Colours and fonts: `src/styles.css`

Change the two brand colours at the top and the whole site (buttons, gradients, pills, timeline, dark mode tints) updates:

```css
:root {
  --brand: #4f46e5;
  --brand-2: #0891b2;
}
```

Fonts come from Google Fonts in `src/index.html`; swap the `<link>` there and update `--sans-font` / `--display-font`.

### 3. Link previews: `src/index.html`

The `<title>`, description and Open Graph tags there are what LinkedIn/Slack show when the link is shared.
Update them if you change your name, title or tagline.

## How Bootstrap and Tailwind work together

- **Bootstrap** provides the grid (`container`, `row`, `col-lg-6`), the navbar and components (`btn`, `badge`). Use its class names as normal.
- **Tailwind** provides utilities, always with the **`tw:` prefix**: `tw:flex`, `tw:text-3xl`, `tw:md:text-5xl`, `tw:dark:text-white`.
  The prefix stops clashes with Bootstrap class names like `container`, `collapse` or `p-3`.
- CSS cascade layers put Tailwind last, so a `tw:` utility always wins over Bootstrap.
- Theme-aware Tailwind colours are available: `tw:text-brand`, `tw:bg-brand/10`, `tw:text-heading`, `tw:text-muted`, and `tw:font-display`.
- `tw:dark:` follows the site's light/dark toggle (Bootstrap's `data-bs-theme` attribute).

## Add a new section

1. `npx ng g c sections/projects` and build it like the others (take a `config` input, render `<section [id]="config().id">`).
2. Add `'projects'` to `SectionId` in `resume.model.ts` and an entry to `sections` in `resume.data.ts`.
3. Add a `@case ('projects')` in `src/app/app.html`.

## Deployment

`.github/workflows/deploy.yml` runs on every push to `main`: install → test → build → publish to GitHub Pages.
It sets the base path automatically, so the site keeps working if the repository is renamed
(a `<user>.github.io` repo is served at the root; any other name at `/<repo>/`).

To use a custom domain, add it under **Settings → Pages → Custom domain** in the repository.

> The build prints a harmless `"@charset" must be the first rule` warning. It comes from Bootstrap's CSS being placed in a cascade layer and does not affect the output.

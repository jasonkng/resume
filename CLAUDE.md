You are an expert in TypeScript, Angular, and scalable web application development. You write functional, maintainable, performant, and accessible code following Angular and TypeScript best practices.

## This Project

A static, frontend-only resume site (no backend) deployed to GitHub Pages by `.github/workflows/deploy.yml` on push to `main`.

- All content lives in `src/app/data/resume.data.ts` (typed by `resume.model.ts`). Components read it via the `RESUME_DATA` token; never hard-code resume text in templates.
- Tailwind utilities MUST use the `tw:` prefix (`tw:flex`, `tw:md:text-5xl`). Unprefixed class names are Bootstrap's.
- Follow `DESIGN.md` for every visual change: flat and square, one accent (`--accent`), IBM Plex Sans, tone steps instead of lines or shadows. No gradients, shadows at rest, glass, pill badges, small uppercase labels, icon-topped cards or violet/indigo.
- Global styles in `src/styles.css` use cascade layers (`theme, overrides, bootstrap, base, components, utilities`); put new global rules in `base` or `components`, never unlayered. Only `!important` print overrides go in `overrides`.
- Use theme tokens (`var(--ink)`, `var(--surface-1)`, or `tw:text-ink`, `tw:bg-surface`, `tw:text-accent-text`) instead of fixed colours.
- Use Node 24 (`.nvmrc`). Check work with `npx ng build` and `npx ng test --watch=false`, then look at it with `npx playwright-cli` at 1440, 768 and 390px wide (see `DESIGN.md` → Verify).

## TypeScript Best Practices

- Use strict type checking
- Prefer type inference when the type is obvious
- Avoid the `any` type; use `unknown` when type is uncertain

## Angular Best Practices

- Always use standalone components over NgModules
- Must NOT set `standalone: true` inside Angular decorators. It's the default in Angular v20+.
- Do NOT set `changeDetection: ChangeDetectionStrategy.OnPush` explicitly. `OnPush` is the default in Angular v22+.
- Use signals for state management
- Implement lazy loading for feature routes
- Do NOT use the `@HostBinding` and `@HostListener` decorators. Put host bindings inside the `host` object of the `@Component` or `@Directive` decorator instead
- Use `NgOptimizedImage` for all static images.
  - `NgOptimizedImage` does not work for inline base64 images.

## Accessibility Requirements

- It MUST pass all AXE checks.
- It MUST follow all WCAG AA minimums, including focus management, color contrast, and ARIA attributes.

### Components

- Keep components small and focused on a single responsibility
- Use `input()` and `output()` functions instead of decorators
- Use `model()` for two-way bound properties with `[(prop)]` syntax instead of pairing `input()` with `output()`
- Use `computed()` for derived state
- Use `linkedSignal()` for state derived from multiple reactive sources that must stay synchronized
- Prefer inline templates for small components
- Prefer Signal Forms (`@angular/forms/signals`) for new forms. They are stable in Angular v22+ and provide signal-based state, type-safe field access, and schema-based validation
- When not using Signal Forms, prefer Reactive forms instead of Template-driven ones
- Do NOT use `ngClass`, use `class` bindings instead
- Do NOT use `ngStyle`, use `style` bindings instead
- Do NOT import `CommonModule`, import only the directives and pipes the template uses, such as `AsyncPipe` or `DatePipe`
- When using external templates/styles, use paths relative to the component TS file.

## State Management

- Use signals for local component state
- Use `computed()` for derived state
- Keep state transformations pure and predictable
- Do NOT use `mutate` on signals, use `update` or `set` instead

## Templates

- Keep templates simple and avoid complex logic
- Use native control flow (`@if`, `@for`, `@switch`) instead of `*ngIf`, `*ngFor`, `*ngSwitch`
- Use the async pipe to handle observables
- Do not assume globals like (`new Date()`) are available.

## Services

- Design services around a single responsibility
- Use the `providedIn: 'root'` option for singleton services
- Prefer the `@Service` decorator over `@Injectable({providedIn: 'root'})` for new singleton services (Angular v22+)
- Use the `inject()` function instead of constructor injection

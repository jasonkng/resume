import { computed, DOCUMENT, effect, inject, Service, signal } from '@angular/core';

export type ThemeMode = 'light' | 'dark';

export const THEME_STORAGE_KEY = 'theme';

/**
 * Light/dark mode. The initial value comes from the inline script in `index.html`
 * (saved choice, else the OS preference), which runs before Angular to avoid a flash.
 */
@Service()
export class Theme {
  private readonly document = inject(DOCUMENT);

  readonly mode = signal<ThemeMode>(
    this.document.documentElement.getAttribute('data-bs-theme') === 'dark' ? 'dark' : 'light',
  );
  readonly isDark = computed(() => this.mode() === 'dark');

  constructor() {
    effect(() => this.document.documentElement.setAttribute('data-bs-theme', this.mode()));
  }

  toggle(): void {
    this.mode.update((mode) => (mode === 'dark' ? 'light' : 'dark'));
    try {
      this.document.defaultView?.localStorage.setItem(THEME_STORAGE_KEY, this.mode());
    } catch {
      // Storage can be blocked (private mode); the toggle still works for this visit.
    }
  }
}

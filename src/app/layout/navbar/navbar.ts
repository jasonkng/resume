import { afterNextRender, Component, computed, DestroyRef, DOCUMENT, inject, signal } from '@angular/core';
import { Theme } from '../../core/theme';
import { RESUME_DATA } from '../../data/resume.token';

@Component({
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
  host: { '(window:scroll)': 'onScroll()' },
})
export class Navbar {
  private readonly document = inject(DOCUMENT);
  protected readonly theme = inject(Theme);
  protected readonly profile = inject(RESUME_DATA).profile;
  protected readonly sections = inject(RESUME_DATA).sections.filter((section) => section.visible);

  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);
  protected readonly activeId = signal<string | null>(null);
  protected readonly themeLabel = computed(() =>
    this.theme.isDark() ? 'Switch to light theme' : 'Switch to dark theme',
  );

  constructor() {
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      this.onScroll();
      if (typeof IntersectionObserver === 'undefined') {
        return;
      }
      // Highlight the nav link of the section currently crossing the middle of the viewport.
      const observer = new IntersectionObserver(
        (entries) => {
          const current = entries.find((entry) => entry.isIntersecting);
          if (current) {
            this.activeId.set(current.target.id);
          }
        },
        { rootMargin: '-45% 0px -50% 0px' },
      );
      // 'top' is the hero: when it is in view, no nav link is highlighted.
      for (const id of ['top', ...this.sections.map((section) => section.id)]) {
        const element = this.document.getElementById(id);
        if (element) {
          observer.observe(element);
        }
      }
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  protected onScroll(): void {
    this.scrolled.set((this.document.defaultView?.scrollY ?? 0) > 8);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}

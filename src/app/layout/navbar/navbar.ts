import { Component, computed, DOCUMENT, inject, signal } from '@angular/core';
import { ScrollSpy } from '../../core/scroll-spy';
import { Theme } from '../../core/theme';
import { RESUME_DATA } from '../../data/resume.token';

/** Slim top bar for phones and tablets; on desktop the sidebar carries the navigation. */
@Component({
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
  host: { '(window:scroll)': 'onScroll()' },
})
export class Navbar {
  private readonly document = inject(DOCUMENT);
  protected readonly theme = inject(Theme);
  protected readonly activeId = inject(ScrollSpy).activeId;
  protected readonly profile = inject(RESUME_DATA).profile;
  protected readonly sections = inject(RESUME_DATA).sections.filter((section) => section.visible);

  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);
  protected readonly themeLabel = computed(() =>
    this.theme.isDark() ? 'Switch to light theme' : 'Switch to dark theme',
  );

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

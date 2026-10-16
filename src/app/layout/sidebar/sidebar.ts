import { NgOptimizedImage } from '@angular/common';
import { Component, computed, DOCUMENT, inject } from '@angular/core';
import { ScrollSpy } from '../../core/scroll-spy';
import { Theme } from '../../core/theme';
import { RESUME_DATA } from '../../data/resume.token';

/** The left column on desktop (sticky); the intro at the top on phones. */
@Component({
  imports: [NgOptimizedImage],
  selector: 'app-sidebar',
  styleUrl: './sidebar.css',
  templateUrl: './sidebar.html',
})
export class Sidebar {
  private readonly document = inject(DOCUMENT);
  protected readonly theme = inject(Theme);
  protected readonly activeId = inject(ScrollSpy).activeId;
  protected readonly profile = inject(RESUME_DATA).profile;
  protected readonly sections = inject(RESUME_DATA).sections.filter((section) => section.visible);
  protected readonly themeLabel = computed(() =>
    this.theme.isDark() ? 'Switch to light theme' : 'Switch to dark theme',
  );

  protected print(): void {
    this.document.defaultView?.print();
  }
}

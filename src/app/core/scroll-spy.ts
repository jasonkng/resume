import { DestroyRef, DOCUMENT, inject, Service, signal } from '@angular/core';

/** Tracks which page section is crossing the middle of the viewport, for the active nav link. */
@Service()
export class ScrollSpy {
  private readonly document = inject(DOCUMENT);
  private observer?: IntersectionObserver;

  readonly activeId = signal<string | null>(null);

  constructor() {
    inject(DestroyRef).onDestroy(() => this.observer?.disconnect());
  }

  /** Start watching these element ids (in page order). Call once, after they have rendered. */
  watch(ids: string[]): void {
    if (this.observer || typeof IntersectionObserver === 'undefined') {
      return;
    }
    const visible = new Set<string>();
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.add(entry.target.id);
          } else {
            visible.delete(entry.target.id);
          }
        }
        this.activeId.set(ids.find((id) => visible.has(id)) ?? null);
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    for (const id of ids) {
      const element = this.document.getElementById(id);
      if (element) {
        this.observer.observe(element);
      }
    }
  }
}

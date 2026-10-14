import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Reveal } from './reveal';

@Component({
  imports: [Reveal],
  template: `<div appReveal="120">Hello</div>`,
})
class Host {}

describe('Reveal', () => {
  it('should become visible when IntersectionObserver is unavailable', async () => {
    const original = globalThis.IntersectionObserver;
    // @ts-expect-error simulate a browser without IntersectionObserver
    delete globalThis.IntersectionObserver;
    try {
      const fixture = TestBed.createComponent(Host);
      await fixture.whenStable();

      const element = (fixture.nativeElement as HTMLElement).querySelector('div')!;
      expect(element.classList).toContain('reveal');
      expect(element.classList).toContain('is-visible');
      expect(element.style.getPropertyValue('--reveal-delay')).toBe('120ms');
    } finally {
      globalThis.IntersectionObserver = original;
    }
  });
});

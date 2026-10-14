import { DOCUMENT } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Theme, THEME_STORAGE_KEY } from './theme';

describe('Theme', () => {
  let service: Theme;
  let root: HTMLElement;

  beforeEach(() => {
    localStorage.clear();
    root = TestBed.inject(DOCUMENT).documentElement;
    root.setAttribute('data-bs-theme', 'light');
    service = TestBed.inject(Theme);
  });

  it('should start from the theme set on <html> by index.html', () => {
    expect(service.mode()).toBe('light');
    expect(service.isDark()).toBe(false);
  });

  it('should toggle, update <html> and remember the choice', () => {
    service.toggle();
    TestBed.tick();

    expect(service.mode()).toBe('dark');
    expect(root.getAttribute('data-bs-theme')).toBe('dark');
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark');
  });
});

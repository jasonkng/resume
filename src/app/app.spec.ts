import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { RESUME } from './data/resume.data';
import { RESUME_DATA } from './data/resume.token';

describe('App', () => {
  it('should render the name from the resume data', async () => {
    await TestBed.configureTestingModule({ imports: [App] }).compileComponents();
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(RESUME.profile.name);
  });

  it('should render only visible sections, in the configured order', async () => {
    const sections = [
      { ...RESUME.sections[2], visible: true },
      { ...RESUME.sections[0], visible: false },
      { ...RESUME.sections[1], visible: true },
    ];
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [{ provide: RESUME_DATA, useValue: { ...RESUME, sections } }],
    }).compileComponents();
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();

    const ids = [...(fixture.nativeElement as HTMLElement).querySelectorAll('main section')].map(
      (section) => section.id,
    );
    expect(ids).toEqual(['top', 'experience', 'skills']);
  });
});

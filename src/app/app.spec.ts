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
    const byId = (id: string) => RESUME.sections.find((section) => section.id === id)!;
    const sections = [
      { ...byId('experience'), visible: true },
      { ...byId('about'), visible: false },
      { ...byId('skills'), visible: true },
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
    expect(ids).toEqual(['experience', 'skills']);
  });
});

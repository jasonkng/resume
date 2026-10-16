import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RESUME } from '../../data/resume.data';
import { Experience, groupByCompany, mentions } from './experience';

describe('Experience', () => {
  let fixture: ComponentFixture<Experience>;
  let element: HTMLElement;

  beforeEach(async () => {
    history.replaceState(null, '', '/');
    await TestBed.configureTestingModule({
      imports: [Experience],
    }).compileComponents();

    fixture = TestBed.createComponent(Experience);
    fixture.componentRef.setInput('config', RESUME.sections.find((section) => section.id === 'experience'));
    await fixture.whenStable();
    element = fixture.nativeElement as HTMLElement;
  });

  it('should render a section anchored for the navbar', () => {
    const section = element.querySelector('section');
    expect(section?.id).toBe('experience');
    expect(section?.getAttribute('aria-labelledby')).toBe('experience-title');
  });

  it('should group consecutive roles at the same company', () => {
    const companies = [...element.querySelectorAll('article h3')].map((heading) => heading.textContent?.trim());
    expect(companies).toEqual(groupByCompany(RESUME.experience).map((group) => group.company));
  });

  it('should highlight the achievements that mention the picked technology, and share it in the URL', async () => {
    const button = [...element.querySelectorAll<HTMLButtonElement>('button.chip')].find(
      (chip) => chip.textContent?.trim() === 'Kubernetes',
    )!;
    button.click();
    await fixture.whenStable();

    const highlighted = [...element.querySelectorAll('.achievement.is-match')];
    expect(button.getAttribute('aria-pressed')).toBe('true');
    expect(highlighted.length).toBeGreaterThan(0);
    expect(highlighted.every((item) => mentions(item.textContent ?? '', 'Kubernetes'))).toBe(true);
    expect(location.search).toBe('?skill=Kubernetes');

    button.click();
    await fixture.whenStable();
    expect(element.querySelectorAll('.achievement.is-match').length).toBe(0);
    expect(location.search).toBe('');
  });
});

describe('mentions', () => {
  it('should ignore case, spaces and hyphens', () => {
    expect(mentions('a Spring Boot and Angular platform', 'spring boot')).toBe(true);
    expect(mentions('implemented OAuth 2.0/OIDC authentication', 'OAuth 2.0/OIDC')).toBe(true);
    expect(mentions('a micro-frontend architecture', 'Micro Frontend')).toBe(true);
    expect(mentions('Spring Boot Test', 'Kubernetes')).toBe(false);
  });
});

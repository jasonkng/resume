import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RESUME } from '../../data/resume.data';
import { Experience } from './experience';

describe('Experience', () => {
  let fixture: ComponentFixture<Experience>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Experience],
    }).compileComponents();

    fixture = TestBed.createComponent(Experience);
    fixture.componentRef.setInput('config', RESUME.sections.find((section) => section.id === 'experience'));
    await fixture.whenStable();
  });

  it('should render a section anchored for the navbar', () => {
    const section = (fixture.nativeElement as HTMLElement).querySelector('section');
    expect(section?.id).toBe('experience');
    expect(section?.getAttribute('aria-labelledby')).toBe('experience-title');
  });
});

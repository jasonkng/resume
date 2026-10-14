import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RESUME } from '../../data/resume.data';
import { About } from './about';

describe('About', () => {
  let fixture: ComponentFixture<About>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [About],
    }).compileComponents();

    fixture = TestBed.createComponent(About);
    fixture.componentRef.setInput('config', RESUME.sections.find((section) => section.id === 'about'));
    await fixture.whenStable();
  });

  it('should render a section anchored for the navbar', () => {
    const section = (fixture.nativeElement as HTMLElement).querySelector('section');
    expect(section?.id).toBe('about');
    expect(section?.getAttribute('aria-labelledby')).toBe('about-title');
  });
});

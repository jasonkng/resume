import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RESUME } from '../../data/resume.data';
import { Education } from './education';

describe('Education', () => {
  let fixture: ComponentFixture<Education>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Education],
    }).compileComponents();

    fixture = TestBed.createComponent(Education);
    fixture.componentRef.setInput('config', RESUME.sections.find((section) => section.id === 'education'));
    await fixture.whenStable();
  });

  it('should render a section anchored for the navbar', () => {
    const section = (fixture.nativeElement as HTMLElement).querySelector('section');
    expect(section?.id).toBe('education');
    expect(section?.getAttribute('aria-labelledby')).toBe('education-title');
  });
});

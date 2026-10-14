import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RESUME } from '../../data/resume.data';
import { Skills } from './skills';

describe('Skills', () => {
  let fixture: ComponentFixture<Skills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Skills],
    }).compileComponents();

    fixture = TestBed.createComponent(Skills);
    fixture.componentRef.setInput('config', RESUME.sections.find((section) => section.id === 'skills'));
    await fixture.whenStable();
  });

  it('should render a section anchored for the navbar', () => {
    const section = (fixture.nativeElement as HTMLElement).querySelector('section');
    expect(section?.id).toBe('skills');
    expect(section?.getAttribute('aria-labelledby')).toBe('skills-title');
  });
});

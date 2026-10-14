import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RESUME } from '../../data/resume.data';
import { Contact } from './contact';

describe('Contact', () => {
  let fixture: ComponentFixture<Contact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contact],
    }).compileComponents();

    fixture = TestBed.createComponent(Contact);
    fixture.componentRef.setInput('config', RESUME.sections.find((section) => section.id === 'contact'));
    await fixture.whenStable();
  });

  it('should render a section anchored for the navbar', () => {
    const section = (fixture.nativeElement as HTMLElement).querySelector('section');
    expect(section?.id).toBe('contact');
    expect(section?.getAttribute('aria-labelledby')).toBe('contact-title');
  });
});

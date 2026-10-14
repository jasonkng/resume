import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionHeading } from './section-heading';

describe('SectionHeading', () => {
  let fixture: ComponentFixture<SectionHeading>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionHeading],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionHeading);
    fixture.componentRef.setInput('eyebrow', 'Skills');
    fixture.componentRef.setInput('title', 'Tools I build with');
    fixture.componentRef.setInput('headingId', 'skills-title');
    await fixture.whenStable();
  });

  it('should render an h2 with the given id and title', () => {
    const heading = (fixture.nativeElement as HTMLElement).querySelector('h2');
    expect(heading?.id).toBe('skills-title');
    expect(heading?.textContent?.trim()).toBe('Tools I build with');
  });
});

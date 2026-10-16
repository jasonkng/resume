import { Component, inject, input } from '@angular/core';
import { SectionConfig } from '../../data/resume.model';
import { RESUME_DATA } from '../../data/resume.token';
import { Reveal } from '../../shared/reveal';
import { SectionHeading } from '../../shared/section-heading/section-heading';

@Component({
  imports: [Reveal, SectionHeading],
  selector: 'app-skills',
  styles: `
    .skills-sheet {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(min(100%, 17rem), 1fr));
      gap: clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 3vw, 3rem);
    }
  `,
  templateUrl: './skills.html',
})
export class Skills {
  readonly config = input.required<SectionConfig>();
  protected readonly skillGroups = inject(RESUME_DATA).skillGroups;
}

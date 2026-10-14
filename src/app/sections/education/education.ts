import { Component, inject, input } from '@angular/core';
import { SectionConfig } from '../../data/resume.model';
import { RESUME_DATA } from '../../data/resume.token';
import { Reveal } from '../../shared/reveal';
import { SectionHeading } from '../../shared/section-heading/section-heading';

@Component({
  imports: [Reveal, SectionHeading],
  selector: 'app-education',
  templateUrl: './education.html',
})
export class Education {
  readonly config = input.required<SectionConfig>();
  protected readonly education = inject(RESUME_DATA).education;
}

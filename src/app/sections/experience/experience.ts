import { Component, inject, input } from '@angular/core';
import { SectionConfig } from '../../data/resume.model';
import { RESUME_DATA } from '../../data/resume.token';
import { Reveal } from '../../shared/reveal';
import { SectionHeading } from '../../shared/section-heading/section-heading';

@Component({
  imports: [Reveal, SectionHeading],
  selector: 'app-experience',
  styleUrl: './experience.css',
  templateUrl: './experience.html',
})
export class Experience {
  readonly config = input.required<SectionConfig>();
  protected readonly jobs = inject(RESUME_DATA).experience;
}

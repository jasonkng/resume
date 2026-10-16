import { Component, inject, input } from '@angular/core';
import { SectionConfig } from '../../data/resume.model';
import { RESUME_DATA } from '../../data/resume.token';
import { Reveal } from '../../shared/reveal';
import { SectionHeading } from '../../shared/section-heading/section-heading';

@Component({
  imports: [Reveal, SectionHeading],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {
  readonly config = input.required<SectionConfig>();
  protected readonly resume = inject(RESUME_DATA);
}

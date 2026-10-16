import { Component, input } from '@angular/core';
import { Reveal } from '../reveal';

@Component({
  imports: [Reveal],
  selector: 'app-section-heading',
  template: `<h2 [id]="headingId()" class="section-title tw:text-ink" appReveal>{{ title() }}</h2>`,
})
export class SectionHeading {
  readonly title = input.required<string>();
  readonly headingId = input.required<string>();
}

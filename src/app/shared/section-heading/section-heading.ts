import { Component, input } from '@angular/core';
import { Reveal } from '../reveal';

@Component({
  imports: [Reveal],
  selector: 'app-section-heading',
  host: { class: 'tw:block tw:mb-12 tw:lg:mb-16' },
  template: `
    <h2 [id]="headingId()" class="display tw:text-5xl tw:md:text-7xl tw:xl:text-8xl tw:text-ink mb-0" appReveal>
      {{ title() }}
    </h2>
  `,
})
export class SectionHeading {
  readonly title = input.required<string>();
  readonly headingId = input.required<string>();
}

import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  host: { class: 'tw:block tw:mb-10 tw:lg:mb-12' },
  template: `
    <p class="eyebrow mb-2">{{ eyebrow() }}</p>
    <h2 [id]="headingId()" class="tw:text-3xl tw:md:text-5xl tw:font-bold tw:text-heading mb-0">
      {{ title() }}
    </h2>
  `,
})
export class SectionHeading {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly headingId = input.required<string>();
}

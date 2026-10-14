import { Component, inject, input } from '@angular/core';
import { SectionConfig } from '../../data/resume.model';
import { RESUME_DATA } from '../../data/resume.token';
import { Reveal } from '../../shared/reveal';

@Component({
  imports: [Reveal],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {
  readonly config = input.required<SectionConfig>();
  protected readonly profile = inject(RESUME_DATA).profile;
  protected readonly contact = inject(RESUME_DATA).contact;
}

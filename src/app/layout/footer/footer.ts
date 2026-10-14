import { Component, inject } from '@angular/core';
import { RESUME_DATA } from '../../data/resume.token';

@Component({
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly profile = inject(RESUME_DATA).profile;
}

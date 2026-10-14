import { InjectionToken } from '@angular/core';
import { RESUME } from './resume.data';
import { Resume } from './resume.model';

/** Components inject the resume through this token, so tests can swap in other data. */
export const RESUME_DATA = new InjectionToken<Resume>('RESUME_DATA', {
  providedIn: 'root',
  factory: () => RESUME,
});

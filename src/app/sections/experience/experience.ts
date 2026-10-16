import { Component, computed, DOCUMENT, inject, input, signal } from '@angular/core';
import { Experience as Role, SectionConfig } from '../../data/resume.model';
import { RESUME_DATA } from '../../data/resume.token';
import { Reveal } from '../../shared/reveal';
import { SectionHeading } from '../../shared/section-heading/section-heading';

export interface EmployerGroup {
  company: string;
  start: string;
  end?: string;
  roles: Role[];
}

/** True when the achievement text mentions the technology, ignoring case, spaces and hyphens. */
export function mentions(text: string, tech: string): boolean {
  const normalize = (value: string) => value.toLowerCase().replace(/[\s-]/g, '');
  return normalize(text).includes(normalize(tech));
}

/** Groups consecutive roles at the same company (newest first) so a promotion reads as one employer. */
export function groupByCompany(roles: Role[]): EmployerGroup[] {
  const groups: EmployerGroup[] = [];
  for (const role of roles) {
    const last = groups.at(-1);
    if (last?.company === role.company) {
      last.roles.push(role);
      last.start = role.start;
    } else {
      groups.push({ company: role.company, start: role.start, end: role.end, roles: [role] });
    }
  }
  return groups;
}

const SKILL_PARAM = 'skill';

@Component({
  imports: [Reveal, SectionHeading],
  selector: 'app-experience',
  styleUrl: './experience.css',
  templateUrl: './experience.html',
})
export class Experience {
  readonly config = input.required<SectionConfig>();

  private readonly document = inject(DOCUMENT);
  private readonly roles = inject(RESUME_DATA).experience;

  protected readonly groups = groupByCompany(this.roles);
  protected readonly technologies = [...new Set(this.roles.flatMap((role) => role.tech))];

  /** The technology being highlighted; mirrored in `?skill=` so a filtered view can be shared. */
  protected readonly selected = signal<string | null>(this.skillFromUrl());

  protected readonly status = computed(() => {
    const tech = this.selected();
    if (!tech) {
      return '';
    }
    const count = this.roles.flatMap((role) => role.achievements).filter((text) => mentions(text, tech)).length;
    return `${tech}: ${count} ${count === 1 ? 'achievement' : 'achievements'} highlighted.`;
  });

  protected toggle(tech: string): void {
    this.selected.update((current) => (current === tech ? null : tech));
    this.writeSkillToUrl();
  }

  protected clear(): void {
    this.selected.set(null);
    this.writeSkillToUrl();
  }

  protected isMatch(text: string): boolean {
    const tech = this.selected();
    return tech !== null && mentions(text, tech);
  }

  private skillFromUrl(): string | null {
    const search = this.document.defaultView?.location.search ?? '';
    const skill = new URLSearchParams(search).get(SKILL_PARAM);
    return skill && this.technologies.includes(skill) ? skill : null;
  }

  private writeSkillToUrl(): void {
    const view = this.document.defaultView;
    if (!view) {
      return;
    }
    const url = new URL(view.location.href);
    const tech = this.selected();
    if (tech) {
      url.searchParams.set(SKILL_PARAM, tech);
    } else {
      url.searchParams.delete(SKILL_PARAM);
    }
    view.history.replaceState(view.history.state, '', url);
  }
}

/**
 * Shape of everything the site renders. Edit the values in `resume.data.ts`;
 * only touch this file if you want to add a brand-new kind of field.
 */
export interface Resume {
  profile: Profile;
  /** Order and visibility of the page sections (also drives the navbar). */
  sections: SectionConfig[];
  /** First paragraph is set large as a statement (keep it to ~25 words); the rest is body text. */
  summary: string[];
  highlights: Highlight[];
  skillGroups: SkillGroup[];
  /** Newest first. Consecutive roles at the same company are grouped under one heading. */
  experience: Experience[];
  education: Education[];
  contact: ContactConfig;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  location?: string;
  email?: string;
  /** Leave undefined to keep your number off the public internet. */
  phone?: string;
  /** Optional photo, e.g. 'avatar.jpg' placed in the `public/` folder. */
  avatarUrl?: string;
  /** Short status shown next to your title, e.g. 'Open to new opportunities'. Remove to hide it. */
  availability?: string;
  /** Grouped highlights for the hero's code block, e.g. `backend: ['Java', ...]`. ~3 short items per group. */
  featuredStack: StackGroup[];
  links: SocialLink[];
}

export interface StackGroup {
  /** Shown as the object key in the code block, so keep it one lowercase word. */
  label: string;
  items: string[];
}

export interface SocialLink {
  label: string;
  url: string;
  /** Any Bootstrap Icons name without the `bi-` prefix: https://icons.getbootstrap.com */
  icon: string;
}

export type SectionId = 'about' | 'skills' | 'experience' | 'education' | 'contact';

export interface SectionConfig {
  id: SectionId;
  /** Text in the navbar. */
  label: string;
  /** Heading shown at the top of the section. Keep it short: it must fit on two lines. */
  title: string;
  visible: boolean;
}

export interface Highlight {
  value: string;
  label: string;
}

export interface SkillGroup {
  name: string;
  skills: string[];
}

export interface Experience {
  role: string;
  company: string;
  start: string;
  /** Omit for your current role; it will show "Present". */
  end?: string;
  achievements: string[];
  /**
   * Technologies for this role. They become the experience filter: picking one highlights every
   * achievement whose text mentions it, so spell each one the way it appears in the achievements.
   */
  tech: string[];
}

export interface Education {
  degree: string;
  field: string;
  school: string;
  start: string;
  end: string;
}

export interface ContactConfig {
  heading: string;
  message: string;
}

/**
 * Shape of everything the site renders. Edit the values in `resume.data.ts`;
 * only touch this file if you want to add a brand-new kind of field.
 */
export interface Resume {
  profile: Profile;
  /** Order and visibility of the page sections (also drives the navbar). */
  sections: SectionConfig[];
  summary: string[];
  highlights: Highlight[];
  skillGroups: SkillGroup[];
  experience: Experience[];
  education: Education[];
  contact: ContactConfig;
}

export interface Profile {
  name: string;
  /** Short monogram shown in the navbar, avatar and favicon-style badges. */
  initials: string;
  title: string;
  tagline: string;
  location?: string;
  email?: string;
  /** Leave undefined to keep your number off the public internet. */
  phone?: string;
  /** Optional photo, e.g. 'avatar.jpg' placed in the `public/` folder. */
  avatarUrl?: string;
  /** Small status pill in the hero. Remove to hide it. */
  availability?: string;
  /** Grouped highlights for the hero's code card, e.g. `backend: ['Java', ...]`. ~3 short items per group fits on one line. */
  featuredStack: StackGroup[];
  links: SocialLink[];
}

export interface StackGroup {
  /** Shown as the object key in the code card, so keep it one lowercase word. */
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
  /** Heading shown at the top of the section. */
  title: string;
  visible: boolean;
}

export interface Highlight {
  value: string;
  label: string;
}

export interface SkillGroup {
  name: string;
  icon: string;
  skills: string[];
}

export interface Experience {
  role: string;
  company: string;
  start: string;
  /** Omit for your current role; it will show "Present". */
  end?: string;
  achievements: string[];
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

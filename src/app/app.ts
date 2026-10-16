import { afterNextRender, Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ScrollSpy } from './core/scroll-spy';
import { RESUME_DATA } from './data/resume.token';
import { Footer } from './layout/footer/footer';
import { Navbar } from './layout/navbar/navbar';
import { Sidebar } from './layout/sidebar/sidebar';
import { About } from './sections/about/about';
import { Contact } from './sections/contact/contact';
import { Education } from './sections/education/education';
import { Experience } from './sections/experience/experience';
import { Skills } from './sections/skills/skills';

@Component({
  imports: [Navbar, Sidebar, About, Skills, Experience, Education, Contact, Footer],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  private readonly resume = inject(RESUME_DATA);
  protected readonly sections = this.resume.sections.filter((section) => section.visible);

  constructor() {
    const { name, title, tagline } = this.resume.profile;
    inject(Title).setTitle(`${name} — ${title}`);
    inject(Meta).updateTag({ name: 'description', content: tagline });

    const scrollSpy = inject(ScrollSpy);
    afterNextRender(() => scrollSpy.watch(this.sections.map((section) => section.id)));
  }
}

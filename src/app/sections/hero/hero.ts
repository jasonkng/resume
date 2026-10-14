import { NgOptimizedImage } from '@angular/common';
import { Component, DOCUMENT, inject } from '@angular/core';
import { RESUME_DATA } from '../../data/resume.token';
import { Reveal } from '../../shared/reveal';

@Component({
  imports: [NgOptimizedImage, Reveal],
  selector: 'app-hero',
  styleUrl: './hero.css',
  templateUrl: './hero.html',
})
export class Hero {
  private readonly document = inject(DOCUMENT);
  protected readonly profile = inject(RESUME_DATA).profile;

  protected print(): void {
    this.document.defaultView?.print();
  }
}

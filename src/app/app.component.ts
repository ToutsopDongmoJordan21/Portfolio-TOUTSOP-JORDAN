import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="noise-overlay"></div>
    <app-navbar></app-navbar>
    <main>
      <app-hero></app-hero>
      <app-about></app-about>
      <app-skills></app-skills>
      <app-experience></app-experience>
      <app-projects></app-projects>
      <app-testimonials></app-testimonials>
      <app-contact></app-contact>
    </main>
    <app-footer></app-footer>
  `
})
export class AppComponent {}

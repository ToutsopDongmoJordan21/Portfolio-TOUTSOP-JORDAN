import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  year = new Date().getFullYear();

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  navItems = [
    { label: 'Accueil', id: 'hero' },
    { label: 'À Propos', id: 'about' },
    { label: 'Compétences', id: 'skills' },
    { label: 'Expériences', id: 'experience' },
    { label: 'Projets', id: 'projects' },
    { label: 'Témoignages', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ];
}

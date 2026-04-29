import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  isMenuOpen = false;
  activeSection = 'hero';

  navItems = [
    { label: 'Accueil', href: '#hero', id: 'hero' },
    { label: 'À Propos', href: '#about', id: 'about' },
    { label: 'Compétences', href: '#skills', id: 'skills' },
    { label: 'Expériences', href: '#experience', id: 'experience' },
    { label: 'Projets', href: '#projects', id: 'projects' },
    { label: 'Témoignages', href: '#testimonials', id: 'testimonials' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  ngOnInit() {}

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 50;
    this.updateActiveSection();
  }

  updateActiveSection() {
    const sections = this.navItems.map(n => n.id);
    for (const id of sections.reverse()) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 100) {
        this.activeSection = id;
        break;
      }
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    this.closeMenu();
  }
}

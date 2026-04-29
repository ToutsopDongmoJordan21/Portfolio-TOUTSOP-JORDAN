import { Component, OnInit, OnDestroy } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {
  profile: any;
  displayedText = '';
  titles = ['Full Stack Developer', 'Network Administrator', 'IA & ML Engineer', 'Problem Solver'];
  currentTitleIndex = 0;
  private interval: any;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.profile = this.portfolioService.getProfile();
    this.typeText();
  }

  typeText() {
    let charIndex = 0;
    let isDeleting = false;
    let currentTitle = this.titles[this.currentTitleIndex];

    const type = () => {
      if (!isDeleting) {
        this.displayedText = currentTitle.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentTitle.length) {
          isDeleting = true;
          this.interval = setTimeout(type, 1800);
          return;
        }
      } else {
        this.displayedText = currentTitle.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          this.currentTitleIndex = (this.currentTitleIndex + 1) % this.titles.length;
          currentTitle = this.titles[this.currentTitleIndex];
        }
      }
      this.interval = setTimeout(type, isDeleting ? 60 : 100);
    };

    this.interval = setTimeout(type, 500);
  }

  ngOnDestroy() {
    if (this.interval) clearTimeout(this.interval);
  }

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}

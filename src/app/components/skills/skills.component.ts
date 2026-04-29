import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: any[] = [];
  softSkills: any[] = [];
  categories: string[] = [];
  activeCategory = 'Tous';
  filteredSkills: any[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.skills = this.portfolioService.getSkills();
    this.softSkills = this.portfolioService.getSoftSkills();
    const cats = [...new Set(this.skills.map(s => s.category))];
    this.categories = ['Tous', ...cats];
    this.filteredSkills = this.skills;
  }

  filterSkills(category: string) {
    this.activeCategory = category;
    this.filteredSkills = category === 'Tous'
      ? this.skills
      : this.skills.filter(s => s.category === category);
  }

  getBarColor(level: number): string {
    if (level >= 90) return 'linear-gradient(90deg, #00e5ff, #00b8cc)';
    if (level >= 75) return 'linear-gradient(90deg, #7c3aed, #9f67ff)';
    if (level >= 60) return 'linear-gradient(90deg, #ff6b35, #ff8f63)';
    return 'linear-gradient(90deg, #10b981, #34d399)';
  }
}

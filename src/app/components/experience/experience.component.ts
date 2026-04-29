import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experiences: any[] = [];
  activeExp = 0;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.experiences = this.portfolioService.getExperiences();
  }

  setActive(index: number) {
    this.activeExp = index;
  }
}

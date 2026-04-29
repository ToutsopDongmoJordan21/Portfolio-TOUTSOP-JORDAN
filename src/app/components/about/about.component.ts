import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  profile: any;
  education: any[] = [];
  languages: any[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.profile = this.portfolioService.getProfile();
    this.education = this.portfolioService.getEducation();
    this.languages = this.portfolioService.getLanguages();
  }
}

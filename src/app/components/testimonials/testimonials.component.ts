import { Component, OnInit, OnDestroy } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  testimonials: any[] = [];
  activeIndex = 0;
  private autoSlide: any;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.testimonials = this.portfolioService.getTestimonials();
    this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.autoSlide);
  }

  startAutoSlide() {
    this.autoSlide = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.testimonials.length;
    }, 5000);
  }

  goTo(index: number) {
    this.activeIndex = index;
    clearInterval(this.autoSlide);
    this.startAutoSlide();
  }

  prev() {
    this.goTo((this.activeIndex - 1 + this.testimonials.length) % this.testimonials.length);
  }

  next() {
    this.goTo((this.activeIndex + 1) % this.testimonials.length);
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formData = { name: '', email: '', subject: '', message: '' };
  submitted = false;
  loading = false;

  contactInfo = [
    { icon: 'fas fa-phone', label: 'Téléphone', value: '(+237) 681409045 / 699028439', href: 'tel:+237681409045' },
    { icon: 'fas fa-envelope', label: 'Email', value: 'jordantoutsop472@gmail.com', href: 'mailto:jordantoutsop472@gmail.com' },
    { icon: 'fas fa-map-marker-alt', label: 'Localisation', value: 'Yaoundé / Douala, Cameroun', href: '#' },
    { icon: 'fab fa-linkedin', label: 'LinkedIn', value: 'jordan-toutsop-6b2b731a1', href: 'https://www.linkedin.com/in/jordan-toutsop-6b2b731a1/' },
    { icon: 'fab fa-github', label: 'GitHub', value: 'ToutsopDongmoJordan21', href: 'https://github.com/ToutsopDongmoJordan21' },
  ];

  submitForm() {
    if (!this.formData.name || !this.formData.email || !this.formData.message) return;
    this.loading = true;
    // Simulate sending
    setTimeout(() => {
      this.loading = false;
      this.submitted = true;
      this.formData = { name: '', email: '', subject: '', message: '' };
    }, 1500);
  }

  resetForm() {
    this.submitted = false;
  }
}

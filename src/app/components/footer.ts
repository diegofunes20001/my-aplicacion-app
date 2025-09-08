import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  companyName: string = 'Mi Empresa Angular';
  developerName: string = 'Desarrollador';
  
  onSocialClick(platform: string): void {
    console.log(`Clicking on ${platform}`);
    alert(`Redirigiendo a ${platform}`);
  }
  
  onContactClick(): void {
    console.log('Contact clicked');
    window.location.href = 'mailto:contacto@miempresa.com';
  }
  
  getAngularVersion(): string {
    return '18';
  }
}
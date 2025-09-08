import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  title: string = 'Mi Aplicación Angular';
  currentDate: Date = new Date();
  
  onLogoClick(): void {
    console.log('Logo clicked!');
    alert('¡Bienvenido a mi aplicación!');
  }
}
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  avatar: string;
  isActive: boolean;
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  selectedUser: User | null = null;
  
  ngOnInit(): void {
    this.loadUsers();
  }
  
  loadUsers(): void {
    this.users = [
      {
        id: 1,
        name: 'Ana García',
        email: 'ana.garcia@email.com',
        role: 'Administradora',
        avatar: 'AG',
        isActive: true
      },
      {
        id: 2,
        name: 'Carlos López',
        email: 'carlos.lopez@email.com',
        role: 'Desarrollador',
        avatar: 'CL',
        isActive: true
      },
      {
        id: 3,
        name: 'María Rodríguez',
        email: 'maria.rodriguez@email.com',
        role: 'Diseñadora',
        avatar: 'MR',
        isActive: false
      },
      {
        id: 4,
        name: 'José Martínez',
        email: 'jose.martinez@email.com',
        role: 'Analista',
        avatar: 'JM',
        isActive: true
      }
    ];
  }
  
  selectUser(user: User): void {
    this.selectedUser = user;
    console.log('Usuario seleccionado:', user);
  }
  
  toggleUserStatus(user: User): void {
    user.isActive = !user.isActive;
    console.log(`Estado de ${user.name} cambiado a: ${user.isActive ? 'Activo' : 'Inactivo'}`);
  }
  
  getUserStatusClass(user: User): string {
    return user.isActive ? 'status-active' : 'status-inactive';
  }
  
  trackByUserId(index: number, user: User): number {
    return user.id;
  }
}

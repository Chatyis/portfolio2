import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  protected readonly navLinks = [
    { path: '', label: 'Home', icon: 'home' },
    { path: 'projects', label: 'Projects', icon: 'work' },
    { path: 'skills', label: 'Skills', icon: 'code' },
    { path: 'contact', label: 'Contact', icon: 'email' }
  ];
}

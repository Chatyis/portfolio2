import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    RouterLink
],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent {
  name: string = 'Michał Czyż';
  title: string = 'Full Stack Developer';
  description: string = 'I build modern web applications with Angular, Node.js, and other cutting-edge technologies.';
}

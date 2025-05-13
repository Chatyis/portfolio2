import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with product catalog, shopping cart, and payment processing.',
      imageUrl: 'assets/projects/ecommerce.jpg',
      technologies: ['Angular', 'Node.js', 'Express', 'MongoDB'],
      githubUrl: 'https://github.com/username/ecommerce',
      liveUrl: 'https://ecommerce-project.demo',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity app for managing tasks with drag-and-drop functionality and collaboration features.',
      imageUrl: 'assets/projects/tasks.jpg',
      technologies: ['React', 'Firebase', 'Material UI'],
      githubUrl: 'https://github.com/username/tasks',
      liveUrl: 'https://tasks-project.demo',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather application that displays current conditions and forecasts using a third-party API.',
      imageUrl: 'assets/projects/weather.jpg',
      technologies: ['JavaScript', 'HTML/CSS', 'OpenWeather API'],
      githubUrl: 'https://github.com/username/weather',
      featured: false
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with Angular and Material Design.',
      imageUrl: 'assets/projects/portfolio.jpg',
      technologies: ['Angular', 'TypeScript', 'SCSS'],
      githubUrl: 'https://github.com/username/portfolio',
      liveUrl: 'https://portfolio.demo',
      featured: false
    }
  ];

  get featuredProjects(): Project[] {
    return this.projects.filter(project => project.featured);
  }
}

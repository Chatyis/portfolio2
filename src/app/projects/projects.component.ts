import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

import { ProjectsListComponent } from './projects-list/projects-list.component';

export interface Project {
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
    MatChipsModule,
    ProjectsListComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: '5 dominant colors determination',
      description: 'Project focused strictly on logic part, this full-stack web application\'s purpose is to determine 5 dominant colors on the passed image with selected parameters',
      imageUrl: 'assets/projects/project1.png',
      technologies: ['Angular', 'Django', 'NumPy', 'OpenCV2', 'Skimage'],
      githubUrl: 'https://github.com/Chatyis/5-Dominant-Colors-Determination',
      featured: true
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with Angular and Material Design.',
      imageUrl: 'assets/projects/project3.png',
      technologies: ['Angular', 'TypeScript', 'SCSS'],
      githubUrl: 'https://github.com/Chatyis/portfolio2',
      liveUrl: 'https://portfolio.mczyz.dev/',
      featured: true
    },
    {
      id: 3,
      title: 'Quiz App',
      description: 'Player can select variety of categories and answer questions to get score, alternatively user can choose to log in as a guest. For logged in players score is saved and results in getting higher levels in categories',
      imageUrl: 'assets/projects/project4.png',
      technologies: ['Angular', 'Angular Material (M3)', 'Tailwind CSS', '.NET Core', "SQL", "Dapper"],
      githubUrl: 'https://github.com/Chatyis/Quiz-App',
      featured: false
    },
    {
      id: 4,
      title: 'Company page',
      description: 'One view company page',
      imageUrl: 'assets/projects/project2.png',
      technologies: ['React', 'Tailwind CSS', 'Gatsby'],
      featured: false
    }
  ];

  get featuredProjects(): Project[] {
    return this.projects.filter(project => project.featured);
  }
}

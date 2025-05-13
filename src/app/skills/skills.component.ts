import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

interface Skill {
  name: string;
  level: number;
  icon?: string;
}

interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    MatChipsModule
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      name: 'Frontend Development',
      icon: 'devices',
      skills: [
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 85 },
        { name: 'Angular', level: 90 },
        { name: 'React', level: 75 },
        { name: 'SCSS/SASS', level: 85 }
      ]
    },
    {
      name: 'Backend Development',
      icon: 'dns',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express', level: 75 },
        { name: '.NET Core', level: 70 },
        { name: 'RESTful APIs', level: 85 },
        { name: 'GraphQL', level: 60 }
      ]
    },
    {
      name: 'Databases',
      icon: 'storage',
      skills: [
        { name: 'MongoDB', level: 75 },
        { name: 'MySQL', level: 70 },
        { name: 'PostgreSQL', level: 65 },
        { name: 'Firebase', level: 80 }
      ]
    },
    {
      name: 'Tools & Others',
      icon: 'build',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 65 },
        { name: 'CI/CD', level: 70 },
        { name: 'Figma', level: 75 },
        { name: 'Agile/Scrum', level: 80 }
      ]
    }
  ];

  tools: string[] = [
    'VS Code', 'Git', 'GitHub', 'NPM', 'Webpack', 
    'Docker', 'Figma', 'Photoshop', 'JIRA', 'Slack'
  ];

  getLevelClass(level: number): string {
    if (level >= 80) return 'expert';
    if (level >= 60) return 'intermediate';
    return 'beginner';
  }
}

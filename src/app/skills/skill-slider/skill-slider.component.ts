import { Component } from '@angular/core';
import { MatProgressBar } from "@angular/material/progress-bar";
import { MatTab, MatTabGroup, MatTabLabel } from "@angular/material/tabs";
import { MatIcon } from '@angular/material/icon';
import { NgClass } from '@angular/common';

import { SkillCategory } from '../../../shared/models/skill.model';

@Component({
  selector: 'app-skill-slider',
  imports: [
    MatIcon,
    MatProgressBar,
    MatTab,
    MatTabGroup,
    MatTabLabel,
    NgClass
  ],
  templateUrl: './skill-slider.component.html',
  styleUrl: './skill-slider.component.scss'
})
export class SkillSliderComponent {
  protected readonly skillCategories: SkillCategory[] = [
    {
      name: 'Frontend Development',
      icon: 'devices',
      skills: [
        { name: 'Angular', level: 90 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 75 },
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
        { name: 'MongoDB', level: 60 }
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
        { name: 'Jira', level: 80 }
      ]
    }
  ];

  getLevelClass(level: number): string {
    if (level >= 80) return 'expert';
    if (level >= 60) return 'intermediate';
    return 'beginner';
  }
}

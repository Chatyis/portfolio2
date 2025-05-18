import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

import { SkillSliderComponent } from './skill-slider/skill-slider.component';

@Component({
  selector: 'app-skills',
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    MatChipsModule,
    SkillSliderComponent
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  protected readonly tools: string[] = [
    'IntelliJ', 'Git', 'GitHub', 'NPM', 'Gitlab',
    'Docker', 'Figma', 'Aseprite', 'JIRA'
  ];
}

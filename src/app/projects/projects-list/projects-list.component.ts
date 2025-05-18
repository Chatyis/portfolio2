import { Component, input } from '@angular/core';
import { MatAnchor } from "@angular/material/button";
import { MatCard, MatCardActions, MatCardContent, MatCardImage } from "@angular/material/card";
import { MatChip, MatChipSet } from "@angular/material/chips";

import { MatIcon } from '@angular/material/icon';
import { Project } from '../../../shared/models/project.model';


@Component({
  selector: 'app-projects-list',
    imports: [
    MatAnchor,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardImage,
    MatChip,
    MatChipSet,
    MatIcon
],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.scss'
})
export class ProjectsListComponent {
  readonly projects = input.required<Project[]>();
  readonly title = input.required<string>();
}

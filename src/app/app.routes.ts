import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./intro/intro.component').then(m => m.IntroComponent) },
  { path: 'projects', loadComponent: () => import('./projects/projects.component').then(m => m.ProjectsComponent) },
  { path: 'skills', loadComponent: () => import('./skills/skills.component').then(m => m.SkillsComponent) },
  { path: 'contact', loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent) },
  { path: '**', redirectTo: '' }
];

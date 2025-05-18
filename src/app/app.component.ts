import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly _matIconRegistry = inject(MatIconRegistry);
  private readonly _domSanitizer = inject(DomSanitizer);

  constructor() {
    this._matIconRegistry.addSvgIcon('github', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg'));
    this._matIconRegistry.addSvgIcon('linkedin', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin.svg'));
  }
  title = 'Portfolio';
}

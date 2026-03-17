import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';
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
  private readonly _platformId = inject(PLATFORM_ID);
  private readonly _matIconRegistry = inject(MatIconRegistry);
  private readonly _domSanitizer = inject(DomSanitizer);

  constructor() {
    if (isPlatformBrowser(this._platformId)) {
      this._matIconRegistry.addSvgIcon('github', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg'));
      this._matIconRegistry.addSvgIcon('linkedin', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin.svg'));
      return;
    }

    const emptyIcon = this._domSanitizer.bypassSecurityTrustHtml(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"></svg>'
    );
    this._matIconRegistry.addSvgIconLiteral('github', emptyIcon);
    this._matIconRegistry.addSvgIconLiteral('linkedin', emptyIcon);
  }
  title = 'Portfolio';
}

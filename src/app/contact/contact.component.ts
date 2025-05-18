import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';

import { MailService } from '../../shared/services/mail.service';

@Component({
  selector: 'app-contact',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatCardModule
],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private readonly _fb = inject(FormBuilder);
  private readonly _snackBar = inject(MatSnackBar);
  private readonly _mailService = inject(MailService)

  protected contactForm: FormGroup;
  readonly contactInfo = {
    email: 'michalczyz02@gmail.com',
    location: 'Poland, Gliwice',
    social: {
      github: 'https://github.com/chatyis',
      linkedin: 'https://www.linkedin.com/in/micha%C5%82-czy%C5%BC-16006122b',
      mail: 'mailto:michalczyz02@gmail.com'
    }
  };

  constructor() {
    this.contactForm = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      title: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  protected onSubmit(): void {
    if (this.contactForm.valid) {
      this._mailService.sendEmail(this.contactForm.value);

      this._snackBar.open('Your message has been sent successfully!', 'Close', {
        duration: 5000,
        panelClass: ['success-snackbar']
      });

      this.contactForm.reset();
    } else {
      this._snackBar.open('Please fill all required fields correctly.', 'Close', {
        duration: 5000,
        panelClass: ['error-snackbar']
      });
    }
  }
}

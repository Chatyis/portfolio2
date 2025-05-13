import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailTemplate } from '../models/email-template.model';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  private readonly _apiUrl = 'https://api.emailjs.com/api/v1.0/email/send';
  private readonly _http = inject(HttpClient);

  readonly serviceInfo: any = {
    service_id: "service_841qwin",
    template_id: "template_gi7q9i9",
    user_id: "3jGbzzMjfocgseVoN",
    template_params: {}
  }

  sendEmail(email: EmailTemplate): void {
    this.serviceInfo.template_params = { ...email };
    this._http.post(this._apiUrl, this.serviceInfo).subscribe();
  }
}

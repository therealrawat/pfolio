import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private sanitizer : DomSanitizer){}

  contact = this.sanitizer.bypassSecurityTrustResourceUrl("assets/img/contact.svg")
  logo = this.sanitizer.bypassSecurityTrustResourceUrl("assets/img/logo.svg")
}

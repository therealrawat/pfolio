import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private domSanitize : DomSanitizer){}

  aboutus = this.domSanitize.bypassSecurityTrustResourceUrl('assets/img/aboutus.svg')
}

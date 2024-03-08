import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headnavs',
  templateUrl: './headnavs.component.html',
  styleUrls: ['./headnavs.component.css']
})
export class HeadnavsComponent {
  constructor(private router: Router, private sanitizer:DomSanitizer) {}

  logo = this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/logo.svg')
  navigateToAbout(){
    this.router.navigate(['/about'])
  }
}

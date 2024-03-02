import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit{

  constructor(private sanitizer: DomSanitizer) {}

  error404ImageUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/error404.svg');
  
  ngOnInit(): void {
  }
}

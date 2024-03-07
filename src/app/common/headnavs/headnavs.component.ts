import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headnavs',
  templateUrl: './headnavs.component.html',
  styleUrls: ['./headnavs.component.css']
})
export class HeadnavsComponent {
  constructor(private router: Router) {}
  navigateToAbout(){
    this.router.navigate(['/about'])
  }
}

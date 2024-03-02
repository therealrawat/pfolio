import { Component, ErrorHandler } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pfolio';
  constructor(private errorHandler: ErrorHandler) {
    // Set up a global error handler
    this.errorHandler.handleError = (error: any) => {
      console.error('Global Error Handler:', error);
      // Redirect to the custom error page or handle as needed
    };
  }
}

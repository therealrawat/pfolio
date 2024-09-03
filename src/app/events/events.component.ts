import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit, OnDestroy {
  greetingText: string = 'HAPPY BIRTHDAY CHINU'
  targetDate: Date;
  countdownText!: string;
  showButton: boolean = false;  // To track if the button should be shown
  showMessage: boolean = false; // To track if the message popup should be shown
  showCountdown: boolean = true;
  private intervalId: any;

  constructor() {
    // Set the target date to my baby's birthday
    this.targetDate = new Date('2024-09-13T00:00:00');
  }

  ngOnInit(): void {
    this.startCountdown();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startCountdown(): void {
    this.updateCountdown();

    this.intervalId = setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }

  updateCountdown(): void {
    const now = new Date().getTime();
    const timeDifference = this.targetDate.getTime() - now;

    if (timeDifference <= 0) {
      this.countdownText = '0'; // Countdown completed
      clearInterval(this.intervalId);
      this.showCountdown = false;
      this.showButton = true; 
      return;
    }

    const seconds = Math.floor(timeDifference / 1000);
    this.countdownText = `${seconds}`;
  }

  onButtonClick(): void {
    this.showButton = false;
    this.showMessage = true; // Show the message popup when the button is clicked
  }
}

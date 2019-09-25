import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  countClicks: Date[] = [];
  showDetails: boolean;

  constructor() {
    this.showDetails = false;
  }


  displayDetails() {
    this.showDetails = !this.showDetails;
    if ( this.showDetails ) {
      this.countClicks.push( new Date() );
    }
  }

  getBackground(index: number) {
    return index >= 5 ? '#007bff' : '';
  }

  getClass(index: number) {
    const addClass = index >= 5;
    return {
      'text-light': addClass,
      'p-1': addClass,
      'mt-1': addClass,
      'mb-1': addClass,
      'rounded': addClass
    };
  }

}

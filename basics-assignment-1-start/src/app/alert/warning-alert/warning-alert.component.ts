import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `<app-alert [message]="message" status="warning"></app-alert>`,
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {
  @Input() message: string;


  constructor() { }

  ngOnInit() {
  }

}

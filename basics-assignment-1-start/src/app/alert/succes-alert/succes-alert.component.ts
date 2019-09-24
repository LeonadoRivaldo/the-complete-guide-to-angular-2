import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-succes-alert',
  template: `<app-alert [message]="message" status="success"></app-alert>`,
  styleUrls: ['./succes-alert.component.css']
})
export class SuccesAlertComponent implements OnInit {

  @Input() message: string;

  constructor() { }

  ngOnInit() {
  }

}

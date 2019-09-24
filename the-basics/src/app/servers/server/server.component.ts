import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { IServer } from './server.model';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent implements OnInit {
  @Input() server: IServer;

  constructor( private pageTitle: Title ) {}

  ngOnInit() {
    this.pageTitle.setTitle(`${environment.appTitle} - Server`);
  }

  get warning(): boolean {
    return this.server.status === 'stopped_services';
  }
  get danger(): boolean {
    return this.server.status === 'down';
  }
  get success(): boolean {
    return this.server.status === 'ok';
  }

}

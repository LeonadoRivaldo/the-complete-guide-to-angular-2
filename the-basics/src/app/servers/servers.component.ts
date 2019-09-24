import { Component, OnInit } from '@angular/core';
import { IServer } from './server/server.model';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  servers: IServer[];

  constructor() { }

  ngOnInit() {
    this.getServers();
  }

  getServers() {
    this.servers = [
      {name: 'One piece', status: 'ok' },
      {name: 'Naruto', status: 'down'},
      {name: 'Dragon Ball', status: 'stopped_services'}
    ];
  }

}

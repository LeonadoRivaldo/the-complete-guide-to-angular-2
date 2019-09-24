import { Component, OnInit } from '@angular/core';
import { IServer, Server } from './server/server.model';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  constructor() {
    this.allowUserControl  = true;
  }

  allowUserControl: boolean;
  servers: IServer[];
  showForm = false;
  newServerName: string = null;

  ngOnInit() {
    this.getServers();
  }

  getServers() {
    this.servers = [
      {name: 'One piece', status: 'ok' },
      {name: 'Naruto', status: 'down'},
      {name: 'Dragon Ball', status: 'stopped_services'},
      {name: 'Inuasha', status: 'offline'}
    ];
  }


  toogleForm() {
    this.showForm = !this.showForm;
  }
  saveServer() {
    this.addServer(this.newServerName);
  }
  addServer(name: string): void {
    this.servers.push( new Server(name) );
    this.newServerName = null;
  }

  removeServer(): void {
    if ( confirm('Remove server, are you sure?') === false ) {
      return ;
    }
    const name = prompt('Server name?');
    let index = -1;
    this.servers.forEach(( v: IServer, i: number ) => {
      if (  v.name.toLowerCase() === name.toLowerCase() ) {
        index = i;
        return;
      }
    });
    this.servers.splice(index, 1);
  }

}

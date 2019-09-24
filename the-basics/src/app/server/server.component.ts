import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent implements OnInit {
  constructor( private pageTitle: Title ){}

  ngOnInit(){
    this.pageTitle.setTitle(`${environment.appTitle} - Server`);
  }

}

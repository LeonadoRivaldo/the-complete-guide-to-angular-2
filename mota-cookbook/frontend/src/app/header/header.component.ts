import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MenuHeaderComponent } from './menu-header/menu-header.component';

@Component({
  selector: 'mcb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('menuheader', {static: false}) private menuheader: MenuHeaderComponent;



  constructor() { }

  ngOnInit() {
  }

  navigate($event, link: string) {
    this.menuheader.navigate($event, link);
  }

}

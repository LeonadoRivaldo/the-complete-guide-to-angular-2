import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export class DetailHeaderMenuOpts {
  delete = true;
  edit = true;
  view = true;
  save = true;
}


@Component({
  selector: 'mcb-detail-header',
  templateUrl: './detail-header.component.html',
  styleUrls: ['./detail-header.component.scss']
})
export class DetailHeaderComponent implements OnInit {

  @Input() title: string;
  @Input() menuOpts: DetailHeaderMenuOpts = new DetailHeaderMenuOpts();

  @Output() eventEdit: EventEmitter<boolean> = new EventEmitter();
  @Output() eventView: EventEmitter<boolean> = new EventEmitter();
  @Output() eventDelete: EventEmitter<boolean> = new EventEmitter();
  @Output() eventSave: EventEmitter<boolean> = new EventEmitter();

  menuOpen = false;
  viewState = true;
  editState = false;

  constructor() { }

  ngOnInit() {
  }

  toogleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  toogleState( stateName: string ) {
    this.viewState = stateName === 'view-state';
    this.editState = stateName === 'edit-state';
  }


  /**
   * MENU MANAGER
   */
  edit() {
    this.eventEdit.emit(true);
    this.toogleState( 'edit-state' );
    // TODO: more actions
  }
  view() {
    this.eventView.emit(true);
    this.toogleState( 'view-state' );
    // TODO: more actions
  }
  delete() {
    this.eventDelete.emit(true);
    // TODO: more actions
  }
  save() {
    this.eventSave.emit(true);
    // TODO: more actions
  }


}

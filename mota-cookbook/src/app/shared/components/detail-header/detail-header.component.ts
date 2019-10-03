import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DetailHeaderMenuOpts } from './detail-header.model';
import { VIEW_DETAIL_STATE } from 'src/app/bo/models/view-detail-state.model';


@Component({
  selector: 'mcb-detail-header',
  templateUrl: './detail-header.component.html',
  styleUrls: ['./detail-header.component.scss']
})
export class DetailHeaderComponent implements OnInit {

  @Input() title: string;
  @Input() menuOpts: DetailHeaderMenuOpts = new DetailHeaderMenuOpts();
  @Input() set state( state: VIEW_DETAIL_STATE ) {
    this.toogleState( state );
  }

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

  toogleState( stateName: VIEW_DETAIL_STATE ) {
    this.viewState = stateName === VIEW_DETAIL_STATE.view;
    this.editState = stateName === VIEW_DETAIL_STATE.edit;
  }


  /**
   * MENU MANAGER
   */
  edit() {
    this.eventEdit.emit(true);
    this.toogleState( VIEW_DETAIL_STATE.edit );
    // TODO: more actions
  }
  view() {
    this.eventView.emit(true);
    this.toogleState( VIEW_DETAIL_STATE.view );
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

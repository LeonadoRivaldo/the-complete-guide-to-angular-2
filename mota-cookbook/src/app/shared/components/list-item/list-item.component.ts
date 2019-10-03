import { Component, OnInit, Input, HostListener, Output, EventEmitter } from '@angular/core';
import { IListITem } from './list-item.compenent.model';

@Component({
  selector: 'mcb-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() item: IListITem;
  @Input() active: boolean;

  @Output() itemClicked: EventEmitter<IListITem>;

  constructor() {
    this.itemClicked = new EventEmitter();
  }

  ngOnInit() {}

  @HostListener('click', ['$event'])
  onClick($event: Event) {
    this.itemClicked.emit(this.item);
  }

  get alt() {
    return  'Image for ' + this.item.title;
  }

  get IMG() {
    return this.item.icon.type === 'IMG' ? this.item.icon.value : null;
  }

  get ICON() {
    return this.item.icon.type === 'ICON' ? this.item.icon.value : null;
  }

}

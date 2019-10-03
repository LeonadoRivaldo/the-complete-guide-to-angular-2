import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IListITem } from '../list-item/list-item.compenent.model';

@Component({
  selector: 'mcb-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.scss']
})
export class ListContainerComponent implements OnInit {

  @Input() items: IListITem[];
  @Input() selectedUiid: string;
  @Output() itemSelection: EventEmitter<IListITem>;


  constructor() {
    this.itemSelection = new EventEmitter();
  }

  ngOnInit() {
  }

  isSelected( uuid: string ): boolean {
    return this.selectedUiid ? this.selectedUiid === uuid : false ;
  }

  selectItem(item: IListITem ) {
    this.itemSelection.emit(item);
  }


}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PageState } from 'src/app/bo/models/menu.item.model';




@Injectable({
  providedIn: 'root'
})
export class PageActionServiceService {

  private pageAddItem = new Subject<any>();
  pageAddItem$ = this.pageAddItem.asObservable();

  constructor() {
  }

  addItem( item: PageState ): void {
    switch (item) {
      case 'recipes-list':
      case 'shopping-list':
      case 'meal-planning':
      case 'ingredients':
            this.pageAddItem.next(item);
            break;
      default:
        break;
    }
  }


}

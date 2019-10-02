import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageStateService {

  constructor() {}

  private pageState = new Subject<string>();
  private pageTitle = new Subject<string>();

  pageStateChange$ = this.pageState.asObservable();
  pageTileChange$ = this.pageTitle.asObservable();

  changePageState( state: string ) {
    this.pageState.next(state);
  }

  setPageTitle( title: string ) {
    this.pageTitle.next(title);
  }



}

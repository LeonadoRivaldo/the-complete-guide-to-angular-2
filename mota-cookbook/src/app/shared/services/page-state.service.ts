import { Injectable, EventEmitter, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageStateService {
  private static state = 'recipes-list';
  pageStateChange: EventEmitter<string>;

  constructor() {
    this.pageStateChange = new EventEmitter();
  }

  get state() {
    return PageStateService.state;
  }

  set state(state: string) {
    PageStateService.state = state;
    this.pageStateChange.emit(this.state);
  }

}

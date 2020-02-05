import { Injectable } from '@angular/core';
import { ActivatedRoute, Route, Router, NavigationExtras } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {}


  public nagivate(path: string[], params?: NavigationExtras ): void {
    this.router.navigate(path, params);
  }

}

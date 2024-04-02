import { Component, Injectable } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private selectedMenuSubject = new BehaviorSubject<string>('home');
  selectedMenu$ = this.selectedMenuSubject.asObservable();

  constructor() { }

  setSelectedMenu(menu: string) {
    this.selectedMenuSubject.next(menu);
  }

}

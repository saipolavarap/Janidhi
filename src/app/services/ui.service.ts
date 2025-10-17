import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UiService {
  private readonly sideMenuOpenSubject = new BehaviorSubject<boolean>(false);
  readonly sideMenuOpen$ = this.sideMenuOpenSubject.asObservable();

  toggleSideMenu(): void {
    this.sideMenuOpenSubject.next(!this.sideMenuOpenSubject.getValue());
  }

  closeSideMenu(): void {
    this.sideMenuOpenSubject.next(false);
  }
}



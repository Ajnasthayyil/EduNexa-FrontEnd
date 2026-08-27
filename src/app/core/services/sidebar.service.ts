import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private isMobileOpenSubject = new BehaviorSubject<boolean>(false);
  isMobileOpen$ = this.isMobileOpenSubject.asObservable();

  toggleMobileSidebar() {
    this.isMobileOpenSubject.next(!this.isMobileOpenSubject.value);
  }

  closeMobileSidebar() {
    this.isMobileOpenSubject.next(false);
  }
}

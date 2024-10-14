import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private sidebarSize = new BehaviorSubject<string>('lg');
  private isCollapsed = new BehaviorSubject<boolean>(false);
  sidebarSize$ = this.sidebarSize.asObservable();
  isCollapsed$ = this.isCollapsed.asObservable();

  toggleSidebarSize(screenSize: string) {
    const currentSize = this.sidebarSize.value;
    if (window.innerWidth >= 992) {
      if (currentSize === 'lg') {
        this.sidebarSize.next('sm');
        this.isCollapsed.next(true);
      } else {
        this.sidebarSize.next('lg');
        this.isCollapsed.next(false);
      }
    } else if (screenSize === 'md') {
      if (currentSize === 'md') {
        this.sidebarSize.next('sm');
        this.isCollapsed.next(true);
      } else {
        this.sidebarSize.next('md');
        this.isCollapsed.next(false);
      }
    } else {
      if (currentSize === 'sm') {
        this.sidebarSize.next('lg');
        this.isCollapsed.next(false);
      } else {
        this.sidebarSize.next('sm');
        this.isCollapsed.next(true);
      }
    }
  }

  toggleBodyClass() {
    document.body.classList.toggle('sidebar-enable');
  }
}

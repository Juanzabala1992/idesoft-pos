import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
})
export class SidenavComponent implements OnInit {
  sidebarSize!: string;
  isCollapsed: boolean=true;

  constructor(private sidebarService: SidebarService) {}

  ngOnInit() {
    this.sidebarService.sidebarSize$.subscribe(size => {
      this.sidebarSize = size;
      document.body.setAttribute('data-sidebar-size', this.sidebarSize);
    });

    this.sidebarService.isCollapsed$.subscribe(collapsed => {
      this.isCollapsed = collapsed;
    });
  }
}

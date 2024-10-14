import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidenav.service';
declare function initVerticalMenuBtn(): void;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit  {
  constructor(private sidebarService:SidebarService){

  }

  ngOnInit(): void {
   
  }

  toggleSidebar() {
    this.sidebarService.toggleBodyClass();
    this.sidebarService.toggleSidebarSize('lg');
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HeaderRoutingModule } from './header-routing.module';
import { NavbarModule } from '../navbar/navbar.module';
import { SideNavModule } from '../sidenav/sidenav.module';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    NavbarModule,
    SideNavModule
],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }

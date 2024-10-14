import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from "./sidenav.component";
import { SidenavRoutingModule } from './sidenav-routing.module';

@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    SidenavRoutingModule,
],
  exports: [
    SidenavComponent
  ]
})
export class SideNavModule { }

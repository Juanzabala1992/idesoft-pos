import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { HeaderModule } from './components/header/header.module';
import {MatButtonModule} from '@angular/material/button';
import { HomeModule } from './components/home/home.module';
import { SideNavModule } from './components/sidenav/sidenav.module';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    HomeModule,
    MatButtonModule,
    SideNavModule
  ],
  providers: [],
})
export class AppModule { }

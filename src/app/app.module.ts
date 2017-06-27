import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './header/nav-bar.component';
import { FooterComponent } from './footer/footer.component';

import { MobileListService } from './shared/mobile.service'  

import { AlertModule } from 'ngx-bootstrap';
import {MdCardModule} from '@angular/material'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
     MdCardModule,
  ],
  providers: [MobileListService],
  bootstrap: [AppComponent]
})
export class AppModule { }

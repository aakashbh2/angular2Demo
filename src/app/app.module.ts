import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './header/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { MobileDetailComponent } from './details/mobile-details.component';
import { ContentComponent } from './content/content.component';
import { Error404Component } from './error/404.component';
import { AddNewComponent } from './addNewProduct/addNew.component';

import { RouterModule } from '@angular/router';
import {MdCardModule} from '@angular/material';

import {ToastrService} from './shared/toastr.service';
import { MobileListService } from './shared/mobile.service';


import { routes } from './app-routing'


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    MobileDetailComponent,
    ContentComponent,
    Error404Component,
    AddNewComponent,
  ],
  imports: [
    BrowserModule,
     MdCardModule,
     FormsModule,
     RouterModule.forRoot(routes),
  ],
  providers: [MobileListService,ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { IoComponent } from './iopage.component';

import { RouterModule } from '@angular/router';
import { MdCardModule } from '@angular/material';

import { ToastrService } from './shared/toastr.service';
import { MobileListService } from './shared/mobile.service';
import { AuthService } from './user/auth.service'
import { ShowComponentService } from './shared/show.component.service'

import { routes } from './app-routing';

import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { ConfirmComponent } from './content/confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    MobileDetailComponent,
    ContentComponent,
    Error404Component,
    AddNewComponent,
    IoComponent,
    ConfirmComponent,
  ],
  imports: [
    BrowserModule,
     MdCardModule,
     FormsModule,
     BootstrapModalModule,
     RouterModule.forRoot(routes),
  ],
  providers: [MobileListService,ToastrService,AuthService,ShowComponentService],
  entryComponents: [
    ConfirmComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { 
}

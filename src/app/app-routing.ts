import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentComponent} from './content/content.component';
import { MobileDetailComponent } from './details/mobile-details.component';
import { Error404Component } from './error/404.component';
import { AddNewComponent } from './addNewProduct/addNew.component';

export const routes: Routes = [
  { path: '', redirectTo: 'mobiles', pathMatch: 'full' },
  {	path: 'addProduct', component: AddNewComponent},
  { path: 'mobiles/:id', component: MobileDetailComponent },
  { path: 'mobiles' ,  component: ContentComponent },
  { path: 'user', loadChildren: 'app/user/user.module#UserModule'},
    {	path: '404', component: Error404Component},
  { path: '**', redirectTo: '/404'},

];

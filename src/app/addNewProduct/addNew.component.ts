import { Component } from '@angular/core';
import { AddNewProduct } from './addNew.model';
import { MobileListService } from '../shared/mobile.service';

import { Router } from '@angular/router'
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'addNew',
  templateUrl: './addNew.component.html',
  styleUrls: ['./addNew.css']
})

export class AddNewComponent {
mobile: AddNewProduct;

constructor(
    private mobileListService: MobileListService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
) {}

onSubmit(formValues): void {
  this.mobile = new AddNewProduct(formValues.value.id, formValues.value.name, formValues.value.rating, formValues.value.brand, formValues.value.price, formValues.value.os, formValues.value.stock, formValues.value.camera, formValues.value.imageUrl, formValues.value.desc);
  this.mobileListService.setMobile(this.mobile);
  this.router.navigate(['mobiles'])
}

cancel() {
  this.router.navigate(['mobiles'])
  }
}

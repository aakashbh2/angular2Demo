import { Component } from '@angular/core';
import { AddNewProduct } from './addNew.model';
import {MobileListService } from '../shared/mobile.service';

import { Router } from '@angular/router'
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

@Component({
  selector: 'addNew',
  templateUrl: './addNew.component.html',
  styleUrls:['./addNew.css']
})

export class AddNewComponent {
  
mobile : AddNewProduct;
  //new AddNewProduct(17,"Iphone",4.7,"Apple","₹55,301","IOS","In Stock","20MP Rear Camera | 20MP Front Camera","https://rukminim1.flixcart.com/image/832/832/j1dvte80/mobile/p/a/t/apple-iphone-5s-a1530-original-imaeednahzknxvrt.jpeg?q=70","This is a good phone");;

 constructor(
    private mobileListService: MobileListService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  onSubmit(formValues): void {
    
    this.mobile= new AddNewProduct(formValues.value.id,formValues.value.name,formValues.value.rating,formValues.value.brand,formValues.value.price,formValues.value.os,formValues.value.stock,formValues.value.camera,formValues.value.imageUrl,formValues.value.desc); 

    this.mobileListService.setMobile(this.mobile);
    this.router.navigate(['mobiles'])
  }  

  onCancel(){
    this.router.navigate(['mobiles'])
  }
}

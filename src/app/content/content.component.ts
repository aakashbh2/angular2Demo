import { Component,OnInit } from '@angular/core';
import { MobileListService} from '../shared/mobile.service';
import {ToastrService} from '../shared/toastr.service';
import {AppComponent} from '../app.component';

import { Router } from '@angular/router';

@Component({
   selector: 'content-page', 
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})

export class ContentComponent implements OnInit{
mobileList;
selectedMobile :any;

constructor(private mobileListService : MobileListService,private toastr: ToastrService,private router: Router){
}

 getMobileList(){
    this.mobileList = this.mobileListService.getMobiles();
  }

  ngOnInit(): void {
     this.getMobileList();
  }	

  handleThumbnailClick(eventName){
		this.toastr.success("Added To Cart",eventName);
	}

   gotoDetail(mobile) {
    this.selectedMobile = mobile;
    this.router.navigate(['mobiles', this.selectedMobile.id]);
  }
}

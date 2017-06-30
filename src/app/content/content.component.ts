import { Component,OnInit } from '@angular/core';
import { MobileListService } from '../shared/mobile.service';
import { ToastrService } from '../shared/toastr.service';
import { AppComponent } from '../app.component';
 
import { Router } from '@angular/router';
import { ShowComponentService} from '../shared/show.component.service';

@Component({
   selector: 'content-page', 
   templateUrl: './content.component.html',
   styleUrls: ['./content.component.css'],
})

export class ContentComponent implements OnInit{
mobileList;
selectedMobile :any;
helloName;
isActive:boolean;

constructor(private showComponentService : ShowComponentService,private mobileListService : MobileListService,private toastr: ToastrService,private router: Router){
   this.helloName = 'Other Mobile';
}

getMobileList(){
    this.mobileList = this.mobileListService.getMobiles();
}

ngOnInit(): void {
    this.getMobileList();
    this.isActive = this.showComponentService.isActive();
}	

handleThumbnailClick(eventName){
		this.toastr.success("Added To Cart",eventName);
}

gotoDetail(mobile) {
  this.selectedMobile = mobile;
  this.router.navigate(['mobiles', this.selectedMobile.id]);
  }
}

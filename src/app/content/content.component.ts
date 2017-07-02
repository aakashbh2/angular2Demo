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
windowsList;
iosList;
androidList;
filteredMobileList;

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

  rating(event,sortValue){
    if(event.target.checked){
      if(sortValue === 'rating'){
        this.mobileList.sort(function (a, b) {
        return a.rating - b.rating;
        });
      }else if(sortValue === 'name'){
        this.mobileList.sort(function(a, b) {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
      return 0;
      });
    }
  } 
}

mon(e,value){
  if(e.target.checked){ 
      if(value === 'Windows'){
       if(this.windowsList == null){
           this.windowsList =this.mobileList.filter(function(mobile){
           return (mobile.os === 'Windows' );
         });
      }

       if(this.filteredMobileList != null) {
          this.filteredMobileList.push(this.windowsList);
     }else{
          this.filteredMobileList = this.windowsList;
     }
    }

    if(value === 'IOS'){
        if(this.iosList == null){
           this.iosList =this.mobileList.filter(function(mobile){
           return (mobile.os === 'IOS' );
         });
      }

       if(this.filteredMobileList != null) {
          this.filteredMobileList.push(this.iosList);
     }else{
          this.filteredMobileList = this.iosList;
     }
    }

    if(value === 'Android'){
        if(this.androidList == null){
           this.androidList = this.mobileList.filter(function(mobile){
           return (mobile.os === 'Android' );
         });
      }
       if(this.filteredMobileList != null){
          this.filteredMobileList.push(this.androidList);
     }else{
          this.filteredMobileList= this.filteredMobileList.pop(this.androidList);
          //this.filteredMobileList = this.filteredMobileList.merge(this.iosList);
     }
    }

    this.mobileList=null;
    this.mobileList = this.filteredMobileList;
    console.log(this.mobileList + " mon " + this.filteredMobileList)

    }else{

    }
  }
}

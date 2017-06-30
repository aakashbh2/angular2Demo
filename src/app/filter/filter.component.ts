import { Component } from '@angular/core'
import { ChangeDetectionStrategy } from '@angular/core';
import { MobileListService} from '../shared/mobile.service';
import { ShowComponentService} from '../shared/show.component.service';


@Component({
   selector: 'filter-page', 
  templateUrl: './filter.html' ,
  styleUrls : ['filter.css']

})
export class FilterComponent{
filteredMobileList;
isActive:boolean;
constructor(private mobileListService : MobileListService, private showComponentService : ShowComponentService){
}

// mon(e,value){
//   this.getMobileList();
//   if(e.target.checked){
//     this.showComponentService.usedComponent(true);
//     this.isActive = this.showComponentService.isActive();
//       if(value === 'Windows'){

//         this.filteredMobileList.splice(0,4);
      
//     }
//   } else {
//     this.getMobileList();
//     this.showComponentService.usedComponent(false);
//     this.isActive = this.showComponentService.isActive();
//   }
// }

rating(event,sortValue){
  this.getMobileList();
    if(event.target.checked){
       this.showComponentService.usedComponent(true);
       this.isActive = this.showComponentService.isActive();
      if(sortValue === 'rating'){
        this.filteredMobileList.sort(function (a, b) {
        return a.rating - b.rating;
        });
      }else if(sortValue === 'name'){
        this.filteredMobileList.sort(function(a, b) {
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
    else{
     this.showComponentService.usedComponent(false);
     this.isActive = this.showComponentService.isActive();
    }
  } 
 
}

 getMobileList(){
    this.filteredMobileList = this.mobileListService.getMobiles();
  } 
}

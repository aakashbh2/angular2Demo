import { Component } from '@angular/core'
import { ChangeDetectionStrategy } from '@angular/core';
import { MobileListService} from '../shared/mobile.service';

@Component({
   selector: 'filter-page', 
  templateUrl: './filter.html' ,
  styleUrls : ['filter.css']

})
export class FilterComponent{
filteredMobileList;
mobileList;
low:number;
high:number;

constructor(private mobileListService : MobileListService){
}

mon(e,value){
  this.getMobileList();
  if(e.target.checked){
    if(value === 'Windows'){
      this.low = 0;
      this.high = 4;
    }
  } else {
    console.log("unchecked" + e);
  }
}

 getMobileList(){
    this.filteredMobileList = this.mobileListService.getMobiles();
  } 
}

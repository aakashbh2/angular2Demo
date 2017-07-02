import { Component, OnInit } from '@angular/core'
import { MobileListService} from '../shared/mobile.service';
import { ShowComponentService} from '../shared/show.component.service';


@Component({
   selector: 'filter-page', 
  templateUrl: './filter.html' ,
  styleUrls : ['filter.css']
})

export class FilterComponent implements OnInit{
filteredMobileList;
isActive:boolean;
mobileList = null;

windowsList = null;
iosList = null;
androidList = null;
constructor(private mobileListService : MobileListService, private showComponentService : ShowComponentService){
}

// mon(e,value){
//   if(e.target.checked){
//     this.showComponentService.usedComponent(true);
//     this.isActive = this.showComponentService.isActive();
 
//       if(value === 'Windows'){
//        if(this.windowsList === null){
//            var windowsFlag = true;
//            this.windowsList =this.filteredMobileList.filter(function(mobile){
//            return (mobile.os === 'Windows' );
//          });
//       }

//        if(this.mobileList != null && windowsFlag) {
//           this.mobileList.push(this.windowsList);
//      }else{
//           this.mobileList = this.windowsList;
//      }
//     }

//     if(value === 'IOS'){
//         if(this.iosList === null){
//            this.iosList =this.filteredMobileList.filter(function(mobile){
//            return (mobile.os === 'IOS' );
//          });
//       }

//        if(this.mobileList != null) {
//           this.mobileList.push(this.iosList);
//      }else{
//           this.mobileList = this.iosList;
//      }
//     }

//     if(value === 'Android'){
//         if(this.androidList == null){
//            this.androidList = this.filteredMobileList.filter(function(mobile){
//            return (mobile.os === 'Android' );
//          });
//       }
//        if(this.mobileList != null){
//           this.mobileList.push(this.androidList);
//      }else{
//           this.mobileList = this.androidList;
//      }
//     }

//     this.filteredMobileList=null;
//     this.filteredMobileList = this.mobileList;
//     console.log(this.mobileList +" babes " + this.filteredMobileList);
//     console.log(typeof(this.mobileList) +" babes " + typeof(this.filteredMobileList));

//   } else {
//     // this.getMobileList();
//     // this.showComponentService.usedComponent(false);
//     // this.isActive = this.showComponentService.isActive();
//   }
// }

// rating(event,sortValue){
//   this.getMobileList();
//     if(event.target.checked){
//        this.showComponentService.usedComponent(true);
//        this.isActive = this.showComponentService.isActive();
//       if(sortValue === 'rating'){
//         this.mobileList.sort(function (a, b) {
//         return a.rating - b.rating;
//         });
//       }else if(sortValue === 'name'){
//         this.mobileList.sort(function(a, b) {
//         var nameA = a.name.toUpperCase();
//         var nameB = b.name.toUpperCase();
//           if (nameA < nameB) {
//             return -1;
//           }
//           if (nameA > nameB) {
//             return 1;
//           }
//       return 0;
//       });
//     }
//     else{
//      this.showComponentService.usedComponent(false);
//      this.isActive = this.showComponentService.isActive();
//     }
//   } 
// }

ngOnInit(): void {
    this.getMobileList();
}

 getMobileList(){
    this.filteredMobileList = this.mobileListService.getMobiles();
  } 
}

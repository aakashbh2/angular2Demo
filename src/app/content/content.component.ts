import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/core';
import { MobileListService } from '../shared/mobile.service';
import { ToastrService } from '../shared/toastr.service';
import { AppComponent } from '../app.component';

import { Router } from '@angular/router';
import { ShowComponentService} from '../shared/show.component.service';
import { ConfirmComponent } from './confirm.component';
import { DialogService } from 'ng2-bootstrap-modal';


@Component({
   selector: 'content-page',
   templateUrl: './content.component.html',
   styleUrls: ['./content.component.css'],
   animations: [
    trigger(
      'myAnimation',
      [
        transition(
        ':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', 'opacity': 1}))
        ]
      ),
      transition(
        ':leave', [
          style({transform: 'translateX(0)', 'opacity': 1}),
          animate('500ms', style({transform: 'translateX(100%)', 'opacity': 0}))
        ]
      )]
    )
  ]
})

export class ContentComponent implements OnInit {
  mobileList = [];
  selectedMobile: any;
  helloName;
  isActive: boolean;
  windowsList = [];
  iosList = [];
  androidList = [];
  filteredMobileList = [];
  i: number;
  confirmResult: boolean = null;
  show:boolean = true;

constructor(private dialogService: DialogService, private showComponentService: ShowComponentService, private mobileListService: MobileListService, private toastr: ToastrService, private router: Router) {
//   this.helloName = 'Other Mobile';
}

getMobileList() {
  this.mobileListService.getMobiles().subscribe(result => {
      this.mobileList = result;
       if (this.filteredMobileList.length == 0) {
        this.i = 1;
        this.filteredMobileList = [...this.mobileList, ...this.filteredMobileList]
        }
    });
}

ngOnInit(): void {
    this.getMobileList();
}

handleThumbnailClick(eventName) {
    this.toastr.success('Added To Cart', eventName);
}

gotoDetail(mobile) {
  this.selectedMobile = mobile;
  this.router.navigate(['mobiles', this.selectedMobile.id]);
 }

showConfirm() {
  this.dialogService.addDialog(ConfirmComponent, {
  title: 'Confirmation',
  message: 'Are you sure?'})
  .subscribe((isConfirmed) => {
  this.confirmResult = isConfirmed;
  });
 }

rating(event, sortValue) {
    if (event.target.checked) {

      if (sortValue === 'rating') {
        this.filteredMobileList.sort(function (a, b) {
        return a.rating - b.rating;
        });

      }else if (sortValue === 'name') {
        this.filteredMobileList.sort(function(a, b) {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
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

mon(e, value) {
  if (e.target.checked) {
    if (this.i == 1) {
      this.i = 2;
      this.filteredMobileList = [];
    }
    if (value === 'Windows') {
      if (this.windowsList.length == 0) {
        this.windowsList = this.mobileList.filter(function(mobile){
        return (mobile.os === 'Windows' );
        });
      }
     this.filteredMobileList = [...this.windowsList, ...this.filteredMobileList]
    }

    if (value === 'IOS') {
      if (this.iosList.length == 0) {
        this.iosList = this.mobileList.filter(function(mobile){
        return (mobile.os === 'IOS' );
        });
      }
     this.filteredMobileList = [...this.iosList, ...this.filteredMobileList]
    }

    if (value === 'Android') {
      if (this.androidList.length == 0) {
        this.androidList = this.mobileList.filter(function(mobile){
        return (mobile.os === 'Android' );
        });
      }
     this.filteredMobileList = [...this.androidList, ...this.filteredMobileList]
     }
    }
    else {
   this.filteredMobileList = this.filteredMobileList.filter(mobile => mobile.os !== value);
   if(this.filteredMobileList.length === 0){
     this.getMobileList();
     }
    }
  }
}

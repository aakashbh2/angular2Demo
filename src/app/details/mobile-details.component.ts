import { Component, OnInit } from '@angular/core';
import { MobileListService} from '../shared/mobile.service';

import {AppComponent} from '../app.component';

import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

@Component({
  selector: 'mobile-details',
  templateUrl: './mobile-details.html',
  styleUrls:['./mobile-details.css']
})

export class MobileDetailComponent implements OnInit{
mobile;

  constructor(
    private mobileList: MobileListService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.mobile=this.mobileList.getMobile(+this.route.snapshot.params['id']);    
  }

  goBack(): void {
    this.location.back();
  }
}

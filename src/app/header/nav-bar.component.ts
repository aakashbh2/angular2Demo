import { Component,OnInit } from '@angular/core';
import { MobileListService} from '../shared/mobile.service';
import {FilterPipe} from '../shared/filterpipe'
import { Pipe, PipeTransform } from '@angular/core';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent  implements OnInit{
mobileList;

constructor(private mobileListService : MobileListService){
}

 getMobileList(){
    this.mobileList = this.mobileListService.getMobiles();
  }

  ngOnInit(): void {
     this.getMobileList();
  }	
}
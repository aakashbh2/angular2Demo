import { Component,OnInit } from '@angular/core';
import { MobileListService} from './shared/mobile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
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

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit{
auth:boolean;
person:any;

constructor(private authservice: AuthService){
}
	ngOnInit(): void {
		this.auth=this.authservice.isAuthenticated();
		this.person=this.authservice.isAuthenticated();
	}	
}
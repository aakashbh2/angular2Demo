import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from './auth.service'

@Component({
  templateUrl: './login.html',
})

export class LoginComponent{
constructor(private router:Router,private authservice: AuthService) {
}

login(formValues) {
  this.authservice.loginUser('aakash','aakash');
  this.router.navigate(['mobiles'])
}

cancel() {
  this.router.navigate(['mobiles'])
  }
}

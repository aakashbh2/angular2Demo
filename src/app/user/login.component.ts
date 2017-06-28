import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  templateUrl: './login.html',
})

export class LoginComponent{
  constructor(private router:Router) {
  }

   login(formValues) {
    console.log(formValues.userName, formValues.password);
    this.router.navigate(['mobiles'])
  }

  cancel() {
    this.router.navigate(['mobiles'])
  }

}

import { Component } from '@angular/core'

@Component({
  template: `
    <h1 class="errorMessage">404 <br/> Page Not Found</h1>
  `,
  styles: [`
    .errorMessage { 
      margin-top:150px; 
      font-size: 170px;
      text-align: center; 
      margin-bottom : 150px;
    }`]
})
export class Error404Component{
  constructor() {
  }

}
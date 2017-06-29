import { Component } from '@angular/core'

@Component({
  template: `
  <nav-bar></nav-bar>
    <h1 class="errorMessage">404 <br/> Page Not Found</h1>
    <footer-bottom></footer-bottom>
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

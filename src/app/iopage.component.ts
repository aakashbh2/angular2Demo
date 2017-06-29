import { Component, Input } from '@angular/core';

@Component({
  selector: 'io-page',
  template: `<p>Hello, {{name}}!</p>`
})

export class IoComponent{
	@Input() name: string;
}
 
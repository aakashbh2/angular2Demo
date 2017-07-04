import { Injectable } from '@angular/core'

@Injectable()
export class ShowComponentService {
  currentComponent;
  usedComponent(value: boolean) {
    this.currentComponent = value
}

isActive() {
  return this.currentComponent;
  }
}

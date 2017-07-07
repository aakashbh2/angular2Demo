import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MobileListService {

constructor(private http: Http) {
}

  getMobiles() {
     return this.http.get('assets/mobileList.json')
         .map(response => response.json())
         .delay(5000);
}

// getMobile(id: number) {
//   return MOBILE_LIST.find(mobile => mobile.id === id)
// }

// setMobile(newValue) {
//   MOBILE_LIST.push(newValue);
//     }
}

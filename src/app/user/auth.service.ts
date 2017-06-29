import { Injectable } from '@angular/core'

@Injectable()
export class AuthService {
  currentUser
  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'Aakash',
      lastName: 'Bhatnagar'
  }
}

isAuthenticated() {
  return this.currentUser;
  }
}

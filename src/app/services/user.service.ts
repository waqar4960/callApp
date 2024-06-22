import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user = {
    id: 1,
    name: 'Waqar Ahmad',
    age: 25,
    location: 'Pakistan',
    avatar: 'assets/4960.JPG',
    profileCompletion: 0.7,
  };

  constructor() {}
  getUser() {
    return this.user;
  }
}

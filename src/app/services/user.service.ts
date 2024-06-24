import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user = {
    id: 1,
    name: 'Emma Wattson',
    age: 25,
    location: 'Germany',
    avatar: '/assets/1.png',
    profileCompletion: 0.7,
  };

  constructor() {}
  getUser() {
    return this.user;
  }
}

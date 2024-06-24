import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CallsService {
  private calls = [
    {
      id: 1,
      name: 'Alfredo Calzoni',
      time: '57 mins Ago',
      avatar : 'https://www.w3schools.com/howto/img_avatar2.png',
      type: 'audio',
      direction: 'outgoing',
    },
    {
      id: 2,
      name: 'Clara Hazel',
      time: '57 mins Ago',
      avatar : 'https://www.w3schools.com/howto/img_avatar.png',
      type: 'video',
      direction: 'incoming',
    },
    // more call data
  ];
  constructor() {}
  getCalls() {
    return this.calls;
  }
}

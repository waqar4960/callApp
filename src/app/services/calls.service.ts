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
      type: 'audio',
      direction: 'outgoing',
    },
    {
      id: 2,
      name: 'Clara Hazel',
      time: '57 mins Ago',
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

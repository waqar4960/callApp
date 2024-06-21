import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChatsService {
  private chats = [
    {
      id: 1,
      name: 'Alfredo Calzoni',
      messages: [
        { text: 'Hi there!', time: '10:00 AM' },
        { text: 'Hello!', time: '10:05 AM' },
      ],
      avatar: '',
      unread: true,
    },
    {
      id: 2,
      name: 'Clara Hazel',
      messages: [
        { text: 'Hi there!', time: '10:00 AM' },
        { text: 'Hello!', time: '10:05 AM' },
      ],
      avatar: '',
      unread: true,
    },
    {
      id: 3,
      name: 'Brandon Aminoff',
      messages: [
        { text: 'Hi there!', time: '10:00 AM' },
        { text: 'Hello!', time: '10:05 AM' },
      ],

      avatar: '',
      unread: true,
    },
    {
      id: 4,
      name: 'Amina Mina',
      messages: [
        { text: 'Hi there!', time: '10:00 AM' },
        { text: 'Hello!', time: '10:05 AM' },
      ],
      avatar: '',
      unread: false,
    },
    {
      id: 5,
      name: 'Savanna Hall',
      messages: [
        { text: 'Hi there!', time: '10:00 AM' },
        { text: 'Hello!', time: '10:05 AM' },
      ],
      avatar: '',
      unread: false,
    },
    // more chat data
  ];
  getChats() {
    return this.chats;
  }
  getChatById(chatId: number) {
    return this.chats.find((chat) => chat.id === chatId);
  }
  constructor() {}
}

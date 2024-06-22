import { Injectable } from '@angular/core';
interface Chat {
  id: number;
  sender: string;
  content: string;
  timestamp: Date | string;
  type: 'sent' | 'received';
}
interface Conversation {
  id: number;
  user: string;
  messages: Chat[];
  unread: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class ChatsService {
  private chats: Conversation[] = [
    {
      id: 1,
      user: 'Clara Hazel',
      unread: true,
      messages: [
        {
          id: 1,
          sender: 'Clara Hazel',
          content: 'Hi Nadia, Clara here! 👋',
          timestamp: '8:24 PM',
          type: 'received',
        },
        {
          id: 2,
          sender: 'You',
          content: 'Hey Clara, Nice to meet you! 😅',
          timestamp: '8:25 PM',
          type: 'sent',
        },
        {
          id: 3,
          sender: 'Clara Hazel',
          content: 'You too! Seems we have same things in common here',
          timestamp: '8:30 PM',
          type: 'received',
        },
        {
          id: 4,
          sender: 'You',
          content: 'So what song are you currently listening to?',
          timestamp: '9:00 PM',
          type: 'sent',
        },
        {
          id: 5,
          sender: 'Clara Hazel',
          content: 'Been listening to John Mayer’s new song, Last Train Home',
          timestamp: '9:05 PM',
          type: 'received',
        },
      ],
    },
    {
      id: 2,
      user: 'Brandon Aminoff',
      unread: false,
      messages: [
        {
          id: 1,
          sender: 'Brandon Aminoff',
          content: 'Hi Waqar, Brandon here! 👋',
          timestamp: '8:24 PM',
          type: 'received',
        },
        {
          id: 2,
          sender: 'You',
          content: 'Hey Brandon, Nice to meet you! 😅',
          timestamp: '8:25 PM',
          type: 'sent',
        },
      ],
    },
  ];
  getChats(id?: any) {
    if (id) {
      return this.chats.filter((f) => f.id == id);
    }
    return this.chats;
  }
  getMessages(chatId: number) {
    const conversation = this.chats.find((conv) => conv.id === chatId);
    return conversation ? conversation.messages : [];
  }
  sendMessage(chatId: number, content: string) {
    const conversation = this.chats.find((conv) => conv.id === chatId);
    if (conversation) {
      const newMessage: Chat = {
        id: conversation.messages.length + 1,
        sender: 'You',
        content: content,
        timestamp: new Date(),
        type: 'sent',
      };
      conversation.messages.push(newMessage);
    }
  }
  constructor() {}

  // getChatById(chatId: number) {
  //   return this.chats.find((messages) => messages.id === chatId);
  // }
}
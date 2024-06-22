import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatsService } from 'src/app/services/chats.service';

@Component({
  selector: 'app-conversation-page',
  templateUrl: './conversation-page.page.html',
  styleUrls: ['./conversation-page.page.scss'],
})
export class ConversationPagePage implements OnInit {
  chatsId!: number;
  chatDetails: any;
  chats!: any[];
  newMessage: string = '';
  chatId!: number;

  constructor(
    private chatService: ChatsService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.chatId = Number(this.route.snapshot.paramMap.get('id'));
    this.chats = this.chatService.getMessages(this.chatId);
    const currentConv = this.chatService.getChats(this.chatId);
    console.log(currentConv);
    if (currentConv?.length) {
      this.chatDetails = currentConv[0];
      console.log(currentConv?.[0].user);
    }

    // this.chatsId = Number(this.route.snapshot.paramMap.get('id'));
    // console.log(this.chatsId);

    // this.chatDetails = this.chatService.getChats();
    // console.log(this.chatDetails);
  }

  sendMessage() {
    if (this.newMessage.trim().length > 0) {
      this.chatService.sendMessage(this.chatId, this.newMessage);
      this.newMessage = '';
      this.chats = this.chatService.getMessages(this.chatId); // Refresh messages
    }
  }
}

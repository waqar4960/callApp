import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatsService } from 'src/app/services/chats.service';

@Component({
  selector: 'app-conversation-page',
  templateUrl: './conversation-page.page.html',
  styleUrls: ['./conversation-page.page.scss'],
})
export class ConversationPagePage implements OnInit {
  chatId!: number;
  chatDetails: any;

  constructor(
    private chatService: ChatsService,
    private route: ActivatedRoute
  ) {}
  // showing messages in convesation page

  ngOnInit() {
    this.chatId = Number(this.route.snapshot.paramMap.get('id'));
    this.chatDetails = this.chatService.getChatById(this.chatId);
  }
}

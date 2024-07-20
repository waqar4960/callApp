import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { CallsService } from 'src/app/services/calls.service';
import { ChatsService } from 'src/app/services/chats.service';

@Component({
  selector: 'app-conversation-page',
  templateUrl: './conversation-page.page.html',
  styleUrls: ['./conversation-page.page.scss'],
})
export class ConversationPagePage implements OnInit, AfterViewInit {
  @ViewChild(IonContent, { static: false }) content!: IonContent;

  chatsId!: number;
  chatDetails: any;
  chats!: any[];
  newMessage: string = '';
  chatId!: number;
  inputText: any;
  constructor(
    private chatService: ChatsService,
    private route: ActivatedRoute,
    private router: Router,
    private callService: CallsService
  ) {}
  ngOnInit() {
    this.chatId = Number(this.route.snapshot.paramMap.get('id'));
    this.chats = this.chatService.getMessages(this.chatId);
    const currentConv = this.chatService.getChats(this.chatId);
    // console.log(currentConv);
    if (currentConv?.length) {
      this.chatDetails = currentConv[0];
      // console.log(currentConv?.[0].user);
    }
    // console.log(document.0getElementsByClassName('container'));
    this.callId = Number(this.route.snapshot.paramMap.get('id'));
    this.calls = this.callService.getCalls(this.callId);
  }

  ngAfterViewInit() {
    this.scrollToBottom();
  }

  sendMessage() {
    if (this.newMessage.trim().length > 0) {
      this.chatService.sendMessage(this.chatId, this.newMessage);
      this.newMessage = '';
      this.chats = this.chatService.getMessages(this.chatId); // Refresh messages
    }
    setTimeout(() => {
      this.scrollToBottom();
    }, 100);
  }

  scrollToBottom() {
    this.content.scrollToBottom(300);
  }
  calls: any;
  callId: any;

  navigateTocall(calls: number) {
    this.router.navigate(['/single-call', calls]);
  }
}

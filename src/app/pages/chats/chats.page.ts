import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CallsService } from 'src/app/services/calls.service';
import { ChatsService } from 'src/app/services/chats.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {
  searchTerm: string = '';
  selectedSegment: string = 'messages';

  // for search bar
  filteredChats: any[] = [];
  filteredCalls: any[] = [];
  filterList() {
    const searchTermLower = this.searchTerm.toLowerCase();
    if (this.selectedSegment === 'messages') {
      this.filteredChats = this.chatService
        .getChats()
        .filter((chat) => chat.name.toLowerCase().includes(searchTermLower));
    } else if (this.selectedSegment === 'calls') {
      this.filteredCalls = this.callService
        .getCalls()
        .filter((call) => call.name.toLowerCase().includes(searchTermLower));
    }
  }
  // for segment change
  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value;
    this.filterList();
  }
  // chat conversation page routing
  openConversation(chatID: number) {
    this.router.navigate(['/conversation-page', chatID]);
  }

  constructor(
    private chatService: ChatsService,
    private callService: CallsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.filterList();
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConversationPagePageRoutingModule } from './conversation-page-routing.module';

import { ConversationPagePage } from './conversation-page.page';
import { VoiceMessageComponent } from './voice-message/voice-message.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConversationPagePageRoutingModule,
  ],
  declarations: [ConversationPagePage, VoiceMessageComponent],
})
export class ConversationPagePageModule {}

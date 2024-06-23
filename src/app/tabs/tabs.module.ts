import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { HomePageModule } from '../pages/home/home.module';
import { ChatsPageModule } from '../pages/chats/chats.module';
import { NearMePageModule } from '../pages/near-me/near-me.module';
import { ContactsPageModule } from '../pages/contacts/contacts.module';
import { SettingsPageModule } from '../pages/settings/settings.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    ChatsPageModule,
    NearMePageModule,
    ContactsPageModule,
    SettingsPageModule,
  ],
  declarations: [TabsPage],
})
export class TabsPageModule {}

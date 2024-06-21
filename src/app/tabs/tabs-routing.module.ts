import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../pages/home/home-routing.module').then(
            (m) => m.HomePageRoutingModule
          ),
      },
      {
        path: 'chats',
        loadChildren: () =>
          import('../pages/chats/chats-routing.module').then(
            (m) => m.ChatsPageRoutingModule
          ),
      },
      {
        path: 'contacts',
        loadChildren: () =>
          import('../pages/contacts/contacts.module').then(
            (m) => m.ContactsPageModule
          ),
      },
      {
        path: 'near-me',
        loadChildren: () =>
          import('../pages/near-me/near-me.module').then(
            (m) => m.NearMePageModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('../pages/settings/settings.module').then(
            (m) => m.SettingsPageModule
          ),
      },

      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}

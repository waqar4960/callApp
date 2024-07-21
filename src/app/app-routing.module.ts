import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'conversation-page/:id',
    loadChildren: () =>
      import('./pages/conversation-page/conversation-page.module').then(
        (m) => m.ConversationPagePageModule
      ),
  },
  {
    path: 'single-call/:id',
    loadChildren: () =>
      import('./pages/callPages/single-call/single-call.module').then(
        (m) => m.SingleCallPageModule
      ),
  },  {
    path: 'incoming-call',
    loadChildren: () => import('./pages/callPages/incoming-call/incoming-call.module').then( m => m.IncomingCallPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

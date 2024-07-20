import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleCallPageRoutingModule } from './single-call-routing.module';

import { SingleCallPage } from './single-call.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleCallPageRoutingModule
  ],
  declarations: [SingleCallPage]
})
export class SingleCallPageModule {}

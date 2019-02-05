import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BadgesPage } from './badges';

@NgModule({
  declarations: [
    BadgesPage,
  ],
  imports: [
    IonicPageModule.forChild(BadgesPage),
  ],
})
export class BadgesPageModule {}

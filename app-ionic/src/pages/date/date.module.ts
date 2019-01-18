import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatePage } from './date';

@NgModule({
  declarations: [
    DatePage,
  ],
  imports: [
    IonicPageModule.forChild(DatePage),
  ],
})
export class DatePageModule {}

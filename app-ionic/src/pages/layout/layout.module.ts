import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LayoutPage } from './layout';

@NgModule({
  declarations: [
    LayoutPage,
  ],
  imports: [
    IonicPageModule.forChild(LayoutPage),
  ],
})
export class LayoutPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PreloadPage } from './preload';

@NgModule({
  declarations: [
    PreloadPage,
  ],
  imports: [
    IonicPageModule.forChild(PreloadPage),
  ],
})
export class PreloadPageModule {}

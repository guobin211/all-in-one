import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
/**
 * app page
 */
import { HomePage } from '../components/home/home';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ListComponent } from '../components/list/list';

/**
 * native plagin
 */
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
import { File } from '@ionic-native/file';
import { Device } from '@ionic-native/device';
import { Base64 } from '@ionic-native/base64';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '返回',
      monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
      monthShortNames: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      dayNames: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
      dayShortNames: ['7', '1', '2', '3', '4', '5', '6'],
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    ImagePicker,
    File,
    Device,
    Base64,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }

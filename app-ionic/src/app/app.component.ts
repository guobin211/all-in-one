import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Chart',
      url: '/antv',
      icon: 'basket'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Button',
      url: '/button',
      icon: 'albums'
    },
    {
      title: 'Action',
      url: '/action',
      icon: 'hand'
    },
    {
      title: 'Alert',
      url: '/alert',
      icon: 'alert'
    },
    {
      title: 'Badge',
      url: '/badge',
      icon: 'at'
    },
    {
      title: 'Card',
      url: '/card',
      icon: 'book'
    },
    {
      title: 'CheckBox',
      url: '/checkbox',
      icon: 'checkmark'
    },
    {
      title: 'DateTime',
      url: '/datetime',
      icon: 'calendar'
    },
    {
      title: 'Grid',
      url: '/grid',
      icon: 'apps'
    },
    {
      title: 'Icons',
      url: '/icons',
      icon: 'at'
    },
    {
      title: 'Input',
      url: '/input',
      icon: 'create'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}

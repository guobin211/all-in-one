import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../components/home/home';
import { ListComponent } from '../components/list/list';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, path: string}>;

  childComponent: Array<{title: string, Component: any}>;

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', path: '' },
      { title: 'List', path: 'page-list' },
      { title: 'Home', path: '' },
      { title: 'List', path: 'page-list' },
      { title: 'Home', path: '' },
      { title: 'List', path: 'page-list' },
      { title: 'Home', path: '' },
      { title: 'List', path: 'page-list' },
      { title: 'Home', path: '' },
      { title: 'List', path: 'page-list' },
      { title: 'Home', path: '' },
      { title: 'List', path: 'page-list' },
      { title: 'Home', path: '' },
      { title: 'List', path: 'page-list' },
      { title: 'Home', path: '' },
      { title: 'List', path: 'page-list' },
      { title: 'Home', path: '' },
      { title: 'List', path: 'page-list' },
      { title: 'Home', path: '' },
      { title: 'List', path: 'page-list' },
      { title: 'Home', path: '' },
      { title: 'List', path: 'page-list' },
      { title: 'Home', path: '' },
      { title: 'List', path: 'page-list' },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.backgroundColorByHexString('#ffffff');
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (page % 2 === 0) {
      this.nav.setRoot(HomePage);
    } else {
      this.nav.setRoot(ListComponent);
    }

  }
}

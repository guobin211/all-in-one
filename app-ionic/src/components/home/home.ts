import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

export interface PageConfig {
  color: string;
  path: string;
  text: string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  anotherPage: PageConfig[] = [
    {
      color: 'primary', path: 'page-fab', text: '分享按钮'
    },
    {
      color: 'danger', path: 'page-card', text: '卡片视图'
    },
    {
      color: 'light', path: 'page-layout', text: '网格布局'
    },
    {
      color: 'primary', path: 'page-icon', text: '字体图标'
    },
    {
      color: 'danger', path: 'page-loading', text: '加载效果'
    },
    {
      color: 'light', path: 'page-tabs', text: '标签页面'
    },
    {
      color: 'primary', path: 'page-toast', text: '提示信息'
    },
    {
      color: 'danger', path: 'page-date', text: '日期选择'
    },
    {
      color: 'light', path: 'page-check', text: '选择器'
    },
    {
      color: 'primary', path: 'page-badges', text: 'Badges'
    }
  ]
  constructor(public navCtrl: NavController,
    private camera: Camera,
    private alertCtrl: AlertController) {

  }

  onClickAlert() {
    console.log('click');
    let alert = this.alertCtrl.create({
      title: '消息提示信息',
      message: 'Do you want to buy this book?',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '确认',
          handler: () => {
            console.log('Buy clicked');
          }
        }
      ]
    });
    alert.present();
  }

  onClickNativeCamare() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log(base64Image);
    }, (err) => {
      // Handle error
    });
  }

  onClickNavToAnotherPage(path) {
    this.navCtrl.push(path);
  }

}

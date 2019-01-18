import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Base64 } from '@ionic-native/base64';

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

  cameraImg: string;
  /**
   * 相机设置
   */
  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

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
    },
    {
      color: 'danger', path: 'page-antv', text: '数据图表'
    }, {
      color: 'light', path: 'page-file', text: '文件系统'
    },
  ]
  constructor(public navCtrl: NavController,
    private camera: Camera,
    private base64: Base64,
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

    /**
     * 调相机
     */
    this.camera.getPicture(this.options).then((imageData) => {
      /**
       * 把本地file转base64
       * @params 'file:///...'
       */
      this.base64.encodeFile(imageData).then(base64File => {
        this.cameraImg = base64File;
      }).catch(err => {
        console.log(err);
      })
    }, (err) => {
      // Handle error
    });

  }

  onClickNavToAnotherPage(path) {
    this.navCtrl.push(path);
  }

}

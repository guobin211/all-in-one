import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';
import { File } from '@ionic-native/file';


/**
 * Generated class for the FilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'page-file'
})
@Component({
  selector: 'page-file',
  templateUrl: 'file.html',
})
export class FilePage {
  options = {
    maximumImagesCount: 5,
    width: 800,
    height: 800,
    quality: 50,
    outputType: 1,
  }

  fileUrl: any[];
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private file: File,
      private imagePicker: ImagePicker) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilePage');
  }

  imagePick() {
    this.imagePicker.getPictures(this.options).then((results) => {
      const res = [];
      for (var i = 0; i < results.length; i++) {
        this.file.readAsDataURL(
          'file:///data/user/0/io.ionic.starter/cache/',
          results[i].replace('file:///data/user/0/io.ionic.starter/cache/', '')
        ).then( base64 => {
          console.log(base64);
          res.push(base64);
        }).catch(err => {
          console.log(err);
        })
      }
      this.fileUrl = res;
    }, (err) => { });
    console.log(this.fileUrl);
  }
}

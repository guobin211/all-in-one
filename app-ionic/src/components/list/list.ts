import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the ListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'list',
  templateUrl: 'list.html'
})
export class ListComponent {

  text: string;

  constructor(public navCtrl: NavController,) {
    console.log('Hello ListComponent Component');
    this.text = 'Hello World';
  }

}

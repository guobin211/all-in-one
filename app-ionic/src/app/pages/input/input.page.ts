import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {
  username;
  password;
  isSubmit = false;
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('ok' + this.username + this.password);
    this.isSubmit = !this.isSubmit;
  }
}

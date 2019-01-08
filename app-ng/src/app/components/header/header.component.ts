import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() isOpenSide = new EventEmitter();

  defaultOpen = false;
  constructor() { }

  ngOnInit() {
  }
  changeIsOpen() {
    this.defaultOpen = !this.defaultOpen;
    this.isOpenSide.emit(this.defaultOpen);
  }
}

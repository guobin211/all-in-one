import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {
  public MONTH_NAMES: string = "一月, 二月, 三月, 四月, 五月, 六月, 七月, 八月, 九月, 十月, 十月, 十一月, 十二月";
  public DAYS_NAMES: string = "星期天, 星期一, 星期二, 星期三, 星期四, 星期五, 星期六";
  public current: any;
  constructor() { }

  ngOnInit() {
  }

}

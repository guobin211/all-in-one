import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AntvPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'page-antv'
})
@Component({
  selector: 'page-antv',
  templateUrl: 'antv.html',
})
export class AntvPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AntvPage');
    this.renderChart();
    this.renderSpace();
    this.renderTwoYx();
    this.renderLine();
  }

  renderChart() {
    GM.Global.pixelRatio = 2;
    var data = [
      { "time": "周一", "tem": 6.9, "city": "tokyo" },
      { "time": "周二", "tem": 9.5, "city": "tokyo" },
      { "time": "周三", "tem": 14.5, "city": "tokyo" },
      { "time": "周四", "tem": 18.2, "city": "tokyo" },
      { "time": "周五", "tem": 21.5, "city": "tokyo" },
      { "time": "周六", "tem": 25.2, "city": "tokyo" },
      { "time": "周日", "tem": 26.5, "city": "tokyo" },
      { "time": "周一", "tem": 0.8, "city": "newYork" },
      { "time": "周二", "tem": 5.7, "city": "newYork" },
      { "time": "周三", "tem": 11.3, "city": "newYork" },
      { "time": "周四", "tem": 17, "city": "newYork" },
      { "time": "周五", "tem": 22, "city": "newYork" },
      { "time": "周六", "tem": 24.8, "city": "newYork" },
      { "time": "周日", "tem": 24.1, "city": "newYork" },
      { "time": "周一", "tem": 0.6, "city": "berlin" },
      { "time": "周二", "tem": 3.5, "city": "berlin" },
      { "time": "周三", "tem": 8.4, "city": "berlin" },
      { "time": "周四", "tem": 13.5, "city": "berlin" },
      { "time": "周五", "tem": 17, "city": "berlin" },
      { "time": "周六", "tem": 18.6, "city": "berlin" },
      { "time": "周日", "tem": 17.9, "city": "berlin" }
    ];
    var chart = new GM.Chart({
      id: 'c1'
    });
    chart.source(data, {
      tem: {
        tickCount: 5
      }
    });
    //配置刻度文字大小，供PC端显示用(移动端可以使用默认值20px)
    chart.axis('time', {
      label: {
        fontSize: 14
      },
      grid: null
    });
    chart.axis('tem', {
      label: {
        fontSize: 14
      }
    });
    chart.intervalDodge().position('time*tem').color('city');
    chart.render();
  }

  renderSpace() {
    var Util = GM.Util;
    // 双精度
    GM.Global.pixelRatio = 2;
    var data = [
      { "time": '2016-08-08 00:00:00', "tem": 10, "city": "beijing" },
      { "time": '2016-08-08 00:10:00', "tem": 22, "city": "beijing" },
      { "time": '2016-08-08 00:30:00', "tem": 16, "city": "beijing" },
      { "time": '2016-08-09 00:35:00', "tem": 26, "city": "beijing" },
      { "time": '2016-08-09 01:00:00', "tem": 12, "city": "beijing" },
      { "time": '2016-08-09 01:20:00', "tem": 26, "city": "beijing" },
      { "time": '2016-08-10 01:40:00', "tem": 18, "city": "beijing" },
      { "time": '2016-08-10 02:00:00', "tem": 26, "city": "beijing" },
      { "time": '2016-08-10 02:20:00', "tem": 12, "city": "beijing" },
      { "time": '2016-08-08 00:00:00', "tem": 28, "city": "newYork" },
      { "time": '2016-08-08 00:10:00', "tem": 16, "city": "newYork" },
      { "time": '2016-08-08 00:30:00', "tem": 26, "city": "newYork" },
      { "time": '2016-08-09 00:35:00', "tem": 12, "city": "newYork" },
      { "time": '2016-08-09 01:00:00', "tem": 26, "city": "newYork" },
      { "time": '2016-08-09 01:20:00', "tem": 20, "city": "newYork" },
      { "time": '2016-08-10 01:40:00', "tem": 29, "city": "newYork" },
      { "time": '2016-08-10 02:00:00', "tem": 16, "city": "newYork" },
      { "time": '2016-08-10 02:20:00', "tem": 22, "city": "newYork" }
    ];
    var chart = new GM.Chart({
      id: 'c2'
    });
    chart.source(data, {
      time: {
        type: 'timeCat',
        mask: 'yyyy-mm-dd',
        tickCount: 3,
        range: [0, 1]
      },
      tem: {
        tickCount: 5,
        min: 0
      }
    });
    //配置刻度文字大小，供PC端显示用(移动端可以使用默认值20px)
    chart.axis('tem', {
      label: {
        fontSize: 14
      }
    });
    //配置time刻度文字样式
    var label = {
      fill: '#979797',
      font: '14px san-serif',
      offset: 6
    };
    chart.axis('time', {
      label: function (text, index, total) {
        var cfg = Util.mix({}, label);
        // 第一个点左对齐，最后一个点右对齐，其余居中，只有一个点时左对齐
        if (index === 0) {
          cfg.textAlign = 'start';
        }
        if (index > 0 && index === total - 1) {
          cfg.textAlign = 'end';
        }
        return cfg;
      }
    });
    chart.area().position('time*tem').color('city').shape('smooth').style({
      opacity: 0.6
    });
    chart.render();
  }

  renderTwoYx() {
    GM.Global.pixelRatio = 2;
    var data = [
      { "time": "周一", "tem": 6.9, "rain": 10 },
      { "time": "周二", "tem": 9.5, "rain": 13 },
      { "time": "周三", "tem": 14.5, "rain": 14 },
      { "time": "周四", "tem": 18.2, "rain": 10 },
      { "time": "周五", "tem": 21.5, "rain": 12 },
      { "time": "周六", "tem": 25.2, "rain": 16 },
      { "time": "周日", "tem": 26.5, "rain": 13 },
    ];
    var chart = new GM.Chart({
      id: 'c3'
    });
    chart.source(data, {
      tem: {
        tickCount: 5,
        max: 30,
        min: 0
      },
      rain: {
        tickCount: 5,
        min: 0
      }
    });
    //配置刻度文字大小，供PC端显示用(移动端可以使用默认值20px)
    chart.axis('time', {
      label: {
        fontSize: 14
      },
      grid: null
    });
    chart.axis('tem', {
      label: {
        fontSize: 14
      }
    });
    chart.axis('rain', {
      label: {
        fontSize: 14
      }
    });
    chart.interval().position('time*tem');
    chart.line().position('time*rain').color('#5ed470').size(2).shape('smooth');
    chart.point().position('time*rain').color('#5ed470');
    chart.render();
  }

  renderLine() {
    GM.Global.pixelRatio = 2;
    var Util = GM.Util;
    var data = [
      { "time": '周一', "tem": 10, "city": "beijing" },
      { "time": '周二', "tem": 22, "city": "beijing" },
      { "time": '周三', "tem": 20, "city": "beijing" },
      { "time": '周四', "tem": 26, "city": "beijing" },
      { "time": '周五', "tem": 20, "city": "beijing" },
      { "time": '周六', "tem": 26, "city": "beijing" },
      { "time": '周日', "tem": 28, "city": "beijing" },
      { "time": '周一', "tem": 5, "city": "newYork" },
      { "time": '周二', "tem": 12, "city": "newYork" },
      { "time": '周三', "tem": 26, "city": "newYork" },
      { "time": '周四', "tem": 20, "city": "newYork" },
      { "time": '周五', "tem": 28, "city": "newYork" },
      { "time": '周六', "tem": 26, "city": "newYork" },
      { "time": '周日', "tem": 20, "city": "newYork" }
    ];
    var chart = new GM.Chart({
      id: 'c4'
    });
    var defs = {
      time: {
        tickCount: 7,
        range: [0, 1]
      },
      tem: {
        tickCount: 5,
        min: 0
      }
    };
    //配置time刻度文字样式
    var label = {
      fill: '#979797',
      font: '14px san-serif',
      offset: 6
    };
    chart.axis('time', {
      label: function (text, index, total) {
        var cfg = Util.mix({}, label);
        // 第一个点左对齐，最后一个点右对齐，其余居中，只有一个点时左对齐
        if (index === 0) {
          cfg.textAlign = 'start';
        }
        if (index > 0 && index === total - 1) {
          cfg.textAlign = 'end';
        }
        return cfg;
      }
    });
    //配置刻度文字大小，供PC端显示用(移动端可以使用默认值20px)
    chart.axis('tem', {
      label: {
        fontSize: 14
      }
    });
    chart.source(data, defs);
    chart.line().position('time*tem').color('city').shape('smooth');
    chart.render();
  }
}

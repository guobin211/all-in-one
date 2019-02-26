import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-antv',
  templateUrl: './antv.page.html',
  styleUrls: ['./antv.page.scss'],
})
export class AntvPage implements OnInit {
  pixel: number;
  width: number;
  constructor() { }

  ngOnInit() {
    this.pixel = window.devicePixelRatio;
    this.width = document.getElementById("hooks").clientWidth;
    this.fetchData();
  }
  renderChart() {
    const data = [
      { genre: 'Sports', sold: 275 },
      { genre: 'Strategy', sold: 115 },
      { genre: 'Action', sold: 120 },
      { genre: 'Shooter', sold: 350 },
      { genre: 'Other', sold: 150 },
    ];

    const chart = new F2.Chart({
      id: 'c2',
      pixelRatio: this.pixel, // 指定分辨率,
      width: this.width
    });
    // load the data
    chart.source(data);
    // draw a column chart
    chart.interval().position('genre*sold').color('genre');
    chart.render();
  }

  fetchData() {
    window.fetch("/assets/data/line.json").then(res => res.json()).then(
      data => {
        this.renderChart2(data)
        this.renderChart();
        this.renderChart3();
        this.render4();
      }
    )
  }

  renderChart2(data: any) {
    var chart = new F2.Chart({
      id: 'c4',
      pixelRatio: this.pixel,
      width: this.width
    });
    chart.source(data);
    chart.scale('date', {
      type: 'timeCat',
      tickCount: 3
    });
    chart.scale('value', {
      tickCount: 5
    });
    chart.axis('date', {
      label: function label(text, index, total) {
        // 只显示每一年的第一天
        var textCfg: any = {};
        if (index === 0) {
          textCfg.textAlign = 'left';
        } else if (index === total - 1) {
          textCfg.textAlign = 'right';
        }
        return textCfg;
      }
    });
    chart.tooltip({
      custom: true, // 自定义 tooltip 内容框
      onChange: function onChange(obj) {
        var legend = chart.get('legendController').legends.top[0];
        var tooltipItems = obj.items;
        var legendItems = legend.items;
        var map = {};
        legendItems.map(function(item) {
          map[item.name] = _.clone(item);
        });
        tooltipItems.map(function(item) {
          var name = item.name;
          var value = item.value;
          if (map[name]) {
            map[name].value = value;
          }
        });
        legend.setItems(_.values(map));
      },
      onHide: function onHide() {
        var legend = chart.get('legendController').legends.top[0];
        legend.setItems(chart.getLegendItems().country);
      }
    });
    chart.line().position('date*value').color('type');
    chart.render();
  }

  renderChart3() {
    var data = [{
      item: 'Design',
      user: '用户 A',
      score: 70
    }, {
      item: 'Design',
      user: '用户 B',
      score: 30
    }, {
      item: 'Development',
      user: '用户 A',
      score: 60
    }, {
      item: 'Development',
      user: '用户 B',
      score: 70
    }, {
      item: 'Marketing',
      user: '用户 A',
      score: 50
    }, {
      item: 'Marketing',
      user: '用户 B',
      score: 60
    }, {
      item: 'Users',
      user: '用户 A',
      score: 40
    }, {
      item: 'Users',
      user: '用户 B',
      score: 50
    }, {
      item: 'Test',
      user: '用户 A',
      score: 60
    }, {
      item: 'Test',
      user: '用户 B',
      score: 70
    }, {
      item: 'Language',
      user: '用户 A',
      score: 70
    }, {
      item: 'Language',
      user: '用户 B',
      score: 50
    }, {
      item: 'Technology',
      user: '用户 A',
      score: 70
    }, {
      item: 'Technology',
      user: '用户 B',
      score: 40
    }, {
      item: 'Support',
      user: '用户 A',
      score: 60
    }, {
      item: 'Support',
      user: '用户 B',
      score: 40
    }];
    var chart = new F2.Chart({
      id: 'c3',
      pixelRatio: this.pixel,
      width: this.width
    });

    chart.coord('polar');
    chart.source(data, {
      score: {
        min: 0,
        max: 120,
        nice: false,
        tickCount: 4
      }
    });
    chart.tooltip({
      custom: true, // 自定义 tooltip 内容框
      onChange: function onChange(obj) {
        var legend = chart.get('legendController').legends.top[0];
        var tooltipItems = obj.items;
        var legendItems = legend.items;
        var map = {};
        legendItems.map(function(item) {
          map[item.name] = _.clone(item);
        });
        tooltipItems.map(function(item) {
          var name = item.name;
          var value = item.value;
          if (map[name]) {
            map[name].value = value;
          }
        });
        legend.setItems(_.values(map));
      },
      onHide: function onHide() {
        var legend = chart.get('legendController').legends.top[0];
        legend.setItems(chart.getLegendItems().country);
      }
    });
    chart.axis('score', {
      label: function label(text, index, total) {
        if (index === total - 1) {
          return null;
        }
        return {
          top: true
        };
      },
      grid: {
        lineDash: null,
        type: 'arc' // 弧线网格
      }
    });
    chart.axis('item', {
      grid: {
        lineDash: null
      }
    });
    chart.line().position('item*score').color('user');
    chart.point().position('item*score').color('user').style({
      stroke: '#fff',
      lineWidth: 1
    });
    chart.render();
  }

  render4() {
    var data = [{
      time: '周一',
      tem: 6.9,
      rain: 10
    }, {
      time: '周二',
      tem: 9.5,
      rain: 13
    }, {
      time: '周三',
      tem: 14.5,
      rain: 14
    }, {
      time: '周四',
      tem: 18.2,
      rain: 10
    }, {
      time: '周五',
      tem: 21.5,
      rain: 12
    }, {
      time: '周六',
      tem: 25.2,
      rain: 16
    }, {
      time: '周日',
      tem: 26.5,
      rain: 13
    }];
    var chart = new F2.Chart({
      id: 'c1',
      syncY: true,
      pixelRatio: this.pixel,
      width: this.width
    });

    chart.source(data);
    chart.tooltip({
      showCrosshairs: true,
      crosshairsStyle: {
        stroke: '#1890ff'
      },
      background: {
        fill: '#1890ff'
      },
      nameStyle: {
        fill: '#fff'
      },
      onShow: function onShow(ev) {
        ev.items.pop(); // 将重复的去除
      }
    });
    chart.axis('time', {
      grid: null
    });
    chart.axis('rain', false);

    chart.interval().position('time*tem');
    chart.line().position('time*rain').color('#5ed470').shape('smooth');
    chart.point().position('time*rain').style({
      stroke: '#5ed470',
      fill: '#fff',
      lineWidth: 2
    });

    // 绘制辅助线
    chart.guide().line({
      start: function start(xScale, yScales) {
        var sum = 0;
        var yScale = yScales[1];
        yScale.values.forEach(function(v) {
          sum += v;
        });
        return ['min', sum / yScale.values.length];
      },
      end: function end(xScale, yScales) {
        var sum = 0;
        var yScale = yScales[1];
        yScale.values.forEach(function(v) {
          sum += v;
        });

        return ['max', sum / yScale.values.length];
      },
      style: {
        stroke: '#808080', // 线的颜色
        lineDash: [0, 2, 2], // 虚线的设置
        lineWidth: 1 // 线的宽度
        // 图形样式配置
      }
    });
    chart.guide().text({
      position: function position(xScale, yScales) {
        var sum = 0;
        var yScale = yScales[1];
        yScale.values.forEach(function(v) {
          sum += v;
        });
        return ['min', sum / yScale.values.length];
      },
      content: '平均降雨量',
      style: {
        textAlign: 'start',
        textBaseline: 'bottom',
        fill: '#808080'
      },
      offsetY: -5
    });
    chart.render();
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var BMap: any;
declare var BMAP_NORMAL_MAP: any;
declare var BMAP_HYBRID_MAP: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  getData() {
    this.getGeoLocation().then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }

  getGeoLocation(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve({
              code: 1,
              data: {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                timestamp: position.timestamp,
                accuracy: position.coords.accuracy
              }
            })
          },
          (error: any) => {
            switch (error.code) {
              case error.PERMISSION_DENIED:
                reject({
                  code: 2,
                  data: "不允许使用地理定位"
                });
                break;
              case error.POSITION_UNAVAILABLE:
                reject({
                  code: 3,
                  data: "获取不到地理信息"
                });
                break;
              case error.TIMEOUT:
                reject({
                  code: 4,
                  data: "获取位置超时"
                });
                break;
              case error.UNKNOWN_ERR:
                reject({
                  code: 5,
                  data: "未知错误"
                });
                break;
            }
          },
          {
            enableHighAccuracy: true,
            timeout: 8000,
            maximumAge: 8000
          }
        );
      } else {
        reject({ code: 6, message: "你的浏览器不支持地理定位" })
      }
    });
  }

  renderMap() {
    // 百度地图API功能
    const map = new BMap.Map("container");    // 创建Map实例
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
    //添加地图类型控件
    map.addControl(new BMap.MapTypeControl({
      mapTypes:[
              BMAP_NORMAL_MAP,
              BMAP_HYBRID_MAP
          ]}));
    map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
  }
}

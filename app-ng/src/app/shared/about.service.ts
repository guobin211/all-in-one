import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor() { }

  public getGeoLocation(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve({
              code: 1,
              data: {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                altitude: position.coords.altitude,
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
            timeout: 4000,
            maximumAge: 8000
          }
        );
      } else {
        reject({ code: 6, message: "你的浏览器不支持地理定位" })
      }
    });
  }

}
